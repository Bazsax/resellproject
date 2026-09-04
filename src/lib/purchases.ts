import { clerkClient } from "@clerk/nextjs/server";
import {
  ENTITLEMENT_META_KEY,
  EntitlementId,
  checkoutProductToEntitlement,
  expandEntitlements,
  normalizeEmail,
  parseEntitlementList,
  serializeEntitlements,
} from "@/lib/entitlements";
import { getStripe, type CheckoutProductKey } from "@/lib/stripe";

async function findStripeCustomerByEmail(email: string) {
  const stripe = getStripe();
  const normalized = normalizeEmail(email);
  const existing = await stripe.customers.list({
    email: normalized,
    limit: 1,
  });
  return existing.data[0] ?? null;
}

export async function getEntitlementsForEmail(
  email: string
): Promise<EntitlementId[]> {
  const customer = await findStripeCustomerByEmail(email);
  if (!customer) return [];
  return parseEntitlementList(customer.metadata?.[ENTITLEMENT_META_KEY]);
}

async function setStripeCustomerEntitlements(
  email: string,
  products: EntitlementId[],
  sessionId?: string
) {
  const stripe = getStripe();
  const normalized = normalizeEmail(email);
  const serialized = serializeEntitlements(products);
  const customer = await findStripeCustomerByEmail(normalized);

  if (customer) {
    return stripe.customers.update(customer.id, {
      metadata: {
        ...customer.metadata,
        [ENTITLEMENT_META_KEY]: serialized,
        ...(sessionId ? { last_checkout_session: sessionId } : {}),
      },
    });
  }

  return stripe.customers.create({
    email: normalized,
    metadata: {
      [ENTITLEMENT_META_KEY]: serialized,
      ...(sessionId ? { last_checkout_session: sessionId } : {}),
    },
  });
}

async function findClerkUserIdByEmail(email: string): Promise<string | null> {
  const client = await clerkClient();
  const result = await client.users.getUserList({
    emailAddress: [normalizeEmail(email)],
    limit: 1,
  });
  return result.data[0]?.id ?? null;
}

export async function applyEntitlementsToClerkUser(
  userId: string,
  products: EntitlementId[]
): Promise<EntitlementId[]> {
  const client = await clerkClient();
  const user = await client.users.getUser(userId);
  const existing = parseEntitlementList(
    (user.publicMetadata as Record<string, unknown> | undefined)?.[
      ENTITLEMENT_META_KEY
    ]
  );
  const merged = expandEntitlements([...existing, ...products]);

  await client.users.updateUserMetadata(userId, {
    publicMetadata: {
      ...user.publicMetadata,
      [ENTITLEMENT_META_KEY]: merged,
    },
  });

  return merged;
}

/**
 * Persist a paid checkout by email (guest-friendly), then sync Clerk if that
 * email already has an account.
 */
export async function recordPurchase(options: {
  email: string;
  product: CheckoutProductKey;
  sessionId: string;
}): Promise<EntitlementId[]> {
  const entitlement = checkoutProductToEntitlement(options.product);
  const toGrant: EntitlementId[] =
    entitlement === "masterclass"
      ? ["masterclass", "starterpack"]
      : ["starterpack"];

  const current = await getEntitlementsForEmail(options.email);
  const merged = expandEntitlements([...current, ...toGrant]);
  await setStripeCustomerEntitlements(
    options.email,
    merged,
    options.sessionId
  );

  const userId = await findClerkUserIdByEmail(options.email);
  if (userId) {
    await applyEntitlementsToClerkUser(userId, merged);
  }

  return merged;
}

/** Pull Stripe purchases for the user's emails into Clerk publicMetadata. */
export async function syncClerkUserEntitlements(
  userId: string
): Promise<EntitlementId[]> {
  const client = await clerkClient();
  const user = await client.users.getUser(userId);
  const emails = user.emailAddresses.map((e) => e.emailAddress);

  const fromStripe = new Set<EntitlementId>();
  for (const email of emails) {
    for (const product of await getEntitlementsForEmail(email)) {
      fromStripe.add(product);
    }
  }

  const existing = parseEntitlementList(
    (user.publicMetadata as Record<string, unknown> | undefined)?.[
      ENTITLEMENT_META_KEY
    ]
  );
  const merged = expandEntitlements([...existing, ...fromStripe]);

  const same =
    merged.length === existing.length &&
    merged.every((p) => existing.includes(p));

  if (!same) {
    await client.users.updateUserMetadata(userId, {
      publicMetadata: {
        ...user.publicMetadata,
        [ENTITLEMENT_META_KEY]: merged,
      },
    });
  }

  return merged;
}

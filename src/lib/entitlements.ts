import type { CheckoutProductKey } from "@/lib/stripe";

/** Durable product entitlements (stored on Stripe customer + Clerk publicMetadata). */
export type EntitlementId = "starterpack" | "masterclass";

export type RadarAccess = "none" | "starterpack" | "masterclass";

export const ENTITLEMENT_META_KEY = "products";

export function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

export function checkoutProductToEntitlement(
  key: CheckoutProductKey
): EntitlementId {
  return key === "masterclass" ? "masterclass" : "starterpack";
}

/** Masterclass includes Starterpack-level radar access. */
export function expandEntitlements(
  products: Iterable<EntitlementId>
): EntitlementId[] {
  const set = new Set<EntitlementId>(products);
  if (set.has("masterclass")) set.add("starterpack");
  return [...set];
}

export function parseEntitlementList(raw: unknown): EntitlementId[] {
  const parts: string[] = [];
  if (typeof raw === "string") {
    parts.push(...raw.split(/[,|\s]+/));
  } else if (Array.isArray(raw)) {
    for (const item of raw) {
      if (typeof item === "string") parts.push(item);
    }
  }

  const set = new Set<EntitlementId>();
  for (const part of parts) {
    const p = part.trim().toLowerCase();
    if (p === "starterpack" || p === "guide") set.add("starterpack");
    if (p === "masterclass") set.add("masterclass");
  }
  return expandEntitlements(set);
}

export function serializeEntitlements(products: EntitlementId[]): string {
  return expandEntitlements(products).sort().join(",");
}

export function resolveRadarAccess(products: EntitlementId[]): RadarAccess {
  const expanded = expandEntitlements(products);
  if (expanded.includes("masterclass")) return "masterclass";
  if (expanded.includes("starterpack")) return "starterpack";
  return "none";
}

export function entitlementsFromClerkMetadata(
  publicMetadata: Record<string, unknown> | null | undefined
): EntitlementId[] {
  if (!publicMetadata) return [];
  return parseEntitlementList(publicMetadata[ENTITLEMENT_META_KEY]);
}

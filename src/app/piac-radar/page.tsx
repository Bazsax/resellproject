import { auth, currentUser } from "@clerk/nextjs/server";
import {
  entitlementsFromClerkMetadata,
  resolveRadarAccess,
} from "@/lib/entitlements";
import { syncClerkUserEntitlements } from "@/lib/purchases";
import { PiacRadarClient } from "./PiacRadarClient";

export default async function PiacRadarPage() {
  const { userId } = await auth();

  let access = resolveRadarAccess([]);

  if (userId) {
    try {
      const products = await syncClerkUserEntitlements(userId);
      access = resolveRadarAccess(products);
    } catch (err) {
      console.error("Piac radar entitlement sync failed:", err);
      const user = await currentUser();
      access = resolveRadarAccess(
        entitlementsFromClerkMetadata(
          user?.publicMetadata as Record<string, unknown> | undefined
        )
      );
    }
  }

  return <PiacRadarClient access={access} signedIn={!!userId} />;
}

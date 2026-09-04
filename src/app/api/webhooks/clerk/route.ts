import { verifyWebhook } from "@clerk/nextjs/webhooks";
import { NextRequest } from "next/server";
import { syncClerkUserEntitlements } from "@/lib/purchases";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  let evt;
  try {
    evt = await verifyWebhook(req);
  } catch (err) {
    console.error("Clerk webhook verification failed:", err);
    return new Response("Verification failed", { status: 400 });
  }

  if (evt.type === "user.created" || evt.type === "user.updated") {
    try {
      await syncClerkUserEntitlements(evt.data.id);
    } catch (err) {
      console.error("Failed to sync entitlements for", evt.data.id, err);
      return new Response("Entitlement sync failed", { status: 500 });
    }
  }

  return new Response("OK", { status: 200 });
}

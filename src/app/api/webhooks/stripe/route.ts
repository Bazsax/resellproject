import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getStripe, type CheckoutProductKey } from "@/lib/stripe";
import { recordPurchase } from "@/lib/purchases";
import {
  buildGuideAccessEmailHtml,
  buildGuideAccessEmailText,
} from "@/lib/emails/guide-access";
import type Stripe from "stripe";

export const runtime = "nodejs";

function resolveCheckoutProduct(
  session: Stripe.Checkout.Session
): CheckoutProductKey {
  return session.metadata?.product === "masterclass" ? "masterclass" : "guide";
}

async function sendGuideAccessEmail(to: string, sessionId: string) {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  const guideUrl = process.env.GUIDE_ACCESS_URL;

  const missing: string[] = [];
  if (!apiKey) missing.push("RESEND_API_KEY");
  if (!fromEmail) missing.push("RESEND_FROM_EMAIL");
  if (!guideUrl) missing.push("GUIDE_ACCESS_URL");

  if (missing.length > 0) {
    throw new Error(`Hiányzó env: ${missing.join(", ")}`);
  }

  const resend = new Resend(apiKey!);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const emailProps = { guideUrl: guideUrl!, sessionId, siteUrl };

  const html = buildGuideAccessEmailHtml(emailProps);
  const text = buildGuideAccessEmailText(emailProps);

  const { data, error } = await resend.emails.send({
    from: fromEmail!,
    to: [to],
    subject: "[Direct Supply] Az útmutató hozzáférésed",
    html,
    text,
  });

  if (error) {
    console.error("Resend guide email error:", error);
    throw new Error(
      `Resend hiba: ${typeof error === "object" && error && "message" in error ? String((error as { message: string }).message) : JSON.stringify(error)}`
    );
  }

  console.log("Guide email sent:", data?.id, "to", to);

  const notifyTo =
    process.env.SALES_NOTIFICATION_EMAIL ||
    process.env.SOURCING_NOTIFICATION_EMAIL;

  if (notifyTo) {
    const notify = await resend.emails.send({
      from: fromEmail!,
      to: [notifyTo],
      subject: `[Direct Supply] Új útmutató vásárlás – ${to}`,
      html: `<p>Új vásárlás: <strong>${to}</strong></p><p>Session: ${sessionId}</p>`,
    });
    if (notify.error) {
      console.error("Sales notify email failed (non-fatal):", notify.error);
    }
  }
}

export async function POST(request: Request) {
  let stripe;
  try {
    stripe = getStripe();
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "STRIPE_SECRET_KEY missing" },
      { status: 500 }
    );
  }

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!webhookSecret) {
    console.error("STRIPE_WEBHOOK_SECRET missing");
    return NextResponse.json(
      { error: "STRIPE_WEBHOOK_SECRET missing" },
      { status: 500 }
    );
  }

  const signature = request.headers.get("stripe-signature");
  if (!signature) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  const body = await request.text();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    if (session.payment_status === "paid") {
      const email =
        session.customer_details?.email ||
        session.customer_email ||
        null;

      if (!email) {
        console.error("Paid session without customer email:", session.id);
        return NextResponse.json(
          { error: "No customer email on session" },
          { status: 500 }
        );
      }

      const product = resolveCheckoutProduct(session);

      try {
        await recordPurchase({
          email,
          product,
          sessionId: session.id,
        });
      } catch (err) {
        const detail = err instanceof Error ? err.message : String(err);
        console.error("Failed to record purchase entitlement:", detail);
        return NextResponse.json(
          { error: "Entitlement record failed", detail },
          { status: 500 }
        );
      }

      // Digital guide delivery (Starterpack / guide checkout only)
      if (product === "guide") {
        try {
          await sendGuideAccessEmail(email, session.id);
        } catch (err) {
          const detail = err instanceof Error ? err.message : String(err);
          console.error("Failed to deliver guide after payment:", detail);
          return NextResponse.json(
            { error: "Delivery failed", detail },
            { status: 500 }
          );
        }
      }
    }
  }

  return NextResponse.json({ received: true });
}

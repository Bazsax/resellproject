import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getStripe } from "@/lib/stripe";
import type Stripe from "stripe";

export const runtime = "nodejs";

async function sendGuideAccessEmail(to: string, sessionId: string) {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  const guideUrl = process.env.GUIDE_ACCESS_URL;

  if (!apiKey || !fromEmail || !guideUrl) {
    console.error("Missing Resend or GUIDE_ACCESS_URL configuration");
    throw new Error("Email delivery not configured");
  }

  const resend = new Resend(apiKey);

  const html = `
    <h2>Köszönjük a vásárlást – EgyPerEgy</h2>
    <p>Sikeresen megvásároltad az <strong>Az Első Millió – Replica Reselling Útmutató</strong> digitális anyagát.</p>
    <p>A hozzáférési linked (Google Docs / dokumentum):</p>
    <p><a href="${guideUrl}">${guideUrl}</a></p>
    <p style="margin-top:24px;font-size:13px;color:#666;">
      Mentésed: mentésd el ezt az e-mailt. A link a vásárlásodhoz tartozik.
      Rendelési azonosító: <code>${sessionId}</code>
    </p>
    <p style="font-size:13px;color:#666;">Ha nem te vásároltál, jelezd nekünk.</p>
  `;

  const { error } = await resend.emails.send({
    from: fromEmail,
    to,
    subject: "[EgyPerEgy] Az útmutató hozzáférésed",
    html,
  });

  if (error) {
    console.error("Resend guide email error:", error);
    throw new Error("Failed to send guide email");
  }

  // Optional: notify you about the sale
  const notifyTo =
    process.env.SALES_NOTIFICATION_EMAIL ||
    process.env.SOURCING_NOTIFICATION_EMAIL;
  if (notifyTo) {
    await resend.emails.send({
      from: fromEmail,
      to: notifyTo,
      subject: `[EgyPerEgy] Új útmutató vásárlás – ${to}`,
      html: `<p>Új vásárlás: <strong>${to}</strong></p><p>Session: ${sessionId}</p>`,
    });
  }
}

export async function POST(request: Request) {
  const stripe = getStripe();
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!webhookSecret) {
    console.error("STRIPE_WEBHOOK_SECRET missing");
    return NextResponse.json({ error: "Webhook not configured" }, { status: 500 });
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

      if (email) {
        try {
          await sendGuideAccessEmail(email, session.id);
        } catch (err) {
          console.error("Failed to deliver guide after payment:", err);
          // Return 500 so Stripe retries the webhook
          return NextResponse.json({ error: "Delivery failed" }, { status: 500 });
        }
      } else {
        console.error("Paid session without customer email:", session.id);
      }
    }
  }

  return NextResponse.json({ received: true });
}

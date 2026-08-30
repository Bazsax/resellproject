import { NextResponse } from "next/server";
import { getStripe, GUIDE_PRICE_HUF, GUIDE_NAME } from "@/lib/stripe";

export async function POST() {
  try {
    const stripe = getStripe();
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

    if (!siteUrl) {
      return NextResponse.json(
        { error: "NEXT_PUBLIC_SITE_URL nincs beállítva." },
        { status: 500 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "huf",
            unit_amount: GUIDE_PRICE_HUF,
            product_data: {
              name: GUIDE_NAME,
              description:
                "Digitális útmutató – azonnali hozzáférés e-mailben a sikeres fizetés után.",
            },
          },
        },
      ],
      success_url: `${siteUrl}/vasarlas/sikeres?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/vasarlas/cancelled`,
      customer_email: undefined,
      billing_address_collection: "auto",
      allow_promotion_codes: true,
      metadata: {
        product: "guide",
      },
    });

    if (!session.url) {
      return NextResponse.json(
        { error: "Nem sikerült létrehozni a fizetési munkamenetet." },
        { status: 500 }
      );
    }

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Checkout error:", err);
    return NextResponse.json(
      { error: "A fizetés indítása sikertelen." },
      { status: 500 }
    );
  }
}

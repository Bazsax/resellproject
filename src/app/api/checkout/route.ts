import { NextResponse } from "next/server";
import { getStripe, getCheckoutProduct, type CheckoutProductKey } from "@/lib/stripe";

export async function POST(request: Request) {
  try {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
    if (!siteUrl) {
      return NextResponse.json(
        { error: "Hiányzó env: NEXT_PUBLIC_SITE_URL (redeploy kell Vercelen)." },
        { status: 500 }
      );
    }

    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: "Hiányzó env: STRIPE_SECRET_KEY (redeploy kell Vercelen)." },
        { status: 500 }
      );
    }

    let productKey: CheckoutProductKey = "guide";
    try {
      const body = await request.json();
      if (body?.product === "masterclass") productKey = "masterclass";
    } catch {
      // empty body → default guide
    }

    const product = getCheckoutProduct(productKey);
    const stripe = getStripe();

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "huf",
            unit_amount: product.amount,
            product_data: {
              name: product.name,
              description: product.description,
            },
          },
        },
      ],
      success_url: `${siteUrl}/vasarlas/sikeres?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/vasarlas/cancelled`,
      billing_address_collection: "auto",
      allow_promotion_codes: true,
      metadata: {
        product: product.key,
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
    const message =
      err instanceof Error ? err.message : "A fizetés indítása sikertelen.";
    return NextResponse.json(
      {
        error:
          process.env.NODE_ENV === "development"
            ? message
            : `A fizetés indítása sikertelen. (${message.slice(0, 120)})`,
      },
      { status: 500 }
    );
  }
}

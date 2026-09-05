import Stripe from "stripe";

export function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    throw new Error("STRIPE_SECRET_KEY is not configured");
  }
  return new Stripe(key);
}

/** Display price in forints. */
export const GUIDE_PRICE_HUF = 990;
export const GUIDE_NAME = "Az Első Millió – Reselling Starterpack";

/**
 * Stripe amount for Checkout.
 * This account treats HUF as two-decimal (100 units = 1.00 Ft),
 * so 990 Ft → unit_amount 99000.
 */
export const GUIDE_STRIPE_AMOUNT = GUIDE_PRICE_HUF * 100;

export const MASTERCLASS_PRICE_HUF = 49990;
export const MASTERCLASS_NAME = "100 fillérből 100 Millió – Reselling Masterclass";
export const MASTERCLASS_STRIPE_AMOUNT = MASTERCLASS_PRICE_HUF * 100;

export type CheckoutProductKey = "guide" | "masterclass";

export function getCheckoutProduct(key: CheckoutProductKey) {
  if (key === "masterclass") {
    return {
      key: "masterclass" as const,
      name: MASTERCLASS_NAME,
      amount: MASTERCLASS_STRIPE_AMOUNT,
      description:
        "Teljes reselling masterclass – beszállítói listák, útmutatók és birodalom-építő rendszer. Azonnali hozzáférés e-mailben.",
    };
  }
  return {
    key: "guide" as const,
    name: GUIDE_NAME,
    amount: GUIDE_STRIPE_AMOUNT,
    description:
      "Digitális útmutató – azonnali hozzáférés e-mailben a sikeres fizetés után.",
  };
}

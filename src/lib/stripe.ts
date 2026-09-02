import Stripe from "stripe";

export function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    throw new Error("STRIPE_SECRET_KEY is not configured");
  }
  return new Stripe(key);
}

/** Display price in forints. */
export const GUIDE_PRICE_HUF = 1000;
export const GUIDE_NAME = "Az Első Millió – Reselling Starterpack";

/**
 * Stripe amount for Checkout.
 * This account treats HUF as two-decimal (100 units = 1.00 Ft),
 * so 1 000 Ft → unit_amount 100000.
 */
export const GUIDE_STRIPE_AMOUNT = GUIDE_PRICE_HUF * 100;

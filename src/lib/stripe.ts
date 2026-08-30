import Stripe from "stripe";

export function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    throw new Error("STRIPE_SECRET_KEY is not configured");
  }
  return new Stripe(key);
}

/** Guide price in HUF (Stripe zero-decimal currency — no * 100). */
export const GUIDE_PRICE_HUF = 14990;
export const GUIDE_NAME = "Az Első Millió – Replica Reselling Útmutató";

import Stripe from "stripe";

export function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    throw new Error("STRIPE_SECRET_KEY is not configured");
  }
  return new Stripe(key);
}

/** Guide price in HUF (zero-decimal: 1000 = 1000 Ft). Stripe min ≈ 175 Ft. */
export const GUIDE_PRICE_HUF = 1000;
export const GUIDE_NAME = "Az Első Millió – Replica Reselling Útmutató";
export const GUIDE_STRIPE_AMOUNT = Math.max(GUIDE_PRICE_HUF, 175);

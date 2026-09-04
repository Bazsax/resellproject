import { huHU } from "@clerk/localizations";

/** Hungarian Clerk copy with Direct Supply overrides. */
export const clerkLocalization = {
  ...huHU,
  socialButtonsBlockButton: "Login with Google",
  signIn: {
    ...huHU.signIn,
    start: {
      ...huHU.signIn.start,
      title: "Bejelentkezés",
      titleCombined: "Bejelentkezés",
      subtitle: "Szia! A folytatáshoz jelentkezz be.",
    },
  },
};

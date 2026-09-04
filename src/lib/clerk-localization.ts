import { huHU } from "@clerk/localizations";

/** Hungarian Clerk copy with Direct Supply overrides. */
export const clerkLocalization = {
  ...huHU,
  // Works for Google, Apple, and any other enabled OAuth provider.
  socialButtonsBlockButton: "Login with {{provider|titleize}}",
  socialButtonsBlockButtonManyInView: "{{provider|titleize}}",
  signIn: {
    ...huHU.signIn,
    start: {
      ...huHU.signIn?.start,
      title: "Bejelentkezés",
      titleCombined: "Bejelentkezés",
      subtitle: "Szia! A folytatáshoz jelentkezz be.",
    },
  },
  unstable__errors: {
    ...huHU.unstable__errors,
    // Matches Clerk Dashboard: min password length = 8 (HIBP breach check disabled there).
    form_password_length_too_short:
      "A jelszavad túl rövid. Legalább 8 karakter hosszúnak kell lennie.",
    passwordComplexity: {
      ...huHU.unstable__errors?.passwordComplexity,
      minimumLength: "legalább {{length}} karaktert",
      sentencePrefix: "A jelszavadnak tartalmaznia kell",
    },
  },
};

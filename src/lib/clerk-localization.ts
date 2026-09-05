import { huHU } from "@clerk/localizations";
import { BRAND_NAME } from "@/lib/brand";

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
    emailCode: {
      ...huHU.signIn?.emailCode,
      subtitle: `hogy folytathasd a(z) ${BRAND_NAME}`,
    },
  },
  signUp: {
    ...huHU.signUp,
    start: {
      ...huHU.signUp?.start,
      subtitle: `Amivel folytathatod a(z) ${BRAND_NAME}`,
      subtitleCombined: `Amivel folytathatod a(z) ${BRAND_NAME}`,
    },
    emailCode: {
      ...huHU.signUp?.emailCode,
      subtitle: `hogy folytathasd a(z) ${BRAND_NAME}`,
    },
  },
  userProfile: {
    ...huHU.userProfile,
    deletePage: {
      ...huHU.userProfile?.deletePage,
      // Official huHU still says "Delete account" here; confirmation expects "Fiók törlése".
      actionDescription: 'Írd be, hogy "Fiók törlése" a folytatáshoz.',
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

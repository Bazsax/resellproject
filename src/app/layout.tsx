import type { Metadata } from "next";
import localFont from "next/font/local";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { OrderModal } from "@/components/OrderModal";
import { clerkLocalization } from "@/lib/clerk-localization";

const antrySans = localFont({
  src: [
    {
      path: "../../public/fonts/AntrySans/AntrySans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/AntrySans/AntrySans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-antry",
  display: "swap",
});

const nekst = localFont({
  src: [
    {
      path: "../../public/fonts/Nekst/Nekst-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/Nekst/Nekst-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Nekst/Nekst-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Nekst/Nekst-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Nekst/Nekst-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Nekst/Nekst-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Nekst/Nekst-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-nekst",
  display: "swap",
});

const sora = localFont({
  src: [
    {
      path: "../../public/fonts/Sora/Sora-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Direct Supply | Digitális Resell Termékek & Egyedi Beszerzés",
  description:
    "Útmutatók, beszállítói listák és resell starterpackok azonnali letöltéssel. Egyedi 1/1 prémium termék beszerzés a legjobb áron – directsupply.hu",
  keywords: [
    "resell útmutató",
    "reselling starterpack",
    "digitális beszállítói lista",
    "direct supply",
    "egyedi beszerzés",
    "cipő viszonteladás",
    "directsupply.hu",
  ],
  authors: [{ name: "Direct Supply" }],
  metadataBase: new URL("https://directsupply.hu"),
  openGraph: {
    title: "Direct Supply | Digitális Resell & Beszerzés",
    description:
      "Digitális resell termékek és prémium egyedi beszerzés – directsupply.hu",
    type: "website",
    locale: "hu_HU",
    url: "https://directsupply.hu",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="hu"
      className={`${sora.variable} ${antrySans.variable} ${nekst.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#09090b] text-[#f4f4f5] font-sans selection:bg-[#ccff00] selection:text-black">
        <ClerkProvider
          localization={clerkLocalization}
          appearance={{
            variables: {
              colorPrimary: "#ccff00",
              colorPrimaryForeground: "#000000",
              colorBackground: "#121214",
              colorForeground: "#f4f4f5",
              colorMutedForeground: "#a1a1aa",
              colorInput: "#09090b",
              colorInputForeground: "#f4f4f5",
              colorNeutral: "#ffffff",
              borderRadius: "0.75rem",
            },
            elements: {
              modalBackdrop:
                "!fixed !inset-0 !flex !items-center !justify-center !bg-black/85 !backdrop-blur-[10px]",
              modalContent: "!m-0 !self-center",
            },
          }}
        >
          <CartProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <CartDrawer />
            <OrderModal />
          </CartProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}

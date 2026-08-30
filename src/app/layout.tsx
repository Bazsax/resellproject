import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { OrderModal } from "@/components/OrderModal";

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
  title: "EgyPerEgy | 1/1 Prémium Cipő, Ruha Beszerzés & Resell Útmutató 2026",
  description: "A legmagasabb minőségű 1/1 prémium sneakerek, streetwear ruházat, órák és táskák beszerzési közvetítése. Digitális Resell Masterclass 2026 kézikönyv és gyári beszállítói kontaktok azonnali letöltéssel.",
  keywords: [
    "resell útmutató",
    "sneaker beszerzés",
    "1/1 replika",
    "supreme dunk",
    "jordan 4 military black",
    "trapstar puffer",
    "gumroad resell guide",
    "cipő viszonteladás",
    "egyperegy"
  ],
  authors: [{ name: "EgyPerEgy" }],
  openGraph: {
    title: "EgyPerEgy | 1/1 Prémium Cipő & Resell Útmutató",
    description: "Prémium minőségű beszerzés és hivatalos digitális viszonteladási útmutató gyári kontaktokkal.",
    type: "website",
    locale: "hu_HU",
  }
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
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartDrawer />
          <OrderModal />
        </CartProvider>
      </body>
    </html>
  );
}

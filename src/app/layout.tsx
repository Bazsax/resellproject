import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { OrderModal } from "@/components/OrderModal";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LOGO IDE | 1/1 Prémium Cipő, Ruha Beszerzés & Resell Útmutató 2026",
  description: "A legmagasabb minőségű 1/1 prémium sneakerek, streetwear ruházat, órák és táskák beszerzési közvetítése. Digitális Resell Masterclass 2026 kézikönyv és gyári beszállítói kontaktok azonnali letöltéssel.",
  keywords: [
    "resell útmutató",
    "sneaker beszerzés",
    "1/1 replika",
    "supreme dunk",
    "jordan 4 military black",
    "trapstar puffer",
    "gumroad resell guide",
    "cipő viszonteladás"
  ],
  authors: [{ name: "LOGO IDE / Resell Hub" }],
  openGraph: {
    title: "LOGO IDE | 1/1 Prémium Cipő & Resell Útmutató",
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
    <html lang="hu" className={`${inter.variable} ${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#09090b] text-[#f4f4f5] selection:bg-[#ccff00] selection:text-black">
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

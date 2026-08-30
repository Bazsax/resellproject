"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  X, 
  Search, 
  ShoppingBag, 
  Flame, 
  FileText, 
  Sparkles, 
  Send,
  ArrowRight,
  ShieldCheck,
  ChevronRight
} from "lucide-react";
import { InstagramIcon } from "@/components/SocialIcons";
import { useCart } from "@/context/CartContext";
import { SearchModal } from "@/components/SearchModal";

export const Header: React.FC = () => {
  const pathname = usePathname();
  const { toggleCart, totalItemsCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);

  const navLinks = [
    { label: "FŐOLDAL", href: "/" },
    { label: "KATALÓGUS", href: "/katalogus" },
    { label: "RESELL ÚTMUTATÓ", href: "/utmutato", isHighlight: true },
    { label: "EGYEDI BESZERZÉS", href: "/egyedi-beszerzes" },
    { label: "MÉRETTÁBLÁZAT", href: "/merettablazat" },
    { label: "GYIK", href: "/gyik" },
    { label: "KAPCSOLAT", href: "/kapcsolat" },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-black/95 backdrop-blur-md border-b border-[#27272a]/80">
        {/* Top Neon Announcement Bar */}
        {bannerVisible && (
          <div className="bg-[#ccff00] text-black py-1.5 px-3 text-center text-xs font-black tracking-wider uppercase flex items-center justify-center relative overflow-hidden">
            <div className="flex items-center gap-2 truncate">
              <span className="inline-block animate-pulse">⚡</span>
              <span className="font-extrabold">ÚJ RESELL DOKUMENTÁCIÓ 2026</span>
              <span className="hidden sm:inline opacity-80">— 25+ Ellenőrzött beszállítóval & Vámolási kisokossal!</span>
              <Link
                href="/utmutato"
                className="ml-2 underline font-black text-black hover:opacity-75 inline-flex items-center"
              >
                MEGNÉZEM <ArrowRight className="w-3 h-3 ml-0.5" />
              </Link>
            </div>
            <button
              onClick={() => setBannerVisible(false)}
              className="absolute right-2 p-1 hover:opacity-60"
              aria-label="Értesítés bezárása"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Main Header Row */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Left Action Icons: Mobile Menu & Search */}
            <div className="flex items-center gap-2 sm:gap-4">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 -ml-2 rounded-lg text-white hover:text-[#ccff00] transition focus:outline-none"
                aria-label="Menü megnyitása"
              >
                <Menu className="w-6 h-6 stroke-[2.5]" />
              </button>
              <button
                onClick={() => setSearchModalOpen(true)}
                className="p-2 rounded-lg text-white hover:text-[#ccff00] transition focus:outline-none"
                aria-label="Keresés megnyitása"
              >
                <Search className="w-6 h-6 stroke-[2.5]" />
              </button>
            </div>

            {/* Center: Brand Logo (Exact typography style from screenshot) */}
            <div className="flex-1 flex justify-center text-center">
              <Link href="/" className="group inline-flex items-center gap-1.5">
                <span className="text-2xl sm:text-3xl font-black tracking-tighter uppercase text-[#ccff00] group-hover:scale-105 transition-transform duration-200 font-display">
                  LOGO IDE
                </span>
              </Link>
            </div>

            {/* Right: Cart Bag & Action */}
            <div className="flex items-center gap-2 sm:gap-4">
              <Link
                href="/utmutato"
                className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#ccff00]/10 text-[#ccff00] border border-[#ccff00]/40 hover:bg-[#ccff00] hover:text-black transition duration-200"
              >
                <Flame className="w-3.5 h-3.5" />
                <span>Útmutató</span>
              </Link>

              <button
                onClick={toggleCart}
                className="relative p-2 -mr-2 rounded-lg text-white hover:text-[#ccff00] transition focus:outline-none group"
                aria-label="Kosár megtekintése"
              >
                <ShoppingBag className="w-6 h-6 stroke-[2.5] group-hover:scale-110 transition" />
                {totalItemsCount > 0 && (
                  <span className="absolute 0 top-1 right-0 w-5 h-5 flex items-center justify-center text-[11px] font-extrabold bg-[#ccff00] text-black rounded-full ring-2 ring-black animate-bounce">
                    {totalItemsCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Desktop Navigation Links Bar */}
          <nav className="hidden md:flex items-center justify-center gap-8 py-2.5 border-t border-[#27272a]/50 text-xs font-bold tracking-wider uppercase">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition-colors py-1 relative ${
                    item.isHighlight
                      ? "text-[#ccff00] hover:text-white font-extrabold flex items-center gap-1"
                      : isActive
                      ? "text-white border-b-2 border-[#ccff00]"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {item.isHighlight && <Sparkles className="w-3 h-3 text-[#ccff00]" />}
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="relative w-full max-w-xs bg-[#0f0f11] border-r border-[#27272a] h-full flex flex-col p-6 shadow-2xl z-10 animate-in slide-in-from-left duration-300">
            <div className="flex items-center justify-between pb-6 border-b border-[#27272a]">
              <div className="flex items-center gap-2">
                <span className="text-xl font-black tracking-tighter uppercase text-[#ccff00] font-display">
                  LOGO IDE
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 rounded-lg text-zinc-400 hover:text-white"
                aria-label="Menü bezárása"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Quick Sourcing Hero CTA in Drawer */}
            <div className="my-5 p-4 rounded-xl bg-zinc-900/90 border border-[#ccff00]/30 relative overflow-hidden">
              <div className="text-[10px] font-black uppercase tracking-wider text-[#ccff00] flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> 1/1 Sourcing & Resell
              </div>
              <p className="text-xs text-white font-bold mt-1">
                Kérj egyedi ruhát vagy cipőt a legjobb beszállítóktól!
              </p>
              <Link
                href="/egyedi-beszerzes"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-3 block text-center py-2 px-3 text-xs font-black uppercase rounded-lg bg-[#ccff00] text-black hover:bg-[#b3e600]"
              >
                Beszerzés Kérése
              </Link>
            </div>

            {/* Mobile Nav Links */}
            <div className="flex-1 overflow-y-auto space-y-1 py-2">
              <p className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest px-3 mb-2">
                Navigáció
              </p>
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition ${
                    pathname === item.href
                      ? "bg-[#ccff00] text-black"
                      : "text-zinc-300 hover:bg-zinc-800/80 hover:text-white"
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    {item.isHighlight && <Flame className="w-4 h-4 text-[#ccff00]" />}
                    {item.label}
                  </span>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </Link>
              ))}

              <div className="pt-4 mt-4 border-t border-[#27272a]">
                <p className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest px-3 mb-2">
                  Kategóriák
                </p>
                <Link
                  href="/katalogus?kat=sneakers"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 text-xs font-medium text-zinc-300 hover:text-[#ccff00]"
                >
                  👟 Sneakerek (Jordan, Nike, Travis)
                </Link>
                <Link
                  href="/katalogus?kat=streetwear"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 text-xs font-medium text-zinc-300 hover:text-[#ccff00]"
                >
                  👕 Streetwear (Trapstar, Sp5der)
                </Link>
                <Link
                  href="/katalogus?kat=watches"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 text-xs font-medium text-zinc-300 hover:text-[#ccff00]"
                >
                  ⌚ Prémium Órák (Super Clone)
                </Link>
                <Link
                  href="/katalogus?kat=bags"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 text-xs font-medium text-zinc-300 hover:text-[#ccff00]"
                >
                  👜 Táskák & Kiegészítők
                </Link>
              </div>
            </div>

            {/* Social & Contact */}
            <div className="pt-4 border-t border-[#27272a] space-y-3">
              <div className="flex items-center justify-around text-zinc-400">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-zinc-900 hover:text-[#ccff00] hover:bg-zinc-800"
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://t.me"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-zinc-900 hover:text-[#ccff00] hover:bg-zinc-800"
                >
                  <Send className="w-5 h-5" />
                </a>
                <a
                  href="https://gumroad.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-zinc-900 hover:text-[#ccff00] hover:bg-zinc-800"
                >
                  <FileText className="w-5 h-5" />
                </a>
              </div>
              <p className="text-[10px] text-center text-zinc-500 font-medium">
                © 2026 LOGO IDE / Resell Hub HU
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Instant Search Modal */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
      />
    </>
  );
};

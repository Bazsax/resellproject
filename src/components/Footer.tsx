import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { InstagramIcon, TikTokIcon, TelegramIcon } from "@/components/SocialIcons";
import { Logo } from "@/components/Logo";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#ccff00] text-black font-sans">
      {/* Top Main Columns Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-xs">
          {/* Col 1: 1/1 Replikák */}
          <div>
            <h4 className="font-display font-black text-sm uppercase tracking-wider mb-3">
              1/1 REPLIKÁK
            </h4>
            <ul className="space-y-2 font-medium">
              <li>
                <Link href="/katalogus?marka=Jordan" className="hover:underline opacity-90 hover:opacity-100">
                  Jordan
                </Link>
              </li>
              <li>
                <Link href="/katalogus?marka=Nike" className="hover:underline opacity-90 hover:opacity-100">
                  Nike
                </Link>
              </li>
              <li>
                <Link href="/katalogus?marka=NewBalance" className="hover:underline opacity-90 hover:opacity-100">
                  New Balance
                </Link>
              </li>
              <li>
                <Link href="/katalogus?marka=Yeezy" className="hover:underline opacity-90 hover:opacity-100">
                  Yeezy
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Budget Replikák */}
          <div>
            <h4 className="font-display font-black text-sm uppercase tracking-wider mb-3">
              BUDGET REPLIKÁK
            </h4>
            <ul className="space-y-2 font-medium">
              <li>
                <Link href="/katalogus?marka=Jordan" className="hover:underline opacity-90 hover:opacity-100">
                  Jordan
                </Link>
              </li>
              <li>
                <Link href="/katalogus?marka=Nike" className="hover:underline opacity-90 hover:opacity-100">
                  Nike
                </Link>
              </li>
              <li>
                <Link href="/katalogus?marka=NewBalance" className="hover:underline opacity-90 hover:opacity-100">
                  New Balance
                </Link>
              </li>
              <li>
                <Link href="/katalogus?marka=Yeezy" className="hover:underline opacity-90 hover:opacity-100">
                  Yeezy
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Streetwear */}
          <div>
            <h4 className="font-display font-black text-sm uppercase tracking-wider mb-3">
              STREETWEAR
            </h4>
            <ul className="space-y-2 font-medium">
              <li>
                <Link href="/katalogus?kat=streetwear" className="hover:underline opacity-90 hover:opacity-100">
                  FOG
                </Link>
              </li>
              <li>
                <Link href="/katalogus?kat=streetwear" className="hover:underline opacity-90 hover:opacity-100">
                  Essentials
                </Link>
              </li>
              <li>
                <Link href="/katalogus?kat=streetwear" className="hover:underline opacity-90 hover:opacity-100">
                  Sp5der
                </Link>
              </li>
              <li>
                <Link href="/katalogus?kat=streetwear" className="hover:underline opacity-90 hover:opacity-100">
                  Vlone
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Digitális & Útmutatók */}
          <div>
            <h4 className="font-display font-black text-sm uppercase tracking-wider mb-3 flex items-center gap-1">
              DIGITÁLIS FÁJLOK <span className="text-[10px] bg-black text-[#ccff00] px-1.5 py-0.5 rounded font-black font-btn">GUMROAD</span>
            </h4>
            <ul className="space-y-2 font-medium">
              <li>
                <Link href="/utmutato" className="hover:underline opacity-90 hover:opacity-100 font-bold">
                  Resell Masterclass 2026
                </Link>
              </li>
              <li>
                <Link href="/utmutato#beszallitok" className="hover:underline opacity-90 hover:opacity-100">
                  Beszállítói Kontaktok
                </Link>
              </li>
              <li>
                <Link href="/utmutato#vamolas" className="hover:underline opacity-90 hover:opacity-100">
                  Vámolási Kisokos
                </Link>
              </li>
              <li>
                <Link href="/utmutato#vinted" className="hover:underline opacity-90 hover:opacity-100">
                  Vinted & Instagram Stratégia
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Kapcsolat */}
          <div>
            <h4 className="font-display font-black text-sm uppercase tracking-wider mb-3">
              KAPCSOLAT
            </h4>
            <ul className="space-y-2 font-medium">
              <li>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:underline opacity-90 hover:opacity-100 flex items-center gap-1">
                  IG: @resellbolt <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="mailto:info@resellbolt.hu" className="hover:underline opacity-90 hover:opacity-100">
                  Email: info@resellbolt.hu
                </a>
              </li>
              <li>
                <Link href="/merettablazat" className="hover:underline opacity-90 hover:opacity-100">
                  Méretcsere & Garancia
                </Link>
              </li>
              <li>
                <Link href="/egyedi-beszerzes" className="hover:underline opacity-90 hover:opacity-100 font-bold">
                  Egyedi Beszerzés Kérése
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 6: Dokumentumok */}
          <div>
            <h4 className="font-display font-black text-sm uppercase tracking-wider mb-3">
              DOKUMENTUMOK
            </h4>
            <ul className="space-y-2 font-medium">
              <li>
                <Link href="/gyik" className="hover:underline opacity-90 hover:opacity-100">
                  GYIK
                </Link>
              </li>
              <li>
                <Link href="/gyik#visszakuldes" className="hover:underline opacity-90 hover:opacity-100">
                  Visszaküldés
                </Link>
              </li>
              <li>
                <Link href="/merettablazat" className="hover:underline opacity-90 hover:opacity-100">
                  Méretcsere
                </Link>
              </li>
              <li>
                <Link href="/aszf" className="hover:underline opacity-90 hover:opacity-100">
                  ÁSZF
                </Link>
              </li>
              <li>
                <Link href="/adatkezeles" className="hover:underline opacity-90 hover:opacity-100">
                  Adatkezelési Tájékoztató
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Brand & Socials Section with generated Logo */}
        <div className="mt-10 pt-8 border-t border-black/15 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Logo variant="footer" size="md" />
            <div className="flex items-center gap-2 ml-4">
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-black text-[#ccff00] flex items-center justify-center hover:scale-105 transition"
                aria-label="TikTok"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-black text-[#ccff00] flex items-center justify-center hover:scale-105 transition"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://t.me"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-black text-[#ccff00] flex items-center justify-center hover:scale-105 transition"
                aria-label="Telegram"
              >
                <TelegramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          <p className="text-xs font-semibold opacity-90 text-center sm:text-right font-sans">
            Prémium minőségű beszerzési közvetítés & Digitális resell oktatóanyagok.
          </p>
        </div>
      </div>

      {/* Bottom Sub-footer */}
      <div className="bg-black text-zinc-400 text-[11px] py-4 px-4 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center">
          <p className="font-sans">© 2026. EgyPerEgy. Minden jog fenntartva.</p>
          <div className="flex items-center gap-2 font-medium font-sans">
            <span>A weboldalt készítette:</span>
            <a
              href="https://pixelplaza.hu"
              target="_blank"
              rel="noreferrer"
              className="text-[#ccff00] font-bold hover:underline"
            >
              Pixelplaza.hu
            </a>
            <span className="text-zinc-600">|</span>
            <span className="text-zinc-300">Vercel Ready 🚀</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

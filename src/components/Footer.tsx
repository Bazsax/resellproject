import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { InstagramIcon, TikTokIcon, TelegramIcon } from "@/components/SocialIcons";
import { Logo } from "@/components/Logo";
import { BRAND_DOMAIN } from "@/lib/brand";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#ccff00] text-black font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-xs">
          <div>
            <h4 className="font-display font-black text-sm uppercase tracking-wider mb-3">
              Digitális kínálat
            </h4>
            <ul className="space-y-2 font-medium">
              <li>
                <Link href="/katalogus?kat=digital" className="hover:underline opacity-90 hover:opacity-100">
                  Útmutatók
                </Link>
              </li>
              <li>
                <Link href="/katalogus?kat=suppliers" className="hover:underline opacity-90 hover:opacity-100">
                  Beszállítók
                </Link>
              </li>
              <li>
                <Link href="/utmutato" className="hover:underline opacity-90 hover:opacity-100 font-bold">
                  Reselling Starterpack
                </Link>
              </li>
              <li>
                <Link href="/katalogus" className="hover:underline opacity-90 hover:opacity-100">
                  Teljes katalógus
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-black text-sm uppercase tracking-wider mb-3">
              Beszerzés
            </h4>
            <ul className="space-y-2 font-medium">
              <li>
                <Link href="/egyedi-beszerzes" className="hover:underline opacity-90 hover:opacity-100 font-bold">
                  Egyedi beszerzés
                </Link>
              </li>
              <li>
                <Link href="/merettablazat" className="hover:underline opacity-90 hover:opacity-100">
                  Mérettáblázat
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-black text-sm uppercase tracking-wider mb-3">
              Kapcsolat
            </h4>
            <ul className="space-y-2 font-medium">
              <li>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:underline opacity-90 hover:opacity-100 flex items-center gap-1">
                  Instagram <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href={`mailto:info@${BRAND_DOMAIN}`} className="hover:underline opacity-90 hover:opacity-100">
                  info@{BRAND_DOMAIN}
                </a>
              </li>
              <li>
                <Link href="/kapcsolat" className="hover:underline opacity-90 hover:opacity-100">
                  Kapcsolatfelvétel
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-black text-sm uppercase tracking-wider mb-3">
              Dokumentumok
            </h4>
            <ul className="space-y-2 font-medium">
              <li>
                <Link href="/gyik" className="hover:underline opacity-90 hover:opacity-100">
                  GYIK
                </Link>
              </li>
              <li>
                <Link href="/aszf" className="hover:underline opacity-90 hover:opacity-100">
                  ÁSZF
                </Link>
              </li>
              <li>
                <Link href="/adatkezeles" className="hover:underline opacity-90 hover:opacity-100">
                  Adatkezelési tájékoztató
                </Link>
              </li>
            </ul>
          </div>
        </div>

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
            Digitális resell termékek & prémium egyedi beszerzés – {BRAND_DOMAIN}
          </p>
        </div>
      </div>

      <div className="bg-black text-zinc-400 text-[11px] py-4 px-4 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center">
          <p className="font-sans">© 2026 Direct Supply. Minden jog fenntartva.</p>
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
          </div>
        </div>
      </div>
    </footer>
  );
};

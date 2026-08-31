import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Flame,
  Star,
  Users,
  TrendingUp,
  Lock,
} from "lucide-react";
import { GuideBuyButton } from "@/components/GuideBuyButton";
import { PRODUCTS } from "@/data/products";

export const DigitalGuideSpotlight: React.FC = () => {
  const guideProduct = PRODUCTS.find((p) => p.isDigital) || PRODUCTS[1];

  return (
    <section id="digital-guide" className="w-full bg-[#0d0d0f] py-10 sm:py-14 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[450px] h-[450px] bg-[#ccff00]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-[#141417] border-2 border-[#ccff00]/40 p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-zinc-800">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ccff00] text-black text-xs font-black uppercase tracking-wider">
              <Flame className="w-3.5 h-3.5" />
              <span>2026-os Kiadás • Azonnali Letöltés</span>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-zinc-400">
              <span className="flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-[#ccff00]" />
                128+ elégedett vásárló
              </span>
              <span className="hidden sm:inline text-zinc-600">•</span>
              <span className="flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                5.0 értékelés
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-stretch pt-8">
            <div className="flex flex-col space-y-5 order-2 lg:order-1">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-[#ccff00] block mb-1">
                  Replica reselling útmutató
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-black uppercase text-white tracking-tight font-display leading-[1.05]">
                  AZ ELSŐ MILLIÓ –{" "}
                  <span className="text-[#ccff00]">REPLICA RESELLING</span> ÚTMUTATÓ
                </h2>
              </div>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                Pár nap alatt kereshető meg másnak a havi bére – ha tudod, mit csinálsz. Ez az útmutató megadja neked a rendszert:{" "}
                <span className="text-white font-bold">olcsón beszerzel, felteszed, eladod, ismétled</span> – nem elméletet, hanem egy módszert, ami már működik.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 flex-1">
                {[
                  "Bizonyított, ismételhető rendszer – nem elmélet",
                  "Ellenőrzött beszállítók – kihagyod a bukó próbálkozásokat",
                  "Eladási módszer – tudod, mit szerezz be és hol add el",
                  "Skálázható üzlet az első millió felé",
                  "Magyarországra szabott szállítás és vámolás",
                  "Azonnali hozzáférés e-mailben · örökös frissítés",
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-200">
                    <CheckCircle2 className="w-4 h-4 text-[#ccff00] flex-shrink-0 mt-0.5" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400 font-medium">
                <span className="flex items-center gap-1">
                  <TrendingUp className="w-4 h-4 text-[#ccff00]" />
                  Bizonyított módszer
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-[#ccff00]" />
                  Biztonságos Stripe fizetés
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Lock className="w-4 h-4 text-[#ccff00]" />
                  Azonnali letöltés
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3 order-1 lg:order-2">
              <div className="relative flex-1 min-h-[140px] sm:min-h-[180px] rounded-2xl bg-gradient-to-b from-zinc-800 to-black p-3 border border-[#ccff00]/30 shadow-xl overflow-hidden group">
                <div className="relative w-full h-full min-h-[120px] rounded-xl overflow-hidden">
                  <Image
                    src={guideProduct.images[0]}
                    alt="Az Első Millió Resell Útmutató borító"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute inset-x-3 bottom-3 space-y-1">
                    <span className="text-[9px] font-black uppercase px-1.5 py-0.5 rounded bg-[#ccff00] text-black">
                      DIGITÁLIS CSOMAG
                    </span>
                    <h3 className="text-sm font-black text-white uppercase font-display leading-tight">
                      AZ ELSŐ MILLIÓ 2026
                    </h3>
                  </div>
                </div>
              </div>

              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#ccff00] block mb-1.5">
                Limitált ideig elérhető
              </span>

              <div className="shrink-0 p-3 rounded-xl bg-black border border-zinc-800 text-center lg:text-left">
                <span className="text-[11px] text-zinc-500 line-through block font-medium">
                  10 000 Ft helyett
                </span>
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <span className="text-2xl font-black text-[#ccff00]">
                    1 000 Ft
                  </span>
                  <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-red-600/80 text-white self-center">
                    -50% AKCIÓ
                  </span>
                </div>
              </div>

              <div className="shrink-0 flex flex-col gap-2">
                <GuideBuyButton
                  label="MEGVÁSÁROLOM ÉS HOZZÁFÉREK"
                  size="lg"
                />

                <Link
                  href="/utmutato"
                  className="w-full py-3.5 px-5 rounded-xl font-black text-xs uppercase tracking-wider bg-zinc-900 border border-zinc-700 text-white hover:border-[#ccff00] hover:text-[#ccff00] transition flex items-center justify-center gap-1.5"
                >
                  <span>Részletek</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

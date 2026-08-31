import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Flame, FileText, Sparkles, ShieldCheck, Package } from "lucide-react";
import { PRODUCTS } from "@/data/products";

export const HeroBanner: React.FC = () => {
  const guideProduct = PRODUCTS.find((p) => p.isDigital) || PRODUCTS[1];

  return (
    <section className="relative w-full overflow-hidden bg-black font-sans">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#ccff00]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ccff00]/10 border border-[#ccff00]/40 text-[#ccff00] text-xs font-black uppercase tracking-wider font-btn">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Az Első Millió · 2026-os Digitális Kiadás</span>
            </div>

            <div className="space-y-1">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter text-white font-display leading-[0.9]">
                INDULJ EL A <br />
                <span className="text-[#ccff00] drop-shadow-[0_0_25px_rgba(204,255,0,0.35)]">
                  RESELLINGGEL
                </span>
              </h1>
              <p className="text-sm sm:text-base text-zinc-300 max-w-xl font-normal pt-2 font-sans mx-auto lg:mx-0">
                A teljes útmutató a bizonyított viszonteladási rendszerhez – olcsón beszerzel, felteszed, eladsz, ismétled. Ha pedig kész termék kell, az{" "}
                <span className="text-white font-bold">egyedi 1/1 beszerzésünk</span> elintézi a gyártól az ajtódig.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <Link
                href="/utmutato"
                className="w-full sm:w-auto px-6 py-4 rounded-xl font-extrabold text-xs sm:text-sm uppercase tracking-wider bg-[#ccff00] text-black hover:bg-[#b3e600] transition flex items-center justify-center gap-2 shadow-lg shadow-[#ccff00]/20 font-btn"
              >
                <FileText className="w-4 h-4" />
                <span>RESELL ÚTMUTATÓ</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/egyedi-beszerzes"
                className="w-full sm:w-auto px-6 py-4 rounded-xl font-extrabold text-xs sm:text-sm uppercase tracking-wider bg-zinc-900 border border-[#27272a] text-white hover:border-[#ccff00] hover:text-[#ccff00] transition flex items-center justify-center gap-2 font-btn"
              >
                <Package className="w-4 h-4" />
                <span>EGYEDI BESZERZÉS</span>
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4 text-xs text-zinc-400 font-medium border-t border-zinc-900 font-sans">
              <div className="flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-[#ccff00]" />
                <span>128+ elégedett vásárló</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#ccff00]" />
                <span>Azonnali digitális letöltés</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Package className="w-4 h-4 text-[#ccff00]" />
                <span>1/1 prémium beszerzés</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-3xl bg-gradient-to-b from-zinc-900 to-black p-4 border border-zinc-800 shadow-2xl overflow-hidden group">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src={guideProduct.images[0]}
                  alt="Az Első Millió Resell Útmutató borító"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/80 backdrop-blur-md border border-[#ccff00]/40 flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <span className="text-[10px] font-bold uppercase text-[#ccff00] block font-btn">
                      Digitális Útmutató
                    </span>
                    <span className="text-xs font-medium text-white font-nekst normal-case truncate block">
                      Az Első Millió – Resell Útmutató
                    </span>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-[10px] text-zinc-500 line-through block font-nekst">10 000 Ft</span>
                    <span className="text-sm font-medium text-[#ccff00] font-nekst normal-case">1 000 Ft</span>
                  </div>
                </div>
              </div>

              <div className="absolute top-6 left-6 bg-black/85 text-[#ccff00] border border-[#ccff00] text-[11px] font-black uppercase px-2.5 py-1 rounded-lg backdrop-blur-md shadow-md font-btn">
                1 / 1 BESZERZÉS
              </div>

              <div className="absolute top-6 right-6 transform rotate-3 hover:rotate-0 transition-transform font-btn">
                <div className="bg-[#ccff00] text-black font-black text-[10px] sm:text-xs uppercase tracking-wider py-1.5 px-3 rounded-md shadow-lg border-2 border-black text-center">
                  <span className="block text-[9px] font-extrabold opacity-75 font-sans leading-none">KORLÁTOZOTT IDEIG</span>
                  <span className="text-sm font-black leading-none font-display">-50%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

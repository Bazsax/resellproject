import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Flame, Sparkles, Package, FileText, Store, Star } from "lucide-react";

const HERO_HIGHLIGHTS = [
  { icon: Flame, label: "128+ elégedett vásárló", filled: false },
  { icon: Star, label: "5.0 értékelés", filled: true },
] as const;

export const HeroBanner: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#0a0a0c] font-sans">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#ccff00]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ccff00]/10 border border-[#ccff00]/40 text-[#ccff00] text-xs font-black uppercase tracking-wider font-btn">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Supply – A profit útja, egyenesen</span>
            </div>

            <div className="space-y-1">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter text-white font-display leading-[0.9]">
                RESELLING EGYSZERŰEN
              </h1>
              <p className="text-sm sm:text-base text-zinc-300 max-w-xl font-normal pt-2 font-sans mx-auto lg:mx-0">
                Útmutatók, beszállítói listák és resell csomagok – mind azonnali digitális hozzáféréssel.
                Ha kész termék kell, az{" "}
                <span className="text-white font-bold">egyedi beszerzésünk</span> elintézi a gyártól az ajtódig.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <Link
                href="/katalogus"
                className="w-full sm:w-auto px-5 py-4 rounded-xl font-extrabold text-xs sm:text-sm uppercase tracking-wider bg-[#ccff00] text-black hover:bg-[#b3e600] transition flex items-center justify-center gap-2 shadow-lg shadow-[#ccff00]/20 font-btn"
              >
                <FileText className="w-5 h-5" />
                <span>KATALÓGUS</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                href="/egyedi-beszerzes"
                className="w-full sm:w-auto px-5 py-4 rounded-xl font-extrabold text-xs sm:text-sm uppercase tracking-wider bg-zinc-900 border border-[#27272a] text-white hover:border-[#ccff00] transition flex items-center justify-center gap-2 font-btn"
              >
                <Package className="w-5 h-5" />
                <span>BESZERZÉS</span>
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 pt-4 text-xs text-zinc-400 font-medium border-t border-zinc-900 font-sans">
              {HERO_HIGHLIGHTS.map(({ icon: Icon, label, filled }) => (
                <div key={label} className="flex items-center gap-1.5 min-w-0">
                  <Icon
                    className={`w-4 h-4 flex-shrink-0 text-[#ccff00] ${filled ? "fill-[#ccff00]" : ""}`}
                  />
                  <span className="leading-snug text-left">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-3xl bg-gradient-to-b from-zinc-900 to-black p-4 border border-zinc-800 shadow-2xl overflow-hidden group">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80"
                  alt="Direct Supply digitális termékek"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/80 backdrop-blur-md border border-[#ccff00]/40 space-y-2">
                  <span className="text-[10px] font-bold uppercase text-[#ccff00] block font-btn">
                    Digitális kínálat
                  </span>
                  <div className="flex gap-2">
                    <div className="flex-1 p-2 rounded-lg bg-zinc-900/80 border border-zinc-700 flex items-center gap-2">
                      <FileText className="w-4 h-4 text-[#ccff00] flex-shrink-0" />
                      <span className="text-[10px] font-medium text-white font-nekst normal-case">Útmutatók</span>
                    </div>
                    <div className="flex-1 p-2 rounded-lg bg-zinc-900/80 border border-zinc-700 flex items-center gap-2">
                      <Store className="w-4 h-4 text-[#ccff00] flex-shrink-0" />
                      <span className="text-[10px] font-medium text-white font-nekst normal-case">Beszállítók</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

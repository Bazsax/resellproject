import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Flame, FileText, Sparkles, ShieldCheck } from "lucide-react";

export const HeroBanner: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black border-b border-[#27272a] font-sans">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#ccff00]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ccff00]/10 border border-[#ccff00]/40 text-[#ccff00] text-xs font-black uppercase tracking-wider font-btn">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Limitált Nyitási Akció & Digitális Resell Csomag</span>
            </div>

            {/* Giant Title from screenshot 2 in Antry Sans uppercase */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter text-white font-display leading-[0.9]">
                REOPENING <br />
                <span className="text-[#ccff00] drop-shadow-[0_0_25px_rgba(204,255,0,0.35)]">
                  SALE
                </span>
              </h1>
              <p className="text-sm sm:text-base text-zinc-300 max-w-xl font-normal pt-2 font-sans">
                A legmagasabb minőségű <span className="text-white font-bold">1/1 prémium cipő és ruházat beszerzése</span> közvetlenül a gyártóktól + a teljes <span className="text-[#ccff00] font-bold">Digitális Resell Masterclass 2026</span> dokumentáció!
              </p>
            </div>

            {/* Neon Sticker Badge from screenshot 2 */}
            <div className="inline-block transform -rotate-2 hover:rotate-0 transition-transform font-btn">
              <div className="bg-[#ccff00] text-black font-black text-xs sm:text-sm uppercase tracking-wider py-2 px-4 rounded-md shadow-lg border-2 border-black">
                <span className="block text-[10px] font-extrabold opacity-75 font-sans">KORLÁTOZOTT IDEIG</span>
                <span className="text-base sm:text-lg font-black leading-none font-display">AKÁR 50% OFF</span>
              </div>
            </div>

            {/* Call to Actions in Bold Nekst uppercase */}
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
                href="/katalogus"
                className="w-full sm:w-auto px-6 py-4 rounded-xl font-extrabold text-xs sm:text-sm uppercase tracking-wider bg-zinc-900 border border-[#27272a] text-white hover:border-[#ccff00] hover:text-[#ccff00] transition flex items-center justify-center gap-2 font-btn"
              >
                <span>KATALÓGUS BÖNGÉSZÉSE</span>
              </Link>
            </div>

            {/* Trust points */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4 text-xs text-zinc-400 font-medium border-t border-zinc-900 font-sans">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#ccff00]" />
                <span>100% Ellenőrzött beszállítók</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-[#ccff00]" />
                <span>Azonnali digitális letöltés</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Streetwear / Sneaker Showcase Collage */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-3xl bg-gradient-to-b from-zinc-900 to-black p-4 border border-zinc-800 shadow-2xl overflow-hidden group">
              {/* Central Main Sneaker */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=800&auto=format&fit=crop&q=80"
                  alt="Supreme Dunk Fehér 1/1"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                {/* Floating Tag Badge: Nekst font, soft weight, not uppercase */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/80 backdrop-blur-md border border-[#ccff00]/40 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase text-[#ccff00] block font-btn">
                      Kiemelt Modell
                    </span>
                    <span className="text-xs font-medium text-white font-nekst normal-case">
                      Supreme Dunk Fehér - N450390
                    </span>
                  </div>
                  <span className="text-sm font-medium text-[#ccff00] font-nekst normal-case">
                    48 000 Ft
                  </span>
                </div>
              </div>

              {/* Top corner sticker */}
              <div className="absolute top-6 right-6 bg-black/85 text-[#ccff00] border border-[#ccff00] text-[11px] font-black uppercase px-2.5 py-1 rounded-lg backdrop-blur-md shadow-md font-btn">
                1 / 1 REPLIKA
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

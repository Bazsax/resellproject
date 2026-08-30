import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Flame 
} from "lucide-react";
import { GuideBuyButton } from "@/components/GuideBuyButton";

export const DigitalGuideSpotlight: React.FC = () => {
  return (
    <section id="digital-guide" className="w-full bg-[#0d0d0f] py-14 sm:py-20 border-b border-[#27272a] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[450px] h-[450px] bg-[#ccff00]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-[#141417] border-2 border-[#ccff00]/40 p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-zinc-800">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ccff00] text-black text-xs font-black uppercase tracking-wider">
              <Flame className="w-3.5 h-3.5" />
              <span>Fő Termék • Digitális Fájl</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-zinc-400">
              <span className="text-[#ccff00]">★★★★★</span>
              <span>5.0 (128+ Elégedett Vásárló)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-stretch pt-8">
            {/* Left column */}
            <div className="flex flex-col space-y-5 order-2 lg:order-1">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-[#ccff00] block mb-1">
                  Minden amit a viszonteladásról tudnod kell
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-black uppercase text-white tracking-tight font-display leading-[1.05]">
                  RESELL MASTERCLASS & GYÁRI BESZÁLLÍTÓI DOKUMENTÁCIÓ (2026)
                </h2>
              </div>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                Ne fizess túl a viszonteladóknál, és ne veszíts pénzt rossz minőségű termékeken! Ebben a digitális kézikönyvben összegyűjtöttük a <span className="text-white font-bold">25+ legmegbízhatóbb, közvetlen gyári 1/1 beszállítót</span> és a bevált értékesítési stratégiánkat, amellyel azonnal profitábilis lehetsz.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 flex-1">
                {[
                  "25+ Ellenőrzött közvetlen gyári beszállító (Sneakerek, Ruhák, Órák)",
                  "Magyarországi vámolási & szállítási kisokos (0 Ft felesleges vám)",
                  "Vinted & Instagram hirdetési és eladási mesterfogások",
                  "Árrés növelési és profit maximalizáló Excel & Notion sablonok",
                  "Minőségellenőrzési (QC) kézikönyv a hibátlan darabokhoz",
                  "Azonnali hozzáférés e-mailben & örökös frissítések"
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-200">
                    <CheckCircle2 className="w-4 h-4 text-[#ccff00] flex-shrink-0 mt-0.5" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4 text-xs text-zinc-400 font-medium">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-[#ccff00]" />
                  Biztonságos Stripe fizetés
                </span>
                <span>•</span>
                <span>Azonnali PDF / Docs elérés</span>
              </div>
            </div>

            {/* Right column – stretches to match left height */}
            <div className="flex flex-col gap-3 order-1 lg:order-2">
              <div className="relative flex-1 min-h-[140px] sm:min-h-[180px] rounded-2xl bg-gradient-to-b from-zinc-800 to-black p-3 border border-[#ccff00]/30 shadow-xl overflow-hidden group">
                <div className="relative w-full h-full min-h-[120px] rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80"
                    alt="Digital Resell Masterclass 2026 Cover"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute inset-x-3 bottom-3 space-y-1">
                    <span className="text-[9px] font-black uppercase px-1.5 py-0.5 rounded bg-[#ccff00] text-black">
                      E-BOOK & DOKUMENTÁCIÓ
                    </span>
                    <h3 className="text-sm font-black text-white uppercase font-display leading-tight">
                      ULTIMATE RESELL HU 2026
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
                  label="MEGVÁSÁROLOM"
                  className="!py-3 !px-5 !text-xs !shadow-lg"
                />

                <Link
                  href="/utmutato"
                  className="w-full py-3 px-5 rounded-xl font-black text-xs uppercase tracking-wider bg-zinc-900 border border-zinc-700 text-white hover:border-[#ccff00] hover:text-[#ccff00] transition flex items-center justify-center gap-1.5"
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

import React from "react";
import Link from "next/link";
import { Search, ShieldCheck, Truck, ArrowRight, Sparkles } from "lucide-react";

export const SourcingSteps: React.FC = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Kiválasztás & Igény leadása",
      description: "Válassz a katalógusunkból, vagy tölts fel egy fotót/linket a kívánt ruháról, cipőről, óráról vagy táskáról a méreteddel."
    },
    {
      number: "02",
      icon: ShieldCheck,
      title: "1/1 Beszerzés & Minőségellenőrzés",
      description: "Felvesszük a kapcsolatot a prémium gyári beszállítóval. Részletes QC fotókat készítünk a varrásokról, anyagokról és címkékről."
    },
    {
      number: "03",
      icon: Truck,
      title: "Gyors szállítás & Méretgarancia",
      description: "A csomagot dupla dobozban, sérülésmentesen juttatjuk el hozzád 5-9 munkanap alatt, 14 napos méretcsere garanciával."
    }
  ];

  return (
    <section className="w-full bg-[#0d0d0f] py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-9">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-black uppercase text-[#ccff00] tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Hogyan Működik?
          </div>
          <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight font-display">
            A BESZERZÉSI SZOLGÁLTATÁS FOLYAMATA
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            Nem kell többé kockáztatnod megbízhatatlan eladókkal vagy rossz minőségű termékekkel. Mi mindent elintézünk helyetted!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative p-6 sm:p-8 rounded-3xl bg-[#121214] border border-[#27272a] hover:border-[#ccff00]/60 transition duration-300 space-y-4 group"
              >
                {/* Number Badge */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#ccff00] text-black flex items-center justify-center font-black text-xl shadow-lg shadow-[#ccff00]/20 group-hover:scale-110 transition">
                    <Icon className="w-6 h-6 stroke-[2.5]" />
                  </div>
                  <span className="text-3xl font-black text-zinc-700 font-display">
                    {step.number}
                  </span>
                </div>

                <div className="space-y-2 pt-2">
                  <h3 className="text-base sm:text-lg font-black uppercase text-white tracking-tight font-display group-hover:text-[#ccff00] transition">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center pt-4">
          <Link
            href="/egyedi-beszerzes"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider bg-[#ccff00] text-black hover:bg-[#b3e600] transition shadow-lg shadow-[#ccff00]/20"
          >
            <span>Egyedi Termék Beszerzése Most</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

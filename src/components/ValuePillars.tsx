import React from "react";
import { Zap, ShieldCheck, Download, Headphones } from "lucide-react";

export const ValuePillars: React.FC = () => {
  const pillars = [
    {
      icon: Download,
      title: "Azonnali hozzáférés",
      subtitle: "Digitális termékek e-mailben, vásárlás után percek alatt",
    },
    {
      icon: ShieldCheck,
      title: "Ellenőrzött beszállítók",
      subtitle: "Tesztelt kontaktok és minőség – nem kamu listák",
    },
    {
      icon: Zap,
      title: "Bizonyított rendszer",
      subtitle: "Lépésről lépésre módszer, ami már működik",
    },
    {
      icon: Headphones,
      title: "Gyors kommunikáció",
      subtitle: "24/7 Instagram és e-mail ügyfélszolgálat",
    },
  ];

  return (
    <section className="w-full bg-[#0a0a0c] py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 sm:p-5 rounded-2xl bg-[#121214] border border-[#27272a] hover:border-[#ccff00]/50 hover:bg-[#161619] transition duration-200 group"
              >
                <div className="w-9 h-9 rounded-xl bg-[#ccff00] text-black flex items-center justify-center flex-shrink-0 shadow-md shadow-[#ccff00]/20 group-hover:scale-105 transition">
                  <Icon className="w-[18px] h-[18px] stroke-[2.5]" />
                </div>
                <div className="text-left min-w-0">
                  <h4 className="text-xs sm:text-sm font-black text-white uppercase tracking-wider font-display leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-zinc-400 font-normal mt-1 leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

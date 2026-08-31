import React from "react";
import { Award, Headphones, RefreshCw, Zap } from "lucide-react";

export const ValuePillars: React.FC = () => {
  const pillars = [
    {
      icon: Award,
      title: "PRÉMIUM MINŐSÉG",
      subtitle: "1/1 Gyári Kidolgozás & Eredeti Bőr"
    },
    {
      icon: Headphones,
      title: "GYORS KOMMUNIKÁCIÓ",
      subtitle: "24/7 Instagram & Email Ügyfélszolgálat"
    },
    {
      icon: RefreshCw,
      title: "MÉRETCSERE",
      subtitle: "14 Napos Díjmentes Cseregarancia"
    }
  ];

  return (
    <section className="w-full bg-black py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="w-full sm:w-auto flex-1 max-w-sm flex items-center justify-center sm:justify-start gap-3 px-5 py-3.5 rounded-full bg-[#121214] border border-[#27272a] hover:border-[#ccff00]/60 hover:bg-[#161619] transition duration-200 group"
              >
                <div className="w-9 h-9 rounded-full bg-[#ccff00] text-black flex items-center justify-center flex-shrink-0 font-black shadow-md shadow-[#ccff00]/20 group-hover:scale-110 transition">
                  <Icon className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div className="text-left">
                  <h4 className="text-xs sm:text-sm font-black text-white uppercase tracking-wider font-display">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-zinc-400 font-medium">
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

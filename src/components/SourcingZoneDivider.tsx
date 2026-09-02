import React from "react";
import { Package } from "lucide-react";

/** Visual divider between digital product zone and sourcing service zone on homepage */
export const SourcingZoneDivider: React.FC = () => {
  return (
    <div className="w-full bg-[#0a0a0c] py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-4">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#ccff00]/30 to-transparent" />
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-black uppercase text-zinc-400 tracking-wider shrink-0">
          <Package className="w-3.5 h-3.5 text-[#ccff00]" />
          Egyedi beszerzési szolgáltatás
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#ccff00]/30 to-transparent" />
      </div>
    </div>
  );
};

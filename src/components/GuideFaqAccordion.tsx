"use client";

import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import { GUIDE_FAQ } from "@/data/guide";

export function GuideFaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {GUIDE_FAQ.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <button
            key={i}
            type="button"
            onClick={() => setOpenIndex(isOpen ? null : i)}
            className={`w-full text-left p-5 rounded-2xl bg-[#121214] border transition cursor-pointer ${
              isOpen ? "border-[#ccff00]/40" : "border-[#27272a] hover:border-zinc-700"
            }`}
          >
            <div className="flex items-center justify-between gap-4">
              <span className="text-sm font-black uppercase text-white">{faq.q}</span>
              <ChevronRight
                className={`w-4 h-4 text-zinc-500 flex-shrink-0 transition-transform ${
                  isOpen ? "rotate-90" : ""
                }`}
              />
            </div>
            {isOpen && (
              <p className="text-xs text-zinc-400 mt-3 leading-relaxed">{faq.a}</p>
            )}
          </button>
        );
      })}
    </div>
  );
}

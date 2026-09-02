import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import { SOURCING_EXAMPLES } from "@/data/sourcing-examples";

type SourcingExamplesSectionProps = {
  showCta?: boolean;
  limit?: number;
  id?: string;
  detailLinkPrefix?: string;
};

export const SourcingExamplesSection: React.FC<SourcingExamplesSectionProps> = ({
  showCta = true,
  limit,
  id,
  detailLinkPrefix = "/egyedi-beszerzes/pelda",
}) => {
  const items = limit ? SOURCING_EXAMPLES.slice(0, limit) : SOURCING_EXAMPLES;

  return (
    <section id={id} className="w-full bg-[#0a0a0c] py-9 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-[#ccff00] tracking-tight font-display">
              Beszerzési példák
            </h2>
            <p className="text-sm text-zinc-400 font-normal mt-1 max-w-xl">
              Valós ügyfélrendelések – ár, minőség és szállítási idő, amit az egyedi beszerzés során kapsz.
            </p>
          </div>
          {showCta && (
            <Link
              href="/egyedi-beszerzes"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-700 hover:border-[#ccff00] text-xs font-black uppercase text-white transition shrink-0"
            >
              <span>Igénylés</span>
              <div className="w-4 h-4 rounded-full bg-[#ccff00] text-black flex items-center justify-center">
                <ArrowRight className="w-2.5 h-2.5 stroke-[3]" />
              </div>
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((item) => (
            <Link
              key={item.id}
              href={`${detailLinkPrefix}/${item.id}`}
              className="group rounded-2xl bg-[#121214] border border-[#27272a] overflow-hidden hover:border-[#ccff00]/50 transition flex flex-col"
            >
              <div className="relative aspect-[16/10] bg-zinc-900">
                <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-2 left-2 text-[9px] font-black uppercase px-2 py-0.5 rounded bg-black/80 text-[#ccff00] border border-[#ccff00]/30">
                  {item.category}
                </span>
              </div>
              <div className="p-4 sm:p-5 flex-1 flex flex-col space-y-3">
                <div>
                  <h3 className="text-sm sm:text-base font-black uppercase text-white font-display leading-tight transition">
                    {item.title}
                  </h3>
                  {item.note && <p className="text-xs text-zinc-500 mt-1 font-normal">{item.note}</p>}
                </div>
                <div className="flex items-center justify-between text-xs">
                  <div>
                    <p className="text-zinc-500 font-normal">Ügyfél ár</p>
                    <p className="text-[#ccff00] font-black text-base">{item.clientPrice.toLocaleString("hu-HU")} Ft</p>
                  </div>
                  {item.retailCompare && (
                    <div className="text-right">
                      <p className="text-zinc-500 font-normal">Retail</p>
                      <p className="text-zinc-400 line-through text-xs">{item.retailCompare.toLocaleString("hu-HU")} Ft</p>
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-zinc-800 mt-auto">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: item.qualityScore }).map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-[#ccff00] text-[#ccff00]" />
                    ))}
                    <span className="text-[10px] text-zinc-400 ml-1 font-normal">{item.qualityLabel}</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-700 text-[10px] font-bold uppercase text-white group-hover:border-[#ccff00] transition font-btn">
                    Részletek
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {showCta && (
          <div className="sm:hidden text-center">
            <Link
              href="/egyedi-beszerzes"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#ccff00] text-black text-xs font-black uppercase"
            >
              Egyedi beszerzés igénylése
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

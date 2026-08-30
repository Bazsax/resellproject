import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

export const ReplicaGrid: React.FC = () => {
  // Show physical sourcing items matching the screenshot
  const items = PRODUCTS.filter((p) => !p.isDigital).slice(0, 4);

  return (
    <section className="w-full bg-black py-12 border-b border-[#27272a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Header from Screenshot 2 */}
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-[#ccff00] tracking-tight font-display">
              1 / 1 REPLIKÁK
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 font-medium mt-1">
              Replikák, amik ugyanolyanok mint az eredeti!
            </p>
          </div>

          <Link
            href="/katalogus"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-700 hover:border-[#ccff00] text-xs font-black uppercase text-white hover:text-[#ccff00] transition"
          >
            <span>ÖSSZES</span>
            <div className="w-4 h-4 rounded-full bg-[#ccff00] text-black flex items-center justify-center">
              <ArrowUpRight className="w-2.5 h-2.5 stroke-[3]" />
            </div>
          </Link>
        </div>

        {/* 4 Cards Grid as shown in screenshot */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
          {items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

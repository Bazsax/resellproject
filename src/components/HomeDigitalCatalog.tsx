"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, FileText, Store } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { CATALOG_PRODUCTS } from "@/data/products";

type CatalogFilter = "all" | "digital" | "suppliers";

const DIGITAL_CATEGORIES: {
  id: Exclude<CatalogFilter, "all">;
  title: string;
  description: string;
  icon: typeof FileText;
}[] = [
  {
    id: "digital",
    title: "Útmutatók",
    description: "Resell starterpackok, masterclassok és lépésről lépésre rendszerek.",
    icon: FileText,
  },
  {
    id: "suppliers",
    title: "Beszállítók",
    description: "Direct Supply listák – kategóriánkénti beszállítói hozzáférések.",
    icon: Store,
  },
];

export const HomeDigitalCatalog: React.FC = () => {
  const [filter, setFilter] = useState<CatalogFilter>("all");

  const products = useMemo(() => {
    if (filter === "all") {
      return CATALOG_PRODUCTS;
    }
    return CATALOG_PRODUCTS.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <section className="w-full bg-[#0a0a0c] py-9 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight font-display">
              Digitális kínálat
            </h2>
            <p className="text-sm text-zinc-400 font-normal mt-1">
              Útmutatók, beszállítói listák és csomagok – azonnali hozzáférés vásárlás után.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setFilter("all")}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-700 text-xs font-black uppercase text-white transition shrink-0 cursor-pointer hover:border-[#ccff00]"
          >
            <span>Összes</span>
            <div className="w-4 h-4 rounded-full bg-[#ccff00] text-black flex items-center justify-center">
              <ArrowUpRight className="w-2.5 h-2.5 stroke-[3]" />
            </div>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {DIGITAL_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = filter === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setFilter(isActive ? "all" : cat.id)}
                className={`group p-4 sm:p-5 rounded-2xl bg-[#121214] border transition flex flex-col gap-2.5 text-left cursor-pointer ${
                  isActive
                    ? "border-[#ccff00]"
                    : "border-[#27272a] hover:border-[#ccff00]/50"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className={`w-9 h-9 rounded-lg border flex items-center justify-center flex-shrink-0 ${
                      isActive
                        ? "bg-[#ccff00] border-[#ccff00] text-black"
                        : "bg-[#ccff00]/10 border-[#ccff00]/30 text-[#ccff00]"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm sm:text-base font-black uppercase text-white font-display leading-tight">
                    {cat.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 font-sans font-normal normal-case leading-relaxed">
                  {cat.description}
                </p>
              </button>
            );
          })}
        </div>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl bg-[#121214] border border-[#27272a] p-8 text-center space-y-3">
            <p className="text-sm text-zinc-400 font-normal">
              Ebben a kategóriában még nincsenek termékek – hamarosan bővül.
            </p>
            <Link
              href="/katalogus"
              className="inline-flex items-center gap-1.5 text-xs font-black uppercase text-[#ccff00] hover:underline"
            >
              Teljes katalógus
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

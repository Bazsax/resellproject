import React from "react";
import Link from "next/link";
import { ArrowUpRight, FileText, Store } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { PRODUCTS } from "@/data/products";

const DIGITAL_CATEGORIES = [
  {
    title: "Útmutatók",
    description: "Resell starterpackok, masterclassok és lépésről lépésre rendszerek.",
    href: "/katalogus?kat=digital",
    icon: FileText,
  },
  {
    title: "Beszállítók",
    description: "Direct Supply listák – kategóriánkénti beszállítói hozzáférések.",
    href: "/katalogus?kat=suppliers",
    icon: Store,
  },
];

export const HomeDigitalCatalog: React.FC = () => {
  const digitalProducts = PRODUCTS.filter((p) => p.isDigital);

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
          <Link
            href="/katalogus"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-700 hover:border-[#ccff00] text-xs font-black uppercase text-white transition shrink-0"
          >
            <span>Összes</span>
            <div className="w-4 h-4 rounded-full bg-[#ccff00] text-black flex items-center justify-center">
              <ArrowUpRight className="w-2.5 h-2.5 stroke-[3]" />
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {DIGITAL_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.title}
                href={cat.href}
                className="group p-4 sm:p-5 rounded-2xl bg-[#121214] border border-[#27272a] hover:border-[#ccff00]/50 transition flex flex-col gap-2.5"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-[#ccff00]/10 border border-[#ccff00]/30 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-[#ccff00]" />
                  </div>
                  <h3 className="text-sm sm:text-base font-black uppercase text-white font-display transition leading-tight">
                    {cat.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed">{cat.description}</p>
              </Link>
            );
          })}
        </div>

        {digitalProducts.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {digitalProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

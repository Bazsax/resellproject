"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, X, ArrowRight, Sparkles } from "lucide-react";
import { CATALOG_PRODUCTS, Product } from "@/data/products";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);

  useEffect(() => {
    if (!query.trim()) {
      setResults(CATALOG_PRODUCTS.slice(0, 4));
    } else {
      const q = query.toLowerCase();
      const filtered = CATALOG_PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q)) ||
          p.shortDescription.toLowerCase().includes(q)
      );
      setResults(filtered);
    }
  }, [query]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#121214] border border-[#27272a] rounded-2xl shadow-2xl overflow-hidden">
        {/* Search input bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-[#27272a] gap-3">
          <Search className="w-5 h-5 text-[#ccff00]" />
          <input
            type="text"
            placeholder="Keresés cipők, ruhák, útmutatók vagy márkák között..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="flex-1 bg-transparent text-white placeholder-zinc-500 focus:outline-none text-base"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-zinc-400 hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs font-semibold px-2.5 py-1 rounded-md bg-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-700"
          >
            ESC
          </button>
        </div>

        {/* Results / Quick picks */}
        <div className="p-4 max-h-[60vh] overflow-y-auto space-y-2">
          <div className="flex items-center justify-between text-xs font-bold tracking-wider text-zinc-400 uppercase mb-2 px-1">
            <span>{query ? `Találatok (${results.length})` : "Népszerű Keresések & Termékek"}</span>
            {!query && <span className="flex items-center gap-1 text-[#ccff00]"><Sparkles className="w-3 h-3" /> Ajánlott</span>}
          </div>

          {results.length === 0 ? (
            <div className="text-center py-10 text-zinc-400">
              <p className="font-semibold text-white">Nincs találat a következőre: &ldquo;{query}&rdquo;</p>
              <p className="text-xs mt-1 text-zinc-500">Nem találod amit keresel? Kérj egyedi beszerzést!</p>
              <Link
                href="/egyedi-beszerzes"
                onClick={onClose}
                className="inline-flex items-center gap-2 mt-4 px-4 py-2 text-xs font-bold uppercase rounded-lg bg-[#ccff00] text-black hover:bg-[#b3e600]"
              >
                Egyedi Beszerzés Kérése <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ) : (
            results.map((product) => (
              <Link
                key={product.id}
                href={product.isDigital ? `/utmutato` : `/termek/${product.slug}`}
                onClick={onClose}
                className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-zinc-800/60 border border-transparent hover:border-zinc-700 transition group"
              >
                <div className="relative w-14 h-14 rounded-lg bg-zinc-900 overflow-hidden flex-shrink-0 border border-zinc-800">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase px-1.5 py-0.5 rounded bg-zinc-800 text-[#ccff00]">
                      {product.brand}
                    </span>
                    {product.isDigital && (
                      <span className="text-[10px] font-bold uppercase px-1.5 py-0.5 rounded bg-[#ccff00] text-black">
                        Digitális
                      </span>
                    )}
                  </div>
                  <h4 className="text-sm font-semibold text-white truncate mt-0.5 transition">
                    {product.name}
                  </h4>
                  <p className="text-xs font-bold text-[#ccff00]">
                    {product.price.toLocaleString("hu-HU")} Ft
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:translate-x-1 transition" />
              </Link>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="p-3 bg-zinc-900/60 border-t border-[#27272a] flex items-center justify-between text-xs text-zinc-400">
          <span>Összesen {CATALOG_PRODUCTS.length} digitális termék elérhető</span>
          <Link
            href="/katalogus"
            onClick={onClose}
            className="text-[#ccff00] hover:underline font-medium inline-flex items-center gap-1"
          >
            Teljes katalógus böngészése <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </div>
  );
};

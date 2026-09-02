"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { 
  Search, 
  Sparkles, 
  X, 
  Filter,
  FileText,
  Footprints,
  Shirt,
  Watch,
  Briefcase,
  Glasses,
  Gem,
  Monitor,
  Package,
  Store,
} from "lucide-react";
import { PRODUCTS, CATEGORIES, CATALOG_PRODUCTS, Product } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

const CATEGORY_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  digital: FileText,
  suppliers: Store,
  sneakers: Footprints,
  streetwear: Shirt,
  watches: Watch,
  bags: Briefcase,
  glasses: Glasses,
  jewelry: Gem,
  electronics: Monitor,
  other: Package,
};

function CatalogContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("kat") || "all";
  const initialBrand = searchParams.get("marka") || "";
  const initialSearch = searchParams.get("q") || "";

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedBrand, setSelectedBrand] = useState(initialBrand);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [sortBy, setSortBy] = useState<"popular" | "price-asc" | "price-desc">("popular");

  // Extract all unique brands
  const brands = useMemo(() => {
    const set = new Set<string>();
    CATALOG_PRODUCTS.forEach((p) => set.add(p.brand));
    return Array.from(set);
  }, []);

  const filteredProducts = useMemo(() => {
    return CATALOG_PRODUCTS.filter((p) => {
      // Category filter
      if (selectedCategory !== "all" && p.category !== selectedCategory) {
        return false;
      }
      // Brand filter
      if (selectedBrand && p.brand.toLowerCase() !== selectedBrand.toLowerCase()) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matches =
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q));
        if (!matches) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      return b.rating - a.rating;
    });
  }, [selectedCategory, selectedBrand, searchQuery, sortBy]);

  const clearFilters = () => {
    setSelectedCategory("all");
    setSelectedBrand("");
    setSearchQuery("");
    setSortBy("popular");
  };

  return (
    <div className="min-h-screen bg-black text-white pb-20">
      {/* Catalog Header */}
      <div className="bg-[#121214] border-b border-[#27272a] py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ccff00]/10 border border-[#ccff00]/40 text-xs font-black uppercase tracking-wider text-[#ccff00]">
            <Sparkles className="w-3.5 h-3.5" /> 1/1 Sourcing & Digitális Kínálat
          </div>
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-display">
            TERMÉK KATALÓGUS
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl font-normal">
            Böngéssz prémium 1/1 minőségű cipőink, streetwear kollekcióink és a hivatalos digitális viszonteladási útmutatók között.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
        {/* Category Pills Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const Icon = CATEGORY_ICONS[cat.id];
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-full text-xs font-black uppercase tracking-wider whitespace-nowrap transition-all flex items-center gap-2 border ${
                  isSelected
                    ? "bg-[#ccff00] text-black border-[#ccff00] shadow-md shadow-[#ccff00]/20"
                    : "bg-black text-zinc-300 border-zinc-800 hover:border-zinc-700 hover:text-white"
                }`}
              >
                {Icon && <Icon className="w-3.5 h-3.5" />}
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Filter Controls Row */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 rounded-2xl bg-black border border-[#27272a]">
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              placeholder="Keresés név, márka, kategória szerint..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-black border border-zinc-800 rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#ccff00]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Brand and Sort dropdowns */}
          <div className="flex items-center gap-2">
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="bg-black border border-zinc-800 rounded-xl px-3 py-2 text-xs font-bold uppercase text-white focus:outline-none focus:border-[#ccff00]"
            >
              <option value="">Minden Márka</option>
              {brands.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-black border border-zinc-800 rounded-xl px-3 py-2 text-xs font-bold uppercase text-white focus:outline-none focus:border-[#ccff00]"
            >
              <option value="popular">Népszerűség szerint</option>
              <option value="price-asc">Ár: Alacsonytól</option>
              <option value="price-desc">Ár: Magastól</option>
            </select>

            {(selectedCategory !== "all" || selectedBrand || searchQuery) && (
              <button
                onClick={clearFilters}
                className="p-2 rounded-xl bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 text-xs font-semibold"
                title="Szűrők törlése"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Products Grid */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold text-zinc-400 uppercase">
              {filteredProducts.length} Termék találat
            </span>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 bg-[#121214] rounded-3xl border border-[#27272a] space-y-4">
              <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-500 flex items-center justify-center mx-auto">
                <Filter className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-black uppercase text-white font-display">
                Nem található termék a megadott szűrőkkel
              </h3>
              <p className="text-xs text-zinc-400 max-w-sm mx-auto">
                Próbáld meg törölni a szűrőket vagy kérj egyedi beszerzést a kívánt modellre!
              </p>
              <div className="pt-2 flex justify-center gap-3">
                <button
                  onClick={clearFilters}
                  className="px-4 py-2.5 rounded-xl text-xs font-black uppercase bg-zinc-800 text-white hover:bg-zinc-700"
                >
                  Szűrők Visszaállítása
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function CatalogPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black text-white p-10 text-center">Betöltés...</div>}>
      <CatalogContent />
    </Suspense>
  );
}

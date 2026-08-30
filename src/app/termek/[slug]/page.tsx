"use client";

import React, { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  ChevronRight, 
  Minus, 
  Plus, 
  Check, 
  ShieldCheck, 
  Truck, 
  RefreshCw, 
  Sparkles
} from "lucide-react";
import { PRODUCTS, RECOMMENDED_ADDONS, ProductAddon } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { ProductCard } from "@/components/ProductCard";
import { GuideBuyButton } from "@/components/GuideBuyButton";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ProductDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const product = PRODUCTS.find((p) => p.slug === resolvedParams.slug);

  if (!product) {
    notFound();
  }

  const { addToCart } = useCart();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | number>(
    product.defaultSize || (product.sizes ? product.sizes[1] || product.sizes[0] : "")
  );
  const [quantity, setQuantity] = useState(1);
  const [selectedAddons, setSelectedAddons] = useState<ProductAddon[]>([
    RECOMMENDED_ADDONS[0] // Pre-selected Sneaker Shield
  ]);
  const [activeTab, setActiveTab] = useState<"desc" | "specs" | "shipping">("desc");
  const [addedAnimation, setAddedAnimation] = useState(false);

  const toggleAddon = (addon: ProductAddon) => {
    setSelectedAddons((prev) => {
      const exists = prev.some((a) => a.id === addon.id);
      if (exists) {
        return prev.filter((a) => a.id !== addon.id);
      } else {
        return [...prev, addon];
      }
    });
  };

  const handleAddToCart = () => {
    addToCart(product, selectedSize, quantity, selectedAddons);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1500);
  };

  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id && !p.isDigital).slice(0, 4);

  return (
    <div className="min-h-screen bg-black text-white pb-20 font-sans">
      {/* Breadcrumb nav */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 pb-2">
        <div className="flex items-center gap-2 text-xs font-medium text-zinc-500 font-sans">
          <Link href="/" className="hover:text-[#ccff00]">Főoldal</Link>
          <ChevronRight className="w-3 h-3 text-zinc-600" />
          <Link href="/katalogus" className="hover:text-[#ccff00]">Katalógus</Link>
          <ChevronRight className="w-3 h-3 text-zinc-600" />
          <span className="text-[#ccff00] truncate">{product.brand}</span>
        </div>
      </div>

      {/* Main Container - Focused & Clean matching Screenshot 1 */}
      <div className="max-w-xl mx-auto px-4 sm:px-6 pt-4 space-y-6">
        
        {/* 1. Main Gallery & Thumbnails Carousel (Screenshot 1 Top) */}
        <div className="space-y-3">
          {/* Main big image */}
          <div className="relative w-full aspect-square rounded-2xl bg-[#141417] border border-[#27272a] overflow-hidden shadow-2xl">
            <Image
              src={product.images[selectedImageIndex] || product.images[0]}
              alt={product.name}
              fill
              priority
              className="object-cover transition-all duration-300"
            />
            {/* Watermark / Badge overlay */}
            <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-black uppercase text-[#ccff00] border border-[#ccff00]/40 font-btn">
              {product.badge || "1 / 1"}
            </div>
          </div>

          {/* Thumbnails Row */}
          <div className="grid grid-cols-4 gap-2.5">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImageIndex(idx)}
                className={`relative aspect-square rounded-xl overflow-hidden bg-zinc-900 border transition-all ${
                  selectedImageIndex === idx
                    ? "border-[#ccff00] ring-2 ring-[#ccff00]/30 scale-[1.02]"
                    : "border-[#27272a] opacity-70 hover:opacity-100"
                }`}
              >
                <Image
                  src={img}
                  alt={`${product.name} nézet ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* 2. Brand / Category Tags (Screenshot 1: Nike, Dunk, 1/1) */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          {product.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-[#ccff00] text-white bg-black/40 hover:bg-[#ccff00]/10 transition font-btn"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* 3. Title and Price (Nekst font, soft weight, not uppercase) */}
        <div className="space-y-1.5">
          <h1 className="text-xl sm:text-2xl font-medium text-white font-nekst normal-case tracking-normal">
            {product.name}
          </h1>
          <div className="text-2xl sm:text-3xl font-medium text-[#ccff00] font-nekst normal-case tracking-normal">
            {product.price.toLocaleString("hu-HU")} Ft
          </div>
        </div>

        {/* Divider */}
        <hr className="border-zinc-800" />

        {/* 4. Size Selector (Nekst font, soft weight, not uppercase) */}
        {product.sizes && product.sizes.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-normal text-zinc-300 font-nekst normal-case">
                Méret: <span className="text-white font-semibold">{selectedSize}</span>
              </span>
              <Link
                href="/merettablazat"
                className="text-xs text-zinc-400 hover:text-[#ccff00] underline font-sans"
              >
                Mérettáblázat
              </Link>
            </div>

            <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
              {product.sizes.map((size) => {
                const isSelected = selectedSize === size;
                return (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2.5 px-2 rounded-lg text-sm font-medium transition-all flex items-center justify-center border font-nekst normal-case ${
                      isSelected
                        ? "bg-[#ccff00] text-black border-[#ccff00] shadow-md shadow-[#ccff00]/20 scale-105 font-semibold"
                        : "bg-[#141416] text-white border-zinc-800 hover:border-[#ccff00]/60 hover:text-[#ccff00]"
                    }`}
                  >
                    {size}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* 5. Quantity Stepper (Nekst font, soft weight, not uppercase) */}
        <div className="space-y-2">
          <span className="text-sm font-normal text-zinc-300 block font-nekst normal-case">
            Mennyiség:
          </span>
          <div className="inline-flex items-center border border-zinc-800 rounded-lg bg-[#141416] p-1">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="w-9 h-9 flex items-center justify-center text-zinc-400 hover:text-white rounded hover:bg-zinc-800 transition"
              aria-label="Csökkentés"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-12 text-center text-sm font-medium text-white font-nekst normal-case">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="w-9 h-9 flex items-center justify-center text-zinc-400 hover:text-white rounded hover:bg-zinc-800 transition"
              aria-label="Növelés"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 6. Ajánlott Cross-sells (Nekst font, soft weight, not uppercase) */}
        <div className="space-y-2.5 pt-2">
          <span className="text-sm font-normal text-zinc-300 block font-nekst normal-case">
            Ajánlott:
          </span>

          <div className="space-y-2">
            {RECOMMENDED_ADDONS.slice(0, 2).map((addon) => {
              const isSelected = selectedAddons.some((a) => a.id === addon.id);
              return (
                <div
                  key={addon.id}
                  onClick={() => toggleAddon(addon)}
                  className={`cursor-pointer rounded-xl border p-2.5 flex items-center justify-between transition-all ${
                    isSelected
                      ? "bg-[#141416] border-[#ccff00] shadow-sm shadow-[#ccff00]/10"
                      : "bg-[#141416] border-zinc-800 hover:border-zinc-700"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {/* Thumbnail box */}
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0 relative border ${
                        addon.id === "sneaker-shield"
                          ? "bg-[#ccff00] border-[#ccff00]"
                          : "bg-zinc-900 border-zinc-800"
                      }`}
                    >
                      <Image
                        src={addon.image}
                        alt={addon.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <h4 className="text-xs sm:text-sm font-normal text-white leading-tight font-nekst normal-case">
                        {addon.name}
                      </h4>
                      <span className="text-xs font-medium text-[#ccff00] font-nekst normal-case">
                        {addon.price.toLocaleString("hu-HU")} Ft
                      </span>
                    </div>
                  </div>

                  {/* Toggle Indicator */}
                  <div
                    className={`w-6 h-6 rounded-md flex items-center justify-center border transition ${
                      isSelected
                        ? "bg-[#ccff00] border-[#ccff00] text-black"
                        : "border-zinc-700 bg-zinc-900 text-transparent"
                    }`}
                  >
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 7. Big CTA Button (Bold Nekst font, Uppercase styling) */}
        <div className="pt-3">
          {product.isDigital ? (
            <GuideBuyButton label="MEGVÁSÁROLOM – 1 000 Ft" />
          ) : (
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 rounded-xl font-extrabold text-base uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-xl shadow-[#ccff00]/25 font-btn ${
                addedAnimation
                  ? "bg-white text-black scale-95"
                  : "bg-[#ccff00] text-black hover:bg-[#b3e600] hover:scale-[1.01]"
              }`}
            >
              {addedAnimation ? (
                <>
                  <Check className="w-5 h-5 stroke-[3]" />
                  <span>KOSÁRBA HELYEZVE!</span>
                </>
              ) : (
                <span>KOSÁRBA TESZEM</span>
              )}
            </button>
          )}
        </div>

        {/* 8. Trust Badges */}
        <div className="grid grid-cols-3 gap-2 pt-2 text-center text-[10px] text-zinc-400 font-bold uppercase font-btn">
          <div className="p-2 rounded-lg bg-zinc-900/60 border border-zinc-800/80 flex flex-col items-center gap-1">
            <ShieldCheck className="w-4 h-4 text-[#ccff00]" />
            <span>1/1 Minőség</span>
          </div>
          <div className="p-2 rounded-lg bg-zinc-900/60 border border-zinc-800/80 flex flex-col items-center gap-1">
            <Truck className="w-4 h-4 text-[#ccff00]" />
            <span>5-9 Nap Szállítás</span>
          </div>
          <div className="p-2 rounded-lg bg-zinc-900/60 border border-zinc-800/80 flex flex-col items-center gap-1">
            <RefreshCw className="w-4 h-4 text-[#ccff00]" />
            <span>Méretcsere</span>
          </div>
        </div>

        {/* 9. Product Details Tabs (Headers in Antry Sans, Body in Sora) */}
        <div className="pt-6 border-t border-zinc-800 space-y-4">
          <div className="flex border-b border-zinc-800 text-xs font-black uppercase tracking-wider font-display">
            <button
              onClick={() => setActiveTab("desc")}
              className={`py-2 px-4 transition border-b-2 font-display ${
                activeTab === "desc"
                  ? "border-[#ccff00] text-[#ccff00]"
                  : "border-transparent text-zinc-400 hover:text-white"
              }`}
            >
              LEÍRÁS
            </button>
            <button
              onClick={() => setActiveTab("specs")}
              className={`py-2 px-4 transition border-b-2 font-display ${
                activeTab === "specs"
                  ? "border-[#ccff00] text-[#ccff00]"
                  : "border-transparent text-zinc-400 hover:text-white"
              }`}
            >
              TULAJDONSÁGOK
            </button>
            <button
              onClick={() => setActiveTab("shipping")}
              className={`py-2 px-4 transition border-b-2 font-display ${
                activeTab === "shipping"
                  ? "border-[#ccff00] text-[#ccff00]"
                  : "border-transparent text-zinc-400 hover:text-white"
              }`}
            >
              BESZERZÉS & SZÁLLÍTÁS
            </button>
          </div>

          <div className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
            {activeTab === "desc" && (
              <div className="space-y-3">
                <p>{product.fullDescription}</p>
                {product.materials && (
                  <p className="text-xs text-zinc-400">
                    <strong className="text-white">Anyaghasználat:</strong> {product.materials}
                  </p>
                )}
              </div>
            )}

            {activeTab === "specs" && (
              <ul className="space-y-2">
                {product.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            )}

            {activeTab === "shipping" && (
              <div className="space-y-2">
                <p>
                  <strong className="text-white">Várható beszerzési és kézbesítési idő:</strong> {product.sourcingTime || "5-9 munkanap"}
                </p>
                <p>
                  Minden rendelés előtt kérésre részletes fotókat (QC fotók) biztosítunk a termék állapotáról és címkéiről. Amennyiben a méret nem megfelelő, 14 napon belül díjmentesen cseréljük.
                </p>
              </div>
            )}
          </div>
        </div>

      </div>

      {/* 10. Related Products Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 mt-16 border-t border-zinc-800 space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl sm:text-2xl font-black uppercase text-white tracking-tight font-display">
            HASZONLÓ TERMÉKEK
          </h3>
          <Link
            href="/katalogus"
            className="text-xs font-black uppercase text-[#ccff00] hover:underline font-btn"
          >
            ÖSSZES MEGTEKINTÉSE →
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {relatedProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}

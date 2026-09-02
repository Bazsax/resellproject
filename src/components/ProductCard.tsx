import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  badgeText?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, badgeText }) => {
  const targetUrl = product.href ?? (product.isDigital ? "/utmutato" : `/termek/${product.slug}`);
  const categoryLabel = product.isDigital
    ? (product.subCategory ?? "Útmutató")
    : product.subCategory ?? product.category;

  return (
    <Link
      href={targetUrl}
      className="group relative flex flex-col bg-[#121214] border border-[#27272a] rounded-2xl overflow-hidden hover:border-[#ccff00]/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#ccff00]/5 font-sans"
    >
      <div className="absolute top-2.5 left-2.5 z-10 flex flex-col gap-1">
        {product.badge && (
          <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-[#ccff00] text-black tracking-wider font-btn">
            {product.badge}
          </span>
        )}
        {badgeText && (
          <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-black/80 text-white border border-zinc-700 backdrop-blur-sm font-btn">
            {badgeText}
          </span>
        )}
      </div>

      {product.originalPrice && (
        <div className="absolute top-2.5 right-2.5 z-10">
          <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-red-600/90 text-white font-btn">
            -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
          </span>
        </div>
      )}

      <div className="relative w-full aspect-square bg-[#161619] overflow-hidden">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-transparent opacity-60" />
      </div>

      <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
        <div>
          <p className="text-[11px] font-medium text-zinc-500 font-sans normal-case">
            {categoryLabel}
          </p>

          <h3 className="text-xs sm:text-sm font-medium text-white line-clamp-2 mt-1 transition font-nekst normal-case">
            {product.name}
          </h3>
        </div>

        <div className="mt-3 pt-2.5 border-t border-zinc-800/80 flex items-center justify-between gap-2">
          <div>
            {product.originalPrice && (
              <span className="text-[10px] text-zinc-500 line-through block font-nekst normal-case">
                {product.originalPrice.toLocaleString("hu-HU")} Ft
              </span>
            )}
            <span className="text-sm sm:text-base font-semibold text-[#ccff00] font-nekst normal-case">
              {product.price.toLocaleString("hu-HU")} Ft
            </span>
          </div>

          <span className="shrink-0 inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-700 text-[10px] font-bold uppercase text-white group-hover:border-[#ccff00] transition font-btn">
            <span>Részletek</span>
            <ArrowUpRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </Link>
  );
};

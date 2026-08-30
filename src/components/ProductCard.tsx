import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Sparkles, FileText } from "lucide-react";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  badgeText?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, badgeText }) => {
  const targetUrl = product.isDigital ? "/utmutato" : `/termek/${product.slug}`;

  return (
    <Link
      href={targetUrl}
      className="group relative flex flex-col bg-[#121214] border border-[#27272a] rounded-2xl overflow-hidden hover:border-[#ccff00]/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#ccff00]/5"
    >
      {/* Top badges */}
      <div className="absolute top-2.5 left-2.5 z-10 flex flex-col gap-1">
        {product.badge && (
          <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-[#ccff00] text-black tracking-wider">
            {product.badge}
          </span>
        )}
        {badgeText && (
          <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-black/80 text-white border border-zinc-700 backdrop-blur-sm">
            {badgeText}
          </span>
        )}
      </div>

      {product.originalPrice && (
        <div className="absolute top-2.5 right-2.5 z-10">
          <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-red-600/90 text-white">
            -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
          </span>
        </div>
      )}

      {/* Image Container */}
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

      {/* Content details matching screenshot cards */}
      <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-zinc-400 uppercase">
            <span className="text-[#ccff00]">{product.brand}</span>
            {product.subCategory && <span>• {product.subCategory}</span>}
          </div>

          <h3 className="text-xs sm:text-sm font-bold text-white uppercase tracking-tight line-clamp-2 mt-1 group-hover:text-[#ccff00] transition">
            {product.name}
          </h3>
        </div>

        <div className="mt-3 pt-2.5 border-t border-zinc-800/80 flex items-center justify-between">
          <div>
            {product.originalPrice && (
              <span className="text-[10px] text-zinc-500 line-through block">
                {product.originalPrice.toLocaleString("hu-HU")} Ft
              </span>
            )}
            <span className="text-sm sm:text-base font-black text-[#ccff00]">
              {product.price.toLocaleString("hu-HU")} Ft
            </span>
          </div>

          <div className="w-7 h-7 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-zinc-400 group-hover:bg-[#ccff00] group-hover:text-black group-hover:border-[#ccff00] transition">
            {product.isDigital ? (
              <FileText className="w-3.5 h-3.5" />
            ) : (
              <ArrowUpRight className="w-3.5 h-3.5" />
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

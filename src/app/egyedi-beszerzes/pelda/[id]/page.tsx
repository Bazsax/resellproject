import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Star, Check, Package } from "lucide-react";
import { getSourcingExampleById, SOURCING_EXAMPLES } from "@/data/sourcing-examples";

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return SOURCING_EXAMPLES.map((ex) => ({ id: ex.id }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const example = getSourcingExampleById(id);
  if (!example) return { title: "Példa nem található | Direct Supply" };
  return {
    title: `${example.title} – Beszerzési példa | Direct Supply`,
    description: example.description ?? example.note,
  };
}

export default async function SourcingExampleDetailPage({ params }: PageProps) {
  const { id } = await params;
  const example = getSourcingExampleById(id);
  if (!example) notFound();

  return (
    <div className="min-h-screen bg-black text-white pb-20">
      <div className="bg-[#121214] border-b border-[#27272a] py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
          <Link
            href="/egyedi-beszerzes#pelda"
            className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-[#ccff00] transition font-normal"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Vissza a példákhoz
          </Link>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-[#ccff00]/10 text-[#ccff00] border border-[#ccff00]/30">
              {example.category}
            </span>
            <span className="text-[10px] text-zinc-500 font-normal">{example.deliveryDays} szállítás</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black uppercase text-white font-display leading-tight">
            {example.title}
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-[#27272a] bg-zinc-900">
          <Image src={example.image} alt={example.title} fill className="object-cover" priority />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-[#121214] border border-[#27272a]">
            <p className="text-[10px] text-zinc-500 font-normal uppercase">Ügyfél ár</p>
            <p className="text-xl font-black text-[#ccff00] font-display mt-1">
              {example.clientPrice.toLocaleString("hu-HU")} Ft
            </p>
          </div>
          {example.retailCompare && (
            <div className="p-4 rounded-xl bg-[#121214] border border-[#27272a]">
              <p className="text-[10px] text-zinc-500 font-normal uppercase">Retail ár</p>
              <p className="text-xl font-black text-zinc-400 line-through font-display mt-1">
                {example.retailCompare.toLocaleString("hu-HU")} Ft
              </p>
            </div>
          )}
          <div className="p-4 rounded-xl bg-[#121214] border border-[#27272a]">
            <p className="text-[10px] text-zinc-500 font-normal uppercase">Minőség</p>
            <div className="flex items-center gap-1 mt-1.5">
              {Array.from({ length: example.qualityScore }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#ccff00] text-[#ccff00]" />
              ))}
              <span className="text-xs text-zinc-300 ml-1 font-normal">{example.qualityLabel}</span>
            </div>
          </div>
        </div>

        {example.description && (
          <div className="space-y-3">
            <h2 className="text-lg font-black uppercase text-white font-display">A rendelés</h2>
            <p className="text-sm text-zinc-300 leading-relaxed font-normal">{example.description}</p>
          </div>
        )}

        {example.highlights && example.highlights.length > 0 && (
          <div className="space-y-3">
            <h2 className="text-lg font-black uppercase text-white font-display">Mit kaptunk</h2>
            <ul className="space-y-2">
              {example.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-zinc-300 font-normal">
                  <Check className="w-4 h-4 text-[#ccff00] flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="p-6 rounded-2xl bg-gradient-to-br from-[#ccff00]/5 to-[#121214] border border-[#ccff00]/30 text-center space-y-4">
          <Package className="w-8 h-8 text-[#ccff00] mx-auto" />
          <p className="text-sm text-zinc-300 font-normal max-w-md mx-auto">
            Szeretnél hasonló minőségű terméket? Küldd el az igényedet, és 24 órán belül visszajelzünk árajánlattal.
          </p>
          <Link
            href="/egyedi-beszerzes"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#ccff00] text-black text-xs font-black uppercase tracking-wider hover:bg-[#b3e600] transition"
          >
            Beszerzés igénylése
          </Link>
        </div>
      </div>
    </div>
  );
}

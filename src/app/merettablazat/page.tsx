import React from "react";
import Link from "next/link";
import { Ruler, Sparkles, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Mérettáblázat & Garancia | EgyPerEgy",
  description: "Cipő (Nike, Jordan) és ruházati (Trapstar, Sp5der) mérettáblázat EU, US, UK és CM értékekkel."
};

export default function SizeGuidePage() {
  const shoeSizes = [
    { eu: "36", us: "4.0", uk: "3.5", cm: "23.0" },
    { eu: "37", us: "5.0", uk: "4.5", cm: "23.5" },
    { eu: "38", us: "5.5", uk: "5.0", cm: "24.0" },
    { eu: "39", us: "6.5", uk: "6.0", cm: "24.5" },
    { eu: "40", us: "7.0", uk: "6.0", cm: "25.0" },
    { eu: "41", us: "8.0", uk: "7.0", cm: "26.0" },
    { eu: "41.5", us: "8.5", uk: "7.5", cm: "26.5" },
    { eu: "42", us: "8.5", uk: "7.5", cm: "26.5" },
    { eu: "42.5", us: "9.0", uk: "8.0", cm: "27.0" },
    { eu: "43", us: "9.5", uk: "8.5", cm: "27.5" },
    { eu: "44", us: "10.0", uk: "9.0", cm: "28.0" },
    { eu: "44.5", us: "10.5", uk: "9.5", cm: "28.5" },
    { eu: "45", us: "11.0", uk: "10.0", cm: "29.0" },
    { eu: "46", us: "12.0", uk: "11.0", cm: "30.0" }
  ];

  const apparelSizes = [
    { size: "S", chest: "92 - 97 cm", length: "68 cm", sleeve: "64 cm" },
    { size: "M", chest: "98 - 103 cm", length: "70 cm", sleeve: "66 cm" },
    { size: "L", chest: "104 - 109 cm", length: "73 cm", sleeve: "68 cm" },
    { size: "XL", chest: "110 - 116 cm", length: "76 cm", sleeve: "70 cm" },
    { size: "XXL", chest: "117 - 124 cm", length: "79 cm", sleeve: "72 cm" }
  ];

  return (
    <div className="min-h-screen bg-black text-white pb-24">
      <div className="bg-[#121214] border-b border-[#27272a] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ccff00]/10 border border-[#ccff00]/40 text-xs font-black uppercase tracking-wider text-[#ccff00]">
            <Ruler className="w-3.5 h-3.5" /> Méretválasztási Útmutató
          </div>
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-display">
            MÉRETTÁBLÁZAT & GARANCIA
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto">
            Hogy biztosan a számodra tökéletes méretet válaszd. Ha mégsem stimmelne, 14 napos díjmentes méretcserét biztosítunk!
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-12 space-y-12">
        {/* Sneaker Table */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black uppercase text-white font-display tracking-tight flex items-center gap-2">
            <span className="text-[#ccff00]">👟</span> Cipő Mérettáblázat (EU / US / UK / CM)
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-[#27272a] bg-[#121214]">
            <table className="w-full text-left text-xs">
              <thead className="bg-zinc-900 border-b border-zinc-800 text-zinc-400 font-black uppercase tracking-wider">
                <tr>
                  <th className="p-3.5 text-[#ccff00]">EUR Méret</th>
                  <th className="p-3.5">US Férfi</th>
                  <th className="p-3.5">UK</th>
                  <th className="p-3.5">Belső talphossz (CM)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60 font-semibold text-zinc-200">
                {shoeSizes.map((row, i) => (
                  <tr key={i} className="hover:bg-zinc-800/40 transition">
                    <td className="p-3.5 font-black text-white">{row.eu}</td>
                    <td className="p-3.5">{row.us}</td>
                    <td className="p-3.5">{row.uk}</td>
                    <td className="p-3.5 text-[#ccff00]">{row.cm} cm</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Apparel Table */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black uppercase text-white font-display tracking-tight flex items-center gap-2">
            <span className="text-[#ccff00]">👕</span> Streetwear & Ruházat Mérettáblázat (Puffer / Hoodie)
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-[#27272a] bg-[#121214]">
            <table className="w-full text-left text-xs">
              <thead className="bg-zinc-900 border-b border-zinc-800 text-zinc-400 font-black uppercase tracking-wider">
                <tr>
                  <th className="p-3.5 text-[#ccff00]">Méret</th>
                  <th className="p-3.5">Mellbőség</th>
                  <th className="p-3.5">Hosszúság</th>
                  <th className="p-3.5">Ujjhossz</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60 font-semibold text-zinc-200">
                {apparelSizes.map((row, i) => (
                  <tr key={i} className="hover:bg-zinc-800/40 transition">
                    <td className="p-3.5 font-black text-white">{row.size}</td>
                    <td className="p-3.5">{row.chest}</td>
                    <td className="p-3.5">{row.length}</td>
                    <td className="p-3.5 text-[#ccff00]">{row.sleeve}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Guarantees list */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#121214] border border-[#ccff00]/40 space-y-4">
          <h3 className="text-lg font-black uppercase text-white font-display">
            14 Napos Méretcsere Szabályzat
          </h3>
          <div className="space-y-2 text-xs sm:text-sm text-zinc-300">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#ccff00] flex-shrink-0 mt-0.5" />
              <span>A terméket az átvételtől számított 14 napon belül eredeti állapotában, dobozával és címkéivel együtt cseréljük.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#ccff00] flex-shrink-0 mt-0.5" />
              <span>A cserefolyamat elindításához csak küldj egy üzenetet az Instagram ügyfélszolgálatunknak.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

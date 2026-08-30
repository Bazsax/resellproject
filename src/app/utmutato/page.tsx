import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  CheckCircle2, 
  Download, 
  ExternalLink, 
  ShieldCheck, 
  Flame, 
  BookOpen, 
  Sparkles, 
  Star,
  Users,
  Zap,
  Lock,
  ArrowRight
} from "lucide-react";
import { PRODUCTS } from "@/data/products";

export const metadata = {
  title: "Digitális Resell Masterclass & Gyári Beszállítói Lista 2026 | Gumroad",
  description: "A hivatalos, teljes digitális viszonteladói útmutató. 25+ ellenőrzött prémium 1/1 beszállító közvetlen elérhetősége, vámolási kisokos és eladási technikák."
};

export default function GuidePage() {
  const guideProduct = PRODUCTS.find((p) => p.isDigital) || PRODUCTS[1];

  const modules = [
    {
      number: "01",
      title: "Közvetlen Gyári 1/1 Beszállítói Kontaktok",
      description: "25+ ellenőrzött, megbízható beszállító közvetlen WhatsApp és WeChat elérhetősége. Sneakerek (Jordan, Dunk, Travis), Streetwear (Trapstar, Sp5der), Luxus órák és táskák a legmagasabb minőségben, közvetítői felárak nélkül."
    },
    {
      number: "02",
      title: "Vámolási és Szállítási Kisokos (Magyarország)",
      description: "Lépésről-lépésre bemutatott vámmentes szállítási vonalak (Triangle Shipping / Tariff-less). Hogyan kerüld el a vámvizsgálatot, a lefoglalásokat és az extra adókat teljesen legálisan."
    },
    {
      number: "03",
      title: "Vinted, Instagram & Marketplace Eladási Stratégia",
      description: "Hogyan készíts olyan fotókat és leírásokat, amik 24 órán belül eladják a termékeidet. Hirdetési szövegsablonok, ügyfélkezelési forgatókönyvek és profilépítés a maximális bizalomért."
    },
    {
      number: "04",
      title: "Árrés Maximalizálás & Profit Kalkulátor",
      description: "Hogyan érj el 40-70%-os tiszta haszonkulcsot minden egyes eladáson. Letölthető Notion és Excel táblázatok, amelyek kiszámolják helyetted a beszerzési költséget, szállítási díjat és a tiszta profitot."
    },
    {
      number: "05",
      title: "Minőségellenőrzés (QC) Mesterfogások",
      description: "Hogyan ismerd fel az 1/1 minőséget a hibás budget másolatokkal szemben. Varrások, bőr textúrák, dobozcímkék és UV-fényes ellenőrzések, hogy az ügyfeleid mindig a legjobbat kapják."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pb-24">
      {/* Top Banner Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#141418] via-black to-black border-b border-[#27272a] pt-12 pb-16 sm:pt-16 sm:pb-24">
        {/* Glow lights */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#ccff00]/15 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-semibold text-zinc-500 uppercase tracking-wider">
            <Link href="/" className="hover:text-[#ccff00]">Főoldal</Link>
            <span>/</span>
            <span className="text-[#ccff00]">Digitális Resell Útmutató</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ccff00] text-black text-xs font-black uppercase tracking-wider">
                <Flame className="w-4 h-4" />
                <span>Hivatalos 2026-os Kiadás • Gumroad Instant Download</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white font-display leading-[0.95]">
                A TELJES RESELL ÉS <br />
                <span className="text-[#ccff00] drop-shadow-[0_0_20px_rgba(204,255,0,0.3)]">
                  GYÁRI BESZÁLLÍTÓI
                </span> <br />
                DOKUMENTÁCIÓ
              </h1>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-xl font-normal">
                Indítsd el a saját viszonteladói és beszerzési vállalkozásodat közvetlen kapcsolatokkal! 25+ ellenőrzött gyár, vámolási kisokos és kész sablonok.
              </p>

              {/* Gumroad Action Box */}
              <div className="p-6 rounded-2xl bg-[#121214] border-2 border-[#ccff00]/50 shadow-2xl space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <span className="text-xs text-zinc-500 line-through block">29 990 Ft helyett</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-black text-[#ccff00]">14 990 Ft</span>
                      <span className="text-xs font-extrabold px-2 py-0.5 rounded bg-red-600/80 text-white uppercase">
                        -50% Akció
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-zinc-300 font-semibold">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span>5.0 / 5.0 Értékelés (128 eladás)</span>
                  </div>
                </div>

                {/* Primary Buy on Gumroad button */}
                <a
                  href={guideProduct.gumroadUrl || "https://gumroad.com"}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-4 px-6 rounded-xl font-black text-sm sm:text-base uppercase tracking-wider bg-[#ccff00] text-black hover:bg-[#b3e600] transition flex items-center justify-center gap-2 shadow-xl shadow-[#ccff00]/30 font-display"
                >
                  <Download className="w-5 h-5" />
                  <span>MEGVÁSÁROLOM ÉS LETÖLTÖM (GUMROAD)</span>
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>

                <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-zinc-400 pt-1">
                  <span className="flex items-center gap-1">
                    <Lock className="w-3.5 h-3.5 text-[#ccff00]" />
                    Biztonságos bankkártyás fizetés
                  </span>
                  <span>•</span>
                  <span>Azonnali PDF + Notion link</span>
                  <span>•</span>
                  <span>Örökös frissítés</span>
                </div>
              </div>
            </div>

            {/* Right Visual 3D E-book mock */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl bg-gradient-to-b from-zinc-800 to-black p-4 border border-[#ccff00]/40 shadow-2xl overflow-hidden group">
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src={guideProduct.images[0]}
                    alt="Resell Masterclass Cover"
                    fill
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 space-y-2">
                    <span className="text-xs font-black uppercase px-2.5 py-1 rounded bg-[#ccff00] text-black inline-block">
                      DIGITÁLIS CSOMAG
                    </span>
                    <h3 className="text-xl font-black uppercase text-white font-display">
                      RESELL HU MASTERCLASS 2026
                    </h3>
                    <p className="text-xs text-zinc-300">
                      PDF, Excel táblázatok & Frissülő Discord/Notion csatorna
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Detailed Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-black uppercase tracking-wider text-[#ccff00]">
            Részletes Tartalomjegyzék
          </span>
          <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight font-display">
            MIT TARTALMAZ A DOKUMENTÁCIÓ?
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            5 átfogó fejezet, amelyek átvezetnek a beszerzéstől a vámoláson át a sikeres eladásokig.
          </p>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {modules.map((mod) => (
            <div
              key={mod.number}
              className="p-6 rounded-2xl bg-[#121214] border border-[#27272a] hover:border-[#ccff00]/50 transition duration-300 flex flex-col sm:flex-row items-start gap-4 sm:gap-6"
            >
              <div className="w-12 h-12 rounded-xl bg-[#ccff00] text-black flex items-center justify-center font-black text-lg flex-shrink-0 font-display shadow-md shadow-[#ccff00]/20">
                {mod.number}
              </div>
              <div className="space-y-1.5 flex-1">
                <h3 className="text-base sm:text-lg font-black uppercase text-white tracking-tight font-display">
                  {mod.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {mod.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Value Comparison */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-zinc-800">
        <div className="rounded-3xl bg-zinc-950 border border-zinc-800 p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-6">
          <h3 className="text-2xl sm:text-3xl font-black uppercase text-white font-display">
            MIÉRT ÉRI MEG MÁR AZ ELSŐ HÉTEN?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left pt-2">
            <div className="p-5 rounded-xl bg-red-950/30 border border-red-800/40 space-y-2">
              <h4 className="text-sm font-bold text-red-400 uppercase">Útmutató Nélkül</h4>
              <p className="text-xs text-zinc-400">
                Rossz minőségű termékek rendelése, vámon lefoglalt csomagok, elbukott tízezrek és megbízhatatlan viszonteladói felárak.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-lime-950/30 border border-[#ccff00]/40 space-y-2">
              <h4 className="text-sm font-bold text-[#ccff00] uppercase">A Dokumentációval</h4>
              <p className="text-xs text-zinc-300">
                Közvetlen gyári árak, 100%-ban biztonságos vámmentes szállítás, garantált 1/1 prémium minőség és azonnali profit az eladásokból.
              </p>
            </div>
          </div>

          <div className="pt-4">
            <a
              href={guideProduct.gumroadUrl || "https://gumroad.com"}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-black uppercase tracking-wider bg-[#ccff00] text-black hover:bg-[#b3e600] transition shadow-xl shadow-[#ccff00]/25"
            >
              <Download className="w-4 h-4" />
              <span>Megvásárolom Gumroadon (14 990 Ft)</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

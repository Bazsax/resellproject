import React from "react";
import Link from "next/link";
import { HelpCircle, ChevronRight, Sparkles, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Gyakori Kérdések (GYIK) | Direct Supply",
  description: "Válaszok a leggyakoribb kérdésekre a digitális resell útmutatóról, beszerzési folyamatról, méretcseréről és szállításról."
};

export default function FAQPage() {
  const faqs = [
    {
      q: "Hogyan kapom meg a Digitális Resell Útmutatót a vásárlás után?",
      a: "A fizetés a biztonságos Gumroad felületén történik. A sikeres vásárlást követően a rendszer azonnal átirányít a letöltési oldalra, valamint e-mailben is megkapod a letölthető PDF dokumentumot és a folyamatosan frissülő Notion/Discord hozzáférési linket."
    },
    {
      q: "Mit jelent a beszerzési szolgáltatás (Sourcing Service)?",
      a: "Nem tartunk hatalmas raktárkészletet közvetlen eladásra, hanem személyes beszerzési közvetítőként segítünk hozzájutni a legmagasabb 1/1 minőségű gyári darabokhoz a legkedvezőbb közvetlen árakon. A rendelés előtt és után QC (minőségellenőrzési) fotókat készítünk, és garantáljuk a csomag sérülésmentes érkezését."
    },
    {
      q: "Mennyi a várható szállítási idő a beszerzett termékeknél?",
      a: "A minőségellenőrzés után a termékek átlagosan 5-9 munkanap alatt megérkeznek Magyarországra. Minden küldeményhez nyomkövetési kódot (tracking number) biztosítunk."
    },
    {
      q: "Mi a teendő, ha nem jó a cipő/ruha mérete?",
      a: "14 napos méretcsere garanciát biztosítunk! Ha a kézhezvétel után úgy találod, hogy a méret nem tökéletes, vedd fel velünk a kapcsolatot Instagramon vagy e-mailben, és díjmentesen intézzük a méretcserét."
    },
    {
      q: "Biztonságos a vámolás Magyarországra?",
      a: "Igen! Kizárólag speciális vámmentes háromszög-szállítási (Triangle Tariff-less) vonalakat használunk, ami azt jelenti, hogy az Európai Unión belüli elosztóközpontból érkezik a csomagod. Nincs semmilyen extra vámteher vagy meglepetés költség."
    },
    {
      q: "Kérhetek olyan cipőt vagy ruhát is, ami nincs fent a weboldalon?",
      a: "Természetesen! Az 'Egyedi Beszerzés' menüpontban tölthetsz fel fotót vagy linket bármilyen keresett sneaker-ről, streetwear darabról, luxus óráról vagy táskáról, és munkatársaink 24 órán belül megkeresik a legjobb gyári beszállítót a legjobb áron."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pb-24">
      <div className="bg-[#121214] border-b border-[#27272a] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ccff00]/10 border border-[#ccff00]/40 text-xs font-black uppercase tracking-wider text-[#ccff00]">
            <HelpCircle className="w-3.5 h-3.5" /> Információs Központ
          </div>
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-display">
            GYAKORI KÉRDÉSEK (GYIK)
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto">
            Minden fontos tudnivaló a digitális termékek letöltéséről, a beszerzés menetéről és a garanciákról.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-12 space-y-6">
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#121214] border border-[#27272a] hover:border-[#ccff00]/50 transition space-y-2"
            >
              <h3 className="text-base font-black uppercase text-white font-display tracking-tight flex items-start gap-2">
                <span className="text-[#ccff00]">Q:</span>
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Contact Box */}
        <div className="p-8 rounded-3xl bg-zinc-950 border border-zinc-800 text-center space-y-4 mt-12">
          <h3 className="text-xl font-black uppercase text-white font-display">
            További kérdésed maradt?
          </h3>
          <p className="text-xs text-zinc-400 max-w-md mx-auto">
            Írj nekünk Instagramon vagy e-mailben, és ügyfélszolgálatunk pár órán belül válaszol!
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <Link
              href="/kapcsolat"
              className="px-6 py-3 rounded-xl font-black text-xs uppercase bg-[#ccff00] text-black hover:bg-[#b3e600] inline-flex items-center gap-2"
            >
              <span>Kapcsolatfelvétel</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

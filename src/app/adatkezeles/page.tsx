import React from "react";
import { Lock } from "lucide-react";

export const metadata = {
  title: "Adatkezelési Tájékoztató (GDPR) | LOGO IDE",
  description: "Adatvédelmi és adatkezelési szabályzat."
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white pb-24">
      <div className="bg-[#121214] border-b border-[#27272a] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ccff00]/10 border border-[#ccff00]/40 text-xs font-black uppercase tracking-wider text-[#ccff00]">
            <Lock className="w-3.5 h-3.5" /> Adatvédelem & GDPR
          </div>
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-display">
            ADATKEZELÉSI TÁJÉKOZTATÓ
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto">
            A felhasználói és megrendelői adatok védelme kiemelt fontosságú számunkra.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-12 space-y-8 text-xs sm:text-sm text-zinc-300 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-base font-black uppercase text-white font-display">1. Adatkezelő Adatai</h2>
          <p>
            Az adatok kezelője a LOGO IDE / Resell Hub üzemeltetője. Kapcsolattartási e-mail cím: info@resellbolt.hu.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-black uppercase text-white font-display">2. Kezelt Adatok Köre és Célja</h2>
          <p>
            A beszerzési igény leadásakor és a kapcsolatfelvételi űrlap kitöltésekor megadott személyes adatokat (Név, E-mail cím, Instagram felhasználónév, Telefonszám, Szállítási cím) kizárólag a megrendelés teljesítése, a szállítás megszervezése és a közvetlen kommunikáció céljából kezeljük. Harmadik félnek marketing célokra semmilyen körülmények között nem adjuk át.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-black uppercase text-white font-display">3. Sütik (Cookies) és Analitika</h2>
          <p>
            Weboldalunk kizárólag a működéshez elengedhetetlen technikai sütiket használ a felhasználói élmény és a kosár állapotának megőrzése érdekében.
          </p>
        </section>
      </div>
    </div>
  );
}

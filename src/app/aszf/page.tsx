import React from "react";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Általános Szerződési Feltételek (ÁSZF) | Direct Supply",
  description: "Általános Szerződési Feltételek digitális termékekre és beszerzési közvetítésre."
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white pb-24">
      <div className="bg-[#121214] border-b border-[#27272a] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ccff00]/10 border border-[#ccff00]/40 text-xs font-black uppercase tracking-wider text-[#ccff00]">
            <ShieldCheck className="w-3.5 h-3.5" /> Jogi Dokumentáció
          </div>
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-display">
            ÁLTALÁNOS SZERZŐDÉSI FELTÉTELEK (ÁSZF)
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto">
            Hatályos: 2026. január 1-től visszavonásig.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-12 space-y-8 text-xs sm:text-sm text-zinc-300 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-base font-black uppercase text-white font-display">1. Általános Rendelkezések</h2>
          <p>
            Jelen Általános Szerződési Feltételek (a továbbiakban: ÁSZF) szabályozza a Szolgáltató weboldalán (Direct Supply, directsupply.hu) elérhető digitális oktatóanyagok értékesítését, valamint a ruházati és cipőipari termékekre vonatkozó egyedi beszerzési és közvetítői szolgáltatás igénybevételének feltételeit.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-black uppercase text-white font-display">2. Digitális Termékek Vásárlása (Gumroad)</h2>
          <p>
            A weboldalon megjelölt digitális e-bookok, beszállítói listák és dokumentációk értékesítése a Gumroad Inc. nemzetközi fizetési platformján keresztül valósul meg. A sikeres tranzakciót követően a vevő azonnali hozzáférést kap a letöltési linkhez. Mivel a digitális tartalom azonnal rendelkezésre áll és letölthető, a 45/2014. (II. 26.) Korm. rendelet 29. § (1) bekezdés m) pontja értelmében a vásárló a letöltés megkezdésével lemond az elállási jogáról.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-black uppercase text-white font-display">3. Beszerzési Közvetítés (Sourcing Service)</h2>
          <p>
            A Szolgáltató beszerzési közvetítőként jár el a megrendelő megbízása alapján. A Szolgáltató felkutatja a kívánt terméket a minősített gyári partnereknél, elvégzi az előzetes minőségellenőrzést (QC), és koordinálja a biztonságos vámmentes szállítást.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-black uppercase text-white font-display">4. Méretcsere és Reklamáció</h2>
          <p>
            Minden megrendelt fizikális termékre 14 napos díjmentes méretcsere garanciát biztosítunk, feltéve hogy a termék sértetlen, hordatlan állapotban van az eredeti dobozával és tartozékaival.
          </p>
        </section>
      </div>
    </div>
  );
}

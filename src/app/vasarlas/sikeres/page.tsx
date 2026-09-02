import React from "react";
import Link from "next/link";
import { CheckCircle2, Mail, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Sikeres vásárlás | Direct Supply",
  description: "Köszönjük! Az útmutató hozzáférését e-mailben küldjük.",
};

export default function PurchaseSuccessPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-20">
      <div className="max-w-lg w-full p-8 sm:p-10 rounded-3xl bg-[#121214] border border-[#ccff00]/40 text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-[#ccff00]/10 border border-[#ccff00] text-[#ccff00] flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-black uppercase font-display">
          Sikeres vásárlás!
        </h1>
        <p className="text-sm text-zinc-300 leading-relaxed">
          Köszönjük a vásárlást. Az útmutató <strong className="text-white">hozzáférési linkjét</strong> elküldjük a Stripe-nál megadott e-mail címre (általában 1–2 percen belül).
        </p>
        <div className="flex items-start gap-3 p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-left text-xs text-zinc-400">
          <Mail className="w-5 h-5 text-[#ccff00] flex-shrink-0 mt-0.5" />
          <p>
            Nem találod? Nézd meg a spam / promóciók mappát. Ha 10 percen belül sem érkezik meg, írj nekünk a Kapcsolat oldalon a rendelési e-mail címmel.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-black uppercase bg-[#ccff00] text-black hover:bg-[#b3e600] transition"
          >
            Vissza a főoldalra
          </Link>
          <Link
            href="/kapcsolat"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-black uppercase bg-zinc-900 border border-zinc-700 text-white hover:border-[#ccff00] transition"
          >
            Kapcsolat
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

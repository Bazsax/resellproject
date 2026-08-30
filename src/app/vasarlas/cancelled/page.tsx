import React from "react";
import Link from "next/link";
import { XCircle, ArrowRight } from "lucide-react";
import { GuideBuyButton } from "@/components/GuideBuyButton";

export const metadata = {
  title: "Fizetés megszakítva | EgyPerEgy",
  description: "A fizetés megszakadt – bármikor újrapróbálhatod.",
};

export default function PurchaseCancelledPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-20">
      <div className="max-w-lg w-full p-8 sm:p-10 rounded-3xl bg-[#121214] border border-zinc-800 text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-400 flex items-center justify-center mx-auto">
          <XCircle className="w-10 h-10" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-black uppercase font-display">
          Fizetés megszakítva
        </h1>
        <p className="text-sm text-zinc-400 leading-relaxed">
          Semmi sem került levonásra. Ha meggondoltad magad, bármikor újraindíthatod a vásárlást.
        </p>
        <GuideBuyButton label="Újrapróbálom a fizetést" />
        <Link
          href="/utmutato"
          className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase text-zinc-400 hover:text-[#ccff00] transition"
        >
          Vissza az útmutató oldalra
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}

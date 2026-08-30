"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Send, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Upload, 
  Footprints, 
  Shirt, 
  Watch, 
  Briefcase,
  ChevronRight
} from "lucide-react";
import confetti from "canvas-confetti";

export default function CustomSourcingPage() {
  const [formData, setFormData] = useState({
    category: "sneakers",
    itemName: "",
    brand: "",
    size: "",
    targetBudget: "",
    itemLink: "",
    fullName: "",
    instagram: "",
    phone: "",
    email: "",
    notes: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 }
        });
      } catch (err) {
        console.error(err);
      }
    }, 700);
  };

  return (
    <div className="min-h-screen bg-black text-white pb-20">
      {/* Header */}
      <div className="bg-[#121214] border-b border-[#27272a] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ccff00]/10 border border-[#ccff00]/40 text-xs font-black uppercase tracking-wider text-[#ccff00]">
            <Sparkles className="w-3.5 h-3.5" /> Egyedi Beszerzési Szolgáltatás
          </div>
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-display">
            EGYEDI TERMÉK BESZERZÉSE
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto">
            Nem találod a katalógusban a keresett sneakert, ruhát, órát vagy táskát? Add meg a részleteket, és beszerezzük a legjobb 1/1 gyári minőségben a legkedvezőbb áron!
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-10">
        {isSubmitted ? (
          <div className="p-8 sm:p-12 rounded-3xl bg-[#121214] border border-[#ccff00]/40 text-center space-y-6 shadow-2xl">
            <div className="w-20 h-20 rounded-full bg-[#ccff00]/10 border-2 border-[#ccff00] text-[#ccff00] flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2 className="w-12 h-12" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-white font-display">
              Beszerzési Igényed Rögzítve!
            </h2>
            <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
              Köszönjük! Munkatársunk <span className="text-[#ccff00] font-bold">24 órán belül</span> felveszi veled a kapcsolatot a megadott Instagram vagy telefon elérhetőségen az árajánlattal és a gyári QC fotókkal.
            </p>
            <div className="pt-4 flex justify-center gap-4">
              <Link
                href="/katalogus"
                className="px-6 py-3.5 rounded-xl font-black text-xs uppercase tracking-wider bg-[#ccff00] text-black hover:bg-[#b3e600] transition"
              >
                Vissza a Katalógushoz
              </Link>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="p-6 sm:p-10 rounded-3xl bg-[#121214] border border-[#27272a] space-y-6 shadow-2xl"
          >
            {/* Category selection */}
            <div>
              <label className="block text-xs font-black uppercase text-zinc-300 tracking-wider mb-2">
                1. Válassz Kategóriát *
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: "sneakers", label: "Sneaker", icon: Footprints },
                  { id: "streetwear", label: "Ruha / Streetwear", icon: Shirt },
                  { id: "watches", label: "Óra", icon: Watch },
                  { id: "bags", label: "Táska / Kiegészítő", icon: Briefcase }
                ].map((cat) => {
                  const Icon = cat.icon;
                  const isSelected = formData.category === cat.id;
                  return (
                    <button
                      type="button"
                      key={cat.id}
                      onClick={() => setFormData({ ...formData, category: cat.id })}
                      className={`p-3 rounded-xl border text-xs font-bold uppercase transition flex flex-col items-center gap-1.5 ${
                        isSelected
                          ? "bg-[#ccff00] text-black border-[#ccff00] shadow-md shadow-[#ccff00]/20"
                          : "bg-zinc-900 border-zinc-800 text-zinc-300 hover:border-zinc-700 hover:text-white"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{cat.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Item Details */}
            <div className="space-y-4 pt-2 border-t border-zinc-800">
              <span className="text-xs font-black uppercase text-zinc-300 tracking-wider block">
                2. A keresett termék adatai
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-zinc-400 uppercase mb-1">
                    Pontos Terméknév / Modell *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="pl. Jordan 4 Retro White Oreo"
                    value={formData.itemName}
                    onChange={(e) => setFormData({ ...formData, itemName: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-3 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#ccff00]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-400 uppercase mb-1">
                    Márka / Színállás *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="pl. Jordan / Nike / Trapstar"
                    value={formData.brand}
                    onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-3 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#ccff00]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-zinc-400 uppercase mb-1">
                    Kívánt Méret *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="pl. EUR 42 vagy L-es méret"
                    value={formData.size}
                    onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-3 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#ccff00]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-400 uppercase mb-1">
                    Tervezett Költségkeret (HUF)
                  </label>
                  <input
                    type="text"
                    placeholder="pl. 40 000 - 55 000 Ft"
                    value={formData.targetBudget}
                    onChange={(e) => setFormData({ ...formData, targetBudget: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-3 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#ccff00]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-400 uppercase mb-1">
                  Kép Link / Webshop Hivatkozás (Opcionális)
                </label>
                <input
                  type="url"
                  placeholder="https://..."
                  value={formData.itemLink}
                  onChange={(e) => setFormData({ ...formData, itemLink: e.target.value })}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-3 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#ccff00]"
                />
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-4 pt-2 border-t border-zinc-800">
              <span className="text-xs font-black uppercase text-zinc-300 tracking-wider block">
                3. Elérhetőségeid
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-zinc-400 uppercase mb-1">
                    Teljes Név *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Kovács Bence"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-3 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#ccff00]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-400 uppercase mb-1">
                    Instagram Felhasználónév *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="@felhasznalonev"
                    value={formData.instagram}
                    onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-3 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#ccff00]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-zinc-400 uppercase mb-1">
                    Telefonszám (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+36 30 123 4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-3 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#ccff00]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-400 uppercase mb-1">
                    E-mail Cím *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="pelda@email.hu"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-3 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#ccff00]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-400 uppercase mb-1">
                  Egyedi Megjegyzés / Részletek
                </label>
                <textarea
                  rows={2}
                  placeholder="Különleges kérések, extra doboz, fűzők, speciális minőség..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#ccff00]"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl font-black text-sm uppercase tracking-wider bg-[#ccff00] text-black hover:bg-[#b3e600] transition flex items-center justify-center gap-2 shadow-xl shadow-[#ccff00]/25 font-display disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="inline-block animate-spin">⏳</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Beszerzési Árajánlat Kérése</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

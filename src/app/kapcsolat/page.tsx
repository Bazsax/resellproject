"use client";

import React, { useState } from "react";
import { Mail, Send, CheckCircle2, Clock, Sparkles, Loader2 } from "lucide-react";
import { InstagramIcon } from "@/components/SocialIcons";
import confetti from "canvas-confetti";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error ?? "Az üzenet küldése sikertelen.");
      }

      setSubmitted(true);
      try {
        confetti({ particleCount: 70, spread: 60 });
      } catch (err) {
        console.error(err);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Váratlan hiba történt.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pb-24">
      <div className="bg-[#121214] border-b border-[#27272a] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ccff00]/10 border border-[#ccff00]/40 text-xs font-black uppercase tracking-wider text-[#ccff00]">
            <Sparkles className="w-3.5 h-3.5" /> Ügyfélszolgálat & Kapcsolat
          </div>
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-display">
            KAPCSOLATFELVÉTEL
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto">
            Kérdésed van a rendelésedről, méretről, beszállítókról vagy egyedi beszerzésről? Írj nekünk bátran!
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-[#121214] border border-[#27272a] space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#ccff00] text-black flex items-center justify-center font-bold">
                  <InstagramIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-black uppercase text-white">Instagram Ügyfélszolgálat</h3>
                  <p className="text-xs text-[#ccff00] font-bold">@directsupply</p>
                </div>
              </div>
              <p className="text-xs text-zinc-400">
                A leggyorsabb válaszidő (általában 15-60 percen belül válaszolunk üzenetben).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#121214] border border-[#27272a] space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-700 text-[#ccff00] flex items-center justify-center font-bold">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-black uppercase text-white">E-mail Elérhetőség</h3>
                  <p className="text-xs text-zinc-300 font-medium">info@directsupply.hu</p>
                </div>
              </div>
              <p className="text-xs text-zinc-400">
                Hivatalos megkeresésekhez, számlázáshoz és beszállítói kérdésekhez.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#121214] border border-[#27272a] space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-700 text-[#ccff00] flex items-center justify-center font-bold">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-black uppercase text-white">Nyitvatartás</h3>
                  <p className="text-xs text-zinc-300 font-medium">Hétfő - Vasárnap: 09:00 - 22:00</p>
                </div>
              </div>
              <p className="text-xs text-zinc-400">
                Online ügyfélszolgálatunk a hét minden napján elérhető.
              </p>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#121214] border border-[#27272a] shadow-2xl">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#ccff00]/10 border border-[#ccff00] text-[#ccff00] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-black uppercase text-white font-display">
                    Üzenet sikeresen elküldve!
                  </h3>
                  <p className="text-xs text-zinc-400 max-w-sm mx-auto">
                    Hamarosan felvesszük veled a kapcsolatot a megadott e-mail címen.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h2 className="text-xl font-black uppercase text-white font-display">
                    Küldj üzenetet
                  </h2>

                  <div>
                    <label className="block text-xs font-bold text-zinc-400 uppercase mb-1">
                      Név *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Teljes neved"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#ccff00]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-400 uppercase mb-1">
                      E-mail cím *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="pelda@email.hu"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#ccff00]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-400 uppercase mb-1">
                      Tárgy *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="pl. Kérdés a resell útmutatóról vagy cipő méretről"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#ccff00]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-400 uppercase mb-1">
                      Üzenet szövege *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Írd le a kérdésed..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#ccff00]"
                    />
                  </div>

                  {error && (
                    <p className="text-xs text-red-400 text-center">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl font-black text-xs uppercase tracking-wider bg-[#ccff00] text-black hover:bg-[#b3e600] transition flex items-center justify-center gap-2 shadow-lg shadow-[#ccff00]/20 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Üzenet Elküldése</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

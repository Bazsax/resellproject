"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, CheckCircle2, Send, ShoppingBag, ShieldCheck, ArrowRight, ExternalLink } from "lucide-react";
import confetti from "canvas-confetti";
import { useCart } from "@/context/CartContext";

export const OrderModal: React.FC = () => {
  const { isOrderModalOpen, closeOrderModal, cart, subtotal, clearCart } = useCart();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    instagram: "",
    phone: "",
    city: "",
    address: "",
    zip: "",
    notes: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOrderModalOpen) return null;

  const hasDigitalItem = cart.some((item) => item.product.isDigital);
  const hasPhysicalItem = cart.some((item) => !item.product.isDigital);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        console.error(err);
      }
    }, 800);
  };

  const handleFinish = () => {
    clearCart();
    setIsSubmitted(false);
    closeOrderModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-xl bg-[#121214] border border-[#27272a] rounded-2xl shadow-2xl overflow-hidden my-8 animate-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#27272a] bg-zinc-900/60">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#ccff00]" />
            <h3 className="text-base font-black uppercase text-white tracking-wide">
              {isSubmitted ? "Beszerzési Igény Leadva" : "Beszerzési Rendelés & Adatok"}
            </h3>
          </div>
          <button
            onClick={closeOrderModal}
            className="p-1 rounded-lg text-zinc-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#ccff00]/10 border border-[#ccff00] text-[#ccff00] flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-black text-white uppercase tracking-tight font-display">
                Köszönjük a megrendelést!
              </h4>
              <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                A beszerzési igényedet sikeresen rögzítettük. Munkatársunk <span className="text-[#ccff00] font-bold">24 órán belül</span> felveszi veled a kapcsolatot a megadott Instagram vagy telefon elérhetőségen a minőségellenőrzési (QC) fotókkal és szállítási részletekkel.
              </p>

              {hasDigitalItem && (
                <div className="p-4 rounded-xl bg-zinc-900 border border-[#ccff00]/40 text-left my-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-extrabold uppercase text-[#ccff00]">
                        Digitális Útmutató Hozzáférés
                      </span>
                      <p className="text-xs text-white font-medium mt-0.5">
                        Azonnal hozzáférhetsz a Resell Masterclass anyagokhoz Gumroadon!
                      </p>
                    </div>
                    <a
                      href="https://gumroad.com"
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-2 text-xs font-black uppercase rounded-lg bg-[#ccff00] text-black hover:bg-[#b3e600] inline-flex items-center gap-1"
                    >
                      Megnyitás <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              )}

              <div className="pt-4">
                <button
                  onClick={handleFinish}
                  className="w-full py-3.5 rounded-xl font-black text-sm uppercase bg-[#ccff00] text-black hover:bg-[#b3e600] transition"
                >
                  Rendben, Vissza a Vásárláshoz
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Order summary mini view */}
              <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800 space-y-2">
                <div className="flex justify-between items-center text-xs font-bold text-zinc-400 uppercase">
                  <span>Kiválasztott termékek ({cart.length})</span>
                  <span className="text-[#ccff00] font-black">{subtotal.toLocaleString("hu-HU")} Ft</span>
                </div>
                <div className="space-y-2 max-h-32 overflow-y-auto pr-1">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center justify-between text-xs text-zinc-200">
                      <div className="flex items-center gap-2 truncate">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00]" />
                        <span className="truncate">{item.product.name}</span>
                        {item.selectedSize && (
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-800 text-[#ccff00] font-bold">
                            M: {item.selectedSize}
                          </span>
                        )}
                        <span className="text-zinc-500">x{item.quantity}</span>
                      </div>
                      <span className="font-bold">{item.totalPrice.toLocaleString("hu-HU")} Ft</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Digital item prompt */}
              {hasDigitalItem && (
                <div className="p-3 rounded-lg bg-[#ccff00]/10 border border-[#ccff00]/30 text-xs text-zinc-300 flex items-start gap-2">
                  <span className="text-base">⚡</span>
                  <div>
                    <span className="font-bold text-[#ccff00]">Digitális Fájl a kosárban:</span> A digitális resell útmutatót közvetlenül a Gumroad biztonságos rendszerén keresztül is letöltheted azonnal.
                  </div>
                </div>
              )}

              {/* Customer Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-zinc-300 uppercase mb-1">
                    Teljes Név *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="pl. Kovács Bence"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#ccff00]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-300 uppercase mb-1">
                    Instagram Felhasználónév *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="@felhasznalonev"
                    value={formData.instagram}
                    onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#ccff00]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-zinc-300 uppercase mb-1">
                    E-mail Cím *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="pelda@email.hu"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#ccff00]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-300 uppercase mb-1">
                    Telefonszám (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+36 30 123 4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#ccff00]"
                  />
                </div>
              </div>

              {hasPhysicalItem && (
                <div className="space-y-3 pt-1">
                  <div className="grid grid-cols-3 gap-3">
                    <div className="col-span-2">
                      <label className="block text-xs font-bold text-zinc-300 uppercase mb-1">
                        Város *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Budapest"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#ccff00]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-zinc-300 uppercase mb-1">
                        Irányítószám *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="1052"
                        value={formData.zip}
                        onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#ccff00]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-300 uppercase mb-1">
                      Szállítási Cím (Utca, házszám) *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Fő utca 12. 3. em 4."
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#ccff00]"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-zinc-300 uppercase mb-1">
                  Egyedi Megjegyzés / Méretkérés (Opcionális)
                </label>
                <textarea
                  rows={2}
                  placeholder="pl. Kérlek küldjetek extra fotókat a varrásról és a címkéről a feladás előtt..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#ccff00]"
                />
              </div>

              {/* Guarantees note */}
              <div className="flex items-center gap-2 text-[11px] text-zinc-400">
                <ShieldCheck className="w-4 h-4 text-[#ccff00] flex-shrink-0" />
                <span>100% Minőségi és Méretcsere garancia | Bizalmas adatkezelés</span>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl font-black text-sm uppercase bg-[#ccff00] text-black hover:bg-[#b3e600] transition flex items-center justify-center gap-2 shadow-lg shadow-[#ccff00]/20 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="inline-block animate-spin">⏳</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Beszerzési Rendelés Leadása</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

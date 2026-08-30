"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  ArrowRight, 
  ShieldCheck 
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { GuideBuyButton } from "@/components/GuideBuyButton";

export const CartDrawer: React.FC = () => {
  const { 
    isOpen, 
    closeCart, 
    cart, 
    removeFromCart, 
    updateQuantity, 
    subtotal, 
    openOrderModal 
  } = useCart();

  if (!isOpen) return null;

  const hasDigitalItem = cart.some((item) => item.product.isDigital);

  const handleProceed = () => {
    closeCart();
    openOrderModal();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-sans">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#121214] border-l border-[#27272a] shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#27272a] bg-zinc-900/60">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#ccff00]" />
              <h2 className="text-lg font-black uppercase text-white tracking-wide font-display">
                KOSÁR ({cart.reduce((a, c) => a + c.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={closeCart}
              className="p-1 rounded-lg text-zinc-400 hover:text-white"
              aria-label="Kosár bezárása"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-600 flex items-center justify-center mx-auto">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="text-base font-bold text-white uppercase font-display">
                  A KOSARAD JELENLEG ÜRES
                </h3>
                <p className="text-xs text-zinc-400 max-w-xs mx-auto font-sans">
                  Böngéssz 1/1 prémium cipőink, streetwear kollekciónk vagy a digitális resell útmutatónk között!
                </p>
                <div className="pt-2">
                  <Link
                    href="/katalogus"
                    onClick={closeCart}
                    className="inline-flex items-center gap-2 px-5 py-3 text-xs font-extrabold uppercase rounded-xl bg-[#ccff00] text-black hover:bg-[#b3e600] transition font-btn"
                  >
                    KATALÓGUS MEGTEKINTÉSE <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-3 relative group"
                >
                  <div className="flex gap-3">
                    {/* Item Image */}
                    <div className="relative w-20 h-20 rounded-lg bg-zinc-950 overflow-hidden flex-shrink-0 border border-zinc-800">
                      <Image
                        src={item.product.images[0]}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Item Details: Nekst font, soft weight, not uppercase */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-1">
                        <div>
                          <span className="text-[10px] font-bold uppercase text-[#ccff00] font-btn">
                            {item.product.brand}
                          </span>
                          <h4 className="text-xs font-medium text-white line-clamp-2 leading-tight font-nekst normal-case">
                            {item.product.name}
                          </h4>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-zinc-500 hover:text-red-400 p-1 transition"
                          title="Törlés"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      {item.selectedSize && (
                        <div className="mt-1 flex items-center gap-1.5 text-xs text-zinc-300 font-nekst normal-case">
                          <span className="text-zinc-400">Méret:</span>
                          <span className="px-1.5 py-0.5 rounded bg-zinc-800 text-[#ccff00] font-medium text-[11px]">
                            {item.selectedSize}
                          </span>
                        </div>
                      )}

                      {/* Addons preview */}
                      {item.addons.length > 0 && (
                        <div className="mt-1.5 flex flex-wrap gap-1">
                          {item.addons.map((add) => (
                            <span
                              key={add.id}
                              className="text-[10px] bg-zinc-800 text-zinc-300 px-1.5 py-0.5 rounded border border-zinc-700 font-medium font-nekst normal-case"
                            >
                              + {add.name.split(" ")[0]} ({add.price.toLocaleString("hu-HU")} Ft)
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Quantity and Price footer */}
                  <div className="flex items-center justify-between pt-2 border-t border-zinc-800/80">
                    <div className="flex items-center border border-zinc-700 rounded-lg bg-zinc-950">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-1.5 text-zinc-400 hover:text-white"
                        aria-label="Darabszám csökkentése"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-3 text-xs font-medium text-white font-nekst normal-case">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-1.5 text-zinc-400 hover:text-white"
                        aria-label="Darabszám növelése"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="text-right">
                      <span className="text-sm font-semibold text-[#ccff00] font-nekst normal-case">
                        {item.totalPrice.toLocaleString("hu-HU")} Ft
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout CTA */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-[#27272a] bg-zinc-950/80 space-y-4">
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs text-zinc-400">
                  <span>Részösszeg</span>
                  <span className="font-medium text-white font-nekst normal-case">{subtotal.toLocaleString("hu-HU")} Ft</span>
                </div>
                <div className="flex justify-between text-xs text-zinc-400">
                  <span>Beszerzési közvetítés díja</span>
                  <span className="font-bold text-[#ccff00] font-btn">INGYENES</span>
                </div>
                <div className="flex justify-between text-sm font-black text-white pt-2 border-t border-zinc-800">
                  <span className="font-display uppercase">VÉGÖSSZEG</span>
                  <span className="text-base text-[#ccff00] font-nekst font-semibold normal-case">
                    {subtotal.toLocaleString("hu-HU")} Ft
                  </span>
                </div>
              </div>

              {/* Main Button in Bold Nekst uppercase */}
              <button
                onClick={handleProceed}
                className="w-full py-4 rounded-xl font-extrabold text-sm uppercase tracking-wider bg-[#ccff00] text-black hover:bg-[#b3e600] transition flex items-center justify-center gap-2 shadow-lg shadow-[#ccff00]/20 font-btn"
              >
                <span>BESZERZÉSI RENDELÉS LEADÁSA</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Direct Gumroad option if digital file */}
              {hasDigitalItem && (
                <div className="w-full">
                  <GuideBuyButton
                    label="DIGITÁLIS ÚTMUTATÓ – AZONNALI FIZETÉS"
                    className="!py-2.5 !text-xs !shadow-none !rounded-xl"
                  />
                </div>
              )}

              <div className="flex items-center justify-center gap-2 text-[10px] text-zinc-400 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-[#ccff00]" />
                <span>100% Pénzvisszafizetési és Méretcsere Garancia</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

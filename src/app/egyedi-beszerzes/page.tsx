"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Upload, 
  Footprints, 
  Shirt, 
  Watch, 
  Briefcase,
  Glasses,
  Gem,
  Monitor,
  Package,
  X,
  Loader2
} from "lucide-react";
import confetti from "canvas-confetti";

const CATEGORIES = [
  { id: "sneakers", label: "Cipő", icon: Footprints },
  { id: "streetwear", label: "Ruha", icon: Shirt },
  { id: "watches", label: "Óra", icon: Watch },
  { id: "bags", label: "Táska", icon: Briefcase },
  { id: "glasses", label: "Szemüveg", icon: Glasses },
  { id: "jewelry", label: "Ékszer", icon: Gem },
  { id: "electronics", label: "Elektronika", icon: Monitor },
  { id: "other", label: "Egyéb", icon: Package },
];

const MAX_IMAGES = 4;

async function uploadToCloudinary(file: File): Promise<string> {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

  if (!cloudName || !uploadPreset) {
    throw new Error("A képfeltöltés nincs konfigurálva.");
  }

  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", uploadPreset);
  data.append("folder", "egyperegy-sourcing");

  const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
    method: "POST",
    body: data,
  });

  if (!res.ok) {
    throw new Error("A kép feltöltése sikertelen.");
  }

  const result = await res.json();
  return result.secure_url as string;
}

export default function CustomSourcingPage() {
  const fileInputRef = useRef<HTMLInputElement>(null);
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
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [uploadingImages, setUploadingImages] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleImageSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    if (files.length === 0) return;

    const remaining = MAX_IMAGES - imageUrls.length;
    if (remaining <= 0) return;

    const toUpload = files.slice(0, remaining);
    setUploadingImages(true);
    setError(null);

    try {
      const urls = await Promise.all(toUpload.map(uploadToCloudinary));
      setImageUrls((prev) => [...prev, ...urls]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "A kép feltöltése sikertelen.");
    } finally {
      setUploadingImages(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const removeImage = (index: number) => {
    setImageUrls((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/sourcing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, imageUrls }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error ?? "A beküldés sikertelen.");
      }

      setIsSubmitted(true);
      try {
        confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
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
    <div className="min-h-screen bg-black text-white pb-20">
      <div className="bg-[#121214] border-b border-[#27272a] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ccff00]/10 border border-[#ccff00]/40 text-xs font-black uppercase tracking-wider text-[#ccff00]">
            <Sparkles className="w-3.5 h-3.5" /> Egyedi Beszerzési Szolgáltatás
          </div>
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-display">
            EGYEDI TERMÉK BESZERZÉSE
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto">
            Nem találod a katalógusban a keresett terméket? Add meg a részleteket, tölts fel képeket, és beszerezzük a legjobb 1/1 gyári minőségben a legkedvezőbb áron!
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
            <div>
              <label className="block text-xs font-black uppercase text-zinc-300 tracking-wider mb-2">
                1. Válassz Kategóriát *
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {CATEGORIES.map((cat) => {
                  const Icon = cat.icon;
                  const isSelected = formData.category === cat.id;
                  return (
                    <button
                      type="button"
                      key={cat.id}
                      onClick={() => setFormData({ ...formData, category: cat.id })}
                      className={`p-3 rounded-xl border text-[10px] sm:text-xs font-bold uppercase transition flex flex-col items-center gap-1.5 ${
                        isSelected
                          ? "bg-[#ccff00] text-black border-[#ccff00] shadow-md shadow-[#ccff00]/20"
                          : "bg-zinc-900 border-zinc-800 text-zinc-300 hover:border-zinc-700 hover:text-white"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="text-center leading-tight">{cat.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

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

              <div>
                <label className="block text-xs font-bold text-zinc-400 uppercase mb-1">
                  Termék Képek Feltöltése (Opcionális, max {MAX_IMAGES})
                </label>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageSelect}
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={uploadingImages || imageUrls.length >= MAX_IMAGES}
                  className="w-full py-4 rounded-xl border-2 border-dashed border-zinc-700 hover:border-[#ccff00]/50 text-zinc-400 hover:text-[#ccff00] transition flex flex-col items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {uploadingImages ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span className="text-xs font-bold uppercase">Feltöltés...</span>
                    </>
                  ) : (
                    <>
                      <Upload className="w-5 h-5" />
                      <span className="text-xs font-bold uppercase">Kattints vagy húzd ide a képeket</span>
                      <span className="text-[10px] text-zinc-500">JPG, PNG, WEBP — max {MAX_IMAGES} kép</span>
                    </>
                  )}
                </button>

                {imageUrls.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-3">
                    {imageUrls.map((url, i) => (
                      <div key={url} className="relative aspect-square rounded-lg overflow-hidden border border-zinc-700 group">
                        <Image src={url} alt={`Feltöltött kép ${i + 1}`} fill className="object-cover" />
                        <button
                          type="button"
                          onClick={() => removeImage(i)}
                          className="absolute top-1 right-1 p-1 rounded-full bg-black/70 text-white hover:bg-red-600 transition opacity-0 group-hover:opacity-100"
                          aria-label="Kép törlése"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

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

            {error && (
              <p className="text-xs text-red-400 text-center font-medium">{error}</p>
            )}

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting || uploadingImages}
                className="w-full py-4 rounded-xl font-black text-sm uppercase tracking-wider bg-[#ccff00] text-black hover:bg-[#b3e600] transition flex items-center justify-center gap-2 shadow-xl shadow-[#ccff00]/25 font-display disabled:opacity-50"
              >
                {isSubmitting ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
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

"use client";

import React, { useState } from "react";
import { Download, Loader2 } from "lucide-react";

type GuideBuyButtonProps = {
  className?: string;
  label?: string;
  size?: "default" | "lg";
};

const SIZE_CLASSES = {
  default: "px-8 py-4 text-sm",
  lg: "px-10 py-5 sm:py-6 text-base sm:text-lg",
} as const;

export function GuideBuyButton({
  className = "",
  label = "MEGVÁSÁROLOM – 1 000 Ft",
  size = "default",
}: GuideBuyButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const iconClass = size === "lg" ? "w-5 h-5" : "w-4 h-4";

  const handleClick = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", { method: "POST" });
      let data: { error?: string; url?: string } = {};
      try {
        data = await res.json();
      } catch {
        throw new Error(`Szerver hiba (HTTP ${res.status}). Próbáld újra redeploy után.`);
      }
      if (!res.ok || !data.url) {
        throw new Error(data.error ?? "A fizetés indítása sikertelen.");
      }
      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Váratlan hiba.");
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <button
        type="button"
        onClick={handleClick}
        disabled={loading}
        className={`cursor-pointer inline-flex items-center justify-center gap-2 rounded-xl font-black uppercase tracking-wider bg-[#ccff00] text-black hover:bg-[#b3e600] transition shadow-xl shadow-[#ccff00]/25 disabled:opacity-60 disabled:cursor-wait w-full ${SIZE_CLASSES[size]} ${className}`}
      >
        {loading ? (
          <Loader2 className={`${iconClass} animate-spin`} />
        ) : (
          <>
            <Download className={iconClass} />
            <span>{label}</span>
          </>
        )}
      </button>
      {error && (
        <p className="text-[11px] text-red-400 text-center mt-2 break-words">{error}</p>
      )}
    </div>
  );
}

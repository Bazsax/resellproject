"use client";

import React, { useState } from "react";
import { Download, ExternalLink, Loader2 } from "lucide-react";

type GuideBuyButtonProps = {
  className?: string;
  label?: string;
  showExternalIcon?: boolean;
};

export function GuideBuyButton({
  className = "",
  label = "MEGVÁSÁROLOM – 14 990 Ft",
  showExternalIcon = true,
}: GuideBuyButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleClick = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", { method: "POST" });
      const data = await res.json();
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
        className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-black uppercase tracking-wider bg-[#ccff00] text-black hover:bg-[#b3e600] transition shadow-xl shadow-[#ccff00]/25 disabled:opacity-60 w-full ${className}`}
      >
        {loading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <>
            <Download className="w-4 h-4" />
            <span>{label}</span>
            {showExternalIcon && <ExternalLink className="w-4 h-4" />}
          </>
        )}
      </button>
      {error && (
        <p className="text-[11px] text-red-400 text-center mt-2">{error}</p>
      )}
    </div>
  );
}

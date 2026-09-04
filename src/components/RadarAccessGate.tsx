"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Lock, ShoppingBag, Sparkles, User } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";
import { GuideBuyButton } from "@/components/GuideBuyButton";
import type { RadarAccess } from "@/lib/entitlements";

type RadarUnlockBannerProps = {
  access: RadarAccess;
  signedIn: boolean;
  variant?: "hero" | "overlay";
};

const detailLinkClass =
  "inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-zinc-600 text-xs font-black uppercase tracking-wider text-white hover:border-[#ccff00] transition";

export function RadarUnlockBanner({
  access,
  signedIn,
  variant = "hero",
}: RadarUnlockBannerProps) {
  if (access === "masterclass") return null;

  const isOverlay = variant === "overlay";
  const needsStarterpack = access === "none";

  return (
    <div
      className={`rounded-2xl border p-4 sm:p-5 ${
        isOverlay
          ? "bg-[#0a0a0c]/95 border-[#ccff00]/40 shadow-[0_0_40px_rgba(204,255,0,0.08)]"
          : "bg-[#121214] border-[#27272a]"
      }`}
    >
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-xl bg-[#ccff00]/15 text-[#ccff00] flex items-center justify-center shrink-0">
          {needsStarterpack ? (
            <Lock className="w-4 h-4" />
          ) : (
            <Sparkles className="w-4 h-4" />
          )}
        </div>
        <div className="min-w-0 flex-1 space-y-3">
          <div>
            <p className="text-sm font-black uppercase tracking-wide text-white font-display">
              {needsStarterpack
                ? "Piac radar – zárolt tartalom"
                : "Masterclass szintre emelve"}
            </p>
            <p className="text-xs text-zinc-400 font-normal mt-1 leading-relaxed">
              {needsStarterpack ? (
                <>
                  Néhány lehetőséget előnézetben látsz. A teljes rangsort, plafonokat
                  és eladási példákat a{" "}
                  <span className="text-[#ccff00] font-semibold">Starterpack</span>{" "}
                  oldja fel. A beszállítói unlock a{" "}
                  <span className="text-[#ccff00] font-semibold">Masterclass</span>
                  hoz tartozik.
                </>
              ) : (
                <>
                  Starterpack hozzáférésed aktív. A beszállítói listák és a teljes
                  unlock a{" "}
                  <span className="text-[#ccff00] font-semibold">Masterclass</span>{" "}
                  része.
                </>
              )}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-2 [&_>div]:w-auto [&_button]:!w-auto">
            {needsStarterpack && (
              <GuideBuyButton
                product="guide"
                label="Starterpack vásárlása"
                icon={ShoppingBag}
                className="!py-2.5 !px-4 !text-xs !rounded-xl !gap-2 !shadow-md"
              />
            )}
            <GuideBuyButton
              product="masterclass"
              label="Masterclass vásárlása"
              icon={ShoppingBag}
              className="!py-2.5 !px-4 !text-xs !rounded-xl !gap-2 !shadow-md"
            />
            <Link href="/utmutato" className={detailLinkClass}>
              Starterpack
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <Link href="/masterclass" className={detailLinkClass}>
              Masterclass
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            {!signedIn && (
              <SignInButton mode="modal">
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-[#ccff00]/40 text-xs font-black uppercase tracking-wider text-[#ccff00] hover:bg-[#ccff00]/10 transition cursor-pointer"
                >
                  <User className="w-3.5 h-3.5" />
                  Már vásároltál? – belépés
                </button>
              </SignInButton>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

type LockedSectionProps = {
  children: React.ReactNode;
  locked: boolean;
  className?: string;
  label?: string;
};

export function LockedSection({
  children,
  locked,
  className = "",
  label = "Zárolva",
}: LockedSectionProps) {
  if (!locked) return <>{children}</>;

  return (
    <div className={`relative overflow-hidden rounded-2xl ${className}`}>
      <div className="pointer-events-none select-none blur-[6px] opacity-60" aria-hidden>
        {children}
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-[#0a0a0c]/55 backdrop-blur-[2px] p-4">
        <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-black/80 border border-[#ccff00]/40 text-[#ccff00] text-[11px] font-black uppercase tracking-wider">
          <Lock className="w-3.5 h-3.5" />
          {label}
        </div>
      </div>
    </div>
  );
}

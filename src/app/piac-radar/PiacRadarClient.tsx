"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Activity,
  BookOpen,
  Layers,
  Lock,
  MessageCircle,
  ShieldCheck,
  ShoppingBag,
  Tag,
} from "lucide-react";
import {
  BUY_CEILING_FILTERS,
  BuyCeilingFilter,
  CATEGORY_MOMENTUM,
  filterOpportunities,
  formatHuf,
  RADAR_CATEGORIES,
  RadarCategoryId,
  RadarOpportunity,
} from "@/data/market-radar";
import type { RadarAccess } from "@/lib/entitlements";
import { LockedSection, RadarUnlockBanner } from "@/components/RadarAccessGate";

const SECTION = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";
const FREE_PREVIEW_COUNT = 2;

function selectClassName() {
  return "w-full bg-[#121214] border border-[#27272a] rounded-xl px-3.5 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-[#ccff00] cursor-pointer appearance-none";
}

function maskHuf(access: RadarAccess, value: number) {
  if (access === "none") return "••• ••• Ft";
  return formatHuf(value);
}

type PiacRadarClientProps = {
  access: RadarAccess;
  signedIn: boolean;
};

export function PiacRadarClient({ access, signedIn }: PiacRadarClientProps) {
  const [category, setCategory] = useState<RadarCategoryId>("all");
  const [ceiling, setCeiling] = useState<BuyCeilingFilter>("any");
  const filtered = useMemo(
    () => filterOpportunities(category, ceiling),
    [category, ceiling]
  );
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const canBrowse = access !== "none";
  const canSeeVendors = access === "masterclass";
  const previewIds = useMemo(
    () => new Set(filtered.slice(0, FREE_PREVIEW_COUNT).map((o) => o.id)),
    [filtered]
  );

  const selected: RadarOpportunity | null =
    filtered.find((o) => o.id === (selectedId ?? filtered[0]?.id)) ??
    filtered[0] ??
    null;

  // Free users can open the first few rows as a teaser, but money/vendors stay locked.
  const selectedUnlocked = canBrowse;

  const strongCount = filtered.filter((o) => o.signal === "Erős jel").length;
  const medianSoldAvg =
    filtered.length > 0
      ? Math.round(filtered.reduce((s, o) => s + o.medianSold, 0) / filtered.length)
      : 0;
  const avgCeiling =
    filtered.length > 0
      ? Math.round(filtered.reduce((s, o) => s + o.buyCeiling, 0) / filtered.length)
      : 0;

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white pb-16">
      <section className="border-b border-[#27272a] bg-[#121214] py-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4 text-center flex flex-col items-center">
          <div className="flex items-center gap-2 text-xs font-semibold text-zinc-500 uppercase tracking-wider">
            <Link href="/" className="hover:text-[#ccff00]">
              Főoldal
            </Link>
            <span>/</span>
            <span className="text-[#ccff00]">Piac radar</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ccff00]/10 border border-[#ccff00]/40 text-xs font-black uppercase tracking-wider text-[#ccff00]">
            <Activity className="w-3.5 h-3.5" /> Heti frissítés · Csak HU
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-display">
            Piac radar
          </h1>

          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto font-normal">
            Magyar piacra rangsorolt viszonteladási lehetőségek – momentum, árrés és
            beszállítói út egy helyen.
          </p>

          <p className="text-[11px] text-zinc-500 font-normal">
            Utolsó frissítés: 2026. szept. 3. · Nézet: Magyarország
            {access !== "none" && (
              <>
                {" "}
                · Hozzáférés:{" "}
                <span className="text-[#ccff00]">
                  {access === "masterclass" ? "Masterclass" : "Starterpack"}
                </span>
              </>
            )}
          </p>
        </div>
      </section>

      <div className={`${SECTION} pt-6 space-y-6`}>
        {access !== "masterclass" && (
          <RadarUnlockBanner access={access} signedIn={signedIn} />
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-[10px] font-black uppercase tracking-wider text-zinc-500 mb-1.5">
              Kategória
            </label>
            <select
              value={category}
              onChange={(e) => {
                setCategory(e.target.value as RadarCategoryId);
                setSelectedId(null);
              }}
              className={selectClassName()}
            >
              {RADAR_CATEGORIES.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-[10px] font-black uppercase tracking-wider text-zinc-500 mb-1.5">
              Max. beszerzési plafon
            </label>
            <select
              value={ceiling}
              disabled={!canBrowse}
              onChange={(e) => {
                setCeiling(e.target.value as BuyCeilingFilter);
                setSelectedId(null);
              }}
              className={`${selectClassName()} disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {BUY_CEILING_FILTERS.map((f) => (
                <option key={f.id} value={f.id}>
                  {f.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <LockedSection
          locked={!canBrowse}
          label="Starterpack szükséges"
          className="!rounded-none"
        >
          <div className="flex flex-wrap gap-2">
            {[
              { label: "Rangsorolt", value: String(filtered.length), sub: "termékvonal" },
              { label: "Erős", value: String(strongCount), sub: "keresleti jel" },
              {
                label: "Medián eladott",
                value: maskHuf(access, medianSoldAvg),
                sub: "comps",
              },
              {
                label: "Átlag plafon",
                value: maskHuf(access, avgCeiling),
                sub: "beszerzés alatt",
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="px-3.5 py-2.5 rounded-xl bg-[#121214] border border-[#27272a] flex items-center gap-2 min-w-0 font-sans"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 shrink-0 font-sans">
                  {stat.label}
                </p>
                <p className="text-xs font-semibold text-white shrink-0 font-sans">
                  {stat.value}
                </p>
                <p className="text-xs font-normal text-zinc-500 shrink-0 font-sans">
                  {stat.sub}
                </p>
              </div>
            ))}
          </div>
        </LockedSection>
        <p className="text-[11px] text-zinc-500 font-normal">
          A beszerzési plafon a marketplace díjak utáni célár, amivel még van értelme
          belépni.
        </p>

        <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] gap-4 items-start">
          <div className="space-y-4">
            <div className="rounded-2xl bg-[#121214] border border-[#27272a] overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-[#27272a]">
                <h2 className="text-sm font-black uppercase text-white font-display">
                  Legjobb lehetőségek
                </h2>
                <span className="text-[11px] text-[#ccff00] font-semibold">
                  {canBrowse
                    ? `${filtered.length} rangsorolt`
                    : `${FREE_PREVIEW_COUNT} előnézet`}
                </span>
              </div>

              <div className="max-h-[640px] overflow-y-auto divide-y divide-zinc-800/80">
                {filtered.length === 0 ? (
                  <p className="p-6 text-sm text-zinc-400 font-normal">
                    Nincs találat ezekkel a szűrőkkel.
                  </p>
                ) : (
                  filtered.map((op, index) => {
                    const isActive = selected?.id === op.id;
                    const rowUnlocked = canBrowse || previewIds.has(op.id);
                    const row = (
                      <button
                        key={op.id}
                        type="button"
                        disabled={!rowUnlocked}
                        onClick={() => rowUnlocked && setSelectedId(op.id)}
                        className={`w-full text-left px-4 py-3.5 transition ${
                          rowUnlocked ? "cursor-pointer" : "cursor-not-allowed"
                        } ${
                          isActive
                            ? "bg-[#ccff00]/5 border-l-2 border-l-[#ccff00]"
                            : "hover:bg-white/[0.03] border-l-2 border-l-transparent"
                        }`}
                      >
                        <div className="flex gap-3">
                          <span className="w-8 h-8 rounded-lg bg-[#ccff00]/15 text-[#ccff00] text-xs font-black flex items-center justify-center shrink-0 font-display">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <div className="min-w-0 flex-1 space-y-1.5">
                            <div className="flex items-start justify-between gap-2">
                              <div className="min-w-0">
                                <p className="text-sm font-black text-white truncate">
                                  {op.name}
                                </p>
                                <p className="text-[11px] text-zinc-500 font-normal truncate">
                                  {op.categoryLabel} · {op.signal}
                                </p>
                              </div>
                              <div className="text-right shrink-0">
                                <p className="text-sm font-black text-[#ccff00]">
                                  {canBrowse ? formatHuf(op.buyCeiling) : "•••••• Ft"}
                                </p>
                                <p className="text-[10px] text-zinc-500">plafon alatt</p>
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                              <span className="px-2 py-0.5 rounded-full bg-[#ccff00]/15 text-[#ccff00] text-[10px] font-bold">
                                {canBrowse ? `${op.score} pont` : "•• pont"}
                              </span>
                              {op.recentMover && (
                                <span className="px-2 py-0.5 rounded-full bg-[#ccff00]/10 border border-[#ccff00]/30 text-[#ccff00] text-[10px] font-bold">
                                  Friss
                                </span>
                              )}
                              {!rowUnlocked && (
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-zinc-900 text-zinc-400 text-[10px] font-bold">
                                  <Lock className="w-3 h-3" /> Starterpack
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </button>
                    );

                    if (rowUnlocked) return row;

                    return (
                      <div key={op.id} className="relative">
                        <div className="blur-[5px] opacity-50 pointer-events-none select-none">
                          {row}
                        </div>
                        <div className="absolute inset-0 flex items-center justify-end pr-4">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/80 border border-[#ccff00]/35 text-[#ccff00] text-[10px] font-black uppercase">
                            <Lock className="w-3 h-3" /> Starterpack
                          </span>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>

            <LockedSection locked={!canBrowse} label="Starterpack szükséges">
              <div className="rounded-2xl bg-[#121214] border border-[#27272a] p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#ccff00]" />
                  <h3 className="text-sm font-black uppercase text-white font-display">
                    Kategória momentum
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {CATEGORY_MOMENTUM.map((item) => (
                    <li key={item.label} className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-zinc-300 font-normal">{item.label}</span>
                        <span className="text-[#ccff00] font-black">{item.score}</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-zinc-900 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-[#5a7000]/50 to-[#ccff00]/80"
                          style={{ width: `${item.score}%` }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </LockedSection>
          </div>

          <div className="xl:sticky xl:top-24 space-y-4">
            {selected ? (
              <>
                <div className="rounded-2xl bg-[#121214] border border-[#27272a] p-5 sm:p-6 space-y-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-black uppercase text-white font-display leading-tight">
                        {selected.name}
                      </h2>
                      <p className="text-xs text-zinc-500 font-normal mt-1">
                        {selected.categoryLabel} · Magyarország
                      </p>
                    </div>
                    <div className="w-14 h-14 rounded-full bg-[#ccff00] text-black flex items-center justify-center text-lg font-black font-display shrink-0">
                      {selectedUnlocked ? selected.score : "••"}
                    </div>
                  </div>

                  {!selectedUnlocked && (
                    <RadarUnlockBanner
                      access={access}
                      signedIn={signedIn}
                      variant="overlay"
                    />
                  )}

                  <div className="flex flex-wrap gap-1.5">
                    <span className="px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-700 text-[10px] font-bold text-zinc-300">
                      {selected.signal}
                    </span>
                    {selected.recentMover && (
                      <span className="px-2.5 py-1 rounded-full bg-[#ccff00]/15 border border-[#ccff00]/40 text-[10px] font-bold text-[#ccff00]">
                        Friss
                      </span>
                    )}
                  </div>

                  <LockedSection
                    locked={!selectedUnlocked}
                    label="Starterpack szükséges"
                    className="!rounded-xl"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {[
                        {
                          label: "Medián eladott",
                          value: formatHuf(selected.medianSold),
                          accent: false,
                        },
                        {
                          label: "Nettó resale",
                          value: formatHuf(selected.netResale),
                          accent: true,
                        },
                        {
                          label: "Beszerzési plafon",
                          value: formatHuf(selected.buyCeiling),
                          accent: true,
                        },
                      ].map((m) => (
                        <div
                          key={m.label}
                          className="rounded-xl bg-black/40 border border-zinc-800 p-3.5"
                        >
                          <p className="text-[10px] font-black uppercase tracking-wider text-zinc-500">
                            {m.label}
                          </p>
                          <p
                            className={`text-base sm:text-lg font-black font-display mt-1 ${
                              m.accent ? "text-[#ccff00]" : "text-white"
                            }`}
                          >
                            {m.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </LockedSection>

                  {selectedUnlocked && (
                    <div className="flex flex-col sm:flex-row gap-2.5">
                      <Link
                        href={selected.supplierListHref}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-[#ccff00]/50 text-[#ccff00] text-xs font-black uppercase tracking-wider hover:bg-[#ccff00]/10 transition"
                      >
                        <ShoppingBag className="w-4 h-4" />
                        Beszállító keresése
                      </Link>
                      <Link
                        href="/utmutato"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-zinc-600 text-white text-xs font-black uppercase tracking-wider hover:border-[#ccff00] transition"
                      >
                        <BookOpen className="w-4 h-4" />
                        Vásárlási útmutató
                      </Link>
                    </div>
                  )}
                </div>

                <LockedSection
                  locked={!selectedUnlocked}
                  label="Starterpack szükséges"
                >
                  <div className="rounded-2xl bg-[#121214] border border-[#27272a] p-5 space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-black uppercase text-white font-display">
                        Friss eladási példák
                      </h3>
                      <span className="text-[11px] text-zinc-500 font-normal">
                        Magyarország
                      </span>
                    </div>
                    <div className="flex gap-3 overflow-x-auto pb-1">
                      {selected.soldExamples.map((ex, i) => (
                        <div
                          key={ex.id}
                          className={`shrink-0 w-36 rounded-xl border overflow-hidden ${
                            i === 0 ? "border-[#ccff00]/50" : "border-zinc-800"
                          }`}
                        >
                          <div className="relative aspect-square bg-zinc-900">
                            <Image
                              src={ex.image}
                              alt={ex.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="p-2 space-y-0.5">
                            <p className="text-[11px] font-bold text-white line-clamp-2 leading-tight">
                              {ex.title}
                            </p>
                            <p className="text-[10px] text-zinc-500">{ex.marketplace}</p>
                            <p className="text-xs font-black text-[#ccff00]">
                              {formatHuf(ex.price)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </LockedSection>

                <LockedSection
                  locked={!selectedUnlocked}
                  label="Starterpack szükséges"
                >
                  <div className="rounded-2xl bg-[#121214] border border-[#27272a] p-5 space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-black uppercase text-white font-display">
                        Aktuális piactéri példák
                      </h3>
                      <span className="text-[11px] text-[#ccff00] font-semibold">
                        {selected.marketplaceExamples.length} megjelenítve
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {selected.marketplaceExamples.map((ex) => (
                        <li
                          key={ex.id}
                          className="flex items-center gap-3 p-2.5 rounded-xl bg-black/30 border border-zinc-800"
                        >
                          <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 bg-zinc-900">
                            <Image
                              src={ex.image}
                              alt={ex.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-xs font-bold text-white truncate">
                              {ex.title}
                            </p>
                            <p className="text-[10px] text-zinc-500 font-normal">
                              {ex.marketplace}
                            </p>
                          </div>
                          <p className="text-sm font-black text-[#ccff00] shrink-0">
                            {formatHuf(ex.price)}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </LockedSection>

                <div
                  id="vendors"
                  className="rounded-2xl bg-[#121214] border border-[#27272a] p-5 space-y-4 scroll-mt-28"
                >
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-xs font-black uppercase tracking-wider text-zinc-400">
                      Beszállító ehhez a termékhez
                    </h3>
                    <span className="text-[10px] font-black uppercase tracking-wider text-zinc-500">
                      {selected.categoryLabel}
                    </span>
                  </div>

                  {!canSeeVendors && (
                    <div className="rounded-xl border border-[#ccff00]/40 bg-[#ccff00]/5 p-4 flex flex-col sm:flex-row sm:items-center gap-3">
                      <div className="flex items-start gap-2.5 flex-1">
                        <ShieldCheck className="w-5 h-5 text-[#ccff00] shrink-0 mt-0.5" />
                        <div>
                          <p className="text-[11px] font-black uppercase tracking-wider text-[#ccff00]">
                            Masterclass unlock
                          </p>
                          <p className="text-xs text-zinc-300 font-normal mt-1 leading-relaxed">
                            Autentikáción átmenő beszállítók a Masterclassban –
                            ellenőrzött listák és QC workflow egyben.
                          </p>
                        </div>
                      </div>
                      <Link
                        href="/masterclass"
                        className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-[#ccff00] text-black text-xs font-black uppercase tracking-wider hover:bg-[#b3e600] transition shrink-0"
                      >
                        <Lock className="w-3.5 h-3.5" />
                        Masterclass
                      </Link>
                    </div>
                  )}

                  <LockedSection
                    locked={!canSeeVendors}
                    label="Masterclass szükséges"
                    className="!rounded-xl"
                  >
                    <ul className="space-y-2">
                      {selected.vendors.map((vendor) => (
                        <li
                          key={vendor.id}
                          className="flex items-center justify-between gap-3 p-3 rounded-xl bg-black/30 border border-zinc-800"
                        >
                          <div className="min-w-0">
                            <p className="text-sm font-bold text-white truncate">
                              {vendor.name}
                            </p>
                            <p className="text-[11px] text-zinc-500 font-normal">
                              {vendor.categories}
                            </p>
                          </div>
                          <Link
                            href={vendor.href}
                            className="inline-flex items-center gap-1.5 text-xs font-black text-[#ccff00] hover:underline shrink-0"
                          >
                            <MessageCircle className="w-4 h-4" />
                            Lista
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </LockedSection>

                  {canSeeVendors && (
                    <Link
                      href="/katalogus?kat=suppliers"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-400 hover:text-[#ccff00] transition"
                    >
                      <Tag className="w-3.5 h-3.5" />
                      Összes beszállítói lista a katalógusban
                    </Link>
                  )}
                </div>
              </>
            ) : (
              <div className="rounded-2xl bg-[#121214] border border-[#27272a] p-8 text-center text-sm text-zinc-400">
                Válassz egy lehetőséget a listából.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

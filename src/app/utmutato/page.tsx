import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ShieldCheck, 
  Flame, 
  Star,
  Lock,
  Zap,
  TrendingUp,
  Users,
  Repeat,
  ChevronRight,
  Quote,
  Coins,
  Check,
  X,
  Package,
  Search,
  Sparkles,
  AlertTriangle,
} from "lucide-react";
import { PRODUCTS } from "@/data/products";
import {
  GUIDE_PROOF_IMAGES,
  GUIDE_REVIEWS,
  GUIDE_STEPS,
} from "@/data/guide";
import { GuideBuyButton } from "@/components/GuideBuyButton";
import { GuideFaqAccordion } from "@/components/GuideFaqAccordion";

export const metadata = {
  title: "Az Első Millió – Replica Reselling Útmutató 2026 | EgyPerEgy",
  description: "A teljes digitális viszonteladói útmutató: ellenőrzött beszállítók, bizonyított eladási módszer és azonnali hozzáférés e-mailben."
};

const SECTION = "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8";

function SectionHeader({ label, title, description }: { label: string; title: string; description?: string }) {
  return (
    <div className="text-center space-y-2 mb-8">
      <span className="text-xs font-black uppercase tracking-wider text-[#ccff00]">{label}</span>
      <h2 className="text-2xl sm:text-3xl font-black uppercase text-white font-display">{title}</h2>
      {description && <p className="text-sm text-zinc-400">{description}</p>}
    </div>
  );
}

export default function GuidePage() {
  const guideProduct = PRODUCTS.find((p) => p.isDigital) || PRODUCTS[1];

  return (
    <div className="min-h-screen bg-black text-white pb-24">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#141418] via-black to-black border-b border-[#27272a] pt-12 pb-16 sm:pt-16 sm:pb-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#ccff00]/15 blur-[140px] rounded-full pointer-events-none" />

        <div className={`${SECTION} relative z-10 space-y-8`}>
          <div className="flex items-center gap-2 text-xs font-semibold text-zinc-500 uppercase tracking-wider">
            <Link href="/" className="hover:text-[#ccff00]">Főoldal</Link>
            <span>/</span>
            <span className="text-[#ccff00]">Az Első Millió Útmutató</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
            <div className="space-y-6 flex flex-col">
              <div className="inline-flex w-fit items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ccff00] text-black text-xs font-black uppercase tracking-wider">
                <Flame className="w-4 h-4" />
                <span>Csak limitált ideig</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-white font-display leading-[0.95]">
                AZ ELSŐ MILLIÓ – <br />
                <span className="text-[#ccff00] drop-shadow-[0_0_20px_rgba(204,255,0,0.3)]">
                  REPLICA RESELLING
                </span> <br />
                ÚTMUTATÓ
              </h1>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                Pár nap alatt megkeresheted másnak a teljes havi bérét, ha tudod, mit csinálsz. Ez az útmutató megadja neked ezt a lehetőséget. Nem elméletet, hanem egy módszert, ami már bizonyítottan működik.
              </p>

              <div className="flex flex-wrap gap-4 text-xs text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-[#ccff00]" />
                  128+ elégedett vásárló
                </span>
                <span className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 fill-[#ccff00] text-[#ccff00]" />
                  5.0 értékelés
                </span>
                <span className="flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 text-[#ccff00]" />
                  Bizonyított módszer
                </span>
              </div>

              <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#ccff00]/5 via-[#121214] to-[#121214] border border-[#ccff00]/30 shadow-2xl space-y-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-48 h-48 bg-[#ccff00]/10 blur-[80px] rounded-full pointer-events-none" />
                <div className="relative z-10 space-y-6">
                <div className="space-y-3">
                  <span className="text-lg sm:text-xl text-zinc-400 line-through block text-left font-bold font-display tracking-wide decoration-zinc-500">
                    10 000 Ft helyett
                  </span>

                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="text-4xl sm:text-5xl font-black font-display text-[#ccff00] tracking-tight">1 000 Ft</span>
                      <span className="text-sm font-black px-3 py-1.5 rounded-md bg-red-600 text-white uppercase tracking-wider shadow-lg shadow-red-600/30">-90%</span>
                    </div>
                    <div className="flex flex-col items-start sm:items-end justify-center gap-2">
                      <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-[#ccff00] text-[#ccff00]" />
                        ))}
                      </div>
                      <span className="text-sm sm:text-base text-zinc-300 font-semibold">5.0 / 5.0 (128 eladás)</span>
                    </div>
                  </div>
                </div>
                <GuideBuyButton label="MEGVÁSÁROLOM ÉS HOZZÁFÉREK" size="lg" />
                <div className="flex flex-wrap items-center justify-center gap-3 text-[11px] text-zinc-400 pt-1">
                  <span className="flex items-center gap-1"><Lock className="w-3.5 h-3.5 text-[#ccff00]" /> Biztonságos Stripe fizetés</span>
                  <span>•</span>
                  <span>Azonnali letöltés</span>
                  <span>•</span>
                  <span>Örökös frissítés</span>
                </div>
                </div>
              </div>
            </div>

            <div className="relative flex h-full min-h-[280px]">
              <div className="relative w-full h-full rounded-3xl bg-gradient-to-b from-zinc-800 to-black p-4 border border-[#ccff00]/40 shadow-2xl overflow-hidden group">
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src={guideProduct.images[0]}
                    alt="Az Első Millió Resell Útmutató borító"
                    fill
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 space-y-2">
                    <span className="text-xs font-black uppercase px-2.5 py-1 rounded bg-[#ccff00] text-black inline-block">
                      DIGITÁLIS CSOMAG
                    </span>
                    <h3 className="text-xl font-black uppercase text-white font-display">
                      AZ ELSŐ MILLIÓ 2026
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Millionaire from small start */}
      <section className="py-12">
        <div className={SECTION}>
          <div className="rounded-3xl bg-gradient-to-br from-[#ccff00]/5 via-[#121214] to-[#121214] border border-[#ccff00]/30 p-8 sm:p-10 space-y-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-48 h-48 bg-[#ccff00]/10 blur-[80px] rounded-full pointer-events-none" />

            <div className="relative z-10 text-center space-y-3">
              <Coins className="w-10 h-10 text-[#ccff00] mx-auto" />
              <span className="text-xs font-black uppercase tracking-wider text-[#ccff00] block">
                A valóság
              </span>
              <h2 className="text-2xl sm:text-4xl font-black uppercase text-white font-display leading-tight">
                Legyél te is milliomos ezer forintból
              </h2>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto space-y-4 text-sm text-zinc-300 leading-relaxed text-center">
              <p>
                Nem kell milliós tőke, nem kell kapcsolatrendszer, és nem kell évekig tanulnod. A replika reselling lényege egyszerű: <span className="text-white font-semibold">olcsón beszerzel, magasabb áron eladsz</span>, és a profitot újra és újra visszaforgatod.
              </p>
              <p>
                Egyetlen jól választott termék, egyetlen sikeres eladás – és már elindultál. Onnantól nem szerencsejáték: egy <span className="text-white font-semibold">ismételhető rendszer</span>, amit napról napra lefutsz. Az első ezer forintból tízezrek, a tízezerekből százezrek, a százezerekből pedig az első millió.
              </p>
              <p className="text-zinc-400">
                Mások már megtették ezt az utat. Nem voltak különlegesek – csak tudták, mit csinálnak. Az útmutató pontosan ezt adja meg neked: a térképet, amit követni tudsz.
              </p>
            </div>

            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { value: "3–5×", label: "Árrés egy eladáson", sub: "Folyamatos, visszaforgatható profit" },
                { value: "1 000 000+", label: "Havi cél", sub: "Kövessd a módszert, még a hónap végén is elérheted" },
                { value: "5 000 Ft", label: "Egy póló árából", sub: "Egy vintage póló árából lehetsz milliomos" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-5 rounded-2xl bg-black/50 border border-zinc-800 text-center space-y-1"
                >
                  <p className="text-xl sm:text-2xl font-black text-[#ccff00] font-display">{stat.value}</p>
                  <p className="text-xs font-bold uppercase text-white">{stat.label}</p>
                  <p className="text-[10px] text-zinc-500">{stat.sub}</p>
                </div>
              ))}
            </div>

            <p className="relative z-10 text-center text-xs text-zinc-500 max-w-xl mx-auto">
              Nem ígérünk varázslatot egy éjszaka alatt. De ígérünk egy módszert, ami működik – és amit te is lefuthatsz.
            </p>
          </div>
        </div>
      </section>

      {/* The Game */}
      <section className="py-12">
        <div className={SECTION}>
          <div className="text-center space-y-2 mb-8">
            <Zap className="w-10 h-10 text-[#ccff00] mx-auto" />
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-white font-display">
              Az egész játék
            </h2>
            <p className="text-sm text-zinc-400 max-w-2xl mx-auto">
              Egy ismételhető ciklus, amit a legtöbb ember nem fut le rendesen.
            </p>
          </div>

          <div className="rounded-3xl bg-[#121214] border border-[#27272a] p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-bold text-zinc-300">
              <span className="px-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-700">Találj olcsón</span>
              <ChevronRight className="w-4 h-4 text-[#ccff00] hidden sm:block flex-shrink-0" />
              <span className="px-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-700">Tedd fel</span>
              <ChevronRight className="w-4 h-4 text-[#ccff00] hidden sm:block flex-shrink-0" />
              <span className="px-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-700">Add el</span>
              <ChevronRight className="w-4 h-4 text-[#ccff00] hidden sm:block flex-shrink-0" />
              <span className="px-3.5 py-2 rounded-xl bg-[#ccff00]/10 border border-[#ccff00]/40 text-[#ccff00]">Ismételd</span>
            </div>

            {/* A modell – standalone */}
            <div className="p-4 sm:p-5 rounded-2xl bg-black/40 border border-zinc-800 text-left space-y-2.5">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-700 flex items-center justify-center flex-shrink-0">
                  <Coins className="w-4 h-4 text-[#ccff00]" />
                </div>
                <h3 className="text-base sm:text-lg font-black uppercase text-white font-display">A viszonteladási modell</h3>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Veszel olcsón, eladsz drágábban – de nem mindegy, mennyi a profitod.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="p-4 sm:p-5 rounded-2xl bg-[#ccff00]/5 border border-[#ccff00]/30 text-left space-y-2.5">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#ccff00]/10 border border-[#ccff00]/40 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-4 h-4 text-[#ccff00]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-black uppercase text-[#ccff00] font-display">A replikák előnye</h3>
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Az árrés lényegesen nagyobb máshoz képest. Mi ezt a kaput használjuk ki – ez az egész „játék”.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-red-950/20 border border-red-800/40 text-left space-y-2.5">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-red-950/40 border border-red-800/50 flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-4 h-4 text-red-400" />
                  </div>
                  <h3 className="text-base sm:text-lg font-black uppercase text-red-400 font-display">A kockázat</h3>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Rossz termék, platform tiltás, eladás veszteséggel – ezért kell módszer a helyes döntésekhez.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-red-950/20 border border-red-800/40 text-left space-y-2.5">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-red-950/40 border border-red-800/50 flex items-center justify-center flex-shrink-0">
                    <X className="w-4 h-4 text-red-400" />
                  </div>
                  <h3 className="text-base sm:text-lg font-black uppercase text-red-400 font-display">Így buknak el</h3>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  A legtöbb ember azért bukik el, mert nincs rendszere, nem tudja a trükköket, random silány terméket vesz, és az első sikertelen próbálkozás után egyből feladja.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-[#ccff00]/5 border border-[#ccff00]/30 text-left space-y-2.5">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#ccff00]/10 border border-[#ccff00]/40 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-[#ccff00]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-black uppercase text-[#ccff00] font-display">A nyerő módszer</h3>
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Velünk annyi a különbség, hogy mi nem adtuk fel, hanem{" "}
                  <span className="text-white font-semibold">megtaláltuk a milliókat kapitalizáló módszert, amihez limitált ideig most te is hozzáférhetsz</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section id="beszallitok" className="py-12">
        <div className={SECTION}>
          <SectionHeader
            label="Lépésről lépésre"
            title="Hogyan működik?"
            description="Nem listázzuk ki mindent – a részletek az útmutatóban vannak. De így néz ki a folyamat, amit követsz."
          />
          <div className="space-y-4">
            {GUIDE_STEPS.map((step) => (
              <div
                key={step.number}
                className="p-6 rounded-2xl bg-[#121214] border border-[#27272a] hover:border-[#ccff00]/40 transition flex items-start gap-4 sm:gap-6"
              >
                <div className="w-11 h-11 rounded-xl bg-[#ccff00] text-black flex items-center justify-center font-black text-base flex-shrink-0 font-display">
                  {step.number}
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-base sm:text-lg font-black uppercase text-white font-display">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">{step.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof Gallery – single row */}
      <section id="bizonyitekok" className="py-12">
        <div className={SECTION}>
          <SectionHeader
            label="Valós eredmények"
            title="Bizonyíték, hogy működik"
            description="Valós eladások és bevételek az útmutató követőitől."
          />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {GUIDE_PROOF_IMAGES.map((img) => (
              <div
                key={img.id}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-800 hover:border-[#ccff00]/50 transition bg-zinc-900"
              >
                <Image
                  src={img.src}
                  alt={img.caption}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                {img.platform && (
                  <span className="absolute top-2 left-2 text-[8px] font-black uppercase px-1.5 py-0.5 rounded bg-[#ccff00] text-black">
                    {img.platform}
                  </span>
                )}
                <p className="absolute bottom-2 left-2 right-2 text-[9px] sm:text-[10px] font-bold text-white leading-tight">
                  {img.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-12">
        <div className={SECTION}>
          <SectionHeader
            label="Vásárlói vélemények"
            title="Mit mondanak, akik már megvették?"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {GUIDE_REVIEWS.map((review) => (
              <div key={review.id} className="p-6 rounded-2xl bg-[#121214] border border-[#27272a] space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-black text-white">{review.author}</p>
                    <p className="text-[10px] text-zinc-500">{review.date}</p>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#ccff00] text-[#ccff00]" />
                    ))}
                  </div>
                </div>
                {review.highlight && (
                  <span className="inline-block text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-[#ccff00]/10 text-[#ccff00] border border-[#ccff00]/30">
                    {review.highlight}
                  </span>
                )}
                <div className="flex gap-2">
                  <Quote className="w-4 h-4 text-zinc-600 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-zinc-300 leading-relaxed">{review.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Comparison */}
      <section className="py-12">
        <div className={SECTION}>
          <div className="rounded-3xl bg-zinc-950 border border-zinc-800 p-6 sm:p-10 space-y-8">
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-white font-display text-center">
              Miért éri meg már az első héten?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <div className="p-5 rounded-xl bg-red-950/30 border border-red-800/40 space-y-4">
                <h4 className="text-base sm:text-lg font-black text-red-400 uppercase font-display">
                  Útmutató nélkül
                </h4>
                <ul className="space-y-2.5">
                  {[
                    { text: "Megtartod az ezer forintod", pro: true, muted: true },
                    { text: "Lemaradsz több millió forintról", pro: false },
                    { text: "Hónapokig próbálkozol vakon", pro: false },
                    { text: "Rossz beszállítókon buksz el pénzt", pro: false },
                    { text: "Selejt termékek, visszaküldések, veszekedés", pro: false },
                    { text: "Nincs rendszer – minden nap elölről kezdesz", pro: false },
                    { text: "Sosem tudod, jó irányba mész-e", pro: false },
                    { text: "A platform kitilt, mielőtt elindulnál", pro: false },
                    { text: "Másnak adod a profitot viszonteladói feláron", pro: false },
                    { text: "Egy év múlva is ugyanott tartasz", pro: false },
                  ].map((item) => (
                    <li key={item.text} className="flex items-start gap-2 text-xs leading-snug">
                      {item.pro ? (
                        <Check className="w-3.5 h-3.5 text-[#ccff00] flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-3.5 h-3.5 text-red-400 flex-shrink-0 mt-0.5" />
                      )}
                      <span className={item.muted ? "text-zinc-400" : item.pro ? "text-[#ccff00] font-medium" : "text-zinc-400"}>
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 rounded-xl bg-lime-950/30 border border-[#ccff00]/40 space-y-4">
                <h4 className="text-base sm:text-lg font-black text-[#ccff00] uppercase font-display">
                  Az útmutatóval
                </h4>
                <ul className="space-y-2.5">
                  {[
                    "Kész, bizonyított rendszerrel indulsz",
                    "Kihagyod a drága próbálkozásokat",
                    "Tudod, mit szerezz be és hol add el",
                    "Az első eladások gyorsabban jönnek",
                    "Az ezer forintod megtérülhet az első héten",
                    "Követhető lépések – nem kell találgatnod",
                    "Más sikeres eladók módszerét kapod meg",
                    "Skálázható üzlet, nem egyszeri szerencse",
                    "Kevesebb stressz, több kontroll",
                    "Ugyanazokat az eredményeket érheted el, mint ők",
                  ].map((text) => (
                    <li key={text} className="flex items-start gap-2 text-xs text-zinc-300 leading-snug">
                      <Check className="w-3.5 h-3.5 text-[#ccff00] flex-shrink-0 mt-0.5" />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="vamolas" className="py-12">
        <div className={SECTION}>
          <SectionHeader label="GYIK" title="Gyakori kérdések" />
          <GuideFaqAccordion />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12">
        <div className={SECTION}>
          <div className="rounded-3xl bg-gradient-to-br from-[#ccff00]/10 via-[#121214] to-black border-2 border-[#ccff00]/40 p-8 sm:p-12 text-center space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#ccff00]/5 blur-[80px] rounded-full pointer-events-none" />
            <Repeat className="w-10 h-10 text-[#ccff00] mx-auto relative z-10" />
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-white font-display relative z-10">
              Ha ők meg tudták csinálni, te is meg tudod.
            </h2>
            <p className="text-sm text-zinc-300 relative z-10">
              Nem kell hozzá több, mint egy működő rendszer és a döntés, hogy elindulsz. A részletek az útmutatóban várnak.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <GuideBuyButton label="KEZDD EL MOST – 1 000 Ft" size="lg" className="!w-auto sm:!min-w-[280px]" />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-zinc-400 relative z-10">
              <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-[#ccff00]" /> Stripe fizetés</span>
              <span>•</span>
              <span>Azonnali letöltés</span>
              <span>•</span>
              <span>Örökös frissítés</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing alternative */}
      <section id="egyedi-beszerzes" className="py-12">
        <div className={SECTION}>
          <SectionHeader
            label="Alternatíva"
            title="Nem akarsz magad beszerezni?"
            description="Ha nem veszed meg az útmutatót, az egyedi beszerzési szolgáltatásunk ugyanarra a célra ad megoldást – csak más úton."
          />

          <div className="rounded-3xl bg-[#121214] border border-[#27272a] p-8 sm:p-10 space-y-8">
            <p className="text-sm text-zinc-300 leading-relaxed text-center max-w-3xl mx-auto">
              Nem mindenkinek kell (vagy akar) saját beszállítói hálózatot építeni. Ha inkább kész terméket szeretnél, mi intézzük a teljes folyamatot – a megfelelő gyártó kiválasztásától a QC fotókon át a szállításig.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  icon: Search,
                  title: "Tapasztalat, nem munka",
                  text: "A díjért nem az időmet fizeted – hanem az évek alatt felépített sourcing tudásomat, kapcsolataimat és a rossz döntéseket, amiket helyetted kiszűrök.",
                },
                {
                  icon: ShieldCheck,
                  title: "Ellenőrzött minőség",
                  text: "QC fotók, megbízható 1/1 gyári források és átlátható kommunikáció – nem kell találgatnod, melyik eladóban bízhatsz.",
                },
                {
                  icon: Package,
                  title: "Gyors, kényelmes út",
                  text: "Küldd el a képet vagy linket, megadod a méretet – mi beszerezzük és házhoz juttatjuk. Ideális, ha most termék kell, nem rendszer.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-5 rounded-2xl bg-black/50 border border-zinc-800 space-y-3"
                  >
                    <Icon className="w-8 h-8 text-[#ccff00]" />
                    <h3 className="text-sm font-black uppercase text-white font-display">{item.title}</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">{item.text}</p>
                  </div>
                );
              })}
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-[#ccff00]/5 to-transparent border border-[#ccff00]/30 p-6 sm:p-8 text-center space-y-4">
              <Sparkles className="w-8 h-8 text-[#ccff00] mx-auto" />
              <h3 className="text-lg sm:text-xl font-black uppercase text-white font-display">
                Miért ajánlott az egyedi beszerzés?
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed max-w-2xl mx-auto">
                Ha nem szeretnél tanulni, próbálkozni és hibákból okosodni, a sourcing szolgáltatás a biztonságosabb választás. Fizetsz azért, hogy valaki, aki ezt naponta csinálja, a helyedben hozza meg a jó döntéseket – és te csak a terméket kapod meg.
              </p>
              <Link
                href="/egyedi-beszerzes"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-xs font-black uppercase tracking-wider bg-[#ccff00] text-black hover:bg-[#b3e600] transition"
              >
                Egyedi beszerzés igénylése
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

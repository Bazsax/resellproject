import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
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
  Crown,
  Layers,
  Rocket,
  AlertTriangle,
} from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { GUIDE_REVIEWS } from "@/data/guide";
import {
  MASTERCLASS_STEPS,
  MASTERCLASS_FAQ,
  MASTERCLASS_BUNDLE_ITEMS,
  MASTERCLASS_SLOTS,
} from "@/data/masterclass";
import { GuideBuyButton } from "@/components/GuideBuyButton";
import { GuideFaqAccordion } from "@/components/GuideFaqAccordion";
import { SuccessStoriesSection } from "@/components/SuccessStoriesSection";

export const metadata = {
  title: "100 fillérből 100 Millió – Reselling Masterclass | Direct Supply",
  description:
    "A legteljesebb Direct Supply csomag: összes beszállítói lista, útmutatók és a birodalom-építő masterclass – 49 990 Ft helyett 200 000 Ft értékben.",
};

const SECTION = "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8";
const DISCOUNT_PCT = Math.round(((199990 - 49990) / 199990) * 100);
const SLOTS_LEFT = MASTERCLASS_SLOTS.total - MASTERCLASS_SLOTS.taken;
const SLOTS_PCT = Math.round((MASTERCLASS_SLOTS.taken / MASTERCLASS_SLOTS.total) * 100);

function SectionHeader({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="text-center space-y-2 mb-8">
      <span className="text-xs font-black uppercase tracking-wider text-[#ccff00]">{label}</span>
      <h2 className="text-2xl sm:text-3xl font-black uppercase text-white font-display">{title}</h2>
      {description && <p className="text-sm text-zinc-400 font-normal">{description}</p>}
    </div>
  );
}

function BundleGroupCard({
  group,
}: {
  group: (typeof MASTERCLASS_BUNDLE_ITEMS)[number];
}) {
  const hasCategories = "categories" in group && group.categories;

  return (
    <div className="rounded-2xl bg-[#121214] border border-[#27272a] p-5 sm:p-6 space-y-4 h-full">
      <h3 className="text-sm font-black uppercase text-[#ccff00] font-display">{group.group}</h3>

      {hasCategories ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {group.categories!.map((category) => (
            <div key={category.name} className="space-y-2.5">
              <p className="text-xs font-black uppercase tracking-wide text-white">
                {category.name}
              </p>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-start justify-between gap-3 text-xs sm:text-sm border-b border-zinc-800/80 pb-2 last:border-0 last:pb-0"
                  >
                    <span className="flex items-start gap-2 text-zinc-300 font-normal">
                      <Check className="w-3.5 h-3.5 text-[#ccff00] flex-shrink-0 mt-0.5" />
                      {item.name}
                    </span>
                    <span className="text-zinc-500 line-through shrink-0 font-normal">
                      {item.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <ul className="space-y-2.5">
          {"items" in group &&
            group.items?.map((item) => (
              <li
                key={item.name}
                className="flex items-start justify-between gap-3 text-xs sm:text-sm border-b border-zinc-800/80 pb-2 last:border-0 last:pb-0"
              >
                <span className="flex items-start gap-2 text-zinc-300 font-normal">
                  <Check className="w-3.5 h-3.5 text-[#ccff00] flex-shrink-0 mt-0.5" />
                  {item.name}
                </span>
                <span className="text-zinc-500 line-through shrink-0 font-normal">{item.value}</span>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}

export default function MasterclassPage() {
  const product =
    PRODUCTS.find((p) => p.slug === "reselling-masterclass") ||
    PRODUCTS.find((p) => p.isDigital);

  if (!product) return null;

  return (
    <div className="min-h-screen bg-black text-white pb-24">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#141418] via-black to-black border-b border-[#27272a] pt-12 pb-16 sm:pt-16 sm:pb-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#ccff00]/15 blur-[140px] rounded-full pointer-events-none" />

        <div className={`${SECTION} relative z-10 space-y-8`}>
          <div className="flex items-center gap-2 text-xs font-semibold text-zinc-500 uppercase tracking-wider">
            <Link href="/" className="hover:text-[#ccff00]">
              Főoldal
            </Link>
            <span>/</span>
            <span className="text-[#ccff00]">Reselling Masterclass</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
            <div className="space-y-6 flex flex-col">
              <div className="inline-flex w-fit items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ccff00] text-black text-xs font-black uppercase tracking-wider">
                <Crown className="w-4 h-4" />
                <span>A teljes Direct Supply birodalom</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-white font-display leading-[0.95]">
                100 FILLÉRBŐL{" "}
                <span className="text-[#ccff00] drop-shadow-[0_0_20px_rgba(204,255,0,0.3)]">
                  100 MILLIÓ
                </span>
                <br />
                RESELLING MASTERCLASS
              </h1>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                Ez nem egy „kis útmutató”. Ez a rendszer, amivel{" "}
                <span className="text-white font-semibold">teljes reselling birodalmat</span> építesz –
                több kategória, több beszállító, nagyobb volumen, és egy pálya, ami a fillérektől a
                százmillióig vezet. Ha komolyan gondolod a sikert, itt kezdődik a nagyjáték.
              </p>

              <div className="flex flex-wrap gap-4 text-xs text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-[#ccff00]" />
                  {MASTERCLASS_SLOTS.taken}/{MASTERCLASS_SLOTS.total} hely foglalt
                </span>
                <span className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 fill-[#ccff00] text-[#ccff00]" />
                  5.0 értékelés
                </span>
                <span className="flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-[#ccff00]" />
                  Minden egyben
                </span>
              </div>

              <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#ccff00]/5 via-[#121214] to-[#121214] border border-[#ccff00]/30 shadow-2xl space-y-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-48 h-48 bg-[#ccff00]/10 blur-[80px] rounded-full pointer-events-none" />
                <div className="relative z-10 space-y-6">
                  <div className="space-y-3">
                    <span className="text-lg sm:text-xl text-zinc-400 line-through block text-left font-bold font-display tracking-wide decoration-zinc-500">
                      Eredeti érték 200 000 Ft
                    </span>

                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className="text-4xl sm:text-5xl font-black font-display text-[#ccff00] tracking-tight">
                          49 990 Ft
                        </span>
                        <span className="text-sm font-black px-3 py-1.5 rounded-md bg-red-600 text-white uppercase tracking-wider shadow-lg shadow-red-600/30">
                          -{DISCOUNT_PCT}%
                        </span>
                      </div>
                      <div className="flex flex-col items-start sm:items-end justify-center gap-2">
                        <div className="flex gap-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-[#ccff00] text-[#ccff00]" />
                          ))}
                        </div>
                        <span className="text-sm sm:text-base text-zinc-300 font-semibold">
                          5.0 / 5.0
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl bg-black/40 border border-zinc-800 p-3.5 space-y-2.5">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                        <span className="font-semibold text-amber-400">Limitált férőhely: {MASTERCLASS_SLOTS.taken}/{MASTERCLASS_SLOTS.total}. </span>
                        <span className="font-semibold text-white">Csak {SLOTS_LEFT} hely szabad.</span>
                      </p>
                    </div>
                    <div className="h-2 rounded-full bg-zinc-900 overflow-hidden border border-zinc-800">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-zinc-700/80 to-amber-400/80 transition-all"
                        style={{ width: `${SLOTS_PCT}%` }}
                      />
                    </div>
                    <p className="text-[10px] uppercase tracking-wider text-zinc-500 font-semibold text-right">
                      {SLOTS_PCT}% tele
                    </p>
                  </div>

                  <GuideBuyButton product="masterclass" size="lg" />
                  <div className="flex flex-wrap items-center justify-center gap-3 text-[11px] text-zinc-400 pt-1">
                    <span className="flex items-center gap-1">
                      <Lock className="w-3.5 h-3.5 text-[#ccff00]" /> Biztonságos Stripe fizetés
                    </span>
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
                    src={product.images[0]}
                    alt="100 fillérből 100 Millió – Reselling Masterclass"
                    fill
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 space-y-2">
                    <span className="text-xs font-black uppercase px-2.5 py-1 rounded bg-[#ccff00] text-black inline-block">
                      TELJES CSOMAG
                    </span>
                    <h3 className="text-xl font-black uppercase text-white font-display">
                      RESELLING MASTERCLASS
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Empire pitch */}
      <section className="py-9 sm:py-12">
        <div className={SECTION}>
          <div className="rounded-3xl bg-gradient-to-br from-[#ccff00]/5 via-[#121214] to-[#121214] border border-[#ccff00]/30 p-8 sm:p-10 space-y-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-48 h-48 bg-[#ccff00]/10 blur-[80px] rounded-full pointer-events-none" />

            <div className="relative z-10 text-center space-y-3">
              <Rocket className="w-10 h-10 text-[#ccff00] mx-auto" />
              <span className="text-xs font-black uppercase tracking-wider text-[#ccff00] block">
                A nagyjáték
              </span>
              <h2 className="text-2xl sm:text-4xl font-black uppercase text-white font-display leading-tight">
                Nem eladásra játszunk – birodalomra
              </h2>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto space-y-4 text-sm text-zinc-300 leading-relaxed text-center font-normal">
              <p>
                A legtöbb ember megáll az első eladásnál. Te viszont{" "}
                <span className="text-white font-semibold">
                  rendszerben gondolkodsz: több kategória, több front, visszaforgatható profit
                </span>
                , és egy cél, ami túlmutat a havi zsebpénzen.
              </p>
              <p>
                A Masterclass megadja a teljes arzenált – hogy ne egy termékből élj, hanem egy
                működő gépezetből, ami skálázódik. Innen vezet az út a{" "}
                <span className="text-white font-semibold">százezrektől a milliókon át a 100 millióig</span>.
              </p>
              <p className="text-zinc-400">
                Aki kis lépésekben gondolkodik, kis eredményeket kap. Aki birodalmat akar – annak
                kell a teljes rendszer.
              </p>
            </div>

            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { value: "6+", label: "Beszállítói kategória", sub: "Ruha, cipő, táska, óra és több" },
                { value: "100M", label: "Célpálya", sub: "Fillérektől a teljes skáláig" },
                { value: "1 csomag", label: "Minden egyben", sub: "Listák + guide-ok + masterclass" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-5 rounded-2xl bg-black/50 border border-zinc-800 text-center space-y-1"
                >
                  <p className="text-xl sm:text-2xl font-black text-[#ccff00] font-display">{stat.value}</p>
                  <p className="text-xs font-semibold text-white font-normal">{stat.label}</p>
                  <p className="text-[10px] text-zinc-500 font-normal">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bundle value stack */}
      <section className="py-9 sm:py-12">
        <div className={SECTION}>
          <SectionHeader
            label="Kedvezményes csomag"
            title="Minden egyben – teljes érték 200 000+ Ft"
            description="Egyenként megvéve ennyi lenne az összérték. A Masterclassban most egyben kapod – töredékáron."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 items-stretch">
            <BundleGroupCard group={MASTERCLASS_BUNDLE_ITEMS[0]} />
            <div className="flex flex-col gap-4">
              {MASTERCLASS_BUNDLE_ITEMS.slice(1).map((group) => (
                <BundleGroupCard key={group.group} group={group} />
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-[#ccff00]/5 border border-[#ccff00]/30 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-xs text-zinc-500 font-normal uppercase tracking-wider">Összérték</p>
              <p className="text-2xl font-black text-zinc-400 line-through font-display">200 000 Ft</p>
            </div>
            <div className="sm:text-right">
              <p className="text-xs text-[#ccff00] font-black uppercase tracking-wider">Te most ennyiért kapod</p>
              <p className="text-3xl sm:text-4xl font-black text-[#ccff00] font-display">49 990 Ft</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Game */}
      <section className="py-9 sm:py-12">
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
            <div className="hidden sm:flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-bold text-zinc-300">
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
                  Ebben a Masterclassben rejlik minden ami elvezet a sikerhez:{" "}
                  <span className="text-white font-semibold">Teljes beszállítói hálózat, minden eszköz és forrás, skálázási térkép. A siker lépésről, lépésre levezetve</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section id="folyamat" className="py-9 sm:py-12">
        <div className={SECTION}>
          <SectionHeader
            label="Lépésről lépésre"
            title="Hogyan épül fel?"
            description="A Masterclass végigvisz az indulástól a skálázásig – a cél csak rajtad múlik"
          />
          <div className="space-y-4">
            {MASTERCLASS_STEPS.map((step) => (
              <div
                key={step.number}
                className="p-6 rounded-2xl bg-[#121214] border border-[#27272a] hover:border-[#ccff00]/40 transition flex items-start gap-4 sm:gap-6"
              >
                <div className="w-11 h-11 rounded-xl bg-[#ccff00] text-black flex items-center justify-center font-black text-base flex-shrink-0 font-display">
                  {step.number}
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-base sm:text-lg font-black uppercase text-white font-display">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                    {step.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SuccessStoriesSection variant="page" id="siker-sztorik" />

      {/* Reviews */}
      <section className="py-9 sm:py-12">
        <div className={SECTION}>
          <SectionHeader
            label="Vásárlói vélemények"
            title="Mit mondanak, akik már megvették?"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {GUIDE_REVIEWS.map((review) => (
              <div
                key={review.id}
                className="p-6 rounded-2xl bg-[#121214] border border-[#27272a] space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-black text-white">{review.author}</p>
                    <p className="text-[10px] text-zinc-500 font-normal">{review.date}</p>
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
                  <p className="text-xs text-zinc-300 leading-relaxed font-normal">{review.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-9 sm:py-12">
        <div className={SECTION}>
          <div className="rounded-3xl bg-zinc-950 border border-zinc-800 p-6 sm:p-10 space-y-8">
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-white font-display text-center">
              Kis lépés – vagy birodalom
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <div className="p-5 rounded-xl bg-red-950/30 border border-red-800/40 space-y-4">
                <h4 className="text-base sm:text-lg font-black text-red-400 uppercase font-display">
                  Masterclass nélkül
                </h4>
                <ul className="space-y-2.5">
                  {[
                    "Maradsz az első szintnél",
                    "Egy-egy listát veszel drágán, darabonként",
                    "Nincs skálázási terv – csak próbálkozás",
                    "A nagy számok mindig „majd később”",
                    "Másnak adod a profitot a hiányzó tudás miatt",
                  ].map((text) => (
                    <li key={text} className="flex items-start gap-2 text-xs leading-snug">
                      <X className="w-3.5 h-3.5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-400 font-normal">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 rounded-xl bg-lime-950/30 border border-[#ccff00]/40 space-y-4">
                <h4 className="text-base sm:text-lg font-black text-[#ccff00] uppercase font-display">
                  A Masterclass-szal
                </h4>
                <ul className="space-y-2.5">
                  {[
                    "Teljes arzenál: listák + guide-ok + masterclass",
                    "Több kategória = több bevételi front",
                    "Skálázható rendszer, nem egyszeri szerencse",
                    "Célpálya a 100 millió felé",
                    "Örökös frissítés – a birodalom veled nő",
                  ].map((text) => (
                    <li key={text} className="flex items-start gap-2 text-xs text-zinc-300 leading-snug">
                      <Check className="w-3.5 h-3.5 text-[#ccff00] flex-shrink-0 mt-0.5" />
                      <span className="font-normal">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="gyik" className="py-9 sm:py-12">
        <div className={SECTION}>
          <SectionHeader label="GYIK" title="Gyakori kérdések" />
          <GuideFaqAccordion items={MASTERCLASS_FAQ} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-9 sm:py-12">
        <div className={SECTION}>
          <div className="rounded-3xl bg-gradient-to-br from-[#ccff00]/10 via-[#121214] to-black border-2 border-[#ccff00]/40 p-8 sm:p-12 text-center space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#ccff00]/5 blur-[80px] rounded-full pointer-events-none" />
            <Repeat className="w-10 h-10 text-[#ccff00] mx-auto relative z-10" />
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-white font-display relative z-10">
              100 fillérből indult – 100 millió a cél
            </h2>
            <p className="text-sm text-zinc-300 relative z-10 font-normal max-w-xl mx-auto">
              A teljes csomag most 49 990 Ft – 200 000 Ft érték helyett. Ha birodalmat építesz, nem spórolsz a térképen.
            </p>
            <div className="relative z-10 mx-auto max-w-md rounded-xl bg-black/40 border border-zinc-800 px-4 py-3 space-y-2">
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                        <span className="font-semibold text-amber-400">Limitált férőhely: {MASTERCLASS_SLOTS.taken}/{MASTERCLASS_SLOTS.total}. </span>
                        <span className="font-semibold text-white">Csak {SLOTS_LEFT} hely szabad.</span>
                      </p>
              <div className="h-1.5 rounded-full bg-zinc-900 overflow-hidden border border-zinc-800">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-zinc-700/65 to-amber-400/65"
                  style={{ width: `${SLOTS_PCT}%` }}
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <GuideBuyButton product="masterclass" size="lg" className="!w-auto sm:!min-w-[200px]" />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-zinc-400 relative z-10">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-[#ccff00]" /> Stripe fizetés
              </span>
              <span>•</span>
              <span>Azonnali letöltés</span>
              <span>•</span>
              <span>Örökös frissítés</span>
            </div>
          </div>
        </div>
      </section>

      {/* Soft starterpack note */}
      <section className="py-9 sm:py-12">
        <div className={SECTION}>
          <div className="rounded-2xl bg-[#121214] border border-[#27272a] p-6 sm:p-8 text-center space-y-3">
            <Coins className="w-7 h-7 text-zinc-500 mx-auto" />
            <p className="text-sm text-zinc-400 font-normal">
              Még csak ismerkednél a rendszerrel? Kezdd a{" "}
              <Link href="/utmutato" className="text-[#ccff00] font-semibold hover:underline">
                Reselling Starterpackkel
              </Link>{" "}
              – és ha készen állsz a nagyjátékra, a Masterclass itt vár.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

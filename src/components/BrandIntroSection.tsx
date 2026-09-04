import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  FileText,
  Package,
  Sparkles,
  Check,
  Store,
  ShieldCheck,
  Search,
  TrendingUp,
} from "lucide-react";

function CtaButton({
  href,
  variant = "primary",
  children,
}: {
  href: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-black uppercase tracking-wider transition font-btn";
  const styles =
    variant === "primary"
      ? "bg-[#ccff00] text-black hover:bg-[#b3e600] shadow-lg shadow-[#ccff00]/20"
      : "bg-zinc-900 text-white border border-zinc-700 hover:border-[#ccff00]";

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}

export const BrandIntroSection: React.FC = () => {
  return (
    <section className="w-full bg-[#0a0a0c] py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-14">
        {/* Intro header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-black uppercase text-zinc-400 tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#ccff00]" />
            Miért a Direct Supply?
          </div>
          <h2 className="text-2xl sm:text-3xl font-black uppercase text-white font-display leading-tight">
            Két út, egy cél: <span className="text-[#ccff00]">profit</span>
          </h2>
          <p className="text-sm text-zinc-400 font-normal leading-relaxed">
            A saját reselling birodalmadhoz digitális forrásaink hoznak neked sikert – beszállítói listákkal, útmutatókkal és kész rendszerekkel.
            <br></br><br></br>Ha nem akarsz gyárakkal üzengetni, QC fotókat ellenőrizni, és szállításokat leszervezni, akkor bízd ránk ezt a feladatot.
          </p>
        </div>

        {/* Path cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative h-full p-6 sm:p-7 rounded-2xl bg-[#121214] border-2 border-[#ccff00]/40 text-left overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#ccff00]/10 blur-[60px] rounded-full pointer-events-none" />
            <div className="relative flex flex-col flex-1 space-y-4">
              <div className="w-11 h-11 rounded-xl bg-[#ccff00] text-black flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <span className="text-[10px] font-black uppercase text-[#ccff00] tracking-wider">Receptek a sikerhez</span>
                <h3 className="text-lg font-black uppercase text-white font-display mt-1">
                  Digitális Források
                </h3>
                <p className="text-sm text-zinc-400 font-normal mt-2 leading-relaxed">
                  Útmutatók és beszállítói listák – azonnali hozzáférés e-mailben.
                </p>
              </div>
              <CtaButton href="/katalogus">
                Katalógus
                <ArrowRight className="w-4 h-4" />
              </CtaButton>
            </div>
          </div>

          <div className="h-full p-6 sm:p-7 rounded-2xl bg-[#121214] border-2 border-[#27272a] text-left flex flex-col">
            <div className="flex flex-col flex-1 space-y-4">
              <div className="w-11 h-11 rounded-xl bg-zinc-900 border border-zinc-700 text-[#ccff00] flex items-center justify-center">
                <Package className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <span className="text-[10px] font-black uppercase text-zinc-500 tracking-wider">Sourcing Szolgáltatás</span>
                <h3 className="text-lg font-black uppercase text-white font-display mt-1">
                  Egyedi beszerzés
                </h3>
                <p className="text-sm text-zinc-400 font-normal mt-2 leading-relaxed">
                  Küldj képet vagy linket – mi beszerzünk, QC-zünk és kiszállítunk neked.
                </p>
              </div>
              <CtaButton href="/egyedi-beszerzes" variant="secondary">
                Igénylés
                <ArrowRight className="w-4 h-4" />
              </CtaButton>
            </div>
          </div>
        </div>

        {/* Detailed breakdown */}
        <div className="space-y-10 sm:space-y-12">
          {/* Digital products */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-black uppercase text-white font-display leading-tight">
                Miért válaszd a{" "}
                <span className="text-[#ccff00]">Digitális Forrásokat</span> ?
              </h3>
              <p className="text-sm text-zinc-400 font-normal leading-relaxed max-w-3xl">
                Ha saját resell birodalmat szeretnél építeni – nem csak egy-egy terméket venni és eladni. A kezdéshez nem kell milliós tőke
                vagy évekig tartó tanulás: egy ismételhető rendszerrel olcsón beszerzel, magasabb áron eladsz,
                és a profitot újra és újra visszaforgatod.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 sm:p-6 rounded-2xl bg-[#121214] border border-[#27272a] space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-[#ccff00]/10 border border-[#ccff00]/30 flex items-center justify-center">
                    <FileText className="w-4 h-4 text-[#ccff00]" />
                  </div>
                  <h4 className="text-sm font-black uppercase text-white font-display">Útmutatók</h4>
                </div>
                <p className="text-sm text-zinc-400 font-normal leading-relaxed">
                  A Reselling Starterpack és a további csomagok nem elméletet adnak – hanem egy módszert, ami már
                  bizonyítottan működik. Lépésről lépésre megtanítjuk, hogyan találj terméket, hol add el, és hogyan
                  maximalizáld az árrést Vinteden, Instagramon és más platformokon.
                </p>
                <ul className="space-y-2">
                  {[
                    "Kész, bizonyított rendszer – nem kell találgatnod",
                    "Vámolási és adózási alapok Magyarországra",
                    "Azonnali hozzáférés és örökös frissítés",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-zinc-300 font-normal">
                      <Check className="w-3.5 h-3.5 text-[#ccff00] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-[#121214] border border-[#27272a] space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-[#ccff00]/10 border border-[#ccff00]/30 flex items-center justify-center">
                    <Store className="w-4 h-4 text-[#ccff00]" />
                  </div>
                  <h4 className="text-sm font-black uppercase text-white font-display">Beszállítói listák</h4>
                </div>
                <p className="text-sm text-zinc-400 font-normal leading-relaxed">
                  A Direct Supply listák ellenőrzött gyári beszállítói kontaktokat adnak – cipő, ruha, óra, táska
                  kategóriánként. Kihagyod a drága próbálkozásokat és a bukó forrásokat: tudod, kitől szerezz be,
                  és milyen minőségre számíthatsz.
                </p>
                <ul className="space-y-2">
                  {[
                    "25+ tesztelt prémium beszállító",
                    "Kategóriánkénti hozzáférés – ahogy nő a vállalkozásod",
                    "Nem kamu lista – működő WeChat és WhatsApp kontaktok",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-zinc-300 font-normal">
                      <Check className="w-3.5 h-3.5 text-[#ccff00] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#ccff00]/5 border border-[#ccff00]/25 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-[#ccff00] flex-shrink-0 mt-0.5" />
                <p className="text-sm text-zinc-300 font-normal leading-relaxed">
                  <span className="text-white font-semibold">Ideális neked,</span> ha hosszú távon szeretnél profitot
                  termelni, saját rendszerrel dolgozni, és nem csak egyszer vásárolni egy terméket.
                </p>
              </div>
              <CtaButton href="/utmutato">
                Starterpack
                <ArrowRight className="w-4 h-4" />
              </CtaButton>
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

          {/* Sourcing */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-black uppercase text-white font-display leading-tight">
                Miért válassz{" "}
                <span className="text-[#ccff00]">Egyedi Beszerzést</span> ?
              </h3>
              <p className="text-sm text-zinc-400 font-normal leading-relaxed max-w-3xl">
                Ha nem akarsz magad beszerezni, tanulni és hibákból okosodni – hanem kész terméket szeretnél a
                legjobb áron és minőségben. Mi intézzük a teljes folyamatot: a gyártó kiválasztásától a QC fotókon
                át a szállításig.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  icon: Search,
                  title: "Tapasztalat, nem munka",
                  text: "A díjért nem az időmet fizeted – hanem az évek alatt felépített sourcing tudást, kapcsolatokat és a rossz döntéseket, amiket helyetted kiszűrök.",
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
                  <div key={item.title} className="p-5 rounded-2xl bg-[#121214] border border-[#27272a] space-y-3">
                    <Icon className="w-6 h-6 text-[#ccff00]" />
                    <h4 className="text-sm font-black uppercase text-white font-display">{item.title}</h4>
                    <p className="text-xs text-zinc-400 font-normal leading-relaxed">{item.text}</p>
                  </div>
                );
              })}
            </div>

            <div className="p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex flex-col items-start gap-3">
                <Package className="w-5 h-5 text-[#ccff00] flex-shrink-0" />
                <p className="text-sm text-zinc-300 font-normal leading-relaxed">
                  <span className="text-white font-semibold">Ideális neked,</span> ha nem szeretnél rendszert építeni,
                  hanem valaki, aki ezt naponta csinálja, hozza meg helyetted a jó döntéseket – és te csak a terméket kapod meg.
                </p>
              </div>
              <CtaButton href="/egyedi-beszerzes" variant="secondary">
                Igénylés
                <ArrowRight className="w-4 h-4" />
              </CtaButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

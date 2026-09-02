import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Quote, TrendingUp, Wallet, Clock } from "lucide-react";
import { SUCCESS_STORIES, SuccessStoryImage } from "@/data/success-stories";

type SuccessStoriesSectionProps = {
  /** Compact home layout vs fuller útmutató layout */
  variant?: "home" | "page";
  id?: string;
};

const KIND_LABEL: Record<SuccessStoryImage["kind"], string> = {
  sale: "Eladás",
  chat: "Chat",
  product: "Termék",
  stats: "Eredmény",
};

function StoryImages({
  images,
  name,
  larger,
}: {
  images: SuccessStoryImage[];
  name: string;
  larger?: boolean;
}) {
  return (
    <div className={`grid grid-cols-2 gap-2 ${larger ? "sm:gap-3" : ""}`}>
      {images.map((img) => (
        <div
          key={img.src + img.caption}
          className={`relative rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900 ${
            larger ? "aspect-[4/3]" : "aspect-[5/4]"
          }`}
        >
          <Image
            src={img.src}
            alt={`${name} – ${img.caption}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 45vw, 280px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
          <span className="absolute top-1.5 left-1.5 text-[8px] font-black uppercase px-1.5 py-0.5 rounded bg-[#ccff00] text-black">
            {KIND_LABEL[img.kind]}
          </span>
          <p className="absolute bottom-1.5 left-1.5 right-1.5 text-[9px] sm:text-[10px] font-medium text-white leading-tight font-normal">
            {img.caption}
          </p>
        </div>
      ))}
    </div>
  );
}

export const SuccessStoriesSection: React.FC<SuccessStoriesSectionProps> = ({
  variant = "home",
  id = "siker-sztorik",
}) => {
  const isPage = variant === "page";

  return (
    <section id={id} className={`w-full bg-[#0a0a0c] ${isPage ? "py-9 sm:py-12" : "py-10 sm:py-14"}`}>
      <div className={`${isPage ? "max-w-6xl" : "max-w-7xl"} mx-auto px-4 sm:px-6 lg:px-8 space-y-8`}>
        <div className={isPage ? "text-center space-y-2" : "flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"}>
          <div className={isPage ? "space-y-2" : ""}>
            <span className="text-xs font-black uppercase tracking-wider text-[#ccff00]">
              Siker sztorik
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight font-display">
              {isPage ? "Hogyan értek el eredményt" : "Valós eredmények"}
            </h2>
            <p className="text-sm text-zinc-400 font-normal mt-1 max-w-2xl mx-auto sm:mx-0">
              {isPage
                ? "Négy részletes történet – tőke, időtáv, konkrét számok, eladási és chat bizonyítékok."
                : "Emberek, akik az útmutatóval indultak – eladásokkal és beszélgetésekkel alátámasztva."}
            </p>
          </div>
          {!isPage && (
            <Link
              href="/utmutato#siker-sztorik"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-700 hover:border-[#ccff00] text-xs font-black uppercase text-white transition shrink-0"
            >
              <span>Részletek</span>
              <div className="w-4 h-4 rounded-full bg-[#ccff00] text-black flex items-center justify-center">
                <ArrowRight className="w-2.5 h-2.5 stroke-[3]" />
              </div>
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
          {SUCCESS_STORIES.map((story) => (
            <article
              key={story.id}
              className="rounded-2xl bg-[#121214] border border-[#27272a] p-5 sm:p-6 flex flex-col gap-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-base sm:text-lg font-black uppercase text-white font-display leading-tight">
                    {story.name}
                  </h3>
                  <p className="text-xs text-zinc-500 font-normal mt-0.5">{story.role}</p>
                </div>
                <span className="shrink-0 text-[9px] font-black uppercase px-2 py-1 rounded bg-[#ccff00]/10 text-[#ccff00] border border-[#ccff00]/30">
                  {story.product}
                </span>
              </div>

              <StoryImages images={story.images} name={story.name} larger={isPage} />

              <div className="grid grid-cols-3 gap-2">
                <div className="rounded-xl bg-black/40 border border-zinc-800 p-2.5 sm:p-3">
                  <div className="flex items-center gap-1 text-[9px] uppercase text-zinc-500 font-bold mb-1">
                    <Wallet className="w-3 h-3 text-[#ccff00]" />
                    Tőke
                  </div>
                  <p className="text-xs sm:text-sm font-black text-white font-display leading-tight">
                    {story.startCapital}
                  </p>
                </div>
                <div className="rounded-xl bg-black/40 border border-zinc-800 p-2.5 sm:p-3">
                  <div className="flex items-center gap-1 text-[9px] uppercase text-zinc-500 font-bold mb-1">
                    <Clock className="w-3 h-3 text-[#ccff00]" />
                    Idő
                  </div>
                  <p className="text-xs sm:text-sm font-black text-white font-display leading-tight">
                    {story.timeline}
                  </p>
                </div>
                <div className="rounded-xl bg-[#ccff00]/5 border border-[#ccff00]/25 p-2.5 sm:p-3">
                  <div className="flex items-center gap-1 text-[9px] uppercase text-zinc-500 font-bold mb-1">
                    <TrendingUp className="w-3 h-3 text-[#ccff00]" />
                    {story.resultLabel}
                  </div>
                  <p className="text-xs sm:text-sm font-black text-[#ccff00] font-display leading-tight">
                    {story.resultValue}
                  </p>
                </div>
              </div>

              <div className="flex gap-2 rounded-xl bg-black/30 border border-zinc-800/80 p-3">
                <Quote className="w-4 h-4 text-[#ccff00] flex-shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed italic">
                  {story.quote}
                </p>
              </div>

              {isPage && (
                <div className="space-y-2.5">
                  {story.story.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)} className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}

              {!isPage && (
                <p className="text-xs text-zinc-400 font-normal leading-relaxed line-clamp-3">
                  {story.story[0]}
                </p>
              )}

              <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
                {story.highlights.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {!isPage && (
          <div className="sm:hidden text-center">
            <Link
              href="/utmutato#siker-sztorik"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-white text-xs font-black uppercase hover:border-[#ccff00] transition"
            >
              Teljes sztorik
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

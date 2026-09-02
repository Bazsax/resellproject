import React from "react";

interface LogoProps {
  className?: string;
  variant?: "header" | "footer" | "icon-only";
  size?: "sm" | "md" | "lg";
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  variant = "header",
  size = "md",
}) => {
  const isFooter = variant === "footer";
  const accent = isFooter ? "#ccff00" : "#000000";
  const face = isFooter ? "#ccff00" : "currentColor";

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      <div
        className={`relative flex items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105 ${
          isFooter
            ? "bg-black text-[#ccff00] p-2"
            : "bg-[#ccff00] text-black p-2 shadow-lg shadow-[#ccff00]/25"
        } ${
          size === "sm" ? "w-8 h-8 rounded-lg" : size === "lg" ? "w-12 h-12 rounded-2xl" : "w-9 h-9 sm:w-10 sm:h-10"
        }`}
      >
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Left face */}
          <path d="M5 12L16 7V22L5 27V12Z" fill={face} opacity={isFooter ? 0.55 : 0.45} />
          {/* Right face */}
          <path d="M16 7L27 12V27L16 22V7Z" fill={face} opacity={isFooter ? 0.75 : 0.65} />
          {/* Top face */}
          <path d="M5 12L16 7L27 12L16 17L5 12Z" fill={face} />
          {/* Edge highlights */}
          <path
            d="M5 12L16 7L27 12M16 7V22M5 12V27L16 22M27 12V27L16 22"
            stroke={accent}
            strokeWidth="1.25"
            strokeLinejoin="round"
            opacity={isFooter ? 0.35 : 0.25}
          />
        </svg>
      </div>

      {variant !== "icon-only" && (
        <div className="flex flex-col leading-none text-left">
          <span
            className={`font-display font-black tracking-tight uppercase ${
              isFooter ? "text-black" : "text-white"
            } ${
              size === "sm" ? "text-base" : size === "lg" ? "text-3xl" : "text-lg sm:text-xl"
            }`}
          >
            Direct<span className={isFooter ? "text-black/80 font-extrabold" : "text-[#ccff00]"}>Supply</span>
          </span>
          <span
            className={`font-nekst text-[8px] sm:text-[9px] tracking-widest uppercase font-semibold mt-0.5 ${
              isFooter ? "text-black/75" : "text-zinc-400"
            }`}
          >
            reselling & sourcing
          </span>
        </div>
      )}
    </div>
  );
};

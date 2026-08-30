import React from "react";

interface LogoProps {
  className?: string;
  variant?: "header" | "footer" | "icon-only";
  size?: "sm" | "md" | "lg";
}

export const Logo: React.FC<LogoProps> = ({ 
  className = "", 
  variant = "header",
  size = "md" 
}) => {
  const isFooter = variant === "footer";
  
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
        <svg 
          viewBox="0 0 32 32" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path
            d="M5 19.5L14.5 7H24.5L18 16H27L10 27L13.5 19.5H5Z"
            fill="currentColor"
          />
          <circle cx="25" cy="9" r="2" fill={isFooter ? "#ccff00" : "#000000"} />
        </svg>
      </div>

      {variant !== "icon-only" && (
        <div className="flex flex-col leading-none text-left">
          <div className="flex items-center gap-0.5">
            <span 
              className={`font-display font-black tracking-tight uppercase ${
                isFooter ? "text-black" : "text-white"
              } ${
                size === "sm" ? "text-base" : size === "lg" ? "text-3xl" : "text-lg sm:text-xl"
              }`}
            >
              Egy<span className={isFooter ? "text-black/80 font-extrabold" : "text-[#ccff00]"}>Per</span>Egy
            </span>
          </div>
          <span 
            className={`font-nekst text-[8px] sm:text-[9px] tracking-widest uppercase font-semibold mt-0.5 ${
              isFooter ? "text-black/75" : "text-zinc-400"
            }`}
          >
            rep reselling & sourcing
          </span>
        </div>
      )}
    </div>
  );
};

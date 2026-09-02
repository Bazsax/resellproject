import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export const CategoryShowcase: React.FC = () => {
  const jordanItems = [
    {
      title: "JORDAN 1",
      image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600&auto=format&fit=crop&q=80",
      href: "/katalogus?marka=Jordan&sub=Jordan 1"
    },
    {
      title: "JORDAN 4",
      image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=600&auto=format&fit=crop&q=80",
      href: "/katalogus?marka=Jordan&sub=Jordan 4"
    }
  ];

  const nikeItems = [
    {
      title: "DUNK",
      image: "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&auto=format&fit=crop&q=80",
      href: "/katalogus?marka=Nike&sub=Dunk"
    },
    {
      title: "TRAVIS SCOTT",
      image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=600&auto=format&fit=crop&q=80",
      href: "/katalogus?marka=Jordan&sub=Travis Scott"
    }
  ];

  return (
    <section className="w-full bg-black py-9 space-y-9">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-9">
        {/* Row 1: JORDAN */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight font-display">
              JORDAN
            </h2>
            <Link
              href="/katalogus?marka=Jordan"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700 hover:border-[#ccff00] text-xs font-black uppercase text-white transition"
            >
              <span>ÖSSZES</span>
              <div className="w-4 h-4 rounded-full bg-[#ccff00] text-black flex items-center justify-center">
                <ArrowUpRight className="w-2.5 h-2.5 stroke-[3]" />
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {jordanItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="group relative rounded-2xl overflow-hidden bg-[#121214] border border-[#27272a] hover:border-[#ccff00] transition duration-300 flex flex-col"
              >
                <div className="relative w-full aspect-[4/3] bg-zinc-900 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                </div>
                {/* Yellow bottom badge block as shown in screenshot */}
                <div className="w-full bg-[#ccff00] py-2.5 px-4 text-center">
                  <span className="text-base sm:text-lg font-black uppercase text-black tracking-tight font-display">
                    {item.title}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Row 2: NIKE */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight font-display">
              NIKE
            </h2>
            <Link
              href="/katalogus?marka=Nike"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700 hover:border-[#ccff00] text-xs font-black uppercase text-white transition"
            >
              <span>ÖSSZES</span>
              <div className="w-4 h-4 rounded-full bg-[#ccff00] text-black flex items-center justify-center">
                <ArrowUpRight className="w-2.5 h-2.5 stroke-[3]" />
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {nikeItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="group relative rounded-2xl overflow-hidden bg-[#121214] border border-[#27272a] hover:border-[#ccff00] transition duration-300 flex flex-col"
              >
                <div className="relative w-full aspect-[4/3] bg-zinc-900 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                </div>
                {/* Yellow bottom badge block */}
                <div className="w-full bg-[#ccff00] py-2.5 px-4 text-center">
                  <span className="text-base sm:text-lg font-black uppercase text-black tracking-tight font-display">
                    {item.title}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

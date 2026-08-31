import React from "react";
import Image from "next/image";
import { Star, CheckCircle2 } from "lucide-react";
import { REVIEWS } from "@/data/reviews";

export const ReviewsSection: React.FC = () => {
  return (
    <section className="w-full bg-black py-9 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Heading from screenshot 2 */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight font-display">
            VÉLEMÉNYEK
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 font-medium mt-1">
            Több mint 100 elégedett vásárló
          </p>
        </div>

        {/* Reviews Cards Slider / Grid matching screenshot 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="p-5 rounded-2xl bg-[#121214] border border-[#27272a] hover:border-[#ccff00]/40 transition duration-300 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* Author row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full bg-zinc-800 overflow-hidden border border-zinc-700">
                      {review.avatar && (
                        <Image
                          src={review.avatar}
                          alt={review.author}
                          fill
                          className="object-cover"
                        />
                      )}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white leading-tight">
                        {review.author}
                      </h4>
                      <p className="text-[10px] text-zinc-400 mt-0.5">
                        {review.date}
                      </p>
                    </div>
                  </div>

                  {/* Google Icon indicator */}
                  <div className="w-5 h-5 flex items-center justify-center font-bold text-xs text-blue-400">
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                      />
                    </svg>
                  </div>
                </div>

                {/* Stars and Verified Badge */}
                <div className="flex items-center gap-1.5">
                  <div className="flex text-[#ffcc00]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  {review.verifiedPurchase && (
                    <span className="flex items-center gap-0.5 text-[10px] font-bold text-sky-400">
                      <CheckCircle2 className="w-3 h-3 fill-sky-400 text-black" />
                      Hitelesített
                    </span>
                  )}
                </div>

                {/* Content */}
                <p className="text-xs text-zinc-300 leading-relaxed font-normal">
                  &ldquo;{review.content}&rdquo;
                </p>
              </div>

              {/* Product tag */}
              <div className="pt-2 border-t border-zinc-800/60 text-[10px] text-zinc-400 truncate">
                Termék: <span className="text-[#ccff00] font-semibold">{review.productName}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

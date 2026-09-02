import React from "react";
import { Star } from "lucide-react";
import { REVIEWS, ReviewCategory } from "@/data/reviews";

function ReviewGrid({ items }: { items: typeof REVIEWS }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {items.map((review) => (
        <div
          key={review.id}
          className="p-4 sm:p-5 rounded-xl bg-black/40 border border-zinc-800/80 hover:border-[#ccff00]/30 transition duration-300 flex flex-col justify-between space-y-3"
        >
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-2">
              <h4 className="text-xs font-bold text-white leading-tight">{review.author}</h4>
              <p className="text-[10px] text-zinc-500 font-normal shrink-0">{review.date}</p>
            </div>

            <div className="flex text-[#ccff00]">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#ccff00] text-[#ccff00]" />
              ))}
            </div>

            <p className="text-xs text-zinc-300 leading-relaxed font-normal">
              &ldquo;{review.content}&rdquo;
            </p>
          </div>

          <p className="text-[10px] text-[#ccff00]/80 font-medium truncate font-normal">
            {review.productName}
          </p>
        </div>
      ))}
    </div>
  );
}

export const ReviewsSection: React.FC = () => {
  const digitalReviews = REVIEWS.filter((r) => r.category === "digital");
  const sourcingReviews = REVIEWS.filter((r) => r.category === "sourcing");

  const sections: { key: ReviewCategory; title: string; subtitle: string; items: typeof REVIEWS }[] = [
    {
      key: "digital",
      title: "Digitális termékek",
      subtitle: "Akik az útmutatót és a digitális csomagokat vásárolták",
      items: digitalReviews,
    },
    {
      key: "sourcing",
      title: "Egyedi beszerzés",
      subtitle: "Akik a beszerzési szolgáltatást használták",
      items: sourcingReviews,
    },
  ];

  return (
    <section className="w-full bg-[#0a0a0c] py-9 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight font-display">
            Vélemények
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 font-normal mt-1">
            Több mint 100 elégedett vásárló és ügyfél
          </p>
        </div>

        <div className="space-y-5">
          {sections.map((section) => (
            <div
              key={section.key}
              className="p-5 sm:p-6 rounded-2xl bg-[#121214] border border-[#27272a] space-y-4"
            >
              <div className="pb-3 border-b border-zinc-800">
                <h3 className="text-base sm:text-lg font-black uppercase text-[#ccff00] font-display">
                  {section.title}
                </h3>
                <p className="text-xs text-zinc-500 font-normal mt-0.5">{section.subtitle}</p>
              </div>
              <ReviewGrid items={section.items} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from "react";
import { HeroBanner } from "@/components/HeroBanner";
import { ValuePillars } from "@/components/ValuePillars";
import { DigitalGuideSpotlight } from "@/components/DigitalGuideSpotlight";
import { CategoryShowcase } from "@/components/CategoryShowcase";
import { ReplicaGrid } from "@/components/ReplicaGrid";
import { SourcingSteps } from "@/components/SourcingSteps";
import { ReviewsSection } from "@/components/ReviewsSection";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* 1. Hero Banner (Reopening Sale) */}
      <HeroBanner />

      {/* 2. Category Blocks (Jordan, Nike with yellow banners) */}
      <CategoryShowcase />

      {/* 3. Value Pillars (3 capsules) */}
      <ValuePillars />

      {/* 4. 1/1 Replikák Grid */}
      <ReplicaGrid />

      {/* 5. Primary Digital Resell Guide (Gumroad) */}
      <DigitalGuideSpotlight />

      {/* 6. How Sourcing Works */}
      <SourcingSteps />

      {/* 7. Reviews Section (Google style) */}
      <ReviewsSection />
    </div>
  );
}

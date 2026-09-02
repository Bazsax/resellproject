import React from "react";
import { HeroBanner } from "@/components/HeroBanner";
import { BrandIntroSection } from "@/components/BrandIntroSection";
import { HomeDigitalCatalog } from "@/components/HomeDigitalCatalog";
import { ValuePillars } from "@/components/ValuePillars";
import { DigitalGuideSpotlight } from "@/components/DigitalGuideSpotlight";
import { SourcingZoneDivider } from "@/components/SourcingZoneDivider";
import { SourcingExamplesSection } from "@/components/SourcingExamplesSection";
import { SourcingSteps } from "@/components/SourcingSteps";
import { ReviewsSection } from "@/components/ReviewsSection";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0c]">
      <HeroBanner />
      <BrandIntroSection />
      <HomeDigitalCatalog />
      <ValuePillars />
      <DigitalGuideSpotlight />
      <SourcingZoneDivider />
      <SourcingSteps />
      <SourcingExamplesSection />
      <ReviewsSection />
    </div>
  );
}

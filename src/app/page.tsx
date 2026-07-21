import { HeroSection } from "@/components/sections/HeroSection";
import { TrustSignalsSection } from "@/components/sections/TrustSignalsSection";
import { HighlightsSection } from "@/components/sections/HighlightsSection";
import { WhyInvestSection } from "@/components/sections/WhyInvestSection";
import { ResidentialOverviewSection } from "@/components/sections/ResidentialOverviewSection";
import { CommercialOverviewSection } from "@/components/sections/CommercialOverviewSection";
import { AmenitiesTeaserSection } from "@/components/sections/AmenitiesTeaserSection";
import { MasterPlanSection } from "@/components/sections/MasterPlanSection";
import { GalleryTeaserSection } from "@/components/sections/GalleryTeaserSection";
import { LocationAdvantagesSection } from "@/components/sections/LocationAdvantagesSection";
import { ConstructionTimelineSection } from "@/components/sections/ConstructionTimelineSection";
import { FAQTeaserSection } from "@/components/sections/FAQTeaserSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustSignalsSection />
      <HighlightsSection />
      <WhyInvestSection />
      <ResidentialOverviewSection />
      <CommercialOverviewSection />
      <AmenitiesTeaserSection />
      <MasterPlanSection />
      <GalleryTeaserSection />
      <LocationAdvantagesSection />
      <ConstructionTimelineSection />
      <FAQTeaserSection />
      <ContactSection />
    </>
  );
}

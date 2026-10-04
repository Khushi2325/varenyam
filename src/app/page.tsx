import HeroSection from "@/sections/HeroSection";
import LifecycleSection from "@/sections/LifecycleSection";
import AboutSection from "@/sections/AboutSection";
import SolutionsSection from "@/sections/SolutionsSection";
import ProductsSection from "@/sections/ProductsSection";
import ServicesSection from "@/sections/ServicesSection";
import IndustriesSection from "@/sections/IndustriesSection";
import WhyVarenyamSection from "@/sections/WhyVarenyamSection";
import VisionMissionSection from "@/sections/VisionMissionSection";
import CorporateGiftingSection from "@/sections/CorporateGiftingSection";
import ContactFormSection from "@/sections/ContactFormSection";

export default function Home() {
  return (
    <>
      {/* 1. Hero: "From Concept to Commissioning" */}
      <HeroSection />

      {/* 2. Trust / Value Introduction: 4 Core Lifecycle Stages */}
      <LifecycleSection />

      {/* 3. About Varenyam: Core Positioning Narrative */}
      <AboutSection />

      {/* 4. Industrial Solutions: 11 Major Solution Domains */}
      <SolutionsSection />

      {/* 5 & 6. Product Categories & Featured Products: 23 Categories + 209 Items */}
      <ProductsSection limit={8} showViewAllButton={true} />

      {/* 7. Technical Services: 7 Brochure Services & AMC */}
      <ServicesSection />

      {/* 8. Industries We Serve: 15 Exact Brochure Sectors */}
      <IndustriesSection />

      {/* 9. Why Varenyam?: 7 Brochure Strengths */}
      <WhyVarenyamSection />

      {/* 10. Vision, Mission & Promise: 3 Distinct Corporate Cards */}
      <VisionMissionSection />

      {/* 11. Corporate Gifting: Dedicated Division Showcase & Inquiries */}
      <CorporateGiftingSection />

      {/* 12. Contact / Enquiry: "Let's Build a Safer Workplace Together" */}
      <ContactFormSection />
    </>
  );
}

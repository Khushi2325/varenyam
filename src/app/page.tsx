import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import ProductsSection from "@/sections/ProductsSection";
import CorporateGiftingSection from "@/sections/CorporateGiftingSection";
import WhyVarenyamSection from "@/sections/WhyVarenyamSection";
import IndustriesSection from "@/sections/IndustriesSection";
import ContactFormSection from "@/sections/ContactFormSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProductsSection limit={6} />
      <CorporateGiftingSection />
      <WhyVarenyamSection />
      <IndustriesSection />
      <ContactFormSection />
    </>
  );
}

import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import ProductsSection from "@/sections/ProductsSection";
import IndustriesSection from "@/sections/IndustriesSection";
import ContactCTASection from "@/sections/ContactCTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProductsSection limit={3} />
      <IndustriesSection />
      <ContactCTASection />
    </>
  );
}

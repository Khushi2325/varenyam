import type { Metadata } from "next";
import ProductsSection from "@/sections/ProductsSection";
import CorporateGiftingSection from "@/sections/CorporateGiftingSection";
import ContactFormSection from "@/sections/ContactFormSection";

export const metadata: Metadata = {
  title: "Industrial & Corporate Catalog | Varenyam Industrial Suppliers",
  description: "Explore all 25+ certified industrial product categories and bespoke corporate gifting packages from Varenyam Industrial Suppliers.",
};

export default function ProductsPage() {
  return (
    <div className="pt-24 bg-surface min-h-screen">
      {/* Page Header */}
      <div className="py-20 md:py-28 bg-gradient-to-r from-primary-deep via-blue-900 to-slate-950 text-white text-center relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-overlay" 
          style={{ backgroundImage: "url('/assets/images/hero_background_1779045676560.png')" }} 
        />
        <div className="relative z-10 container mx-auto px-6 max-w-4xl">
          <span className="px-3.5 py-1.5 bg-white/10 text-sky-300 text-xs font-bold rounded-full border border-white/15 uppercase tracking-wider mb-4 inline-block">
            Complete Product Portfolio
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">Industrial & Corporate Catalog</h1>
          <p className="text-white/85 text-lg md:text-xl leading-relaxed">
            From PPE safety gear and ATEX explosion-proof systems to custom executive corporate gifting sets—browse our comprehensive catalog.
          </p>
        </div>
      </div>

      <ProductsSection showViewAllButton={false} />
      <CorporateGiftingSection />
      <ContactFormSection />
    </div>
  );
}

import type { Metadata } from "next";
import ProductsSection from "@/sections/ProductsSection";
import CorporateGiftingSection from "@/sections/CorporateGiftingSection";
import ContactFormSection from "@/sections/ContactFormSection";

export const metadata: Metadata = {
  title: "Official Industrial Product Catalogue (23 Categories) | Varenyam Industrial Suppliers",
  description: "Browse Varenyam's complete 23-category industrial solutions catalogue: PPE, fire protection, ATEX equipment, ESD systems, non-sparking tools, and project procurement.",
};

export default function ProductsPage() {
  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      {/* Page Header */}
      <div className="py-16 md:py-24 bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white text-center relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-overlay pointer-events-none" 
          style={{ backgroundImage: "url('/assets/images/hero_background_1779045676560.png')" }} 
        />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-4xl">
          <span className="px-3.5 py-1.5 bg-white/10 text-sky-300 text-xs font-bold rounded-full border border-white/15 uppercase tracking-wider mb-4 inline-block">
            From Concept to Commissioning
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4">
            Industrial Solutions Catalogue
          </h1>
          <p className="text-slate-300 text-sm sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Comprehensive 23-category portfolio representing 209 certified products under one roof for greenfield projects and plant maintenance.
          </p>
        </div>
      </div>

      {/* Full Catalog with Search & Category Detail View */}
      <ProductsSection showViewAllButton={false} />

      {/* Corporate Gifting Division */}
      <CorporateGiftingSection />

      {/* B2B RFQ Form */}
      <ContactFormSection />
    </div>
  );
}

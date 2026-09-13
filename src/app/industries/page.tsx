import type { Metadata } from "next";
import IndustriesSection from "@/sections/IndustriesSection";
import WhyVarenyamSection from "@/sections/WhyVarenyamSection";
import ContactFormSection from "@/sections/ContactFormSection";

export const metadata: Metadata = {
  title: "Industries We Serve | Varenyam Industrial Suppliers",
  description: "Discover the industries served by Varenyam Industrial Suppliers including Oil & Gas, Petrochemical, Pharma, Automotive, and Power Gen.",
};

export default function IndustriesPage() {
  return (
    <div className="pt-24 bg-surface min-h-screen">
      {/* Page Header */}
      <div className="py-20 md:py-28 bg-gradient-to-r from-primary-deep via-blue-900 to-slate-950 text-white text-center relative overflow-hidden">
        <div className="relative z-10 container mx-auto px-6 max-w-4xl">
          <span className="px-3.5 py-1.5 bg-white/10 text-sky-300 text-xs font-bold rounded-full border border-white/15 uppercase tracking-wider mb-4 inline-block">
            Cross-Industry Expertise
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">Industries We Serve</h1>
          <p className="text-white/85 text-lg md:text-xl leading-relaxed">
            Engineered safety products, ATEX equipment, ESD systems, and corporate gifting for high-consequence industries.
          </p>
        </div>
      </div>

      <IndustriesSection />
      <WhyVarenyamSection />
      <ContactFormSection />
    </div>
  );
}

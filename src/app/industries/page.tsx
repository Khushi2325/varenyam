import type { Metadata } from "next";
import IndustriesSection from "@/sections/IndustriesSection";
import SolutionsSection from "@/sections/SolutionsSection";
import WhyVarenyamSection from "@/sections/WhyVarenyamSection";
import ContactFormSection from "@/sections/ContactFormSection";

export const metadata: Metadata = {
  title: "Industries We Serve (15 Sectors) | Varenyam Industrial Suppliers",
  description: "Discover the 15 industrial sectors served by Varenyam Industrial Suppliers including Oil & Gas, Petrochemical, Chemical, Pharma, Automotive, and Power Generation.",
};

export default function IndustriesPage() {
  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      {/* Page Header */}
      <div className="py-16 md:py-24 bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white text-center relative overflow-hidden">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-4xl">
          <span className="px-3.5 py-1.5 bg-white/10 text-sky-300 text-xs font-bold rounded-full border border-white/15 uppercase tracking-wider mb-4 inline-block">
            Cross-Sector Industrial Engineering
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4">
            Industries We Serve
          </h1>
          <p className="text-slate-300 text-sm sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Certified safety products, ATEX systems, ESD protection, and engineering solutions for high-consequence operations.
          </p>
        </div>
      </div>

      <IndustriesSection />
      <SolutionsSection />
      <WhyVarenyamSection />
      <ContactFormSection />
    </div>
  );
}

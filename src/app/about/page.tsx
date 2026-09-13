import type { Metadata } from "next";
import AboutSection from "@/sections/AboutSection";
import WhyVarenyamSection from "@/sections/WhyVarenyamSection";
import ContactFormSection from "@/sections/ContactFormSection";

export const metadata: Metadata = {
  title: "About Us | Varenyam Industrial Suppliers",
  description: "Learn about Varenyam Industrial Suppliers - From Concept to Commissioning. Your trusted partner for complete industrial and corporate solutions.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 bg-surface min-h-screen">
      {/* Page Header */}
      <div className="py-20 md:py-28 bg-gradient-to-r from-primary-deep via-blue-900 to-slate-950 text-white text-center relative overflow-hidden">
        <div className="relative z-10 container mx-auto px-6 max-w-4xl">
          <span className="px-3.5 py-1.5 bg-white/10 text-amber-300 text-xs font-bold rounded-full border border-white/15 uppercase tracking-wider mb-4 inline-block">
            From Concept to Commissioning
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">About Varenyam Industrial Suppliers</h1>
          <p className="text-white/85 text-lg md:text-xl leading-relaxed">
            Delivering end-to-end industrial solutions that support every stage of an industrial project's lifecycle.
          </p>
        </div>
      </div>

      <AboutSection />
      <WhyVarenyamSection />
      <ContactFormSection />
    </div>
  );
}

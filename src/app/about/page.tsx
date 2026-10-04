import type { Metadata } from "next";
import AboutSection from "@/sections/AboutSection";
import LifecycleSection from "@/sections/LifecycleSection";
import VisionMissionSection from "@/sections/VisionMissionSection";
import WhyVarenyamSection from "@/sections/WhyVarenyamSection";
import ContactFormSection from "@/sections/ContactFormSection";

export const metadata: Metadata = {
  title: "About Us | Varenyam Industrial Suppliers",
  description: "Learn about Varenyam Industrial Suppliers - From Concept to Commissioning. Your trusted partner for complete industrial solutions.",
};

export default function AboutPage() {
  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      {/* Page Header */}
      <div className="py-16 md:py-24 bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white text-center relative overflow-hidden">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-4xl">
          <span className="px-3.5 py-1.5 bg-white/10 text-amber-300 text-xs font-bold rounded-full border border-white/15 uppercase tracking-wider mb-4 inline-block">
            From Concept to Commissioning
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4">
            About Varenyam Industrial Suppliers
          </h1>
          <p className="text-slate-300 text-sm sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Delivering end-to-end industrial solutions that support every stage of an industrial project&apos;s lifecycle.
          </p>
        </div>
      </div>

      <AboutSection />
      <LifecycleSection />
      <VisionMissionSection />
      <WhyVarenyamSection />
      <ContactFormSection />
    </div>
  );
}

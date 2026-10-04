import type { Metadata } from "next";
import ContactFormSection from "@/sections/ContactFormSection";

export const metadata: Metadata = {
  title: "Contact Us | Varenyam Industrial Suppliers",
  description: "Get in touch with Varenyam Industrial Suppliers for industrial safety quotes, ATEX technical inquiries, and project procurement.",
};

export default function ContactPage() {
  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      {/* Page Header */}
      <div className="py-16 md:py-24 bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white text-center relative overflow-hidden">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-4xl">
          <span className="px-3.5 py-1.5 bg-white/10 text-amber-300 text-xs font-bold rounded-full border border-white/15 uppercase tracking-wider mb-4 inline-block">
            Let&apos;s Build a Safer Workplace Together
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4">
            Contact & Procurement RFQ
          </h1>
          <p className="text-slate-300 text-sm sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Our technical specialists and sales engineers are ready to assist with product specifications, turnkey project supply, and quotations.
          </p>
        </div>
      </div>

      <ContactFormSection />
    </div>
  );
}

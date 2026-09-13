import type { Metadata } from "next";
import ContactFormSection from "@/sections/ContactFormSection";

export const metadata: Metadata = {
  title: "Contact Us | Varenyam Industrial Suppliers",
  description: "Get in touch with Varenyam Industrial Suppliers for industrial safety quotes, ATEX technical inquiries, and bulk corporate gifting requests.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 bg-surface min-h-screen">
      {/* Page Header */}
      <div className="py-20 md:py-28 bg-gradient-to-r from-primary-deep via-blue-900 to-slate-950 text-white text-center relative overflow-hidden">
        <div className="relative z-10 container mx-auto px-6 max-w-4xl">
          <span className="px-3.5 py-1.5 bg-white/10 text-amber-300 text-xs font-bold rounded-full border border-white/15 uppercase tracking-wider mb-4 inline-block">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">Contact Us</h1>
          <p className="text-white/85 text-lg md:text-xl leading-relaxed">
            Our engineering and corporate gifting team is ready to discuss your specific site requirements and bulk orders.
          </p>
        </div>
      </div>

      <ContactFormSection />
    </div>
  );
}

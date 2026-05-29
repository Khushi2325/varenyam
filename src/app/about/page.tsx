import AboutSection from "@/sections/AboutSection";
import ContactCTASection from "@/sections/ContactCTASection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Varenyam Industrial Suppliers",
  description: "Learn more about Varenyam Industrial Suppliers, your trusted partner in industrial safety and corporate supplies.",
};

export default function AboutPage() {
  return (
    <div className="pt-28 md:pt-32 bg-surface min-h-screen">
      <AboutSection />
      <ContactCTASection />
    </div>
  );
}

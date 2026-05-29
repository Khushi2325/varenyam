import IndustriesSection from "@/sections/IndustriesSection";
import ContactCTASection from "@/sections/ContactCTASection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries Served | Varenyam Industrial Suppliers",
  description: "We serve construction, manufacturing, oil & gas, and various other industrial sectors.",
};

export default function IndustriesPage() {
  return (
    <div className="pt-28 md:pt-32 bg-surface min-h-screen">
      <IndustriesSection />
      <ContactCTASection />
    </div>
  );
}

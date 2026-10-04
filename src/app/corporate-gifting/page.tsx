import type { Metadata } from "next";
import CorporateGiftingSection from "@/sections/CorporateGiftingSection";

export const metadata: Metadata = {
  title: "Corporate Gifting | Varenyam Industrial Suppliers",
  description:
    "Curated with Purpose. Presented with Distinction. Discover premium corporate gifting, executive hampers, onboarding kits, and bespoke merchandise by Varenyam.",
  keywords: [
    "Varenyam corporate gifting",
    "executive gift sets",
    "welcome kits",
    "festive hampers",
    "corporate gifting Vadodara",
    "customized corporate gifts"
  ]
};

export default function CorporateGiftingPage() {
  return (
    <div className="pt-20 bg-[#faf9f6] min-h-screen">
      <CorporateGiftingSection isStandalonePage={true} />
    </div>
  );
}

import ContactFormSection from "@/sections/ContactFormSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Varenyam Industrial Suppliers",
  description: "Get in touch with Varenyam Industrial Suppliers for bulk orders, customized safety solutions, and inquiries.",
};

export default function ContactPage() {
  return (
    <div className="pt-28 md:pt-32 bg-surface min-h-screen">
      <ContactFormSection />
    </div>
  );
}

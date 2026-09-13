"use client";

import { motion } from "framer-motion";
import { 
  Building2, 
  Layers, 
  Globe, 
  Headphones, 
  Clock, 
  Sliders, 
  ShieldCheck 
} from "lucide-react";

const STRENGTHS = [
  {
    icon: Building2,
    title: "Complete industrial solutions under one roof",
    description: "End-to-end industrial safety, ATEX gear, ESD systems, and corporate gifting."
  },
  {
    icon: Layers,
    title: "Single-source procurement for greenfield and brownfield projects",
    description: "Streamlined single-source supply chain management for all industrial projects."
  },
  {
    icon: Globe,
    title: "Premium products from globally recognized manufacturers",
    description: "Sourcing certified, top-tier products from world-leading manufacturers."
  },
  {
    icon: Headphones,
    title: "Expert technical consultation and application support",
    description: "Dedicated engineering advisory, risk assessment, and technical setup."
  },
  {
    icon: Clock,
    title: "Timely deliveries with dependable after-sales service",
    description: "Punctual logistics with ongoing calibration, AMC, and operational support."
  },
  {
    icon: Sliders,
    title: "Customized solutions for diverse industrial applications",
    description: "Tailored product specifications, custom packaging, and corporate gifting."
  },
  {
    icon: ShieldCheck,
    title: "Strong commitment to quality, safety, and customer satisfaction",
    description: "Uncompromising adherence to international safety standards and compliance."
  }
];

export default function WhyVarenyamSection() {
  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-primary uppercase tracking-widest mb-3"
          >
            Why Varenyam?
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-text-dark leading-tight mb-6"
          >
            Expertise, Reliability, and Partnership
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-dark/80 text-lg md:text-xl leading-relaxed font-normal"
          >
            At Varenyam, we believe successful industrial projects require more than products—they require expertise, reliability, and partnership.
          </motion.p>
        </div>

        {/* Strengths Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {STRENGTHS.map((strength, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="bg-surface p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary-light transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <strength.icon className="w-7 h-7" />
                </div>
                <h4 className="text-lg font-bold text-text-dark mb-3 group-hover:text-primary transition-colors leading-snug">
                  {strength.title}
                </h4>
                <p className="text-text-dark/70 text-sm leading-relaxed">
                  {strength.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

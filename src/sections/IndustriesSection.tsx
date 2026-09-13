"use client";

import { motion } from "framer-motion";
import { 
  Flame, 
  FlaskConical, 
  Pill, 
  Utensils, 
  Car, 
  Building, 
  Cpu, 
  Smartphone, 
  Warehouse, 
  Truck, 
  Paintbrush, 
  Sun, 
  Zap, 
  Factory 
} from "lucide-react";

const INDUSTRIES = [
  { name: "Oil & Gas", icon: Flame },
  { name: "Petrochemical", icon: Factory },
  { name: "Chemical", icon: FlaskConical },
  { name: "Pharmaceutical", icon: Pill },
  { name: "Food Processing", icon: Utensils },
  { name: "Automotive", icon: Car },
  { name: "Steel", icon: Building },
  { name: "Cement", icon: Factory },
  { name: "Semiconductor", icon: Cpu },
  { name: "Electronics", icon: Smartphone },
  { name: "Warehousing", icon: Warehouse },
  { name: "Logistics", icon: Truck },
  { name: "Paint Manufacturing", icon: Paintbrush },
  { name: "Renewable Energy", icon: Sun },
  { name: "Power Generation", icon: Zap }
];

export default function IndustriesSection() {
  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Industries We Serve</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-text-dark leading-tight mb-4">
            Trusted Across <span className="text-primary">Diverse Sectors</span>
          </h3>
          <p className="text-text-dark/70 text-lg">
            Providing certified industrial safety products, ATEX equipment, ESD systems, and corporate gifting solutions for high-stakes operational environments.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
          {INDUSTRIES.map((ind, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.03 }}
              className="bg-surface p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-primary-light flex flex-col items-center justify-center text-center gap-3 transition-all duration-300 group cursor-default"
            >
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <ind.icon className="w-7 h-7" />
              </div>
              <h4 className="font-bold text-text-dark text-sm sm:text-base group-hover:text-primary transition-colors">
                {ind.name}
              </h4>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { HardHat, Factory, Wrench, Droplet, Zap, Truck } from "lucide-react";

const INDUSTRIES = [
  { id: 1, name: "Construction", icon: HardHat },
  { id: 2, name: "Manufacturing", icon: Factory },
  { id: 3, name: "Engineering", icon: Wrench },
  { id: 4, name: "Oil & Gas", icon: Droplet },
  { id: 5, name: "Energy Sector", icon: Zap },
  { id: 6, name: "Logistics", icon: Truck },
];

export default function IndustriesSection() {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Industries Served</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">Trusted Across Sectors</h3>
            <p className="text-text-dark/70 text-lg">
              We provide tailored industrial and safety solutions for diverse industries, ensuring compliance and protection at every step.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {INDUSTRIES.map((industry, index) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group bg-white p-4 md:p-6 rounded-xl shadow-sm hover:shadow-md border border-gray-100 flex flex-col items-center justify-center text-center gap-3 md:gap-4 cursor-default transition-all hover:-translate-y-1 hover:border-primary-light"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                <industry.icon className="w-6 h-6 md:w-8 md:h-8 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="font-bold text-text-dark text-sm md:text-base group-hover:text-primary transition-colors">
                {industry.name}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Users, Award } from "lucide-react";

const STATS = [
  { id: 1, icon: Users, value: "500+", label: "Happy Corporate Clients" },
  { id: 2, icon: Award, value: "15+", label: "Years of Experience" },
  { id: 3, icon: TrendingUp, value: "10k+", label: "Products Delivered" },
];

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-surface relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left: About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">About Varenyam</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
              Your Trusted Partner in <span className="text-primary">Industrial Safety</span>
            </h3>
            <p className="text-text-dark/70 text-lg mb-6 leading-relaxed">
              At Varenyam Industrial Suppliers, we specialize in providing top-tier Personal Protective Equipment (PPE), fire safety gear, and comprehensive corporate supplies. We don't just sell products; we deliver peace of mind.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Premium quality industrial-grade materials",
                "Compliance with international safety standards",
                "Reliable and timely nationwide delivery",
                "Customized corporate supply solutions"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <span className="text-text-dark/80 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Stats Grid */}
          <div className="grid sm:grid-cols-2 gap-6 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-light/30 rounded-full blur-3xl -z-10" />
            
            {STATS.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow flex flex-col items-center text-center ${
                  index === 2 ? "sm:col-span-2 sm:w-1/2 sm:mx-auto" : ""
                }`}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="text-3xl font-bold text-text-dark mb-2">{stat.value}</h4>
                <p className="text-text-dark/60 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

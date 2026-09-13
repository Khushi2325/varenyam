"use client";

import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  Target, 
  Eye, 
  Award, 
  ShieldCheck, 
  Settings 
} from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-20 md:py-28 bg-surface relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Top Overview: About Us */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-bold tracking-wider uppercase">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span>About Varenyam Industrial Suppliers</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-text-dark leading-tight">
              From Concept to <span className="text-primary">Commissioning</span>
            </h2>

            <p className="text-text-dark/85 text-base md:text-lg leading-relaxed font-semibold text-primary">
              Your Trusted Partner for Complete Industrial Solutions.
            </p>

            <p className="text-text-dark/80 text-base leading-relaxed">
              At Varenyam Industrial Suppliers, we are committed to delivering end-to-end industrial solutions that support every stage of an industrial project's lifecycle—from initial planning and procurement to installation, commissioning, and ongoing operational support.
            </p>

            <p className="text-text-dark/75 text-base leading-relaxed">
              We are more than an industrial supplier; we are a trusted partner dedicated to helping industries build safer, smarter, and more efficient workplaces.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              {[
                "Industrial Safety Products (PPE)",
                "Fire Detection & Suppression Systems",
                "ATEX & Explosion-Proof Equipment",
                "Non-Sparking Hand Tools",
                "ESD Protection Systems",
                "Earthing & Bonding Solutions",
                "Gas Detection & Process Safety",
                "Installation & AMC Services"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-text-dark/85 text-sm font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right side stats & highlight card */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 relative"
          >
            <div className="bg-gradient-to-br from-primary-deep to-blue-950 text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
              
              <h3 className="text-2xl font-bold mb-4 text-white">Project Lifecycle Support</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-8">
                Whether supporting a greenfield project, plant expansion, modernization initiative, maintenance shutdown, or routine industrial procurement, Varenyam delivers integrated solutions designed to enhance safety, productivity, and operational reliability.
              </p>

              <div className="space-y-6 border-t border-white/10 pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-amber-300 shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">Single-Source Procurement</h4>
                    <p className="text-white/70 text-xs">Complete industrial solutions under one roof.</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-sky-300 shrink-0">
                    <Settings className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">Technical Services</h4>
                    <p className="text-white/70 text-xs">Installation, Commissioning, Calibration & Annual Maintenance.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          
          {/* Vision (Rule 14) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-lg relative overflow-hidden"
          >
            <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-text-dark mb-3">Our Vision</h3>
            <p className="text-text-dark/75 text-base leading-relaxed">
              To become the preferred industrial solutions partner for organizations by delivering innovative products, engineering excellence, and exceptional service that contribute to safer, more efficient, and sustainable industrial operations.
            </p>
          </motion.div>

          {/* Mission (Rule 12) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-lg relative overflow-hidden"
          >
            <div className="w-14 h-14 bg-amber-500/10 text-amber-600 rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-amber-600" />
            </div>
            <h3 className="text-2xl font-bold text-text-dark mb-3">Our Mission</h3>
            <p className="text-text-dark/75 text-base leading-relaxed">
              To simplify industrial procurement and project execution by providing world-class products, integrated engineering solutions, and dependable technical services—building lasting partnerships through quality, integrity, and continuous innovation.
            </p>
          </motion.div>
        </div>

        {/* Our Promise Section (Rule 13) */}
        <div className="bg-gradient-to-r from-primary-deep via-blue-900 to-primary-deep text-white rounded-3xl p-8 sm:p-12 shadow-xl text-center max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-4">Our Promise</h3>
          <p className="text-white/90 text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
            Every solution we provide reflects our commitment to Quality, Safety, Reliability, and Performance. We strive to create long-term value by supporting our customers from the earliest stages of project development through successful commissioning and beyond.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {["Quality", "Safety", "Reliability", "Performance"].map((pillar, i) => (
              <div key={i} className="p-3 bg-white/10 rounded-xl font-bold text-amber-300 text-sm border border-white/15">
                {pillar}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

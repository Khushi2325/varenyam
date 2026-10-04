"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  CheckCircle2, 
  ShieldCheck, 
  Award, 
  Settings,
  ArrowRight,
  Building2,
  Layers,
  Sparkles
} from "lucide-react";

export default function AboutSection() {
  const capabilities = [
    "Industrial Safety Products (PPE)",
    "Fire Detection & Suppression Systems",
    "ATEX & Explosion-Proof Equipment",
    "Non-Sparking Hand Tools",
    "ESD Protection Systems",
    "Earthing & Bonding Solutions",
    "Gas Detection & Process Safety",
    "Installation & AMC Services"
  ];

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden border-b border-slate-200/80">
      <div className="container mx-auto px-4 sm:px-6">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Narrative Copy */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-900 text-xs sm:text-sm font-bold tracking-wider uppercase border border-blue-200/60">
              <ShieldCheck className="w-4 h-4 text-blue-900" />
              <span>About Varenyam Industrial Suppliers</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              From Concept to <span className="text-blue-900">Commissioning</span>
            </h2>

            <p className="text-slate-800 text-base md:text-lg leading-relaxed font-bold text-blue-950">
              Your Trusted Partner for Complete Industrial Solutions.
            </p>

            <p className="text-slate-600 text-base leading-relaxed">
              At Varenyam Industrial Suppliers, we are committed to delivering end-to-end industrial solutions that support every stage of an industrial project&apos;s lifecycle—from initial planning and procurement to installation, commissioning, and ongoing operational support.
            </p>

            <p className="text-slate-600 text-base leading-relaxed">
              We are more than an industrial supplier; we are a trusted partner dedicated to helping industries build safer, smarter, and more efficient workplaces.
            </p>

            {/* Core Capability Checklist */}
            <div className="grid sm:grid-cols-2 gap-3.5 pt-3">
              {capabilities.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-50 border border-slate-200/70">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-slate-800 text-xs sm:text-sm font-bold">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Link
                href="/products"
                className="px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all inline-flex items-center gap-2"
              >
                <span>Browse Industrial Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm rounded-xl transition-all"
              >
                <span>Contact Our Specialists</span>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: High-Impact Card */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 relative"
          >
            <div className="bg-gradient-to-br from-blue-900 via-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden border border-slate-800">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-amber-300 text-xs font-bold rounded-lg border border-white/15 mb-4">
                <Building2 className="w-3.5 h-3.5" />
                <span>Single-Source Partnership</span>
              </div>

              <h3 className="text-2xl font-bold mb-3 text-white">Project Lifecycle Support</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-8">
                Whether supporting a greenfield project, plant expansion, modernization initiative, maintenance shutdown, or routine industrial procurement, Varenyam delivers integrated solutions designed to enhance safety, productivity, and operational reliability.
              </p>

              <div className="space-y-5 border-t border-white/15 pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center text-amber-300 shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Single-Source Procurement</h4>
                    <p className="text-slate-400 text-xs mt-0.5">Complete industrial solutions under one roof.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center text-sky-300 shrink-0">
                    <Settings className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Technical Services</h4>
                    <p className="text-slate-400 text-xs mt-0.5">Installation, Commissioning, Calibration & Annual Maintenance.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

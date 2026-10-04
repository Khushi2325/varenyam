"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, Wrench, CheckCircle2, ShieldAlert, ArrowRight } from "lucide-react";
import Link from "next/link";

const STAGES = [
  {
    step: "01",
    title: "Planning & Procurement",
    subtitle: "Turnkey Material Specification",
    description: "End-to-end procurement support for greenfield and brownfield industrial facilities. Sourcing certified PPE, ATEX equipment, and systems from world-class manufacturers under one roof.",
    icon: ClipboardCheck,
    badge: "Stage 1"
  },
  {
    step: "02",
    title: "Installation",
    subtitle: "Precision Engineering Setup",
    description: "Expert on-site installation of fire safety systems, ESD conductive flooring, grounding networks, and specialized industrial equipment adhering to strict regulatory safety norms.",
    icon: Wrench,
    badge: "Stage 2"
  },
  {
    step: "03",
    title: "Commissioning",
    subtitle: "Validation & Handover",
    description: "Rigorous performance testing, multi-gas sensor calibration, and comprehensive system commissioning ensuring verified compliance before commercial handover.",
    icon: CheckCircle2,
    badge: "Stage 3"
  },
  {
    step: "04",
    title: "Operational Support",
    subtitle: "Annual Maintenance & Audits",
    description: "Reliable after-sales service, Annual Maintenance Contracts (AMC), periodic industrial safety audits, and timely spare parts delivery to maximize plant uptime.",
    icon: ShieldAlert,
    badge: "Stage 4"
  }
];

export default function LifecycleSection() {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-200/80 relative">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-900 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200/60">
            <span>Project Lifecycle Support</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight mb-4">
            Supporting Every Stage of Your <span className="text-blue-900">Industrial Operations</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            At Varenyam, we provide end-to-end industrial solutions supporting organizations from the earliest stages of project development through commissioning and beyond.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STAGES.map((stage, idx) => {
            const IconComp = stage.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-slate-50 p-6 sm:p-7 rounded-3xl border border-slate-200/80 hover:border-blue-900/30 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-extrabold text-blue-900 bg-blue-100/70 px-2.5 py-1 rounded-lg">
                      {stage.badge}
                    </span>
                    <span className="text-2xl font-black text-slate-300 group-hover:text-blue-900/30 transition-colors">
                      {stage.step}
                    </span>
                  </div>

                  <div className="w-12 h-12 bg-white rounded-2xl border border-slate-200 flex items-center justify-center text-blue-900 mb-4 group-hover:bg-blue-900 group-hover:text-white transition-colors shadow-sm">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-900 transition-colors mb-1">
                    {stage.title}
                  </h3>
                  <div className="text-xs font-semibold text-slate-500 mb-3">
                    {stage.subtitle}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {stage.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-bold text-blue-900 group-hover:translate-x-1 transition-transform">
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 bg-slate-900 text-white p-6 sm:p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-white mb-1">
              Have an upcoming Greenfield or Modernization Project?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              Get single-source procurement, technical consultation, and complete turnkey safety equipment under one roof.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-extrabold rounded-xl shadow-md transition-all shrink-0"
          >
            Request Project Consultation
          </Link>
        </div>

      </div>
    </section>
  );
}

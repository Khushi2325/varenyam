"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ClipboardCheck, 
  FileSearch, 
  ShieldCheck, 
  Wrench, 
  CheckCircle2, 
  SlidersHorizontal, 
  Clock, 
  ArrowRight 
} from "lucide-react";

const SERVICES = [
  {
    title: "Industrial Audits",
    description: "Comprehensive on-site plant safety assessments, PPE compliance inspections, hazard identification, and risk evaluation.",
    icon: ClipboardCheck
  },
  {
    title: "Technical Consultancy",
    description: "Engineering advisory on ATEX hazardous zone equipment selection, ESD static control architecture, and fire suppression design.",
    icon: FileSearch
  },
  {
    title: "Compliance Services",
    description: "Verification of industrial workplace standards, statutory health & safety compliance, and environmental safety regulations.",
    icon: ShieldCheck
  },
  {
    title: "Installation",
    description: "Certified field installation of gas detection transmitters, fire detection panels, emergency showers, and grounding infrastructure.",
    icon: Wrench
  },
  {
    title: "Commissioning",
    description: "Multi-sensor functional testing, system integration, alarm link verification, and commercial operation readiness handover.",
    icon: CheckCircle2
  },
  {
    title: "Calibration",
    description: "Traceable calibration services for portable and fixed gas detectors, sound level meters, lux meters, and electrical test instruments.",
    icon: SlidersHorizontal
  },
  {
    title: "Annual Maintenance Services (AMC)",
    description: "Scheduled preventive maintenance, emergency breakdown support, spare parts replenishment, and periodic inspection contracts.",
    icon: Clock
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 bg-gradient-to-br from-[#0c2364] via-[#12368c] to-[#1b4396] text-white relative overflow-hidden">
      
      {/* Ambient background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-400/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-sky-300 text-xs font-bold uppercase tracking-wider mb-4 border border-white/15">
            <span>Engineering & Field Support</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
            Technical Services & <span className="text-sky-400">Engineering AMC</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            From technical consultancy and industrial compliance audits to certified installation, sensor calibration, and annual maintenance contracts.
          </p>
        </div>

        {/* 7 Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES.map((srv, idx) => {
            const IconComp = srv.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-sky-400/40 hover:bg-white/10 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {srv.description}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-white/10 flex items-center gap-1.5 text-xs font-bold text-sky-400 group-hover:text-sky-300">
                  <Link href="/contact" className="hover:underline flex items-center gap-1">
                    <span>Enquire for Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}

          {/* 8th Card: Quick Action Consultation */}
          <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-2xl p-6 flex flex-col justify-between border border-blue-400/30 shadow-xl">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-sky-200">
                Partner with Varenyam
              </span>
              <h3 className="text-xl font-extrabold text-white mt-1 mb-3">
                Need a Comprehensive Industrial Audit?
              </h3>
              <p className="text-xs text-sky-100 leading-relaxed">
                Connect with our technical engineers to schedule on-site gas calibration, fire suppression audits, or turnkey project AMC.
              </p>
            </div>

            <Link
              href="/contact"
              className="mt-6 w-full py-3 bg-white hover:bg-sky-50 text-blue-950 font-extrabold text-xs rounded-xl text-center transition-colors shadow-md flex items-center justify-center gap-1.5"
            >
              <span>Schedule Technical Discussion</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

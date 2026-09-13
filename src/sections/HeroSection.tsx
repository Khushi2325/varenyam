"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  ShieldCheck, 
  Gift, 
  ArrowRight, 
  FileText,
  Sparkles,
  Award,
  Truck,
  CheckCircle2,
  Sliders,
  Zap
} from "lucide-react";

export default function HeroSection() {
  const [activePillar, setActivePillar] = useState<"safety" | "gifting" | "all">("all");

  const ppeFeatures = [
    { icon: ShieldCheck, title: "ATEX & ISI Certified", desc: "Highest industrial safety standards" },
    { icon: Award, title: "Turnkey Procurement", desc: "End-to-end plant & project supply" },
    { icon: Truck, title: "Rapid Pan-India Supply", desc: "Reliable & timely logistics" },
  ];

  const giftingFeatures = [
    { icon: Gift, title: "Executive Custom Kits", desc: "Tailored luxury gift packaging" },
    { icon: Sparkles, title: "Laser Brand Engraving", desc: "Corporate logo & personalizing" },
    { icon: CheckCircle2, title: "Curated Premium Sets", desc: "Drinks, diaries, pens & tech" },
  ];

  const currentFeatures = activePillar === "gifting" ? giftingFeatures : ppeFeatures;

  return (
    <section className="relative min-h-[90vh] lg:min-h-[94vh] flex flex-col justify-center bg-[#0F294D] text-white pt-28 sm:pt-32 pb-20 overflow-hidden">
      
      {/* DYNAMIC AMBIENT BACKDROP LIGHTING */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Dynamic Glow 1 */}
        <motion.div 
          animate={{
            backgroundColor: activePillar === "gifting" ? "rgba(245, 158, 11, 0.15)" : "rgba(56, 189, 248, 0.18)",
            scale: activePillar === "gifting" ? [1, 1.1, 1] : [1, 1.15, 1],
          }}
          transition={{ duration: 0.8 }}
          className="absolute top-1/4 left-1/6 w-[550px] h-[550px] rounded-full blur-[150px] mix-blend-screen"
        />

        {/* Dynamic Glow 2 */}
        <motion.div 
          animate={{
            backgroundColor: activePillar === "gifting" ? "rgba(217, 119, 6, 0.12)" : "rgba(29, 97, 242, 0.2)",
          }}
          transition={{ duration: 0.8 }}
          className="absolute bottom-1/4 right-1/6 w-[600px] h-[600px] rounded-full blur-[160px] mix-blend-screen"
        />

        {/* Radial Ambient Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0F294D]/50 to-[#0A1C36]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Interactive Dual-Pillar Control & Typography (50% Width) */}
        <div className="lg:col-span-6 space-y-7">
          
          {/* Dual-Pillar Interactive Toggle Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center p-1.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl"
          >
            <button
              onClick={() => setActivePillar("all")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activePillar === "all"
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25"
                  : "text-slate-300 hover:text-white hover:bg-white/5"
              }`}
            >
              <Sliders className="w-4 h-4 text-sky-400" />
              <span>All Solutions</span>
            </button>

            <button
              onClick={() => setActivePillar("safety")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activePillar === "safety"
                  ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-500/25"
                  : "text-slate-300 hover:text-white hover:bg-white/5"
              }`}
            >
              <ShieldCheck className="w-4 h-4 text-sky-400" />
              <span>Industrial Safety</span>
            </button>

            <button
              onClick={() => setActivePillar("gifting")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activePillar === "gifting"
                  ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/25"
                  : "text-slate-300 hover:text-white hover:bg-white/5"
              }`}
            >
              <Gift className="w-4 h-4 text-amber-400" />
              <span>Corporate Gifting</span>
            </button>
          </motion.div>

          {/* Eyebrow Label */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider text-sky-400">
            <Zap className="w-4 h-4 text-amber-400 shrink-0" />
            <span>VARENYAM INDUSTRIAL SUPPLIERS</span>
            <span className="text-white/20">|</span>
            <span className="text-slate-300 font-normal">From Concept to Commissioning</span>
          </div>

          {/* Main Dynamic Headline */}
          <motion.h1
            key={activePillar}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-3xl sm:text-5xl lg:text-[3.3rem] font-extrabold leading-[1.14] tracking-tight text-white"
          >
            {activePillar === "all" && (
              <>
                Your Trusted Partner for{" "}
                <span className="bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
                  Industrial Safety
                </span>{" "}
                &{" "}
                <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
                  Corporate Gifting
                </span>
              </>
            )}
            {activePillar === "safety" && (
              <>
                Certified Heavy-Duty{" "}
                <span className="bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
                  Industrial Safety
                </span>{" "}
                & Protective PPE Gear
              </>
            )}
            {activePillar === "gifting" && (
              <>
                Bespoke Luxury{" "}
                <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
                  Corporate Gifting
                </span>{" "}
                & Executive Gift Sets
              </>
            )}
          </motion.h1>

          {/* Paragraph Copy */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
            Delivering end-to-end industrial solutions—from turnkey project procurement, ATEX gear, and fire suppression to bespoke corporate gift sets and executive kits.
          </p>

          {/* Dynamic Feature Badge Grid */}
          <div className="grid sm:grid-cols-3 gap-3 pt-2">
            <AnimatePresence>
              {currentFeatures.map((feat, idx) => {
                const IconComponent = feat.icon;
                return (
                  <motion.div
                    key={`${activePillar}-${idx}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, delay: idx * 0.08 }}
                    className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/20 backdrop-blur-md transition-all group"
                  >
                    <div className="p-2 rounded-lg bg-white/10 w-fit mb-2 group-hover:scale-110 transition-transform">
                      <IconComponent className={`w-4 h-4 ${activePillar === "gifting" ? "text-amber-400" : "text-sky-400"}`} />
                    </div>
                    <h4 className="text-xs font-bold text-white mb-0.5">{feat.title}</h4>
                    <p className="text-[11px] text-slate-400 leading-tight">{feat.desc}</p>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Link
              href={activePillar === "gifting" ? "/products#corporate-gifting" : "/products"}
              className={`inline-flex items-center justify-center gap-2.5 px-8 py-3.5 font-bold rounded-xl shadow-xl transition-all transform hover:-translate-y-0.5 text-base text-white ${
                activePillar === "gifting"
                  ? "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 shadow-amber-500/25 border border-amber-400/30"
                  : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-blue-600/30 border border-blue-400/30"
              }`}
            >
              <span>Explore Complete Catalog</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-semibold rounded-xl border border-white/20 transition-all transform hover:-translate-y-0.5 text-base"
            >
              <FileText className="w-5 h-5 text-amber-400" />
              <span>Request Custom Quote</span>
            </Link>
          </div>

        </div>

        {/* Right Column: 3D Interactive Glass Studio Pedestal (50% Width) */}
        <div className="lg:col-span-6 relative flex items-center justify-center">
          
          <div className="relative w-full max-w-lg lg:max-w-none h-[440px] sm:h-[500px] lg:h-[540px] rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] via-white/[0.03] to-transparent backdrop-blur-2xl p-6 sm:p-8 flex items-center justify-center shadow-2xl overflow-hidden group">
            
            {/* Background Halo Glow Ring */}
            <motion.div 
              animate={{
                background: activePillar === "gifting" 
                  ? "radial-gradient(circle, rgba(245,158,11,0.25) 0%, transparent 70%)"
                  : "radial-gradient(circle, rgba(56,189,248,0.25) 0%, transparent 70%)"
              }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 pointer-events-none transform group-hover:scale-110 transition-transform duration-700" 
            />

            {/* Dynamic Product Showcase Image */}
            <AnimatePresence mode="wait">
              {activePillar === "all" && (
                <motion.div
                  key="showcase-all"
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full h-full flex items-center justify-center"
                >
                  <img
                    src="/assets/images/hero_exact_split_reference_1787831854945.png"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/assets/images/hero_reference_3_perfect_1787832047650.png";
                    }}
                    alt="Varenyam Industrial Safety PPE and Corporate Gifting Product Showcase"
                    className="w-full h-full object-contain filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.8)] transition-all duration-500 group-hover:scale-105"
                  />
                </motion.div>
              )}

              {activePillar === "safety" && (
                <motion.div
                  key="showcase-safety"
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full h-full flex items-center justify-center"
                >
                  <img
                    src="/assets/images/industrial_safety_hero_1787830938440.png"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/assets/images/ppe_kit_1779045792869.png";
                    }}
                    alt="Varenyam Industrial Safety PPE Equipment - Hardhat, Gloves, Goggles, Safety Boots"
                    className="w-full h-full object-contain filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.8)] transition-all duration-500 group-hover:scale-105"
                  />
                </motion.div>
              )}

              {activePillar === "gifting" && (
                <motion.div
                  key="showcase-gifting"
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full h-full flex items-center justify-center"
                >
                  <img
                    src="/assets/images/corporate_gifting_set_1787829481887.png"
                    alt="Varenyam Executive Corporate Gifting Set - Thermal Bottle, Leather Journal, Pen"
                    className="w-full h-full object-contain filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.8)] transition-all duration-500 group-hover:scale-105"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Corner Badge Highlight */}
            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 px-4 py-2 rounded-2xl bg-black/60 border border-white/15 backdrop-blur-xl flex items-center gap-2 shadow-2xl">
              <span className={`w-2.5 h-2.5 rounded-full animate-pulse ${activePillar === "gifting" ? "bg-amber-400" : "bg-sky-400"}`} />
              <span className="text-xs font-bold text-white tracking-wide">
                {activePillar === "gifting" ? "Executive Gift Set Series" : "Industrial Grade Certification"}
              </span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

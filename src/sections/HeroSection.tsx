"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Gift, CheckCircle2 } from "lucide-react";

export default function HeroSection() {
  const [activeVertical, setActiveVertical] = useState<"industrial" | "gifting" | null>(null);

  return (
    <section className="relative w-full bg-[#060B18] text-white pt-20 sm:pt-24 lg:pt-24 pb-12 sm:pb-14 overflow-hidden border-b border-slate-800">
      
      {/* 1. Subtle Precision Blueprint Grid Background */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#38bdf8 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }}
      />

      {/* 2. Luminous Ambient Glow Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 right-[25%] -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 right-[5%] -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px]" />
        {/* Subtle Architectural Ring Behind Stage */}
        <div className="hidden lg:block absolute right-[5%] top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-slate-800/60 pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center min-h-[480px] lg:min-h-[520px]">
          
          {/* ========================================================================= */}
          {/* LEFT COLUMN: EDITORIAL STATEMENT & ACTION CTAs (5 Columns on Desktop)     */}
          {/* ========================================================================= */}
          <div className="lg:col-span-5 text-left py-2">
            
            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-[11px] font-semibold tracking-widest uppercase mb-4 backdrop-blur-md"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span>ONE NAME • TWO WORLDS</span>
            </motion.div>

            {/* Contrast Headline: Bold Sans + Editorial Luxury Italic Serif */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="mb-3 sm:mb-4"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white tracking-tight leading-[1.06]">
                Protecting<br />
                what matters.
              </h1>
              <p className="text-3xl sm:text-4xl lg:text-[2.85rem] font-serif italic text-[#E8C582] tracking-normal leading-[1.12] mt-1.5">
                Celebrating who<br />
                matters.
              </p>
            </motion.div>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-md mb-6"
            >
              Industrial precision and corporate elegance, brought together by one trusted partner.
            </motion.p>

            {/* Primary & Secondary Dual CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-3 max-w-md mb-6"
            >
              <Link
                href="/products"
                onMouseEnter={() => setActiveVertical("industrial")}
                onMouseLeave={() => setActiveVertical(null)}
                className="flex-1 inline-flex items-center justify-between px-5 py-3 rounded-xl bg-[#E8C582] hover:bg-[#dfb96f] text-slate-950 font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-[#E8C582]/20 transition-all transform hover:-translate-y-0.5 group"
              >
                <span>INDUSTRIAL SOLUTIONS</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <Link
                href="/corporate-gifting"
                onMouseEnter={() => setActiveVertical("gifting")}
                onMouseLeave={() => setActiveVertical(null)}
                className="flex-1 inline-flex items-center justify-between px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-extrabold text-xs uppercase tracking-wider transition-all transform hover:-translate-y-0.5 group backdrop-blur-md"
              >
                <span>CORPORATE GIFTING</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </motion.div>

            {/* Quick Micro-Trust Bar */}
            <div className="flex items-center gap-4 text-[11px] text-slate-400 font-medium">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> 23 Industrial Categories
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E8C582]" /> Bespoke Branded Gifting
              </span>
            </div>

          </div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: SCULPTURAL EDITORIAL DIPTYCH (7 Columns on Desktop)         */}
          {/* Creative asymmetric silhouettes, 100% clean photos, elegant glass docks   */}
          {/* ========================================================================= */}
          <div className="lg:col-span-7 relative py-2">
            
            {/* Luminous Architectural Orbital Backdrops & Stage Glow */}
            <div className="hidden sm:block absolute -inset-6 pointer-events-none overflow-hidden">
              <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[380px] h-[380px] rounded-full border border-cyan-500/15" />
              <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[380px] h-[380px] rounded-full border border-amber-500/15" />
              {/* Subtle unifying stage arc */}
              <div className="absolute inset-x-8 bottom-4 h-1/2 bg-gradient-to-t from-cyan-500/[0.03] via-amber-500/[0.02] to-transparent rounded-3xl -z-10" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6 items-stretch relative z-10">

              {/* ------------------------------------------------------------------- */}
              {/* PORTAL 1: INDUSTRIAL SAFETY (CREATIVE SCULPTURAL ARCH LENS)         */}
              {/* ------------------------------------------------------------------- */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className={`transition-all duration-500 flex flex-col ${
                  activeVertical === "gifting" ? "opacity-75 scale-[0.98]" : "opacity-100 scale-100"
                }`}
                onMouseEnter={() => setActiveVertical("industrial")}
                onMouseLeave={() => setActiveVertical(null)}
              >
                <Link
                  href="/products"
                  className="group flex flex-col h-full cursor-pointer"
                >
                  {/* Creative Sculptural Frame (100% Pure Photo - NO Text Overlaid Inside!) */}
                  <div className="relative h-[250px] sm:h-[270px] lg:h-[285px] w-full rounded-tl-[4rem] rounded-br-[2.5rem] rounded-tr-2xl rounded-bl-2xl overflow-hidden border-2 border-cyan-400/70 shadow-[0_0_30px_rgba(34,211,238,0.2)] group-hover:shadow-[0_0_50px_rgba(34,211,238,0.45)] group-hover:border-cyan-300 transition-all duration-500 bg-slate-950">
                    <img
                      src="/assets/images/varenyam_industrial_landscape.jpg"
                      alt="Varenyam Industrial Safety Engineer at Modern Refinery"
                      className="w-full h-full object-cover object-[center_35%] group-hover:scale-106 transition-transform duration-700 ease-out"
                    />

                    {/* Subtle corner architectural precision mark (industrial touch) */}
                    <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-cyan-400/80 pointer-events-none" />
                  </div>

                  {/* Elegant Glassmorphic Info Dock (Placed in a nice manner below the pic) */}
                  <div className="mt-3.5 p-3.5 rounded-2xl bg-[#091224]/85 border border-cyan-900/40 group-hover:border-cyan-400/50 group-hover:bg-[#0c1830] transition-all duration-300 backdrop-blur-md flex-1 flex flex-col justify-between">
                    <div>
                      {/* Top Header Row with Chips */}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-[10px] font-bold text-cyan-300 uppercase tracking-wider">
                          <ShieldCheck className="w-3 h-3 text-cyan-400" />
                          <span>Industrial Safety</span>
                        </span>
                        <span className="text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded bg-white/5 border border-white/10">
                          23 Sectors
                        </span>
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-200 transition-colors leading-snug">
                        Industrial Safety &amp; Engineering
                      </h3>
                      <p className="text-xs text-slate-300/80 mt-1 leading-relaxed">
                        Turnkey PPE, fire suppression &amp; ATEX engineering compliance.
                      </p>
                    </div>

                    {/* Action Bar */}
                    <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-cyan-400 group-hover:text-cyan-200 transition-colors">
                      <span>Explore Industrial Solutions</span>
                      <div className="w-6 h-6 rounded-full bg-cyan-400/10 flex items-center justify-center group-hover:bg-cyan-400 group-hover:text-slate-950 transition-all">
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* ------------------------------------------------------------------- */}
              {/* PORTAL 2: CORPORATE GIFTING (CREATIVE SCULPTURAL ARCH LENS)         */}
              {/* ------------------------------------------------------------------- */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.22 }}
                className={`transition-all duration-500 flex flex-col ${
                  activeVertical === "industrial" ? "opacity-75 scale-[0.98]" : "opacity-100 scale-100"
                }`}
                onMouseEnter={() => setActiveVertical("gifting")}
                onMouseLeave={() => setActiveVertical(null)}
              >
                <Link
                  href="/corporate-gifting"
                  className="group flex flex-col h-full cursor-pointer"
                >
                  {/* Creative Sculptural Frame (100% Pure Photo - NO Text Overlaid Inside!) */}
                  <div className="relative h-[250px] sm:h-[270px] lg:h-[285px] w-full rounded-tr-[4rem] rounded-bl-[2.5rem] rounded-tl-2xl rounded-br-2xl overflow-hidden border-2 border-[#E8C582]/75 shadow-[0_0_30px_rgba(232,197,130,0.2)] group-hover:shadow-[0_0_50px_rgba(232,197,130,0.45)] group-hover:border-[#E8C582] transition-all duration-500 bg-stone-950">
                    <img
                      src="/assets/images/varenyam_branded_gifting_box.jpg"
                      alt="Varenyam Executive Corporate Gifting Box with Gold Foil Logo"
                      className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                    />

                    {/* Subtle corner luxury gold filigree mark */}
                    <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-[#E8C582]/80 pointer-events-none" />
                  </div>

                  {/* Elegant Glassmorphic Info Dock (Placed in a nice manner below the pic) */}
                  <div className="mt-3.5 p-3.5 rounded-2xl bg-[#1c160e]/85 border border-amber-900/40 group-hover:border-[#E8C582]/50 group-hover:bg-[#251d13] transition-all duration-300 backdrop-blur-md flex-1 flex flex-col justify-between">
                    <div>
                      {/* Top Header Row with Chips */}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-400/30 text-[10px] font-bold text-[#E8C582] uppercase tracking-wider">
                          <Gift className="w-3 h-3 text-[#E8C582]" />
                          <span>Corporate Gifting</span>
                        </span>
                        <span className="text-[10px] font-mono text-amber-200/70 px-2 py-0.5 rounded bg-white/5 border border-white/10">
                          Bespoke Sets
                        </span>
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-base sm:text-lg font-bold font-serif text-white group-hover:text-amber-200 transition-colors leading-snug">
                        Bespoke Corporate Gifting
                      </h3>
                      <p className="text-xs text-slate-300/80 mt-1 leading-relaxed">
                        Custom gold-embossed presentation boxes, executive drinkware &amp; kits.
                      </p>
                    </div>

                    {/* Action Bar */}
                    <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-[#E8C582] group-hover:text-amber-200 transition-colors">
                      <span>Browse Gifting Catalogue</span>
                      <div className="w-6 h-6 rounded-full bg-[#E8C582]/10 flex items-center justify-center group-hover:bg-[#E8C582] group-hover:text-slate-950 transition-all">
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}

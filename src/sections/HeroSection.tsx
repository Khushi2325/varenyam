"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function HeroSection() {
  const [activeVertical, setActiveVertical] = useState<"industrial" | "gifting" | null>(null);

  return (
    <section className="relative w-full bg-[#060B18] text-white pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 overflow-hidden border-b border-slate-800">
      
      {/* 1. Precision Blueprint Coordinate Grid Background */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(56, 189, 248, 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(56, 189, 248, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px"
        }}
      />

      {/* 2. Luminous Ambient Glow Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 right-[25%] -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 right-[5%] -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center min-h-[500px] lg:min-h-[540px]">
          
          {/* ========================================================================= */}
          {/* LEFT COLUMN: EDITORIAL STATEMENT & STACKED CTAs (5 Columns on Desktop)    */}
          {/* ========================================================================= */}
          <div className="lg:col-span-5 text-left py-2">
            
            {/* Eyebrow Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-slate-300 text-[11px] font-semibold tracking-[0.2em] uppercase mb-6 backdrop-blur-md shadow-xs"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span>ONE NAME. TWO WORLDS.</span>
            </motion.div>

            {/* Contrast Headline: Bold Sans + Editorial Luxury Italic Serif */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="mb-4"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-[3.6rem] font-bold text-white tracking-tight leading-[1.06]">
                Protecting<br />
                what matters.
              </h1>
              <p className="text-3xl sm:text-4xl lg:text-[2.95rem] font-serif italic text-[#E8C582] tracking-normal leading-[1.12] mt-1.5">
                Celebrating who<br />
                matters.
              </p>
            </motion.div>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-slate-300/80 text-sm sm:text-base leading-relaxed max-w-md mb-8"
            >
              Industrial precision and corporate elegance, brought together by one trusted partner.
            </motion.p>

            {/* Primary & Secondary Stacked CTAs matching reference */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col gap-3 max-w-xs mb-4"
            >
              <Link
                href="/products"
                onMouseEnter={() => setActiveVertical("industrial")}
                onMouseLeave={() => setActiveVertical(null)}
                className="w-full inline-flex items-center justify-between px-6 py-3.5 rounded-lg bg-[#E8C582] hover:bg-[#dfb96f] text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#E8C582]/20 transition-all transform hover:-translate-y-0.5 group"
              >
                <span>INDUSTRIAL SOLUTIONS</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <Link
                href="/corporate-gifting"
                onMouseEnter={() => setActiveVertical("gifting")}
                onMouseLeave={() => setActiveVertical(null)}
                className="w-full inline-flex items-center justify-between px-6 py-3.5 rounded-lg bg-[#070D1E] hover:bg-white/10 border border-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all transform hover:-translate-y-0.5 group backdrop-blur-md"
              >
                <span>CORPORATE GIFTING</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </motion.div>

          </div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: DUAL OVERLAPPING LUMINOUS LENSES (7 Columns on Desktop)     */}
          {/* Direct realization of the reference composition: 2 overlapping circles    */}
          {/* with central logo medallion, floating clickable badges, and orbital rings */}
          {/* ========================================================================= */}
          <div className="lg:col-span-7 relative py-4 sm:py-6">
            
            {/* Luminous Orbital Background Vector Rings */}
            <div className="absolute inset-0 pointer-events-none overflow-visible flex items-center justify-center -z-10">
              <svg className="w-[120%] h-[120%] max-w-[720px] max-h-[520px] opacity-35" viewBox="0 0 700 500" fill="none">
                <defs>
                  <linearGradient id="orbitCyan" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.1" />
                  </linearGradient>
                  <linearGradient id="orbitGold" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#e8c582" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#e8c582" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                {/* Left ellipse orbiting Industrial */}
                <ellipse cx="270" cy="250" rx="230" ry="200" stroke="url(#orbitCyan)" strokeWidth="1.5" strokeDasharray="5 5" />
                {/* Right ellipse orbiting Gifting */}
                <ellipse cx="430" cy="250" rx="230" ry="200" stroke="url(#orbitGold)" strokeWidth="1.5" strokeDasharray="5 5" />
                {/* Transverse orbital arc connecting both worlds */}
                <path d="M 60 270 Q 350 70 640 270" stroke="rgba(255,255,255,0.18)" strokeWidth="1.2" />
              </svg>
            </div>

            {/* Overlapping Circles Container */}
            <div className="relative flex items-center justify-center -space-x-12 sm:-space-x-16 lg:-space-x-20 max-w-[660px] mx-auto">
              
              {/* ------------------------------------------------------------------- */}
              {/* FLOATING BADGE 1 (TOP LEFT): 23 INDUSTRIAL CATEGORIES (CLICKABLE)   */}
              {/* ------------------------------------------------------------------- */}
              <Link
                href="/products"
                className="group/badge absolute -top-1 sm:-top-3 left-2 sm:left-4 lg:left-6 z-30 inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#081226]/90 border border-cyan-500/40 hover:border-cyan-300 shadow-xl backdrop-blur-md transition-all transform hover:scale-105"
                title="View all 23 Industrial Categories"
              >
                <span className="text-xl sm:text-2xl font-black font-mono text-cyan-400 leading-none">
                  23
                </span>
                <div className="text-[10px] sm:text-[11px] font-bold text-slate-200 leading-tight uppercase tracking-wider text-left">
                  Industrial<br />Categories
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400 opacity-70 group-hover/badge:opacity-100 group-hover/badge:translate-x-0.5 group-hover/badge:-translate-y-0.5 transition-all" />
              </Link>

              {/* ------------------------------------------------------------------- */}
              {/* FLOATING BADGE 2 (TOP RIGHT): 04 CURATED GIFT COLLECTIONS (CLICKABLE)*/}
              {/* ------------------------------------------------------------------- */}
              <Link
                href="/corporate-gifting"
                className="group/badge absolute -top-1 sm:-top-3 right-2 sm:right-4 lg:right-6 z-30 inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#1a140d]/90 border border-amber-500/40 hover:border-[#E8C582] shadow-xl backdrop-blur-md transition-all transform hover:scale-105"
                title="Explore 4 Curated Corporate Gifting Collections"
              >
                <span className="text-xl sm:text-2xl font-black font-mono text-[#E8C582] leading-none">
                  04
                </span>
                <div className="text-[10px] sm:text-[11px] font-bold text-slate-200 leading-tight uppercase tracking-wider text-left">
                  Curated Gift<br />Collections
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#E8C582] opacity-70 group-hover/badge:opacity-100 group-hover/badge:translate-x-0.5 group-hover/badge:-translate-y-0.5 transition-all" />
              </Link>

              {/* ------------------------------------------------------------------- */}
              {/* CIRCLE 1: INDUSTRIAL SOLUTIONS (LUMINOUS CYAN NEON LENS)             */}
              {/* ------------------------------------------------------------------- */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className={`transition-all duration-500 relative z-10 ${
                  activeVertical === "gifting" ? "opacity-75 scale-[0.98]" : "opacity-100 scale-100"
                }`}
                onMouseEnter={() => setActiveVertical("industrial")}
                onMouseLeave={() => setActiveVertical(null)}
              >
                <Link
                  href="/products"
                  className="group block relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] lg:w-[360px] lg:h-[360px] rounded-full overflow-hidden border-2 border-cyan-400 shadow-[0_0_35px_rgba(34,211,238,0.35)] group-hover:shadow-[0_0_60px_rgba(34,211,238,0.6)] group-hover:border-cyan-300 transition-all duration-500 bg-slate-950 cursor-pointer"
                >
                  {/* High-Resolution Industrial Engineer Landscape */}
                  <img
                    src="/assets/images/hero_industrial_portal.jpg"
                    alt="Varenyam Industrial Safety Solutions"
                    className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                  />

                  {/* Gentle gradient shroud at bottom for pristine text contrast */}
                  <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#060B18]/95 via-[#060B18]/60 to-transparent pointer-events-none" />

                  {/* Clean Minimal Typography (01 / PROTECT, Industrial Solutions, EXPLORE) */}
                  <div className="absolute inset-x-0 bottom-6 sm:bottom-8 text-center px-4 z-20">
                    <p className="text-[10px] sm:text-[11px] font-mono tracking-widest text-slate-300 uppercase">
                      01 / PROTECT
                    </p>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-white leading-tight mt-0.5 sm:mt-1 group-hover:text-cyan-200 transition-colors">
                      Industrial Solutions
                    </h3>
                    <div className="mt-1.5 sm:mt-2 inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-widest text-cyan-300 group-hover:text-white uppercase transition-colors">
                      <span>EXPLORE</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* ------------------------------------------------------------------- */}
              {/* CIRCLE 2: CORPORATE GIFTING (LUMINOUS GOLD NEON LENS)                */}
              {/* ------------------------------------------------------------------- */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.22 }}
                className={`transition-all duration-500 relative z-10 ${
                  activeVertical === "industrial" ? "opacity-75 scale-[0.98]" : "opacity-100 scale-100"
                }`}
                onMouseEnter={() => setActiveVertical("gifting")}
                onMouseLeave={() => setActiveVertical(null)}
              >
                <Link
                  href="/corporate-gifting"
                  className="group block relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] lg:w-[360px] lg:h-[360px] rounded-full overflow-hidden border-2 border-[#E8C582] shadow-[0_0_35px_rgba(232,197,130,0.35)] group-hover:shadow-[0_0_60px_rgba(232,197,130,0.6)] group-hover:border-amber-200 transition-all duration-500 bg-stone-950 cursor-pointer"
                >
                  {/* Official Varenyam Gold-Embossed Presentation Box */}
                  <img
                    src="/assets/images/varenyam_branded_gifting_box.jpg"
                    alt="Varenyam Bespoke Corporate Gifting"
                    className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                  />

                  {/* Gentle gradient shroud at bottom for pristine text contrast */}
                  <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#060B18]/95 via-[#060B18]/60 to-transparent pointer-events-none" />

                  {/* Clean Minimal Typography (02 / CONNECT, Corporate Gifting, EXPLORE) */}
                  <div className="absolute inset-x-0 bottom-6 sm:bottom-8 text-center px-4 z-20">
                    <p className="text-[10px] sm:text-[11px] font-mono tracking-widest text-[#E8C582]/90 uppercase">
                      02 / CONNECT
                    </p>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-white leading-tight mt-0.5 sm:mt-1 group-hover:text-amber-200 transition-colors">
                      Corporate Gifting
                    </h3>
                    <div className="mt-1.5 sm:mt-2 inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-widest text-[#E8C582] group-hover:text-white uppercase transition-colors">
                      <span>EXPLORE</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* ------------------------------------------------------------------- */}
              {/* CENTER INTERSECTING MEDALLION: VARENYAM BRAND EMBLEM (CLICKABLE)    */}
              {/* ------------------------------------------------------------------- */}
              <Link
                href="/about"
                title="Varenyam Industrial Suppliers"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-16 h-16 sm:w-20 sm:h-20 lg:w-22 lg:h-22 rounded-full bg-white border-2 border-[#E8C582] ring-4 ring-cyan-400/40 shadow-[0_0_35px_rgba(0,0,0,0.85)] flex items-center justify-center p-2.5 sm:p-3 hover:scale-110 hover:shadow-[0_0_35px_rgba(232,197,130,0.6)] transition-all duration-300 group/logo"
              >
                <img
                  src="/assets/images/logo.png"
                  alt="Varenyam Official Logo"
                  className="w-full h-auto object-contain group-hover/logo:scale-105 transition-transform"
                />
              </Link>

              {/* ------------------------------------------------------------------- */}
              {/* FLOATING BADGE 3 (BOTTOM CENTER): 360° END-TO-END SUPPORT (CLICK)   */}
              {/* ------------------------------------------------------------------- */}
              <Link
                href="/#services"
                className="group/pill absolute -bottom-1 sm:-bottom-3 left-1/2 -translate-x-1/2 z-30 inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-950/90 border border-white/20 hover:border-cyan-400 shadow-xl backdrop-blur-md transition-all transform hover:scale-105"
                title="Explore 360° End-to-End Technical & Engineering Services"
              >
                <span className="text-base sm:text-lg font-black font-mono text-[#E8C582] leading-none">
                  360°
                </span>
                <div className="text-[10px] sm:text-[11px] font-bold text-slate-200 leading-tight uppercase tracking-wider text-left">
                  End-to-End<br />Support
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400 opacity-70 group-hover/pill:opacity-100 group-hover/pill:translate-x-0.5 group-hover/pill:-translate-y-0.5 transition-all" />
              </Link>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}

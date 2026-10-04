"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Gift, 
  Sparkles, 
  Award, 
  Users, 
  Package, 
  ArrowRight, 
  CheckCircle2, 
  Palette, 
  Truck, 
  Compass, 
  ShieldCheck, 
  Briefcase, 
  Calendar,
  ChevronRight,
  ArrowLeft
} from "lucide-react";
import Link from "next/link";
import { 
  GIFTING_COLLECTIONS, 
  GIFTING_PILLARS, 
  GIFTING_CUSTOMIZATIONS, 
  GIFTING_PROCESS_STEPS, 
  GIFTING_SEGMENTS,
  GiftingCollection
} from "@/data/gifting";

interface CorporateGiftingSectionProps {
  isStandalonePage?: boolean;
}

export default function CorporateGiftingSection({ isStandalonePage = false }: CorporateGiftingSectionProps) {
  // State: null means we are showing the 4 primary categories.
  // When an id is clicked, we switch to viewing all products in that collection.
  const [selectedCollectionId, setSelectedCollectionId] = useState<string | null>(null);

  const selectedCollection = GIFTING_COLLECTIONS.find(c => c.id === selectedCollectionId);

  const handleOpenCollection = (id: string) => {
    setSelectedCollectionId(id);
    const element = document.getElementById("gifting-catalogue-view");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleBackToAll = () => {
    setSelectedCollectionId(null);
    const element = document.getElementById("gifting-catalogue-view");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section 
      id="corporate-gifting" 
      className="py-16 md:py-24 bg-[#faf9f6] text-slate-900 relative overflow-hidden selection:bg-amber-400 selection:text-slate-950"
    >
      {/* Subtle Warm Amber & Champagne Ambient Lighting */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-amber-200/40 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[400px] h-[400px] bg-amber-100/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        
        {/* ========================================================================= */}
        {/* 1. BRAND HERO SHOWCASE: CURATED WITH PURPOSE. PRESENTED WITH DISTINCTION  */}
        {/* ========================================================================= */}
        <div className="mb-16 sm:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Editorial Philosophy & Value Proposition (7 Columns) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 text-left"
            >
              {/* Elegant Eyebrow Badge (No broken logo!) */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-300 text-amber-900 text-xs font-black tracking-widest uppercase mb-4 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>VARENYAM CORPORATE GIFTING</span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-black tracking-tight text-slate-900 leading-[1.08] mb-3">
                Curated with Purpose.{" "}
                <span className="font-serif italic text-amber-700 block font-normal mt-1">
                  Presented with Distinction.
                </span>
              </h2>

              <p className="text-amber-800 text-sm sm:text-base font-bold tracking-wide mb-4">
                Premium Enterprise Gifting &amp; Bespoke Executive Merchandise
              </p>

              <div className="space-y-3 text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                <p>
                  At <strong className="text-slate-900 font-bold">Varenyam Corporate Gifting</strong>, we believe a gift is more than an object—it is an enduring reflection of your corporate esteem, an expression of heartfelt appreciation, and an opportunity to forge unbreakable relationships.
                </p>
                <p className="text-slate-500 text-sm">
                  We curate bespoke, personalized gifting solutions for <strong className="text-amber-900 font-semibold">employees, leadership, distinguished clients, and VIP guests</strong>—combining world-class craftsmanship with custom branding and white-glove presentation.
                </p>
              </div>

              {/* 4 Feature Value Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-amber-200/80 shadow-xs">
                  <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                    <Gift className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-slate-800">100% Custom Branded Sets</span>
                </div>

                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-amber-200/80 shadow-xs">
                  <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-slate-800">Gold Foil &amp; Laser Engraving</span>
                </div>

                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-amber-200/80 shadow-xs">
                  <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                    <Package className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-slate-800">Eco-Luxe Presentation Boxes</span>
                </div>

                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-amber-200/80 shadow-xs">
                  <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                    <Truck className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-slate-800">Pan-India Direct Delivery</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex items-center gap-3 flex-wrap">
                <a
                  href="#gifting-catalogue-view"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-bold text-xs sm:text-sm shadow-lg shadow-amber-900/20 transition-all transform hover:-translate-y-0.5"
                >
                  <span>Explore 4 Curated Collections</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-bold text-xs sm:text-sm shadow-xs transition-colors"
                >
                  <span>Request Custom RFQ</span>
                </Link>
              </div>
            </motion.div>

            {/* Right Column: High-Resolution Luxury Showcase Window (5 Columns) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="lg:col-span-5 flex flex-col justify-center"
            >
              {/* Creative Sculptural Luxury Arch Frame (100% Pure, Unobstructed Image) */}
              <div className="relative rounded-t-[3.5rem] rounded-b-2xl overflow-hidden border-2 border-amber-300 shadow-xl bg-stone-950 group h-[290px] sm:h-[320px]">
                <img
                  src="/assets/images/varenyam_branded_gifting_box.jpg"
                  alt="Varenyam Bespoke Executive Presentation Gift Box"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Subtle corner luxury accent */}
                <div className="absolute top-3.5 right-3.5 w-5 h-5 border-t-2 border-r-2 border-amber-300 pointer-events-none" />
              </div>

              {/* Clean Info Pedestal Below the Photo */}
              <div className="mt-3 p-4 rounded-2xl bg-white border border-amber-200 shadow-sm text-left">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-amber-800 text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    Bespoke Branding Included
                  </span>
                  <span className="text-slate-500 text-[11px] font-medium px-2 py-0.5 rounded bg-slate-100 border border-slate-200">
                    Made to Order
                  </span>
                </div>
                <h4 className="text-slate-900 font-serif font-bold text-base sm:text-lg leading-tight mb-1">
                  Executive Presentation Gift Sets
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Custom gold hot-stamped presentation box, insulated thermal flask, fine leather journal &amp; precision pen tailored for your enterprise.
                </p>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Anchor for Smooth Scrolling */}
        <div id="gifting-catalogue-view" className="scroll-mt-28" />

        {/* ========================================================================= */}
        {/* 2. DYNAMIC CATALOGUE VIEW: 4 CATEGORIES vs EXPANDED PRODUCT GALLERY       */}
        {/* ========================================================================= */}
        <div className="mb-20">
          <AnimatePresence mode="wait">
            {!selectedCollection ? (
              /* VIEW A: THE 4 MAIN COLLECTIONS (ONE SINGLE REPRESENTATIVE IMAGE FIRST) */
              <motion.div
                key="collections-grid"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
                className="space-y-10"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between border-b border-slate-200 pb-5 gap-4">
                  <div>
                    <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block mb-1">
                      Our Collections
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                      Explore By Gifting Collection
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 max-w-md">
                    Click any collection below to browse its complete high-definition catalogue and detailed product specifications.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                  {GIFTING_COLLECTIONS.map((col, idx) => (
                    <motion.div
                      key={col.id}
                      initial={{ opacity: 0, y: 25 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      onClick={() => handleOpenCollection(col.id)}
                      className="group bg-white rounded-3xl border border-slate-200 hover:border-amber-400 p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between hover:-translate-y-1"
                    >
                      <div>
                        {/* 1 SINGLE REPRESENTATIVE HERO IMAGE FOR THE CATEGORY */}
                        <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden mb-6 bg-slate-100 border border-slate-200 shadow-inner">
                          <img
                            src={col.heroImage}
                            alt={`${col.title} - Varenyam Corporate Gifting`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                          
                          {/* Number Badge */}
                          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-amber-900 text-xs font-black tracking-wider shadow-xs">
                            COLLECTION {col.number}
                          </div>

                          {/* Product Count Pill */}
                          <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-amber-500 text-white text-xs font-bold shadow-md">
                            {col.products.length} Curated Products
                          </div>
                        </div>

                        {/* Title & Tagline */}
                        <div className="space-y-1 mb-3">
                          <h4 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-amber-700 transition-colors">
                            {col.title}
                          </h4>
                          <p className="text-amber-700 text-sm font-bold">
                            {col.tagline}
                          </p>
                        </div>

                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                          {col.description}
                        </p>

                        {/* Perfect For Tags */}
                        <div className="pt-4 border-t border-slate-100 mb-6">
                          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                            Perfect For:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {col.perfectFor.map((item, i) => (
                              <span
                                key={i}
                                className="px-2.5 py-1 rounded-lg bg-amber-50/70 border border-amber-200/80 text-amber-900 text-[11px] font-medium"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Calming Action Link */}
                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm font-bold text-amber-700 group-hover:text-amber-800 transition-colors">
                        <span>Open Collection Catalogue</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ) : (
              /* VIEW B: EXPANDED CATEGORY WITH EACH PRODUCT HAVING ITS OWN CINEMATIC IMAGE, NAME & DESCRIPTION */
              <motion.div
                key="collection-detail"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
                className="space-y-10"
              >
                {/* Back Button Navigation */}
                <div className="flex items-center justify-between flex-wrap gap-4 border-b border-slate-200 pb-5">
                  <button
                    onClick={handleBackToAll}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 text-xs sm:text-sm font-bold transition-all shadow-xs group"
                  >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    <span>Back to All Collections</span>
                  </button>

                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span>Varenyam Corporate Gifting</span>
                    <span>/</span>
                    <span className="text-amber-800 font-bold">{selectedCollection.title}</span>
                  </div>
                </div>

                {/* Collection Highlight Banner */}
                <div className="bg-gradient-to-r from-amber-50 via-white to-amber-50/50 p-6 sm:p-10 rounded-3xl border border-amber-200 shadow-sm">
                  <div className="grid lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-8 space-y-3">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider border border-amber-200">
                        <span>Collection {selectedCollection.number}</span>
                      </div>
                      <h3 className="text-2xl sm:text-4xl md:text-4xl font-black text-slate-900">
                        {selectedCollection.title}
                      </h3>
                      <p className="text-amber-800 text-base sm:text-lg font-bold">
                        {selectedCollection.tagline}
                      </p>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl">
                        {selectedCollection.description}
                      </p>

                      {selectedCollection.themeNote && (
                        <p className="text-xs sm:text-sm font-semibold italic text-amber-800 pt-1">
                          &ldquo;{selectedCollection.themeNote}&rdquo;
                        </p>
                      )}

                      {/* Tags */}
                      <div className="pt-2 flex flex-wrap gap-2">
                        {selectedCollection.perfectFor.map((pf, idx) => (
                          <span 
                            key={idx} 
                            className="px-3 py-1 rounded-full bg-white border border-amber-300 text-amber-900 text-xs font-semibold shadow-xs"
                          >
                            {pf}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="lg:col-span-4">
                      <div className="relative h-60 sm:h-72 w-full rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
                        <img 
                          src={selectedCollection.heroImage} 
                          alt={selectedCollection.title} 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Subtitle */}
                <div className="text-left pt-2">
                  <h4 className="text-xl sm:text-2xl font-black text-slate-900 mb-1">
                    The Collection Includes:
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Each product is curated for visual elegance, durability, and distinguished brand presentation.
                  </p>
                </div>

                {/* PRODUCT GRID: PURE VISUAL SHOWCASE */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {selectedCollection.products.map((product, pIdx) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: pIdx * 0.05 }}
                      className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-amber-400 flex flex-col justify-between group transition-all duration-300 shadow-sm hover:shadow-xl"
                    >
                      <div>
                        {/* High-Definition Product Picture */}
                        <div className="relative h-56 w-full rounded-xl overflow-hidden mb-4 bg-slate-100 border border-slate-200 shadow-inner">
                          <img
                            src={product.image}
                            alt={`${product.name} - Varenyam Corporate Gifting`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                        </div>

                        {/* Product Name */}
                        <h5 className="text-base sm:text-lg font-bold text-slate-900 mb-2 group-hover:text-amber-700 transition-colors leading-snug">
                          {product.name}
                        </h5>

                        {/* Small Soothing Description */}
                        <p className="text-xs text-slate-600 leading-relaxed mb-4">
                          {product.description}
                        </p>
                      </div>

                      {/* Detail Features / Tags */}
                      {product.features && product.features.length > 0 && (
                        <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-1">
                          {product.features.map((feat, fIdx) => (
                            <span
                              key={fIdx}
                              className="px-2 py-0.5 rounded-md bg-amber-50 text-[10px] text-amber-900 border border-amber-200/80"
                            >
                              {feat}
                            </span>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Bottom Back Button */}
                <div className="pt-6 text-center">
                  <button
                    onClick={handleBackToAll}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 text-xs sm:text-sm font-bold transition-all shadow-xs"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>View Other Collections</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ========================================================================= */}
        {/* 3. THE VARENYAM DIFFERENCE: CURATED, CUSTOMIZED, PRESENTED, DELIVERED     */}
        {/* ========================================================================= */}
        <div className="my-20 pt-14 border-t border-slate-200">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block mb-2">
              The Varenyam Difference
            </span>
            <h3 className="text-3xl sm:text-4xl font-black text-slate-900 mb-3">
              Beyond Gifting.
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We don&apos;t simply supply products. We create <strong className="text-amber-800 font-bold">complete gifting experiences</strong>—from product selection and personalization to packaging and delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GIFTING_PILLARS.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white p-7 rounded-3xl border border-slate-200 hover:border-amber-400 transition-all text-center flex flex-col items-center group shadow-sm hover:shadow-md"
              >
                <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {idx === 0 && <Compass className="w-7 h-7" />}
                  {idx === 1 && <Palette className="w-7 h-7" />}
                  {idx === 2 && <Package className="w-7 h-7" />}
                  {idx === 3 && <Truck className="w-7 h-7" />}
                </div>
                <h4 className="text-base font-black text-slate-900 mb-2 tracking-wider">
                  {pillar.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 4. CUSTOMIZATION & BRANDING: YOUR BRAND, BEAUTIFULLY PRESENTED            */}
        {/* ========================================================================= */}
        <div className="my-20 p-8 sm:p-12 md:p-14 rounded-3xl bg-gradient-to-br from-amber-50/80 via-white to-amber-50/50 border border-amber-200 shadow-sm">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block">
                Customization &amp; Branding
              </span>
              <h3 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
                Your Brand, <span className="text-amber-700">Beautifully Presented.</span>
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Every organization has its own identity. Your corporate gifts should reflect it. We offer end-to-end customization across products and packaging to create a consistent and premium brand experience.
              </p>
              <p className="text-xs text-amber-800 font-semibold">
                From a single premium gift to a large-scale corporate gifting program, we bring your vision to life with precision craftsmanship.
              </p>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              
              {/* Product Customization */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                  <Palette className="w-5 h-5 text-amber-700" />
                  <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                    Product Customization
                  </h4>
                </div>
                <div className="space-y-2">
                  {GIFTING_CUSTOMIZATIONS.product.map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Packaging Customization */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                  <Package className="w-5 h-5 text-amber-700" />
                  <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                    Packaging Customization
                  </h4>
                </div>
                <div className="space-y-2">
                  {GIFTING_CUSTOMIZATIONS.packaging.map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* 5. OUR PROCESS: FROM THOUGHT TO PRESENTATION                               */}
        {/* ========================================================================= */}
        <div className="my-20">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block mb-2">
              Our Process
            </span>
            <h3 className="text-3xl sm:text-4xl font-black text-slate-900 mb-2">
              From Thought to Presentation.
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm">
              A structured, seamless 4-step execution from initial consultation to door-step delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GIFTING_PROCESS_STEPS.map((proc, idx) => (
              <div 
                key={idx}
                className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden"
              >
                <div className="text-4xl font-black text-slate-200 mb-3 font-mono">
                  {proc.step}
                </div>
                <h4 className="text-base font-bold text-amber-800 mb-2 tracking-wider">
                  {proc.name}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {proc.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 6. DESIGNED AROUND YOU: EVERY OCCASION, EVERY RELATIONSHIP, EVERY BUDGET   */}
        {/* ========================================================================= */}
        <div className="my-20">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block mb-2">
              Tailored Solutions
            </span>
            <h3 className="text-3xl sm:text-4xl font-black text-slate-900 mb-2">
              Designed Around You.
            </h3>
            <p className="text-slate-600 text-sm sm:text-base">
              Every Occasion. Every Relationship. Every Budget.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GIFTING_SEGMENTS.map((seg, idx) => (
              <div 
                key={idx}
                className="p-7 rounded-3xl bg-white border border-slate-200 hover:border-amber-400 transition-all shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-4">
                    {idx === 0 && <Users className="w-5 h-5" />}
                    {idx === 1 && <Briefcase className="w-5 h-5" />}
                    {idx === 2 && <Award className="w-5 h-5" />}
                    {idx === 3 && <Calendar className="w-5 h-5" />}
                  </div>
                  <h4 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider mb-2">
                    {seg.audience}
                  </h4>
                  <p className="text-xs text-amber-700 font-bold mb-3">
                    {seg.items}
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {seg.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 7. CORPORATE GIFTING, REDEFINED & CONTACT CARD                            */}
        {/* ========================================================================= */}
        <div className="mt-20 pt-14 border-t border-slate-200">
          <div className="max-w-4xl mx-auto text-center space-y-5">
            <div className="text-xs font-black text-amber-700 uppercase tracking-widest">
              Thoughtful Selection • Refined Presentation • Meaningful Experiences
            </div>

            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              Corporate Gifting, Redefined.
            </h3>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              At <strong className="text-slate-900">Varenyam Corporate Gifting</strong>, every gift is curated to communicate something—<span className="text-amber-800 font-bold">appreciation, recognition, celebration or connection</span>.
            </p>

            <blockquote className="text-lg sm:text-xl font-medium text-amber-900 italic py-2">
              &ldquo;Because the right gift doesn&apos;t simply represent your company. It represents how you value the relationship.&rdquo;
            </blockquote>

            {/* Direct Contact Banner (From Official Corporate Gifting Back Cover) */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 max-w-2xl mx-auto mt-6 text-center space-y-4 shadow-xl">
              <div className="inline-block bg-slate-50 p-3 rounded-2xl shadow-sm border border-slate-200">
                <img 
                  src="/assets/images/logo.png" 
                  alt="Varenyam Logo" 
                  className="h-10 w-auto object-contain" 
                />
              </div>

              <div>
                <h4 className="text-xl font-black text-slate-900">
                  VARENYAM CORPORATE GIFTING
                </h4>
                <p className="text-xs text-amber-700 font-bold uppercase tracking-widest mt-1">
                  Premium Corporate Gifts | Executive Gifting | Welcome Kits | Festive Hampers
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Curated with Purpose. Presented with Distinction.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 text-xs sm:text-sm text-slate-600 space-y-1.5">
                <p><strong className="text-slate-900">Phone:</strong> +91 94085 56985</p>
                <p><strong className="text-slate-900">Email:</strong> varenyamindustrial@gmail.com</p>
                <p><strong className="text-slate-900">Website:</strong> www.varenyam.in</p>
                <p><strong className="text-slate-900">Address:</strong> Vadodara, Gujarat, India</p>
              </div>

              <div className="pt-2">
                <p className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                  Thoughtful Gifts. Stronger Relationships.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  Search, 
  ArrowRight, 
  CheckCircle2, 
  X, 
  Gift, 
  ShieldCheck, 
  Sparkles, 
  FileText,
  Wrench,
  Flame,
  Zap,
  Activity,
  HardHat,
  Hammer,
  Truck,
  DollarSign,
  Printer,
  Clock,
  Award
} from "lucide-react";
import { PRODUCTS, ProductItem } from "@/data/products";

interface ProductsSectionProps {
  showViewAllButton?: boolean;
  limit?: number;
}

export default function ProductsSection({ showViewAllButton = true, limit }: ProductsSectionProps) {
  const [activeModalProduct, setActiveModalProduct] = useState<ProductItem | null>(null);

  const ppeProducts = PRODUCTS.filter(p => !p.isCorporateGifting);
  const giftingProducts = PRODUCTS.filter(p => p.isCorporateGifting);

  const displayPpe = limit ? ppeProducts.slice(0, 6) : ppeProducts;
  const displayGifting = limit ? giftingProducts.slice(0, 3) : giftingProducts;

  return (
    <section id="catalog" className="py-20 md:py-28 bg-surface relative">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-3 inline-block">
            Product Catalog Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-text-dark leading-tight mb-4">
            Industrial Essentials & <span className="text-amber-500">Corporate Gifting</span>
          </h2>
          <p className="text-text-dark/70 text-base md:text-lg">
            High-performance certified safety equipment and bespoke corporate gifting hampers tailored for enterprise procurement.
          </p>
        </div>

        {/* HYBRID DUAL SHOWCASE (MATCHING REFERENCE 1) */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 mb-16">
          
          {/* LEFT COLUMN: Industrial Essentials Showcase (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between">
            <div>
              {/* Category Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-100 pb-6 mb-6 gap-4">
                <div>
                  <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider mb-1">
                    <ShieldCheck className="w-4 h-4" />
                    Industrial Essentials
                  </div>
                  <h3 className="text-2xl font-extrabold text-text-dark">Safety & MRO Gear</h3>
                </div>

                {/* Sub-Category Pills */}
                <div className="flex flex-wrap gap-1.5 text-xs text-text-dark/70">
                  <span className="px-2.5 py-1 bg-surface rounded-lg font-semibold border border-gray-100">Safety Gear</span>
                  <span className="px-2.5 py-1 bg-surface rounded-lg font-semibold border border-gray-100">Power Tools</span>
                  <span className="px-2.5 py-1 bg-surface rounded-lg font-semibold border border-gray-100">Safety Footwear</span>
                  <span className="px-2.5 py-1 bg-surface rounded-lg font-semibold border border-gray-100">ATEX & Fire</span>
                </div>
              </div>

              {/* Product Cards Grid */}
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                {displayPpe.map((product) => (
                  <motion.div
                    key={product.id}
                    whileHover={{ y: -4 }}
                    onClick={() => setActiveModalProduct(product)}
                    className="bg-surface rounded-2xl p-4 border border-gray-100 hover:border-primary/40 transition-all cursor-pointer group flex flex-col justify-between"
                  >
                    <div>
                      <div className="h-36 w-full bg-white rounded-xl p-3 flex items-center justify-center mb-3 border border-gray-50 overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="h-full object-contain transform group-hover:scale-105 transition-transform duration-300" 
                        />
                      </div>
                      <h4 className="font-bold text-text-dark text-sm leading-snug group-hover:text-primary transition-colors line-clamp-1 mb-1">
                        {product.name}
                      </h4>
                      <p className="text-xs text-gray-500 line-clamp-1 mb-3">{product.tagline}</p>
                    </div>

                    <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-primary">
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <Link
              href="/products"
              className="w-full py-3.5 bg-primary/10 hover:bg-primary text-primary hover:text-white font-bold text-sm rounded-xl text-center transition-colors flex items-center justify-center gap-2"
            >
              <span>Browse All Industrial PPE & Gear</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* RIGHT COLUMN: Corporate Gifting Showcase (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-amber-500/5 via-amber-500/10 to-amber-500/5 p-6 sm:p-8 rounded-3xl border border-amber-200 shadow-sm flex flex-col justify-between">
            <div>
              {/* Category Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-amber-200/60 pb-6 mb-6 gap-4">
                <div>
                  <div className="flex items-center gap-2 text-amber-700 font-bold text-xs uppercase tracking-wider mb-1">
                    <Gift className="w-4 h-4 text-amber-600" />
                    Corporate Gifting
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900">Executive Solutions</h3>
                </div>

                {/* Sub-Category Pills */}
                <div className="flex flex-wrap gap-1.5 text-xs text-amber-900/80">
                  <span className="px-2.5 py-1 bg-white/80 rounded-lg font-semibold border border-amber-200">Custom Hampers</span>
                  <span className="px-2.5 py-1 bg-white/80 rounded-lg font-semibold border border-amber-200">Executive Kits</span>
                </div>
              </div>

              {/* Product Cards */}
              <div className="space-y-4 mb-6">
                {displayGifting.map((product) => (
                  <motion.div
                    key={product.id}
                    whileHover={{ y: -4 }}
                    onClick={() => setActiveModalProduct(product)}
                    className="bg-white rounded-2xl p-4 border border-amber-200/80 shadow-sm hover:shadow-md transition-all cursor-pointer group flex items-center gap-4"
                  >
                    <div className="w-24 h-24 bg-slate-950/5 rounded-xl p-2 shrink-0 flex items-center justify-center overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="h-full object-contain transform group-hover:scale-105 transition-transform duration-300" 
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="px-2 py-0.5 bg-amber-100 text-amber-800 text-[10px] font-bold rounded">
                        Bespoke Gifting
                      </span>
                      <h4 className="font-bold text-slate-900 text-base leading-snug group-hover:text-amber-600 transition-colors truncate mt-1">
                        {product.name}
                      </h4>
                      <p className="text-xs text-gray-500 line-clamp-1 mt-1">{product.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <Link
              href="/products#corporate-gifting"
              className="w-full py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-sm rounded-xl text-center transition-colors flex items-center justify-center gap-2 shadow-md shadow-amber-400/20"
            >
              <span>Explore Corporate Gifting Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>

        {/* BOTTOM "WHY VARENYAM?" STRIP (MATCHING REFERENCE 1) */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-3">
              <DollarSign className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-text-dark text-base mb-1">Bulk Pricing</h4>
            <p className="text-xs text-text-dark/60">Competitive enterprise volume discounts</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-3">
              <Printer className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-text-dark text-base mb-1">Custom Branding</h4>
            <p className="text-xs text-text-dark/60">Laser logo & high-density embroidery</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-3">
              <Award className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-text-dark text-base mb-1">Quality Assured</h4>
            <p className="text-xs text-text-dark/60">100% certified international standards</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-3">
              <Clock className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-text-dark text-base mb-1">Timely Delivery</h4>
            <p className="text-xs text-text-dark/60">Dependable Pan-India logistics network</p>
          </div>
        </div>

      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {activeModalProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative border border-gray-200 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setActiveModalProduct(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
                  {activeModalProduct.category}
                </span>
                <span className="text-xs text-gray-500 font-medium">Varenyam Official Catalog</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-text-dark mb-2">
                {activeModalProduct.name}
              </h3>
              <p className="text-primary font-semibold text-sm mb-6">{activeModalProduct.tagline}</p>

              <div className="bg-surface rounded-2xl p-4 mb-6 border border-gray-100 flex items-center justify-center h-48">
                <img 
                  src={activeModalProduct.image} 
                  alt={activeModalProduct.name} 
                  className="max-h-full object-contain" 
                />
              </div>

              <p className="text-text-dark/80 text-base leading-relaxed mb-6">
                {activeModalProduct.description}
              </p>

              <div className="mb-6">
                <h4 className="font-bold text-text-dark text-base mb-3">Included Sub-Products & Specifications:</h4>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {activeModalProduct.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-text-dark/80">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-4">
                <Link
                  href={`/contact?product=${encodeURIComponent(activeModalProduct.name)}`}
                  onClick={() => setActiveModalProduct(null)}
                  className="flex-1 py-3.5 bg-primary text-white text-center font-bold rounded-xl shadow-lg hover:bg-primary-deep transition-colors flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  <span>Request Specific Quote</span>
                </Link>
                <button
                  onClick={() => setActiveModalProduct(null)}
                  className="py-3.5 px-6 border border-gray-300 text-gray-700 font-bold rounded-xl hover:bg-gray-100 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

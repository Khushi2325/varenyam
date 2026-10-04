"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  CategoryInfo, 
  ProductItem, 
  CategoryGalleryItem
} from "@/data/products";
import { 
  ArrowLeft, 
  ArrowRight, 
  Maximize2, 
  X, 
  MessageSquare,
  Send
} from "lucide-react";

interface CategoryDetailViewProps {
  category: CategoryInfo;
  products: ProductItem[];
  allCategories: CategoryInfo[];
  onSelectCategory: (categoryId: string) => void;
  onOpenRfq: (product?: ProductItem) => void;
  onBackToAll: () => void;
}

export default function CategoryDetailView({
  category,
  products,
  allCategories,
  onSelectCategory,
  onOpenRfq,
  onBackToAll
}: CategoryDetailViewProps) {
  const [lightboxImage, setLightboxImage] = useState<CategoryGalleryItem | null>(null);

  // Current category index and prev/next categories
  const currentIndex = allCategories.findIndex(c => c.id === category.id);
  const prevCategory = currentIndex > 0 ? allCategories[currentIndex - 1] : allCategories[allCategories.length - 1];
  const nextCategory = currentIndex < allCategories.length - 1 ? allCategories[currentIndex + 1] : allCategories[0];

  const { gallery } = category;

  // Split products into 2 balanced columns for desktop
  const midpoint = Math.ceil(products.length / 2);
  const leftColProducts = products.slice(0, midpoint);
  const rightColProducts = products.slice(midpoint);

  return (
    <div className="space-y-16 max-w-7xl mx-auto">
      
      {/* 1. Minimal, subtle Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 font-medium">
        <Link href="/" className="hover:text-blue-900 transition-colors">
          Home
        </Link>
        <span className="text-slate-300">/</span>
        <button 
          onClick={onBackToAll}
          className="hover:text-blue-900 transition-colors font-medium"
        >
          Products &amp; Catalogue
        </button>
        <span className="text-slate-300">/</span>
        <span className="text-slate-800 font-semibold">{category.name}</span>
      </nav>

      {/* 2. Premium Category Header */}
      <div className="pt-2 pb-4">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="text-xs font-semibold text-slate-600 bg-slate-100/90 border border-slate-200/80 px-3 py-1 rounded-full">
            {products.length} products
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
          {category.name}
        </h1>

        <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl">
          {category.description}
        </p>
      </div>

      {/* 3. Visual Category Gallery (2–3 Editorial Visuals) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        
        {/* Main Panel (Approx 60–65% width on desktop) */}
        <div className="lg:col-span-7 xl:col-span-8">
          <div 
            onClick={() => setLightboxImage(gallery.main)}
            className="group relative h-[320px] sm:h-[420px] lg:h-[480px] w-full rounded-3xl bg-slate-100 border border-slate-200/70 shadow-xs overflow-hidden cursor-pointer hover:border-blue-900/40 hover:shadow-md transition-all"
          >
            <img
              src={gallery.main.url}
              alt={gallery.main.alt}
              className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
              loading="eager"
            />
            
            {/* Subtle Expand Button on Hover */}
            <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/85 backdrop-blur-md border border-slate-200/60 flex items-center justify-center text-slate-700 opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all shadow-sm">
              <Maximize2 className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Supporting Panels (Approx 35–40% width on desktop, 2 stacked) */}
        <div className="lg:col-span-5 xl:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
          {gallery.secondary && (
            <div 
              onClick={() => setLightboxImage(gallery.secondary!)}
              className="group relative h-[200px] sm:h-[220px] lg:h-[228px] w-full rounded-3xl bg-slate-100 border border-slate-200/70 shadow-xs overflow-hidden cursor-pointer hover:border-blue-900/40 hover:shadow-md transition-all"
            >
              <img
                src={gallery.secondary.url}
                alt={gallery.secondary.alt}
                className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/85 backdrop-blur-md border border-slate-200/60 flex items-center justify-center text-slate-700 opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all shadow-sm">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>
          )}

          {gallery.tertiary && (
            <div 
              onClick={() => setLightboxImage(gallery.tertiary!)}
              className="group relative h-[200px] sm:h-[220px] lg:h-[228px] w-full rounded-3xl bg-slate-100 border border-slate-200/70 shadow-xs overflow-hidden cursor-pointer hover:border-blue-900/40 hover:shadow-md transition-all"
            >
              <img
                src={gallery.tertiary.url}
                alt={gallery.tertiary.alt}
                className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/85 backdrop-blur-md border border-slate-200/60 flex items-center justify-center text-slate-700 opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all shadow-sm">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>
          )}
        </div>

      </div>

      {/* 4. Products Section — Extremely Clean Catalogue Rows */}
      <div className="pt-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-8 tracking-tight">
          Products
        </h2>

        {/* Two-column layout on desktop, single-column on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-0">
          
          {/* Left Column */}
          <div className="divide-y divide-slate-200/80 border-t border-slate-200/80">
            {leftColProducts.map((product, idx) => {
              const itemNumber = (idx + 1).toString().padStart(2, "0");
              return (
                <div
                  key={product.id}
                  onClick={() => onOpenRfq(product)}
                  className="group flex items-center justify-between py-4 px-2 hover:bg-slate-100/60 rounded-xl transition-all cursor-pointer"
                >
                  <div className="flex items-baseline gap-4 min-w-0 pr-4">
                    <span className="font-mono text-xs text-slate-400 font-semibold w-6 shrink-0 select-none">
                      {itemNumber}
                    </span>
                    <span className="font-medium text-sm sm:text-base text-slate-900 group-hover:text-blue-900 transition-colors leading-snug">
                      {product.name}
                    </span>
                  </div>

                  <div className="shrink-0 flex items-center gap-1.5 text-xs font-semibold text-blue-900 group-hover:translate-x-1 transition-all opacity-70 group-hover:opacity-100">
                    <span>Enquire</span>
                    <span className="text-sm">→</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column */}
          <div className="divide-y divide-slate-200/80 border-t border-slate-200/80 lg:border-t">
            {rightColProducts.map((product, idx) => {
              const itemNumber = (midpoint + idx + 1).toString().padStart(2, "0");
              return (
                <div
                  key={product.id}
                  onClick={() => onOpenRfq(product)}
                  className="group flex items-center justify-between py-4 px-2 hover:bg-slate-100/60 rounded-xl transition-all cursor-pointer"
                >
                  <div className="flex items-baseline gap-4 min-w-0 pr-4">
                    <span className="font-mono text-xs text-slate-400 font-semibold w-6 shrink-0 select-none">
                      {itemNumber}
                    </span>
                    <span className="font-medium text-sm sm:text-base text-slate-900 group-hover:text-blue-900 transition-colors leading-snug">
                      {product.name}
                    </span>
                  </div>

                  <div className="shrink-0 flex items-center gap-1.5 text-xs font-semibold text-blue-900 group-hover:translate-x-1 transition-all opacity-70 group-hover:opacity-100">
                    <span>Enquire</span>
                    <span className="text-sm">→</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* 5. Category Enquiry CTA */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-lg relative overflow-hidden border border-slate-800">
        <h3 className="text-2xl sm:text-3xl font-bold mb-3 tracking-tight">
          Need help selecting the right products?
        </h3>
        <p className="text-slate-300 text-sm sm:text-base mb-8 max-w-xl mx-auto leading-relaxed">
          Talk to our team about your industrial requirements, volume supply, and technical specifications.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => onOpenRfq()}
            className="px-6 py-3 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-bold text-sm shadow-md transition-all flex items-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span>Request an Enquiry</span>
          </button>
          
          <a
            href="https://wa.me/919408556985?text=Hello%20Varenyam,%20I%20am%20enquiring%20about%20products%20under%20the%20category:%20"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-sm transition-all flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>

      {/* 6. Clean Category Navigation */}
      <div className="flex items-center justify-between pt-8 border-t border-slate-200 text-xs sm:text-sm font-semibold">
        <button
          onClick={() => onSelectCategory(prevCategory.id)}
          className="text-slate-600 hover:text-blue-900 transition-colors flex items-center gap-2 group py-2"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          <span>{prevCategory.name}</span>
        </button>

        <button
          onClick={onBackToAll}
          className="text-slate-500 hover:text-blue-900 transition-colors uppercase tracking-wider text-xs py-2 px-3 rounded-lg hover:bg-slate-100"
        >
          All Categories
        </button>

        <button
          onClick={() => onSelectCategory(nextCategory.id)}
          className="text-slate-600 hover:text-blue-900 transition-colors flex items-center gap-2 group py-2"
        >
          <span>{nextCategory.name}</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center"
          >
            <div 
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[90vh] bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl flex flex-col"
            >
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all border border-white/20"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex-1 overflow-hidden flex items-center justify-center bg-black/40 p-4">
                <img
                  src={lightboxImage.url}
                  alt={lightboxImage.alt}
                  className="max-w-full max-h-[78vh] object-contain rounded-xl"
                />
              </div>

              {lightboxImage.caption && (
                <div className="p-4 bg-slate-900 border-t border-slate-800 text-center">
                  <p className="text-xs sm:text-sm font-medium text-slate-300">
                    {lightboxImage.caption}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  CATEGORIES, 
  PRODUCTS, 
  MEGA_MENU_GROUPS, 
  CategoryInfo, 
  ProductItem
} from "@/data/products";
import CategoryDetailView from "@/components/CategoryDetailView";
import { 
  Search, 
  SlidersHorizontal, 
  ArrowRight, 
  CheckCircle2, 
  X, 
  MessageSquare, 
  ChevronRight, 
  ShieldCheck, 
  Send, 
  Layers, 
  Flame, 
  Zap, 
  Activity, 
  Wrench, 
  Hammer, 
  Package, 
  Droplets, 
  Lock, 
  Plug, 
  CloudLightning, 
  Lightbulb, 
  Gauge, 
  ShowerHead, 
  Boxes, 
  Armchair, 
  Thermometer, 
  Container, 
  Box, 
  Truck, 
  Leaf, 
  AlertTriangle,
  Sparkles
} from "lucide-react";

// Icon mapping
const ICON_MAP: Record<string, React.ElementType> = {
  ShieldCheck,
  Flame,
  Zap,
  Activity,
  Wrench,
  Hammer,
  Package,
  Droplets,
  Sparkles,
  AlertTriangle,
  Lock,
  Plug,
  CloudLightning,
  Lightbulb,
  Gauge,
  ShowerHead,
  Boxes,
  Armchair,
  Thermometer,
  Container,
  Box,
  Truck,
  Leaf
};

interface ProductsSectionProps {
  initialCategoryId?: string;
  limit?: number;
  showViewAllButton?: boolean;
}

function ProductsSectionInner({
  initialCategoryId = "all",
  limit,
  showViewAllButton = true
}: ProductsSectionProps) {
  const searchParams = useSearchParams();
  const urlCategory = searchParams?.get("category");

  const [selectedCategory, setSelectedCategory] = useState<string>(urlCategory || initialCategoryId);
  const [activeMegaGroup, setActiveMegaGroup] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeModalProduct, setActiveModalProduct] = useState<ProductItem | null>(null);

  // Enquiry form state inside modal
  const [enquiryForm, setEnquiryForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    quantity: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Sync with URL param if it changes
  useEffect(() => {
    if (urlCategory) {
      setSelectedCategory(urlCategory);
    }
  }, [urlCategory]);

  // Sync with initialCategoryId prop
  useEffect(() => {
    if (initialCategoryId && !urlCategory) {
      setSelectedCategory(initialCategoryId);
    }
  }, [initialCategoryId, urlCategory]);

  // Filter categories by megaGroup
  const filteredCategories = useMemo(() => {
    if (activeMegaGroup === "all") return CATEGORIES;
    return CATEGORIES.filter(c => c.megaGroup === activeMegaGroup);
  }, [activeMegaGroup]);

  // When a category is selected, get its full data
  const selectedCategoryData = useMemo(() => {
    if (selectedCategory === "all") return null;
    return CATEGORIES.find(c => c.id === selectedCategory) || null;
  }, [selectedCategory]);

  // Products belonging to the selected category
  const categoryProducts = useMemo(() => {
    if (!selectedCategory || selectedCategory === "all") return [];
    return PRODUCTS.filter(p => p.categoryId === selectedCategory);
  }, [selectedCategory]);

  // Global search results across all 209 products
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.trim().toLowerCase();
    return PRODUCTS.filter(p => 
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tags.some(t => t.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  const handleEnquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const payload = {
        product: activeModalProduct?.name,
        category: activeModalProduct?.category,
        ...enquiryForm
      };
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "YOUR_ACCESS_KEY_HERE",
          subject: `Product RFQ: ${activeModalProduct?.name} - ${enquiryForm.company || enquiryForm.name}`,
          ...payload
        })
      });
      setSubmitSuccess(true);
      setTimeout(() => {
        setSubmitSuccess(false);
        setActiveModalProduct(null);
        setEnquiryForm({ name: "", company: "", email: "", phone: "", quantity: "", message: "" });
      }, 2500);
    } catch {
      setSubmitSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="catalog" className="py-12 sm:py-16 md:py-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Section Header (Shown when browsing categories) */}
        {selectedCategory === "all" && !searchQuery && (
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-4">
              <Layers className="w-3.5 h-3.5 text-blue-900" />
              <span>Product Catalogue</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
              Industrial Solutions <span className="text-blue-900">&amp; Categories</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Comprehensive 23-category portfolio representing 209 certified products under one roof for greenfield projects and plant maintenance.
            </p>
          </div>
        )}

        {/* Global Search & Quick Category Selector */}
        <div className="bg-slate-50/80 p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-2xs mb-10 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (e.target.value.trim() && selectedCategory !== "all") {
                    setSelectedCategory("all");
                  }
                }}
                placeholder="Search products (e.g. helmet, atex, esd, loto)..."
                className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Dropdown Navigation */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 shrink-0">
                <SlidersHorizontal className="w-3.5 h-3.5 text-blue-900" />
                <span>Jump to:</span>
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  setSearchQuery("");
                }}
                className="w-full md:w-72 px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-900"
              >
                <option value="all">All 23 Categories</option>
                {CATEGORIES.map((cat, idx) => (
                  <option key={cat.id} value={cat.id}>
                    {idx + 1}. {cat.name} ({cat.count})
                  </option>
                ))}
              </select>
            </div>

          </div>

          {/* Active Filter / Search Tag */}
          {(selectedCategory !== "all" || searchQuery) && (
            <div className="flex items-center gap-2 pt-3 mt-3 border-t border-slate-200/60 flex-wrap text-xs">
              <span className="text-slate-500 font-medium">Active:</span>
              {selectedCategory !== "all" && selectedCategoryData && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-blue-50 text-blue-900 rounded-lg font-semibold border border-blue-200">
                  {selectedCategoryData.name} ({selectedCategoryData.count} products)
                  <button onClick={() => setSelectedCategory("all")} className="hover:text-red-500 ml-1">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {searchQuery && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-slate-200 text-slate-800 rounded-lg font-semibold">
                  Search: &quot;{searchQuery}&quot;
                  <button onClick={() => setSearchQuery("")} className="hover:text-red-500 ml-1">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              <button
                onClick={() => { setSelectedCategory("all"); setSearchQuery(""); }}
                className="text-slate-500 hover:text-blue-900 underline font-medium ml-2"
              >
                All Categories
              </button>
              {searchQuery && (
                <span className="ml-auto text-slate-500 font-medium">
                  {searchResults.length} matching products
                </span>
              )}
            </div>
          )}
        </div>

        {/* ========================================================================= */}
        {/* VIEW 1: SEARCH RESULTS (Clean catalogue rows, no cards, no descriptions)  */}
        {/* ========================================================================= */}
        {searchQuery ? (
          <div className="space-y-6 max-w-5xl mx-auto">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Products matching &quot;{searchQuery}&quot;
                <span className="text-sm font-normal text-slate-500 ml-2">
                  ({searchResults.length})
                </span>
              </h3>
              <button
                onClick={() => setSearchQuery("")}
                className="text-xs font-semibold text-blue-900 hover:underline"
              >
                Clear
              </button>
            </div>

            {searchResults.length === 0 ? (
              <div className="py-16 text-center text-slate-500">
                <p className="text-base font-semibold mb-2">No products found matching &quot;{searchQuery}&quot;</p>
                <p className="text-xs text-slate-400 mb-6">Try searching for a different keyword or explore our 23 categories.</p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="px-5 py-2 bg-blue-900 text-white text-xs font-semibold rounded-xl hover:bg-blue-800 transition-colors"
                >
                  Browse All Categories
                </button>
              </div>
            ) : (
              <div className="divide-y divide-slate-200/80 border-t border-slate-200/80">
                {searchResults.map((product, pIdx) => {
                  const itemNumber = (pIdx + 1).toString().padStart(2, "0");
                  return (
                    <div
                      key={product.id}
                      className="group flex items-center justify-between py-4 px-2 hover:bg-slate-50 rounded-xl transition-all"
                    >
                      <div className="flex items-baseline gap-4 min-w-0 pr-4">
                        <span className="font-mono text-xs text-slate-400 font-semibold w-6 shrink-0 select-none">
                          {itemNumber}
                        </span>
                        <div>
                          <div className="flex items-center gap-2 mb-0.5">
                            <button
                              onClick={() => {
                                setSelectedCategory(product.categoryId);
                                setSearchQuery("");
                              }}
                              className="text-[11px] font-semibold text-blue-900 hover:underline inline-block"
                            >
                              {product.category} →
                            </button>
                          </div>
                          <span className="font-medium text-sm sm:text-base text-slate-900 group-hover:text-blue-900 transition-colors leading-snug">
                            {product.name}
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => setActiveModalProduct(product)}
                        className="shrink-0 flex items-center gap-1.5 text-xs font-semibold text-blue-900 hover:text-blue-700 transition-colors px-3 py-1.5 rounded-lg hover:bg-blue-50"
                      >
                        <span>Enquire</span>
                        <span className="text-sm">→</span>
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ) : selectedCategory !== "all" && selectedCategoryData ? (
          /* ========================================================================= */
          /* VIEW 2: CATEGORY DETAIL VIEW (Zero individual image cards, client layout) */
          /* ========================================================================= */
          <CategoryDetailView
            category={selectedCategoryData}
            products={categoryProducts}
            allCategories={CATEGORIES}
            onSelectCategory={(cid) => {
              setSelectedCategory(cid);
              window.scrollTo({ top: 280, behavior: "smooth" });
            }}
            onOpenRfq={(prod) => {
              setActiveModalProduct(prod || {
                id: selectedCategoryData.id,
                name: selectedCategoryData.name,
                category: selectedCategoryData.name,
                categoryId: selectedCategoryData.id,
                description: selectedCategoryData.description,
                image: selectedCategoryData.image,
                tags: []
              });
            }}
            onBackToAll={() => {
              setSelectedCategory("all");
              window.scrollTo({ top: 280, behavior: "smooth" });
            }}
          />
        ) : (
          /* ========================================================================= */
          /* VIEW 3: ALL 23 CATEGORIES DISCOVERY PAGE (Clean category cards)           */
          /* ========================================================================= */
          <div>
            {/* Domain Filter Tabs */}
            <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
              <button
                onClick={() => setActiveMegaGroup("all")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeMegaGroup === "all"
                    ? "bg-blue-900 text-white shadow-xs"
                    : "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200/80"
                }`}
              >
                All Categories ({CATEGORIES.length})
              </button>
              {MEGA_MENU_GROUPS.map((group) => (
                <button
                  key={group.id}
                  onClick={() => setActiveMegaGroup(group.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    activeMegaGroup === group.id
                      ? "bg-blue-900 text-white shadow-xs"
                      : "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200/80"
                  }`}
                >
                  {group.title}
                </button>
              ))}
            </div>

            {/* 23 Category Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCategories.map((cat) => {
                const IconComp = ICON_MAP[cat.icon] || ShieldCheck;
                return (
                  <motion.div
                    key={cat.id}
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      window.scrollTo({ top: 280, behavior: "smooth" });
                    }}
                    className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs hover:shadow-md hover:border-blue-900/30 transition-all cursor-pointer flex flex-col justify-between group"
                  >
                    <div>
                      {/* Image Header with Thumbnail */}
                      <div className="h-44 w-full bg-slate-100 rounded-xl flex items-center justify-center mb-4 border border-slate-100 overflow-hidden relative">
                        <img
                          src={cat.image}
                          alt={cat.name}
                          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute top-2.5 right-2.5 px-2.5 py-0.5 bg-white/95 backdrop-blur-md rounded-md shadow-2xs border border-slate-200 text-[11px] font-bold text-slate-800">
                          {cat.count} products
                        </div>
                      </div>

                      {/* Icon + Title */}
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-900 flex items-center justify-center shrink-0 group-hover:bg-blue-900 group-hover:text-white transition-colors">
                          <IconComp className="w-3.5 h-3.5" />
                        </div>
                        <h3 className="font-bold text-slate-900 text-base group-hover:text-blue-900 transition-colors leading-snug">
                          {cat.name}
                        </h3>
                      </div>

                      {/* Short Category Context */}
                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-4">
                        {cat.description}
                      </p>
                    </div>

                    {/* CTA link */}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-900 group-hover:translate-x-1 transition-transform">
                      <span>Explore Category</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* View All CTA if limited on homepage */}
            {showViewAllButton && limit && limit < CATEGORIES.length && (
              <div className="text-center pt-12">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all transform hover:-translate-y-0.5"
                >
                  <span>Explore Complete 23 Categories</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )}
          </div>
        )}

      </div>

      {/* ========================================================================= */}
      {/* RFQ ENQUIRY MODAL (Pre-filled product & category)                         */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {activeModalProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200 max-h-[92vh] overflow-y-auto"
            >
              <button
                onClick={() => setActiveModalProduct(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Product Header */}
              <div className="mb-6 pr-8">
                <span className="px-2.5 py-0.5 bg-slate-100 text-slate-700 text-[11px] font-semibold rounded-md border border-slate-200 mb-1.5 inline-block">
                  {activeModalProduct.category}
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 leading-snug">
                  {activeModalProduct.name}
                </h3>
              </div>

              {/* Modal Form */}
              {submitSuccess ? (
                <div className="py-12 text-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Enquiry Received</h4>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                    Thank you. Our industrial specialists will contact you shortly with technical details and quotation.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleEnquirySubmit} className="space-y-4 pt-2 border-t border-slate-100">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={enquiryForm.name}
                        onChange={(e) => setEnquiryForm({ ...enquiryForm, name: e.target.value })}
                        placeholder="e.g. Rajesh Kumar"
                        className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Company / Facility *</label>
                      <input
                        type="text"
                        required
                        value={enquiryForm.company}
                        onChange={(e) => setEnquiryForm({ ...enquiryForm, company: e.target.value })}
                        placeholder="Company or Factory Name"
                        className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Work Email *</label>
                      <input
                        type="email"
                        required
                        value={enquiryForm.email}
                        onChange={(e) => setEnquiryForm({ ...enquiryForm, email: e.target.value })}
                        placeholder="procurement@company.com"
                        className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Mobile / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        value={enquiryForm.phone}
                        onChange={(e) => setEnquiryForm({ ...enquiryForm, phone: e.target.value })}
                        placeholder="+91 94085 56985"
                        className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Estimated Quantity / Notes</label>
                    <textarea
                      rows={3}
                      value={enquiryForm.message}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, message: e.target.value })}
                      placeholder="Specify estimated quantity, project timeline, and delivery site."
                      className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900 resize-none"
                    />
                  </div>

                  <div className="flex items-center justify-between gap-4 pt-2">
                    <a
                      href={`https://wa.me/919408556985?text=Hello%20Varenyam,%20I%20am%20enquiring%20about%20${encodeURIComponent(activeModalProduct.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1.5"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>WhatsApp RFQ</span>
                    </a>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-2.5 bg-blue-900 hover:bg-blue-800 text-white font-semibold text-xs rounded-xl shadow-xs transition-colors flex items-center gap-2 disabled:opacity-60"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{isSubmitting ? "Submitting..." : "Submit Enquiry"}</span>
                    </button>
                  </div>
                </form>
              )}

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

export default function ProductsSection(props: ProductsSectionProps) {
  return (
    <Suspense fallback={<div className="py-24 text-center text-slate-400">Loading Catalogue...</div>}>
      <ProductsSectionInner {...props} />
    </Suspense>
  );
}

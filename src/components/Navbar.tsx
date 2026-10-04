"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, 
  X, 
  ChevronDown, 
  ArrowRight,
  ArrowUpRight, 
  Gift, 
  ShieldCheck, 
  Wrench, 
  Cpu, 
  AlertTriangle, 
  Boxes,
  Phone,
  Search
} from "lucide-react";
import { MEGA_MENU_GROUPS, CATEGORIES, CategoryInfo } from "@/data/products";

const DOMAIN_ICONS: Record<string, React.ElementType> = {
  safety: ShieldCheck,
  tools: Wrench,
  systems: Cpu,
  workplace: AlertTriangle,
  storage: Boxes
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [mobileExpandedGroup, setMobileExpandedGroup] = useState<string | null>(null);
  const megaMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (megaMenuTimeoutRef.current) clearTimeout(megaMenuTimeoutRef.current);
    setIsMegaMenuOpen(true);
  };

  const handleMouseLeave = () => {
    megaMenuTimeoutRef.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, 200);
  };

  // Close mega menu on route change
  useEffect(() => {
    setIsMegaMenuOpen(false);
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-200 ${
          isScrolled 
            ? "bg-white/98 backdrop-blur-md shadow-md border-b border-slate-200/90 py-2.5" 
            : "bg-white/95 backdrop-blur-md border-b border-slate-200/70 py-3.5"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          {/* OFFICIAL LOGO (Hard Brand Rule: Original logo.png, zero color modification, zero inversion) */}
          <Link href="/" className="flex items-center group py-0.5" title="Varenyam Industrial Suppliers">
            <img 
              src="/assets/images/logo.png" 
              alt="Varenyam Industrial Suppliers Official Logo" 
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105" 
            />
          </Link>

          {/* Desktop Navigation Links matching Reference Design */}
          <nav className="hidden lg:flex items-center gap-7">
            <Link
              href="/"
              className={`text-sm font-bold transition-colors py-1 ${
                pathname === "/" ? "text-blue-900 border-b-2 border-blue-900" : "text-slate-700 hover:text-blue-900"
              }`}
            >
              Home
            </Link>

            {/* Industrial Solutions with Mega Menu Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/products"
                className={`text-sm font-bold transition-colors flex items-center gap-1 py-1 ${
                  pathname.startsWith("/products") ? "text-blue-900 border-b-2 border-blue-900" : "text-slate-700 hover:text-blue-900"
                }`}
              >
                <span>Industrial Solutions</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMegaMenuOpen ? "rotate-180 text-blue-900" : ""}`} />
              </Link>

              {/* Desktop Mega Menu Dropdown Drawer */}
              <AnimatePresence>
                {isMegaMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-[980px] bg-white rounded-3xl shadow-2xl border border-slate-200/90 p-8 mt-3 z-50"
                  >
                    <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
                      <div>
                        <div className="text-xs font-bold text-blue-900 uppercase tracking-wider">
                          Official Brochure Catalogue (23 Categories | 209 Products)
                        </div>
                        <h4 className="text-lg font-extrabold text-slate-900">
                          Complete Industrial Procurement Under One Roof
                        </h4>
                      </div>
                      <Link
                        href="/products"
                        onClick={() => setIsMegaMenuOpen(false)}
                        className="text-xs font-bold text-blue-900 hover:text-blue-950 flex items-center gap-1.5 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-200/60 transition-colors"
                      >
                        <span>View Full Catalog</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    {/* 5-Column Mega Menu Domains */}
                    <div className="grid grid-cols-5 gap-6">
                      {MEGA_MENU_GROUPS.map((group) => {
                        const IconComp = DOMAIN_ICONS[group.id] || ShieldCheck;
                        return (
                          <div key={group.id} className="space-y-3">
                            <div className="flex items-center gap-2 pb-1.5 border-b border-slate-100">
                              <IconComp className="w-4 h-4 text-blue-900 shrink-0" />
                              <h5 className="text-[11px] font-extrabold text-slate-900 uppercase tracking-wider leading-tight">
                                {group.title}
                              </h5>
                            </div>

                            <ul className="space-y-1.5 text-xs">
                              {group.categoryIds.map((catId) => {
                                const cat = CATEGORIES.find(c => c.id === catId);
                                if (!cat) return null;
                                return (
                                  <li key={cat.id}>
                                    <Link
                                      href={`/products?category=${cat.id}#catalog`}
                                      onClick={() => setIsMegaMenuOpen(false)}
                                      className="text-slate-600 hover:text-blue-900 hover:bg-slate-50 block px-2 py-1 rounded-lg font-medium transition-colors line-clamp-1"
                                      title={cat.name}
                                    >
                                      {cat.name}
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 bg-slate-50/70 -mx-8 -mb-8 p-4 px-8 rounded-b-3xl flex items-center justify-between text-xs text-slate-600">
                      <div className="flex items-center gap-4">
                        <span className="font-semibold text-slate-900">Project Lifecycle Support:</span>
                        <span>• Planning & Procurement</span>
                        <span>• Installation</span>
                        <span>• Commissioning</span>
                        <span>• Operational Support / AMC</span>
                      </div>
                      <Link
                        href="/contact"
                        onClick={() => setIsMegaMenuOpen(false)}
                        className="font-bold text-blue-900 hover:underline flex items-center gap-1"
                      >
                        <span>Need Technical Consultation?</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/corporate-gifting"
              className={`text-sm font-bold transition-colors py-1 ${
                pathname === "/corporate-gifting"
                  ? "text-blue-900 border-b-2 border-blue-900"
                  : "text-slate-700 hover:text-blue-900"
              }`}
            >
              Corporate Gifting
            </Link>

            <Link
              href="/about"
              className={`text-sm font-bold transition-colors py-1 ${
                pathname === "/about" ? "text-blue-900 border-b-2 border-blue-900" : "text-slate-700 hover:text-blue-900"
              }`}
            >
              About
            </Link>

            <Link
              href="/industries"
              className={`text-sm font-bold transition-colors py-1 ${
                pathname === "/industries" ? "text-blue-900 border-b-2 border-blue-900" : "text-slate-700 hover:text-blue-900"
              }`}
            >
              Industries
            </Link>

            <Link
              href="/contact"
              className={`text-sm font-bold transition-colors py-1 ${
                pathname === "/contact" ? "text-blue-900 border-b-2 border-blue-900" : "text-slate-700 hover:text-blue-900"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Action Button: Get in touch ↗ */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-blue-950 hover:bg-blue-900 text-white text-xs font-bold rounded-lg shadow-md shadow-blue-950/20 transition-all transform hover:-translate-y-0.5 flex items-center gap-2 group"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="lg:hidden p-2 rounded-xl border border-slate-200 text-slate-800 hover:bg-slate-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open mobile navigation"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Accordion Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-[9999] flex flex-col text-slate-900 overflow-y-auto"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.25 }}
          >
            {/* Mobile Header */}
            <div className="container mx-auto px-5 py-4 flex items-center justify-between border-b border-slate-200">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                <img 
                  src="/assets/images/logo.png" 
                  alt="Varenyam Industrial Suppliers Logo" 
                  className="h-10 w-auto object-contain" 
                />
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-slate-700 hover:bg-slate-100 rounded-xl transition-colors"
                aria-label="Close navigation"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Links & Category Accordion */}
            <div className="flex-grow p-6 space-y-6 overflow-y-auto">
              <div className="space-y-3">
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-base font-extrabold text-slate-900 hover:text-blue-900"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-base font-extrabold text-slate-900 hover:text-blue-900"
                >
                  About Us
                </Link>
                <Link
                  href="/industries"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-base font-extrabold text-slate-900 hover:text-blue-900"
                >
                  Industries We Serve
                </Link>
                <Link
                  href="/#services"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-base font-extrabold text-slate-900 hover:text-blue-900"
                >
                  Technical Services
                </Link>
                <Link
                  href="/corporate-gifting"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-base font-extrabold text-slate-900 hover:text-blue-900"
                >
                  Corporate Gifting
                </Link>
              </div>

              {/* Product Categories Accordion */}
              <div className="pt-4 border-t border-slate-200">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Product Catalogue (23 Categories)
                </div>

                <div className="space-y-3">
                  {MEGA_MENU_GROUPS.map((group) => {
                    const isExpanded = mobileExpandedGroup === group.id;
                    const IconComp = DOMAIN_ICONS[group.id] || ShieldCheck;
                    return (
                      <div key={group.id} className="border border-slate-200 rounded-2xl overflow-hidden">
                        <button
                          onClick={() => setMobileExpandedGroup(isExpanded ? null : group.id)}
                          className="w-full px-4 py-3 bg-slate-50 flex items-center justify-between text-left font-bold text-xs text-slate-800"
                        >
                          <div className="flex items-center gap-2">
                            <IconComp className="w-4 h-4 text-blue-900" />
                            <span>{group.title}</span>
                          </div>
                          <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                        </button>

                        {isExpanded && (
                          <div className="p-3 bg-white space-y-2 border-t border-slate-200 text-xs">
                            {group.categoryIds.map((catId) => {
                              const cat = CATEGORIES.find(c => c.id === catId);
                              if (!cat) return null;
                              return (
                                <Link
                                  key={cat.id}
                                  href={`/products?category=${cat.id}#catalog`}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="block py-1.5 px-2 text-slate-600 hover:text-blue-900 hover:bg-slate-50 rounded-lg font-medium"
                                >
                                  {cat.name} ({cat.count})
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="pt-6 border-t border-slate-200 space-y-3">
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-3.5 bg-blue-900 hover:bg-blue-800 text-white font-bold text-sm rounded-xl shadow-md flex items-center justify-center gap-2"
                >
                  <span>Request an Enquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="tel:+919408556985"
                  className="w-full py-3 bg-slate-100 text-slate-800 font-bold text-xs rounded-xl flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-blue-900" />
                  <span>Call: +91 94085 56985</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

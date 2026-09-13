"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Gift, ArrowRight } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Industrial Catalog", path: "/products" },
  { name: "Corporate Gifting", path: "/products#corporate-gifting" },
  { name: "Industries", path: "/industries" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";
  const shouldHaveSolidBg = isScrolled || !isHome;

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          shouldHaveSolidBg 
            ? "bg-[#0F294D]/95 backdrop-blur-xl border-b border-white/10 py-3 shadow-xl text-white" 
            : "bg-gradient-to-b from-[#0F294D]/90 via-[#0F294D]/40 to-transparent py-4 text-white"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center group py-1">
            <img 
              src="/assets/images/logo-white.png" 
              alt="Varenyam Industrial Suppliers Logo" 
              className="h-11 sm:h-13 w-auto object-contain transition-all duration-300" 
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`text-sm font-semibold transition-all flex items-center gap-1.5 relative py-1 ${
                    isActive
                      ? "text-sky-300 font-bold border-b-2 border-sky-400"
                      : "text-white/85 hover:text-white"
                  }`}
                >
                  {link.name === "Corporate Gifting" && <Gift className="w-3.5 h-3.5 text-amber-400" />}
                  {link.name}
                </Link>
              );
            })}

            <Link
              href="/contact"
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-full shadow-lg shadow-blue-600/30 transition-all transform hover:-translate-y-0.5 flex items-center gap-1.5 border border-blue-400/20"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 rounded-xl border text-white border-white/20 bg-white/10"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.header>

      {/* Full-Screen Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-[#0F294D]/98 backdrop-blur-2xl z-[9999] flex flex-col text-white overflow-y-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-6 py-5 flex items-center justify-between border-b border-white/10">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="py-1">
                <img 
                  src="/assets/images/logo-white.png" 
                  alt="Varenyam Logo" 
                  className="h-12 w-auto object-contain" 
                />
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-white hover:bg-white/10 rounded-xl transition-colors"
              >
                <X className="w-7 h-7" />
              </button>
            </div>

            <div className="flex flex-col items-center justify-center flex-grow gap-6 px-6 py-12">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-xl font-bold tracking-wide transition-colors flex items-center gap-2 ${
                    pathname === link.path ? "text-sky-300" : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.name === "Corporate Gifting" && <Gift className="w-5 h-5 text-amber-400" />}
                  {link.name}
                </Link>
              ))}
              
              <div className="w-full max-w-xs pt-6 mt-4 border-t border-white/10">
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-4 bg-primary text-white text-center font-bold text-base rounded-xl shadow-lg flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors"
                >
                  Get a Quote <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Products", path: "/products" },
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
        className={`fixed top-0 left-0 right-0 z-[100] transition-colors duration-300 ${
          shouldHaveSolidBg ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group py-2">
            <img 
              src="/assets/images/logo.png?v=2" 
              alt="Varenyam Logo" 
              className={`h-16 md:h-20 w-auto object-contain transition-all duration-300 ${shouldHaveSolidBg ? "" : "brightness-0 invert"}`} 
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === link.path
                    ? "text-primary font-semibold"
                    : shouldHaveSolidBg
                    ? "text-text-dark/80"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-primary text-white text-sm font-semibold rounded-md shadow-md shadow-primary/20 hover:bg-primary-deep transition-all transform hover:-translate-y-0.5"
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden p-2 rounded-md ${shouldHaveSolidBg ? "text-text-dark" : "text-white"}`}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </motion.header>

      {/* Full-Screen Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-[9999] flex flex-col md:hidden overflow-y-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-6 py-4 flex items-center justify-between border-b border-gray-100">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="py-2">
                <img 
                  src="/assets/images/logo.png?v=2" 
                  alt="Varenyam Logo" 
                  className="h-16 w-auto object-contain" 
                />
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-text-dark hover:bg-gray-100 rounded-md transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            <div className="flex flex-col items-center justify-center flex-grow gap-8 px-6 py-12">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-2xl font-bold tracking-wide transition-colors ${
                    pathname === link.path ? "text-primary" : "text-text-dark hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="w-full max-w-xs pt-8 mt-4 border-t border-gray-100">
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-4 bg-primary text-white text-center font-bold text-lg rounded-xl shadow-lg shadow-primary/30 flex items-center justify-center hover:bg-primary-deep transition-colors"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

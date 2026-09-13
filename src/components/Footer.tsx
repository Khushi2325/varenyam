"use client";

import Link from "next/link";
import { ShieldCheck, MapPin, Phone, Mail, Globe, Gift, ArrowUpRight } from "lucide-react";
import { CATEGORIES } from "@/data/products";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Top Back Cover Headline Banner */}
        <div className="bg-gradient-to-r from-primary-deep via-blue-900 to-slate-900 rounded-3xl p-8 sm:p-12 mb-16 border border-white/10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-400/20 text-amber-300 text-xs font-bold rounded-full border border-amber-400/30 mb-3">
              <Gift className="w-3.5 h-3.5" />
              <span>VARENYAM INDUSTRIAL SUPPLIERS</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
              Let's Build a Safer Workplace Together
            </h3>
            <p className="text-sky-200 text-sm sm:text-base mt-2 font-medium">
              Protecting People. Safeguarding Assets. Ensuring Compliance.
            </p>
          </div>

          <Link
            href="/contact"
            className="px-8 py-4 bg-amber-400 text-slate-950 font-extrabold rounded-2xl shadow-xl shadow-amber-400/20 hover:bg-amber-300 transition-all shrink-0 flex items-center gap-2"
          >
            <span>Connect With Us</span>
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block">
              <img 
                src="/assets/images/logo-white.png" 
                alt="Varenyam Logo" 
                className="h-16 w-auto object-contain" 
              />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              Your single-source partner for complete industrial safety gear, ATEX explosion-proof systems, ESD protection, turnkey project procurement, and bespoke corporate gifting solutions.
            </p>
            <p className="text-xs text-amber-300/90 font-semibold tracking-wider uppercase">
              From Concept to Commissioning.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-base font-bold text-white tracking-wide">Company</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="/" className="hover:text-amber-300 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-amber-300 transition-colors">About Us</Link></li>
              <li><Link href="/products" className="hover:text-amber-300 transition-colors">Industrial Catalog</Link></li>
              <li><Link href="/products#corporate-gifting" className="hover:text-amber-300 transition-colors">Corporate Gifting</Link></li>
              <li><Link href="/industries" className="hover:text-amber-300 transition-colors">Industries We Serve</Link></li>
              <li><Link href="/contact" className="hover:text-amber-300 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Col 3: Key Product Sectors */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-base font-bold text-white tracking-wide">Key Portfolio</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="/products#ppe-safety" className="hover:text-sky-300 transition-colors">Industrial Safety & PPE Kits</Link></li>
              <li><Link href="/products#fire-safety" className="hover:text-sky-300 transition-colors">Fire Detection & Suppression</Link></li>
              <li><Link href="/products#atex-explosion" className="hover:text-sky-300 transition-colors">ATEX Explosion-Proof Products</Link></li>
              <li><Link href="/products#static-esd" className="hover:text-sky-300 transition-colors">Static Earthing & ESD Systems</Link></li>
              <li><Link href="/products#hand-tools" className="hover:text-sky-300 transition-colors">Non-Sparking Hand Tools</Link></li>
              <li><Link href="/products#corporate-gifting" className="hover:text-amber-300 transition-colors">Executive Gifting & Merch</Link></li>
            </ul>
          </div>

          {/* Col 4: Official Contact Information */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-base font-bold text-white tracking-wide">Contact Details</h4>
            <ul className="space-y-3 text-sm text-white/75">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed">
                  VARENYAM INDUSTRIAL SUPPLIERS<br />
                  Vadodara, Gujarat, India
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span className="text-xs">+91 94085 56985</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:varenyamindustries@gmail.com" className="text-xs text-sky-300 hover:underline">
                  varenyamindustries@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-primary shrink-0" />
                <span className="text-xs">www.varenyamindustrial.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <p>© {new Date().getFullYear()} Varenyam Industrial Suppliers. All rights reserved.</p>
          <p className="text-amber-300/80 font-medium">Protecting People. Safeguarding Assets. Ensuring Compliance.</p>
        </div>

      </div>
    </footer>
  );
}

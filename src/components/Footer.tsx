"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, Globe, ArrowUpRight, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#0a1b42] to-[#06112a] text-white pt-20 pb-12 border-t border-blue-900/50 relative overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Top Back-Cover Headline Banner (From Official Brochure) */}
        <div className="bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 rounded-3xl p-8 sm:p-12 mb-16 border border-blue-400/25 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-400/20 text-amber-300 text-xs font-bold rounded-lg border border-amber-400/30 mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>VARENYAM INDUSTRIAL SUPPLIERS</span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
              Let&apos;s Build a Safer Workplace Together
            </h3>
            <p className="text-amber-300 text-xs sm:text-sm font-bold tracking-wider mt-2 uppercase">
              Industrial Safety | Fire Safety | ATEX | ESD | Static Grounding | Technical Services
            </p>
            <p className="text-sky-200 text-xs sm:text-sm font-medium mt-1">
              Protecting People. Safeguarding Assets. Ensuring Compliance.
            </p>
          </div>

          <Link
            href="/contact"
            className="px-8 py-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs sm:text-sm rounded-2xl shadow-xl shadow-amber-400/20 transition-all shrink-0 flex items-center gap-2"
          >
            <span>Request an RFQ</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-16">
          
          {/* Col 1: Brand Info & Official Logo */}
          <div className="lg:col-span-4 space-y-5">
            {/* PRISTINE LOGO CONTAINER: High-contrast white container preserving original logo untouched */}
            <Link href="/" className="inline-block bg-white p-3 sm:p-3.5 rounded-2xl shadow-lg border border-slate-200 group">
              <img 
                src="/assets/images/logo.png" 
                alt="Varenyam Industrial Suppliers Official Logo" 
                className="h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105" 
              />
            </Link>

            <div>
              <p className="text-xs font-extrabold text-amber-300 uppercase tracking-widest">
                From Concept to Commissioning.
              </p>
              <p className="text-xs font-bold text-sky-200 mt-0.5">
                Your Trusted Partner for Complete Industrial Solutions.
              </p>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Single-source B2B supplier for certified industrial safety PPE, ATEX explosion-proof systems, ESD protection, turnkey project procurement, and technical engineering services.
            </p>
          </div>

          {/* Col 2: Safety & ATEX Portfolios */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider">
              Safety & ATEX Portfolios
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/products?category=industrial-safety-ppe#catalog" className="hover:text-white transition-colors">Industrial Safety & PPE (17)</Link></li>
              <li><Link href="/products?category=fire-safety-equipment#catalog" className="hover:text-white transition-colors">Fire Safety Equipment (17)</Link></li>
              <li><Link href="/products?category=explosion-proof-atex#catalog" className="hover:text-white transition-colors">ATEX Explosion-Proof (16)</Link></li>
              <li><Link href="/products?category=static-earthing-esd#catalog" className="hover:text-white transition-colors">Static Earthing & ESD (15)</Link></li>
              <li><Link href="/products?category=gas-detection-systems#catalog" className="hover:text-white transition-colors">Gas Detection Systems (6)</Link></li>
              <li><Link href="/products?category=process-safety-equipment#catalog" className="hover:text-white transition-colors">Process Safety Equipment (6)</Link></li>
            </ul>
          </div>

          {/* Col 3: Systems & Tools */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider">
              Systems & Equipment
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/products?category=hand-tools#catalog" className="hover:text-white transition-colors">Hand Tools (Non-Sparking)</Link></li>
              <li><Link href="/products?category=power-tools#catalog" className="hover:text-white transition-colors">Power Tools & Hydraulics</Link></li>
              <li><Link href="/products?category=material-handling-equipment#catalog" className="hover:text-white transition-colors">Material Handling Equipment</Link></li>
              <li><Link href="/products?category=lockout-tagout-loto#catalog" className="hover:text-white transition-colors">Lockout Tagout (LOTO)</Link></li>
              <li><Link href="/products?category=industrial-electrical-accessories#catalog" className="hover:text-white transition-colors">Electrical Accessories</Link></li>
              <li><Link href="/products?category=measuring-testing-instruments#catalog" className="hover:text-white transition-colors">Measuring & Testing Instruments</Link></li>
            </ul>
          </div>

          {/* Col 4: Corporate Office & Contact */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider">
              Contact & Inquiries
            </h4>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  VARENYAM INDUSTRIAL SUPPLIERS<br />
                  Vadodara, Gujarat, India
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="tel:+919408556985" className="hover:text-white font-medium">
                  +91 94085 56985
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="mailto:varenyamindustries@gmail.com" className="hover:text-sky-300 transition-colors">
                  varenyamindustries@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-sky-400 shrink-0" />
                <span>www.varenyamindustrial.com</span>
              </li>
            </ul>

            <div className="pt-2">
              <Link
                href="/corporate-gifting"
                className="text-xs font-bold text-amber-300 hover:text-amber-200 flex items-center gap-1.5 p-2 rounded-xl bg-amber-400/10 border border-amber-400/20"
              >
                <span>Looking for Corporate Gifting? Explore Collections →</span>
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Slogan */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {currentYear} Varenyam Industrial Suppliers. All rights reserved.</p>
          <p className="text-amber-300/80 font-semibold tracking-wider text-center sm:text-right">
            From Concept to Commissioning. Protecting People. Safeguarding Assets. Ensuring Compliance.
          </p>
        </div>

      </div>
    </footer>
  );
}

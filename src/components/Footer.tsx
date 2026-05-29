"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, ShieldCheck, Globe } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-deep text-white/90 pt-16 pb-8 border-t border-primary/20">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Brand Info */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="inline-flex mb-4">
            <img 
              src="/assets/images/logo.png?v=2" 
              alt="Varenyam Logo" 
              className="h-24 md:h-28 w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity" 
            />
          </Link>
          <p className="text-white/70 text-sm leading-relaxed mb-4">
            One Step Solutions for all your industrial and corporate needs. Premium B2B supplier of quality safety gear, PPE kits, and corporate essentials.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary transition-colors text-white" aria-label="Website">
              <Globe className="w-4 h-4" />
            </a>
          </div>
        </div>


        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-6 text-white flex items-center gap-2">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <Link href="/about" className="text-white/70 hover:text-white transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-light/50"></span> About Us
              </Link>
            </li>
            <li>
              <Link href="/products" className="text-white/70 hover:text-white transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-light/50"></span> Products
              </Link>
            </li>
            <li>
              <Link href="/industries" className="text-white/70 hover:text-white transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-light/50"></span> Industries Served
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-white/70 hover:text-white transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-light/50"></span> Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="font-bold text-lg mb-6 text-white">Our Products</h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <Link href="/products#ppe-kits" className="text-white/70 hover:text-white transition-colors">
                Industrial PPE Kits
              </Link>
            </li>
            <li>
              <Link href="/products#fire-safety" className="text-white/70 hover:text-white transition-colors">
                Fire Safety Equipments
              </Link>
            </li>
            <li>
              <Link href="/products#safety-accessories" className="text-white/70 hover:text-white transition-colors">
                Safety Accessories
              </Link>
            </li>
            <li>
              <Link href="/products#corporate-supplies" className="text-white/70 hover:text-white transition-colors">
                Corporate Supplies
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-bold text-lg mb-6 text-white">Contact Us</h3>
          <ul className="flex flex-col gap-4 text-sm text-white/70">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary-light shrink-0 mt-0.5" />
              <span>610, Aarya's Corner Point, Opp Voltamp Makarpura, Jason Main Rd, Maneja, Vadodara, Gujarat 390013</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary-light shrink-0" />
              <span>+91 94085 56985</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary-light shrink-0" />
              <a href="mailto:varenyamindustries@gmail.com" className="hover:text-white transition-colors">varenyamindustries@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-6 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
        <p>&copy; {currentYear} Varenyam Industrial Suppliers. All rights reserved.</p>
        <div className="flex items-center gap-1">
          <ShieldCheck className="w-4 h-4" />
          <span>Premium Industrial Grade Standards</span>
        </div>
      </div>
    </footer>
  );
}

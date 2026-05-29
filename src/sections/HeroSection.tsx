"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Award, Truck } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-text-dark">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{ backgroundImage: "url('/assets/images/hero_background_1779045676560.png')" }}
        />
        {/* Gradient Overlays for Corporate Feel */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-deep/90 via-primary-deep/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/90 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-32 pb-16 md:pt-36 md:pb-20 lg:pt-40 lg:pb-16 min-h-screen">
        {/* Left Content */}
        <div className="text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-6"
          >
            <ShieldCheck className="w-6 h-6 text-primary-light" />
            <span className="text-primary-light font-bold tracking-widest uppercase text-sm">
              Varenyam Industrial Suppliers
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 max-w-3xl"
          >
            One Step Solutions for all your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-white">industrial and corporate needs</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-white/80 mb-10 max-w-xl leading-relaxed"
          >
            Equipping your workforce with premium safety gear, PPE kits, and corporate essentials. We deliver reliability and trust.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-md shadow-lg shadow-primary/30 hover:bg-primary-light hover:text-primary-deep transition-all transform hover:-translate-y-1"
            >
              Explore Products <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-md border border-white/20 hover:bg-white hover:text-primary-deep transition-all transform hover:-translate-y-1"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
        
        {/* Right Content - Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-col gap-4 lg:gap-6 lg:ml-auto w-full max-w-2xl lg:max-w-sm mt-8 lg:mt-0"
        >
          {[
            { title: "ISO Certified", desc: "Global Quality Standards", icon: Award },
            { title: "Premium Safety Gear", desc: "100% Authentic & Reliable", icon: ShieldCheck },
            { title: "Fast Delivery", desc: "Pan-India Supply Network", icon: Truck }
          ].map((feature, i) => (
            <div key={i} className="flex items-center gap-5 bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 shadow-xl hover:bg-white/10 transition-colors">
              <div className="w-14 h-14 bg-primary text-white rounded-xl flex items-center justify-center shrink-0 shadow-inner">
                <feature.icon className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg tracking-wide">{feature.title}</h3>
                <p className="text-white/60 text-sm mt-0.5">{feature.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

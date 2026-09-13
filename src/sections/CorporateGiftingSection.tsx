"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Gift, Check, ArrowRight, Sparkles, Award, Shirt, ShieldAlert } from "lucide-react";

const GIFTING_ITEMS = [
  {
    title: "VIP Executive Onboarding Box",
    description: "Matte stainless steel flask (750ml), embossed leatherette diary, metallic pen, and tech pouch.",
    image: "/assets/images/corporate_gifting_set_1787829481887.png",
    badge: "Most Popular",
    tags: ["Custom Box", "Laser Engraved", "A5 Notebook"]
  },
  {
    title: "Technical Field Apparel",
    description: "High-performance embroidered polo T-shirts, softshell jackets, winter vests, and field caps.",
    image: "/assets/images/corporate_apparel_1787829563196.png",
    badge: "Custom Apparel",
    tags: ["High Density Print", "Breathable Fabric", "All Sizes"]
  }
];

export default function CorporateGiftingSection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-slate-900 via-primary-deep to-slate-900 text-white relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-sm font-bold tracking-wide mb-4"
          >
            <Gift className="w-4 h-4 text-amber-400" />
            <span>VARENYAM CORPORATE GIFTING</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6"
          >
            Elevate Your Brand with <span className="text-amber-300">Bespoke Executive Gifts</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/80 text-lg md:text-xl leading-relaxed"
          >
            Combine utility with elegance. We offer customized corporate gifting merchandise, employee welcome kits, and technical apparel designed for corporate excellence.
          </motion.p>
        </div>

        {/* Gifting Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {GIFTING_ITEMS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between group shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 px-3 py-1 bg-amber-400 text-slate-950 text-xs font-extrabold rounded-full shadow-md">
                {item.badge}
              </div>

              <div>
                <div className="relative h-64 w-full bg-slate-950/40 rounded-2xl p-6 mb-6 flex items-center justify-center border border-white/5 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="h-full object-contain transform group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-white/70 text-base mb-6 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {item.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-3 py-1 bg-white/10 text-white/90 text-xs font-medium rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 w-full py-4 bg-amber-400 text-slate-950 font-bold rounded-xl hover:bg-amber-300 transition-colors shadow-lg shadow-amber-400/20"
              >
                Inquire Bulk Corporate Gifting <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Feature Highlights Banner */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center sm:text-left">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-amber-400/20 text-amber-300 rounded-xl flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-base">Custom Logo Branding</h4>
              <p className="text-white/60 text-xs mt-1">Laser engraving, UV printing & metallic foil embossing.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-amber-400/20 text-amber-300 rounded-xl flex items-center justify-center shrink-0">
              <Shirt className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-base">Apparel & Merch</h4>
              <p className="text-white/60 text-xs mt-1">Polo T-shirts, jackets, field caps & vests in all sizes.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-amber-400/20 text-amber-300 rounded-xl flex items-center justify-center shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-base">Recognition Plaques</h4>
              <p className="text-white/60 text-xs mt-1">Custom trophies, plaques & long service awards.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-amber-400/20 text-amber-300 rounded-xl flex items-center justify-center shrink-0">
              <Gift className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-base">Pan-India Dispatch</h4>
              <p className="text-white/60 text-xs mt-1">Direct shipping to multi-location corporate offices.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

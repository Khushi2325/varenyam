"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PhoneCall, Mail } from "lucide-react";

export default function ContactCTASection() {
  return (
    <section className="relative py-24 bg-primary-deep overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-light/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 md:p-16 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Upgrade Your Corporate Safety?
            </h2>
            <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Get in touch with our experts today to discuss your industrial requirements, bulk orders, and customized safety solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-primary-light text-primary-deep font-bold rounded-md shadow-lg shadow-primary-light/20 hover:bg-white transition-all transform hover:-translate-y-1"
              >
                Request a Quote
              </Link>
              
              <div className="flex items-center gap-6 text-white/90">
                <a href="tel:+919408556985" className="flex items-center gap-2 hover:text-white transition-colors">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <span className="font-semibold">+91 94085 56985</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

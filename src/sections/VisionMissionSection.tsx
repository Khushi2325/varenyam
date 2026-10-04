"use client";

import { motion } from "framer-motion";
import { Eye, Target, Award, ShieldCheck, Check } from "lucide-react";

export default function VisionMissionSection() {
  return (
    <section className="py-20 md:py-28 bg-slate-50 relative">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-900 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200/60">
            <span>Corporate Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
            Vision, Mission & <span className="text-blue-900">Our Promise</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Guiding our commitment to quality, engineering integrity, and enduring industrial partnerships across every project lifecycle.
          </p>
        </div>

        {/* 3 Distinct Corporate Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* OUR VISION */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-900/30 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 bg-blue-50 text-blue-900 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-blue-900" />
              </div>
              <span className="text-xs font-bold text-blue-900 uppercase tracking-widest block mb-2">
                Guiding Principles
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                &ldquo;To become the preferred industrial solutions, partner for organizations by delivering innovative products, engineering excellence, and exceptional service that contribute to safer, more efficient, and sustainable industrial operations.&rdquo;
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-blue-900">
              <ShieldCheck className="w-4 h-4 text-blue-900" />
              <span>Safer, Efficient, Sustainable Operations</span>
            </div>
          </motion.div>

          {/* OUR MISSION */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-900/30 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-amber-600" />
              </div>
              <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-2">
                Operational Purpose
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                &ldquo;To simplify industrial procurement and project execution by providing world-class products, integrated engineering solutions, and dependable technical services—building lasting partnerships through quality, integrity, and continuous innovation.&rdquo;
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-amber-700">
              <Check className="w-4 h-4 text-amber-600" />
              <span>Quality, Integrity & Continuous Innovation</span>
            </div>
          </motion.div>

          {/* OUR PROMISE */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-gradient-to-br from-blue-900 to-slate-950 text-white p-8 sm:p-10 rounded-3xl shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 bg-white/10 text-amber-300 rounded-2xl flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-amber-300" />
              </div>
              <span className="text-xs font-bold text-amber-300 uppercase tracking-widest block mb-2">
                Core Commitment
              </span>
              <h3 className="text-2xl font-extrabold text-white mb-4">Our Promise</h3>
              <p className="text-sky-100 text-sm sm:text-base leading-relaxed mb-6">
                &ldquo;Every solution we provide reflects our commitment to Quality, Safety, Reliability, and Performance.&rdquo;
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                We strive to create long-term value by supporting our customers from the earliest stages of project development through successful commissioning and beyond.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-6 mt-6 border-t border-white/15 text-center">
              {["Quality", "Safety", "Reliability", "Performance"].map((pillar, i) => (
                <div key={i} className="p-2 bg-white/10 rounded-xl text-xs font-bold text-amber-300 border border-white/10">
                  {pillar}
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

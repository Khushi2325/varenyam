"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe, ShieldCheck, Send, CheckCircle2, MessageSquare } from "lucide-react";

export default function ContactFormSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);
    setIsSuccess(false);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        form.reset();
      } else {
        setIsError(true);
      }
    } catch {
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 md:py-28 bg-white" id="contact">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Official Contact & Company Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-900 text-xs font-bold uppercase tracking-wider border border-blue-200/60">
              <ShieldCheck className="w-4 h-4 text-blue-900" />
              <span>Contact Varenyam</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              Let&apos;s Build a <span className="text-blue-900">Safer Workplace Together</span>
            </h2>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <p className="text-xs font-extrabold text-blue-950 uppercase tracking-wider mb-1">
                VARENYAM INDUSTRIAL SUPPLIERS
              </p>
              <p className="text-xs font-semibold text-slate-600">
                Protecting People. Safeguarding Assets. Ensuring Compliance.
              </p>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed">
              Whether you require turnkey greenfield project procurement, ATEX certification compliance, fire suppression systems, or corporate gifting merchandise, our engineering team is ready to consult.
            </p>
            
            {/* Contact Details from Brochure / Repository */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="w-10 h-10 bg-blue-100/80 text-blue-900 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wide">Corporate Address</h4>
                  <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                    VARENYAM INDUSTRIAL SUPPLIERS<br />
                    Vadodara, Gujarat, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="w-10 h-10 bg-blue-100/80 text-blue-900 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wide">Mobile / Office Contact</h4>
                  <a href="tel:+919408556985" className="text-xs font-bold text-blue-900 hover:underline block mt-0.5">
                    +91 94085 56985
                  </a>
                  <p className="text-[11px] text-slate-500">Monday – Saturday: 9:00 AM – 6:30 PM IST</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="w-10 h-10 bg-blue-100/80 text-blue-900 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wide">Email Enquiries</h4>
                  <a href="mailto:varenyamindustries@gmail.com" className="text-xs font-bold text-blue-900 hover:underline block mt-0.5">
                    varenyamindustries@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="w-10 h-10 bg-blue-100/80 text-blue-900 rounded-xl flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wide">Official Website</h4>
                  <span className="text-xs text-slate-600 block mt-0.5">www.varenyamindustrial.com</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/919408556985?text=Hello%20Varenyam%20Industrial%20Suppliers,%20I%20would%20like%20to%20request%20a%20quotation."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant WhatsApp Business RFQ</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Request for Quotation (RFQ) Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 md:p-10 rounded-3xl border border-slate-200/90 shadow-xl"
          >
            <h3 className="text-xl font-extrabold text-slate-900 mb-1">
              Request a Formal Quote / Technical Inquiry
            </h3>
            <p className="text-xs text-slate-600 mb-6">
              Complete the specification form below. Our industrial sales team responds within 24 business hours.
            </p>

            {isSuccess ? (
              <div className="bg-emerald-50 border border-emerald-200 p-8 rounded-2xl text-center">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                <h4 className="text-lg font-bold text-emerald-900 mb-1">Inquiry Submitted Successfully</h4>
                <p className="text-xs text-emerald-700 max-w-md mx-auto">
                  Thank you for reaching out to Varenyam Industrial Suppliers. Our technical representative will review your request and send a detailed quotation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
                <input type="hidden" name="subject" value="New B2B Website Inquiry - Varenyam Industrial" />
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Contact Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Rajesh Patel"
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Company / Facility Name *</label>
                    <input
                      type="text"
                      name="company"
                      required
                      placeholder="e.g. Reliance / L&T / Adani"
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Work Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="procurement@company.com"
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Mobile / Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 94085 XXXXX"
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Inquiry Domain *</label>
                    <select
                      name="domain"
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900 font-medium text-slate-800"
                    >
                      <option value="industrial-safety">Industrial Safety & PPE</option>
                      <option value="fire-safety">Fire Safety Equipment & Systems</option>
                      <option value="atex">Explosion Proof / ATEX Gear</option>
                      <option value="esd">Static Earthing & ESD Systems</option>
                      <option value="gas-detection">Gas Detection & Environmental</option>
                      <option value="tools">Hand & Power Tools</option>
                      <option value="corporate-gifting">Corporate Gifting & Apparel</option>
                      <option value="services">Installation, Commissioning or AMC</option>
                      <option value="turnkey">Turnkey Project Procurement</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Target Timeline / Delivery</label>
                    <select
                      name="timeline"
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900 font-medium text-slate-800"
                    >
                      <option value="immediate">Immediate (1-2 Weeks)</option>
                      <option value="1month">Within 1 Month</option>
                      <option value="quarter">Next Quarter / Greenfield Project</option>
                      <option value="annual">Annual Rate Contract (ARC / AMC)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Product Specifications / Requirement Details *</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="List specific items, estimated quantities, standard compliance required (IS/EN/ANSI), or project delivery location..."
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900 resize-none"
                  />
                </div>

                {isError && (
                  <p className="text-xs text-red-600 font-semibold">
                    Submission error occurred. Please call or email us directly at varenyamindustries@gmail.com
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? "Submitting Inquiry..." : "Submit Request for Quotation (RFQ)"}</span>
                </button>
              </form>
            )}

          </motion.div>

        </div>
      </div>
    </section>
  );
}

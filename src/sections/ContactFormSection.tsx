"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Gift, ShieldCheck } from "lucide-react";

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
        console.error("Form submission failed", data);
        setIsError(true);
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-surface" id="contact-form">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
          
          {/* Left Column: Let's Talk Business */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span>Contact Varenyam Industrial Suppliers</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-text-dark mb-6">
              Let's Build a <span className="text-primary">Safer Workplace Together</span>
            </h2>

            <p className="text-text-dark/70 text-lg mb-10 max-w-md leading-relaxed">
              Whether you need turnkey project procurement, site safety outfitting, ATEX compliance gear, or bespoke corporate gifting hampers, our technical engineering team is ready to assist you.
            </p>
            
            <div className="space-y-8">
              {/* Corporate Office */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0 text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-text-dark mb-1">Corporate & Office Address</h4>
                  <p className="text-text-dark/75 leading-relaxed text-sm">
                    VARENYAM INDUSTRIAL SUPPLIERS<br />
                    Industrial Safety | Fire Safety | ATEX | ESD | Static Grounding | Technical Services | Corporate Gifting
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0 text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-text-dark mb-1">Mobile & Office Contact</h4>
                  <p className="text-text-dark/80 font-semibold text-sm">Inquiry Helpline: +91 94085 56985</p>
                  <p className="text-xs text-text-dark/50 mt-1">Monday - Saturday, 9:00 AM to 6:30 PM IST</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0 text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-text-dark mb-1">Email Inquiry</h4>
                  <a href="mailto:varenyamindustries@gmail.com" className="text-primary font-bold hover:underline block text-sm">
                    varenyamindustries@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Request a Quote Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-6 sm:p-10 rounded-3xl shadow-xl border border-gray-100"
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-text-dark">Request a Technical Quote</h3>
              <span className="px-3 py-1 bg-amber-400/10 text-amber-600 text-xs font-bold rounded-full flex items-center gap-1 border border-amber-400/20">
                <Gift className="w-3.5 h-3.5 text-amber-500" /> Industrial & Gifting
              </span>
            </div>
            
            {isSuccess ? (
              <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-2xl text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h4 className="text-xl font-bold mb-2">Inquiry Submitted Successfully!</h4>
                <p className="text-sm text-green-800">Thank you for reaching out to Varenyam Industrial Suppliers. Our technical estimation team will contact you shortly.</p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="mt-6 text-primary font-bold hover:underline text-sm"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY_HERE" />
                <input type="hidden" name="subject" value="New Inquiry from Varenyam Industrial Suppliers Website" />
                <input type="hidden" name="from_name" value="Varenyam Portal" />

                {isError && (
                  <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl text-xs mb-4">
                    Connection error. Please call us directly at +91 94085 56985 or email varenyamindustries@gmail.com
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-text-dark mb-1.5">Full Name *</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      placeholder="e.g. Rajesh Kumar" 
                      className="w-full px-4 py-3 rounded-xl bg-surface border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-text-dark text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-text-dark mb-1.5">Company / Plant Name</label>
                    <input 
                      type="text" 
                      name="company"
                      placeholder="e.g. Apex Energy Ltd." 
                      className="w-full px-4 py-3 rounded-xl bg-surface border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-text-dark text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-text-dark mb-1.5">Email Address *</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      placeholder="name@company.com" 
                      className="w-full px-4 py-3 rounded-xl bg-surface border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-text-dark text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-text-dark mb-1.5">Phone / Mobile *</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      placeholder="+91 98765 43210" 
                      className="w-full px-4 py-3 rounded-xl bg-surface border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-text-dark text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-text-dark mb-1.5">Inquiry Type / Category *</label>
                  <select name="interest" required className="w-full px-4 py-3 rounded-xl bg-surface border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-text-dark text-sm appearance-none">
                    <option value="">Select Requirement Type</option>
                    <option value="Corporate Gifting & Executive Hampers">🎁 Corporate Gifting & Executive Hampers</option>
                    <option value="Industrial Safety & PPE Kits">🛡️ Industrial Safety & PPE Kits</option>
                    <option value="Fire Detection & Suppression Systems">🔥 Fire Detection & Suppression Systems</option>
                    <option value="ATEX & Explosion Proof Equipment">⚡ ATEX & Explosion Proof Equipment</option>
                    <option value="Static Earthing & ESD Protection">⚡ Static Earthing & ESD Protection</option>
                    <option value="Non-Sparking & Insulated Hand Tools">🔧 Non-Sparking & Insulated Hand Tools</option>
                    <option value="Gas Detection & Process Safety">Gauge Gas Detection & Process Safety</option>
                    <option value="Turnkey Greenfield / Brownfield Procurement">🏗️ Turnkey Greenfield / Brownfield Project</option>
                    <option value="Technical Audit & AMC Services">📋 Technical Audit & AMC Services</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-text-dark mb-1.5">Project Specs / Quantities *</label>
                  <textarea 
                    name="message"
                    required
                    rows={3} 
                    placeholder="Describe item specifications, estimated quantities, target delivery timeline..."
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-text-dark text-sm resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 bg-primary text-white font-bold text-sm rounded-xl shadow-lg hover:bg-primary-deep transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Submitting Quote Request...
                    </>
                  ) : (
                    "Submit Inquiry Request"
                  )}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

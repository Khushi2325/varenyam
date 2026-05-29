"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

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
    <section className="py-16 md:py-24 bg-surface">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
          
          {/* Left Column: Let's Talk Business */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-6">Let's Talk Business</h2>
            <p className="text-text-dark/70 text-lg mb-12 max-w-md leading-relaxed">
              Whether you need a full facility outfitting or regular safety supplies, we're here to help.
            </p>
            
            <div className="space-y-8">
              {/* Corporate Office */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-text-dark mb-1">Corporate Office</h4>
                  <p className="text-text-dark/70">
                    610, Aarya's Corner Point,<br />
                    Opp Voltamp Makarpura, Jason Main Rd,<br />
                    Maneja, Vadodara, Gujarat 390013
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-text-dark mb-1">Phone</h4>
                  <p className="text-text-dark/70">+91 94085 56985</p>
                  <p className="text-sm text-text-dark/50 mt-1">Mon-Sat, 9AM to 6PM</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-text-dark mb-1">Email</h4>
                  <a href="mailto:varenyamindustries@gmail.com" className="text-text-dark/70 hover:text-primary transition-colors block">varenyamindustries@gmail.com</a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Request a Quote Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-text-dark mb-8">Request a Quote</h3>
            
            {isSuccess ? (
              <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h4 className="text-xl font-bold mb-2">Request Sent Successfully!</h4>
                <p>Thank you for reaching out. Our team will get back to you with a quote shortly.</p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="mt-6 text-primary font-semibold hover:underline"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Hidden Access Key for Web3Forms */}
                <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY_HERE" />
                <input type="hidden" name="subject" value="New Quote Request from Varenyam Industries Website" />
                <input type="hidden" name="from_name" value="Varenyam Website" />

                {isError && (
                  <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg text-sm mb-6">
                    Something went wrong. Please try again or contact us directly via email.
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-text-dark mb-2">Full Name <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      placeholder="John Doe" 
                      className="w-full px-4 py-3 rounded-lg bg-surface border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-text-dark"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-text-dark mb-2">Company Name</label>
                    <input 
                      type="text" 
                      name="company"
                      placeholder="Acme Industries" 
                      className="w-full px-4 py-3 rounded-lg bg-surface border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-text-dark"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-text-dark mb-2">Corporate Email <span className="text-red-500">*</span></label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      placeholder="john@company.com" 
                      className="w-full px-4 py-3 rounded-lg bg-surface border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-text-dark"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-text-dark mb-2">Phone Number <span className="text-red-500">*</span></label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      placeholder="+91 XXXXX XXXXX" 
                      className="w-full px-4 py-3 rounded-lg bg-surface border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-text-dark"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-text-dark mb-2">Product Interest <span className="text-red-500">*</span></label>
                  <select name="interest" required className="w-full px-4 py-3 rounded-lg bg-surface border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-text-dark/70 appearance-none">
                    <option value="">Select a category</option>
                    <option value="Industrial PPE Kits">Industrial PPE Kits</option>
                    <option value="Fire Safety Equipments">Fire Safety Equipments</option>
                    <option value="Corporate Supplies">Corporate Supplies</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-text-dark mb-2">Requirements / Message <span className="text-red-500">*</span></label>
                  <textarea 
                    name="message"
                    required
                    rows={4} 
                    placeholder="Please describe your requirements, expected quantities, or any specific certifications needed..."
                    className="w-full px-4 py-3 rounded-lg bg-surface border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-text-dark resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 bg-primary text-white font-bold rounded-lg shadow-md hover:bg-primary-deep transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    "Submit Request"
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

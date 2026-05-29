import ContactCTASection from "@/sections/ContactCTASection";
import type { Metadata } from "next";
import { PRODUCTS } from "@/data/products";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Products | Varenyam Industrial Suppliers",
  description: "Explore our premium industrial catalog, including PPE kits, fire safety equipment, and more.",
};

const CATEGORIES = [
  { id: "ppe-kits", title: "Industrial PPE Kits", description: "Top-tier personal protective equipment for maximum safety on site." },
  { id: "fire-safety", title: "Fire Safety Equipments", description: "Reliable fire prevention and control equipment for industrial standards." },
  { id: "safety-accessories", title: "Safety Accessories", description: "Essential add-ons to ensure comprehensive worker safety." },
  { id: "corporate-supplies", title: "Corporate Supplies", description: "High-quality safety supplies tailored for corporate environments." },
];

export default function ProductsPage() {
  return (
    <div className="pt-28 md:pt-32 bg-surface min-h-screen">
      {/* Page Header */}
      <div className="py-16 md:py-24 bg-primary-deep text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-overlay" style={{ backgroundImage: "url('/assets/images/hero_background_1779045676560.png')" }} />
        <div className="relative z-10 container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Our Premium Catalog</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg md:text-xl">Discover our industry-leading safety equipment and corporate supplies, engineered for unmatched reliability and protection.</p>
        </div>
      </div>

      {CATEGORIES.map((category) => {
        const categoryProducts = PRODUCTS.filter(p => p.categoryId === category.id);
        if (categoryProducts.length === 0) return null;
        
        return (
          <div key={category.id} id={category.id} className="scroll-mt-20">
            {/* Category Header */}
            <div className="bg-white py-12 border-b border-gray-100 shadow-sm relative z-10">
              <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold text-primary">{category.title}</h2>
                <p className="text-text-dark/70 mt-4 text-lg max-w-2xl mx-auto">{category.description}</p>
              </div>
            </div>

            {/* Products in Category */}
            <div>
              {categoryProducts.map((product, index) => {
                const isEven = index % 2 === 0;
                return (
                  <section 
                    key={product.id} 
                    className={`py-16 md:py-24 border-b border-gray-100/50 ${isEven ? 'bg-surface' : 'bg-white'}`}
                  >
                    <div className="container mx-auto px-6">
                      <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                        
                        {/* Image Side */}
                        <div className="w-full lg:w-1/2">
                          <div className="relative bg-white p-8 md:p-16 rounded-3xl shadow-sm border border-gray-100 flex items-center justify-center group overflow-hidden">
                            <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors z-0" />
                            <img
                              src={product.image}
                              alt={product.name}
                              className="relative z-10 w-full max-w-md h-auto object-contain transform group-hover:scale-105 transition-transform duration-700"
                            />
                          </div>
                        </div>
                        
                        {/* Content Side */}
                        <div className="w-full lg:w-1/2 flex flex-col justify-center">
                          <h3 className="text-3xl md:text-5xl font-bold text-text-dark mb-6 leading-tight">
                            {product.name}
                          </h3>
                          <p className="text-lg text-text-dark/70 mb-8 leading-relaxed">
                            {product.description}
                          </p>
                          
                          <ul className="space-y-4 mb-10">
                            {[
                              "Premium industrial-grade quality",
                              "Tested for maximum durability",
                              "Compliance with safety standards"
                            ].map((feature, i) => (
                              <li key={i} className="flex items-center gap-3">
                                <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                                <span className="text-text-dark/80 font-medium">{feature}</span>
                              </li>
                            ))}
                          </ul>

                          <div>
                            <Link
                              href="/contact"
                              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-md shadow-lg shadow-primary/30 hover:bg-primary-deep transition-all transform hover:-translate-y-1"
                            >
                              Request a Quote <ArrowRight className="w-5 h-5" />
                            </Link>
                          </div>
                        </div>

                      </div>
                    </div>
                  </section>
                );
              })}
            </div>
          </div>
        );
      })}
      
      <ContactCTASection />
    </div>
  );
}

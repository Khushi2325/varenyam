"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PRODUCTS } from "@/data/products";

interface ProductsSectionProps {
  showViewAllButton?: boolean;
  limit?: number;
}

export default function ProductsSection({ showViewAllButton = true, limit }: ProductsSectionProps) {
  const displayProducts = limit ? PRODUCTS.slice(0, limit) : PRODUCTS;

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Our Catalog</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">Premium Industrial Products</h3>
          <p className="text-text-dark/70 text-base md:text-lg">
            Explore our comprehensive range of high-quality industrial and corporate safety supplies designed for maximum protection and reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary-light/50 transition-all duration-300 flex flex-col"
            >
              {/* Product Image */}
              <div className="relative h-64 w-full bg-surface overflow-hidden p-6 flex items-center justify-center">
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors z-0" />
                <img
                  src={product.image}
                  alt={product.name}
                  className="relative z-10 w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Product Info */}
              <div className="p-6 flex flex-col flex-grow relative">
                {/* Blue Accent Border on Hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                
                <h4 className="text-xl font-bold text-text-dark mb-2">{product.name}</h4>
                <p className="text-text-dark/60 text-sm mb-6 flex-grow">{product.description}</p>
                
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-deep transition-colors"
                >
                  Request Inquiry <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        {showViewAllButton && (
          <div className="mt-16 text-center">
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary font-semibold rounded-md border-2 border-primary hover:bg-primary hover:text-white transition-colors"
            >
              View Full Catalog
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

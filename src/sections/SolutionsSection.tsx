"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Flame, Zap, Activity, Gauge, ShowerHead, Plug, Package, Droplets, Truck, Leaf } from "lucide-react";

const SOLUTIONS = [
  {
    title: "Industrial Safety & PPE",
    tagline: "Head-to-Toe Worker Protection",
    desc: "Complete personal protective solutions including high-impact safety helmets, steel-toe footwear, specialized cut/chemical gloves, respiratory gear, and fall arrest systems.",
    categoryId: "industrial-safety-ppe",
    image: "/assets/images/ppe_kit_1779045792869.png",
    icon: ShieldCheck,
    tag: "Essential Safety"
  },
  {
    title: "Fire Safety Systems",
    tagline: "Detection, Suppression & Life Safety",
    desc: "Active and passive fire engineering—from ISI-marked extinguishers and hydrant networks to addressable optical detectors and clean agent gaseous suppression systems.",
    categoryId: "fire-safety-equipment",
    image: "/assets/images/fire_extinguisher_1779045831196.png",
    icon: Flame,
    tag: "Life Safety"
  },
  {
    title: "ATEX & Explosion-Proof Systems",
    tagline: "Zone 1, 2, 21 & 22 Hazardous Areas",
    desc: "Explosion-protected electrical infrastructure: flameproof Ex-d luminaires, junction boxes, intrinsically safe mobile devices, cameras, and certified sparkless equipment.",
    categoryId: "explosion-proof-atex",
    image: "/assets/images/atex_equipment_1787829496955.png",
    icon: Zap,
    tag: "ATEX Certified"
  },
  {
    title: "ESD & Static Grounding Systems",
    tagline: "Electrostatic Charge Control",
    desc: "Ground verification systems (Earth-Rite, Bond-Rite), static dissipation touch balls, conductive flooring, and complete cleanroom ESD workstation protective accessories.",
    categoryId: "static-earthing-esd",
    image: "/assets/images/esd_static_gear_1787829514427.png",
    icon: Activity,
    tag: "Static Control"
  },
  {
    title: "Gas Detection & Monitoring",
    tagline: "Toxic, Combustible & VOC Surveillance",
    desc: "Multi-gas portable safety sniffers, fixed flameproof 4-20mA telemetry transmitters, and photoionization VOC analyzers ensuring zero unmonitored atmospheric hazards.",
    categoryId: "gas-detection-systems",
    image: "/assets/images/gas_detection_system_1787829548855.png",
    icon: Gauge,
    tag: "Atmospheric Safety"
  },
  {
    title: "Process Safety Equipment",
    tagline: "Emergency Response & Chemical Containment",
    desc: "Emergency drench showers, eyewash stations, certified double-wall flammable safety cabinets, and safe compressed cylinder storage infrastructure.",
    categoryId: "process-safety-equipment",
    image: "/assets/images/material_handling_crane_1787829586885.png",
    icon: ShowerHead,
    tag: "Plant Safety"
  },
  {
    title: "Industrial Electrical Infrastructure",
    tagline: "Terminations & Hazardous Enclosures",
    desc: "Heavy-duty brass and stainless cable glands, crimping lugs, heat shrink insulation, pin-and-sleeve plugs, and industrial distribution panels.",
    categoryId: "industrial-electrical-accessories",
    image: "/assets/images/atex_equipment_1787829496955.png",
    icon: Plug,
    tag: "Power & Systems"
  },
  {
    title: "Material Handling & Rigging",
    tagline: "Lifting, Stacking & Drum Logistics",
    desc: "Hydraulic hand pallet trucks, barrel rotators, grade 80 chain pulley blocks, certified polyester web slings, and heavy steel plate lifting clamps.",
    categoryId: "material-handling-equipment",
    image: "/assets/images/material_handling_crane_1787829586885.png",
    icon: Package,
    tag: "Plant Logistics"
  },
  {
    title: "Spill Containment & Control",
    tagline: "Rapid Hazmat & Oil Absorbency",
    desc: "Chemical and universal mobile spill response kits, hydrophobic oil pads, secondary containment polyethylene bunded pallets, and drain seals.",
    categoryId: "spill-control-products",
    image: "/assets/images/esd_static_gear_1787829514427.png",
    icon: Droplets,
    tag: "Environmental"
  },
  {
    title: "Warehouse & Facility Safety",
    tagline: "Impact Protection & Traffic Routing",
    desc: "Heavy concrete-filled crash bollards, dock levelers, wheel chocks, column corner guards, speed bumps, and convex blind-spot traffic safety mirrors.",
    categoryId: "warehouse-safety",
    image: "/assets/images/reflective_jacket_1779046976022.png",
    icon: Truck,
    tag: "Facility Safety"
  },
  {
    title: "Environmental & Compliance",
    tagline: "Acoustic, Dust & Effluent Verification",
    desc: "Acoustic noise attenuation curtains, real-time dust monitoring stations, water quality photometers, and segregated plant waste management stations.",
    categoryId: "environmental-compliance-products",
    image: "/assets/images/measuring_instruments_1787829606141.png",
    icon: Leaf,
    tag: "Regulatory"
  }
];

export default function SolutionsSection() {
  return (
    <section id="solutions" className="py-20 md:py-28 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-900 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200/60">
            <span>Integrated Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
            Specialized Industrial <span className="text-blue-900">Solution Areas</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Varenyam delivers integrated industrial solutions engineered for stringent safety, regulatory compliance, and operational reliability across hazardous working environments.
          </p>
        </div>

        {/* Large Image Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SOLUTIONS.map((sol, idx) => {
            const IconComp = sol.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-2xl hover:border-blue-900/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Visual Header */}
                  <div className="h-52 w-full bg-white relative p-6 flex items-center justify-center border-b border-slate-100 overflow-hidden">
                    <img
                      src={sol.image}
                      alt={sol.title}
                      className="h-full w-full object-contain filter group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 right-4 px-3 py-1 bg-blue-900 text-white rounded-lg text-[11px] font-extrabold shadow-sm">
                      {sol.tag}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-blue-100/70 text-blue-900 flex items-center justify-center shrink-0">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-blue-900 transition-colors">
                        {sol.title}
                      </h3>
                    </div>

                    <p className="text-xs font-bold text-slate-500 mb-3">
                      {sol.tagline}
                    </p>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {sol.desc}
                    </p>
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="p-6 sm:p-7 pt-0">
                  <Link
                    href={`/products?category=${sol.categoryId}#catalog`}
                    className="w-full py-3 px-4 bg-white hover:bg-blue-900 text-slate-800 hover:text-white font-bold text-xs rounded-xl border border-slate-200 hover:border-blue-900 transition-all flex items-center justify-between group-hover:shadow-md"
                  >
                    <span>Explore {sol.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

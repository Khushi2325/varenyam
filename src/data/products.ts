export interface ProductItem {
  id: string;
  name: string;
  category: string;
  categoryId: string;
  tagline: string;
  description: string;
  image: string;
  isPopular?: boolean;
  isCorporateGifting?: boolean;
  items: string[];
  features: string[];
}

export interface CategoryInfo {
  id: string;
  name: string;
  count: number;
  icon: string;
  description: string;
  isCorporate?: boolean;
}

export const CATEGORIES: CategoryInfo[] = [
  { id: "all", name: "All Solutions", count: 24, icon: "LayoutGrid", description: "Complete industrial & corporate catalogue under one roof." },
  { id: "corporate-gifting", name: "Corporate Gifting", count: 6, icon: "Gift", description: "Executive welcome kits, custom drinkware, tech organizers, and branded apparel.", isCorporate: true },
  { id: "ppe-safety", name: "Industrial Safety & PPE", count: 17, icon: "ShieldCheck", description: "Head-to-toe personal protective equipment for hazardous worksites." },
  { id: "fire-safety", name: "Fire Safety Equipment", count: 17, icon: "Flame", description: "Extinguishers, suppression systems, hydrants, and flame detectors." },
  { id: "atex-explosion", name: "Explosion Proof (ATEX)", count: 16, icon: "Zap", description: "ATEX lighting, junction boxes, cameras, phones, and spark-free gear." },
  { id: "static-esd", name: "Static Earthing & ESD", count: 15, icon: "Activity", description: "Earth Rite systems, conductive flooring, ESD mats, and wrist straps." },
  { id: "hand-tools", name: "Hand Tools (Non-Sparking)", count: 11, icon: "Wrench", description: "Non-sparking Cu-Be tools, insulated screwdrivers, torque wrenches." },
  { id: "power-tools", name: "Power Tools & Hydraulics", count: 8, icon: "Hammer", description: "Magnetic drills, impact wrenches, angle grinders, hydraulic cutters." },
  { id: "material-handling", name: "Material Handling", count: 11, icon: "Package", description: "Pallet trucks, drum lifters, web slings, shackles, chain blocks." },
  { id: "spill-control", name: "Spill Control Products", count: 8, icon: "Droplets", description: "Oil & chemical spill kits, absorbent pads, spill pallets, berms." },
  { id: "housekeeping", name: "Industrial Housekeeping", count: 7, icon: "Sparkles", description: "Vacuum cleaners, floor scrubbers, sweepers, hazardous waste bins." },
  { id: "safety-signages", name: "Safety Signages", count: 7, icon: "AlertTriangle", description: "Mandatory signs, warning boards, exit lights, floor marking tapes." },
  { id: "loto-systems", name: "Lockout Tagout (LOTO)", count: 7, icon: "Lock", description: "Lockout padlocks, valve lockouts, circuit breaker locks, tags." },
  { id: "electrical-acc", name: "Electrical Accessories", count: 9, icon: "Plug", description: "ATEX cable glands, lugs, heat shrink sleeves, terminal blocks." },
  { id: "earthing-lightning", name: "Earthing & Lightning", count: 8, icon: "CloudLightning", description: "Copper earthing electrodes, pit covers, lightning arresters." },
  { id: "industrial-lighting", name: "Industrial Lighting", count: 7, icon: "Lightbulb", description: "LED high bay lights, floodlights, explosion-proof light fixtures." },
  { id: "gas-detection", name: "Gas Detection Systems", count: 6, icon: "Gauge", description: "Portable gas detectors, fixed multi-gas monitoring systems, VOC monitors." },
  { id: "process-safety", name: "Process Safety Equipment", count: 6, icon: "ShowerHead", description: "Emergency showers, eyewash stations, safety chemical cabinets." },
  { id: "storage-solutions", name: "Industrial Storage", count: 5, icon: "Boxes", description: "Heavy duty racks, pallet racks, tool cabinets, lockers." },
  { id: "industrial-furniture", name: "Industrial Furniture", count: 5, icon: "Armchair", description: "Workbenches, ESD workstations, lab furniture, operator chairs." },
  { id: "measuring-testing", name: "Measuring & Testing", count: 10, icon: "Thermometer", description: "Thermal imaging cameras, clamp meters, multimeters, sound meters." },
  { id: "consumables", name: "Industrial Consumables", count: 8, icon: "Container", description: "Adhesives, sealants, lubricants, grease, cutting oil, PTFE tapes." },
  { id: "packaging", name: "Packaging Materials", count: 7, icon: "Box", description: "Stretch film, VCI anti-corrosion packaging, wooden pallets, silica gel." },
  { id: "warehouse-safety", name: "Warehouse Safety", count: 8, icon: "Truck", description: "Dock levelers, bollards, wheel chocks, speed breakers, convex mirrors." },
  { id: "environmental", name: "Environmental Compliance", count: 6, icon: "Leaf", description: "Noise barriers, air quality monitors, water testing kits, dust monitors." }
];

export const PRODUCTS: ProductItem[] = [
  // CORPORATE GIFTING
  {
    id: "gifting-welcome-kit",
    name: "Executive Safety & Welcome Gift Box",
    category: "Corporate Gifting",
    categoryId: "corporate-gifting",
    tagline: "Premium Onboarding & VIP Client Experience",
    description: "Custom curated corporate gift box containing a matte thermal bottle, embossed leather diary, premium pen, tech pouch, and customized company badge.",
    image: "/assets/images/corporate_gifting_set_1787829481887.png",
    isPopular: true,
    isCorporateGifting: true,
    items: [
      "Custom Matte Thermal Water Bottle (750ml)",
      "Embossed Leatherette A5 Executive Diary",
      "Engraved Metal Rollerball Pen",
      "Branded Tech Organizer Cord Pouch",
      "High-Vis Laser Engraved Metallic Keychain",
      "Custom Magnetic Presentation Gift Box"
    ],
    features: [
      "Laser logo engraving & foil stamping available",
      "Custom color matching with company branding",
      "Pan-India doorstep bulk shipping available"
    ]
  },
  {
    id: "gifting-apparel",
    name: "Custom Corporate & Field Technical Apparel",
    category: "Corporate Gifting",
    categoryId: "corporate-gifting",
    tagline: "Professional Brand Identity for Field & Office Teams",
    description: "High-grade breathable polo T-shirts, softshell jackets, winter vests, and high-visibility corporate apparel customized with your logo.",
    image: "/assets/images/corporate_apparel_1787829563196.png",
    isPopular: true,
    isCorporateGifting: true,
    items: [
      "Custom Embroidered Premium Cotton Polo Shirts",
      "Water-Resistant Technical Softshell Jackets",
      "Lightweight Puffer Corporate Vests",
      "Custom Branded Caps & Hard Hat Sweatbands",
      "High-Vis Customized Field Engineer Uniforms"
    ],
    features: [
      "Premium breathable fabric with anti-pilling coat",
      "High-density embroidery & HD rubber printing",
      "All unisex sizes available (S to 5XL)"
    ]
  },

  // INDUSTRIAL SAFETY & PPE
  {
    id: "ppe-full-kit",
    name: "Complete Industrial PPE Safety Package",
    category: "Industrial Safety & PPE",
    categoryId: "ppe-safety",
    tagline: "Head-to-Toe Certified Worker Protection",
    description: "Comprehensive PPE kit including EN 397 safety helmet, S3 steel-toe shoes, cut-resistant gloves, UV goggles, and high-visibility reflective jacket.",
    image: "/assets/images/ppe_kit_1779045792869.png",
    isPopular: true,
    items: [
      "Safety Helmets (EN 397 certified)",
      "Safety Shoes (S1, S2, S3 heavy duty steel toe)",
      "Industrial Gloves (Mechanical, Chemical, Cut Resistant Level 5)",
      "Safety Goggles & Face Shields",
      "Ear Plugs & Ear Muffs (NRR 25dB+)",
      "Reflective Jackets (ANSI Class 2/3)",
      "Flame Retardant (FR) Clothing & Arc Flash Suits",
      "Chemical Splash Suits",
      "Respirators & Gas Masks with N95/P100 Filters",
      "Self-Contained Breathing Apparatus (SCBA Sets)",
      "Fall Protection Harnesses, Lifelines & Safety Nets",
      "Welding PPE Helmets & Leather Aprons"
    ],
    features: [
      "Certified to IS, EN, ANSI, and CE standards",
      "Ergonomic fit for extended shift comfort",
      "Custom logo printing for industrial workforces"
    ]
  },
  {
    id: "ppe-helmets",
    name: "Industrial Heavy Duty Safety Helmets",
    category: "Industrial Safety & PPE",
    categoryId: "ppe-safety",
    tagline: "High-Impact HDPE & ABS Head Protection",
    description: "Vented and non-vented industrial safety helmets featuring 6-point textile suspension, ratchet adjustment, and chin straps.",
    image: "/assets/images/safety_helmet_1779045815756.png",
    isPopular: false,
    items: [
      "High-Density Polyethylene (HDPE) Helmets",
      "ABS High Impact Resistance Helmets",
      "Electrical Insulation Helmets (1000V rated)",
      "Integrated Visor Safety Helmets",
      "Reflective Stripe Helmets"
    ],
    features: [
      "6-Point ratchet suspension system",
      "Lightweight design with sweatband",
      "Available in White, Yellow, Blue, Red, Green"
    ]
  },
  {
    id: "ppe-shoes",
    name: "Steel-Toe Industrial Safety Shoes (S1, S2, S3)",
    category: "Industrial Safety & PPE",
    categoryId: "ppe-safety",
    tagline: "Oil-Resistant, Anti-Skid & Shockproof Footwear",
    description: "Premium genuine leather safety shoes equipped with 200J steel toe caps, puncture-proof Kevlar midsoles, and slip-resistant dual-density PU soles.",
    image: "/assets/images/safety_shoes_1779047006280.png",
    isPopular: true,
    items: [
      "S1 Category Basic Antistatic Shoes",
      "S2 Water-Resistant Leather Safety Boots",
      "S3 Heavy Duty Puncture-Resistant Steel Sole Shoes",
      "Dielectric Electrical Hazard Safety Boots",
      "Metatarsal Protection Boots"
    ],
    features: [
      "200 Joules impact resistant steel toe",
      "Anti-bacterial mesh lining for odor control",
      "SRC certified highest grade slip resistance"
    ]
  },
  {
    id: "ppe-jackets",
    name: "High-Visibility Reflective Safety Jackets",
    category: "Industrial Safety & PPE",
    categoryId: "ppe-safety",
    tagline: "360-Degree Reflective Night Visibility",
    description: "Durable polyester high-vis jackets with 3M Scotchlite reflective tape, multi-pocket design, and ID badge holders.",
    image: "/assets/images/reflective_jacket_1779046976022.png",
    isPopular: false,
    items: [
      "ANSI Class 2 & 3 High Visibility Jackets",
      "Flame Retardant High-Vis Vests",
      "Zippered Executive Reflective Vests",
      "All-Weather Waterproof High-Vis Parkas"
    ],
    features: [
      "High intensity 3M glass bead reflective strips",
      "Breathable mesh & solid polyester options",
      "Custom back printing available"
    ]
  },
  {
    id: "ppe-gloves",
    name: "Heavy-Duty Industrial Hand Protection Gloves",
    category: "Industrial Safety & PPE",
    categoryId: "ppe-safety",
    tagline: "Cut, Chemical, Heat & Mechanical Resistant",
    description: "Specialized safety gloves engineered for metal handling, chemical processing, welding operations, and high-cut risk environments.",
    image: "/assets/images/safety_gloves_1779046991300.png",
    isPopular: false,
    items: [
      "Cut Resistant Level A4-A9 Kevlar/HPPE Gloves",
      "Nitrile & Neoprene Chemical Splash Gloves",
      "Heat & Welders Split Leather Gloves (up to 500°C)",
      "Anti-Vibration Impact Mechanics Gloves",
      "Dielectric Electrical Rubber Gloves (Class 00-4)"
    ],
    features: [
      "EN 388 mechanical protection ratings",
      "Superior grip in wet, dry, and oily conditions",
      "Ergonomic contouring to reduce hand fatigue"
    ]
  },

  // FIRE SAFETY EQUIPMENT
  {
    id: "fire-safety-main",
    name: "Industrial Fire Extinguishers & Suppression Systems",
    category: "Fire Safety Equipment",
    categoryId: "fire-safety",
    tagline: "Rapid Fire Extinguishment & Automated Suppression",
    description: "Full suite of ABC dry powder, CO2, foam, clean agent extinguishers, fire hose reels, hydrants, and automated kitchen/panel suppression systems.",
    image: "/assets/images/fire_extinguisher_1779045831196.png",
    isPopular: true,
    items: [
      "ABC Dry Powder & Stored Pressure Extinguishers",
      "CO2 Fire Extinguishers (2kg to 22kg mobile units)",
      "Clean Agent (HFC-227ea / Novec 1230) Extinguishers",
      "Fire Blankets (Fiberglass high temp)",
      "Fire Buckets & Sand Stands",
      "Fire Hose Reel & Canvas Fire Hoses",
      "Fire Hydrants & Landing Valves",
      "Addressable & Conventional Fire Alarm Panels",
      "Smoke, Heat & Optical Flame Detectors",
      "Gas Leak Detection Systems (LPG/CNG/PNG)",
      "Emergency Exit Signs & Photoluminescent Signages",
      "Automated Kitchen Fire Suppression Systems",
      "Clean Agent Flooding Systems for Data Centers",
      "Diesel & Electric Fire Pumps (UL/FM listed)",
      "Automatic Sprinkler Heads & Alarm Valves"
    ],
    features: [
      "ISI mark & BIS standard compliance",
      "Pressure gauge indicator for instant inspection",
      "Annual Maintenance Contract (AMC) support"
    ]
  },

  // ATEX EXPLOSION PROOF
  {
    id: "atex-products",
    name: "ATEX & Explosion-Proof Industrial Equipment",
    category: "Explosion Proof (ATEX) Products",
    categoryId: "atex-explosion",
    tagline: "Zone 1, Zone 2, Zone 21 & Zone 22 Certified",
    description: "Heavy-duty explosion-proof ATEX lighting fixtures, junction boxes, control stations, intrinsic safe mobile phones, tablets, and non-sparking fans.",
    image: "/assets/images/atex_equipment_1787829496955.png",
    isPopular: true,
    items: [
      "ATEX LED Floodlights, High Bays & Handlamps",
      "ATEX Stainless Steel & Cast Aluminum Junction Boxes",
      "ATEX Push Button Control Stations",
      "ATEX Brass & Stainless Steel Cable Glands",
      "ATEX Explosion-Proof HD Surveillance Cameras",
      "Intrinsically Safe ATEX Smartphones & Tablets",
      "ATEX Two-Way UHF/VHF Radios",
      "ATEX Portable Flashlights & Headlamps",
      "ATEX Ventilation Fans & Blower Systems",
      "ATEX Explosion-Proof Motors (IE3/IE4)",
      "ATEX Industrial Vacuum Cleaners",
      "ATEX Digital Multimeters & Calibrators",
      "ATEX Non-Sparking Hand Tools",
      "ATEX Chemical Drum Pumps"
    ],
    features: [
      "Ex d, Ex e, Ex ia certification for hazardous zones",
      "Corrosion-resistant marine-grade enclosures",
      "Extensive thermal and pressure resistance testing"
    ]
  },

  // STATIC EARTHING & ESD
  {
    id: "static-esd-products",
    name: "Static Earthing & ESD Protection Systems",
    category: "Static Earthing & ESD",
    categoryId: "static-esd",
    tagline: "Static Charge Dissipation & ESD Control",
    description: "Earth-Rite grounding verification systems, retractable cable reels, conductive mats, human body static dissipaters, and ESD cleanroom garments.",
    image: "/assets/images/esd_static_gear_1787829514427.png",
    isPopular: true,
    items: [
      "Static Grounding Interlock Systems (Earth Rite)",
      "Bond Rite Self-Testing Grounding Clamps",
      "Heavy-Duty Stainless Steel Earthing Clamps",
      "Automatic Retractable Ground Cable Reels",
      "Static Ground Monitoring Systems for Tankers",
      "Human Body Static Dissipater Touch Balls",
      "Static Conductive Polyurethane Flooring",
      "Anti-Static ESD Bench & Floor Rubber Mats",
      "ESD Grounding Wrist Straps & Heel Grounders",
      "ESD Cleanroom Safety Shoes & Clogs",
      "ESD Ergonomic Industrial Chairs",
      "ESD Safe Modular Workstations",
      "ESD Lint-Free Lab Coats & Garments",
      "ESD Conductive Storage Bins & Trays"
    ],
    features: [
      "IEC 61340-5-1 and ANSI/ESD S20.20 compliant",
      "Continuous resistance monitoring & visual alarms",
      "Prevents flammable vapor ignition in chemical plants"
    ]
  },

  // HAND TOOLS (NON-SPARKING)
  {
    id: "hand-tools-non-sparking",
    name: "Non-Sparking & Insulated Industrial Hand Tools",
    category: "Hand Tools (Non-Sparking)",
    categoryId: "hand-tools",
    tagline: "Spark-Free Copper-Beryllium & Aluminum-Bronze Tools",
    description: "Non-sparking hand tools engineered for refineries, gas plants, and explosive environments, alongside 1000V VDE insulated electrician tools.",
    image: "/assets/images/hand_tools_non_sparking_1787829533302.png",
    isPopular: true,
    items: [
      "Non-Sparking Beryllium Copper (Cu-Be) Tools",
      "Non-Sparking Aluminum Bronze (Al-Bronze) Tools",
      "1000V VDE Insulated Electrician Tool Kits",
      "Precision Torque Wrenches & Multipliers",
      "Impact Socket Sets (Metric & Imperial)",
      "Insulated Screwdriver Sets (Phillips, Slotted, Torx)",
      "Non-Sparking Spanners (Open end, Ring, Combination)",
      "Non-Sparking Pliers, Cutters & Strippers",
      "Non-Sparking Sledge Hammers & Mallets",
      "Hex Key Allen Wrench Sets",
      "Complete Master Tool Kits in Trolley Cases"
    ],
    features: [
      "Zero spark hazard during friction or impact",
      "Non-magnetic properties for MRI and sensitive setups",
      "Lifetime warranty against manufacturing defects"
    ]
  },

  // GAS DETECTION SYSTEMS
  {
    id: "gas-detection-system",
    name: "Portable & Fixed Gas Detection Systems",
    category: "Gas Detection Systems",
    categoryId: "gas-detection",
    tagline: "Life-Saving Toxic & Combustible Gas Monitoring",
    description: "Portable 4-gas monitors, fixed transmitter gas detectors, VOC PID monitors, oxygen depletion alarms, and calibration gas canisters.",
    image: "/assets/images/gas_detection_system_1787829548855.png",
    isPopular: true,
    items: [
      "Portable Multi-Gas Detectors (LEL, O2, H2S, CO)",
      "Fixed Gas Detection Systems with Relay Controllers",
      "Volatile Organic Compound (VOC) PID Monitors",
      "Oxygen Depletion & Enrichment Detectors",
      "Toxic Gas Monitors (Cl2, NH3, SO2, HCN)",
      "Bump Test & Calibration Gas Kits"
    ],
    features: [
      "Bright LED display & 95dB audible alarm",
      "IP68 dust & waterproof rugged casing",
      "Wireless telemetry & remote data logging"
    ]
  },

  // MATERIAL HANDLING
  {
    id: "material-handling-tools",
    name: "Material Handling & Heavy Lifting Equipment",
    category: "Material Handling",
    categoryId: "material-handling",
    tagline: "Safe Goods Transport & Heavy Load Lifting",
    description: "Hydraulic hand pallet trucks, drum lifters, platform trolleys, polyester webbing slings, wire rope slings, and lifting shackles.",
    image: "/assets/images/material_handling_crane_1787829586885.png",
    isPopular: false,
    items: [
      "Hydraulic Hand Pallet Trucks (2 Ton - 5 Ton)",
      "Manual & Electric Hydraulic Stackers",
      "Heavy-Duty Drum Trolleys & Rotary Tilters",
      "Hydraulic Drum Lifters & Rotators",
      "Heavy-Duty Platform Trolleys",
      "Manual & Electric Winches",
      "Chain Pulley Blocks & Lever Hoists",
      "Duplex Flat Webbing Slings (1T to 20T)",
      "Steel Wire Rope Slings & Assemblies",
      "Plate Lifting Clamps (Horizontal & Vertical)",
      "High Tensile D-Shackles & Bow Shackles"
    ],
    features: [
      "Factory tested with 1.5x overload test certification",
      "Smooth nylon and polyurethane wheel options",
      "Heavy gauge reinforced steel chassis"
    ]
  },

  // MEASURING & TESTING
  {
    id: "measuring-testing-tools",
    name: "Industrial Measuring & Testing Instruments",
    category: "Measuring & Testing",
    categoryId: "measuring-testing",
    tagline: "High-Precision Diagnostic & Thermal Inspection",
    description: "Fluke-grade infrared thermal imaging cameras, digital clamp meters, insulation megohmmeters, earth resistance testers, and sound level meters.",
    image: "/assets/images/measuring_instruments_1787829606141.png",
    isPopular: false,
    items: [
      "Infrared Non-Contact Laser Thermometers",
      "High Resolution Thermal Imaging Infrared Cameras",
      "Digital TRMS AC/DC Clamp Meters",
      "Precision Digital Multimeters",
      "Digital Insulation Resistance Testers (Meggers)",
      "Digital Earth Resistance & Soil Testers",
      "Sound Level Meters & Noise Dosimeters",
      "Digital Lux Light Meters",
      "Vibration Meters & Balancing Analyzers",
      "Ultrasonic Coating & Material Thickness Gauges"
    ],
    features: [
      "Traceable NABL calibration certificates",
      "High accuracy sensor chips with rapid response",
      "Rugged drop-tested protective armor casing"
    ]
  }
];

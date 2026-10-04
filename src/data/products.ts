// VARENYAM INDUSTRIAL SUPPLIERS - OFFICIAL PRODUCT CATALOGUE
// Source of truth: Uploaded Varenyam Industrial Suppliers Corporate Brochure
// Strict compliance: Exact 23 categories, 209 catalog products, authentic branding

export type MegaGroupId = "safety" | "tools" | "systems" | "workplace" | "storage";

export interface CategoryGalleryItem {
  url: string;
  alt: string;
  caption?: string;
  isDetailCrop?: boolean;
}

export interface CategoryGallery {
  layout: "large-plus-two" | "large-plus-one" | "two-equal" | "single-hero";
  main: CategoryGalleryItem;
  secondary?: CategoryGalleryItem;
  tertiary?: CategoryGalleryItem;
}

export interface CategoryInfo {
  id: string;
  name: string;
  count: number;
  icon: string;
  image: string;
  gallery: CategoryGallery;
  megaGroup: MegaGroupId;
  description: string;
}

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  categoryId: string;
  description: string;
  image: string;
  tags: string[];
  isPopular?: boolean;
  tagline?: string;
  items?: string[];
}

export interface MegaMenuGroup {
  id: MegaGroupId;
  title: string;
  description: string;
  categoryIds: string[];
}

export const MEGA_MENU_GROUPS: MegaMenuGroup[] = [
  {
    "id": "safety",
    "title": "SAFETY & HAZARD PROTECTION",
    "description": "PPE, ATEX, Fire Safety, and Static Control systems.",
    "categoryIds": [
      "industrial-safety-ppe",
      "fire-safety-equipment",
      "explosion-proof-atex",
      "static-earthing-esd",
      "gas-detection-systems",
      "process-safety-equipment"
    ]
  },
  {
    "id": "tools",
    "title": "TOOLS & MATERIAL HANDLING",
    "description": "Industrial hand tools, power tools, hoists, and floor care machinery.",
    "categoryIds": [
      "hand-tools",
      "power-tools",
      "material-handling-equipment",
      "industrial-housekeeping"
    ]
  },
  {
    "id": "systems",
    "title": "INDUSTRIAL SYSTEMS & ELECTRICAL",
    "description": "Electrical infrastructure, lighting, earthing, and testing instruments.",
    "categoryIds": [
      "industrial-electrical-accessories",
      "earthing-lightning-protection",
      "industrial-lighting",
      "measuring-testing-instruments"
    ]
  },
  {
    "id": "workplace",
    "title": "WORKPLACE & COMPLIANCE",
    "description": "LOTO, spill containment, signages, and warehouse traffic safety.",
    "categoryIds": [
      "safety-signages",
      "lockout-tagout-loto",
      "spill-control-products",
      "warehouse-safety",
      "environmental-compliance-products"
    ]
  },
  {
    "id": "storage",
    "title": "STORAGE & CONSUMABLES",
    "description": "Racking, industrial workbenches, packaging, and maintenance consumables.",
    "categoryIds": [
      "industrial-storage-solutions",
      "industrial-furniture",
      "industrial-consumables",
      "packaging-materials"
    ]
  }
];

export const CATEGORIES: CategoryInfo[] = [
  {
    "id": "industrial-safety-ppe",
    "name": "Industrial Safety & PPE",
    "count": 17,
    "icon": "ShieldCheck",
    "image": "/assets/images/brochure/ppes.png",
    "gallery": {
    "layout": "large-plus-two",
    "main": {
        "url": "/assets/images/brochure/ppes.png",
        "alt": "Industrial Safety & Personal Protective Equipment Portfolio",
        "caption": "Certified Head-to-Toe Industrial PPE Range"
    },
    "secondary": {
        "url": "/assets/images/products/fall-protection-systems.png",
        "alt": "Fall Protection Systems and Full-Body Safety Harnesses",
        "caption": "Height Safety: Fall Arrester & Certified Harness Assembly"
    },
    "tertiary": {
        "url": "/assets/images/products/safety-shoes-s1-s2-s3.png",
        "alt": "Safety Footwear Range (S1, S2, S3)",
        "caption": "Footwear Range: S1, S2, S3 Steel-Toe Industrial Safety Shoes"
    }
},
    "megaGroup": "safety",
    "description": "Certified head-to-toe personal protective equipment engineered for heavy industrial hazards and worker safety."
  },
  {
    "id": "fire-safety-equipment",
    "name": "Fire Safety Equipment",
    "count": 17,
    "icon": "Flame",
    "image": "/assets/images/brochure/fire-suppression.png",
    "gallery": {
    "layout": "large-plus-two",
    "main": {
        "url": "/assets/images/brochure/fire-suppression.png",
        "alt": "Fire Protection & Suppression Equipment",
        "caption": "Active & Passive Fire Suppression Systems and Life Safety Infrastructure"
    },
    "secondary": {
        "url": "/assets/images/brochure/fire-suppression-line-diagram.png",
        "alt": "Fire Suppression Line Diagram & System Architecture",
        "caption": "System Architecture: Clean Agent & Automated Piping Layout"
    },
    "tertiary": {
        "url": "/assets/images/fire_extinguisher_1779045831196.png",
        "alt": "Industrial Fire Extinguishers & First-Response Units",
        "caption": "First Response: Portable & Mobile Fire Extinguisher Units"
    }
},
    "megaGroup": "safety",
    "description": "Complete active and passive fire protection systems, suppression units, hydrants, and life-safety equipment."
  },
  {
    "id": "explosion-proof-atex",
    "name": "Explosion Proof / ATEX Products",
    "count": 16,
    "icon": "Zap",
    "image": "/assets/images/brochure/atex-products-1.png",
    "gallery": {
    "layout": "large-plus-two",
    "main": {
        "url": "/assets/images/brochure/atex-products-1.png",
        "alt": "Explosion Proof ATEX Plant Installation",
        "caption": "Industrial Hazardous Area Plant Installation (Zone 1, 2, 21, 22)"
    },
    "secondary": {
        "url": "/assets/images/brochure/atex-products.png",
        "alt": "ATEX Certified Electrical Equipment & Enclosures",
        "caption": "Certified Flameproof Luminaires, Junction Boxes & Cable Glands"
    },
    "tertiary": {
        "url": "/assets/images/atex_equipment_1787829496955.png",
        "alt": "ATEX Control Stations and Heavy Enclosures",
        "caption": "Heavy-Duty Flameproof Enclosures & Operator Control Stations"
    }
},
    "megaGroup": "safety",
    "description": "Certified Zone 1, 2, 21, and 22 explosion-protected electrical and instrumentation gear for flammable atmospheres."
  },
  {
    "id": "static-earthing-esd",
    "name": "Static Earthing & ESD Products",
    "count": 15,
    "icon": "Activity",
    "image": "/assets/images/brochure/esd-protection.png",
    "gallery": {
    "layout": "large-plus-two",
    "main": {
        "url": "/assets/images/brochure/esd-protection.png",
        "alt": "Static Earthing & Bonding Systems for Tankers & Plant",
        "caption": "Hazardous Area Static Grounding Verification & Interlock Systems"
    },
    "secondary": {
        "url": "/assets/images/brochure/esd-systems.png",
        "alt": "Cleanroom & Electronics ESD Protection Range",
        "caption": "ESD Workstations, Dissipative Apparel, Mats & Personnel Grounding"
    },
    "tertiary": {
        "url": "/assets/images/brochure/earthing-and-bonding-systems.png",
        "alt": "Heavy Duty Earthing Clamps & Retractable Cable Reels",
        "caption": "ATEX Certified Grounding Clamps & Retractable Heavy Cable Reels"
    }
},
    "megaGroup": "safety",
    "description": "Electrostatic discharge control, static grounding verification, and personnel dissipation systems for cleanrooms and flammable transfer points."
  },
  {
    "id": "hand-tools",
    "name": "Hand Tools",
    "count": 11,
    "icon": "Wrench",
    "image": "/assets/images/brochure/hand-tools.png",
    "gallery": {
    "layout": "large-plus-two",
    "main": {
        "url": "/assets/images/brochure/hand-tools.png",
        "alt": "Industrial Hand Tools & Mechanical Kits",
        "caption": "Precision Mechanical Hand Tools, Torque Wrenches & Heavy Tool Sets"
    },
    "secondary": {
        "url": "/assets/images/brochure/non-sparking-tools.png",
        "alt": "Non-Sparking Safety Tools (Al-Bronze & Cu-Be)",
        "caption": "Certified Non-Sparking Safety Tools for Flammable Plant Maintenance"
    },
    "tertiary": {
        "url": "/assets/images/hand_tools_non_sparking_1787829533302.png",
        "alt": "Insulated and Mechanical Hand Tool Sets",
        "caption": "1000V Insulated Electrician Tools & Industrial Socket Assortments"
    }
},
    "megaGroup": "tools",
    "description": "Premium non-sparking safety tools, insulated electrician tools, and precision mechanical maintenance hand tools."
  },
  {
    "id": "power-tools",
    "name": "Power Tools",
    "count": 8,
    "icon": "Hammer",
    "image": "/assets/images/brochure/power-tools.png",
    "gallery": {
    "layout": "large-plus-two",
    "main": {
        "url": "/assets/images/brochure/power-tools.png",
        "alt": "Heavy-Duty Industrial Power Tools Collection",
        "caption": "Industrial Electric, Pneumatic & Cordless Fabrication Tools"
    },
    "secondary": {
        "url": "/assets/images/crops/power-tools-drills.png",
        "alt": "High-Torque Rotary Hammers & Drills",
        "caption": "Precision Drilling: Heavy Rotary Drills & Impact Wrenches"
    },
    "tertiary": {
        "url": "/assets/images/crops/power-tools-grinders.png",
        "alt": "Industrial Angle Grinders & Hydraulic Cutters",
        "caption": "Cutting & Grinding: Angle Grinders & Hydraulic Crimping Tools"
    }
},
    "megaGroup": "tools",
    "description": "Heavy-duty industrial electric, cordless, pneumatic, and hydraulic construction and fabrication power tools."
  },
  {
    "id": "material-handling-equipment",
    "name": "Material Handling Equipment",
    "count": 11,
    "icon": "Package",
    "image": "/assets/images/material_handling_crane_1787829586885.png",
    "gallery": {
    "layout": "large-plus-two",
    "main": {
        "url": "/assets/images/material_handling_crane_1787829586885.png",
        "alt": "Industrial Material Handling & Overhead Lifting Solutions",
        "caption": "Plant Logistics: Heavy Overhead Cranes, Slings & Warehouse Movement"
    },
    "secondary": {
        "url": "/assets/images/crops/material-handling-hoist.png",
        "alt": "Overhead Hoist & Chain Pulley Systems",
        "caption": "Lifting Hardware: Chain Pulley Blocks, Manual Winches & Lifting Clamps"
    },
    "tertiary": {
        "url": "/assets/images/crops/material-handling-rigging.png",
        "alt": "Rigging Slings, Shackles and Pallet Trucks",
        "caption": "Rigging Gear: Certified Web Slings, Wire Rope Slings & Heavy Shackles"
    }
},
    "megaGroup": "tools",
    "description": "Industrial warehouse logistics, drum handling, lifting gear, rigging slings, and overhead movement systems."
  },
  {
    "id": "spill-control-products",
    "name": "Spill Control Products",
    "count": 8,
    "icon": "Droplets",
    "image": "/assets/images/brochure/spill-control-2.png",
    "gallery": {
    "layout": "large-plus-two",
    "main": {
        "url": "/assets/images/brochure/spill-control-2.png",
        "alt": "Chemical & Oil Spill Containment Solutions",
        "caption": "Secondary Containment Pallets, Spill Berms & Drum Handling Funnels"
    },
    "secondary": {
        "url": "/assets/images/brochure/spill-control-1.png",
        "alt": "Rapid Emergency Spill Kits & Absorbents",
        "caption": "Rapid Emergency Response Spill Kits & Chemical Absorbent Pads"
    },
    "tertiary": {
        "url": "/assets/images/crops/spill-pallet-detail.png",
        "alt": "Heavy Duty Polyethylene Spill Pallet Unit",
        "caption": "Bunded Containment: Polyethylene 4-Drum Secondary Containment Unit"
    }
},
    "megaGroup": "workplace",
    "description": "Rapid-response oil, chemical, and universal fluid spill kits, containment berms, and secondary containment pallets."
  },
  {
    "id": "industrial-housekeeping",
    "name": "Industrial Housekeeping",
    "count": 7,
    "icon": "Sparkles",
    "image": "/assets/images/brochure/industrial-housekeeping.png",
    "gallery": {
    "layout": "large-plus-two",
    "main": {
        "url": "/assets/images/brochure/industrial-housekeeping.png",
        "alt": "Industrial Commercial Floor Scrubbers and Heavy Cleaning Units",
        "caption": "Ride-On Floor Scrubbers, Sweepers & Heavy-Duty Plant Sanitization"
    },
    "secondary": {
        "url": "/assets/images/brochure/housekeeping.png",
        "alt": "Industrial Vacuum Cleaners & Waste Containers",
        "caption": "Heavy Duty Wet/Dry Industrial Vacuums & Plant Waste Stations"
    },
    "tertiary": {
        "url": "/assets/images/crops/housekeeping-scrubber-detail.png",
        "alt": "Motorized Industrial Floor Scrubber Unit",
        "caption": "Automated Floor Maintenance: High-Pressure Rotary Scrubber System"
    }
},
    "megaGroup": "tools",
    "description": "Heavy-duty commercial floor care machinery, industrial vacuum units, hazardous waste bins, and eco-degreasers."
  },
  {
    "id": "safety-signages",
    "name": "Safety Signages",
    "count": 7,
    "icon": "AlertTriangle",
    "image": "/assets/images/brochure/safety-signage-1.png",
    "gallery": {
    "layout": "large-plus-two",
    "main": {
        "url": "/assets/images/brochure/safety-signage-1.png",
        "alt": "Industrial Safety Signage & Visual Plant Demarcation",
        "caption": "OSHA & ISO Compliant Warning, Prohibition & Mandatory Signage"
    },
    "secondary": {
        "url": "/assets/images/brochure/safety-signage-2.png",
        "alt": "Photoluminescent Exit Signs and Pipe Markers",
        "caption": "Glow-in-the-Dark Photoluminescent Wayfinding, Exit Signs & Pipe Markers"
    },
    "tertiary": {
        "url": "/assets/images/crops/safety-signage-detail.png",
        "alt": "Facility Emergency Hazard Signage",
        "caption": "High-Visibility Safety Caution Panels & Floor Marking Demarcation"
    }
},
    "megaGroup": "workplace",
    "description": "Standardized visual safety communication boards, photoluminescent exit paths, and floor hazard demarcation tapes."
  },
  {
    "id": "lockout-tagout-loto",
    "name": "Lockout Tagout / LOTO",
    "count": 7,
    "icon": "Lock",
    "image": "/assets/images/brochure/lockouts-and-tagouts.png",
    "gallery": {
    "layout": "large-plus-two",
    "main": {
        "url": "/assets/images/brochure/lockouts-and-tagouts.png",
        "alt": "Lockout Tagout Safety Stations and Hasps",
        "caption": "Centralized Lockout Tagout Station with Padlocks, Hasps & Tags"
    },
    "secondary": {
        "url": "/assets/images/brochure/loto.png",
        "alt": "Valve and Circuit Breaker Lockout Devices",
        "caption": "Hazardous Energy Isolation: Ball Valve, Butterfly Valve & Breaker Lockouts"
    },
    "tertiary": {
        "url": "/assets/images/crops/loto-station-detail.png",
        "alt": "Industrial Isolation Padlocks and Group Lock Boxes",
        "caption": "Personnel Safety: Dielectric Padlocks, Heavy Cable Lockouts & Group Boxes"
    }
},
    "megaGroup": "workplace",
    "description": "Hazardous energy isolation padlocks, valve lockouts, circuit breaker lockouts, and safety lockout stations."
  },
  {
    "id": "industrial-electrical-accessories",
    "name": "Industrial Electrical Accessories",
    "count": 9,
    "icon": "Plug",
    "image": "/assets/images/crops/electrical-junction-box.png",
    "gallery": {
    "layout": "large-plus-two",
    "main": {
        "url": "/assets/images/crops/electrical-junction-box.png",
        "alt": "Industrial Electrical Junction Boxes and Panel Infrastructure",
        "caption": "Certified Industrial Enclosures, Distribution Junction Boxes & Terminations"
    },
    "secondary": {
        "url": "/assets/images/crops/electrical-plugs-switches.png",
        "alt": "Industrial CEE Plugs, Sockets and Control Switches",
        "caption": "IP67 Heavy Industrial Plugs, Sockets & Interlocked Receptacles"
    },
    "tertiary": {
        "url": "/assets/images/crops/electrical-cable-glands.png",
        "alt": "Cable Glands, Lugs, Heat Shrink Sleeves and Terminals",
        "caption": "Cable Management: Armoured Cable Glands, Lugs & Terminal Blocks"
    }
},
    "megaGroup": "systems",
    "description": "Certified cable terminations, industrial junction boxes, CEE plugs and sockets, and control panel wiring accessories."
  },
  {
    "id": "earthing-lightning-protection",
    "name": "Earthing & Lightning Protection",
    "count": 8,
    "icon": "CloudLightning",
    "image": "/assets/images/brochure/earthing-and-bonding-solutions.png",
    "gallery": {
    "layout": "large-plus-two",
    "main": {
        "url": "/assets/images/brochure/earthing-and-bonding-solutions.png",
        "alt": "Earthing and Lightning Protection Solutions",
        "caption": "Chemical Earthing Electrodes, Earth Pits & Lightning Arrester Systems"
    },
    "secondary": {
        "url": "/assets/images/crops/earthing-electrodes-crop.png",
        "alt": "Copper Bonded Chemical Earthing Electrodes",
        "caption": "Maintenance-Free Pure Copper Bonded Electrodes & Backfill Compound"
    },
    "tertiary": {
        "url": "/assets/images/crops/lightning-arresters-crop.png",
        "alt": "Early Streamer Emission (ESE) Lightning Arresters",
        "caption": "Early Streamer Lightning Protection, Copper Tape & Test Disconnect Links"
    }
},
    "megaGroup": "systems",
    "description": "Maintenance-free chemical earthing electrodes, lightning arresters, and earth enhancement backfill compounds."
  },
  {
    "id": "industrial-lighting",
    "name": "Industrial Lighting",
    "count": 7,
    "icon": "Lightbulb",
    "image": "/assets/images/brochure/led-lightings.png",
    "gallery": {
    "layout": "large-plus-two",
    "main": {
        "url": "/assets/images/brochure/led-lightings.png",
        "alt": "High Efficiency Industrial LED Luminaires",
        "caption": "Commercial & Heavy Plant LED High Bays, Flood Lights & Linear Luminaires"
    },
    "secondary": {
        "url": "/assets/images/brochure/industrial-lightings.png",
        "alt": "Flameproof & Heavy Industrial Outdoor Luminaires",
        "caption": "IP66 / IP67 Street Lights, Stadium Flood Lights & Hazardous Area Luminaires"
    },
    "tertiary": {
        "url": "/assets/images/crops/led-highbay-detail.png",
        "alt": "UFO LED High Bay Industrial Luminaire",
        "caption": "Energy Efficient: High Lumen UFO High Bay Fixture with Thermal Dissipation"
    }
},
    "megaGroup": "systems",
    "description": "High-efficiency industrial LED luminaires, explosion-proof high bays, stadium flood lights, and emergency exit pathway lighting."
  },
  {
    "id": "gas-detection-systems",
    "name": "Gas Detection Systems",
    "count": 6,
    "icon": "Gauge",
    "image": "/assets/images/brochure/gas-detections.png",
    "gallery": {
    "layout": "large-plus-two",
    "main": {
        "url": "/assets/images/brochure/gas-detections.png",
        "alt": "Fixed Multi-Channel Gas Detection Control Panels",
        "caption": "Centralized Gas Detection Panels with Remote Sensor Transmitter Heads"
    },
    "secondary": {
        "url": "/assets/images/brochure/gas-detectors.png",
        "alt": "Portable Multi-Gas & Toxic Gas Detectors",
        "caption": "Personal 4-Gas Monitors, VOC Photoionization Detectors & Sampling Pumps"
    },
    "tertiary": {
        "url": "/assets/images/gas_detection_system_1787829548855.png",
        "alt": "Gas Transmitter and Traceable Calibration Gas Kits",
        "caption": "Fixed Flameproof Transmitter Unit & Traceable Calibration Gas Cylinders"
    }
},
    "megaGroup": "safety",
    "description": "Fixed gas detection heads, multi-gas monitors, photoionization VOC detectors, and traceable calibration gas cylinders."
  },
  {
    "id": "process-safety-equipment",
    "name": "Process Safety Equipment",
    "count": 6,
    "icon": "ShowerHead",
    "image": "/assets/images/brochure/process-safety.png",
    "gallery": {
    "layout": "large-plus-two",
    "main": {
        "url": "/assets/images/brochure/process-safety.png",
        "alt": "Emergency Drench Shower & Decontamination Stations",
        "caption": "ANSI Compliant Combination Emergency Showers & Eyewash Stations"
    },
    "secondary": {
        "url": "/assets/images/brochure/process-safety-equipment.png",
        "alt": "Flammables Safety Storage Cabinets",
        "caption": "FM Certified Double-Wall Yellow Flammable Liquid Storage Cabinets"
    },
    "tertiary": {
        "url": "/assets/images/crops/process-shower-detail.png",
        "alt": "Emergency Eye Wash Bowl & Foot Treadle Mechanism",
        "caption": "Hands-Free Emergency Eye/Face Wash Unit with High-Flow Aerated Nozzles"
    }
},
    "megaGroup": "safety",
    "description": "Emergency drench showers, eyewash stations, certified safety storage cabinets, and gas cylinder safety storage."
  },
  {
    "id": "industrial-storage-solutions",
    "name": "Industrial Storage Solutions",
    "count": 5,
    "icon": "Boxes",
    "image": "/assets/images/brochure/storage.png",
    "gallery": {
    "layout": "large-plus-two",
    "main": {
        "url": "/assets/images/brochure/storage.png",
        "alt": "Warehouse Heavy Pallet Racking & Multi-Tier Shelving",
        "caption": "Industrial Heavy-Duty Pallet Racking & High-Bay Mezzanine Storage"
    },
    "secondary": {
        "url": "/assets/images/brochure/storage-solutions.png",
        "alt": "Modular Tool Cabinets, Bin Storage & Workforce Lockers",
        "caption": "Modular Tool Drawer Cabinets, Plastic Parts Bins & Workforce Lockers"
    },
    "tertiary": {
        "url": "/assets/images/crops/pallet-racking-detail.png",
        "alt": "Heavy Steel Structural Racking Uprights",
        "caption": "Structural High-Load Capacity Storage Racks for Industrial Pallets"
    }
},
    "megaGroup": "storage",
    "description": "Heavy-duty pallet racking, industrial tool drawer cabinets, modular shelving, and personal workforce lockers."
  },
  {
    "id": "industrial-furniture",
    "name": "Industrial Furniture",
    "count": 5,
    "icon": "Armchair",
    "image": "/assets/images/brochure/industrial-furniture.png",
    "gallery": {
    "layout": "large-plus-two",
    "main": {
        "url": "/assets/images/brochure/industrial-furniture.png",
        "alt": "Heavy-Duty Industrial Workbenches & Assembly Stations",
        "caption": "Modular Assembly Workbenches, Tool Racks & Heavy Steel Worktables"
    },
    "secondary": {
        "url": "/assets/images/crops/industrial-furniture-workbench.png",
        "alt": "Industrial Workbench Toolboard & Power Duct",
        "caption": "Ergonomic Toolboard Backing, Overhead Lighting & Integrated Power Ducts"
    },
    "tertiary": {
        "url": "/assets/images/crops/industrial-furniture-seating.png",
        "alt": "Industrial Operator Ergonomic Chairs & Tool Drawers",
        "caption": "Heavy-Duty Ergonomic Operator Task Seating & Lockable Drawer Pedestals"
    }
},
    "megaGroup": "storage",
    "description": "Heavy-duty steel assembly workbenches, laboratory grade workstations, and cleanroom ergonomic operator seating."
  },
  {
    "id": "measuring-testing-instruments",
    "name": "Measuring & Testing Instruments",
    "count": 10,
    "icon": "Thermometer",
    "image": "/assets/images/brochure/measuring-testing-instruments.png",
    "gallery": {
    "layout": "large-plus-two",
    "main": {
        "url": "/assets/images/brochure/measuring-testing-instruments.png",
        "alt": "Precision Calibration & Electrical Diagnostic Equipment",
        "caption": "Thermal Imaging Cameras, Digital Insulation Testers & Diagnostic Clamp Meters"
    },
    "secondary": {
        "url": "/assets/images/brochure/measuring-testing-equipment.png",
        "alt": "Digital Multimeters, Sound Level Meters & Environmental Gauges",
        "caption": "High Precision True-RMS Multimeters, Lux Meters & Sound Level Meters"
    },
    "tertiary": {
        "url": "/assets/images/measuring_instruments_1787829606141.png",
        "alt": "Plant Diagnostic Multimeter and Coating Thickness Gauges",
        "caption": "Portable Earth Resistance Testers, Vibration Meters & Ultrasonic Gauges"
    }
},
    "megaGroup": "systems",
    "description": "Precision calibration-ready thermal imagers, digital clamp meters, insulation testers, and plant diagnostic tools."
  },
  {
    "id": "industrial-consumables",
    "name": "Industrial Consumables",
    "count": 8,
    "icon": "Container",
    "image": "/assets/images/brochure/industrial-consumables-2.png",
    "gallery": {
    "layout": "large-plus-two",
    "main": {
        "url": "/assets/images/brochure/industrial-consumables-2.png",
        "alt": "Industrial Adhesives, Sealants and Lubricants Range",
        "caption": "Structural Adhesives, Silicone Sealants, Threadlockers & Industrial Aerosols"
    },
    "secondary": {
        "url": "/assets/images/brochure/industrial-consumables-1.png",
        "alt": "Maintenance Greases, PTFE Tapes and Solvents",
        "caption": "High-Performance Cutting Oils, Food Grade Greases & PTFE Thread Tapes"
    },
    "tertiary": {
        "url": "/assets/images/crops/consumables-adhesives-detail.png",
        "alt": "Engineering Chemical Cartridges & Thread Compounds",
        "caption": "Heavy Plant Maintenance Chemicals, Anaerobic Compounds & Degreasers"
    }
},
    "megaGroup": "storage",
    "description": "Heavy-duty engineering adhesives, structural sealants, threadlockers, food-grade lubricants, and PTFE tapes."
  },
  {
    "id": "packaging-materials",
    "name": "Packaging Materials",
    "count": 7,
    "icon": "Box",
    "image": "/assets/images/brochure/packing-materials.png",
    "gallery": {
    "layout": "large-plus-two",
    "main": {
        "url": "/assets/images/brochure/packing-materials.png",
        "alt": "Industrial Packaging Materials and Stretch Films",
        "caption": "Automated Stretch Wrapping, Strapping Tools, Corrugated Boxes & Pallets"
    },
    "secondary": {
        "url": "/assets/images/brochure/packing-materials-products.png",
        "alt": "VCI Corrosion Protection & Bubble Wrap Rolls",
        "caption": "VCI Anti-Corrosion Bags, Silica Gel Desiccants & Protective Air Cushion Films"
    },
    "tertiary": {
        "url": "/assets/images/crops/packaging-strapping-detail.png",
        "alt": "Pneumatic Strapping Tensioner and PET Strapping Band",
        "caption": "High-Tensile Strapping Bands, Tensioner Tools & Barrier Moisture Packaging"
    }
},
    "megaGroup": "storage",
    "description": "Export-grade protective packaging, stretch films, corrosion-inhibiting VCI bags, and desiccant moisture controls."
  },
  {
    "id": "warehouse-safety",
    "name": "Warehouse Safety",
    "count": 8,
    "icon": "Truck",
    "image": "/assets/images/brochure/warehouse-safety.png",
    "gallery": {
    "layout": "large-plus-two",
    "main": {
        "url": "/assets/images/brochure/warehouse-safety.png",
        "alt": "Warehouse Traffic Management & Heavy Impact Bollards",
        "caption": "Heavy Steel Collision Bollards, Forklift Guard Rails & Impact Barrier Systems"
    },
    "secondary": {
        "url": "/assets/images/brochure/warehouse-safety-products.png",
        "alt": "Convex Safety Mirrors, Wheel Chocks and Column Protectors",
        "caption": "Outdoor Convex Mirrors, Heavy Rubber Wheel Chocks & Dock Levelers"
    },
    "tertiary": {
        "url": "/assets/images/crops/warehouse-bollard-detail.png",
        "alt": "High-Visibility Industrial Guard Railing",
        "caption": "High-Visibility Safety Bollards, Modular Crash Barriers & Speed Breakers"
    }
},
    "megaGroup": "workplace",
    "description": "Facility traffic management, heavy steel bollards, dock levelers, impact guards, and optical safety mirrors."
  },
  {
    "id": "environmental-compliance-products",
    "name": "Environmental & Compliance Products",
    "count": 6,
    "icon": "Leaf",
    "image": "/assets/images/brochure/environmental-compliance-1.png",
    "gallery": {
    "layout": "large-plus-two",
    "main": {
        "url": "/assets/images/brochure/environmental-compliance-1.png",
        "alt": "Environmental Monitoring Systems & Acoustic Noise Barriers",
        "caption": "Industrial Acoustic Sound Barriers, Ambient Air Sampling & Dust Monitors"
    },
    "secondary": {
        "url": "/assets/images/brochure/environmental-compliance-2.png",
        "alt": "Water Quality Testing & Industrial Compliance Analyzers",
        "caption": "Multiparameter Water Testing Kits, Waste Segregation & Effluent Monitoring"
    },
    "tertiary": {
        "url": "/assets/images/crops/environmental-monitor-detail.png",
        "alt": "Continuous Particulate & Environmental Emissions Monitor",
        "caption": "Continuous Emission Monitoring: Particulate Analyzers & Spill Containment"
    }
},
    "megaGroup": "workplace",
    "description": "Environmental monitoring analyzers, acoustic noise barriers, industrial water testing, and compliance containment systems."
  }
];

export const PRODUCTS: ProductItem[] = [
  {
    "id": "industrial-safety-ppe-safety-helmets",
    "name": "Safety Helmets",
    "category": "Industrial Safety & PPE",
    "categoryId": "industrial-safety-ppe",
    "description": "Industrial high-density impact-resistant safety helmets with ratchet suspension.",
    "image": "/assets/images/products/safety-helmet.png",
    "tags": [
      "helmet",
      "head protection",
      "hard hat",
      "ppe",
      "safety"
    ],
    "isPopular": true
  },
  {
    "id": "industrial-safety-ppe-safety-shoes-s1-s2-s3",
    "name": "Safety Shoes (S1, S2, S3)",
    "category": "Industrial Safety & PPE",
    "categoryId": "industrial-safety-ppe",
    "description": "Steel-toe puncture-resistant and antistatic industrial safety footwear.",
    "image": "/assets/images/products/safety-shoes-s1-s2-s3.png",
    "tags": [
      "shoes",
      "boots",
      "footwear",
      "s1",
      "s2",
      "s3",
      "steel toe"
    ],
    "isPopular": true
  },
  {
    "id": "industrial-safety-ppe-industrial-gloves-mechanical-chemical-heat-resistant-cut-resistant",
    "name": "Industrial Gloves (Mechanical, Chemical, Heat Resistant, Cut Resistant)",
    "category": "Industrial Safety & PPE",
    "categoryId": "industrial-safety-ppe",
    "description": "Specialized industrial hand protection for chemical, cut, abrasion, and thermal hazards.",
    "image": "/assets/images/products/industrial-gloves-mechanical-chemical-heat-cut.png",
    "tags": [
      "gloves",
      "hand protection",
      "cut resistant",
      "chemical gloves",
      "heat gloves"
    ],
    "isPopular": false
  },
  {
    "id": "industrial-safety-ppe-safety-goggles",
    "name": "Safety Goggles",
    "category": "Industrial Safety & PPE",
    "categoryId": "industrial-safety-ppe",
    "description": "Anti-fog, scratch-resistant impact safety goggles for chemical splash and particle protection.",
    "image": "/assets/images/products/safety-goggles.png",
    "tags": [
      "goggles",
      "eye protection",
      "eyewear"
    ],
    "isPopular": false
  },
  {
    "id": "industrial-safety-ppe-face-shields",
    "name": "Face Shields",
    "category": "Industrial Safety & PPE",
    "categoryId": "industrial-safety-ppe",
    "description": "Full-face polycarbonate protection against molten metal, chemical splash, and high-speed impacts.",
    "image": "/assets/images/products/face-shields.png",
    "tags": [
      "face shield",
      "visor",
      "protection"
    ],
    "isPopular": false
  },
  {
    "id": "industrial-safety-ppe-ear-plugs-ear-muffs",
    "name": "Ear Plugs & Ear Muffs",
    "category": "Industrial Safety & PPE",
    "categoryId": "industrial-safety-ppe",
    "description": "High-attenuation industrial hearing protectors for noisy manufacturing environments.",
    "image": "/assets/images/products/ear-plugs-ear-muffs.png",
    "tags": [
      "ear plugs",
      "ear muffs",
      "hearing protection",
      "noise"
    ],
    "isPopular": false
  },
  {
    "id": "industrial-safety-ppe-reflective-jackets",
    "name": "Reflective Jackets",
    "category": "Industrial Safety & PPE",
    "categoryId": "industrial-safety-ppe",
    "description": "High-visibility fluorescent safety vests and jackets with retro-reflective tape.",
    "image": "/assets/images/products/reflective-jackets.png",
    "tags": [
      "reflective jacket",
      "high-vis",
      "vest",
      "safety vest"
    ],
    "isPopular": false
  },
  {
    "id": "industrial-safety-ppe-fr-clothing",
    "name": "FR Clothing",
    "category": "Industrial Safety & PPE",
    "categoryId": "industrial-safety-ppe",
    "description": "Flame-retardant treated protective apparel designed for fire and thermal flash hazards.",
    "image": "/assets/images/products/fr-clothing.png",
    "tags": [
      "fr clothing",
      "fire retardant",
      "coverall",
      "flame resistant"
    ],
    "isPopular": false
  },
  {
    "id": "industrial-safety-ppe-arc-flash-suits",
    "name": "Arc Flash Suits",
    "category": "Industrial Safety & PPE",
    "categoryId": "industrial-safety-ppe",
    "description": "Multi-layered arc-rated protective clothing engineered for high-voltage electrical environments.",
    "image": "/assets/images/products/arc-flash-suits.png",
    "tags": [
      "arc flash",
      "electrical safety",
      "suit"
    ],
    "isPopular": false
  },
  {
    "id": "industrial-safety-ppe-chemical-splash-suits",
    "name": "Chemical Splash Suits",
    "category": "Industrial Safety & PPE",
    "categoryId": "industrial-safety-ppe",
    "description": "Liquid-tight chemical protective coveralls resistant to acids, alkalis, and hazardous liquids.",
    "image": "/assets/images/products/chemical-splash-suits.png",
    "tags": [
      "chemical suit",
      "hazmat",
      "splash suit"
    ],
    "isPopular": false
  },
  {
    "id": "industrial-safety-ppe-respirators-gas-masks",
    "name": "Respirators & Gas Masks",
    "category": "Industrial Safety & PPE",
    "categoryId": "industrial-safety-ppe",
    "description": "Half-face and full-face particulate and chemical vapor respiratory protection systems.",
    "image": "/assets/images/products/respirators-gas-masks.png",
    "tags": [
      "respirators",
      "gas masks",
      "n95",
      "cartridge",
      "breathing"
    ],
    "isPopular": false
  },
  {
    "id": "industrial-safety-ppe-scba-sets",
    "name": "SCBA Sets",
    "category": "Industrial Safety & PPE",
    "categoryId": "industrial-safety-ppe",
    "description": "Self-contained breathing apparatus for confined space entry and toxic atmosphere operations.",
    "image": "/assets/images/products/scba-sets.png",
    "tags": [
      "scba",
      "breathing apparatus",
      "air cylinder"
    ],
    "isPopular": false
  },
  {
    "id": "industrial-safety-ppe-fall-protection-systems",
    "name": "Fall Protection Systems",
    "category": "Industrial Safety & PPE",
    "categoryId": "industrial-safety-ppe",
    "description": "Engineered overhead fall arrest systems, anchors, and deceleration devices.",
    "image": "/assets/images/products/fall-protection-systems.png",
    "tags": [
      "fall protection",
      "height safety",
      "arrest"
    ],
    "isPopular": false
  },
  {
    "id": "industrial-safety-ppe-safety-harnesses",
    "name": "Safety Harnesses",
    "category": "Industrial Safety & PPE",
    "categoryId": "industrial-safety-ppe",
    "description": "Full-body industrial harnesses with dorsal and sternal D-rings for fall arrest.",
    "image": "/assets/images/products/safety-harnesses.png",
    "tags": [
      "safety harness",
      "full body harness",
      "rigging"
    ],
    "isPopular": false
  },
  {
    "id": "industrial-safety-ppe-lifelines",
    "name": "Lifelines",
    "category": "Industrial Safety & PPE",
    "categoryId": "industrial-safety-ppe",
    "description": "Vertical and horizontal rope or steel wire lifelines with energy absorbers.",
    "image": "/assets/images/products/lifelines.png",
    "tags": [
      "lifelines",
      "rope",
      "cable",
      "fall arrest"
    ],
    "isPopular": false
  },
  {
    "id": "industrial-safety-ppe-safety-nets",
    "name": "Safety Nets",
    "category": "Industrial Safety & PPE",
    "categoryId": "industrial-safety-ppe",
    "description": "High-tenacity polypropylene debris and personnel fall safety containment netting.",
    "image": "/assets/images/products/safety-nets.png",
    "tags": [
      "safety nets",
      "debris nets",
      "containment"
    ],
    "isPopular": false
  },
  {
    "id": "industrial-safety-ppe-welding-ppe",
    "name": "Welding PPE",
    "category": "Industrial Safety & PPE",
    "categoryId": "industrial-safety-ppe",
    "description": "Specialized welding helmets, auto-darkening visors, leather spats, and welding aprons.",
    "image": "/assets/images/products/welding-ppe.png",
    "tags": [
      "welding ppe",
      "welder",
      "leather apron",
      "helmet"
    ],
    "isPopular": false
  },
  {
    "id": "fire-safety-equipment-fire-extinguishers",
    "name": "Fire Extinguishers",
    "category": "Fire Safety Equipment",
    "categoryId": "fire-safety-equipment",
    "description": "ABC dry powder, CO2, foam, and clean agent certified portable fire extinguishers.",
    "image": "/assets/images/fire_extinguisher_1779045831196.png",
    "tags": [
      "fire extinguisher",
      "co2",
      "dry powder",
      "foam",
      "fire"
    ],
    "isPopular": true
  },
  {
    "id": "fire-safety-equipment-fire-blanket",
    "name": "Fire Blanket",
    "category": "Fire Safety Equipment",
    "categoryId": "fire-safety-equipment",
    "description": "Woven fiberglass emergency fire blankets for smothering small equipment and apparel fires.",
    "image": "/assets/images/fire_extinguisher_1779045831196.png",
    "tags": [
      "fire blanket",
      "fiberglass",
      "smothering",
      "fire"
    ],
    "isPopular": true
  },
  {
    "id": "fire-safety-equipment-fire-buckets",
    "name": "Fire Buckets",
    "category": "Fire Safety Equipment",
    "categoryId": "fire-safety-equipment",
    "description": "Heavy-gauge metal round-bottom sand and water buckets mounted on storage stands.",
    "image": "/assets/images/fire_extinguisher_1779045831196.png",
    "tags": [
      "fire buckets",
      "sand bucket",
      "stand"
    ],
    "isPopular": false
  },
  {
    "id": "fire-safety-equipment-fire-hose-reel",
    "name": "Fire Hose Reel",
    "category": "Fire Safety Equipment",
    "categoryId": "fire-safety-equipment",
    "description": "Swinging type wall-mounted fire hose reel drums with high-pressure reinforced hose and nozzle.",
    "image": "/assets/images/fire_extinguisher_1779045831196.png",
    "tags": [
      "fire hose reel",
      "hose",
      "nozzle"
    ],
    "isPopular": false
  },
  {
    "id": "fire-safety-equipment-fire-hydrants",
    "name": "Fire Hydrants",
    "category": "Fire Safety Equipment",
    "categoryId": "fire-safety-equipment",
    "description": "Single and double-outlet landing valves, fire hydrant pillars, and branch pipes.",
    "image": "/assets/images/fire_extinguisher_1779045831196.png",
    "tags": [
      "fire hydrants",
      "landing valve",
      "standpipe"
    ],
    "isPopular": false
  },
  {
    "id": "fire-safety-equipment-fire-alarm-system",
    "name": "Fire Alarm System",
    "category": "Fire Safety Equipment",
    "categoryId": "fire-safety-equipment",
    "description": "Conventional and addressable fire detection control panels, manual call points, and hooters.",
    "image": "/assets/images/fire_extinguisher_1779045831196.png",
    "tags": [
      "fire alarm",
      "control panel",
      "mcp",
      "hooter"
    ],
    "isPopular": false
  },
  {
    "id": "fire-safety-equipment-smoke-detectors",
    "name": "Smoke Detectors",
    "category": "Fire Safety Equipment",
    "categoryId": "fire-safety-equipment",
    "description": "Optical and ionization smoke sensors for early-stage smoldering fire detection.",
    "image": "/assets/images/fire_extinguisher_1779045831196.png",
    "tags": [
      "smoke detectors",
      "sensor",
      "fire alarm"
    ],
    "isPopular": false
  },
  {
    "id": "fire-safety-equipment-heat-detectors",
    "name": "Heat Detectors",
    "category": "Fire Safety Equipment",
    "categoryId": "fire-safety-equipment",
    "description": "Fixed temperature and rate-of-rise thermal sensors for kitchens and industrial boiler areas.",
    "image": "/assets/images/fire_extinguisher_1779045831196.png",
    "tags": [
      "heat detectors",
      "thermal sensor"
    ],
    "isPopular": false
  },
  {
    "id": "fire-safety-equipment-flame-detectors",
    "name": "Flame Detectors",
    "category": "Fire Safety Equipment",
    "categoryId": "fire-safety-equipment",
    "description": "UV/IR optical flame detectors designed for hydrocarbon fire detection in hazardous zones.",
    "image": "/assets/images/fire_extinguisher_1779045831196.png",
    "tags": [
      "flame detectors",
      "uv ir",
      "optical sensor"
    ],
    "isPopular": false
  },
  {
    "id": "fire-safety-equipment-gas-leak-detection-system",
    "name": "Gas Leak Detection System",
    "category": "Fire Safety Equipment",
    "categoryId": "fire-safety-equipment",
    "description": "Continuous toxic and combustible gas leak detection sensors with automatic shut-off linkage.",
    "image": "/assets/images/gas_detection_system_1787829548855.png",
    "tags": [
      "gas leak detection",
      "gas sensor",
      "leakage",
      "flammable"
    ],
    "isPopular": false
  },
  {
    "id": "fire-safety-equipment-emergency-exit-lights",
    "name": "Emergency Exit Lights",
    "category": "Fire Safety Equipment",
    "categoryId": "fire-safety-equipment",
    "description": "Battery backup illuminated directional exit luminaires for emergency egress pathways.",
    "image": "/assets/images/atex_equipment_1787829496955.png",
    "tags": [
      "emergency exit lights",
      "exit sign",
      "backup battery"
    ],
    "isPopular": false
  },
  {
    "id": "fire-safety-equipment-fire-signages",
    "name": "Fire Signages",
    "category": "Fire Safety Equipment",
    "categoryId": "fire-safety-equipment",
    "description": "Photoluminescent glow-in-the-dark fire safety, equipment identification, and evacuation signs.",
    "image": "/assets/images/fire_extinguisher_1779045831196.png",
    "tags": [
      "fire signages",
      "photoluminescent",
      "evacuation sign"
    ],
    "isPopular": false
  },
  {
    "id": "fire-safety-equipment-fire-suppression-systems",
    "name": "Fire Suppression Systems",
    "category": "Fire Safety Equipment",
    "categoryId": "fire-safety-equipment",
    "description": "Automated total flooding and local application gaseous fire extinguishing systems.",
    "image": "/assets/images/fire_extinguisher_1779045831196.png",
    "tags": [
      "fire suppression",
      "flooding system",
      "inert gas"
    ],
    "isPopular": false
  },
  {
    "id": "fire-safety-equipment-clean-agent-systems",
    "name": "Clean Agent Systems",
    "category": "Fire Safety Equipment",
    "categoryId": "fire-safety-equipment",
    "description": "Zero-residue chemical agent systems (Novec 1230 / FM-200) for server rooms and control panels.",
    "image": "/assets/images/fire_extinguisher_1779045831196.png",
    "tags": [
      "clean agent",
      "fm200",
      "novec 1230",
      "server room"
    ],
    "isPopular": false
  },
  {
    "id": "fire-safety-equipment-kitchen-suppression-systems",
    "name": "Kitchen Suppression Systems",
    "category": "Fire Safety Equipment",
    "categoryId": "fire-safety-equipment",
    "description": "Wet chemical automatic fire suppression engineered for commercial kitchen hoods and ducts.",
    "image": "/assets/images/fire_extinguisher_1779045831196.png",
    "tags": [
      "kitchen suppression",
      "wet chemical",
      "hood suppression"
    ],
    "isPopular": false
  },
  {
    "id": "fire-safety-equipment-fire-pumps",
    "name": "Fire Pumps",
    "category": "Fire Safety Equipment",
    "categoryId": "fire-safety-equipment",
    "description": "Main electric, diesel engine-driven, and jockey booster fire pumps meeting NFPA guidelines.",
    "image": "/assets/images/fire_extinguisher_1779045831196.png",
    "tags": [
      "fire pumps",
      "jockey pump",
      "diesel pump"
    ],
    "isPopular": false
  },
  {
    "id": "fire-safety-equipment-sprinkler-systems",
    "name": "Sprinkler Systems",
    "category": "Fire Safety Equipment",
    "categoryId": "fire-safety-equipment",
    "description": "Automatic glass-bulb water sprinkler heads, deluge valves, and flow switch monitoring arrays.",
    "image": "/assets/images/fire_extinguisher_1779045831196.png",
    "tags": [
      "sprinkler systems",
      "sprinkler head",
      "deluge valve"
    ],
    "isPopular": false
  },
  {
    "id": "explosion-proof-atex-atex-lighting",
    "name": "ATEX Lighting",
    "category": "Explosion Proof / ATEX Products",
    "categoryId": "explosion-proof-atex",
    "description": "Explosion-proof LED linear, flood, and high-bay fixtures certified for flammable atmospheres.",
    "image": "/assets/images/atex_equipment_1787829496955.png",
    "tags": [
      "atex lighting",
      "flameproof",
      "ex lighting",
      "zone 1"
    ],
    "isPopular": true
  },
  {
    "id": "explosion-proof-atex-atex-junction-boxes",
    "name": "ATEX Junction Boxes",
    "category": "Explosion Proof / ATEX Products",
    "categoryId": "explosion-proof-atex",
    "description": "Heavy-duty cast aluminum and stainless steel Ex-d and Ex-e terminal enclosures.",
    "image": "/assets/images/atex_equipment_1787829496955.png",
    "tags": [
      "atex junction boxes",
      "ex enclosure",
      "terminal box"
    ],
    "isPopular": true
  },
  {
    "id": "explosion-proof-atex-atex-control-stations",
    "name": "ATEX Control Stations",
    "category": "Explosion Proof / ATEX Products",
    "categoryId": "explosion-proof-atex",
    "description": "Flameproof localized control switch stations for motors, pumps, and process machinery.",
    "image": "/assets/images/atex_equipment_1787829496955.png",
    "tags": [
      "atex control stations",
      "operator station",
      "ex d"
    ],
    "isPopular": false
  },
  {
    "id": "explosion-proof-atex-atex-push-buttons",
    "name": "ATEX Push Buttons",
    "category": "Explosion Proof / ATEX Products",
    "categoryId": "explosion-proof-atex",
    "description": "Intrinsically safe and explosion-protected start/stop push buttons and selector switches.",
    "image": "/assets/images/atex_equipment_1787829496955.png",
    "tags": [
      "atex push buttons",
      "switches",
      "hazardous area"
    ],
    "isPopular": false
  },
  {
    "id": "explosion-proof-atex-atex-cable-glands",
    "name": "ATEX Cable Glands",
    "category": "Explosion Proof / ATEX Products",
    "categoryId": "explosion-proof-atex",
    "description": "Barrier and compound cable glands for armored and unarmored cables in hazardous zones.",
    "image": "/assets/images/atex_equipment_1787829496955.png",
    "tags": [
      "atex cable glands",
      "cable glands",
      "barrier gland"
    ],
    "isPopular": false
  },
  {
    "id": "explosion-proof-atex-atex-cameras",
    "name": "ATEX Cameras",
    "category": "Explosion Proof / ATEX Products",
    "categoryId": "explosion-proof-atex",
    "description": "Explosion-proof CCTV surveillance and inspection cameras with Ex-d stainless steel housing.",
    "image": "/assets/images/atex_equipment_1787829496955.png",
    "tags": [
      "atex cameras",
      "hazardous cctv",
      "explosion proof camera"
    ],
    "isPopular": false
  },
  {
    "id": "explosion-proof-atex-atex-mobile-phones",
    "name": "ATEX Mobile Phones",
    "category": "Explosion Proof / ATEX Products",
    "categoryId": "explosion-proof-atex",
    "description": "Intrinsically safe Zone 1/21 rugged smartphones engineered for hazardous field personnel.",
    "image": "/assets/images/atex_equipment_1787829496955.png",
    "tags": [
      "atex mobile phones",
      "intrinsically safe phone",
      "zone 1 phone"
    ],
    "isPopular": false
  },
  {
    "id": "explosion-proof-atex-atex-tablets",
    "name": "ATEX Tablets",
    "category": "Explosion Proof / ATEX Products",
    "categoryId": "explosion-proof-atex",
    "description": "Certified industrial tablets for digital workflow, field diagnostics, and asset inspection.",
    "image": "/assets/images/atex_equipment_1787829496955.png",
    "tags": [
      "atex tablets",
      "rugged tablet",
      "zone 1 tablet"
    ],
    "isPopular": false
  },
  {
    "id": "explosion-proof-atex-atex-radios",
    "name": "ATEX Radios",
    "category": "Explosion Proof / ATEX Products",
    "categoryId": "explosion-proof-atex",
    "description": "Intrinsically safe two-way radio walkie-talkies for hazardous plant communications.",
    "image": "/assets/images/atex_equipment_1787829496955.png",
    "tags": [
      "atex radios",
      "walkie talkie",
      "two way radio"
    ],
    "isPopular": false
  },
  {
    "id": "explosion-proof-atex-atex-flashlights",
    "name": "ATEX Flashlights",
    "category": "Explosion Proof / ATEX Products",
    "categoryId": "explosion-proof-atex",
    "description": "Handheld rechargeable and dry-cell safety torches certified for gas and dust environments.",
    "image": "/assets/images/atex_equipment_1787829496955.png",
    "tags": [
      "atex flashlights",
      "safety torch",
      "torch"
    ],
    "isPopular": false
  },
  {
    "id": "explosion-proof-atex-atex-fans",
    "name": "ATEX Fans",
    "category": "Explosion Proof / ATEX Products",
    "categoryId": "explosion-proof-atex",
    "description": "Anti-spark explosion-proof ventilation blowers and exhaust fans for confined spaces.",
    "image": "/assets/images/atex_equipment_1787829496955.png",
    "tags": [
      "atex fans",
      "ventilation",
      "exhaust fan"
    ],
    "isPopular": false
  },
  {
    "id": "explosion-proof-atex-atex-motors",
    "name": "ATEX Motors",
    "category": "Explosion Proof / ATEX Products",
    "categoryId": "explosion-proof-atex",
    "description": "Flameproof three-phase induction electric motors for hazardous process plants.",
    "image": "/assets/images/atex_equipment_1787829496955.png",
    "tags": [
      "atex motors",
      "flameproof motor",
      "electric motor"
    ],
    "isPopular": false
  },
  {
    "id": "explosion-proof-atex-atex-vacuum-cleaners",
    "name": "ATEX Vacuum Cleaners",
    "category": "Explosion Proof / ATEX Products",
    "categoryId": "explosion-proof-atex",
    "description": "Pneumatic and electric conductive vacuum systems for hazardous dust and powder cleanup.",
    "image": "/assets/images/atex_equipment_1787829496955.png",
    "tags": [
      "atex vacuum cleaners",
      "conductive vacuum",
      "combustible dust"
    ],
    "isPopular": false
  },
  {
    "id": "explosion-proof-atex-atex-multimeters",
    "name": "ATEX Multimeters",
    "category": "Explosion Proof / ATEX Products",
    "categoryId": "explosion-proof-atex",
    "description": "Intrinsically safe digital test meters for troubleshooting live circuits in Ex zones.",
    "image": "/assets/images/measuring_instruments_1787829606141.png",
    "tags": [
      "atex multimeters",
      "multimeter",
      "tester"
    ],
    "isPopular": false
  },
  {
    "id": "explosion-proof-atex-atex-hand-tools",
    "name": "ATEX Hand Tools",
    "category": "Explosion Proof / ATEX Products",
    "categoryId": "explosion-proof-atex",
    "description": "Non-sparking beryllium-copper and aluminum-bronze certified safety hand tools.",
    "image": "/assets/images/hand_tools_non_sparking_1787829533302.png",
    "tags": [
      "atex hand tools",
      "non sparking",
      "hand tools"
    ],
    "isPopular": false
  },
  {
    "id": "explosion-proof-atex-atex-drum-pumps",
    "name": "ATEX Drum Pumps",
    "category": "Explosion Proof / ATEX Products",
    "categoryId": "explosion-proof-atex",
    "description": "Explosion-proof electric and air-operated drum decanting pumps for flammable solvents.",
    "image": "/assets/images/material_handling_crane_1787829586885.png",
    "tags": [
      "atex drum pumps",
      "barrel pump",
      "solvent transfer"
    ],
    "isPopular": false
  },
  {
    "id": "static-earthing-esd-static-earthing-systems",
    "name": "Static Earthing Systems",
    "category": "Static Earthing & ESD Products",
    "categoryId": "static-earthing-esd",
    "description": "Heavy-duty truck, railcar, and vessel grounding systems with continuous interlock monitoring.",
    "image": "/assets/images/esd_static_gear_1787829514427.png",
    "tags": [
      "static earthing",
      "grounding",
      "static electricity"
    ],
    "isPopular": true
  },
  {
    "id": "static-earthing-esd-earth-rite-systems",
    "name": "Earth Rite Systems",
    "category": "Static Earthing & ESD Products",
    "categoryId": "static-earthing-esd",
    "description": "Intrinsically safe grounding verification systems with flashing LED status indicator.",
    "image": "/assets/images/esd_static_gear_1787829514427.png",
    "tags": [
      "earth rite",
      "ground verification",
      "interlock"
    ],
    "isPopular": true
  },
  {
    "id": "static-earthing-esd-bond-rite-systems",
    "name": "Bond Rite Systems",
    "category": "Static Earthing & ESD Products",
    "categoryId": "static-earthing-esd",
    "description": "Self-testing grounding clamps with continuous loop monitoring for drum filling operations.",
    "image": "/assets/images/esd_static_gear_1787829514427.png",
    "tags": [
      "bond rite",
      "grounding clamp",
      "static bond"
    ],
    "isPopular": false
  },
  {
    "id": "static-earthing-esd-earthing-clamps",
    "name": "Earthing Clamps",
    "category": "Static Earthing & ESD Products",
    "categoryId": "static-earthing-esd",
    "description": "Heavy-duty stainless steel and cast copper-alloy mechanical grounding clamps with tungsten carbide teeth.",
    "image": "/assets/images/esd_static_gear_1787829514427.png",
    "tags": [
      "earthing clamps",
      "ground clamps",
      "static clamp"
    ],
    "isPopular": false
  },
  {
    "id": "static-earthing-esd-retractable-cable-reels",
    "name": "Retractable Cable Reels",
    "category": "Static Earthing & ESD Products",
    "categoryId": "static-earthing-esd",
    "description": "Spring-rewind grounding cable reels with high-visibility Hytrel-coated grounding wire.",
    "image": "/assets/images/esd_static_gear_1787829514427.png",
    "tags": [
      "retractable cable reels",
      "grounding reel",
      "static reel"
    ],
    "isPopular": false
  },
  {
    "id": "static-earthing-esd-static-ground-monitoring-systems",
    "name": "Static Ground Monitoring Systems",
    "category": "Static Earthing & ESD Products",
    "categoryId": "static-earthing-esd",
    "description": "Multi-channel electronic ground verification instruments for chemical loading gantries.",
    "image": "/assets/images/esd_static_gear_1787829514427.png",
    "tags": [
      "static ground monitoring",
      "gantry ground",
      "monitoring"
    ],
    "isPopular": false
  },
  {
    "id": "static-earthing-esd-human-body-static-dissipaters",
    "name": "Human Body Static Dissipaters",
    "category": "Static Earthing & ESD Products",
    "categoryId": "static-earthing-esd",
    "description": "Touch-pad electrostatic discharge poles installed at hazardous plant access doors.",
    "image": "/assets/images/esd_static_gear_1787829514427.png",
    "tags": [
      "static dissipater",
      "touch ball",
      "human body static"
    ],
    "isPopular": false
  },
  {
    "id": "static-earthing-esd-conductive-flooring",
    "name": "Conductive Flooring",
    "category": "Static Earthing & ESD Products",
    "categoryId": "static-earthing-esd",
    "description": "Dissipative and conductive epoxy and vinyl tile flooring solutions for electronics manufacturing.",
    "image": "/assets/images/esd_static_gear_1787829514427.png",
    "tags": [
      "conductive flooring",
      "esd floor",
      "epoxy flooring"
    ],
    "isPopular": false
  },
  {
    "id": "static-earthing-esd-esd-mats",
    "name": "ESD Mats",
    "category": "Static Earthing & ESD Products",
    "categoryId": "static-earthing-esd",
    "description": "Dual-layer heat and chemical-resistant static dissipative rubber workbench table mats.",
    "image": "/assets/images/esd_static_gear_1787829514427.png",
    "tags": [
      "esd mats",
      "table mat",
      "workbench mat"
    ],
    "isPopular": false
  },
  {
    "id": "static-earthing-esd-esd-wrist-straps",
    "name": "ESD Wrist Straps",
    "category": "Static Earthing & ESD Products",
    "categoryId": "static-earthing-esd",
    "description": "Adjustable conductive fabric and metal wrist bands equipped with 1-megohm coiled cords.",
    "image": "/assets/images/esd_static_gear_1787829514427.png",
    "tags": [
      "esd wrist straps",
      "wrist band",
      "grounding cord"
    ],
    "isPopular": false
  },
  {
    "id": "static-earthing-esd-esd-shoes",
    "name": "ESD Shoes",
    "category": "Static Earthing & ESD Products",
    "categoryId": "static-earthing-esd",
    "description": "Static dissipative safety footwear providing low electrical resistance to drain charges safely.",
    "image": "/assets/images/safety_shoes_1779047006280.png",
    "tags": [
      "esd shoes",
      "dissipative footwear",
      "cleanroom shoes"
    ],
    "isPopular": false
  },
  {
    "id": "static-earthing-esd-esd-chairs",
    "name": "ESD Chairs",
    "category": "Static Earthing & ESD Products",
    "categoryId": "static-earthing-esd",
    "description": "Ergonomic cleanroom-compatible conductive operator chairs with drag chains and ESD fabric.",
    "image": "/assets/images/esd_static_gear_1787829514427.png",
    "tags": [
      "esd chairs",
      "operator chair",
      "conductive chair"
    ],
    "isPopular": false
  },
  {
    "id": "static-earthing-esd-esd-workstations",
    "name": "ESD Workstations",
    "category": "Static Earthing & ESD Products",
    "categoryId": "static-earthing-esd",
    "description": "Modular industrial assembly workbenches with built-in common grounding points and dissipative surfaces.",
    "image": "/assets/images/esd_static_gear_1787829514427.png",
    "tags": [
      "esd workstations",
      "workbench",
      "assembly table"
    ],
    "isPopular": false
  },
  {
    "id": "static-earthing-esd-esd-garments",
    "name": "ESD Garments",
    "category": "Static Earthing & ESD Products",
    "categoryId": "static-earthing-esd",
    "description": "Static dissipative lab coats, coveralls, and smocks woven with carbon conductive fiber grid.",
    "image": "/assets/images/esd_static_gear_1787829514427.png",
    "tags": [
      "esd garments",
      "lab coat",
      "smock",
      "cleanroom"
    ],
    "isPopular": false
  },
  {
    "id": "static-earthing-esd-esd-storage-bins",
    "name": "ESD Storage Bins",
    "category": "Static Earthing & ESD Products",
    "categoryId": "static-earthing-esd",
    "description": "Conductive polypropylene parts bins, component trays, and stacking containers for sensitive electronics.",
    "image": "/assets/images/esd_static_gear_1787829514427.png",
    "tags": [
      "esd storage bins",
      "conductive bin",
      "parts tray"
    ],
    "isPopular": false
  },
  {
    "id": "hand-tools-non-sparking-tools",
    "name": "Non-Sparking Tools",
    "category": "Hand Tools",
    "categoryId": "hand-tools",
    "description": "Beryllium Copper (Cu-Be) and Aluminum Bronze (Al-Br) non-sparking safety tools for Ex zones.",
    "image": "/assets/images/hand_tools_non_sparking_1787829533302.png",
    "tags": [
      "non-sparking tools",
      "cu-be",
      "al-br",
      "sparkless tools"
    ],
    "isPopular": true
  },
  {
    "id": "hand-tools-insulated-tools",
    "name": "Insulated Tools",
    "category": "Hand Tools",
    "categoryId": "hand-tools",
    "description": "1000V VDE-certified insulated screwdrivers, pliers, and wrenches for live electrical work.",
    "image": "/assets/images/hand_tools_non_sparking_1787829533302.png",
    "tags": [
      "insulated tools",
      "vde",
      "1000v",
      "electrician tools"
    ],
    "isPopular": true
  },
  {
    "id": "hand-tools-torque-wrenches",
    "name": "Torque Wrenches",
    "category": "Hand Tools",
    "categoryId": "hand-tools",
    "description": "Calibrated click-type and digital industrial torque wrenches for accurate fastener tensioning.",
    "image": "/assets/images/hand_tools_non_sparking_1787829533302.png",
    "tags": [
      "torque wrenches",
      "torque",
      "calibration",
      "fastener"
    ],
    "isPopular": false
  },
  {
    "id": "hand-tools-socket-sets",
    "name": "Socket Sets",
    "category": "Hand Tools",
    "categoryId": "hand-tools",
    "description": "Chrome vanadium and impact socket collections in 1/4\", 3/8\", 1/2\", 3/4\", and 1\" drive sizes.",
    "image": "/assets/images/hand_tools_non_sparking_1787829533302.png",
    "tags": [
      "socket sets",
      "ratchet",
      "sockets"
    ],
    "isPopular": false
  },
  {
    "id": "hand-tools-screwdriver-sets",
    "name": "Screwdriver Sets",
    "category": "Hand Tools",
    "categoryId": "hand-tools",
    "description": "Industrial slotted, Phillips, Torx, and precision magnetic screwdriver sets.",
    "image": "/assets/images/hand_tools_non_sparking_1787829533302.png",
    "tags": [
      "screwdriver sets",
      "screwdrivers",
      "torx",
      "phillips"
    ],
    "isPopular": false
  },
  {
    "id": "hand-tools-spanners",
    "name": "Spanners",
    "category": "Hand Tools",
    "categoryId": "hand-tools",
    "description": "Open-end, ring, combination, and heavy-duty striking/slogging spanners for plant maintenance.",
    "image": "/assets/images/hand_tools_non_sparking_1787829533302.png",
    "tags": [
      "spanners",
      "wrenches",
      "slogging spanner"
    ],
    "isPopular": false
  },
  {
    "id": "hand-tools-pliers",
    "name": "Pliers",
    "category": "Hand Tools",
    "categoryId": "hand-tools",
    "description": "Combination pliers, long nose, water pump pliers, and side cutting nippers.",
    "image": "/assets/images/hand_tools_non_sparking_1787829533302.png",
    "tags": [
      "pliers",
      "cutting pliers",
      "gripper"
    ],
    "isPopular": false
  },
  {
    "id": "hand-tools-hammers",
    "name": "Hammers",
    "category": "Hand Tools",
    "categoryId": "hand-tools",
    "description": "Sledgehammers, machinist ball-peen hammers, dead-blow hammers, and brass/copper non-sparking hammers.",
    "image": "/assets/images/hand_tools_non_sparking_1787829533302.png",
    "tags": [
      "hammers",
      "sledgehammer",
      "dead-blow",
      "brass hammer"
    ],
    "isPopular": false
  },
  {
    "id": "hand-tools-allen-keys",
    "name": "Allen Keys",
    "category": "Hand Tools",
    "categoryId": "hand-tools",
    "description": "Metric and Imperial ball-end hex key sets in hardened alloy steel.",
    "image": "/assets/images/hand_tools_non_sparking_1787829533302.png",
    "tags": [
      "allen keys",
      "hex key",
      "l-wrench"
    ],
    "isPopular": false
  },
  {
    "id": "hand-tools-tool-kits",
    "name": "Tool Kits",
    "category": "Hand Tools",
    "categoryId": "hand-tools",
    "description": "Comprehensive plant mechanical, electrical maintenance, and field service technician tool assortments.",
    "image": "/assets/images/hand_tools_non_sparking_1787829533302.png",
    "tags": [
      "tool kits",
      "technician kit",
      "maintenance set"
    ],
    "isPopular": false
  },
  {
    "id": "hand-tools-tool-trolleys",
    "name": "Tool Trolleys",
    "category": "Hand Tools",
    "categoryId": "hand-tools",
    "description": "Heavy-duty multi-drawer mobile workshop tool storage trolleys with central locking system.",
    "image": "/assets/images/hand_tools_non_sparking_1787829533302.png",
    "tags": [
      "tool trolleys",
      "tool cabinet",
      "mobile storage"
    ],
    "isPopular": false
  },
  {
    "id": "power-tools-drilling-machines",
    "name": "Drilling Machines",
    "category": "Power Tools",
    "categoryId": "power-tools",
    "description": "Heavy-duty rotary and percussion drills with high-torque industrial copper motors.",
    "image": "/assets/images/hand_tools_non_sparking_1787829533302.png",
    "tags": [
      "drilling machines",
      "drill",
      "power drill"
    ],
    "isPopular": true
  },
  {
    "id": "power-tools-impact-wrenches",
    "name": "Impact Wrenches",
    "category": "Power Tools",
    "categoryId": "power-tools",
    "description": "High-torque pneumatic and cordless impact wrenches for structural bolting.",
    "image": "/assets/images/hand_tools_non_sparking_1787829533302.png",
    "tags": [
      "impact wrenches",
      "pneumatic tool",
      "bolting"
    ],
    "isPopular": true
  },
  {
    "id": "power-tools-angle-grinders",
    "name": "Angle Grinders",
    "category": "Power Tools",
    "categoryId": "power-tools",
    "description": "4-inch, 5-inch, and 7-inch industrial metal cutting, grinding, and deburring angle grinders.",
    "image": "/assets/images/hand_tools_non_sparking_1787829533302.png",
    "tags": [
      "angle grinders",
      "grinder",
      "metal cutting"
    ],
    "isPopular": false
  },
  {
    "id": "power-tools-rotary-hammers",
    "name": "Rotary Hammers",
    "category": "Power Tools",
    "categoryId": "power-tools",
    "description": "SDS-Plus and SDS-Max heavy-duty rotary hammer drills for concrete drilling and chiseling.",
    "image": "/assets/images/hand_tools_non_sparking_1787829533302.png",
    "tags": [
      "rotary hammers",
      "demolition hammer",
      "sds"
    ],
    "isPopular": false
  },
  {
    "id": "power-tools-heat-guns",
    "name": "Heat Guns",
    "category": "Power Tools",
    "categoryId": "power-tools",
    "description": "Digital temperature-controlled industrial heat guns for shrink sleeving and bending.",
    "image": "/assets/images/hand_tools_non_sparking_1787829533302.png",
    "tags": [
      "heat guns",
      "thermal blower",
      "shrink gun"
    ],
    "isPopular": false
  },
  {
    "id": "power-tools-magnetic-drills",
    "name": "Magnetic Drills",
    "category": "Power Tools",
    "categoryId": "power-tools",
    "description": "Electromagnetic core drilling machines for heavy steel beam and onsite structural fabrication.",
    "image": "/assets/images/hand_tools_non_sparking_1787829533302.png",
    "tags": [
      "magnetic drills",
      "mag drill",
      "core drilling"
    ],
    "isPopular": false
  },
  {
    "id": "power-tools-hydraulic-crimping-tools",
    "name": "Hydraulic Crimping Tools",
    "category": "Power Tools",
    "categoryId": "power-tools",
    "description": "Manual hydraulic and battery-powered cable lug crimpers up to 1000 sq mm.",
    "image": "/assets/images/hand_tools_non_sparking_1787829533302.png",
    "tags": [
      "hydraulic crimping tools",
      "crimper",
      "lug crimping"
    ],
    "isPopular": false
  },
  {
    "id": "power-tools-hydraulic-cutters",
    "name": "Hydraulic Cutters",
    "category": "Power Tools",
    "categoryId": "power-tools",
    "description": "Heavy hydraulic armored cable and rebar cutting tools with hardened steel guillotine jaws.",
    "image": "/assets/images/hand_tools_non_sparking_1787829533302.png",
    "tags": [
      "hydraulic cutters",
      "cable cutter",
      "rebar cutter"
    ],
    "isPopular": false
  },
  {
    "id": "material-handling-equipment-hand-pallet-trucks",
    "name": "Hand Pallet Trucks",
    "category": "Material Handling Equipment",
    "categoryId": "material-handling-equipment",
    "description": "Hydraulic manual hand pallet jacks with 2.5 ton to 5 ton capacity and nylon/PU rollers.",
    "image": "/assets/images/material_handling_crane_1787829586885.png",
    "tags": [
      "hand pallet trucks",
      "pallet jack",
      "hpt"
    ],
    "isPopular": true
  },
  {
    "id": "material-handling-equipment-stackers",
    "name": "Stackers",
    "category": "Material Handling Equipment",
    "categoryId": "material-handling-equipment",
    "description": "Manual and semi-electric hydraulic warehouse stackers for vertical pallet storage up to 3.5m.",
    "image": "/assets/images/material_handling_crane_1787829586885.png",
    "tags": [
      "stackers",
      "hydraulic stacker",
      "pallet lifter"
    ],
    "isPopular": true
  },
  {
    "id": "material-handling-equipment-drum-trolleys",
    "name": "Drum Trolleys",
    "category": "Material Handling Equipment",
    "categoryId": "material-handling-equipment",
    "description": "2-wheel and 4-wheel ergonomic steel drum tilting, dispensing, and transport trolleys.",
    "image": "/assets/images/material_handling_crane_1787829586885.png",
    "tags": [
      "drum trolleys",
      "drum cart",
      "barrel trolley"
    ],
    "isPopular": false
  },
  {
    "id": "material-handling-equipment-drum-lifters",
    "name": "Drum Lifters",
    "category": "Material Handling Equipment",
    "categoryId": "material-handling-equipment",
    "description": "Hydraulic mobile drum grabbers and overhead crane drum rotator attachments.",
    "image": "/assets/images/material_handling_crane_1787829586885.png",
    "tags": [
      "drum lifters",
      "drum rotator",
      "barrel grabber"
    ],
    "isPopular": false
  },
  {
    "id": "material-handling-equipment-platform-trolleys",
    "name": "Platform Trolleys",
    "category": "Material Handling Equipment",
    "categoryId": "material-handling-equipment",
    "description": "Heavy-duty stainless steel and powder-coated foldable platform hand trucks for intra-plant transport.",
    "image": "/assets/images/material_handling_crane_1787829586885.png",
    "tags": [
      "platform trolleys",
      "hand truck",
      "flatbed cart"
    ],
    "isPopular": false
  },
  {
    "id": "material-handling-equipment-manual-winches",
    "name": "Manual Winches",
    "category": "Material Handling Equipment",
    "categoryId": "material-handling-equipment",
    "description": "Wall-mounted and base-mounted heavy wire rope hand winches with automatic brake.",
    "image": "/assets/images/material_handling_crane_1787829586885.png",
    "tags": [
      "manual winches",
      "hand winch",
      "hoist"
    ],
    "isPopular": false
  },
  {
    "id": "material-handling-equipment-chain-pulley-blocks",
    "name": "Chain Pulley Blocks",
    "category": "Material Handling Equipment",
    "categoryId": "material-handling-equipment",
    "description": "Industrial manual chain hoists (1T to 20T) with grade 80 load chain for heavy lifting.",
    "image": "/assets/images/material_handling_crane_1787829586885.png",
    "tags": [
      "chain pulley blocks",
      "chain hoist",
      "lifting block"
    ],
    "isPopular": false
  },
  {
    "id": "material-handling-equipment-web-slings",
    "name": "Web Slings",
    "category": "Material Handling Equipment",
    "categoryId": "material-handling-equipment",
    "description": "Polyester duplex flat webbing and endless circular slings with reinforced lifting eyes.",
    "image": "/assets/images/material_handling_crane_1787829586885.png",
    "tags": [
      "web slings",
      "lifting belt",
      "polyester sling"
    ],
    "isPopular": false
  },
  {
    "id": "material-handling-equipment-wire-rope-slings",
    "name": "Wire Rope Slings",
    "category": "Material Handling Equipment",
    "categoryId": "material-handling-equipment",
    "description": "Mechanical spliced and ferrule-secured steel wire rope lifting slings with thimbles.",
    "image": "/assets/images/material_handling_crane_1787829586885.png",
    "tags": [
      "wire rope slings",
      "steel sling",
      "crane sling"
    ],
    "isPopular": false
  },
  {
    "id": "material-handling-equipment-lifting-clamps",
    "name": "Lifting Clamps",
    "category": "Material Handling Equipment",
    "categoryId": "material-handling-equipment",
    "description": "Vertical and horizontal steel plate lifting clamps with safety locking mechanisms.",
    "image": "/assets/images/material_handling_crane_1787829586885.png",
    "tags": [
      "lifting clamps",
      "plate clamp",
      "sheet lifter"
    ],
    "isPopular": false
  },
  {
    "id": "material-handling-equipment-shackles",
    "name": "Shackles",
    "category": "Material Handling Equipment",
    "categoryId": "material-handling-equipment",
    "description": "Forged alloy steel bow and D-shackles with screw pins and safety nut-bolts.",
    "image": "/assets/images/material_handling_crane_1787829586885.png",
    "tags": [
      "shackles",
      "bow shackle",
      "d shackle",
      "rigging"
    ],
    "isPopular": false
  },
  {
    "id": "spill-control-products-spill-kits",
    "name": "Spill Kits",
    "category": "Spill Control Products",
    "categoryId": "spill-control-products",
    "description": "Emergency mobile wheelie-bin spill kits (50L to 240L) for oil, chemical, and hazardous fluids.",
    "image": "/assets/images/esd_static_gear_1787829514427.png",
    "tags": [
      "spill kits",
      "emergency spill kit",
      "hazmat kit"
    ],
    "isPopular": true
  },
  {
    "id": "spill-control-products-oil-absorbent-pads",
    "name": "Oil Absorbent Pads",
    "category": "Spill Control Products",
    "categoryId": "spill-control-products",
    "description": "Hydrophobic polypropylene pads designed to absorb oil while repelling water on land and open water.",
    "image": "/assets/images/esd_static_gear_1787829514427.png",
    "tags": [
      "oil absorbent pads",
      "absorbent",
      "oil spill"
    ],
    "isPopular": true
  },
  {
    "id": "spill-control-products-chemical-absorbents",
    "name": "Chemical Absorbents",
    "category": "Spill Control Products",
    "categoryId": "spill-control-products",
    "description": "Specially formulated inert absorbent pads, pillows, and socks for aggressive acids and alkalis.",
    "image": "/assets/images/esd_static_gear_1787829514427.png",
    "tags": [
      "chemical absorbents",
      "acid spill",
      "chemical sock"
    ],
    "isPopular": false
  },
  {
    "id": "spill-control-products-drain-covers",
    "name": "Drain Covers",
    "category": "Spill Control Products",
    "categoryId": "spill-control-products",
    "description": "Reusable polyurethane magnetic and silicone sealing mats to prevent toxic run-off into stormwater drains.",
    "image": "/assets/images/esd_static_gear_1787829514427.png",
    "tags": [
      "drain covers",
      "spill barrier",
      "storm drain"
    ],
    "isPopular": false
  },
  {
    "id": "spill-control-products-spill-berms",
    "name": "Spill Berms",
    "category": "Spill Control Products",
    "categoryId": "spill-control-products",
    "description": "Quick-deploy modular containment berms for chemical delivery tanker trucks and portable storage.",
    "image": "/assets/images/esd_static_gear_1787829514427.png",
    "tags": [
      "spill berms",
      "containment berm",
      "bunding"
    ],
    "isPopular": false
  },
  {
    "id": "spill-control-products-spill-pallets",
    "name": "Spill Pallets",
    "category": "Spill Control Products",
    "categoryId": "spill-control-products",
    "description": "2-drum and 4-drum high-density polyethylene secondary containment bunded pallets.",
    "image": "/assets/images/material_handling_crane_1787829586885.png",
    "tags": [
      "spill pallets",
      "bunded pallet",
      "drum pallet"
    ],
    "isPopular": false
  },
  {
    "id": "spill-control-products-drum-funnels",
    "name": "Drum Funnels",
    "category": "Spill Control Products",
    "categoryId": "spill-control-products",
    "description": "Large polyethylene wide-mouth funnels with built-in debris filter for 205L drum filling.",
    "image": "/assets/images/material_handling_crane_1787829586885.png",
    "tags": [
      "drum funnels",
      "funnel",
      "barrel filling"
    ],
    "isPopular": false
  },
  {
    "id": "spill-control-products-drum-covers",
    "name": "Drum Covers",
    "category": "Spill Control Products",
    "categoryId": "spill-control-products",
    "description": "Weatherproof UV-resistant drum top covers and snap-on lids to prevent contamination.",
    "image": "/assets/images/material_handling_crane_1787829586885.png",
    "tags": [
      "drum covers",
      "lid",
      "drum top"
    ],
    "isPopular": false
  },
  {
    "id": "industrial-housekeeping-industrial-vacuum-cleaners",
    "name": "Industrial Vacuum Cleaners",
    "category": "Industrial Housekeeping",
    "categoryId": "industrial-housekeeping",
    "description": "Wet-and-dry multi-motor industrial vacuum cleaners with HEPA filtration for factory shop floors.",
    "image": "/assets/images/atex_equipment_1787829496955.png",
    "tags": [
      "industrial vacuum cleaners",
      "wet dry vacuum",
      "hepa vacuum"
    ],
    "isPopular": true
  },
  {
    "id": "industrial-housekeeping-floor-scrubbers",
    "name": "Floor Scrubbers",
    "category": "Industrial Housekeeping",
    "categoryId": "industrial-housekeeping",
    "description": "Walk-behind and ride-on automated industrial floor scrubber driers for high-shine hygiene.",
    "image": "/assets/images/atex_equipment_1787829496955.png",
    "tags": [
      "floor scrubbers",
      "scrubber drier",
      "floor cleaner"
    ],
    "isPopular": true
  },
  {
    "id": "industrial-housekeeping-ride-on-sweepers",
    "name": "Ride-on Sweepers",
    "category": "Industrial Housekeeping",
    "categoryId": "industrial-housekeeping",
    "description": "Battery-powered and diesel outdoor industrial sweeping machines with dust suppression water spray.",
    "image": "/assets/images/material_handling_crane_1787829586885.png",
    "tags": [
      "ride-on sweepers",
      "sweeper",
      "dust cleaner"
    ],
    "isPopular": false
  },
  {
    "id": "industrial-housekeeping-cleaning-chemicals",
    "name": "Cleaning Chemicals",
    "category": "Industrial Housekeeping",
    "categoryId": "industrial-housekeeping",
    "description": "Concentrated eco-friendly industrial degreasers, floor strippers, and machinery sanitizers.",
    "image": "/assets/images/esd_static_gear_1787829514427.png",
    "tags": [
      "cleaning chemicals",
      "degreaser",
      "floor chemical"
    ],
    "isPopular": false
  },
  {
    "id": "industrial-housekeeping-waste-bins",
    "name": "Waste Bins",
    "category": "Industrial Housekeeping",
    "categoryId": "industrial-housekeeping",
    "description": "Heavy-duty pedal-operated plastic and stainless steel commercial waste bins.",
    "image": "/assets/images/material_handling_crane_1787829586885.png",
    "tags": [
      "waste bins",
      "trash bin",
      "garbage bin"
    ],
    "isPopular": false
  },
  {
    "id": "industrial-housekeeping-dust-bins",
    "name": "Dust Bins",
    "category": "Industrial Housekeeping",
    "categoryId": "industrial-housekeeping",
    "description": "Color-coded HDPE 120L and 240L wheelie bins for segregated municipal and plant waste disposal.",
    "image": "/assets/images/material_handling_crane_1787829586885.png",
    "tags": [
      "dust bins",
      "wheelie bin",
      "recycling bin"
    ],
    "isPopular": false
  },
  {
    "id": "industrial-housekeeping-hazardous-waste-containers",
    "name": "Hazardous Waste Containers",
    "category": "Industrial Housekeeping",
    "categoryId": "industrial-housekeeping",
    "description": "Fire-safe oily waste cans with self-closing foot-pedal lids preventing spontaneous combustion.",
    "image": "/assets/images/fire_extinguisher_1779045831196.png",
    "tags": [
      "hazardous waste containers",
      "oily waste can",
      "red bin"
    ],
    "isPopular": false
  },
  {
    "id": "safety-signages-mandatory-signs",
    "name": "Mandatory Signs",
    "category": "Safety Signages",
    "categoryId": "safety-signages",
    "description": "Circular blue-and-white ISO compliant mandatory PPE wearing notice boards.",
    "image": "/assets/images/reflective_jacket_1779046976022.png",
    "tags": [
      "mandatory signs",
      "ppe signs",
      "blue sign"
    ],
    "isPopular": true
  },
  {
    "id": "safety-signages-warning-signs",
    "name": "Warning Signs",
    "category": "Safety Signages",
    "categoryId": "safety-signages",
    "description": "Triangular hazard alert warning signboards for electrical shock, high noise, and overhead cranes.",
    "image": "/assets/images/reflective_jacket_1779046976022.png",
    "tags": [
      "warning signs",
      "hazard sign",
      "caution"
    ],
    "isPopular": true
  },
  {
    "id": "safety-signages-exit-signs",
    "name": "Exit Signs",
    "category": "Safety Signages",
    "categoryId": "safety-signages",
    "description": "Green and white illuminated and photoluminescent emergency evacuation directional exit signages.",
    "image": "/assets/images/atex_equipment_1787829496955.png",
    "tags": [
      "exit signs",
      "emergency exit",
      "green sign"
    ],
    "isPopular": false
  },
  {
    "id": "safety-signages-floor-marking-tapes",
    "name": "Floor Marking Tapes",
    "category": "Safety Signages",
    "categoryId": "safety-signages",
    "description": "Heavy-duty adhesive PVC zebra hazard striped and solid color plant floor lane marking tapes.",
    "image": "/assets/images/reflective_jacket_1779046976022.png",
    "tags": [
      "floor marking tapes",
      "zebra tape",
      "aisle tape"
    ],
    "isPopular": false
  },
  {
    "id": "safety-signages-glow-sign-boards",
    "name": "Glow Sign Boards",
    "category": "Safety Signages",
    "categoryId": "safety-signages",
    "description": "High-luminance glow-in-the-dark escape route and fire equipment indicator boards.",
    "image": "/assets/images/fire_extinguisher_1779045831196.png",
    "tags": [
      "glow sign boards",
      "photoluminescent",
      "night glow"
    ],
    "isPopular": false
  },
  {
    "id": "safety-signages-lockout-labels",
    "name": "Lockout Labels",
    "category": "Safety Signages",
    "categoryId": "safety-signages",
    "description": "Self-adhesive write-on durable danger and warning tags for LOTO program management.",
    "image": "/assets/images/hand_tools_non_sparking_1787829533302.png",
    "tags": [
      "lockout labels",
      "loto label",
      "danger label"
    ],
    "isPopular": false
  },
  {
    "id": "safety-signages-pipe-markers",
    "name": "Pipe Markers",
    "category": "Safety Signages",
    "categoryId": "safety-signages",
    "description": "Industrial pipe identification markers indicating fluid type and flow direction according to ASME/ANSI standards.",
    "image": "/assets/images/reflective_jacket_1779046976022.png",
    "tags": [
      "pipe markers",
      "flow arrow",
      "fluid marker"
    ],
    "isPopular": false
  },
  {
    "id": "lockout-tagout-loto-lockout-padlocks",
    "name": "Lockout Padlocks",
    "category": "Lockout Tagout / LOTO",
    "categoryId": "lockout-tagout-loto",
    "description": "Non-conductive nylon body keyed-different and master-keyed safety isolation padlocks.",
    "image": "/assets/images/hand_tools_non_sparking_1787829533302.png",
    "tags": [
      "lockout padlocks",
      "safety padlock",
      "loto padlock"
    ],
    "isPopular": true
  },
  {
    "id": "lockout-tagout-loto-valve-lockouts",
    "name": "Valve Lockouts",
    "category": "Lockout Tagout / LOTO",
    "categoryId": "lockout-tagout-loto",
    "description": "Universal ball valve, gate valve, and butterfly valve clamp lockout devices.",
    "image": "/assets/images/hand_tools_non_sparking_1787829533302.png",
    "tags": [
      "valve lockouts",
      "ball valve lock",
      "gate valve lock"
    ],
    "isPopular": true
  },
  {
    "id": "lockout-tagout-loto-circuit-breaker-lockouts",
    "name": "Circuit Breaker Lockouts",
    "category": "Lockout Tagout / LOTO",
    "categoryId": "lockout-tagout-loto",
    "description": "Miniature circuit breaker (MCB) and molded-case circuit breaker (MCCB) clamp lockouts.",
    "image": "/assets/images/atex_equipment_1787829496955.png",
    "tags": [
      "circuit breaker lockouts",
      "mcb lockout",
      "breaker lock"
    ],
    "isPopular": false
  },
  {
    "id": "lockout-tagout-loto-cable-lockouts",
    "name": "Cable Lockouts",
    "category": "Lockout Tagout / LOTO",
    "categoryId": "lockout-tagout-loto",
    "description": "Multi-purpose adjustable vinyl-coated steel cable lockout devices for multiple energy points.",
    "image": "/assets/images/hand_tools_non_sparking_1787829533302.png",
    "tags": [
      "cable lockouts",
      "cable lock",
      "hasp"
    ],
    "isPopular": false
  },
  {
    "id": "lockout-tagout-loto-lockout-stations",
    "name": "Lockout Stations",
    "category": "Lockout Tagout / LOTO",
    "categoryId": "lockout-tagout-loto",
    "description": "Wall-mounted acrylic and poly modular LOTO board stations with transparent lockable doors.",
    "image": "/assets/images/hand_tools_non_sparking_1787829533302.png",
    "tags": [
      "lockout stations",
      "loto station",
      "board"
    ],
    "isPopular": false
  },
  {
    "id": "lockout-tagout-loto-tags",
    "name": "Tags",
    "category": "Lockout Tagout / LOTO",
    "categoryId": "lockout-tagout-loto",
    "description": "Heavy-duty PVC reusable 'Do Not Operate' photo ID danger and inspection safety tags.",
    "image": "/assets/images/reflective_jacket_1779046976022.png",
    "tags": [
      "tags",
      "do not operate",
      "loto tag"
    ],
    "isPopular": false
  },
  {
    "id": "lockout-tagout-loto-group-lock-boxes",
    "name": "Group Lock Boxes",
    "category": "Lockout Tagout / LOTO",
    "categoryId": "lockout-tagout-loto",
    "description": "Heavy-gauge red powder-coated steel group lock boxes for multi-operator maintenance lockout.",
    "image": "/assets/images/hand_tools_non_sparking_1787829533302.png",
    "tags": [
      "group lock boxes",
      "lock box",
      "group loto"
    ],
    "isPopular": false
  },
  {
    "id": "industrial-electrical-accessories-cable-glands",
    "name": "Cable Glands",
    "category": "Industrial Electrical Accessories",
    "categoryId": "industrial-electrical-accessories",
    "description": "Brass nickel-plated and stainless steel weather-proof IP68 cable glands for all cable types.",
    "image": "/assets/images/atex_equipment_1787829496955.png",
    "tags": [
      "cable glands",
      "brass gland",
      "ip68"
    ],
    "isPopular": true
  },
  {
    "id": "industrial-electrical-accessories-cable-lugs",
    "name": "Cable Lugs",
    "category": "Industrial Electrical Accessories",
    "categoryId": "industrial-electrical-accessories",
    "description": "Heavy-duty electrolytic copper and aluminum tubular crimping terminal ends.",
    "image": "/assets/images/hand_tools_non_sparking_1787829533302.png",
    "tags": [
      "cable lugs",
      "terminal lug",
      "crimp lug"
    ],
    "isPopular": true
  },
  {
    "id": "industrial-electrical-accessories-heat-shrink-sleeves",
    "name": "Heat Shrink Sleeves",
    "category": "Industrial Electrical Accessories",
    "categoryId": "industrial-electrical-accessories",
    "description": "Flame-retardant cross-linked polyolefin heat shrink tubing with high dielectric strength.",
    "image": "/assets/images/hand_tools_non_sparking_1787829533302.png",
    "tags": [
      "heat shrink sleeves",
      "shrink tube",
      "insulation"
    ],
    "isPopular": false
  },
  {
    "id": "industrial-electrical-accessories-ferrules",
    "name": "Ferrules",
    "category": "Industrial Electrical Accessories",
    "categoryId": "industrial-electrical-accessories",
    "description": "Insulated and uninsulated copper wire end ferrules for vibration-proof terminal connections.",
    "image": "/assets/images/hand_tools_non_sparking_1787829533302.png",
    "tags": [
      "ferrules",
      "wire ferrule",
      "bootlace"
    ],
    "isPopular": false
  },
  {
    "id": "industrial-electrical-accessories-cable-ties",
    "name": "Cable Ties",
    "category": "Industrial Electrical Accessories",
    "categoryId": "industrial-electrical-accessories",
    "description": "UV-stabilized nylon-66 and 316 stainless steel ball-lock cable strapping ties.",
    "image": "/assets/images/hand_tools_non_sparking_1787829533302.png",
    "tags": [
      "cable ties",
      "nylon tie",
      "ss cable tie"
    ],
    "isPopular": false
  },
  {
    "id": "industrial-electrical-accessories-junction-boxes",
    "name": "Junction Boxes",
    "category": "Industrial Electrical Accessories",
    "categoryId": "industrial-electrical-accessories",
    "description": "Polycarbonate, cast aluminum, and stainless steel weather-proof industrial terminal enclosures.",
    "image": "/assets/images/atex_equipment_1787829496955.png",
    "tags": [
      "junction boxes",
      "terminal box",
      "enclosure"
    ],
    "isPopular": false
  },
  {
    "id": "industrial-electrical-accessories-industrial-plugs-sockets",
    "name": "Industrial Plugs & Sockets",
    "category": "Industrial Electrical Accessories",
    "categoryId": "industrial-electrical-accessories",
    "description": "IP44 and IP67 industrial pin-and-sleeve plugs, connectors, and interlocked receptacle units.",
    "image": "/assets/images/atex_equipment_1787829496955.png",
    "tags": [
      "industrial plugs & sockets",
      "cee plug",
      "socket"
    ],
    "isPopular": false
  },
  {
    "id": "industrial-electrical-accessories-panel-accessories",
    "name": "Panel Accessories",
    "category": "Industrial Electrical Accessories",
    "categoryId": "industrial-electrical-accessories",
    "description": "DIN rails, panel cooling filter fans, digital indicators, and busbar insulating supports.",
    "image": "/assets/images/measuring_instruments_1787829606141.png",
    "tags": [
      "panel accessories",
      "din rail",
      "cooling fan"
    ],
    "isPopular": false
  },
  {
    "id": "industrial-electrical-accessories-terminal-blocks",
    "name": "Terminal Blocks",
    "category": "Industrial Electrical Accessories",
    "categoryId": "industrial-electrical-accessories",
    "description": "Screw clamp and push-in spring terminal blocks mounted on standard DIN rails.",
    "image": "/assets/images/measuring_instruments_1787829606141.png",
    "tags": [
      "terminal blocks",
      "din terminal",
      "connector"
    ],
    "isPopular": false
  },
  {
    "id": "earthing-lightning-protection-copper-earthing-electrodes",
    "name": "Copper Earthing Electrodes",
    "category": "Earthing & Lightning Protection",
    "categoryId": "earthing-lightning-protection",
    "description": "Pure copper bonded chemical pipe earthing electrodes with crystalline conductive filling.",
    "image": "/assets/images/esd_static_gear_1787829514427.png",
    "tags": [
      "copper earthing electrodes",
      "chemical electrode",
      "earthing rod"
    ],
    "isPopular": true
  },
  {
    "id": "earthing-lightning-protection-gi-earthing-electrodes",
    "name": "GI Earthing Electrodes",
    "category": "Earthing & Lightning Protection",
    "categoryId": "earthing-lightning-protection",
    "description": "Hot-dip galvanized iron chemical pipe electrodes for cost-effective plant grounding.",
    "image": "/assets/images/esd_static_gear_1787829514427.png",
    "tags": [
      "gi earthing electrodes",
      "gi pipe",
      "ground rod"
    ],
    "isPopular": true
  },
  {
    "id": "earthing-lightning-protection-earthing-pit-covers",
    "name": "Earthing Pit Covers",
    "category": "Earthing & Lightning Protection",
    "categoryId": "earthing-lightning-protection",
    "description": "Heavy-duty poly-plastic and cast iron load-bearing inspection earth chamber pit covers.",
    "image": "/assets/images/material_handling_crane_1787829586885.png",
    "tags": [
      "earthing pit covers",
      "earth pit",
      "chamber cover"
    ],
    "isPopular": false
  },
  {
    "id": "earthing-lightning-protection-earth-enhancement-compound",
    "name": "Earth Enhancement Compound",
    "category": "Earthing & Lightning Protection",
    "categoryId": "earthing-lightning-protection",
    "description": "Bentonite and carbon-based moisture-retaining conductive backfill compound for low soil resistivity.",
    "image": "/assets/images/esd_static_gear_1787829514427.png",
    "tags": [
      "earth enhancement compound",
      "backfill",
      "bentonite"
    ],
    "isPopular": false
  },
  {
    "id": "earthing-lightning-protection-copper-strip",
    "name": "Copper Strip",
    "category": "Earthing & Lightning Protection",
    "categoryId": "earthing-lightning-protection",
    "description": "High-conductivity electrolytic grade bare copper flat tape conductors for grounding grids.",
    "image": "/assets/images/esd_static_gear_1787829514427.png",
    "tags": [
      "copper strip",
      "copper tape",
      "earthing strip"
    ],
    "isPopular": false
  },
  {
    "id": "earthing-lightning-protection-lightning-arresters",
    "name": "Lightning Arresters",
    "category": "Earthing & Lightning Protection",
    "categoryId": "earthing-lightning-protection",
    "description": "Early Streamer Emission (ESE) and Franklin conventional air terminals for building protection.",
    "image": "/assets/images/esd_static_gear_1787829514427.png",
    "tags": [
      "lightning arresters",
      "ese arrester",
      "air terminal"
    ],
    "isPopular": false
  },
  {
    "id": "earthing-lightning-protection-test-links",
    "name": "Test Links",
    "category": "Earthing & Lightning Protection",
    "categoryId": "earthing-lightning-protection",
    "description": "Disconnecting test clamps to isolate grounding systems during periodic ohmic resistance checks.",
    "image": "/assets/images/esd_static_gear_1787829514427.png",
    "tags": [
      "test links",
      "disconnect clamp",
      "test clamp"
    ],
    "isPopular": false
  },
  {
    "id": "earthing-lightning-protection-earthing-accessories",
    "name": "Earthing Accessories",
    "category": "Earthing & Lightning Protection",
    "categoryId": "earthing-lightning-protection",
    "description": "Brass U-clamps, exothermically welded molds, exothermic powder, and copper busbars.",
    "image": "/assets/images/esd_static_gear_1787829514427.png",
    "tags": [
      "earthing accessories",
      "exothermic welding",
      "u-clamp"
    ],
    "isPopular": false
  },
  {
    "id": "industrial-lighting-led-high-bay-lights",
    "name": "LED High Bay Lights",
    "category": "Industrial Lighting",
    "categoryId": "industrial-lighting",
    "description": "Energy-efficient 100W to 300W UFO and linear LED high bay lights with 140+ lm/W efficacy.",
    "image": "/assets/images/atex_equipment_1787829496955.png",
    "tags": [
      "led high bay lights",
      "high bay",
      "ufo light"
    ],
    "isPopular": true
  },
  {
    "id": "industrial-lighting-flood-lights",
    "name": "Flood Lights",
    "category": "Industrial Lighting",
    "categoryId": "industrial-lighting",
    "description": "High-power outdoor asymmetric LED floodlights with IP66 surge protection for yards.",
    "image": "/assets/images/atex_equipment_1787829496955.png",
    "tags": [
      "flood lights",
      "outdoor lighting",
      "stadium light"
    ],
    "isPopular": true
  },
  {
    "id": "industrial-lighting-street-lights",
    "name": "Street Lights",
    "category": "Industrial Lighting",
    "categoryId": "industrial-lighting",
    "description": "Intelligent dusk-to-dawn LED roadway luminaires for plant internal peripheral security.",
    "image": "/assets/images/atex_equipment_1787829496955.png",
    "tags": [
      "street lights",
      "road light",
      "pole light"
    ],
    "isPopular": false
  },
  {
    "id": "industrial-lighting-emergency-lights",
    "name": "Emergency Lights",
    "category": "Industrial Lighting",
    "categoryId": "industrial-lighting",
    "description": "Self-contained twin-spot emergency lighting units with 3-hour backup battery operation.",
    "image": "/assets/images/atex_equipment_1787829496955.png",
    "tags": [
      "emergency lights",
      "twin spot",
      "backup light"
    ],
    "isPopular": false
  },
  {
    "id": "industrial-lighting-exit-lights",
    "name": "Exit Lights",
    "category": "Industrial Lighting",
    "categoryId": "industrial-lighting",
    "description": "Edge-lit green emergency evacuation pathway luminaires complying with life safety codes.",
    "image": "/assets/images/atex_equipment_1787829496955.png",
    "tags": [
      "exit lights",
      "evacuation light",
      "fire exit"
    ],
    "isPopular": false
  },
  {
    "id": "industrial-lighting-portable-work-lights",
    "name": "Portable Work Lights",
    "category": "Industrial Lighting",
    "categoryId": "industrial-lighting",
    "description": "Rugged magnetic tripod and handheld rechargeable LED inspection site work lights.",
    "image": "/assets/images/atex_equipment_1787829496955.png",
    "tags": [
      "portable work lights",
      "site light",
      "task light"
    ],
    "isPopular": false
  },
  {
    "id": "industrial-lighting-explosion-proof-lights",
    "name": "Explosion Proof Lights",
    "category": "Industrial Lighting",
    "categoryId": "industrial-lighting",
    "description": "Flameproof cast aluminum Ex-d light fixtures certified for Zone 1 and Zone 2 hazardous areas.",
    "image": "/assets/images/atex_equipment_1787829496955.png",
    "tags": [
      "explosion proof lights",
      "ex light",
      "flameproof light"
    ],
    "isPopular": false
  },
  {
    "id": "gas-detection-systems-portable-gas-detectors",
    "name": "Portable Gas Detectors",
    "category": "Gas Detection Systems",
    "categoryId": "gas-detection-systems",
    "description": "Handheld single-gas and 4-gas (O2, LEL, CO, H2S) personal safety monitors with audible and vibrating alarms.",
    "image": "/assets/images/gas_detection_system_1787829548855.png",
    "tags": [
      "portable gas detectors",
      "4-gas monitor",
      "multi-gas detector"
    ],
    "isPopular": true
  },
  {
    "id": "gas-detection-systems-fixed-gas-detection-systems",
    "name": "Fixed Gas Detection Systems",
    "category": "Gas Detection Systems",
    "categoryId": "gas-detection-systems",
    "description": "Continuous wall-mounted flameproof toxic and combustible gas sensor transmitters with 4-20mA telemetry.",
    "image": "/assets/images/gas_detection_system_1787829548855.png",
    "tags": [
      "fixed gas detection systems",
      "gas transmitter",
      "fixed gas monitor"
    ],
    "isPopular": true
  },
  {
    "id": "gas-detection-systems-voc-monitors",
    "name": "VOC Monitors",
    "category": "Gas Detection Systems",
    "categoryId": "gas-detection-systems",
    "description": "Photoionization detector (PID) technology instruments for low-PPM volatile organic compound vapor analysis.",
    "image": "/assets/images/gas_detection_system_1787829548855.png",
    "tags": [
      "voc monitors",
      "pid detector",
      "solvent vapor"
    ],
    "isPopular": false
  },
  {
    "id": "gas-detection-systems-oxygen-monitors",
    "name": "Oxygen Monitors",
    "category": "Gas Detection Systems",
    "categoryId": "gas-detection-systems",
    "description": "Electrochemical ambient oxygen depletion and enrichment analyzers for confined spaces.",
    "image": "/assets/images/gas_detection_system_1787829548855.png",
    "tags": [
      "oxygen monitors",
      "o2 sensor",
      "confined space"
    ],
    "isPopular": false
  },
  {
    "id": "gas-detection-systems-toxic-gas-monitors",
    "name": "Toxic Gas Monitors",
    "category": "Gas Detection Systems",
    "categoryId": "gas-detection-systems",
    "description": "High-precision gas detection for Cl2, SO2, NH3, HCN, NO2, and specialty industrial gases.",
    "image": "/assets/images/gas_detection_system_1787829548855.png",
    "tags": [
      "toxic gas monitors",
      "ammonia detector",
      "chlorine sensor"
    ],
    "isPopular": false
  },
  {
    "id": "gas-detection-systems-calibration-gas-kits",
    "name": "Calibration Gas Kits",
    "category": "Gas Detection Systems",
    "categoryId": "gas-detection-systems",
    "description": "Certified multi-component disposable gas canisters, demand flow regulators, and bump-test stations.",
    "image": "/assets/images/gas_detection_system_1787829548855.png",
    "tags": [
      "calibration gas kits",
      "bump test",
      "cal gas"
    ],
    "isPopular": false
  },
  {
    "id": "process-safety-equipment-emergency-showers",
    "name": "Emergency Showers",
    "category": "Process Safety Equipment",
    "categoryId": "process-safety-equipment",
    "description": "Floor-mounted stainless steel emergency drench showers meeting ANSI Z358.1 specifications.",
    "image": "/assets/images/esd_static_gear_1787829514427.png",
    "tags": [
      "emergency showers",
      "drench shower",
      "decontamination"
    ],
    "isPopular": true
  },
  {
    "id": "process-safety-equipment-eye-wash-stations",
    "name": "Eye Wash Stations",
    "category": "Process Safety Equipment",
    "categoryId": "process-safety-equipment",
    "description": "Pedestal and wall-mounted twin-head aerated eyewash basins with foot-pedal and push-flag operation.",
    "image": "/assets/images/esd_static_gear_1787829514427.png",
    "tags": [
      "eye wash stations",
      "eyewash",
      "eye flush"
    ],
    "isPopular": true
  },
  {
    "id": "process-safety-equipment-safety-cabinets",
    "name": "Safety Cabinets",
    "category": "Process Safety Equipment",
    "categoryId": "process-safety-equipment",
    "description": "Double-walled steel flammable liquid safety storage cabinets with dual flame arrestor vents.",
    "image": "/assets/images/material_handling_crane_1787829586885.png",
    "tags": [
      "safety cabinets",
      "flammable cabinet",
      "fireproof cabinet"
    ],
    "isPopular": false
  },
  {
    "id": "process-safety-equipment-chemical-storage-cabinets",
    "name": "Chemical Storage Cabinets",
    "category": "Process Safety Equipment",
    "categoryId": "process-safety-equipment",
    "description": "Polyethylene-lined corrosion-resistant storage cabinets for aggressive acids, bases, and corrosives.",
    "image": "/assets/images/material_handling_crane_1787829586885.png",
    "tags": [
      "chemical storage cabinets",
      "acid cabinet",
      "corrosive storage"
    ],
    "isPopular": false
  },
  {
    "id": "process-safety-equipment-gas-cylinder-storage-cages",
    "name": "Gas Cylinder Storage Cages",
    "category": "Process Safety Equipment",
    "categoryId": "process-safety-equipment",
    "description": "Heavy expanded-metal security cages with safety chains for compressed industrial gas cylinders.",
    "image": "/assets/images/material_handling_crane_1787829586885.png",
    "tags": [
      "gas cylinder storage cages",
      "cylinder cage",
      "gas bottle rack"
    ],
    "isPopular": false
  },
  {
    "id": "process-safety-equipment-drum-storage-cabinets",
    "name": "Drum Storage Cabinets",
    "category": "Process Safety Equipment",
    "categoryId": "process-safety-equipment",
    "description": "Outdoor and indoor fire-rated heavy drum cabinets with built-in sump containment and roller track.",
    "image": "/assets/images/material_handling_crane_1787829586885.png",
    "tags": [
      "drum storage cabinets",
      "barrel storage",
      "sump cabinet"
    ],
    "isPopular": false
  },
  {
    "id": "industrial-storage-solutions-heavy-duty-racks",
    "name": "Heavy Duty Racks",
    "category": "Industrial Storage Solutions",
    "categoryId": "industrial-storage-solutions",
    "description": "Multi-tier selective industrial slotted angle and boltless shelving racks for spare parts.",
    "image": "/assets/images/material_handling_crane_1787829586885.png",
    "tags": [
      "heavy duty racks",
      "storage rack",
      "shelving"
    ],
    "isPopular": true
  },
  {
    "id": "industrial-storage-solutions-pallet-racks",
    "name": "Pallet Racks",
    "category": "Industrial Storage Solutions",
    "categoryId": "industrial-storage-solutions",
    "description": "High-density drive-in and selective warehouse pallet racking engineered for heavy forklift loads.",
    "image": "/assets/images/material_handling_crane_1787829586885.png",
    "tags": [
      "pallet racks",
      "warehouse racking",
      "selective rack"
    ],
    "isPopular": true
  },
  {
    "id": "industrial-storage-solutions-tool-cabinets",
    "name": "Tool Cabinets",
    "category": "Industrial Storage Solutions",
    "categoryId": "industrial-storage-solutions",
    "description": "Precision roller-bearing multi-drawer metal tool storage cabinets with partitioned dividers.",
    "image": "/assets/images/hand_tools_non_sparking_1787829533302.png",
    "tags": [
      "tool cabinets",
      "drawer cabinet",
      "tool chest"
    ],
    "isPopular": false
  },
  {
    "id": "industrial-storage-solutions-chemical-storage-cabinets",
    "name": "Chemical Storage Cabinets",
    "category": "Industrial Storage Solutions",
    "categoryId": "industrial-storage-solutions",
    "description": "Ventilated chemical storage enclosures equipped with spill-collection catch basins.",
    "image": "/assets/images/material_handling_crane_1787829586885.png",
    "tags": [
      "chemical storage cabinets",
      "spill containment cabinet",
      "chemical rack"
    ],
    "isPopular": false
  },
  {
    "id": "industrial-storage-solutions-locker-systems",
    "name": "Locker Systems",
    "category": "Industrial Storage Solutions",
    "categoryId": "industrial-storage-solutions",
    "description": "Multi-tier steel staff change-room lockers with cam locks and ventilation louvers.",
    "image": "/assets/images/material_handling_crane_1787829586885.png",
    "tags": [
      "locker systems",
      "staff lockers",
      "metal locker"
    ],
    "isPopular": false
  },
  {
    "id": "industrial-furniture-work-benches",
    "name": "Work Benches",
    "category": "Industrial Furniture",
    "categoryId": "industrial-furniture",
    "description": "Heavy-gauge steel frame industrial workbenches with hardwood, laminate, or steel tops.",
    "image": "/assets/images/esd_static_gear_1787829514427.png",
    "tags": [
      "work benches",
      "industrial bench",
      "assembly table"
    ],
    "isPopular": true
  },
  {
    "id": "industrial-furniture-esd-workstations",
    "name": "ESD Workstations",
    "category": "Industrial Furniture",
    "categoryId": "industrial-furniture",
    "description": "Static dissipative modular assembly tables with overhead LED lighting and power ducting.",
    "image": "/assets/images/esd_static_gear_1787829514427.png",
    "tags": [
      "esd workstations",
      "anti-static bench",
      "electronics desk"
    ],
    "isPopular": true
  },
  {
    "id": "industrial-furniture-laboratory-furniture",
    "name": "Laboratory Furniture",
    "category": "Industrial Furniture",
    "categoryId": "industrial-furniture",
    "description": "Chemical-resistant epoxy and ceramic lab benches, fume hood bases, and sink stations.",
    "image": "/assets/images/esd_static_gear_1787829514427.png",
    "tags": [
      "laboratory furniture",
      "lab bench",
      "fume hood"
    ],
    "isPopular": false
  },
  {
    "id": "industrial-furniture-operator-chairs",
    "name": "Operator Chairs",
    "category": "Industrial Furniture",
    "categoryId": "industrial-furniture",
    "description": "Ergonomic polyurethane cleanable seating with pneumatic height adjustment and foot rings.",
    "image": "/assets/images/esd_static_gear_1787829514427.png",
    "tags": [
      "operator chairs",
      "industrial chair",
      "lab stool"
    ],
    "isPopular": false
  },
  {
    "id": "industrial-furniture-storage-cabinets",
    "name": "Storage Cabinets",
    "category": "Industrial Furniture",
    "categoryId": "industrial-furniture",
    "description": "Reinforced steel two-door industrial supply cabinets with 3-point cremone locking system.",
    "image": "/assets/images/material_handling_crane_1787829586885.png",
    "tags": [
      "storage cabinets",
      "steel cupboard",
      "metal cupboard"
    ],
    "isPopular": false
  },
  {
    "id": "measuring-testing-instruments-infrared-thermometers",
    "name": "Infrared Thermometers",
    "category": "Measuring & Testing Instruments",
    "categoryId": "measuring-testing-instruments",
    "description": "Non-contact laser-guided pyrometer thermometers for high-temperature furnace and motor diagnostics.",
    "image": "/assets/images/measuring_instruments_1787829606141.png",
    "tags": [
      "infrared thermometers",
      "laser thermometer",
      "pyrometer"
    ],
    "isPopular": true
  },
  {
    "id": "measuring-testing-instruments-thermal-imaging-cameras",
    "name": "Thermal Imaging Cameras",
    "category": "Measuring & Testing Instruments",
    "categoryId": "measuring-testing-instruments",
    "description": "High-resolution radiometric thermal cameras for electrical switchboard and predictive maintenance inspections.",
    "image": "/assets/images/measuring_instruments_1787829606141.png",
    "tags": [
      "thermal imaging cameras",
      "flir camera",
      "thermography"
    ],
    "isPopular": true
  },
  {
    "id": "measuring-testing-instruments-clamp-meters",
    "name": "Clamp Meters",
    "category": "Measuring & Testing Instruments",
    "categoryId": "measuring-testing-instruments",
    "description": "True-RMS AC/DC current clamp meters with inrush current and frequency measurement.",
    "image": "/assets/images/measuring_instruments_1787829606141.png",
    "tags": [
      "clamp meters",
      "current clamp",
      "amprobe"
    ],
    "isPopular": false
  },
  {
    "id": "measuring-testing-instruments-multimeters",
    "name": "Multimeters",
    "category": "Measuring & Testing Instruments",
    "categoryId": "measuring-testing-instruments",
    "description": "CAT IV certified rugged digital multimeters with voltage, capacitance, and continuity functions.",
    "image": "/assets/images/measuring_instruments_1787829606141.png",
    "tags": [
      "multimeters",
      "digital multimeter",
      "dmm"
    ],
    "isPopular": false
  },
  {
    "id": "measuring-testing-instruments-insulation-testers",
    "name": "Insulation Testers",
    "category": "Measuring & Testing Instruments",
    "categoryId": "measuring-testing-instruments",
    "description": "Megohmmeter insulation resistance testers (up to 5kV) for cables, transformers, and electrical motors.",
    "image": "/assets/images/measuring_instruments_1787829606141.png",
    "tags": [
      "insulation testers",
      "megger",
      "megohmmeter"
    ],
    "isPopular": false
  },
  {
    "id": "measuring-testing-instruments-earth-resistance-testers",
    "name": "Earth Resistance Testers",
    "category": "Measuring & Testing Instruments",
    "categoryId": "measuring-testing-instruments",
    "description": "Digital 3-pole and 4-pole ground resistance and soil resistivity measurement instruments.",
    "image": "/assets/images/measuring_instruments_1787829606141.png",
    "tags": [
      "earth resistance testers",
      "earth tester",
      "ground tester"
    ],
    "isPopular": false
  },
  {
    "id": "measuring-testing-instruments-sound-level-meters",
    "name": "Sound Level Meters",
    "category": "Measuring & Testing Instruments",
    "categoryId": "measuring-testing-instruments",
    "description": "Class 1 and Class 2 decibel sound meters for workplace acoustic noise monitoring and compliance.",
    "image": "/assets/images/measuring_instruments_1787829606141.png",
    "tags": [
      "sound level meters",
      "decibel meter",
      "noise meter"
    ],
    "isPopular": false
  },
  {
    "id": "measuring-testing-instruments-lux-meters",
    "name": "Lux Meters",
    "category": "Measuring & Testing Instruments",
    "categoryId": "measuring-testing-instruments",
    "description": "Precision digital illumination light meters for factory floor and emergency pathway lighting audits.",
    "image": "/assets/images/measuring_instruments_1787829606141.png",
    "tags": [
      "lux meters",
      "light meter",
      "photometer"
    ],
    "isPopular": false
  },
  {
    "id": "measuring-testing-instruments-vibration-meters",
    "name": "Vibration Meters",
    "category": "Measuring & Testing Instruments",
    "categoryId": "measuring-testing-instruments",
    "description": "Piezoelectric accelerometer vibration analyzers for motor bearing condition monitoring.",
    "image": "/assets/images/measuring_instruments_1787829606141.png",
    "tags": [
      "vibration meters",
      "vibration analyzer",
      "bearing checker"
    ],
    "isPopular": false
  },
  {
    "id": "measuring-testing-instruments-thickness-gauges",
    "name": "Thickness Gauges",
    "category": "Measuring & Testing Instruments",
    "categoryId": "measuring-testing-instruments",
    "description": "Ultrasonic and magnetic coating/wall thickness gauges for pressure vessel and pipe corrosion inspection.",
    "image": "/assets/images/measuring_instruments_1787829606141.png",
    "tags": [
      "thickness gauges",
      "ultrasonic gauge",
      "coating thickness"
    ],
    "isPopular": false
  },
  {
    "id": "industrial-consumables-adhesives",
    "name": "Adhesives",
    "category": "Industrial Consumables",
    "categoryId": "industrial-consumables",
    "description": "Two-part industrial epoxy bonding resins, cyanoacrylate instant adhesives, and acrylic structural adhesives.",
    "image": "/assets/images/hand_tools_non_sparking_1787829533302.png",
    "tags": [
      "adhesives",
      "industrial glue",
      "epoxy"
    ],
    "isPopular": true
  },
  {
    "id": "industrial-consumables-sealants",
    "name": "Sealants",
    "category": "Industrial Consumables",
    "categoryId": "industrial-consumables",
    "description": "Polyurethane, silicone, and fire-rated acrylic elastomeric joint sealants for industrial buildings.",
    "image": "/assets/images/hand_tools_non_sparking_1787829533302.png",
    "tags": [
      "sealants",
      "silicone sealant",
      "gap filler"
    ],
    "isPopular": true
  },
  {
    "id": "industrial-consumables-ptfe-tape",
    "name": "PTFE Tape",
    "category": "Industrial Consumables",
    "categoryId": "industrial-consumables",
    "description": "High-density virgin polytetrafluoroethylene thread sealing tape for chemical, gas, and water piping.",
    "image": "/assets/images/hand_tools_non_sparking_1787829533302.png",
    "tags": [
      "ptfe tape",
      "teflon tape",
      "thread tape"
    ],
    "isPopular": false
  },
  {
    "id": "industrial-consumables-lubricants",
    "name": "Lubricants",
    "category": "Industrial Consumables",
    "categoryId": "industrial-consumables",
    "description": "Synthetic industrial gear oils, air compressor oils, hydraulic fluids, and anti-seize sprays.",
    "image": "/assets/images/hand_tools_non_sparking_1787829533302.png",
    "tags": [
      "lubricants",
      "gear oil",
      "hydraulic oil"
    ],
    "isPopular": false
  },
  {
    "id": "industrial-consumables-grease",
    "name": "Grease",
    "category": "Industrial Consumables",
    "categoryId": "industrial-consumables",
    "description": "High-temperature lithium complex, moly, and food-grade synthetic bearing grease.",
    "image": "/assets/images/hand_tools_non_sparking_1787829533302.png",
    "tags": [
      "grease",
      "bearing grease",
      "lithium grease"
    ],
    "isPopular": false
  },
  {
    "id": "industrial-consumables-cutting-oil",
    "name": "Cutting Oil",
    "category": "Industrial Consumables",
    "categoryId": "industrial-consumables",
    "description": "Semi-synthetic and soluble metalworking neat cutting fluids for CNC machining and broaching.",
    "image": "/assets/images/hand_tools_non_sparking_1787829533302.png",
    "tags": [
      "cutting oil",
      "coolant",
      "metalworking fluid"
    ],
    "isPopular": false
  },
  {
    "id": "industrial-consumables-thread-lockers",
    "name": "Thread Lockers",
    "category": "Industrial Consumables",
    "categoryId": "industrial-consumables",
    "description": "Anaerobic threadlocking adhesives for locking and sealing bolts against vibrational loosening.",
    "image": "/assets/images/hand_tools_non_sparking_1787829533302.png",
    "tags": [
      "thread lockers",
      "loctite",
      "threadlock"
    ],
    "isPopular": false
  },
  {
    "id": "industrial-consumables-cleaning-solvents",
    "name": "Cleaning Solvents",
    "category": "Industrial Consumables",
    "categoryId": "industrial-consumables",
    "description": "Fast-evaporating electrical contact cleaners, heavy equipment degreasers, and safety parts-washers.",
    "image": "/assets/images/esd_static_gear_1787829514427.png",
    "tags": [
      "cleaning solvents",
      "contact cleaner",
      "degreaser"
    ],
    "isPopular": false
  },
  {
    "id": "packaging-materials-stretch-film",
    "name": "Stretch Film",
    "category": "Packaging Materials",
    "categoryId": "packaging-materials",
    "description": "High-elongation cast and blown manual and machine pallet wrap stretch film rolls.",
    "image": "/assets/images/material_handling_crane_1787829586885.png",
    "tags": [
      "stretch film",
      "pallet wrap",
      "plastic wrap"
    ],
    "isPopular": true
  },
  {
    "id": "packaging-materials-bubble-wrap",
    "name": "Bubble Wrap",
    "category": "Packaging Materials",
    "categoryId": "packaging-materials",
    "description": "Shock-absorbing dual-layer air bubble cushioning rolls for fragile industrial components.",
    "image": "/assets/images/material_handling_crane_1787829586885.png",
    "tags": [
      "bubble wrap",
      "air bubble sheet",
      "cushioning"
    ],
    "isPopular": true
  },
  {
    "id": "packaging-materials-corrugated-boxes",
    "name": "Corrugated Boxes",
    "category": "Packaging Materials",
    "categoryId": "packaging-materials",
    "description": "Heavy-duty 5-ply, 7-ply, and 9-ply kraft paper shipping carton boxes for freight transport.",
    "image": "/assets/images/material_handling_crane_1787829586885.png",
    "tags": [
      "corrugated boxes",
      "cartons",
      "shipping box"
    ],
    "isPopular": false
  },
  {
    "id": "packaging-materials-wooden-pallets",
    "name": "Wooden Pallets",
    "category": "Packaging Materials",
    "categoryId": "packaging-materials",
    "description": "Heat-treated ISPM-15 certified 4-way entry wooden shipping pallets for international export.",
    "image": "/assets/images/material_handling_crane_1787829586885.png",
    "tags": [
      "wooden pallets",
      "ispm 15",
      "pallet"
    ],
    "isPopular": false
  },
  {
    "id": "packaging-materials-vci-packaging",
    "name": "VCI Packaging",
    "category": "Packaging Materials",
    "categoryId": "packaging-materials",
    "description": "Volatile Corrosion Inhibitor paper, bags, and film preserving precision metal parts from rust.",
    "image": "/assets/images/material_handling_crane_1787829586885.png",
    "tags": [
      "vci packaging",
      "anti-rust",
      "corrosion inhibitor"
    ],
    "isPopular": false
  },
  {
    "id": "packaging-materials-silica-gel",
    "name": "Silica Gel",
    "category": "Packaging Materials",
    "categoryId": "packaging-materials",
    "description": "White and indicating orange moisture-absorbing desiccant pouches for humidity prevention.",
    "image": "/assets/images/material_handling_crane_1787829586885.png",
    "tags": [
      "silica gel",
      "desiccant",
      "moisture absorber"
    ],
    "isPopular": false
  },
  {
    "id": "packaging-materials-moisture-barrier-bags",
    "name": "Moisture Barrier Bags",
    "category": "Packaging Materials",
    "categoryId": "packaging-materials",
    "description": "Multi-layered aluminum foil vacuum bags shielding ESD and moisture-sensitive electronic assemblies.",
    "image": "/assets/images/esd_static_gear_1787829514427.png",
    "tags": [
      "moisture barrier bags",
      "vacuum bag",
      "foil bag"
    ],
    "isPopular": false
  },
  {
    "id": "warehouse-safety-dock-levelers",
    "name": "Dock Levelers",
    "category": "Warehouse Safety",
    "categoryId": "warehouse-safety",
    "description": "Hydraulic and mechanical lip dock levelers bridging warehouse docks to transport truck trailers.",
    "image": "/assets/images/material_handling_crane_1787829586885.png",
    "tags": [
      "dock levelers",
      "loading dock",
      "hydraulic dock"
    ],
    "isPopular": true
  },
  {
    "id": "warehouse-safety-wheel-chocks",
    "name": "Wheel Chocks",
    "category": "Warehouse Safety",
    "categoryId": "warehouse-safety",
    "description": "Heavy-duty molded rubber and polyurethane aircraft and truck wheel chocks with steel handles.",
    "image": "/assets/images/material_handling_crane_1787829586885.png",
    "tags": [
      "wheel chocks",
      "rubber chock",
      "truck stop"
    ],
    "isPopular": true
  },
  {
    "id": "warehouse-safety-corner-guards",
    "name": "Corner Guards",
    "category": "Warehouse Safety",
    "categoryId": "warehouse-safety",
    "description": "Heavy-duty rubber and steel column edge protectors preventing structural forklift collision damage.",
    "image": "/assets/images/reflective_jacket_1779046976022.png",
    "tags": [
      "corner guards",
      "column protector",
      "edge guard"
    ],
    "isPopular": false
  },
  {
    "id": "warehouse-safety-safety-bollards",
    "name": "Safety Bollards",
    "category": "Warehouse Safety",
    "categoryId": "warehouse-safety",
    "description": "Surface-mount and in-ground steel crash bollards filled with concrete for asset protection.",
    "image": "/assets/images/material_handling_crane_1787829586885.png",
    "tags": [
      "safety bollards",
      "bollard",
      "crash barrier"
    ],
    "isPopular": false
  },
  {
    "id": "warehouse-safety-traffic-mirrors",
    "name": "Traffic Mirrors",
    "category": "Warehouse Safety",
    "categoryId": "warehouse-safety",
    "description": "Stainless steel and acrylic outdoor weatherproof blind-spot inspection mirrors for plant roads.",
    "image": "/assets/images/measuring_instruments_1787829606141.png",
    "tags": [
      "traffic mirrors",
      "road mirror",
      "security mirror"
    ],
    "isPopular": false
  },
  {
    "id": "warehouse-safety-speed-breakers",
    "name": "Speed Breakers",
    "category": "Warehouse Safety",
    "categoryId": "warehouse-safety",
    "description": "Modular recycled rubber and heavy-duty plastic speed humps with reflective yellow cat-eyes.",
    "image": "/assets/images/reflective_jacket_1779046976022.png",
    "tags": [
      "speed breakers",
      "speed bump",
      "traffic calm"
    ],
    "isPopular": false
  },
  {
    "id": "warehouse-safety-convex-mirrors",
    "name": "Convex Mirrors",
    "category": "Warehouse Safety",
    "categoryId": "warehouse-safety",
    "description": "Wide-angle indoor intersection convex mirrors for warehouse forklift blind-corner visibility.",
    "image": "/assets/images/measuring_instruments_1787829606141.png",
    "tags": [
      "convex mirrors",
      "blind spot",
      "forklift mirror"
    ],
    "isPopular": false
  },
  {
    "id": "warehouse-safety-guard-rails",
    "name": "Guard Rails",
    "category": "Warehouse Safety",
    "categoryId": "warehouse-safety",
    "description": "Industrial modular steel safety barriers segregating pedestrian walkways from vehicular traffic.",
    "image": "/assets/images/material_handling_crane_1787829586885.png",
    "tags": [
      "guard rails",
      "pedestrian barrier",
      "safety railing"
    ],
    "isPopular": false
  },
  {
    "id": "environmental-compliance-products-noise-barriers",
    "name": "Noise Barriers",
    "category": "Environmental & Compliance Products",
    "categoryId": "environmental-compliance-products",
    "description": "Modular sound-absorbing acoustic curtain panels for noisy compressors and stamping machinery.",
    "image": "/assets/images/measuring_instruments_1787829606141.png",
    "tags": [
      "noise barriers",
      "acoustic curtain",
      "soundproofing"
    ],
    "isPopular": true
  },
  {
    "id": "environmental-compliance-products-air-quality-monitors",
    "name": "Air Quality Monitors",
    "category": "Environmental & Compliance Products",
    "categoryId": "environmental-compliance-products",
    "description": "Continuous environmental monitoring stations measuring PM2.5, PM10, CO2, temperature, and RH.",
    "image": "/assets/images/gas_detection_system_1787829548855.png",
    "tags": [
      "air quality monitors",
      "pm2.5",
      "dust monitor"
    ],
    "isPopular": true
  },
  {
    "id": "environmental-compliance-products-water-quality-testing-kits",
    "name": "Water Quality Testing Kits",
    "category": "Environmental & Compliance Products",
    "categoryId": "environmental-compliance-products",
    "description": "Portable digital photometer and colorimeter test kits for plant effluent pH, TDS, and COD.",
    "image": "/assets/images/measuring_instruments_1787829606141.png",
    "tags": [
      "water quality testing kits",
      "ph meter",
      "effluent test"
    ],
    "isPopular": false
  },
  {
    "id": "environmental-compliance-products-dust-monitoring-systems",
    "name": "Dust Monitoring Systems",
    "category": "Environmental & Compliance Products",
    "categoryId": "environmental-compliance-products",
    "description": "Laser optical particle counters for real-time cleanroom and plant air particulate surveillance.",
    "image": "/assets/images/gas_detection_system_1787829548855.png",
    "tags": [
      "dust monitoring systems",
      "dust sensor",
      "particulate counter"
    ],
    "isPopular": false
  },
  {
    "id": "environmental-compliance-products-environmental-spill-kits",
    "name": "Environmental Spill Kits",
    "category": "Environmental & Compliance Products",
    "categoryId": "environmental-compliance-products",
    "description": "Large-scale ISO 14001 compliance marine and land chemical containment response packages.",
    "image": "/assets/images/esd_static_gear_1787829514427.png",
    "tags": [
      "environmental spill kits",
      "iso 14001",
      "large spill kit"
    ],
    "isPopular": false
  },
  {
    "id": "environmental-compliance-products-waste-segregation-systems",
    "name": "Waste Segregation Systems",
    "category": "Environmental & Compliance Products",
    "categoryId": "environmental-compliance-products",
    "description": "Modular color-coded stainless steel and HDPE 3-compartment and 4-compartment segregation stations.",
    "image": "/assets/images/material_handling_crane_1787829586885.png",
    "tags": [
      "waste segregation systems",
      "segregation station",
      "recycle bins"
    ],
    "isPopular": false
  }
];

export const CORPORATE_GIFTING_ITEMS: ProductItem[] = [
  {
    "id": "gifting-welcome-kit",
    "name": "Executive Safety & Welcome Gift Box",
    "category": "Corporate Gifting",
    "categoryId": "corporate-gifting",
    "tagline": "Premium Onboarding & VIP Client Experience",
    "description": "Custom curated corporate gift box containing a matte thermal bottle, embossed leather diary, premium pen, tech pouch, and customized company badge.",
    "image": "/assets/images/corporate_gifting_set_1787829481887.png",
    "isPopular": true,
    "tags": [
      "gift box",
      "executive kit",
      "corporate gifting",
      "bottle",
      "diary",
      "pen"
    ],
    "items": [
      "Custom Matte Thermal Water Bottle (750ml)",
      "Embossed Leatherette A5 Executive Diary",
      "Engraved Metal Rollerball Pen",
      "Branded Tech Organizer Cord Pouch",
      "High-Vis Laser Engraved Metallic Keychain",
      "Custom Magnetic Presentation Gift Box"
    ]
  },
  {
    "id": "gifting-apparel",
    "name": "Custom Corporate & Field Technical Apparel",
    "category": "Corporate Gifting",
    "categoryId": "corporate-gifting",
    "tagline": "Professional Brand Identity for Field & Office Teams",
    "description": "High-grade breathable polo T-shirts, softshell jackets, winter vests, and high-visibility corporate apparel customized with company logo.",
    "image": "/assets/images/corporate_apparel_1787829563196.png",
    "isPopular": true,
    "tags": [
      "apparel",
      "polo t-shirt",
      "jacket",
      "vest",
      "uniform",
      "corporate clothing"
    ],
    "items": [
      "Custom Embroidered Premium Cotton Polo Shirts",
      "Water-Resistant Technical Softshell Jackets",
      "Lightweight Puffer Corporate Vests",
      "Custom Branded Caps & Hard Hat Sweatbands",
      "High-Vis Customized Field Engineer Uniforms"
    ]
  }
];

export function getCategoryById(id: string): CategoryInfo | undefined {
  return CATEGORIES.find(c => c.id === id);
}

export function getProductsByCategory(categoryId: string): ProductItem[] {
  if (!categoryId || categoryId === "all") return PRODUCTS;
  return PRODUCTS.filter(p => p.categoryId === categoryId);
}

export function searchProducts(query: string, categoryId?: string): ProductItem[] {
  const q = query.trim().toLowerCase();
  let list = categoryId && categoryId !== "all" ? getProductsByCategory(categoryId) : PRODUCTS;
  if (!q) return list;

  return list.filter(p => {
    return (
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tags.some(t => t.toLowerCase().includes(q))
    );
  });
}

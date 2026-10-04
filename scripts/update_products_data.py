import re

with open('src/data/products.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Gallery definitions for all 23 categories
category_galleries = {
    "industrial-safety-ppe": {
        "image": "/assets/images/brochure/ppes.png",
        "gallery": {
            "layout": "large-plus-two",
            "main": {
                "url": "/assets/images/brochure/ppes.png",
                "alt": "Industrial Safety & Personal Protective Equipment Portfolio",
                "caption": "Official Brochure Portfolio: Certified Head-to-Toe Industrial PPE Range"
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
        }
    },
    "fire-safety-equipment": {
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
        }
    },
    "explosion-proof-atex": {
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
        }
    },
    "static-earthing-esd": {
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
        }
    },
    "hand-tools": {
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
        }
    },
    "power-tools": {
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
        }
    },
    "material-handling-equipment": {
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
        }
    },
    "spill-control-products": {
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
        }
    },
    "industrial-housekeeping": {
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
        }
    },
    "safety-signages": {
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
        }
    },
    "lockout-tagout-loto": {
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
        }
    },
    "industrial-electrical-accessories": {
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
        }
    },
    "earthing-lightning-protection": {
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
        }
    },
    "industrial-lighting": {
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
        }
    },
    "gas-detection-systems": {
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
        }
    },
    "process-safety-equipment": {
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
        }
    },
    "industrial-storage-solutions": {
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
        }
    },
    "industrial-furniture": {
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
        }
    },
    "measuring-testing-instruments": {
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
        }
    },
    "industrial-consumables": {
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
        }
    },
    "packaging-materials": {
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
        }
    },
    "warehouse-safety": {
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
        }
    },
    "environmental-compliance-products": {
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
        }
    }
}

# Update CategoryInfo interface
interface_replacement = '''export interface CategoryGalleryItem {
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
}'''

content = re.sub(
    r'export interface CategoryInfo \{[^\}]+\}',
    interface_replacement,
    content
)

# Now update each item in CATEGORIES
for cid, gdata in category_galleries.items():
    # Find the category object in CATEGORIES
    pattern = re.compile(r'(\{\s*"id":\s*"' + re.escape(cid) + r'",\s*"name":\s*"[^"]+",\s*"count":\s*\d+,\s*"icon":\s*"[^"]+",\s*"image":\s*")[^"]+(".*?"megaGroup":\s*"[^"]+",\s*"description":\s*"[^"]+"\s*\})', re.DOTALL)
    
    match = pattern.search(content)
    if match:
        # Build new block
        import json
        g_json = json.dumps(gdata["gallery"], indent=4)
        # Indent gallery json
        indented_g = "\n".join("    " + line for line in g_json.split("\n"))
        
        # Replace image with gdata["image"] and add gallery: ...
        old_block = match.group(0)
        # Extract fields
        id_val = cid
        name_m = re.search(r'"name":\s*"([^"]+)"', old_block)
        count_m = re.search(r'"count":\s*(\d+)', old_block)
        icon_m = re.search(r'"icon":\s*"([^"]+)"', old_block)
        mega_m = re.search(r'"megaGroup":\s*"([^"]+)"', old_block)
        desc_m = re.search(r'"description":\s*"([^"]+)"', old_block)
        
        new_block = f'''{{
    "id": "{id_val}",
    "name": "{name_m.group(1)}",
    "count": {count_m.group(1)},
    "icon": "{icon_m.group(1)}",
    "image": "{gdata['image']}",
    "gallery": {g_json},
    "megaGroup": "{mega_m.group(1)}",
    "description": "{desc_m.group(1)}"
  }}'''
        content = content.replace(old_block, new_block)
        print(f"Updated category in data: {cid}")
    else:
        print(f"FAILED TO MATCH: {cid}")

with open('src/data/products.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Successfully updated src/data/products.ts with genuine galleries for all 23 categories.")

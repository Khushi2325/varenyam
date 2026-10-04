import os
import shutil
import re

src_dir = "Broucher images"
dst_dir = os.path.join("public", "assets", "images", "brochure")
os.makedirs(dst_dir, exist_ok=True)

# mapping from original filename in 'Broucher images' to clean web-safe name
mapping = {
    "Atex Products 1.png": "atex-products-1.png",
    "Atex Products.png": "atex-products.png",
    "Earthing and Bonding Solutions.png": "earthing-and-bonding-solutions.png",
    "Earthing and Bonding systems.png": "earthing-and-bonding-systems.png",
    "environmental compaliance.png": "environmental-compliance-1.png",
    "Environmental.png": "environmental-compliance-2.png",
    "ESD Protection.png": "esd-protection.png",
    "ESD Systems.png": "esd-systems.png",
    "Fire Suppression Line Diagram.png": "fire-suppression-line-diagram.png",
    "Fire Suppression.png": "fire-suppression.png",
    "Gas detections.png": "gas-detections.png",
    "Gas Detectors.png": "gas-detectors.png",
    "hand tools.png": "hand-tools.png",
    "House keeping.png": "housekeeping.png",
    "Industrial Consumable 1.png": "industrial-consumables-1.png",
    "Industrial Consumables.png": "industrial-consumables-2.png",
    "Industrial furniture.png": "industrial-furniture.png",
    "Industrial House keeping.png": "industrial-housekeeping.png",
    "Industrial Lightings.png": "industrial-lightings.png",
    "LED Lightings.png": "led-lightings.png",
    "Lockouts & Tagouts.png": "lockouts-and-tagouts.png",
    "LOTO.png": "loto.png",
    "Measuring & Testing Equuipments.png": "measuring-testing-equipment.png",
    "Measuring & Testing instruments.png": "measuring-testing-instruments.png",
    "Nopn sparking tools.png": "non-sparking-tools.png",
    "Packing materials products.png": "packing-materials-products.png",
    "Packing materials.png": "packing-materials.png",
    "Power tools.png": "power-tools.png",
    "PPES.png": "ppes.png",
    "Process Safety equipments.png": "process-safety-equipment.png",
    "Process Safety.png": "process-safety.png",
    "Safety  Signage.png": "safety-signage-1.png",
    "Safety Signages .png": "safety-signage-2.png",
    "Spill control .png": "spill-control-1.png",
    "Spill Control.png": "spill-control-2.png",
    "Storage Solutions.png": "storage-solutions.png",
    "Storage.png": "storage.png",
    "warehouse safety products.png": "warehouse-safety-products.png",
    "warehouse safety.png": "warehouse-safety.png",
}

for orig, clean in mapping.items():
    src_file = os.path.join(src_dir, orig)
    dst_clean = os.path.join(dst_dir, clean)
    dst_orig = os.path.join(dst_dir, orig) # also keep original name if any code used it
    
    if os.path.exists(src_file):
        shutil.copy2(src_file, dst_clean)
        shutil.copy2(src_file, dst_orig)
        print(f"Copied: {orig} -> {clean}")
    else:
        print(f"MISSING SOURCE: {orig}")

print("Total brochure assets copied successfully.")

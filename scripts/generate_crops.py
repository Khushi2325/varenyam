import os
from PIL import Image

crops_dir = os.path.join("public", "assets", "images", "crops")
os.makedirs(crops_dir, exist_ok=True)

# 1. Power Tools (source: public/assets/images/brochure/power-tools.png, size: 1254x1254)
power_tools_path = os.path.join("public", "assets", "images", "brochure", "power-tools.png")
if os.path.exists(power_tools_path):
    img = Image.open(power_tools_path)
    w, h = img.size
    # Crop 1: Top section (drills, impact wrenches, rotary hammers)
    crop1 = img.crop((0, int(h * 0.1), int(w * 0.55), int(h * 0.65)))
    crop1.save(os.path.join(crops_dir, "power-tools-drills.png"))
    # Crop 2: Bottom-right section (angle grinders, hydraulic cutting/crimping tools)
    crop2 = img.crop((int(w * 0.45), int(h * 0.45), w, int(h * 0.95)))
    crop2.save(os.path.join(crops_dir, "power-tools-grinders.png"))
    print("Created Power Tools crops")

# 2. Material Handling (source: public/assets/images/material_handling_crane_1787829586885.png, size: 1408x768)
mh_path = os.path.join("public", "assets", "images", "material_handling_crane_1787829586885.png")
if os.path.exists(mh_path):
    img = Image.open(mh_path)
    w, h = img.size
    # Crop 1: Left crane hoist and lifting hook mechanism
    crop1 = img.crop((0, 0, int(w * 0.5), h))
    crop1.save(os.path.join(crops_dir, "material-handling-hoist.png"))
    # Crop 2: Right warehouse pallet movement / rigging gear
    crop2 = img.crop((int(w * 0.5), 0, w, h))
    crop2.save(os.path.join(crops_dir, "material-handling-rigging.png"))
    print("Created Material Handling crops")

# 3. Industrial Furniture (source: public/assets/images/brochure/industrial-furniture.png, size: 1254x1254)
furn_path = os.path.join("public", "assets", "images", "brochure", "industrial-furniture.png")
if os.path.exists(furn_path):
    img = Image.open(furn_path)
    w, h = img.size
    # Crop 1: Assembly workbench & upper tool shelving
    crop1 = img.crop((0, int(h * 0.1), int(w * 0.65), int(h * 0.75)))
    crop1.save(os.path.join(crops_dir, "industrial-furniture-workbench.png"))
    # Crop 2: Operator chair & drawer storage module
    crop2 = img.crop((int(w * 0.4), int(h * 0.4), w, h))
    crop2.save(os.path.join(crops_dir, "industrial-furniture-seating.png"))
    print("Created Industrial Furniture crops")

# 4. Earthing & Lightning (source: public/assets/images/brochure/earthing-and-bonding-solutions.png, size: 1408x768)
earth_path = os.path.join("public", "assets", "images", "brochure", "earthing-and-bonding-solutions.png")
if os.path.exists(earth_path):
    img = Image.open(earth_path)
    w, h = img.size
    # Crop 1: Left section (chemical earthing electrodes & earth pit)
    crop1 = img.crop((0, 0, int(w * 0.52), h))
    crop1.save(os.path.join(crops_dir, "earthing-electrodes-crop.png"))
    # Crop 2: Right section (lightning arrester & surge protection)
    crop2 = img.crop((int(w * 0.48), 0, w, h))
    crop2.save(os.path.join(crops_dir, "lightning-arresters-crop.png"))
    print("Created Earthing & Lightning crops")

# 5. Industrial Electrical Accessories:
# We can use genuine industrial junction box & cable gland assets
# Source: atex_equipment_1787829496955.png which clearly shows certified industrial junction box, cable glands, and control stations
elec_path = os.path.join("public", "assets", "images", "atex_equipment_1787829496955.png")
if os.path.exists(elec_path):
    img = Image.open(elec_path)
    w, h = img.size
    # Crop 1: Junction box & cable termination assembly
    crop1 = img.crop((0, 0, int(w * 0.55), h))
    crop1.save(os.path.join(crops_dir, "electrical-junction-box.png"))
    # Crop 2: Control switches & industrial plug/socket connections
    crop2 = img.crop((int(w * 0.45), 0, w, h))
    crop2.save(os.path.join(crops_dir, "electrical-plugs-switches.png"))
    print("Created Electrical Accessories crops")

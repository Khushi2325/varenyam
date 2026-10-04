import os
from PIL import Image

crops_dir = os.path.join("public", "assets", "images", "crops")
os.makedirs(crops_dir, exist_ok=True)

def crop_center_right(src_name, out_name):
    p = os.path.join("public", "assets", "images", "brochure", src_name)
    if os.path.exists(p):
        im = Image.open(p)
        w, h = im.size
        # crop right half or focused area
        cropped = im.crop((int(w * 0.4), int(h * 0.1), w, int(h * 0.9)))
        out_p = os.path.join(crops_dir, out_name)
        cropped.save(out_p)
        print(f"Generated detail crop: {out_name} from {src_name}")

# Housekeeping detail crop
crop_center_right("industrial-housekeeping.png", "housekeeping-scrubber-detail.png")

# Spill control detail crop
crop_center_right("spill-control-2.png", "spill-pallet-detail.png")

# Safety signage detail crop
crop_center_right("safety-signage-1.png", "safety-signage-detail.png")

# LOTO detail crop
crop_center_right("lockouts-and-tagouts.png", "loto-station-detail.png")

# Lighting detail crop
crop_center_right("led-lightings.png", "led-highbay-detail.png")

# Process safety detail crop
crop_center_right("process-safety.png", "process-shower-detail.png")

# Storage detail crop
crop_center_right("storage.png", "pallet-racking-detail.png")

# Consumables detail crop
crop_center_right("industrial-consumables-2.png", "consumables-adhesives-detail.png")

# Packaging detail crop
crop_center_right("packing-materials.png", "packaging-strapping-detail.png")

# Warehouse safety detail crop
crop_center_right("warehouse-safety.png", "warehouse-bollard-detail.png")

# Environmental detail crop
crop_center_right("environmental-compliance-1.png", "environmental-monitor-detail.png")

import os
import json
import re

with open('src/data/products.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Parse CATEGORIES
cat_block = re.search(r'export const CATEGORIES: CategoryInfo\[\] = \[(.*?)\];\s*export const PRODUCTS', content, re.DOTALL)
if not cat_block:
    print("FAILED to find CATEGORIES block")
    exit(1)

# Extract objects
cats_raw = cat_block.group(1)

# Let's import CATEGORIES via a quick python translation or regex
ids = re.findall(r'"id":\s*"([^"]+)"', cats_raw)
names = re.findall(r'"name":\s*"([^"]+)"', cats_raw)
images = re.findall(r'"image":\s*"([^"]+)"', cats_raw)
urls = re.findall(r'"url":\s*"([^"]+)"', cats_raw)

print(f"Total categories found: {len(ids)}")
assert len(ids) == 23, f"Expected 23 categories, got {len(ids)}"

# Check every url referenced
broken_urls = []
for url in set(images + urls):
    # url starts with /assets/
    rel_path = url.lstrip("/")
    full_path = os.path.join("public", rel_path.replace("assets/", "assets/"))
    if not os.path.exists(full_path):
        broken_urls.append((url, full_path))

if broken_urls:
    print(f"ERROR: Found {len(broken_urls)} broken image paths:")
    for url, path in broken_urls:
        print(f"  - {url} (missing at {path})")
    exit(1)
else:
    print(f"SUCCESS: All {len(set(images + urls))} distinct images exist in public directory!")

# Audit category by category
print("\n" + "="*80)
print("AUDIT OF ALL 23 CATEGORIES:")
print("="*80)

for idx, cid in enumerate(ids, 1):
    cname = names[idx - 1] if idx - 1 < len(names) else "Unknown"
    # find gallery for this category
    m = re.search(r'\{\s*"id":\s*"' + cid + r'".*?"gallery":\s*(\{[^\}]+\})', cats_raw, re.DOTALL)
    print(f"\n{idx:02d}. [{cid}] {cname}")
    c_img = images[idx - 1]
    print(f"    Cover Image: {c_img}")
    # find all URLs in this category's block
    cat_match = re.search(r'\{\s*"id":\s*"' + cid + r'".*?\}\s*(?=,\s*\{|\s*\])', cats_raw, re.DOTALL)
    if cat_match:
        cat_urls = re.findall(r'"url":\s*"([^"]+)"', cat_match.group(0))
        for u_idx, u in enumerate(cat_urls, 1):
            print(f"    Gallery Visual {u_idx}: {u}")

import re

with open('src/data/products.ts', 'r', encoding='utf-8') as f:
    text = f.read()

categories = []
matches = re.finditer(r'\{\s*"id":\s*"([^"]+)",\s*"name":\s*"([^"]+)",\s*"count":\s*(\d+)', text)
for m in matches:
    categories.append({
        'id': m.group(1),
        'name': m.group(2),
        'count': int(m.group(3))
    })

for idx, cat in enumerate(categories, 1):
    cid = cat['id']
    prod_pattern = re.compile(r'\{\s*"id":\s*"([^"]+)",\s*"name":\s*"([^"]+)",\s*"category":\s*"([^"]+)",\s*"categoryId":\s*"' + re.escape(cid) + r'"', re.MULTILINE)
    prods = list(prod_pattern.finditer(text))
    prod_names = [p.group(2) for p in prods]
    print(f"\n=== {idx}. [{cid}] {cat['name']} ({len(prod_names)} products) ===")
    for p_idx, pname in enumerate(prod_names, 1):
        print(f"  {p_idx:02d}. {pname}")

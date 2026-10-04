// VARENYAM CORPORATE GIFTING - OFFICIAL PRODUCT & COLLECTION DATA
// Curated with Purpose. Presented with Distinction.

export interface GiftingProduct {
  id: string;
  name: string;
  description: string;
  image: string;
  features?: string[];
}

export interface GiftingCollection {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  heroImage: string;
  themeNote?: string;
  perfectFor: string[];
  signatureTouches?: string[];
  canCustomize?: string[];
  products: GiftingProduct[];
}

export const GIFTING_COLLECTIONS: GiftingCollection[] = [
  {
    id: "executive-collection",
    number: "01",
    title: "THE EXECUTIVE COLLECTION",
    tagline: "Elevated Gifts for Distinguished Relationships.",
    description:
      "A refined selection of premium corporate gifts created for clients, leadership teams, business partners and special occasions. Our Executive Collection combines functionality, elegance and sophisticated presentation to create gifts that leave a lasting impression.",
    heroImage: "/assets/images/varenyam_branded_gifting_box.jpg",
    themeNote: "Make every professional relationship feel exceptional.",
    perfectFor: [
      "CXO & Leadership Gifts",
      "VIP Clients",
      "Business Partners",
      "Milestones",
      "Corporate Events"
    ],
    products: [
      {
        id: "exec-gift-set",
        name: "Premium Executive Gift Sets",
        description:
          "Luxurious matte black presentation box containing an insulated thermal flask, fine leather journal, precision rollerball pen, and tech pouch branded with gold foil Varenyam emblem.",
        image: "/assets/images/varenyam_branded_gifting_box.jpg",
        features: ["Matte Magnetic Box", "Thermal Vacuum Flask", "Fine Leather Journal", "Rollerball Pen"]
      },
      {
        id: "exec-diaries",
        name: "Luxury Diaries & Notebooks",
        description:
          "Handcrafted dark brown textured leather notebooks featuring blind debossed Varenyam emblem, gilt gold-edged pages, dual ribbon bookmarks, and archival paper.",
        image: "/assets/images/gifting/gifting_leather_diary.jpg",
        features: ["Genuine Leather Cover", "Gold Foil Edge Gilding", "Blind Debossing", "Acid-Free Paper"]
      },
      {
        id: "exec-pens",
        name: "Premium Writing Instruments",
        description:
          "Precision-engineered rollerball and fountain pens in brushed brass and gunmetal finish, housed in an artisanal solid dark walnut presentation case.",
        image: "/assets/images/gifting/gifting_premium_pen.jpg",
        features: ["Brushed Brass & Gunmetal", "Walnut Wooden Case", "Smooth Ceramic Refill", "Laser Engraved Clip"]
      },
      {
        id: "exec-bags",
        name: "Executive Bags & Organizers",
        description:
          "Handcrafted cognac tan leather executive briefcase and laptop bag with antique brass buckles, padded tech sleeve, and heat-embossed emblem.",
        image: "/assets/images/gifting/gifting_leather_briefcase.jpg",
        features: ["Top-Grain Leather", "Antique Brass Hardware", "Padded Laptop Compartment", "Ergonomic Strap"]
      },
      {
        id: "exec-drinkware",
        name: "Premium Drinkware",
        description:
          "Double-walled vacuum insulated stainless steel travel flasks in midnight black and brushed steel with precision laser engraved corporate insignia.",
        image: "/assets/images/gifting/gifting_temp_flask.jpg",
        features: ["24hr Cold / 12hr Hot", "304 Food-Grade Steel", "Laser Engraved Logo", "Sweat-Proof Finish"]
      },
      {
        id: "exec-desk",
        name: "Desk Accessories",
        description:
          "Full-grain deep navy leather desk blotter pad with integrated fast wireless charging, matching valet tray, solid brass pen stand, and coaster.",
        image: "/assets/images/gifting/gifting_desk_mat.jpg",
        features: ["Integrated Wireless Charger", "Leather Valet Tray", "Solid Brass Pen Rest", "Fine Edge Stitching"]
      },
      {
        id: "exec-lifestyle",
        name: "Lifestyle & Utility Gifts",
        description:
          "Minimalist 3-in-1 magnetic wireless charging station, slim aluminum power bank with illuminated logo, and braided leather cord organizers.",
        image: "/assets/images/gifting/gifting_tech_dock.jpg",
        features: ["3-in-1 Fast Charging", "Illuminated Emblem", "Braided Cables", "Leather Cord Wrap"]
      },
      {
        id: "exec-hampers",
        name: "Customized Executive Hampers",
        description:
          "Bespoke leadership gift hampers bringing together fine leather accessories, artisanal dry fruits, brass keepsakes, and personalized messages.",
        image: "/assets/images/gifting/celeb_hamper_hero.jpg",
        features: ["Rigid Leatherette Trunk", "Artisanal Selection", "Bespoke Branding", "Custom Ribbon Wrap"]
      }
    ]
  },
  {
    id: "signature-collection",
    number: "02",
    title: "THE SIGNATURE COLLECTION",
    tagline: "Thoughtfully Customized. Unmistakably Yours.",
    description:
      "Your brand deserves more than a standard gift. The Signature Collection brings together thoughtfully selected products with custom branding, personalization and premium packaging, creating a gifting experience that is uniquely yours. From a beautifully branded desk essential to a fully customized gift box, every detail can be designed around your brand.",
    heroImage: "/assets/images/gifting/sig_collection_hero.jpg",
    themeNote: "Your brand. Your message. Your signature.",
    signatureTouches: [
      "Logo Branding",
      "Name Personalization",
      "Premium Packaging",
      "Custom Sleeves",
      "Gift Boxes",
      "Greeting Cards",
      "Ribbons & Tags"
    ],
    perfectFor: [
      "Brand Campaigns",
      "Conferences",
      "Corporate Events",
      "Client Gifting",
      "Marketing Initiatives"
    ],
    products: [
      {
        id: "sig-custom-gifts",
        name: "Customized Corporate Gifts",
        description:
          "Tailor-made signature gift sets incorporating custom color palettes, branded packaging sleeves, and personalized greeting enclosures.",
        image: "/assets/images/gifting/sig_collection_hero.jpg",
        features: ["Custom Color Matching", "Brand Logo Printing", "Premium Presentation", "Bespoke Selection"]
      },
      {
        id: "sig-stationery",
        name: "Branded Stationery",
        description:
          "Heavyweight textured letterheads with gold hot-stamped emblem, matching luxury envelopes with solid brass wax seal stamps, and fine brass rulers.",
        image: "/assets/images/gifting/gifting_stationery.jpg",
        features: ["Cotton Paper Stock", "Hot Gold Foil Stamp", "Brass Wax Seal", "Branded Envelopes"]
      },
      {
        id: "sig-diaries-pens",
        name: "Personalized Diaries & Pens",
        description:
          "Executive planners and matte ballpoint pens customized with individual recipient name engraving and corporate logo embossing.",
        image: "/assets/images/gifting/gifting_leather_diary.jpg",
        features: ["Individual Name Engraving", "Embossed Covers", "Silk Bookmark", "High-GSM Ruled Pages"]
      },
      {
        id: "sig-drinkware",
        name: "Custom Drinkware",
        description:
          "Matte ceramic travel mugs and stainless tumblers featuring precision laser-etched corporate logos and splash-proof lids.",
        image: "/assets/images/gifting/gifting_temp_flask.jpg",
        features: ["Laser Etched Branding", "Ergonomic Grip", "Thermal Insulation", "Spill-Resistant Lid"]
      },
      {
        id: "sig-tech",
        name: "Tech & Utility Accessories",
        description:
          "Ultra-slim anodized aluminum power banks with illuminated emblem, multi-port fast chargers, and durable braided tech cables.",
        image: "/assets/images/gifting/gifting_tech_dock.jpg",
        features: ["Fast Charging Output", "LED Backlit Logo", "Aluminum Unibody", "Compact Form Factor"]
      },
      {
        id: "sig-bags",
        name: "Branded Bags & Merchandise",
        description:
          "Executive laptop sleeves, commuter backpacks, and weekend duffles customized with subtle silicone branding and metal zipper pulls.",
        image: "/assets/images/gifting/gifting_leather_briefcase.jpg",
        features: ["Water-Repellent Fabric", "Cushioned Sleeves", "Discreet Branding", "Reinforced Stitching"]
      },
      {
        id: "sig-desk",
        name: "Personalized Desk Accessories",
        description:
          "Custom engraved leather desk blotters, solid brass paperweights, and pen holders crafted to elevate every executive desk.",
        image: "/assets/images/gifting/gifting_desk_mat.jpg",
        features: ["Custom Monogramming", "Full-Grain Leather", "Solid Brass Accents", "Non-Slip Suede Base"]
      },
      {
        id: "sig-bespoke-sets",
        name: "Bespoke Gift Sets",
        description:
          "Complete personalized hampers built to precise corporate briefs with custom box colors, printed ribbons, and personalized cards.",
        image: "/assets/images/gifting/exec_collection_hero.jpg",
        features: ["100% Configurable", "Custom Printed Sleeves", "Corporate Insert Cards", "Volume Fulfilment"]
      }
    ]
  },
  {
    id: "welcome-collection",
    number: "03",
    title: "THE WELCOME COLLECTION",
    tagline: "Make Every First Impression Memorable.",
    description:
      "A new beginning deserves a thoughtful introduction. The Welcome Collection is designed to help organizations create memorable employee onboarding and joining experiences through beautifully curated welcome kits that combine utility, personality and brand identity. Every kit can be customized according to your organization, employee profile, budget and brand guidelines.",
    heroImage: "/assets/images/gifting/welcome_kit_hero.jpg",
    themeNote: "Welcome them. Inspire them. Make them feel valued.",
    canCustomize: [
      "Product Selection",
      "Packaging",
      "Branding",
      "Employee Names",
      "Welcome Cards",
      "Corporate Messages"
    ],
    perfectFor: [
      "New Joiners",
      "Employee Onboarding",
      "Campus Hiring",
      "Intern Programs",
      "Employee Milestones"
    ],
    products: [
      {
        id: "wel-new-joiner-kit",
        name: "New Joiner Welcome Kits",
        description:
          "A modern unboxing experience in a sage and slate presentation box with an insulated water bottle, hardbound diary, metal pen, wireless earbuds, and welcome note.",
        image: "/assets/images/gifting/welcome_kit_hero.jpg",
        features: ["Rigid Magnetic Box", "Insulated Water Bottle", "Executive Bound Diary", "Wireless Earbuds", "Welcome Card"]
      },
      {
        id: "wel-onboarding-kit",
        name: "Employee Onboarding Kits",
        description:
          "Workstation-ready tech bundle including a protective laptop sleeve, wireless mouse pad, customized USB drive, and brand merchandise.",
        image: "/assets/images/gifting/gifting_tech_dock.jpg",
        features: ["Tech Organizer", "Wireless Charger", "Braided Cables", "Custom Identity Tag"]
      },
      {
        id: "wel-diaries",
        name: "Premium Diaries",
        description:
          "Durable soft-touch hardcover journals with ribbon bookmarks, pen loops, and customized company values insert pages.",
        image: "/assets/images/gifting/gifting_leather_diary.jpg",
        features: ["Soft-Touch Cover", "Pen Loop & Elastic Band", "Company Vision Inserts", "Durable Binding"]
      },
      {
        id: "wel-pens",
        name: "Writing Instruments",
        description:
          "Smooth-writing metal ballpoint and gel pens in modern matte corporate shades with durable pocket clips and engraved logos.",
        image: "/assets/images/gifting/gifting_premium_pen.jpg",
        features: ["Smooth Gel Ink", "Engraved Metal Body", "Reliable Everyday Flow", "Ergonomic Balance"]
      },
      {
        id: "wel-bottles",
        name: "Branded Bottles & Drinkware",
        description:
          "Sleek stainless steel hydration bottles designed for office and gym use, finished with scratch-resistant matte powder coating.",
        image: "/assets/images/gifting/gifting_temp_flask.jpg",
        features: ["Powder-Coated Steel", "Leak-Proof Cap", "Temperature Retaining", "Custom Color Options"]
      },
      {
        id: "wel-desk-essentials",
        name: "Office & Desk Essentials",
        description:
          "Desk productivity essentials including premium sticky note booklets, metallic paper clips, highlighters, and desk blotters.",
        image: "/assets/images/gifting/gifting_desk_mat.jpg",
        features: ["Desk Blotter Pad", "Valet Organization", "Stationery Accessories", "Professional Utility"]
      },
      {
        id: "wel-tech-accessories",
        name: "Tech & Utility Accessories",
        description:
          "Daily work essentials including fast charging cables, high-speed flash drives, webcam security sliders, and lanyard badge holders.",
        image: "/assets/images/gifting/gifting_tech_dock.jpg",
        features: ["Multi-Port Adapters", "Webcam Privacy Sliders", "Card Holders", "Compact Form"]
      },
      {
        id: "wel-merchandise",
        name: "Personalized Merchandise",
        description:
          "Premium combed cotton pique polo t-shirts neatly folded with embroidered emblem, matching ceramic mug, and corporate field apparel.",
        image: "/assets/images/gifting/gifting_apparel_polo.jpg",
        features: ["100% Combed Cotton", "Precision Embroidery", "Ceramic Coffee Mug", "Pre-Shrunk Fabric"]
      }
    ]
  },
  {
    id: "celebration-collection",
    number: "04",
    title: "THE CELEBRATION COLLECTION",
    tagline: "Curated Moments of Appreciation.",
    description:
      "Festivals, milestones and achievements are moments worth celebrating. Our Celebration Collection brings together beautifully curated festive gifts, premium hampers and personalized corporate presents designed to make every occasion special. Whether it is an annual festive celebration or a special gesture of appreciation, we create hampers that reflect your brand and the spirit of the occasion.",
    heroImage: "/assets/images/gifting/celeb_hamper_hero.jpg",
    themeNote: "Celebrate generously. Appreciate meaningfully.",
    perfectFor: [
      "Diwali",
      "New Year",
      "Festivals",
      "Employee Appreciation",
      "Client Appreciation",
      "Corporate Milestones",
      "Special Occasions"
    ],
    products: [
      {
        id: "cel-festive-hampers",
        name: "Premium Festive Hampers",
        description:
          "Opulent emerald and gold trimmed trunk box open to showcase roasted dry fruit jars, brass scented candles with emblem, fine chocolates, and golden greeting card.",
        image: "/assets/images/gifting/celeb_hamper_hero.jpg",
        features: ["Emerald Velvet Trunk", "Apothecary Nut Jars", "Brass Scented Candle", "Gold Stamped Card"]
      },
      {
        id: "cel-dry-fruits",
        name: "Dry Fruit Hampers",
        description:
          "Three fluted glass jars with brushed brass airtight lids engraved with the Varenyam floral emblem, filled with California almonds, cashews, and pistachios on a dark oak tray.",
        image: "/assets/images/gifting/gifting_dryfruit_jars.jpg",
        features: ["Fluted Glass Jars", "Engraved Brass Lids", "Selected Jumbo Nuts", "Dark Oak Serving Board"]
      },
      {
        id: "cel-gourmet",
        name: "Gourmet Gift Hampers",
        description:
          "Artisanal culinary selections including handcrafted chocolates, gourmet roasted nuts, organic honey, and heritage celebration delicacies.",
        image: "/assets/images/gifting/celeb_hamper_hero.jpg",
        features: ["Single-Origin Chocolates", "Organic Delicacies", "Festive Packaging", "Sealed Freshness"]
      },
      {
        id: "cel-custom-boxes",
        name: "Customized Gift Boxes",
        description:
          "Rigid luxury gift boxes with magnetic snap closures, customized festive sleeves, and personalized satin ribbon bows.",
        image: "/assets/images/gifting/exec_collection_hero.jpg",
        features: ["Magnetic Snap Lid", "Custom Festive Sleeves", "Satin Ribbons", "Tailored Inlays"]
      },
      {
        id: "cel-festival-themed",
        name: "Festival-Themed Hampers",
        description:
          "Culturally inspired celebration sets with handcrafted brass diyas, fragrant dhoop cones, artisanal sweets, and personalized holiday wishes.",
        image: "/assets/images/gifting/celeb_hamper_hero.jpg",
        features: ["Handcrafted Brass Diya", "Artisanal Fragrances", "Festive Treats", "Festive Greeting"]
      },
      {
        id: "cel-personalized-gifts",
        name: "Personalized Corporate Gifts",
        description:
          "Commemorative silver/brass coins, engraved celebration plaques, and bespoke festive keepsakes honoring milestones.",
        image: "/assets/images/gifting/gifting_stationery.jpg",
        features: ["Commemorative Keepsakes", "Precision Engraving", "Velvet Presentation Box", "Milestone Tokens"]
      },
      {
        id: "cel-lifestyle",
        name: "Premium Lifestyle Gifts",
        description:
          "Aromatherapy reed diffusers, pure soy wax scented candles, and luxury home comfort gifts presented in celebratory gold boxes.",
        image: "/assets/images/gifting/gifting_desk_mat.jpg",
        features: ["Artisanal Fragrance", "Soy Wax Candles", "Decorative Presentation", "Relaxation Experience"]
      },
      {
        id: "cel-celebration-sets",
        name: "Celebration Gift Sets",
        description:
          "Versatile celebratory sets designed for annual corporate galas, loyalty milestones, and festive team appreciation.",
        image: "/assets/images/gifting/sig_collection_hero.jpg",
        features: ["Universal Appeal", "Festive Branding", "Ready to Gift", "Timely Bulk Dispatch"]
      }
    ]
  }
];

export const GIFTING_PILLARS = [
  {
    title: "CURATED",
    description: "A carefully selected range of products chosen for quality, utility and presentation."
  },
  {
    title: "CUSTOMIZED",
    description: "Gifts tailored to your brand, audience, occasion and budget."
  },
  {
    title: "PRESENTED",
    description: "Premium packaging and finishing that elevate the gifting experience."
  },
  {
    title: "DELIVERED",
    description: "Reliable bulk-order management and professional delivery support."
  }
];

export const GIFTING_CUSTOMIZATIONS = {
  product: [
    "Logo Printing",
    "Laser Engraving",
    "Name Personalization",
    "Embossing",
    "Debossing",
    "UV Printing",
    "Custom Merchandise"
  ],
  packaging: [
    "Premium Gift Boxes",
    "Sleeves",
    "Ribbons",
    "Custom Inserts",
    "Greeting Cards",
    "Thank-You Cards",
    "Corporate Messages"
  ]
};

export const GIFTING_PROCESS_STEPS = [
  {
    step: "01",
    name: "UNDERSTAND",
    description: "We understand your occasion, audience, quantity, budget and brand requirements."
  },
  {
    step: "02",
    name: "CURATE",
    description: "Our team creates a selection of products and gifting combinations aligned with your requirements."
  },
  {
    step: "03",
    name: "CUSTOMIZE",
    description: "Products, packaging and messaging are personalized to create a distinctive brand experience."
  },
  {
    step: "04",
    name: "DELIVER",
    description: "We coordinate production, quality checks, packaging and delivery for a seamless gifting experience."
  }
];

export const GIFTING_SEGMENTS = [
  {
    audience: "FOR EMPLOYEES",
    items: "Welcome Kits • Recognition Gifts • Milestone Gifts • Festive Gifts",
    description: "Build belonging and celebrate personal achievements with thoughtful workplace appreciation."
  },
  {
    audience: "FOR CLIENTS",
    items: "Executive Gifts • Premium Hampers • Appreciation Gifts • Event Gifts",
    description: "Deepen relationships with high-touch, distinguished presentations that reflect respect."
  },
  {
    audience: "FOR BUSINESS PARTNERS",
    items: "Signature Gifts • Customized Gift Sets • Milestone Gifts • Festive Hampers",
    description: "Honor strategic collaborations and mutual successes with sophisticated gifting sets."
  },
  {
    audience: "FOR CORPORATE EVENTS",
    items: "Event Merchandise • Delegate Kits • Conference Gifts • Branded Essentials",
    description: "Equip conferences and annual summits with unified, premium delegate merchandise."
  }
];

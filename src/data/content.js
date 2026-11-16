const img = (name) => new URL(`../assets/images/${name}.webp`, import.meta.url).href

export const BROCHURE_URL = import.meta.env.BASE_URL + 'hvp-ventures-agar-agar-e-brochure-2026.pdf'
export const BROCHURE_FILENAME = 'HVP-Ventures-Agar-Agar-E-Brochure-2026.pdf'

export const CONTACT = {
  whatsapp: '+91 9899665331',
  whatsappUrl: 'https://wa.me/919899665331',
  email: 'red.venutres26@gmail.com',
  address: '22 Kailash Kunj Apartment, Gk-1, New Delhi - 110045',
}

export const pageNames = {
  home: 'Home',
  products: 'Products',
  'agar-powder': 'Agar Powder',
  carrageenan: 'Refined and Semi-Refined Carrageenan',
  'carrageenan-blends': 'Custom Blended Carrageenan Systems',
  'semi-processed-seaweed': 'Semi-Processed Seaweed',
  about: 'About',
  faq: 'FAQ',
  contact: 'Contact',
}

// Hashes from the previous site structure, kept so old links still land somewhere useful.
export const pageAliases = {
  'food-grade-agar-agar': 'agar-powder',
  'bacteriological-agar': 'agar-powder',
  'technical-grade-agar-agar': 'agar-powder',
}

export const catalogNote = 'For all products — packaging in multi-walled paper or PP bags with PE inliner; shelf life 2 years from manufacturing date; store in a cool and dry place; a natural hydrocolloid.'

export const products = [
  {
    image: img('product-agar-powder'), icon: 'food', tone: 'tone-food', tag: 'E406 · HS 1302.31', title: 'Agar powder', page: 'agar-powder', link: 'Agar powder grades',
    description: 'Agar powder for food manufacturers, confectionery producers and technical buyers who need consistent gel strength. Grades from GS600 to GS1000.',
    chips: ['GS600', 'GS700', 'GS800', 'GS900', 'GS1000'],
  },
  {
    image: img('product-carrageenan'), icon: 'drop', tone: 'tone-lab', tag: 'HS 1302.39', title: 'Refined and semi-refined carrageenan', page: 'carrageenan', link: 'Carrageenan grades',
    description: 'Refined kappa carrageenan for strong, stable gel systems, and semi-refined kappa and iota carrageenan for brewery and pet food applications.',
    chips: ['RC Kappa', 'SRC Kappa (Brewery)', 'SRC Kappa (Pet Food)', 'SRC Iota'],
  },
  {
    image: img('product-blends'), icon: 'box', tone: 'tone-tech', tag: 'HS 1302.39', title: 'Custom blended carrageenan systems', page: 'carrageenan-blends', link: 'Carrageenan blends',
    description: 'Blends for beverages and desserts, dairy, cheese, meat and processed meat, and personal care, each with its own specification and recommended dosage.',
    chips: ['Beverages and desserts', 'Dairy', 'Cheese', 'Meat and processed meat', 'Personal care'],
  },
  {
    image: img('product-seaweed'), icon: 'leaf', tone: 'tone-sea', tag: 'HS 1212.21', title: 'Semi-processed seaweed', page: 'semi-processed-seaweed', link: 'Semi-processed seaweed',
    description: 'Alkali-treated Eucheuma cottonii and spinosum chips for kappa and iota carrageenan extraction, with documentation and COA per shipment.',
    chips: ['Alkali-Treated Cottonii (ATC)', 'Alkali-Treated Spinosum (ATS)'],
  },
]

// 'Key: value · Key: value' -> [[key, value], ...]
const spec = (text) => text.split(' · ').map((pair) => {
  const i = pair.indexOf(': ')
  return [pair.slice(0, i), pair.slice(i + 2)]
})
const same = (label, value, n) => [label, ...Array(n).fill(value)]

const blend = (name, subtitle, application, copy, advantages, specText, characteristic, dosage) => ({
  name, subtitle, application, copy, advantages,
  spec: [...spec(specText), ['Recommended dosage', dosage]],
  characteristic,
})
const HOT = 'A natural hydrocolloid, dissolves in water >60°C and thickens as it cools'
const MICRO = 'Total Plate Count: Max 5000 cfu/g · Yeast & Mold: Max 300 cfu/g · Salmonella: Negative in 25 g · E. coli: Negative in 5 g'

export const categories = {
  'agar-powder': {
    name: 'Agar powder',
    title: 'Agar Powder (E406), GS600 to GS1000',
    lead: 'Agar powder for food manufacturers, confectionery producers and technical buyers who need consistent gel strength.',
    body: [
      'Our agar powder range covers grades from GS600-GS1000, so you can match the gel to your formulation instead of compensating with dosage. Agar Powder GS700 delivers a softer, elastic gel at 700 ± 50 g/cm² and suits soft jellies and general desserts. Agar Powder GS800 delivers a firm, stable gel at 800 ± 50 g/cm² and is the versatile choice for desserts, jellies and general food and non-food use. Agar Powder GS900 reaches 900 ± 50 g/cm² for very firm, self-supporting gels and clean slicing in premium desserts and confectionery. Agar Powder GS1000 is the strongest grade at 1000 ± 50 g/cm², for applications where structure and clarity matter most.',
      'All grades are white to cream powders with moisture of max 12% and pH 6.0–8.0, packed in 25 kg multi-walled paper or PP bags with PE inliner. Shelf life is 2 years from manufacturing date and the HS code is 1302.31. Gel strength is measured with the GS Japan method (1.5% gel at 20°C), so you can compare grades with confidence. The minimum order is 550 kg (1 CBM), and every shipment comes with a lot-specific certificate of analysis, a commercial invoice and a packing list; the SDS is available on request. Certification documents can be requested from our team.',
    ],
    tableTitle: 'Agar powder specification',
    table: {
      head: ['Parameter', 'GS600', 'GS700', 'GS800', 'GS900', 'GS1000'],
      rows: [
        same('Color', 'White to cream', 5),
        same('Moisture', 'Max 12%', 5),
        same('Total Ash', 'Max 3%', 5),
        ['Gel Strength', '600 ± 50 g/cm²', '700 ± 50 g/cm²', '800 ± 50 g/cm²', '900 ± 50 g/cm²', '1000 ± 50 g/cm²'],
        same('pH', '6.0 – 8.0', 5),
        same('Particle Size', 'Min 80%, through #80', 5),
        same('Acid Insoluble Ash', 'Max 0.3%', 5),
        same('Mercury', 'Max 0.5 mg/kg', 5),
        same('Cadmium', 'Max 1 mg/kg', 5),
        same('Arsenic', 'Max 3 mg/kg', 5),
        same('Lead', 'Max 0.5 mg/kg', 5),
        same('Total Plate Count', 'Max 10000 cfu/g', 5),
        same('Yeast & Mold', 'Max 100 cfu/g', 5),
        same('Salmonella', 'Negative in 25 g', 5),
        same('E. coli', 'Max 100 cfu/g', 5),
      ],
    },
    highlight: {
      title: 'Strong, Stable Agar-Agar Gels.',
      copy: 'Agar Powder is delivered for applications that require very firm, self-supporting gels and clean slicing. It supports premium desserts, confectionery, and technical gels where structure and clarity are important.',
      advantages: ['Higher strength, firm gels', 'Creates solid, stable structure'],
      facts: [['Application', 'General food and non-food application'], ['HS code', '1302.31']],
    },
    showUses: true,
  },

  carrageenan: {
    name: 'Refined and semi-refined carrageenan',
    title: 'Refined and Semi-Refined Carrageenan',
    lead: 'Refined kappa carrageenan for strong, stable gel systems, and semi-refined kappa and iota carrageenan for brewery and pet food applications.',
    tableTitle: 'Carrageenan specification',
    table: {
      head: ['Parameter', 'RC Kappa', 'SRC Kappa (Brewery)', 'SRC Kappa (Pet Food)', 'SRC Iota'],
      rows: [
        ['Color', 'Yellowish to white', 'Cream to tan', 'Cream to light brown', 'Cream to light brown'],
        same('Moisture', 'Max 12%', 4),
        ['Total Ash', 'Max 35%', 'Max 35%', '', ''],
        ['Salt Gel Strength', 'Min 1300 g/cm²', '300 – 400 g/cm²', '445 – 715 g/cm²', '75 – 200 g/cm²'],
        ['Water Gel Strength', '', '150 – 200 g/cm²', '', ''],
        ['Viscosity', 'Min 5 cP', '70 – 100 cP', 'Min 5 cP', 'Min 5 cP'],
        ['pH', '8.0 – 11.0', '8.0 – 10.0', '8.0 – 11.0', '8.0 – 11.0'],
        ['Particle Size', 'Min 90%, through #120', 'Min 90%, through #30', 'Min 95%, through #40', 'Min 95%, through #40'],
        ['Sulphate Content', '15 – 40%', '15 – 40%', '15 – 40%', 'Min 15%'],
        ['Acid Insoluble Ash', 'Max 1%', '10 – 15%', 'Max 1%', 'Max 1%'],
        ['Acid Insoluble Matter', '', 'Max 1%', 'Max 2%', 'Max 2%'],
        same('Mercury', 'Max 1 mg/kg', 4),
        ['Cadmium', 'Max 1 mg/kg', 'Max 2 mg/kg', 'Max 2 mg/kg', 'Max 1 mg/kg'],
        same('Arsenic', 'Max 3 mg/kg', 4),
        ['Lead', 'Max 5 mg/kg', 'Max 10 mg/kg', 'Max 10 mg/kg', 'Max 10 mg/kg'],
        ['Total Plate Count', 'Max 5000 cfu/g', 'Max 5000 cfu/g', '', ''],
        ['Yeast & Mold', 'Max 300 cfu/g', 'Max 300 cfu/g', '', ''],
        ['Salmonella', 'Negative in 25 g', 'Negative in 25 g', '', ''],
        ['E. coli', 'Negative in 5 g', 'Negative in 5 g', '', ''],
        ['CAS', '', '', '9000-07-01', '9000-07-01'],
        ['E-number', '', '', 'E407', 'E407'],
      ],
    },
    items: [
      {
        name: 'RC Kappa', subtitle: 'Refined Kappa Carrageenan', application: 'General food and non-food application',
        copy: 'RC Kappa is a refined carrageenan designed for strong, stable gel systems. Its fine particle size supports faster dispersion, and it is used in food and non-food applications where firm, sliceable texture and consistent gel strength are required.',
        advantages: ['Fine particles disperse quickly', 'Ideal for firm, stable gels'], hs: '1302.39',
      },
      {
        name: 'SRC Kappa (Brewery)', subtitle: 'Semi-Refined Carrageenan for Brewery Applications', application: 'As a clarifying agent in brewery applications',
        copy: 'SRC Kappa for brewery applications is a semi-refined kappa carrageenan designed to clarify beer and wort and improve foam stability. It is suitable for brewers and processors who require consistent performance with defined gel strength, viscosity, and microbiological limits.',
        advantages: ['Clarifies beer and wort', 'Improves foam stability'], hs: '1302.39',
      },
      {
        name: 'SRC Kappa (Pet Food)', subtitle: 'Semi-Refined Carrageenan for Pet Food', application: 'As a gelling agent or thickener in the petfood industries',
        copy: 'SRC Kappa for pet food provides firm, cohesive gels that support loaf, chunk, and restructured meat formats. It helps bind water, stabilize gravies, and maintain product integrity during processing and storage.',
        advantages: ['Forms firm gels', 'Supports loaf, chunk structure'], hs: '1302.39',
      },
      {
        name: 'SRC Iota', subtitle: 'Semi-Refined Carrageenan for Pet Food Gels', application: 'As a gelling agent or thickener in the petfood industries',
        copy: 'SRC Iota is a semi-refined iota carrageenan for pet food applications where juiciness, structure, and low syneresis are critical. It forms firm gels in the presence of calcium ions and is suitable for sauces, gravies, and structured wet pet food systems.',
        advantages: ['Improves juiciness, reduces syneresis', 'Provides elastic structure'], hs: '1212.21',
      },
    ],
  },

  'carrageenan-blends': {
    name: 'Custom blended carrageenan systems',
    title: 'Custom Blended Carrageenan Systems',
    lead: 'Food-grade blends under HS code 1302.39.',
    body: [
      'Every blend shares the same packing and keeping qualities: 25 kg multi-walled paper or PP bags with PE inliner, 1.5 years shelf life, stored cool and dry at max 30°C and max 60% relative humidity. Unless a product says otherwise, micro limits are total plate count max 5000 cfu/g, yeast and mold max 300 cfu/g, salmonella negative in 25 g, E. coli negative in 5 g.',
    ],
    items: [
      blend('Cold Pudding and Whipping Cream Blend', 'Beverages and desserts', 'General food use, suitable for cold pudding desserts, whipping creams, and more',
        'BA 24 builds creamy, stable textures in cold desserts and aerated dairy systems like whipping cream. It helps control syneresis and maintain smooth structure during storage and serving.',
        ['Creamy texture', 'Stabilizes fat and water'],
        'Color: Cream to tan, free-flowing powder · Moisture: Max 12% · Viscosity: Min 100 cP · pH: 8.0 – 11.0 · Ash Content: 15 – 40% · Acid Insoluble Ash: Max 1% · Acid Insoluble Matter: Max 15% · Particle Size: Min 85%, through #100 · Total Plate Count: Max 5000 cfu/g · Yeast & Mold: Max 100 cfu/g · Salmonella: Negative in 25 g · E. coli: Negative in 5 g',
        'A natural hydrocolloid, thickens in cold & hot water or milk with stirring', '0.5 – 2.5% of the final product'),
      blend('Cocoa Beverage Blend', 'Beverages and desserts', 'General food use, suitable for cocoa drinks, and more',
        'BA 29 helps keep cocoa particles suspended while adding smooth body to chocolate and flavored drinks. It reduces sedimentation and supports a rich, uniform drinking experience.',
        ['Suspends cocoa particulates', 'Adds body and mouthfeel'],
        `Color: Cream to tan, free-flowing powder · Moisture: Max 12% · Viscosity: 1000 – 1300 cP · Salt Gel Strength: 450 – 600 g/cm² · pH: 8.0 – 11.0 · Particle Size: Min 90%, through #120 · ${MICRO}`,
        HOT, '0.1 – 0.5% of the final product'),
      blend('Ice Cream and Gelato Blend', 'Beverages and desserts', 'General food use, suitable for ice cream, gelato, and more',
        'BA 58 works with other stabilizers to control ice crystal growth and melt-down in frozen desserts. It supports a smooth, creamy texture and consistent body throughout distribution and storage.',
        ['Prevents large ice crystals', 'Improves creamy ice cream'],
        `Color: Cream to tan, free-flowing powder · Moisture: Max 12% · Viscosity: 2000 – 4000 cP · Gel Strength: 10 – 150 g/cm² · pH: 7.0 – 11.0 · Particle Size: Min 80%, through #100 · ${MICRO}`,
        HOT, '0.5 – 1.5% of the final product'),
      blend('Jelly and Pudding Blend', 'Beverages and desserts', 'General food use, suitable for jelly desserts, puddings and more',
        'BA 45 produces elastic, resilient gels in jelly and pudding systems. It helps minimize gel syneresis, supporting attractive, stable desserts from production to serving.',
        ['Elastic jelly texture', 'Reduces gel syneresis'],
        `Color: Cream to white, free-flowing powder · Moisture: Max 12% · Viscosity: 100 – 500 cP · Gel Strength: 1000 – 1200 g/cm² · pH: 8.0 – 10.0 · Particle Size: Min 70%, through #100 · ${MICRO}`,
        HOT, '0.5 – 1.5% of the final product'),
      blend('Yogurt and Cream Cheese Blend', 'Dairy', 'General food use, suitable for yoghurt, cream cheese and more',
        'BA 61 builds viscosity and body in cultured and fresh cheese products such as yogurt and cream cheese. It helps prevent whey separation, delivering a creamy, stable texture throughout shelf life.',
        ['Enhances thickness and body', 'Prevents whey separation'],
        `Color: Cream to tan, free-flowing powder · Moisture: Max 12% · Viscosity: 250 – 600 cP · Gel Strength: 50 – 150 g/cm² · pH: 9.0 – 11.0 · Particle Size: Min 90%, through #100 · ${MICRO}`,
        HOT, '0.5 – 1.5% of the final product'),
      blend('Processed and Sliced Cheese Blend', 'Cheese', 'General food use, suitable for processed cheese, sliced cheese, and more',
        'BA 31 supports elastic, meltable texture in processed and sliced cheese products. It reduces brittleness and helps maintain slice integrity while delivering good melt and stretch performance.',
        ['Reduces brittleness', 'Creates elastic, meltable cheese'],
        `Color: Cream to white, free-flowing powder · Moisture: Max 12% · Viscosity: 100 – 200 cP · Salt Gel Strength: 300 – 600 g/cm² · pH: 9.0 – 11.0 · Particle Size: Min 90%, through #120 · ${MICRO}`,
        HOT, '0.5 – 1.0% of the final product'),
      blend('Meatball and Rollade Blend', 'Meat and processed meat', 'General food use, suitable for meatballs, rollades, and more',
        'BA 27 enhances bite texture and water-holding capacity in meatballs, rollades, and similar products. It helps stabilize the protein matrix, improving cooking yield and sliceability.',
        ['Improves bite texture', 'Binds water, boosts yield'],
        `Color: Cream to tan, free-flowing powder · Moisture: Max 12% · Viscosity: 50 – 200 cP · Gel Strength: 600 – 1100 g/cm² · pH: 8.0 – 11.0 · Particle Size: Min 80%, through #120 · ${MICRO}`,
        HOT, '0.5 – 1.5% of the final product'),
      blend('Fish Ball and Fish Cake Blend', 'Meat and processed meat', 'General food use, suitable for fish balls, fish cakes, and more',
        'BA 53 is formulated for processed seafood applications such as fish balls and fish cakes. It helps create a bouncy gel texture while improving water retention, supporting better bite, yield, and product stability through cooking and storage.',
        ['Bouncy gel texture', 'Improves water retention'],
        `Color: Cream to tan, free-flowing powder · Moisture: Max 12% · Viscosity: 80 – 130 cP · Gel Strength: 800 – 1100 g/cm² · pH: Max 11.0 · Particle Size: Min 80%, through #120 · ${MICRO}`,
        HOT, '0.5 – 1.5% of the final product'),
      blend('Peel-Off Mask Blend', 'Personal care', 'Personal care use, suitable for peel-off masks',
        'BA 15 is designed for peel-off mask systems that require smooth film formation and stable rheology. It dissolves in hot water and thickens on cooling to deliver uniform, flexible cosmetic films.',
        ['Creates smooth peel-off films', 'Stabilizes viscosity'],
        `Color: Cream to light brown, free-flowing powder · Moisture: Max 12% · Viscosity: 200 – 600 cP · Salt Gel Strength: 300 – 600 g/cm² · pH: 8.0 – 11.0 · Particle Size: Min 80%, through #120 · ${MICRO}`,
        HOT, '0.5 – 1.0% of the final product'),
      blend('Hard Gel Air Freshener Blend', 'Personal care', 'Personal care application, suitable for hard gel air fresheners',
        'BA 26 is formulated for hard gel air fresheners that need clear, elastic gels with low liquid separation. It dissolves in hot water and sets into stable gels that carry fragrance effectively over time.',
        ['Forms elastic gels', 'Prevents gel syneresis leakage'],
        'Color: Cream to white, free-flowing powder · Moisture: Max 12% · Viscosity: Min 5 cP · Salt Gel Strength: Min 900 g/cm² · pH: 7.0 – 10.0 · Particle Size: Min 90%, through #100 · Total Plate Count: Max 10000 cfu/g · Yeast & Mold: Max 500 cfu/g',
        HOT, '0.5 – 1.5% of the final product'),
      blend('Toothpaste and Lotion Blend', 'Personal care', 'Personal care use, suitable for toothpaste, lotion, and more',
        'BA 37 provides controlled viscosity and emulsion stability in toothpaste, lotions, and similar personal care products. It builds clean, low-syneresis structure while supporting smooth, homogeneous textures.',
        ['Thickens and stabilizes emulsion', 'Builds clean, low-syneresis structure'],
        `Color: Cream to white, free-flowing powder · Moisture: Max 12% · Viscosity: 12 – 25 cP · Gel Strength: 65 – 85 g/cm² · pH: 9.0 – 11.0 · Particle Size: Min 85%, through #120 · ${MICRO}`,
        HOT, '0.5 – 2.5% of the final product'),
    ],
  },

  'semi-processed-seaweed': {
    name: 'Semi-processed seaweed',
    title: 'Semi-Processed Seaweed',
    lead: 'Alkali-treated Eucheuma cottonii and spinosum chips for kappa and iota carrageenan extraction, with documentation and COA available per shipment.',
    items: [
      {
        name: 'Alkali-Treated Cottonii (ATC)', subtitle: 'Semi-Processed Kappa Carrageenan Chips',
        copy: 'ATC is semi-processed Eucheuma cottonii treated under controlled alkaline conditions to streamline kappa carrageenan extraction. It supports processing efficiency and consistent gel performance, with documentation and COA available per shipment.',
        spec: spec(`Moisture: Max 15% · pH: 9 – 11 · Viscosity: Min 100 cP · Water Gel Strength: Min 100 g/cm² · Potassium Gel Strength: Min 700 g/cm² · ${MICRO} · HS code: 1212.21`),
      },
      {
        name: 'Alkali-Treated Spinosum (ATS)', subtitle: 'Semi-Processed Iota Carrageenan Chips',
        copy: 'ATS is semi-processed Eucheuma spinosum optimized for iota carrageenan extraction. The alkaline pre-treatment improves process efficiency while supporting elastic, cohesive gel systems, with documentation and COA available per shipment.',
        spec: spec(`Moisture: Max 15% · pH: 9 – 11 · Viscosity: Min 60 cP · Water Gel Strength: Min 15 g/cm² · Calcium Gel Strength: Min 25 g/cm² · ${MICRO} · HS code: 1212.21`),
      },
    ],
  },
}

const banners = {
  'agar-powder': ['banner-agar-powder', 'Close-up of fine cream-coloured powder'],
  carrageenan: ['banner-carrageenan', 'Stainless steel tanks in a brewery'],
  'carrageenan-blends': ['banner-blends', 'Bowls of yogurt topped with fruit'],
  'semi-processed-seaweed': ['banner-seaweed', 'Aerial view of seaweed drying on racks'],
}
const itemImages = {
  'Cold Pudding and Whipping Cream Blend': ['item-cold-pudding', 'Set milk pudding with fruit sauce'],
  'Ice Cream and Gelato Blend': ['item-ice-cream', 'Scoops of ice cream in bowls'],
  'Jelly and Pudding Blend': ['item-jelly', 'Bowl of jelly dessert'],
  'Yogurt and Cream Cheese Blend': ['item-yogurt', 'Bowls of yogurt topped with fruit'],
  'Hard Gel Air Freshener Blend': ['item-air-freshener', 'Home fragrance diffuser beside a small plant'],
  'Toothpaste and Lotion Blend': ['item-lotion', 'Jar of cream on a display stand'],
  'Alkali-Treated Cottonii (ATC)': ['item-atc', 'Farmer carrying baskets of harvested seaweed'],
  'Alkali-Treated Spinosum (ATS)': ['chain-harvest', 'Seaweed being gathered by hand on a tidal flat'],
}
for (const [id, category] of Object.entries(categories)) {
  const [name, alt] = banners[id]
  category.banner = { src: img(name), alt }
  for (const item of category.items || []) {
    if (itemImages[item.name]) item.image = { src: img(itemImages[item.name][0]), alt: itemImages[item.name][1] }
  }
}
categories['agar-powder'].highlight.image = { src: img('item-agar-gels'), alt: 'Powder being handled in a processing room' }

const l = (to, text) => ({ to, text })

export const faqs = [
  ['What is agar agar made of?', ['Agar agar is a gelling agent extracted from red seaweed. Our supply comes mainly from Gracilaria species sourced in Asia. It is a polysaccharide, so it is plant-based, and it is listed as E406 in food additive systems. See our ', l('agar-powder', 'agar agar powder grades'), '.']],
  ['How to use agar agar in gummies and jellies?', ['Agar agar does not dissolve in cold water. Hydrate the powder in water, bring the mixture to a full boil and hold it until fully dissolved. Add sugar and flavor, then pour into molds before the mixture sets. Agar sets at a higher temperature than gelatin, so work quickly as it cools. The right dosage depends on the target texture and gel strength, so test a small batch before scaling up. Our ', l('agar-powder', 'food grade agar agar'), ' range covers these uses.']],
  ['How is agar agar used in vegan products?', ['Agar agar is a plant-based gelling and stabilizing ingredient derived from red seaweed. It can replace animal-derived gelatin in vegan desserts, gummies, confectionery, bakery fillings and other formulations. Because agar produces a firmer gel and sets at a higher temperature than gelatin, manufacturers should test the dosage and process for their required texture. Explore our ', l('agar-powder', 'food grade agar agar for vegan products'), '.']],
  ['What is the difference between agar agar and gelatin?', ['Agar agar is plant-based and derived from seaweed, so it suits vegan and vegetarian products. Gelatin is animal-derived. Agar sets firmer and stays stable at higher temperatures than gelatin. It is generally used where vegan, halal or kosher formulations are required, subject to a current certificate.']],
  ['What does GS600 or GS1000 gel strength mean?', ['GS is the gel strength of the agar, measured in g/cm². A higher grade such as GS1000 forms a firmer gel than GS600. Each certificate of analysis states the measured gel strength for that lot.']],
  ['What is the agar agar price per kg for bulk orders?', ['Agar agar pricing depends on grade, gel strength, volume and destination. Send your requirement to our ', l('contact', 'trade desk'), ' for a quotation.']],
  ['What are the minimum order quantities?', ['Bulk orders are quoted per requirement. Agar agar is supplied in 25 kg bags on FOB or CIF terms, so share your target quantity and destination port.']],
  ['Do you supply samples before bulk orders?', ['Yes. Samples are sent to your laboratory so you can test the grade against your own method before committing to a bulk order.']],
  ['How is agar agar shipped and documented?', ['Shipments are made on FOB or CIF terms in 25 kg bags. Each lot travels with a certificate pack and a batch certificate of analysis.']],
  ['How is agar agar used in pharmaceutical products?', ['Agar agar can be used as a gelling, thickening, stabilizing or suspending excipient in selected pharmaceutical and nutraceutical formulations. The required purity, gel strength and documentation depend on the intended application and applicable standards. Buyers should confirm the complete specification and suitability with their formulation and quality teams.']],
]

export const processSteps = [
  ['01', 'Share your brief', 'Product, grade, volume and destination port.'],
  ['02', 'Samples to your lab', 'Test them your way, with no obligation.'],
  ['03', 'Approve and quote', 'We quote for your volume and port.'],
  ['04', 'Ship with documents', 'Certificate pack and batch COA included.'],
]

export const stats = [
  ['4', 'Product lines', 'Agar, carrageenan, blends, seaweed'],
  ['GS600–1000', 'Agar gel strength', '± 50 g/cm², GS Japan method'],
  ['25 kg', 'Standard bag', 'Paper or PP bags with PE inliner'],
  ['FOB · CIF', 'Trade terms', 'Quoted per specification'],
]

export const applications = [
  { image: img('app-food'), alt: 'Plate of moulded fruit jellies', icon: 'food', title: 'Food and confectionery', copy: 'Jellies, desserts, vegan gummies.', page: 'agar-powder' },
  { image: img('app-bacteriological'), alt: 'Petri dishes with culture media', icon: 'lab', title: 'Bacteriological', copy: 'Plate count, selective and differential culture media.', page: 'agar-powder' },
  { image: img('app-cosmetics'), alt: 'Row of lipsticks', icon: 'drop', title: 'Cosmetics and industry', copy: 'Cosmetic, personal care and industrial gel formulations.', page: 'agar-powder' },
  { image: img('app-pharma'), alt: 'Sample vials in a laboratory autosampler', icon: 'pill', title: 'Pharma and nutraceutical', copy: 'Gelling, thickening and suspending excipient in selected formulations.', page: 'agar-powder' },
]

export const ABOUT_IMAGE = img('about-harvest')

export const supplyChain = [
  { image: img('chain-harvest'), alt: 'Seaweed being gathered by hand on a tidal flat', title: 'Harvest', copy: 'Red seaweed gathered at origin in Asia.' },
  { image: img('chain-drying'), alt: 'Aerial view of seaweed drying on racks', title: 'Drying', copy: 'Dried and sorted before processing.' },
  { image: img('chain-processing'), alt: 'Stainless steel filter press in a processing plant', title: 'Processing', copy: 'Extracted, filtered and milled to specification.' },
  { image: img('chain-shipping'), alt: 'Container ship loading at port', title: 'Shipping', copy: 'Shipped on FOB or CIF terms with batch COA.' },
]

export const principles = [
  ['target', 'Specifications', 'We start from your target — product, grade, gel strength and application.'],
  ['lab', 'Samples before commitment', 'Samples go to your lab. Test them against your own method, with no obligation.'],
  ['doc', 'Documented, every lot', 'A full certificate pack and a batch COA travel with every shipment.'],
]

export const certifications = ['FSSC 22000', 'HACCP', 'Halal', 'Kosher']

export const tradeFacts = [
  ['Packaging', 'Multi-walled paper or PP bags with PE inliner'],
  ['Trade terms', 'FOB or CIF'],
  ['Documents', 'Certificate pack + batch COA'],
]

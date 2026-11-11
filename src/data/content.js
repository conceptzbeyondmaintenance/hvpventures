export const BROCHURE_URL = import.meta.env.BASE_URL + 'hvp-ventures-agar-agar-e-brochure-2026.pdf'
export const BROCHURE_FILENAME = 'HVP-Ventures-Agar-Agar-E-Brochure-2026.pdf'

export const CONTACT = {
  whatsapp: '+91 9899665331',
  whatsappUrl: 'https://wa.me/919899665331',
  email: 'red.venutres26@gmail.com',
  address: 'U-12/A, First Floor, Green Park Extension, New Delhi — 110016, India',
}

export const pageNames = {
  home: 'Home',
  products: 'Products',
  'food-grade-agar-agar': 'Food Grade Agar Agar',
  'bacteriological-agar': 'Bacteriological Agar',
  'technical-grade-agar-agar': 'Technical Grade Agar Agar',
  about: 'About',
  faq: 'FAQ',
  contact: 'Contact',
}

export const products = [
  { title: 'Food grade agar agar', description: 'Food grade agar agar for jellies, desserts, confectionery and vegan gummies. Agar sets firmer and at a higher temperature than gelatin.', page: 'food-grade-agar-agar', link: 'food grade agar agar specifications' },
  { title: 'Bacteriological agar', description: 'Bacteriological agar for microbial culture media, including plate count and selective media, where consistent gel strength and clarity matter.', page: 'bacteriological-agar', link: 'bacteriological agar grades' },
  { title: 'Technical grade agar agar', description: 'Technical grade agar agar for industrial and cosmetic gel formulations and other non-food applications.', page: 'technical-grade-agar-agar', link: 'technical grade agar agar grades' },
]

export const gradeData = {
  'food-grade-agar-agar': {
    name: 'Food grade agar agar',
    title: 'Food Grade Agar Agar (E406), GS600 to GS1000',
    lead: 'Food grade agar agar for jellies, desserts, confectionery and vegan gummies. Agar sets firmer and at a higher temperature than gelatin.',
    applications: ['Jellies and desserts', 'Confectionery and vegan gummies', 'Plant-based dessert formulations', 'Bakery fillings and glazes'],
  },
  'bacteriological-agar': {
    name: 'Bacteriological agar',
    title: 'Bacteriological Agar for Culture Media',
    lead: 'Bacteriological agar for microbial culture media, including plate count and selective media, where consistent gel strength and clarity matter.',
    applications: ['Plate count and general culture media', 'Selective and differential media', 'Quality control and teaching laboratories', 'Research and diagnostic laboratories'],
  },
  'technical-grade-agar-agar': {
    name: 'Technical grade agar agar',
    title: 'Technical Grade Agar Agar, GS600 to GS1000',
    lead: 'Technical grade agar agar for industrial and cosmetic gel formulations and other non-food applications.',
    applications: ['Cosmetic and personal care gels', 'Industrial gelling applications', 'Biotechnology laboratory preparations'],
  },
}

export const rangeRows = [
  ['Agar Powder GS800', '800 ± 50', '1302.31'],
  ['Agar Powder GS900', '900 ± 50', '1302.31'],
  ['Agar Powder GS1000', '1000 ± 50', '1302.31'],
]

export const specRows = [
  ['Gel strength', '900 ± 50 · 1000 and firmer · custom (g/cm²)'],
  ['Loss on drying', '≤ 22%'],
  ['Total ash', '≤ 6.5% (dry basis)'],
  ['Acid-insoluble ash', '≤ 0.5% (dry basis)'],
  ['Water-insoluble matter', '≤ 1%'],
  ['Arsenic', '≤ 3 mg/kg'],
  ['Lead', '≤ 5 mg/kg'],
  ['Cadmium', '≤ 1 mg/kg'],
  ['Mercury', '≤ 1 mg/kg'],
  ['Starch and gelatin', 'Not detectable'],
]

const l = (to, text) => ({ to, text })

export const faqs = [
  ['What is agar agar made of?', ['Agar agar is a gelling agent extracted from red seaweed. Our supply comes mainly from Gracilaria species sourced in Asia. It is a polysaccharide, so it is plant-based, and it is listed as E406 in food additive systems. See our ', l('products', 'agar agar powder grades'), '.']],
  ['How to use agar agar in gummies and jellies?', ['Agar agar does not dissolve in cold water. Hydrate the powder in water, bring the mixture to a full boil and hold it until fully dissolved. Add sugar and flavor, then pour into molds before the mixture sets. Agar sets at a higher temperature than gelatin, so work quickly as it cools. The right dosage depends on the target texture and gel strength, so test a small batch before scaling up. Our ', l('food-grade-agar-agar', 'food grade agar agar'), ' range covers these uses.']],
  ['How is agar agar used in vegan products?', ['Agar agar is a plant-based gelling and stabilizing ingredient derived from red seaweed. It can replace animal-derived gelatin in vegan desserts, gummies, confectionery, bakery fillings and other formulations. Because agar produces a firmer gel and sets at a higher temperature than gelatin, manufacturers should test the dosage and process for their required texture. Explore our ', l('food-grade-agar-agar', 'food grade agar agar for vegan products'), '.']],
  ['What is the difference between agar agar and gelatin?', ['Agar agar is plant-based and derived from seaweed, so it suits vegan and vegetarian products. Gelatin is animal-derived. Agar sets firmer and stays stable at higher temperatures than gelatin. It is generally used where vegan, halal or kosher formulations are required, subject to a current certificate for the product.']],
  ['What does GS600 or GS1000 gel strength mean?', ['GS followed by a number is the gel strength grade, expressed in grams per square centimeter (g/cm²). It is measured on a standard agar gel under defined test conditions. A higher grade such as GS1000 forms a firmer gel than GS600. Each certificate of analysis states the measured value for its lot. See our ', l('products', 'agar agar GS600, GS900 and GS1000 grades'), '.']],
  ['What is the agar agar price per kg for bulk orders?', ['We do not publish a fixed price per kilogram. Pricing depends on grade, volume, packaging and whether the terms are FOB or CIF. Send your grade, quantity and destination to receive a written ', l('contact', 'agar agar quotation'), '.']],
  ['What is the minimum order quantity for agar agar export?', ['Agar agar is sold in 25 kg bags. The minimum order quantity depends on the grade and destination and is confirmed in your quotation. Please ', l('contact', 'contact our trade desk'), ' with your requirement.']],
  ['Is agar agar halal and kosher certified?', ['Agar agar is plant-based and contains no animal ingredients. Halal and kosher status is confirmed per product by a current certificate, which we provide on request. [Insert certificate numbers and issuing bodies before publishing.]']],
  ['What is bacteriological agar used for in culture media?', ['Bacteriological agar is the solidifying agent in microbial culture media, such as plate count and selective media, where clarity and consistent gel strength matter. Browse our ', l('bacteriological-agar', 'bacteriological agar grades'), ' or ', l('contact', 'request an agar agar sample'), '.']],
  ['How is agar agar used in pharmaceutical products?', ['Agar agar can be used as a gelling, thickening, stabilizing or suspending excipient in selected pharmaceutical and nutraceutical formulations. The required purity, gel strength and documentation depend on the intended application and applicable standards. Buyers should confirm the complete specification and suitability with their formulation and quality teams. ', l('contact', 'Contact our trade desk'), ' to discuss the required grade and documentation.']],
]

export const processSteps = [
  ['01', 'Share your brief', 'Grade, strength, volume and destination port.'],
  ['02', 'Samples to your lab', 'Test them your way, with no obligation.'],
  ['03', 'Approve and quote', 'We quote for your volume and port.'],
  ['04', 'Ship with documents', 'Certificate pack and batch COA included.'],
]

import { BusinessDetails, ServiceItem, ReviewItem, GalleryItem } from '../types';
import heroSalonImage from '../assets/images/hero_salon_interior_1793592856324.jpg';
import balayageImage from '../assets/images/hair_color_balayage_1793592857360.jpg';
import hairStylingImage from '../assets/images/hair_styling_craft_1793592857314.jpg';
import hairTreatmentImage from '../assets/images/hair_treatment_spa_1793592858043.jpg';

export const BUSINESS_INFO: BusinessDetails = {
  name: 'The Hair Master Professional Unisex Salon',
  shortName: 'The Hair Master Professional Unisex Salon',
  tagline: 'Precision Hairdressing & Restorative Hair Therapies in Mira Road',
  address: {
    line1: 'Shop No. 4, Poonam Estate Cluster 2, Gaurav Galaxy',
    landmark: 'Near Poonam Sagar Complex',
    area: 'Mira Road East',
    city: 'Thane / Mira Bhayandar',
    state: 'Maharashtra',
    pincode: '401107',
    fullFormatted: 'Shop 4, Poonam Estate Cluster 2, Gaurav Galaxy, Poonam Sagar Complex, Mira Road East, Maharashtra 401107'
  },
  phone: '+91 75062 74638',
  phoneRaw: '+917506274638',
  whatsapp: '+91 75062 74638',
  whatsappUrl: 'https://wa.me/917506274638?text=Hello%20The%20Hair%20Master%2C%20I%20would%20like%20to%20book%20an%20appointment%20or%20consultation.',
  googleMapsUrl: 'https://maps.app.goo.gl/fg48oBgsuX6vyuhn9',
  googleRating: 4.9,
  reviewCount: 58,
  openingHours: {
    days: 'Monday to Sunday (Open All 7 Days)',
    hours: '10:00 AM – 10:00 PM'
  }
};

export const SERVICES: ServiceItem[] = [
  // Haircuts & Styling
  {
    id: 'hc-women-layer',
    name: "Women's Signature Layered & Feather Cut",
    category: 'haircuts',
    priceStarting: 550,
    duration: '45 mins',
    description: 'Precision personalized consultation, shampoo wash with conditioning, textured cut, and salon blowout finish.',
    popular: true,
    idealFor: 'Volume restoration & framing'
  },
  {
    id: 'hc-men-signature',
    name: "Men's Master Fade & Textured Scissor Cut",
    category: 'haircuts',
    priceStarting: 250,
    duration: '30 mins',
    description: 'Custom hairline taper, precision shear work, invigorating hair wash, and modern matte pomade styling.',
    popular: true,
    idealFor: 'Clean modern gentleman aesthetic'
  },
  {
    id: 'hc-blowdry-styling',
    name: 'Glamour Blowdry & Thermal Curls / Straightening',
    category: 'haircuts',
    priceStarting: 450,
    duration: '35 mins',
    description: 'Deep scalp wash followed by high-gloss ceramic blowout or soft beach waves for parties and events.',
    popular: false,
    idealFor: 'Special occasions & date nights'
  },
  {
    id: 'hc-kids',
    name: "Junior Haircut (Under 12)",
    category: 'haircuts',
    priceStarting: 200,
    duration: '25 mins',
    description: 'Patient, gentle styling designed to keep kids relaxed and looking sharp.',
    popular: false,
    idealFor: 'Children & teenagers'
  },

  // Chemical & Restorative Treatments
  {
    id: 'tr-keratin',
    name: 'Brazilian Keratin Smoothing Treatment',
    category: 'treatments',
    priceStarting: 3499,
    duration: '120 - 150 mins',
    description: 'Deep protein infusion eliminating 95% of frizz, adding mirror shine and manageable silkiness lasting up to 4-5 months.',
    popular: true,
    idealFor: 'Frizzy, coarse, or unruly hair'
  },
  {
    id: 'tr-botox',
    name: 'Hair Botox Deep Fiber Rejuvenation',
    category: 'treatments',
    priceStarting: 3999,
    duration: '120 mins',
    description: 'Formaldehyde-free intensive anti-aging hair therapy filled with caviar oil, B5, and collagen to repair chemically damaged hair.',
    popular: true,
    idealFor: 'Bleached, brittle, or split hair'
  },
  {
    id: 'tr-nanoplastia',
    name: 'Organic Nanoplastia Gloss Treatment',
    category: 'treatments',
    priceStarting: 4499,
    duration: '150 mins',
    description: 'Amino-acid based permanent realignment that strengthens hair core while offering glass-hair reflection without harsh fumes.',
    popular: false,
    idealFor: 'Curly and sensitized textures'
  },
  {
    id: 'tr-spa-scalp',
    name: 'Intense Moisture Hair Spa & Scalp Detox',
    category: 'treatments',
    priceStarting: 899,
    duration: '60 mins',
    description: 'Scalp clarifying massage, hot towel steam infusion, deep repair mask, and blast dry.',
    popular: true,
    idealFor: 'Dry scalp, dandruff & weekly stress relief'
  },

  // Hair Colouring
  {
    id: 'col-balayage',
    name: 'Signature Dimensional Balayage / Ombré',
    category: 'colouring',
    priceStarting: 3999,
    duration: '180 mins',
    description: 'Hand-painted freehand highlights tailored to your natural skin undertone, featuring seamless root melt and gloss toner.',
    popular: true,
    idealFor: 'Low maintenance, luxury sun-kissed glow'
  },
  {
    id: 'col-global',
    name: 'L’Oréal / Schwarzkopf Global Hair Colour',
    category: 'colouring',
    priceStarting: 1899,
    duration: '90 mins',
    description: 'Rich, even chromatic coverage with ammonia-free conditioning technology that locks in vibrancy and protect cuticle health.',
    popular: false,
    idealFor: 'Full color transformation & grey coverage'
  },
  {
    id: 'col-touchup',
    name: 'Root Touch-Up & Shine Lock',
    category: 'colouring',
    priceStarting: 999,
    duration: '60 mins',
    description: 'Precise regrowth grey coverage with exact tone matching and post-color nourishing wash.',
    popular: true,
    idealFor: 'Maintenance every 4-6 weeks'
  },
  {
    id: 'col-creative',
    name: 'Pastel & Creative Fashion Streaks',
    category: 'colouring',
    priceStarting: 1499,
    duration: '75 mins',
    description: 'Vibrant pops of color (caramel, ruby, ash blond, or copper) crafted with protective Olaplex bond builders.',
    popular: false,
    idealFor: 'Bold statement styling'
  },

  // Men's Grooming
  {
    id: 'gr-beard-contour',
    name: 'Artisanal Beard Sculpture & Lineup',
    category: 'grooming',
    priceStarting: 150,
    duration: '20 mins',
    description: 'Precision razor edging, length tapering, organic beard oil hydration, and soothing aftershave balm.',
    popular: true,
    idealFor: 'Crisp beard definition'
  },
  {
    id: 'gr-beard-spa',
    name: 'Gentleman’s Royal Beard Spa & Hot Towel',
    category: 'grooming',
    priceStarting: 350,
    duration: '35 mins',
    description: 'Exfoliating beard wash, steam treatment, invigorating facial massage, and softening deep mask.',
    popular: false,
    idealFor: 'Coarse beard hair softening'
  },
  {
    id: 'gr-detox-cleanup',
    name: "Men's Activated Charcoal Pore Detox",
    category: 'grooming',
    priceStarting: 650,
    duration: '40 mins',
    description: 'Deep sonic pore cleansing, blackhead extraction, tan removal pack, and cold compress seal.',
    popular: true,
    idealFor: 'City commuters & pollution control'
  },

  // Skin & Spa
  {
    id: 'sk-o3-facial',
    name: 'O3+ Bridal / Groom Brightening Facial',
    category: 'skin',
    priceStarting: 1800,
    duration: '75 mins',
    description: 'Multi-step clinical glow facial targeting hyperpigmentation, uneven skin tone, and dullness before weddings or celebrations.',
    popular: true,
    idealFor: 'Pre-event radiant complexion'
  },
  {
    id: 'sk-dtan-glow',
    name: 'Express Oxy D-Tan & Fruit Cleanup',
    category: 'skin',
    priceStarting: 700,
    duration: '45 mins',
    description: 'Instant sun damage reversal with herbal enzymes and cooling mint algae mask.',
    popular: false,
    idealFor: 'Quick weekend rejuvenation'
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Pooja Sharma',
    rating: 5,
    date: '3 weeks ago',
    service: 'Keratin Treatment & Haircut',
    comment: 'Got my keratin treatment and haircut done here. The hair stylist really understands hair textures and didn’t rush at all. My hair is so silky and frizz-free even in Mumbai humidity. Easily the best salon in Poonam Sagar Mira Road!',
    source: 'Google Business Profile'
  },
  {
    id: 'rev-2',
    author: 'Rahul Jaiswal',
    rating: 5,
    date: '1 month ago',
    service: "Men's Haircut & Beard Grooming",
    comment: 'Super clean and hygienic salon! The staff is courteous and knowledgeable. They gave me a clean skin fade and shaped my beard perfectly. Very reasonable prices for the premium quality they deliver.',
    source: 'Google Business Profile'
  },
  {
    id: 'rev-3',
    author: 'Sneha Fernandez',
    rating: 5,
    date: '2 months ago',
    service: 'Caramel Balayage & Blowdry',
    comment: 'I was hesitant to color my hair, but the master colorist walked me through every step and did a gorgeous caramel balayage. The result looked straight out of Pinterest! No hair dryness whatsoever.',
    source: 'Google Business Profile'
  },
  {
    id: 'rev-4',
    author: 'Amitabh Mehta',
    rating: 5,
    date: 'Recent visit',
    service: 'Hair Spa & Charcoal Cleanup',
    comment: 'Relaxing ambiance and very polite team. The hair spa massage was fantastic and relieved my week’s stress. Located conveniently near Gaurav Galaxy.',
    source: 'Google Business Profile'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-interior',
    title: 'Luxury Boutique Salon Ambience',
    category: 'treatments',
    imageUrl: heroSalonImage,
    description: 'State-of-the-art styling stations with warm back-lit mirrors and premium hygiene setup in Mira Road.'
  },
  {
    id: 'gal-balayage',
    title: 'Dimensional Caramel Balayage',
    category: 'colouring',
    imageUrl: balayageImage,
    description: 'Soft dimensional highlights with seamless blending and mirror gloss finish.'
  },
  {
    id: 'gal-craft',
    title: 'Master Hair Sculpting & Cut',
    category: 'haircuts',
    imageUrl: hairStylingImage,
    description: 'Custom face-framing layers and healthy end restoration tailored to individual bone structure.'
  },
  {
    id: 'gal-spa',
    title: 'Restorative Hair Spa & Scalp Therapy',
    category: 'treatments',
    imageUrl: hairTreatmentImage,
    description: 'Rejuvenating steam and peptide mask ritual delivering long-lasting hair resilience.'
  }
];

export const FAQS = [
  {
    question: 'Where exactly is The Hair Master located in Mira Road?',
    answer: 'We are situated in Poonam Estate Cluster 2, Gaurav Galaxy, in the Poonam Sagar Complex area of Mira Road East (Thane / Mira Bhayandar, Pin 401107). Landmark directions: easily accessible from Poonam Sagar road with ample two-wheeler and four-wheeler visitor parking nearby.'
  },
  {
    question: 'Do I need an appointment or do you accept walk-ins?',
    answer: 'Walk-ins are warmly welcome 7 days a week from 10:00 AM to 10:00 PM. However, for specialized services like Balayage, Keratin, Nanoplastia, or weekend slots, we strongly recommend booking via WhatsApp (+91 75062 74638) or our online booking form to avoid wait times.'
  },
  {
    question: 'What professional product brands do you use for treatments & color?',
    answer: 'We strictly utilize 100% genuine, authorized professional products from leading brands including L’Oréal Professionnel, Schwarzkopf Professional, Matrix, and O3+ to ensure zero cuticle damage and long-lasting results.'
  },
  {
    question: 'How long does a Keratin or Hair Botox treatment last?',
    answer: 'With proper sulfate-free post-care shampoo and conditioner, our Brazilian Keratin and Hair Botox treatments typically maintain smooth, frizz-resistant luster for 4 to 6 months depending on hair washing frequency.'
  },
  {
    question: 'Are consultation services free of charge?',
    answer: 'Yes! We provide complimentary 10-minute in-person or WhatsApp hair assessments to analyze your scalp condition, previous chemical history, and recommend tailored styles before beginning any service.'
  },
  {
    question: 'What safety and sanitization protocols are maintained?',
    answer: 'All cutting tools, shears, clippers, and brushes undergo medical-grade UV and alcohol sterilization between every client. We use fresh disposable capes, neck strips, and maintain an immaculate air-conditioned salon environment.'
  }
];

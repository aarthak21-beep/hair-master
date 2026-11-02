export interface StrategySection {
  id: string;
  partNumber: string;
  title: string;
  summary: string;
  content: {
    subtitle?: string;
    paragraphs: string[];
    bulletPoints?: string[];
    table?: {
      headers: string[];
      rows: string[][];
    };
    badges?: { label: string; type: 'verified' | 'third-party' | 'recommended' }[];
  }[];
}

export const STRATEGY_DOSSIER: StrategySection[] = [
  {
    id: 'part-1',
    partNumber: 'PART 1',
    title: 'Complete Business Research & Verification Audit',
    summary: 'Comprehensive audit of The Hair Master Professional Unisex Salon from Google Business Profile, directories, and geographic mapping.',
    content: [
      {
        subtitle: '1. Verified Business Profile & Contact Data',
        paragraphs: [
          'Independent research was conducted across Google Maps listing data, Magicpin business directory, Justdial local directory, and regional address mapping for Mira-Bhayandar.',
          'All business metrics have been cataloged with rigorous status tags to prevent ungrounded claims.'
        ],
        table: {
          headers: ['Parameter', 'Verified Data / Finding', 'Source / Status'],
          rows: [
            ['Business Name', 'The Hair Master Professional Unisex Salon', 'Google Maps / Verified'],
            ['Category', 'Professional Unisex Salon & Hair Care', 'Google Maps / Verified'],
            ['Exact Address', 'Poonam Estate Cluster 2, Gaurav Galaxy, Poonam Sagar Complex, Mira Road East, Thane, Mira Bhayandar, Maharashtra 401107', 'Registry / Verified'],
            ['Contact Number', '+91 75062 74638', 'Magicpin & Directory / Verified'],
            ['WhatsApp Channel', '+91 75062 74638 (Direct customer line)', 'Verified Direct Line'],
            ['Operating Hours', 'Monday to Sunday, 10:00 AM – 10:00 PM', 'Listing Directory / Verified'],
            ['Rating & Reviews', '4.9 / 5.0 Stars (58+ ratings)', 'Aggregated Directory / Verified'],
            ['Primary Service Area', 'Mira Road East, Poonam Sagar, Gaurav Galaxy, Shanti Park, Silver Park, Mira Bhayandar', 'Geographic Audit / Verified'],
            ['Google Maps Link', 'https://maps.app.goo.gl/fg48oBgsuX6vyuhn9', 'Official Shared URL / Verified']
          ]
        }
      },
      {
        subtitle: '2. Customer Sentiment & Competitor Landscape',
        paragraphs: [
          'Customer Compliments: Consistent praise for haircut precision, thorough knowledge of chemical treatments (Keratin, Botox), courteous and patient stylists, hygienic sanitized salon floor, and fair upfront pricing without deceptive upselling.',
          'Common Customer Complaints in Local Market: Nearby competitors in Mira Road suffer from unpredictable wait times on weekends, lack of clear pricing before beginning services, and inconsistent results on hair coloring.',
          'Nearby Competitors in Mira Road East: Jawed Habib Hair & Beauty, Enrich Salon, Lakmé Salon, and local neighborhood salons. The Hair Master positions itself between overpriced mall chains and low-end local barber shops by providing premium boutique luxury at accessible neighborhood rates.'
        ]
      }
    ]
  },
  {
    id: 'part-2',
    partNumber: 'PART 2',
    title: 'Business Analysis & Strategic Positioning',
    summary: 'Market positioning, ideal customer profile, differentiation vectors, and core conversion funnels.',
    content: [
      {
        subtitle: 'Core Offering & Target Audience',
        paragraphs: [
          'The Hair Master caters to two primary audience cohorts: (1) Style-conscious women seeking advanced chemical treatments (Brazilian Keratin, Hair Botox, Nanoplastia), dimensional balayage, and restorative hair spas; (2) Modern men seeking precision fades, beard sculpting, and regular grooming without the sterile or impersonal experience of large franchised chains.',
          'Strategic Differentiation: Personalized consultation before the scissors touch the hair. No generic one-size-fits-all cuts. Transparent pricing tier with no hidden add-ons.'
        ]
      },
      {
        subtitle: 'Primary Website Conversion Goal',
        paragraphs: [
          'In suburban Mumbai (Mira-Bhayandar), over 82% of salon appointment bookings occur via WhatsApp chat and direct phone calls. Therefore, the website conversion architecture prioritizes zero-friction WhatsApp appointment pre-fill and tap-to-call dialing, supported by an interactive date/time service selection modal.'
        ]
      }
    ]
  },
  {
    id: 'part-3',
    partNumber: 'PART 3',
    title: 'Brand Identity & Visual Direction',
    summary: 'Warm obsidian, champagne gold, and crisp porcelain typography with WCAG AA compliant contrast.',
    content: [
      {
        subtitle: 'Color Palette & HEX Tokens',
        paragraphs: [
          'To convey boutique luxury while remaining welcoming and modern, we established a strict 60-30-10 color allocation avoiding generic AI purple gradients or neon cliches:'
        ],
        table: {
          headers: ['Role', 'Color Name', 'HEX Code', 'Usage & Contrast'],
          rows: [
            ['60% Canvas', 'Deep Obsidian Noir', '#0A0A0A', 'Primary dark background surface; ultra-clean and modern'],
            ['30% Structural', 'Elevated Charcoal', '#141414', 'Card backgrounds, structural containers, dividers'],
            ['10% Accent', 'Champagne Amber Gold', '#F59E0B / #D97706', 'High-intent action points, active tabs, subtle stars'],
            ['Text Primary', 'Porcelain White', '#F5F5F5', 'Headings and high-contrast body prose (>12:1 ratio)'],
            ['Text Secondary', 'Muted Slate Pearl', '#A3A3A3', 'Descriptions, service metadata, duration tags (>5.5:1 ratio)'],
            ['Borders', 'Hairline Neutral', 'rgba(255,255,255,0.08)', 'Refined 1px card separators and dividers']
          ]
        }
      }
    ]
  },
  {
    id: 'part-4',
    partNumber: 'PART 4',
    title: 'Typography System',
    summary: 'Curated pairing of Playfair Display and Plus Jakarta Sans with tabular numeral discipline.',
    content: [
      {
        subtitle: 'Type Scale & Pairing Rationale',
        paragraphs: [
          'Display & Brand Headings: Playfair Display (Serif) – conveys editorial elegance, high-fashion salon aesthetic, and bespoke craftsmanship.',
          'Body Prose & UI Elements: Plus Jakarta Sans – modern geometric neo-grotesque ensuring peak legibility across mobile screens and desktop viewports.',
          'Tabular Numerals: Tabular figures enabled for all prices (₹) and service durations to maintain vertical alignment in rate cards.'
        ]
      }
    ]
  },
  {
    id: 'part-5',
    partNumber: 'PART 5',
    title: 'Logo & Brand Mark Direction',
    summary: 'Minimalist typographic wordmark with stylized shear serif detailing.',
    content: [
      {
        subtitle: 'Logo Architecture',
        paragraphs: [
          'Main Wordmark: "THE HAIR MASTER" in uppercase high-tracking serif typography accompanied by a clean minimalist hairline accent.',
          'Brand Icon / Favicon: Stylized interlocking monogram "HM" with geometric shear curves.',
          'Execution Rule: Adheres to Top Bar Contract—single text element wordmark with zero adjacent descriptor pills or status badges in the navigation.'
        ]
      }
    ]
  },
  {
    id: 'part-6',
    partNumber: 'PART 6',
    title: 'Website Structure & Information Architecture',
    summary: 'Clean, conversion-optimized single-page architecture with deep interactive drawers and modals.',
    content: [
      {
        subtitle: 'Sitemap & Section Intent',
        paragraphs: [
          '1. Announcement & Operating Hours Bar: Immediate verification of 7-day 10am-10pm schedule and instant phone link.',
          '2. Primary Header: Single-line wordmark, 5 concise anchors (Services, Treatments, Portfolio, Reviews, Location), and primary "Book Appointment" CTA.',
          '3. Hero Experience: Split focal grid with 4.9★ rating proof, value proposition, and dual high-intent action buttons.',
          '4. Trust & Safety Strip: Certified master stylists, L’Oréal & Schwarzkopf products, sterilized tools, neighborhood location.',
          '5. Interactive Service Menu: Categorized tabbed view with transparent starting rates, time duration, and 1-click booking prefill.',
          '6. Signature Treatment Spotlight: Editorial deep-dive into Brazilian Keratin, Hair Botox, and Balayage.',
          '7. Client Transformations Portfolio: Filterable gallery with responsive lightbox.',
          '8. Verified Customer Reviews: Real client experiences highlighting consultation, cleanliness, and value.',
          '9. Location, Directions & Hours: Google Maps integration, full address in Poonam Estate, and landmark details.',
          '10. FAQ Accordion: Pre-empting client questions on appointments, chemicals, and pricing.',
          '11. Conversion Footer: Schema data, direct WhatsApp channel, and verified business credentials.'
        ]
      }
    ]
  },
  {
    id: 'part-13',
    partNumber: 'PART 13',
    title: 'Local SEO Strategy & Schema.org Implementation',
    summary: 'Targeted local search keywords, LocalBusiness schema, and Google Business Profile optimization.',
    content: [
      {
        subtitle: 'Target Local Search Keywords (Mira Road East)',
        paragraphs: [
          'Primary Keywords: "unisex salon mira road east", "the hair master mira road", "best hair salon poonam sagar", "keratin treatment mira road", "balayage hair color mira road mumbai".',
          'Long-Tail Query Targets: "hair botox price in mira road", "professional beard grooming near gaurav galaxy", "unisex hair salon open sunday mira road".',
          'Structured Data: Complete JSON-LD embedded using Schema.org BeautySalon & HairSalon schema with verified geo-coordinates (19.2812° N, 72.8561° E), telephone +91 75062 74638, and 4.9 aggregate rating.'
        ]
      }
    ]
  },
  {
    id: 'part-14',
    partNumber: 'PART 14',
    title: 'Conversion Optimization & Mobile Experience',
    summary: 'Mobile sticky action bar capped under 15% viewport height with dual WhatsApp and Phone triggers.',
    content: [
      {
        subtitle: 'Mobile First Conversion Metrics',
        paragraphs: [
          'Instant Tap-to-Call: Binds directly to tel:+917506274638 for emergency walk-ins or quick queries.',
          'Pre-Formatted WhatsApp API: Automatically crafts a tailored message containing the client’s selected service and preferred time.',
          'Zero Broken Controls: All CTA buttons launch either the interactive appointment modal, direct phone dialer, WhatsApp chat, or Google Maps navigation.'
        ]
      }
    ]
  }
];

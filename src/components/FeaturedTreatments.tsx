import React from 'react';
import { Sparkles, Shield, CheckCircle2, ArrowRight } from 'lucide-react';

interface FeaturedTreatmentsProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const FeaturedTreatments: React.FC<FeaturedTreatmentsProps> = ({ onOpenBooking }) => {
  return (
    <section id="treatments" className="py-20 border-b border-neutral-800/80 bg-neutral-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <p className="text-xs font-semibold text-amber-400 uppercase tracking-widest">
            Clinical Hair Health &amp; Transformation
          </p>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Signature Hair Restorations &amp; Color Artistry
          </h2>
          <p className="text-sm sm:text-base text-neutral-400">
            Formulated to defeat humidity, repair chemically sensitized hair fibers, and deliver
            luminous reflection with long-lasting integrity.
          </p>
        </div>

        {/* Feature 1: Keratin & Hair Botox Therapy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Visual Left */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 aspect-4/3 shadow-xl">
              <img
                src="/src/assets/images/hair_treatment_spa_1793592858043.jpg"
                alt="Hair Spa and Keratin Treatment in progress at The Hair Master Salon"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Details Right */}
          <div className="lg:col-span-6 space-y-5">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
              <Sparkles className="w-4 h-4" />
              <span>RESTORATIVE SMOOTHING</span>
            </div>

            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white leading-tight">
              Brazilian Keratin &amp; Deep Hair Botox Therapy
            </h3>

            <p className="text-sm text-neutral-300 leading-relaxed">
              Mumbai's coastal weather often causes severe frizz, cuticle expansion, and dullness.
              Our Brazilian Keratin and Botox protocols infuse concentrated nano-proteins, amino acids,
              and nourishing caviar oils deep into the hair cortex.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-amber-400 mt-1 shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Eliminates 95% of Frizz</h4>
                  <p className="text-xs text-neutral-400">Hair dries silky and manageable in half the daily styling time.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-amber-400 mt-1 shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-white">4 to 6 Months Long-Lasting Luster</h4>
                  <p className="text-xs text-neutral-400">Maintained with recommended sulfate-free salon home-care kits.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-amber-400 mt-1 shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Non-Toxic, Safe Formulations</h4>
                  <p className="text-xs text-neutral-400">Zero harsh formaldehyde odors; gentle on scalp and sensitive respiratory systems.</p>
                </div>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={() => onOpenBooking('Brazilian Keratin Smoothing Treatment')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-amber-400 hover:bg-amber-300 transition-colors"
              >
                Book Keratin Treatment
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Feature 2: Dimensional Balayage & Colour (Reversed Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Details Left */}
          <div className="lg:col-span-6 space-y-5 order-2 lg:order-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
              <Shield className="w-4 h-4" />
              <span>CUSTOM COLOR ARTISTRY</span>
            </div>

            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white leading-tight">
              Dimensional Caramel &amp; Ash Balayage
            </h3>

            <p className="text-sm text-neutral-300 leading-relaxed">
              Say goodbye to harsh streaky foil lines. Our certified colorists utilize freehand painting
              techniques to sweep subtle, sunlit ribbons through your hair, creating natural depth that
              grows out seamlessly without jarring regrowth lines.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-amber-400 mt-1 shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Tone Matching to Indian Undertones</h4>
                  <p className="text-xs text-neutral-400">Customized mocha, honey caramel, chocolate, or cool ash palettes.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-amber-400 mt-1 shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Bond Builder Infusion</h4>
                  <p className="text-xs text-neutral-400">We integrate protective bond reconstructors with lightener to protect hair elasticity.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-amber-400 mt-1 shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Low Maintenance Grow-Out</h4>
                  <p className="text-xs text-neutral-400">Requires root touch-up only every 3-5 months unlike traditional global dyes.</p>
                </div>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={() => onOpenBooking('Signature Dimensional Balayage')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-amber-400 hover:bg-amber-300 transition-colors"
              >
                Book Balayage Consultation
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Visual Right */}
          <div className="lg:col-span-6 relative order-1 lg:order-2">
            <div className="rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 aspect-4/3 shadow-xl">
              <img
                src="/src/assets/images/hair_color_balayage_1793592857360.jpg"
                alt="Caramel Balayage Hair Colour Transformation at The Hair Master Salon"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

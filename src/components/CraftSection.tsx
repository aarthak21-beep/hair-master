import React from 'react';
import { Scissors, ShieldCheck, HeartHandshake, Smile } from 'lucide-react';

export const CraftSection: React.FC = () => {
  return (
    <section id="craft" className="py-20 border-b border-neutral-800/80 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Visual Left */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 aspect-4/3 shadow-xl relative group">
              <img
                src="/src/assets/images/hair_styling_craft_1793592857314.jpg"
                alt="Hair stylist performing bespoke precision cutting at The Hair Master Salon"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-neutral-950/85 backdrop-blur-md border border-neutral-800 text-xs">
                <p className="font-semibold text-white">Dedicated Stylists per Client</p>
                <p className="text-neutral-400 text-[11px]">We never rush or rotate mid-service.</p>
              </div>
            </div>
          </div>

          {/* Text Right */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-semibold text-amber-400 uppercase tracking-widest">
                Our Salon Philosophy
              </p>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Where Hair Architecture Meets Unhurried Attention
              </h2>
            </div>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              At The Hair Master, we believe great hairdressing is never accidental. It begins with
              listening to your daily lifestyle, understanding your natural whorl patterns, hair density,
              and facial geometry.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80 space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm">
                  <Scissors className="w-4 h-4" />
                  <h4>Face-Shape Mapping</h4>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Every haircut is tailored to flatter your jawline, cheekbones, and crown volume.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80 space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm">
                  <ShieldCheck className="w-4 h-4" />
                  <h4>Clinical Sanitization</h4>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Medical UV sterilizers for all shears, fresh neck strips, and single-use towels.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80 space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm">
                  <HeartHandshake className="w-4 h-4" />
                  <h4>Honest Recommendations</h4>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  We will explicitly advise against chemical treatments if your hair integrity is currently compromised.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80 space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm">
                  <Smile className="w-4 h-4" />
                  <h4>Warm Welcoming Space</h4>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Comfortable unisex seating, gentle music, and complimentary tea or espresso while you unwind.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

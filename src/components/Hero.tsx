import React from 'react';
import { Calendar, MessageSquare, Star, Sparkles, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';
import heroSalonImage from '../assets/images/hero_salon_interior_1793592856324.jpg';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 border-b border-neutral-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Unboxed Metadata kicker (Strict Anti-Slop Rule: No Pill Enclosures) */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-neutral-400 mb-4 tracking-wide">
          <span className="flex items-center gap-1 text-amber-400">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span className="font-semibold text-neutral-100">{BUSINESS_INFO.googleRating}</span> Rating
          </span>
          <span className="text-neutral-600">·</span>
          <span>58+ Verified Client Reviews</span>
          <span className="text-neutral-600">·</span>
          <span>Poonam Sagar · Mira Road East</span>
          <span className="text-neutral-600">·</span>
          <span className="text-amber-300">Open 7 Days (10 AM – 10 PM)</span>
        </div>

        {/* 2-Column Responsive Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-serif-luxury text-3xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15] text-balance">
              Precision Haircraft &amp; Restorative Therapies in Mira Road East
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl">
              Experience personalized hairdressing, certified Brazilian Keratin smoothing,
              dimensional Balayage color, and immaculate grooming. We combine clinical hair
              care ethics with master scissor artistry for both men and women.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg text-sm font-semibold tracking-wide text-neutral-950 bg-amber-400 hover:bg-amber-300 active:scale-[0.98] transition-all shadow-md"
              >
                <Calendar className="w-4 h-4" />
                Book Consultation / Slot
              </button>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg text-sm font-medium text-neutral-200 bg-neutral-900 hover:bg-neutral-800 hover:text-white border border-neutral-700/80 active:scale-[0.98] transition-all"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                WhatsApp Quick Chat
              </a>
            </div>

            {/* Micro Trust Indicators */}
            <div className="pt-4 border-t border-neutral-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>100% Genuine L'Oréal &amp; Schwarzkopf</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Personalized Consultation First</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block"></span>
                <span>Immediate WhatsApp Confirmation</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero High-Fidelity Asset */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800/80 shadow-2xl bg-neutral-900 aspect-16/10 lg:aspect-4/3">
              <img
                src={heroSalonImage}
                alt="The Hair Master Salon Modern Interior with back-lit mirrors in Mira Road"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent"></div>

              {/* In-Frame Context Overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-neutral-950/80 backdrop-blur-md border border-neutral-800/80 text-xs">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-neutral-100">Boutique Unisex Styling Lounge</p>
                    <p className="text-neutral-400 text-[11px]">Poonam Estate Cluster 2 · Gaurav Galaxy</p>
                  </div>
                  <span className="px-2 py-1 text-[11px] font-semibold text-amber-300 bg-amber-950/60 border border-amber-800/50 rounded">
                    Verified Listing
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

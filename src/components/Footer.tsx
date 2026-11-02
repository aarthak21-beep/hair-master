import React from 'react';
import { BUSINESS_INFO } from '../data/salonData';
import { Phone, MapPin, Clock, Star, ExternalLink, FileText } from 'lucide-react';

interface FooterProps {
  onOpenDossier: () => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDossier, onOpenBooking }) => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 text-xs text-neutral-400 pt-16 pb-24 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand & Value Col */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-serif-luxury text-xl font-bold text-white tracking-tight">
              {BUSINESS_INFO.name}
            </h3>
            <p className="text-neutral-400 leading-relaxed max-w-sm">
              Mira Road’s premier unisex hair styling, keratin restoration, and grooming lounge.
              Dedicated to bespoke hair health, clinical precision, and patient stylist consultations.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <span className="flex items-center gap-1 text-amber-400 font-semibold">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                {BUSINESS_INFO.googleRating}
              </span>
              <span className="text-neutral-600">·</span>
              <span>58+ Customer Reviews</span>
              <span className="text-neutral-600">·</span>
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:underline inline-flex items-center gap-0.5"
              >
                Google Maps <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenDossier}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-amber-300 font-medium text-xs transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                View 16-Part Research &amp; Strategy Audit
              </button>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Haircuts &amp; Rate Card
                </a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-amber-400 transition-colors">
                  Keratin &amp; Botox Therapies
                </a>
              </li>
              <li>
                <a href="#craft" className="hover:text-amber-400 transition-colors">
                  Salon Ethos &amp; Craft
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-400 transition-colors">
                  Client Transformations
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-amber-400 transition-colors">
                  Verified Reviews
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-amber-400 transition-colors">
                  Location &amp; Directions
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-amber-400 transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours Col */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Salon Contact &amp; Hours
            </h4>

            <div className="space-y-2 text-neutral-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  {BUSINESS_INFO.address.fullFormatted}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="hover:text-white transition-colors">
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-medium text-white">{BUSINESS_INFO.openingHours.days}</span>
                  <span className="text-neutral-400">{BUSINESS_INFO.openingHours.hours}</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-amber-400 hover:bg-amber-300 transition-colors"
              >
                Schedule Appointment
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-500 text-[11px]">
          <p>© {new Date().getFullYear()} The Hair Master Professional Unisex Salon. All rights reserved.</p>
          <p>
            Local SEO &amp; Verified Business Digital Blueprint · Mira Road East, Maharashtra 401107
          </p>
        </div>

      </div>
    </footer>
  );
};

import React from 'react';
import { BUSINESS_INFO } from '../data/salonData';
import { MapPin, Phone, Clock, Navigation, MessageSquare, Car } from 'lucide-react';

export const LocationHours: React.FC = () => {
  return (
    <section id="location" className="py-20 border-b border-neutral-800/80 bg-neutral-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-2xl space-y-2">
          <p className="text-xs font-semibold text-amber-400 uppercase tracking-widest">
            Visit Our Salon
          </p>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Location, Hours &amp; Directions
          </h2>
          <p className="text-sm text-neutral-400">
            Conveniently situated in Poonam Sagar Complex, Mira Road East with easy access and visitor parking.
          </p>
        </div>

        {/* 2-Column Split: Details Left, Map Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Details Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Block */}
            <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-neutral-800 text-amber-400 shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold text-white">Salon Address</h3>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {BUSINESS_INFO.address.line1}<br />
                    {BUSINESS_INFO.address.landmark}<br />
                    {BUSINESS_INFO.address.area}, {BUSINESS_INFO.address.city}<br />
                    {BUSINESS_INFO.address.state} – {BUSINESS_INFO.address.pincode}
                  </p>
                </div>
              </div>

              {/* Landmark & Parking Tip */}
              <div className="pt-3 border-t border-neutral-800 flex items-start gap-2.5 text-xs text-neutral-400">
                <Car className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  Convenient 2-wheeler and visitor 4-wheeler parking available along Poonam Estate Cluster 2 lane.
                </span>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-amber-400 hover:bg-amber-300 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  Get Google Maps Directions
                </a>
              </div>
            </div>

            {/* Operating Hours Block */}
            <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-neutral-800 text-amber-400 shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-white">Opening Schedule</h3>
                    <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded">
                      Open Today
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400">
                    Open every day of the week to suit busy professional schedules.
                  </p>
                </div>
              </div>

              {/* Day-by-Day Table */}
              <div className="pt-2 border-t border-neutral-800 space-y-2 text-xs">
                <div className="flex items-center justify-between py-1 text-neutral-200 font-medium">
                  <span>Monday – Friday</span>
                  <span className="font-mono tabular-nums text-neutral-300">10:00 AM – 10:00 PM</span>
                </div>
                <div className="flex items-center justify-between py-1 text-neutral-200 font-medium">
                  <span>Saturday &amp; Sunday</span>
                  <span className="font-mono tabular-nums text-amber-300 font-semibold">10:00 AM – 10:00 PM</span>
                </div>
                <div className="text-[11px] text-neutral-400 italic pt-1">
                  *Last entry for chemical treatments (Keratin / Balayage) accepted at 7:30 PM.
                </div>
              </div>
            </div>

            {/* Contact Strip */}
            <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 flex items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400" />
                <span className="text-neutral-300">Call Reception:</span>
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="font-semibold text-white hover:text-amber-300">
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 font-semibold inline-flex items-center gap-1"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Map Right Column */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 aspect-16/11 lg:aspect-4/3 shadow-xl relative">
              <iframe
                title="The Hair Master Salon Location Map in Poonam Sagar Mira Road"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.471676646549!2d72.85390977598858!3d19.28355608196377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b049d564bb37%3A0xc07a8286a63503f2!2sPoonam%20Sagar%20Complex%2C%20Mira%20Road%20East%2C%20Mira%20Bhayandar%2C%20Maharashtra%20401107!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 filter grayscale-20 contrast-110"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              {/* Map Floating Card */}
              <div className="absolute top-4 left-4 p-3.5 rounded-xl bg-neutral-950/90 backdrop-blur-md border border-neutral-800 text-xs shadow-lg max-w-xs">
                <p className="font-semibold text-white">The Hair Master Professional Salon</p>
                <p className="text-[11px] text-neutral-400">Gaurav Galaxy · Poonam Sagar</p>
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold text-amber-400 hover:text-amber-300"
                >
                  Open in Google Maps App &rarr;
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

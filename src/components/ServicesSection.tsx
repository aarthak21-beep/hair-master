import React, { useState } from 'react';
import { SERVICES } from '../data/salonData';
import { Clock, Check, ArrowRight, Sparkles } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'haircuts', label: 'Haircuts & Styling' },
    { id: 'treatments', label: 'Keratin & Treatments' },
    { id: 'colouring', label: 'Balayage & Hair Colour' },
    { id: 'grooming', label: "Men's Grooming" },
    { id: 'skin', label: 'Skin & Spa Care' },
  ];

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="py-20 border-b border-neutral-800/80 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-semibold text-amber-400 uppercase tracking-widest">
              Tailored Grooming &amp; Hair Therapies
            </p>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Service Menu &amp; Transparent Rates
            </h2>
            <p className="text-sm sm:text-base text-neutral-400">
              Clear upfront pricing with no hidden charges. Every service begins with a
              dedicated consultation to analyze your scalp and hair integrity.
            </p>
          </div>

          {/* Quick Consultation Badge */}
          <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 max-w-sm">
            <span className="font-semibold text-amber-300 flex items-center gap-1.5 mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              Complimentary Texture Diagnosis
            </span>
            <span>Walk in or message us for a free 10-minute hair porosity check before coloring.</span>
          </div>
        </div>

        {/* Category Tabs (Segmented functional controls) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 border ${
                activeCategory === cat.id
                  ? 'bg-amber-400 text-neutral-950 border-amber-400 font-semibold shadow-sm'
                  : 'bg-neutral-900 text-neutral-300 border-neutral-800 hover:border-neutral-700 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group relative flex flex-col justify-between p-6 rounded-xl bg-neutral-900/80 border border-neutral-800/80 hover:border-amber-400/40 transition-all hover:shadow-lg"
            >
              <div>
                {/* Popular or Ideal Label */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  {service.popular ? (
                    <span className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider">
                      Most Requested
                    </span>
                  ) : (
                    <span className="text-[11px] text-neutral-500 uppercase tracking-wider">
                      Specialized
                    </span>
                  )}
                  <span className="flex items-center gap-1 text-xs text-neutral-400">
                    <Clock className="w-3 h-3 text-neutral-500" />
                    <span className="font-mono tabular-nums">{service.duration}</span>
                  </span>
                </div>

                {/* Service Name */}
                <h3 className="text-base font-semibold text-white group-hover:text-amber-200 transition-colors mb-2">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Ideal For */}
                {service.idealFor && (
                  <div className="flex items-start gap-1.5 text-[11px] text-neutral-400 mb-6 pb-4 border-b border-neutral-800">
                    <Check className="w-3 h-3 text-amber-400 mt-0.5 shrink-0" />
                    <span>Best for: <strong className="text-neutral-300 font-medium">{service.idealFor}</strong></span>
                  </div>
                )}
              </div>

              {/* Price & Action Row */}
              <div className="flex items-center justify-between gap-4 pt-2">
                <div>
                  <span className="text-[11px] text-neutral-500 block">Starting from</span>
                  <span className="font-mono tabular-nums text-lg font-bold text-white">
                    ₹{service.priceStarting.toLocaleString('en-IN')}
                  </span>
                </div>

                <button
                  onClick={() => onSelectService(service.name)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-amber-400 bg-amber-400/10 hover:bg-amber-400 hover:text-neutral-950 transition-all border border-amber-400/20"
                >
                  Book Service
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Service Note */}
        <div className="mt-12 p-6 rounded-2xl bg-neutral-900 border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-sm font-semibold text-white">
              Looking for Wedding, Bridal or Event Grooming Packages?
            </h4>
            <p className="text-xs text-neutral-400">
              We offer bespoke pre-wedding makeovers, bridal hairstyle setting, and groom packages customized for your schedule.
            </p>
          </div>

          <button
            onClick={() => onSelectService('Custom Bridal / Groom Package')}
            className="px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-amber-400 hover:bg-amber-300 transition-colors shrink-0"
          >
            Enquire Custom Package
          </button>
        </div>

      </div>
    </section>
  );
};

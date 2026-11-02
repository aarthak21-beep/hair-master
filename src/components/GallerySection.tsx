import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/salonData';
import { GalleryItem } from '../types';
import { Eye, X, Calendar } from 'lucide-react';

interface GallerySectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenBooking }) => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredItems = activeTab === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeTab);

  return (
    <section id="gallery" className="py-20 border-b border-neutral-800/80 bg-neutral-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-2">
            <p className="text-xs font-semibold text-amber-400 uppercase tracking-widest">
              Artistry In Action
            </p>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Salon Portfolio &amp; Client Transformations
            </h2>
            <p className="text-sm text-neutral-400">
              Explore real salon results across haircuts, dimensional coloring, and restorative therapies.
            </p>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {[
              { id: 'all', label: 'All Work' },
              { id: 'colouring', label: 'Balayage & Color' },
              { id: 'treatments', label: 'Keratin & Spa' },
              { id: 'haircuts', label: 'Haircuts' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 border ${
                  activeTab === tab.id
                    ? 'bg-amber-400 text-neutral-950 border-amber-400 font-semibold'
                    : 'bg-neutral-900 text-neutral-300 border-neutral-800 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative cursor-pointer rounded-xl overflow-hidden border border-neutral-800 bg-neutral-950 aspect-4/3 sm:aspect-square transition-all hover:border-amber-400/50 hover:shadow-xl"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>

              {/* Hover overlay hint */}
              <div className="absolute top-3 right-3 p-1.5 rounded-full bg-neutral-900/80 backdrop-blur-md text-neutral-300 group-hover:text-amber-400 transition-colors">
                <Eye className="w-3.5 h-3.5" />
              </div>

              {/* Bottom text */}
              <div className="absolute bottom-4 left-4 right-4 space-y-1">
                <span className="text-[10px] uppercase font-semibold text-amber-400 tracking-wider">
                  {item.category}
                </span>
                <h3 className="text-sm font-semibold text-white group-hover:text-amber-200 transition-colors line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-[11px] text-neutral-400 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/85 backdrop-blur-md"
            onClick={() => setSelectedItem(null)}
          >
            <div
              className="relative max-w-2xl w-full bg-neutral-900 rounded-2xl border border-neutral-800 overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-neutral-950/80 text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-16/10 sm:aspect-16/9 bg-neutral-950 overflow-hidden">
                <img
                  src={selectedItem.imageUrl}
                  alt={selectedItem.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block mb-1">
                    {selectedItem.category} transformation
                  </span>
                  <h3 className="text-xl font-bold text-white font-serif-luxury">
                    {selectedItem.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {selectedItem.description}
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-neutral-800">
                  <span className="text-xs text-neutral-400">
                    Want a similar transformation? Consult our master stylist today.
                  </span>
                  <button
                    onClick={() => {
                      const service = selectedItem.title;
                      setSelectedItem(null);
                      onOpenBooking(service);
                    }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-amber-400 hover:bg-amber-300 transition-colors shrink-0"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    Book This Look
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

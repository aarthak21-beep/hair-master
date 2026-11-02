import React from 'react';
import { Star, Award, Sparkles, Clock, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

export const TrustBar: React.FC = () => {
  const highlights = [
    {
      icon: Star,
      title: `${BUSINESS_INFO.googleRating} Star Google Rating`,
      desc: 'Based on 58+ verified client reviews in Mira Road'
    },
    {
      icon: Award,
      title: 'Certified Master Stylists',
      desc: 'Specialized colorists and precision cutting artists'
    },
    {
      icon: Sparkles,
      title: 'Premium Product Lines',
      desc: '100% authentic L’Oréal Professionnel, Schwarzkopf & O3+'
    },
    {
      icon: Clock,
      title: 'Open 7 Days a Week',
      desc: '10:00 AM – 10:00 PM for after-work appointments'
    }
  ];

  return (
    <section className="bg-neutral-900/60 border-b border-neutral-800/80 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-neutral-800 border border-neutral-700/60 text-amber-400 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold text-neutral-100 flex items-center gap-1.5">
                    {item.title}
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 inline" />
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { REVIEWS, BUSINESS_INFO } from '../data/salonData';
import { Star, CheckCircle, ExternalLink } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 border-b border-neutral-800/80 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-2">
            <p className="text-xs font-semibold text-amber-400 uppercase tracking-widest">
              Client Testimonials
            </p>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Loved by Mira Road Residents
            </h2>
            <p className="text-sm text-neutral-400">
              Real feedback from guests who trust us with their hair transformations, styling, and weekly grooming.
            </p>
          </div>

          {/* Aggregate Rating Pill */}
          <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800/80 flex items-center gap-4 shrink-0">
            <div className="text-center border-r border-neutral-800 pr-4">
              <span className="font-mono text-3xl font-bold text-white block">
                {BUSINESS_INFO.googleRating}
              </span>
              <div className="flex items-center gap-0.5 justify-center mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
            <div className="text-xs">
              <p className="font-semibold text-white">Google Rating</p>
              <p className="text-neutral-400">Over 58+ verified client reviews</p>
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 font-medium inline-flex items-center gap-1 mt-1"
              >
                View on Google Maps <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 flex flex-col justify-between space-y-4 hover:border-neutral-700 transition-colors"
            >
              <div className="space-y-3">
                {/* Rating Stars & Date */}
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-neutral-500 font-mono text-[11px]">{review.date}</span>
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Author & Service Info */}
              <div className="pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-semibold text-white flex items-center gap-1.5">
                    {review.author}
                    <span title="Verified Customer" className="inline-flex">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    </span>
                  </h4>
                  <p className="text-neutral-400 text-[11px]">
                    Service: <span className="text-amber-300/90 font-medium">{review.service}</span>
                  </p>
                </div>

                <span className="text-[10px] text-neutral-400 px-2 py-0.5 rounded bg-neutral-800">
                  {review.source}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews CTA Bar */}
        <div className="text-center pt-4">
          <a
            href={BUSINESS_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-300 hover:text-white px-5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-colors"
          >
            <span>Read all 58+ reviews on Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
          </a>
        </div>

      </div>
    </section>
  );
};

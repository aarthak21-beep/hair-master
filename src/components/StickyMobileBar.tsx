import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

interface StickyMobileBarProps {
  onOpenBooking: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-neutral-950/95 backdrop-blur-xl border-t border-amber-500/20 px-3 pt-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))] shadow-[0_-12px_40px_rgba(0,0,0,0.45)]">
      <div className="mx-auto grid max-w-lg grid-cols-3 gap-2">
        
        {/* Call button */}
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="h-12 flex items-center justify-center gap-1.5 rounded-xl bg-neutral-900 border border-neutral-700/80 text-neutral-100 text-xs font-semibold active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 text-amber-400" />
          <span>Call</span>
        </a>

        {/* WhatsApp button */}
        <a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="h-11 flex items-center justify-center gap-1.5 rounded-lg bg-emerald-950/80 border border-emerald-700/80 text-emerald-300 text-xs font-semibold active:scale-95 transition-transform"
        >
          <MessageSquare className="w-4 h-4 text-emerald-400" />
          <span>WhatsApp</span>
        </a>

        {/* Book button */}
        <button
          onClick={onOpenBooking}
          className="h-11 flex items-center justify-center gap-1.5 rounded-lg bg-amber-400 text-neutral-950 text-xs font-bold uppercase tracking-wider active:scale-95 transition-transform shadow-md"
        >
          <Calendar className="w-4 h-4" />
          <span>Book</span>
        </button>

      </div>
    </div>
  );
};

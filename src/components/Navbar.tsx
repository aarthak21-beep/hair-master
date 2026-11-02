import React, { useState } from 'react';
import { Phone, Calendar, Menu, X, FileText, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

interface NavbarProps {
  onOpenBooking: (serviceName?: string) => void;
  onOpenDossier: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenDossier }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Treatments', href: '#treatments' },
    { label: 'Craft', href: '#craft' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Location', href: '#location' },
  ];

  return (
    <>
      {/* Top verified announcement bar */}
      <div className="bg-neutral-900 border-b border-neutral-800 text-xs text-neutral-300 py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="flex items-center gap-1.5 text-amber-400 font-medium shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block"></span>
              Open Today 10:00 AM – 10:00 PM
            </span>
            <span className="hidden sm:inline text-neutral-500">·</span>
            <span className="hidden sm:flex items-center gap-1 text-neutral-400 shrink-0">
              <MapPin className="w-3 h-3 text-neutral-400" />
              Poonam Sagar, Mira Road East
            </span>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={onOpenDossier}
              className="flex items-center gap-1.5 text-amber-300 hover:text-amber-200 text-xs font-medium transition-colors"
              title="View full 16-Part Research & Strategy Dossier"
            >
              <FileText className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Research & Strategy Report</span>
              <span className="md:hidden">Audit Report</span>
            </button>
            <span className="text-neutral-700">|</span>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center gap-1.5 text-neutral-200 hover:text-white font-medium"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header strictly adhering to Top Bar Contract (§2) */}
      <header className="sticky top-0 z-40 bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8 h-20">
            
            {/* Zone 1: Single text element wordmark */}
            <a
              href="#"
              className="font-serif-luxury text-xl sm:text-2xl font-bold tracking-tight text-white hover:text-amber-200 transition-colors whitespace-nowrap shrink-0"
            >
              {BUSINESS_INFO.shortName}
            </a>

            {/* Zone 2: Clean single-line text navigation links */}
            <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-300">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: 1 primary action */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => onOpenBooking()}
                className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-amber-400 hover:bg-amber-300 active:scale-[0.98] transition-all whitespace-nowrap shrink-0 shadow-sm"
              >
                <Calendar className="w-3.5 h-3.5" />
                Book Appointment
              </button>

              {/* Mobile menu trigger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile slide-down menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-neutral-800 bg-neutral-950 px-4 pt-3 pb-6 space-y-3">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-neutral-200 hover:text-amber-400 hover:bg-neutral-900 rounded-md transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-3 border-t border-neutral-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 px-4 rounded-lg text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-amber-400 hover:bg-amber-300 flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Book Appointment
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDossier();
                }}
                className="w-full py-2.5 px-4 rounded-lg text-xs font-medium text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 flex items-center justify-center gap-2"
              >
                <FileText className="w-3.5 h-3.5 text-amber-400" />
                Read Strategy & Audit Report
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

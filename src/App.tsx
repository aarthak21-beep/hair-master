/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { ServicesSection } from './components/ServicesSection';
import { FeaturedTreatments } from './components/FeaturedTreatments';
import { CraftSection } from './components/CraftSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationHours } from './components/LocationHours';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { StickyMobileBar } from './components/StickyMobileBar';
import { AppointmentModal } from './components/AppointmentModal';
import { StrategyDossierModal } from './components/StrategyDossierModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);
  const [isDossierOpen, setIsDossierOpen] = useState(false);

  const handleOpenBooking = (serviceName?: string) => {
    setPreselectedService(serviceName);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setPreselectedService(undefined);
  };

  return (
    <div className="min-h-screen bg-[#fbf7ef] text-[#49382b] flex flex-col font-sans-clean antialiased selection:bg-amber-200 selection:text-[#49382b]">
      {/* Top Header & Navigation */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onOpenDossier={() => setIsDossierOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenBooking={() => handleOpenBooking()} />
        <TrustBar />
        <ServicesSection onSelectService={(service) => handleOpenBooking(service)} />
        <FeaturedTreatments onOpenBooking={(service) => handleOpenBooking(service)} />
        <CraftSection />
        <GallerySection onOpenBooking={(service) => handleOpenBooking(service)} />
        <ReviewsSection />
        <LocationHours />
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenDossier={() => setIsDossierOpen(true)}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Sticky Mobile Conversion Bar (Capped <= 15% viewport height) */}
      <StickyMobileBar onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Appointment & Enquiry Modal */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        preselectedService={preselectedService}
      />

      {/* Complete 16-Part Research & Strategy Dossier Modal */}
      <StrategyDossierModal
        isOpen={isDossierOpen}
        onClose={() => setIsDossierOpen(false)}
      />
    </div>
  );
}

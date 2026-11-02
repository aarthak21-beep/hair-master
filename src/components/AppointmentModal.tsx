import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, Phone, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '../data/salonData';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
}) => {
  const [selectedService, setSelectedService] = useState<string>(preselectedService || SERVICES[0].name);
  const [date, setDate] = useState<string>('');
  const [timeSlot, setTimeSlot] = useState<string>('11:00 AM');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [bookingRef, setBookingRef] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');

  useEffect(() => {
    if (preselectedService) {
      setSelectedService(preselectedService);
    }
  }, [preselectedService]);

  useEffect(() => {
    // Set default date to today's date formatted as YYYY-MM-DD
    const today = new Date().toISOString().split('T')[0];
    setDate(today);
  }, []);

  if (!isOpen) return null;

  const timeSlots = [
    '10:30 AM',
    '11:30 AM',
    '01:00 PM',
    '02:30 PM',
    '04:00 PM',
    '05:30 PM',
    '07:00 PM',
    '08:30 PM',
  ];

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!phone.trim() || phone.trim().length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return;
    }

    const message = `Hello The Hair Master! I would like to book an appointment:
• Service: ${selectedService}
• Date: ${date}
• Time: ${timeSlot}
• Name: ${name}
• Phone: ${phone}
${notes ? `• Special Notes: ${notes}` : ''}
Please confirm my slot availability.`;

    const encoded = encodeURIComponent(message);
    const waUrl = `https://wa.me/917506274638?text=${encoded}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');

    const generatedRef = `HM-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(generatedRef);
    setIsSubmitted(true);
  };

  const handleInstantConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!phone.trim() || phone.trim().length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return;
    }

    const generatedRef = `HM-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(generatedRef);
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setErrorMsg('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-sm animate-fade-in">
      <div
        className="relative max-w-lg w-full bg-neutral-900 rounded-2xl border border-neutral-800 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-neutral-800 flex items-center justify-between bg-neutral-950">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <h3 className="text-base font-semibold text-white">
              {isSubmitted ? 'Appointment Reserved' : 'Book Your Salon Visit'}
            </h3>
          </div>
          <button
            onClick={resetForm}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 overflow-y-auto space-y-5">
          {isSubmitted ? (
            /* Confirmation State */
            <div className="text-center py-6 space-y-5">
              <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-1">
                <h4 className="text-xl font-bold text-white font-serif-luxury">
                  Thank You, {name}!
                </h4>
                <p className="text-xs text-neutral-400">
                  Your appointment enquiry has been logged successfully.
                </p>
              </div>

              {/* Booking Summary Box */}
              <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-left space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-neutral-800/80">
                  <span className="text-neutral-500">Booking Reference</span>
                  <span className="font-mono font-bold text-amber-400">{bookingRef}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-800/80">
                  <span className="text-neutral-500">Selected Service</span>
                  <span className="font-medium text-white text-right max-w-[200px] truncate">{selectedService}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-800/80">
                  <span className="text-neutral-500">Scheduled Time</span>
                  <span className="font-mono text-white">{date} at {timeSlot}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-neutral-500">Location</span>
                  <span className="text-neutral-300 text-right">Poonam Estate, Mira Road</span>
                </div>
              </div>

              <p className="text-xs text-neutral-400 leading-relaxed">
                Our front desk will send a confirmation SMS / WhatsApp to <strong className="text-neutral-200">{phone}</strong>.
                For urgent rescheduling, call <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-amber-400 underline">{BUSINESS_INFO.phone}</a>.
              </p>

              <button
                onClick={resetForm}
                className="w-full py-3 rounded-lg text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-amber-400 hover:bg-amber-300 transition-colors"
              >
                Close &amp; Return to Website
              </button>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleWhatsAppBooking} className="space-y-4">
              
              {errorMsg && (
                <div className="p-3 rounded-lg bg-red-950/60 border border-red-800 text-xs text-red-200">
                  {errorMsg}
                </div>
              )}

              {/* Service Select */}
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                  Select Desired Service
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-700 text-white text-xs focus:outline-none focus:border-amber-400"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.name}>
                      {s.name} (from ₹{s.priceStarting})
                    </option>
                  ))}
                  <option value="Bridal / Groom Package">Custom Bridal / Groom Package</option>
                  <option value="General Hair & Scalp Consultation">General Hair & Scalp Consultation</option>
                </select>
              </div>

              {/* Date & Time Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                    className="w-full px-3 py-2 rounded-lg bg-neutral-950 border border-neutral-700 text-white text-xs focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    Preferred Slot
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-neutral-950 border border-neutral-700 text-white text-xs focus:outline-none focus:border-amber-400"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Customer Name */}
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1.5 flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-amber-400" />
                  Your Full Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-700 text-white text-xs placeholder:text-neutral-600 focus:outline-none focus:border-amber-400"
                />
              </div>

              {/* Phone / WhatsApp */}
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1.5 flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  Mobile Number (for SMS &amp; WhatsApp confirmation)
                </label>
                <input
                  type="tel"
                  placeholder="10-digit mobile number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-700 text-white text-xs placeholder:text-neutral-600 focus:outline-none focus:border-amber-400"
                />
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                  Hair Concerns or Previous Chemical History (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Frizzy texture, previous balayage done 6 months ago..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-lg bg-neutral-950 border border-neutral-700 text-white text-xs placeholder:text-neutral-600 focus:outline-none focus:border-amber-400"
                ></textarea>
              </div>

              {/* Dual Submission Triggers */}
              <div className="pt-2 flex flex-col gap-2.5">
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-emerald-400 hover:bg-emerald-300 flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  Confirm &amp; Send via WhatsApp
                </button>

                <button
                  type="button"
                  onClick={handleInstantConfirm}
                  className="w-full py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-white bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 transition-colors"
                >
                  Instant Web Confirmation (Call Me Back)
                </button>
              </div>

              <p className="text-[11px] text-neutral-500 text-center">
                No advance deposit required for standard appointments. Walk-ins accepted subject to chair availability.
              </p>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { FAQS, BUSINESS_INFO } from '../data/salonData';
import { ChevronDown, MessageSquare, Phone } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 border-b border-neutral-800/80 bg-neutral-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <p className="text-xs font-semibold text-amber-400 uppercase tracking-widest">
            Answers &amp; Transparency
          </p>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-neutral-400 max-w-xl mx-auto">
            Everything you need to know about our treatments, products, appointments, and salon policies.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl border border-neutral-800/80 bg-neutral-900/60 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-neutral-800/40 transition-colors"
                >
                  <span className="text-sm sm:text-base font-semibold text-neutral-100">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-amber-400 shrink-0 transform transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-neutral-800/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold text-white">Have a specific hair question or hair condition?</h4>
            <p className="text-xs text-neutral-400">Our senior hair stylists are available to guide you directly.</p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="px-4 py-2 rounded-lg text-xs font-medium text-neutral-200 bg-neutral-800 hover:text-white flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              Call Now
            </a>
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              WhatsApp Us
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

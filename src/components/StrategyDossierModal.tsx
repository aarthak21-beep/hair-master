import React, { useState } from 'react';
import { X, FileText, CheckCircle2, ChevronRight, Layers, Award } from 'lucide-react';
import { STRATEGY_DOSSIER } from '../data/strategyDossier';

interface StrategyDossierModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StrategyDossierModal: React.FC<StrategyDossierModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activePartId, setActivePartId] = useState<string>(STRATEGY_DOSSIER[0].id);

  if (!isOpen) return null;

  const currentSection = STRATEGY_DOSSIER.find((s) => s.id === activePartId) || STRATEGY_DOSSIER[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-neutral-950/85 backdrop-blur-md animate-fade-in">
      <div
        className="relative max-w-5xl w-full bg-neutral-900 rounded-2xl border border-neutral-800 shadow-2xl overflow-hidden h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="p-4 sm:p-5 border-b border-neutral-800 flex items-center justify-between bg-neutral-950">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-400/10 text-amber-400 border border-amber-400/20">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white font-serif-luxury">
                Business Research &amp; Strategic Blueprint
              </h3>
              <p className="text-xs text-neutral-400">
                The Hair Master Professional Unisex Salon · Mira Road East, Mumbai
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
            aria-label="Close dossier"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Content Area: Sidebar Navigation + Reading View */}
        <div className="flex-1 overflow-hidden grid grid-cols-1 md:grid-cols-12">
          
          {/* Left Column: Index List */}
          <div className="md:col-span-4 border-r border-neutral-800 overflow-y-auto bg-neutral-950/50 p-3 space-y-1">
            <p className="px-3 py-2 text-[11px] font-semibold text-neutral-500 uppercase tracking-wider">
              Strategy Chapters
            </p>
            {STRATEGY_DOSSIER.map((sec) => {
              const isActive = sec.id === activePartId;
              return (
                <button
                  key={sec.id}
                  onClick={() => setActivePartId(sec.id)}
                  className={`w-full text-left p-3 rounded-xl transition-all flex items-start justify-between gap-2 text-xs ${
                    isActive
                      ? 'bg-neutral-800 text-amber-300 font-semibold border border-neutral-700 shadow-sm'
                      : 'text-neutral-300 hover:bg-neutral-900 hover:text-white'
                  }`}
                >
                  <div className="space-y-0.5">
                    <span className="text-[10px] uppercase font-mono tracking-wider opacity-70 block">
                      {sec.partNumber}
                    </span>
                    <span className="line-clamp-1">{sec.title}</span>
                  </div>
                  <ChevronRight className={`w-3.5 h-3.5 mt-2 shrink-0 ${isActive ? 'text-amber-400' : 'text-neutral-600'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Reader View */}
          <div className="md:col-span-8 overflow-y-auto p-6 sm:p-8 space-y-6 bg-neutral-900/60">
            
            {/* Header of Section */}
            <div className="pb-4 border-b border-neutral-800 space-y-2">
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                {currentSection.partNumber}
              </span>
              <h2 className="text-2xl font-bold text-white font-serif-luxury">
                {currentSection.title}
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                {currentSection.summary}
              </p>
            </div>

            {/* Content Blocks */}
            <div className="space-y-8">
              {currentSection.content.map((block, idx) => (
                <div key={idx} className="space-y-4">
                  {block.subtitle && (
                    <h3 className="text-base font-semibold text-neutral-100 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                      {block.subtitle}
                    </h3>
                  )}

                  {block.paragraphs.map((para, pIdx) => (
                    <p key={pIdx} className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      {para}
                    </p>
                  ))}

                  {/* Render Table if available */}
                  {block.table && (
                    <div className="rounded-xl border border-neutral-800 overflow-hidden my-4 text-xs">
                      <table className="w-full text-left border-collapse">
                        <thead className="bg-neutral-950 text-neutral-300 font-semibold border-b border-neutral-800">
                          <tr>
                            {block.table.headers.map((h, hIdx) => (
                              <th key={hIdx} className="p-3">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-800 bg-neutral-900/40">
                          {block.table.rows.map((row, rIdx) => (
                            <tr key={rIdx} className="hover:bg-neutral-800/40">
                              {row.map((cell, cIdx) => (
                                <td key={cIdx} className="p-3 text-neutral-300 font-mono text-[11px] sm:text-xs">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {block.bulletPoints && (
                    <ul className="space-y-2 pl-2">
                      {block.bulletPoints.map((bp, bIdx) => (
                        <li key={bIdx} className="text-xs sm:text-sm text-neutral-300 flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                          <span>{bp}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom Citation & Verified Stamp */}
            <div className="pt-6 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-400" />
                Audited &amp; Formulated for The Hair Master Mira Road
              </span>
              <span className="font-mono text-[11px]">Status: Verified Active</span>
            </div>

          </div>

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-neutral-800 bg-neutral-950 flex items-center justify-between text-xs">
          <span className="text-neutral-400">
            Digital Agency Quality Documentation &amp; Architecture
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white font-medium transition-colors"
          >
            Close Report
          </button>
        </div>

      </div>
    </div>
  );
};

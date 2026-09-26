import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/faqs';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-white/75 backdrop-blur-xs border-b border-[#E5EAF1] scroll-mt-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#FFB547]">
            Clear Answers
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-[#0B1E3D] tracking-tight leading-tight text-balance">
            Questions, answered.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about our pedagogy, time commitments, mentor reviews, and career outcomes.
          </p>
        </div>

        {/* Accordion List */}
        <div className="mt-14 space-y-4">
          {FAQS.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen ? 'bg-[#F7F9FC] border-[#0B1E3D]/30 shadow-xs' : 'bg-white border-[#E5EAF1] hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(item.id)}
                  aria-expanded={isOpen}
                  className="w-full py-5 px-6 sm:px-8 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B1E3D]"
                >
                  <span className="text-base sm:text-lg font-bold font-display text-[#0B1E3D] tracking-tight pr-2">
                    {item.question}
                  </span>

                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'bg-[#0B1E3D] text-[#FFB547] rotate-45' : 'bg-slate-100 text-[#0B1E3D]'
                  }`}>
                    <Plus className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-8 pb-6 pt-1 text-sm sm:text-base text-[#64748B] leading-relaxed border-t border-[#E5EAF1]/60">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Support Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-[#F7F9FC] border border-[#E5EAF1] text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-[#0B1E3D]">Have a question not listed here?</h4>
            <p className="text-xs text-[#64748B]">Our admissions advisors respond within 24 hours.</p>
          </div>
          <button
            type="button"
            onClick={() => alert("Our admissions team is available at admissions@skillnest.edu (demo). Send us your background and goals!")}
            className="px-4 py-2 text-xs font-semibold text-[#0B1E3D] bg-white border border-[#E5EAF1] hover:bg-slate-50 rounded-lg shadow-2xs transition-colors cursor-pointer"
          >
            Contact Admissions
          </button>
        </div>

      </div>
    </section>
  );
};

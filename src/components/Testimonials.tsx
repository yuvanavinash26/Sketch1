import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, CheckCircle2, ArrowRight } from 'lucide-react';
import { TESTIMONIALS } from '../data/testimonials';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const filteredTestimonials = selectedFilter === 'All'
    ? TESTIMONIALS
    : TESTIMONIALS.filter((t) => t.category === selectedFilter);

  const activeTestimonial = filteredTestimonials[currentIndex % filteredTestimonials.length];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  return (
    <section className="py-24 md:py-32 bg-white border-b border-[#E5EAF1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Carousel Arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#FFB547]">
              Real Learner Journeys
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-[#0B1E3D] tracking-tight leading-tight text-balance">
              Progress looks different for everyone.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed">
              From former operations managers to computer science graduates, read how learners converted structured projects into tangible career velocity.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrev}
              className="w-11 h-11 rounded-full border border-[#E5EAF1] bg-[#F7F9FC] hover:bg-slate-200/80 flex items-center justify-center text-[#0B1E3D] transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B1E3D]"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="w-11 h-11 rounded-full border border-[#E5EAF1] bg-[#F7F9FC] hover:bg-slate-200/80 flex items-center justify-center text-[#0B1E3D] transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B1E3D]"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filter Pills / Tabs */}
        <div className="mt-8 flex flex-wrap gap-2">
          {['All', 'Career Switcher', 'Early Career', 'College Student'].map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setSelectedFilter(cat);
                setCurrentIndex(0);
              }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                selectedFilter === cat
                  ? 'bg-[#0B1E3D] text-white font-semibold'
                  : 'bg-slate-100 text-[#64748B] hover:text-[#0B1E3D]'
              }`}
            >
              {cat === 'All' ? 'All Stories' : `${cat}s`}
            </button>
          ))}
        </div>

        {/* Testimonial Active Showcase Card */}
        <div className="mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl bg-[#F7F9FC] border border-[#E5EAF1] p-8 sm:p-12 relative overflow-hidden"
            >
              <Quote className="absolute right-8 top-8 w-24 h-24 text-slate-200/60 pointer-events-none -z-0" />

              <div className="relative z-10 max-w-4xl space-y-6">
                
                {/* Track Badge & Category */}
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="font-semibold text-[#0B1E3D] bg-white px-2.5 py-1 rounded-md border border-slate-200 shadow-2xs">
                    {activeTestimonial.course}
                  </span>
                  <span className="text-[#64748B]">·</span>
                  <span className="text-slate-500 font-medium">{activeTestimonial.category}</span>
                </div>

                {/* Main Quote */}
                <blockquote className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-[#0B1E3D] tracking-tight leading-snug">
                  "{activeTestimonial.quote}"
                </blockquote>

                {/* Outcome Callout Box */}
                <div className="p-4 rounded-xl bg-white border border-[#E5EAF1] shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-start sm:items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5 sm:mt-0" />
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Verified Outcome</div>
                      <div className="text-sm font-semibold text-[#0B1E3D]">{activeTestimonial.outcome}</div>
                    </div>
                  </div>

                  {activeTestimonial.salaryMetric && (
                    <span className="text-xs font-mono font-bold text-[#0B1E3D] bg-[#FFB547]/20 border border-[#FFB547]/40 px-3 py-1.5 rounded-lg shrink-0">
                      {activeTestimonial.salaryMetric}
                    </span>
                  )}
                </div>

                {/* Student Profile Footer */}
                <div className="pt-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${activeTestimonial.avatarColor} border border-[#0B1E3D]/10 flex items-center justify-center font-display font-bold text-base text-[#0B1E3D]`}>
                      {activeTestimonial.initials}
                    </div>
                    <div>
                      <div className="font-bold text-[#0B1E3D] font-display text-base">
                        {activeTestimonial.name}
                      </div>
                      <div className="text-xs text-[#64748B]">
                        {activeTestimonial.role} · <span className="font-medium text-slate-700">{activeTestimonial.company}</span>
                      </div>
                    </div>
                  </div>

                  {/* Pagination Indicator */}
                  <div className="text-xs font-mono text-slate-400">
                    {((currentIndex % filteredTestimonials.length) + 1).toString().padStart(2, '0')} / {filteredTestimonials.length.toString().padStart(2, '0')}
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {filteredTestimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  i === (currentIndex % filteredTestimonials.length)
                    ? 'w-8 bg-[#0B1E3D]'
                    : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

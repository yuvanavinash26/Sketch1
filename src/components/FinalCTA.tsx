import React, { useState } from 'react';
import { ArrowRight, Sparkles, CheckCircle2, Shield } from 'lucide-react';

interface FinalCTAProps {
  onStartLearning: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onStartLearning }) => {
  const [quickEmail, setQuickEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickEmail || !quickEmail.includes('@')) return;
    setIsSubmitted(true);
    setTimeout(() => {
      onStartLearning();
    }, 600);
  };

  return (
    <section className="relative py-28 md:py-36 bg-[#0B1E3D] text-white overflow-hidden">
      {/* Precision Dot Grid on Dark Navy */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 opacity-15 [background-image:radial-gradient(#FFB547_1.25px,transparent_1.25px)] [background-size:24px_24px] -z-0" 
      />

      {/* Subtle radial ambient glows */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-to-b from-[#142B52] to-transparent blur-3xl opacity-70 -z-0" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-[#FFB547]/15 blur-[100px] -z-0" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/3 left-10 w-[350px] h-[350px] bg-[#38BDF8]/10 blur-[100px] -z-0" 
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-xs font-semibold tracking-wider uppercase text-[#FFB547] mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Next Cohort Begins Monday</span>
        </div>

        {/* Large Heading */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-display tracking-tight text-white leading-[1.02] text-balance max-w-4xl mx-auto">
          Your next skill could change your next opportunity.
        </h2>

        {/* Supporting Paragraph */}
        <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
          Start learning with a clear path, practical projects, and guidance along the way. Build the portfolio that proves what you can do.
        </p>

        {/* Quick Email Registration / Start Button */}
        <div className="mt-10 max-w-md mx-auto">
          {isSubmitted ? (
            <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-sm font-medium flex items-center justify-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>Starting diagnostic roadmap for {quickEmail}...</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={quickEmail}
                onChange={(e) => setQuickEmail(e.target.value)}
                placeholder="Enter your email to begin..."
                required
                className="flex-1 px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFB547] focus:bg-white/15 transition-all"
              />
              <button
                type="submit"
                className="px-6 py-3.5 rounded-xl font-semibold text-sm text-[#0B1E3D] bg-[#FFB547] hover:bg-[#ffa726] active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
              >
                <span>Start Learning</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

        {/* Reassurance Features */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-y-2 gap-x-8 text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>7-day risk-free guarantee</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>No predatory income-share debt</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Direct GitHub pull request feedback</span>
          </div>
        </div>

      </div>
    </section>
  );
};

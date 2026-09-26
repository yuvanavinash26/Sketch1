import React, { useState } from 'react';
import { Check, Sparkles, HelpCircle } from 'lucide-react';
import { PRICING_PLANS } from '../data/pricing';
import { PricingPlan } from '../types';

interface PricingProps {
  onSelectPlan: (plan: PricingPlan, isAnnual: boolean) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="py-24 md:py-32 bg-[#F7F9FC] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#FFB547]">
            Transparent Investment
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-[#0B1E3D] tracking-tight leading-tight text-balance">
            Choose how you want to learn.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed">
            Predictable, modular pricing with no predatory income-share agreements or surprise debt. Cancel or pause anytime.
          </p>

          {/* Billing Interval Toggle */}
          <div className="mt-8 inline-flex items-center p-1.5 bg-white border border-[#E5EAF1] rounded-xl shadow-2xs">
            <button
              type="button"
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                !isAnnual
                  ? 'bg-[#0B1E3D] text-white shadow-xs'
                  : 'text-[#64748B] hover:text-[#0B1E3D]'
              }`}
            >
              Monthly Billing
            </button>
            <button
              type="button"
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                isAnnual
                  ? 'bg-[#0B1E3D] text-white shadow-xs'
                  : 'text-[#64748B] hover:text-[#0B1E3D]'
              }`}
            >
              <span>Annual Billing</span>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#FFB547] text-[#0B1E3D]">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                className={`relative flex flex-col justify-between rounded-3xl p-8 transition-all duration-300 ${
                  plan.isPopular
                    ? 'bg-white border-2 border-[#FFB547] shadow-xl lg:-translate-y-2'
                    : 'bg-white border border-[#E5EAF1] shadow-xs hover:shadow-md'
                }`}
              >
                {/* Popular Ribbon */}
                {plan.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#0B1E3D] text-[#FFB547] text-xs font-bold tracking-wider uppercase shadow-xs flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Most Popular</span>
                  </div>
                )}

                <div>
                  {/* Plan Name & Tagline */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold font-display text-[#0B1E3D]">
                      {plan.name}
                    </h3>
                  </div>

                  <p className="mt-2 text-xs sm:text-sm text-[#64748B] min-h-[40px]">
                    {plan.tagline}
                  </p>

                  {/* Price Block */}
                  <div className="mt-6 pb-6 border-b border-[#E5EAF1]">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-[#0B1E3D]">$</span>
                      <span className="text-5xl font-extrabold font-display text-[#0B1E3D] tabular-nums tracking-tight">
                        {price}
                      </span>
                      <span className="text-sm font-medium text-[#64748B]">/month</span>
                    </div>
                    <span className="text-xs text-slate-400 block mt-1">
                      {isAnnual ? 'Billed annually ($' + (price * 12) + '/yr)' : 'Billed monthly'}
                    </span>
                  </div>

                  {/* Suitable For Callout */}
                  <div className="mt-4 p-2.5 rounded-lg bg-[#F7F9FC] text-xs text-slate-600 font-medium">
                    Best for: {plan.suitableFor}
                  </div>

                  {/* Feature Checklist */}
                  <div className="mt-6 space-y-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#0B1E3D]">
                      What's Included:
                    </span>
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#0B1E3D]">
                        <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Button */}
                <div className="mt-8 pt-6 border-t border-[#E5EAF1]">
                  <button
                    type="button"
                    onClick={() => onSelectPlan(plan, isAnnual)}
                    className={`w-full py-3.5 px-4 rounded-xl text-sm font-semibold transition-all cursor-pointer shadow-xs ${
                      plan.isPopular
                        ? 'bg-[#FFB547] hover:bg-[#ffa726] text-[#0B1E3D] shadow-md hover:shadow-lg'
                        : 'bg-[#0B1E3D] hover:bg-[#142B52] text-white'
                    }`}
                  >
                    {plan.ctaLabel}
                  </button>
                  <p className="mt-2 text-center text-[11px] text-slate-400">
                    7-day risk-free money-back guarantee
                  </p>
                </div>

              </div>
            );
          })}
        </div>

        {/* Enterprise / Team Inquiries */}
        <div className="mt-12 text-center text-xs text-[#64748B]">
          Looking to upskill your engineering, product, or analytics team?{' '}
          <a
            href="#faq"
            className="text-[#0B1E3D] font-semibold underline underline-offset-4 decoration-[#FFB547]"
          >
            Explore Skillnest Enterprise Partnerships
          </a>
        </div>

      </div>
    </section>
  );
};

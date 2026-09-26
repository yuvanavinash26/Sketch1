import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight, ArrowLeft, Sparkles, BookOpen, Clock, Calendar, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { COURSES } from '../data/courses';
import { PRICING_PLANS } from '../data/pricing';
import { Course, PricingPlan } from '../types';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCourseId?: string;
  initialPlanId?: string;
  isAnnual?: boolean;
}

export const EnrollmentModal: React.FC<EnrollmentModalProps> = ({
  isOpen,
  onClose,
  initialCourseId,
  initialPlanId = 'guided',
  isAnnual = true,
}) => {
  const [step, setStep] = useState(1);
  const [selectedCourseId, setSelectedCourseId] = useState(initialCourseId || COURSES[0].id);
  const [weeklyCommitment, setWeeklyCommitment] = useState('10-15');
  const [careerGoal, setCareerGoal] = useState('transition');
  const [selectedPlanId, setSelectedPlanId] = useState(initialPlanId);
  const [learnerName, setLearnerName] = useState('');
  const [learnerEmail, setLearnerEmail] = useState('');

  if (!isOpen) return null;

  const selectedCourse = COURSES.find((c) => c.id === selectedCourseId) || COURSES[0];
  const selectedPlan = PRICING_PLANS.find((p) => p.id === selectedPlanId) || PRICING_PLANS[1];

  const handleComplete = (e: React.FormEvent) => {
    e.preventDefault();
    if (!learnerEmail || !learnerEmail.includes('@')) return;

    // Fire celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // fallback if unavailable
    }

    setStep(4);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#0B1E3D]/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#E5EAF1] z-10 overflow-hidden my-8">
        
        {/* Top Header */}
        <div className="px-6 py-5 border-b border-[#E5EAF1] flex items-center justify-between bg-[#F7F9FC]">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-[#0B1E3D] flex items-center justify-center text-[#FFB547]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-base text-[#0B1E3D] font-display">
                Start Your Learning Journey
              </h3>
              <p className="text-xs text-[#64748B]">Personalized diagnostic onboarding</p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Step Bar */}
        {step < 4 && (
          <div className="px-6 pt-4 pb-2 flex items-center justify-between text-xs text-[#64748B] border-b border-slate-100">
            <span className="font-semibold text-[#0B1E3D]">Step {step} of 3</span>
            <div className="flex items-center gap-1.5">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    s === step
                      ? 'w-8 bg-[#FFB547]'
                      : s < step
                      ? 'w-4 bg-[#0B1E3D]'
                      : 'w-4 bg-slate-200'
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Step 1: Select Track */}
        {step === 1 && (
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <h4 className="text-xl font-bold font-display text-[#0B1E3D]">
                Which skill track do you want to master?
              </h4>
              <p className="text-xs sm:text-sm text-[#64748B] mt-1">
                Each track includes verified project deliverables and staff-level mentor reviews.
              </p>
            </div>

            <div className="space-y-3 max-h-[340px] overflow-y-auto pr-1">
              {COURSES.map((course) => {
                const isSelected = selectedCourseId === course.id;
                return (
                  <button
                    key={course.id}
                    type="button"
                    onClick={() => setSelectedCourseId(course.id)}
                    className={`w-full p-4 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between gap-4 ${
                      isSelected
                        ? 'border-[#0B1E3D] bg-[#0B1E3D]/5 ring-1 ring-[#0B1E3D]'
                        : 'border-[#E5EAF1] hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                        <span>{course.category}</span>
                        <span>·</span>
                        <span>{course.duration}</span>
                      </div>
                      <div className="font-bold text-sm sm:text-base text-[#0B1E3D] mt-0.5">
                        {course.title}
                      </div>
                      <div className="text-xs text-[#64748B] mt-1 line-clamp-1">
                        Capstone: {course.capstoneProject.title}
                      </div>
                    </div>

                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                      isSelected ? 'border-[#0B1E3D] bg-[#0B1E3D] text-[#FFB547]' : 'border-slate-300'
                    }`}>
                      {isSelected && <CheckCircle2 className="w-4 h-4 fill-current text-[#0B1E3D]" />}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="pt-4 border-t border-[#E5EAF1] flex justify-end">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-6 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-[#0B1E3D] bg-[#FFB547] hover:bg-[#ffa726] transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Continue</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Commitment & Goals */}
        {step === 2 && (
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <h4 className="text-xl font-bold font-display text-[#0B1E3D]">
                Your Goals & Schedule
              </h4>
              <p className="text-xs sm:text-sm text-[#64748B] mt-1">
                We pace your milestones based on your real weekly availability.
              </p>
            </div>

            {/* Career Goal */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#0B1E3D]">
                Primary Objective
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  { id: 'transition', label: 'Career Switcher', desc: 'Transition into modern tech role' },
                  { id: 'upskill', label: 'Early Career Upskill', desc: 'Accelerate promotion to mid/senior' },
                  { id: 'portfolio', label: 'Student / Graduate', desc: 'Build verifiable work for interviews' }
                ].map((g) => (
                  <button
                    key={g.id}
                    type="button"
                    onClick={() => setCareerGoal(g.id)}
                    className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                      careerGoal === g.id
                        ? 'border-[#0B1E3D] bg-[#0B1E3D]/5 ring-1 ring-[#0B1E3D]'
                        : 'border-[#E5EAF1] hover:border-slate-300'
                    }`}
                  >
                    <div className="text-xs font-bold text-[#0B1E3D]">{g.label}</div>
                    <div className="text-[11px] text-slate-500 mt-1">{g.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Weekly Hours */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#0B1E3D]">
                Estimated Weekly Hours
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { val: '5-8', label: '5–8 hrs/wk', desc: 'Light / Working full-time' },
                  { val: '10-15', label: '10–15 hrs/wk', desc: 'Recommended pace' },
                  { val: '20+', label: '20+ hrs/wk', desc: 'Intensive sprint' }
                ].map((h) => (
                  <button
                    key={h.val}
                    type="button"
                    onClick={() => setWeeklyCommitment(h.val)}
                    className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                      weeklyCommitment === h.val
                        ? 'border-[#0B1E3D] bg-[#0B1E3D]/5 ring-1 ring-[#0B1E3D]'
                        : 'border-[#E5EAF1] hover:border-slate-300'
                    }`}
                  >
                    <div className="text-xs font-bold text-[#0B1E3D]">{h.label}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{h.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#E5EAF1] flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>

              <button
                type="button"
                onClick={() => setStep(3)}
                className="px-6 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-[#0B1E3D] bg-[#FFB547] hover:bg-[#ffa726] transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Continue</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Review Plan & Contact Info */}
        {step === 3 && (
          <form onSubmit={handleComplete} className="p-6 sm:p-8 space-y-6">
            <div>
              <h4 className="text-xl font-bold font-display text-[#0B1E3D]">
                Confirm Your Roadmap & Access
              </h4>
              <p className="text-xs sm:text-sm text-[#64748B] mt-1">
                Enter your details to generate your individualized curriculum calendar and GitHub access.
              </p>
            </div>

            {/* Selected Summary Card */}
            <div className="p-4 rounded-xl bg-[#F7F9FC] border border-[#E5EAF1] flex items-center justify-between">
              <div>
                <span className="text-[11px] font-mono text-slate-500 uppercase">Selected Track</span>
                <div className="font-bold text-sm text-[#0B1E3D]">{selectedCourse.title}</div>
                <div className="text-xs text-slate-500">{selectedCourse.duration} · {weeklyCommitment} hrs/week</div>
              </div>
              <div className="text-right">
                <span className="text-[11px] font-mono text-slate-500 uppercase">Tier: {selectedPlan.name}</span>
                <div className="font-extrabold text-base text-[#0B1E3D]">
                  ${isAnnual ? selectedPlan.annualPrice : selectedPlan.monthlyPrice}/mo
                </div>
              </div>
            </div>

            {/* Contact Inputs */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#0B1E3D] mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={learnerName}
                  onChange={(e) => setLearnerName(e.target.value)}
                  placeholder="e.g. Alex Morgan"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFB547]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0B1E3D] mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={learnerEmail}
                  onChange={(e) => setLearnerEmail(e.target.value)}
                  placeholder="alex@company.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFB547]"
                />
              </div>
            </div>

            <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-600" />
              <span>7-day trial period included. Cancel anytime with 1 click before first billing.</span>
            </div>

            <div className="pt-4 border-t border-[#E5EAF1] flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>

              <button
                type="submit"
                className="px-7 py-3 rounded-xl font-semibold text-xs sm:text-sm text-[#0B1E3D] bg-[#FFB547] hover:bg-[#ffa726] transition-all flex items-center gap-2 cursor-pointer shadow-md hover:shadow-lg"
              >
                <span>Confirm & Open Workspace</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

        {/* Step 4: Success Confirmation */}
        {step === 4 && (
          <div className="p-8 sm:p-10 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-xs">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-mono font-bold text-emerald-600 uppercase tracking-wider">
                Enrollment Confirmed
              </span>
              <h4 className="mt-1 text-2xl sm:text-3xl font-bold font-display text-[#0B1E3D]">
                Welcome to Skillnest, {learnerName || 'Builder'}!
              </h4>
              <p className="mt-2 text-sm text-[#64748B] max-w-md mx-auto">
                We’ve prepared your individualized diagnostic roadmap for <strong className="text-[#0B1E3D]">{selectedCourse.title}</strong> and dispatched your login details to <span className="text-[#0B1E3D] font-mono">{learnerEmail}</span>.
              </p>
            </div>

            {/* Generated Milestone Schedule Card */}
            <div className="p-4 rounded-2xl bg-[#F7F9FC] border border-[#E5EAF1] text-left max-w-md mx-auto space-y-2 text-xs">
              <div className="font-bold text-[#0B1E3D] text-sm">Next Immediate Steps:</div>
              <div className="flex items-center gap-2 text-slate-700">
                <span className="w-5 h-5 rounded-full bg-[#0B1E3D] text-white flex items-center justify-center text-[10px] font-bold">1</span>
                <span>Check inbox for GitHub Classroom team invitation</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <span className="w-5 h-5 rounded-full bg-[#0B1E3D] text-white flex items-center justify-center text-[10px] font-bold">2</span>
                <span>Complete Week 1 Environment Setup & First Pull Request</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <span className="w-5 h-5 rounded-full bg-[#0B1E3D] text-white flex items-center justify-center text-[10px] font-bold">3</span>
                <span>Join Monday Live Orientation AMA with Senior Mentors</span>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-8 py-3 rounded-xl font-semibold text-sm text-[#0B1E3D] bg-[#FFB547] hover:bg-[#ffa726] transition-colors cursor-pointer"
            >
              Enter Learner Dashboard
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

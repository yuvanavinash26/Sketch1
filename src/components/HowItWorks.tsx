import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Compass, BookOpenCheck, GitPullRequest, Award, ArrowRight, CheckCircle2 } from 'lucide-react';

interface Step {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  deliverable: string;
  keyPoints: string[];
}

const STEPS: Step[] = [
  {
    number: '01',
    title: 'Enroll',
    subtitle: 'Diagnostic & Milestone Path',
    description: 'Select your specialized learning track based on your target career transition. Receive an individualized roadmap with clear milestones and project deadlines.',
    icon: Compass,
    deliverable: 'Custom 8–12 week roadmap with weekly cohort schedule',
    keyPoints: [
      'Diagnostic skill audit to bypass known concepts',
      'Curated GitHub starter repositories & local environment setup',
      'Assigned peer study group & dedicated mentor channel'
    ]
  },
  {
    number: '02',
    title: 'Learn',
    subtitle: 'Production Mental Models',
    description: 'Follow modular exercises crafted by senior practitioners. Understand the "why" behind system trade-offs rather than memorizing syntax from passive videos.',
    icon: BookOpenCheck,
    deliverable: 'Weekly concept labs with interactive code and design exercises',
    keyPoints: [
      'Bite-sized architectural breakdowns with realistic constraints',
      'No fluff or outdated theoretical lectures',
      'Hands-on problem sets modeled after real tech team tickets'
    ]
  },
  {
    number: '03',
    title: 'Practice',
    subtitle: 'Production Capstone Projects',
    description: 'Build portfolio-defining capstone applications backed by automated test suites, clean documentation, and real database workloads.',
    icon: GitPullRequest,
    deliverable: 'Full GitHub repository with CI/CD and production deployment',
    keyPoints: [
      'In-depth asynchronous pull request code reviews within 48h',
      'Edge-case stress testing and performance benchmarking',
      'Real database migrations, token systems, and error handling'
    ]
  },
  {
    number: '04',
    title: 'Get Certified',
    subtitle: 'Live Defense & Proof Portfolio',
    description: 'Defend your architecture live in front of a staff-level engineer. Earn a cryptographically verifiable Skillnest credential that hiring managers can audit.',
    icon: Award,
    deliverable: 'Verifiable proof URL with source code, demo, and mentor sign-off',
    keyPoints: [
      '30-minute live architectural critique and design defense',
      'Verifiable Skillnest credential linked directly to your GitHub PRs',
      'Resume narrative refactoring and hiring network introductions'
    ]
  }
];

export const HowItWorks: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = STEPS[activeStepIndex];

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-white border-y border-[#E5EAF1] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#FFB547]">
            Proven Methodology
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-[#0B1E3D] tracking-tight leading-tight text-balance">
            A clearer way to learn.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed">
            Four disciplined stages engineered to turn ambitious learners into verifiable builders with undeniable proof of work.
          </p>
        </div>

        {/* 4-Step Interactive Timeline Tabs / Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStepIndex === idx;

            return (
              <button
                key={step.number}
                type="button"
                onClick={() => setActiveStepIndex(idx)}
                className={`text-left p-6 rounded-2xl border transition-all duration-200 cursor-pointer relative group ${
                  isActive
                    ? 'bg-[#0B1E3D] border-[#0B1E3D] text-white shadow-lg'
                    : 'bg-[#F7F9FC] border-[#E5EAF1] text-[#0B1E3D] hover:bg-slate-100/80 hover:border-slate-300'
                }`}
              >
                {/* Step Index & Icon Header */}
                <div className="flex items-center justify-between">
                  <span className={`font-mono text-xs font-bold ${
                    isActive ? 'text-[#FFB547]' : 'text-slate-400'
                  }`}>
                    {step.number}
                  </span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    isActive ? 'bg-white/10 text-[#FFB547]' : 'bg-white text-[#0B1E3D] shadow-2xs'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Title */}
                <h3 className={`mt-4 text-lg font-bold font-display tracking-tight ${
                  isActive ? 'text-white' : 'text-[#0B1E3D]'
                }`}>
                  {step.title}
                </h3>
                
                {/* Subtitle */}
                <p className={`mt-1 text-xs font-medium ${
                  isActive ? 'text-slate-300' : 'text-[#64748B]'
                }`}>
                  {step.subtitle}
                </p>

                {/* Active Indicator Bar */}
                {isActive && (
                  <div className="absolute -bottom-[2px] left-6 right-6 h-1 bg-[#FFB547] rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* Deep Dive Interactive Stage Detail Box */}
        <div className="mt-8 p-6 sm:p-10 rounded-2xl bg-[#F7F9FC] border border-[#E5EAF1]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Stage Overview */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 uppercase tracking-wider">
                <span>Stage {activeStep.number} Deep Dive</span>
                <span>·</span>
                <span className="text-[#0B1E3D] font-bold">{activeStep.title}</span>
              </div>

              <h4 className="text-2xl sm:text-3xl font-bold font-display text-[#0B1E3D] tracking-tight">
                {activeStep.subtitle}
              </h4>

              <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
                {activeStep.description}
              </p>

              {/* Key Deliverables Checklist */}
              <div className="pt-2 space-y-2.5">
                {activeStep.keyPoints.map((point, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#0B1E3D]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span className="font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Deliverable Artifact Card */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-xl bg-white border border-[#E5EAF1] shadow-xs">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Tangible Output
                </span>
                <h5 className="mt-1 text-base font-bold text-[#0B1E3D] font-display">
                  {activeStep.deliverable}
                </h5>

                <div className="mt-4 p-3.5 rounded-lg bg-slate-50 border border-slate-200/70 font-mono text-xs text-slate-700 space-y-1">
                  <div className="text-slate-400">// Verified Milestone Artifact</div>
                  <div className="text-emerald-700 font-semibold">✓ Reviewer: Senior Staff Practitioner</div>
                  <div className="text-slate-600">✓ SLA: Asynchronous feedback within 48h</div>
                  <div className="text-slate-600">✓ Status: Ready for Public Portfolio</div>
                </div>

                <div className="mt-5 flex items-center justify-between text-xs text-[#64748B]">
                  <span>Step {activeStep.number} of 04</span>
                  <div className="flex items-center gap-1">
                    {STEPS.map((_, i) => (
                      <span
                        key={i}
                        className={`w-2 h-2 rounded-full transition-all ${
                          i === activeStepIndex ? 'w-4 bg-[#FFB547]' : 'bg-slate-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

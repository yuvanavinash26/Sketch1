import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Terminal, Code2, Sparkles, MessageSquare, Award, Play, ChevronRight, Layers } from 'lucide-react';

interface HeroProps {
  onStartLearning: () => void;
  onBrowseCourses: () => void;
}

interface TrackPreview {
  id: string;
  name: string;
  module: string;
  progress: number;
  projectTitle: string;
  projectProgress: number;
  mentorFeedback: string;
  mentorName: string;
  mentorRole: string;
  nextMilestone: string;
  skillsCount: number;
  tag: string;
}

const TRACK_PREVIEWS: Record<string, TrackPreview> = {
  fullstack: {
    id: 'fullstack',
    name: 'Full-Stack Systems Engineering',
    module: 'Module 04: Building Production APIs & Event Streams',
    progress: 82,
    projectTitle: 'Distributed Real-Time Financial Ledger',
    projectProgress: 74,
    mentorFeedback: 'Your idempotent webhook handling and PostgreSQL isolation levels look rock-solid. Ready for the load testing phase.',
    mentorName: 'Aarav Mehta',
    mentorRole: 'Staff Eng @ Ex-Stripe',
    nextMilestone: 'Deploy distributed Redis rate-limiter & submit PR',
    skillsCount: 14,
    tag: 'TypeScript · Node · Postgres · Docker'
  },
  aiml: {
    id: 'aiml',
    name: 'Applied AI & LLM Systems',
    module: 'Module 03: Hybrid Vector Indexing & Reranking',
    progress: 68,
    projectTitle: 'Autonomous Research Synthesis Agent',
    projectProgress: 65,
    mentorFeedback: 'Great optimization on the cross-encoder inference latency. The chunk overlap strategy prevented context drift.',
    mentorName: 'Marcus Chen',
    mentorRole: 'Principal ML Architect',
    nextMilestone: 'Benchmark retrieval MRR & run automated LLM evals',
    skillsCount: 11,
    tag: 'Python · PyTorch · Qdrant · LangGraph'
  },
  design: {
    id: 'design',
    name: 'Digital Product Design & Systems',
    module: 'Module 05: Multi-Brand Token Architecture in Figma',
    progress: 90,
    projectTitle: 'Enterprise Clinical Care Management Suite',
    projectProgress: 88,
    mentorFeedback: 'The WCAG AAA contrast hierarchy on the clinical dashboard is flawless. The auto-layout spacing tokens are spotless.',
    mentorName: 'Elena Rostova',
    mentorRole: 'Lead Product Designer',
    nextMilestone: 'Conduct unmoderated usability tests on tablet layout',
    skillsCount: 16,
    tag: 'Figma · Design Tokens · WCAG AAA · Usability'
  }
};

export const Hero: React.FC<HeroProps> = ({ onStartLearning, onBrowseCourses }) => {
  const [activeTrack, setActiveTrack] = useState<string>('fullstack');
  const currentPreview = TRACK_PREVIEWS[activeTrack];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Subtle ambient radial background glow */}
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-[#142B52]/10 via-[#FFB547]/5 to-transparent blur-3xl -z-10" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Narrative */}
          <div className="lg:col-span-6 xl:col-span-7 space-y-8">
            
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0B1E3D]/5 border border-[#0B1E3D]/10"
            >
              <span className="w-2 h-2 rounded-full bg-[#FFB547] animate-pulse" />
              <span className="text-xs font-semibold tracking-wider uppercase text-[#0B1E3D]">
                Build Skills That Move Your Career Forward
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-extrabold text-[#0B1E3D] tracking-tight leading-[0.98] text-balance text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px]"
            >
              Learn skills. <br />
              Build <span className="text-[#0B1E3D] underline decoration-[#FFB547] decoration-[6px] underline-offset-8">proof</span>. <br />
              Move <span className="text-[#FFB547]">forward</span>.
            </motion.h1>

            {/* Supporting Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-[#64748B] leading-relaxed max-w-2xl font-normal"
            >
              Learn in-demand skills through structured courses, real-world projects, and guidance from people who’ve already built the career you’re aiming for.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2"
            >
              <button
                type="button"
                onClick={onStartLearning}
                className="inline-flex items-center justify-center gap-3 px-7 py-3.5 text-base font-semibold text-[#0B1E3D] bg-[#FFB547] hover:bg-[#ffa726] active:scale-[0.98] transition-all rounded-xl shadow-md hover:shadow-lg cursor-pointer group"
              >
                <span>Start Learning</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={onBrowseCourses}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-[#0B1E3D] bg-white hover:bg-slate-50 border border-[#E5EAF1] hover:border-slate-300 rounded-xl transition-all shadow-xs cursor-pointer"
              >
                <span>Browse Courses</span>
              </button>

              <a
                href="#studio"
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.getElementById('studio');
                  if (target) {
                    const topOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - topOffset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#0B1E3D] transition-colors group/reel cursor-pointer"
              >
                <div className="w-7 h-7 rounded-full bg-[#0B1E3D]/5 border border-[#0B1E3D]/10 flex items-center justify-center text-[#0B1E3D] group-hover/reel:bg-[#FFB547] transition-colors">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
                <span>Watch Studio Reel (2m)</span>
              </a>
            </motion.div>

            {/* Key Value Micro-Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#64748B]"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span className="font-medium text-[#0B1E3D]">No passive video lectures</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span className="font-medium text-[#0B1E3D]">Asynchronous code reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span className="font-medium text-[#0B1E3D]">Verifiable proof portfolio</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Interactive Product & Learning Dashboard Mockup */}
          <div className="lg:col-span-6 xl:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mx-auto w-full max-w-lg lg:max-w-none"
            >
              {/* Outer Glow & Dashboard Chassis */}
              <div className="relative rounded-2xl bg-white border border-[#E5EAF1] shadow-2xl p-5 sm:p-6 transition-all">
                
                {/* Dashboard Header Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-[#E5EAF1]">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                    <span className="ml-2 text-xs font-mono text-slate-400">skillnest://student-workspace</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0B1E3D] text-[#FFB547] text-xs font-medium">
                    <Sparkles className="w-3 h-3" />
                    <span>Active Cohort</span>
                  </div>
                </div>

                {/* Track Switcher Segmented Control */}
                <div className="mt-4 p-1 bg-slate-100/90 rounded-xl flex items-center gap-1 text-xs">
                  <button
                    type="button"
                    onClick={() => setActiveTrack('fullstack')}
                    className={`flex-1 py-1.5 px-2 rounded-lg font-medium transition-all ${
                      activeTrack === 'fullstack'
                        ? 'bg-white text-[#0B1E3D] shadow-xs font-semibold'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Full-Stack
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTrack('aiml')}
                    className={`flex-1 py-1.5 px-2 rounded-lg font-medium transition-all ${
                      activeTrack === 'aiml'
                        ? 'bg-white text-[#0B1E3D] shadow-xs font-semibold'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    AI Systems
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTrack('design')}
                    className={`flex-1 py-1.5 px-2 rounded-lg font-medium transition-all ${
                      activeTrack === 'design'
                        ? 'bg-white text-[#0B1E3D] shadow-xs font-semibold'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    UI/UX Design
                  </button>
                </div>

                {/* Main Progress Block */}
                <div className="mt-5 p-4 rounded-xl bg-[#0B1E3D] text-white">
                  <div className="flex items-center justify-between text-xs text-slate-300">
                    <span className="font-medium uppercase tracking-wider text-[#FFB547]">Your Learning Journey</span>
                    <span className="font-mono tabular-nums text-white font-semibold">{currentPreview.progress}% Complete</span>
                  </div>
                  
                  <h3 className="mt-1 text-base sm:text-lg font-semibold text-white tracking-tight">
                    {currentPreview.name}
                  </h3>

                  {/* Progress Bar */}
                  <div className="mt-3 w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                    <motion.div
                      key={currentPreview.id}
                      initial={{ width: 0 }}
                      animate={{ width: `${currentPreview.progress}%` }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="bg-[#FFB547] h-full rounded-full"
                    />
                  </div>

                  <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                    <span className="truncate max-w-[240px]">{currentPreview.module}</span>
                    <span className="font-mono text-emerald-400">On Track</span>
                  </div>
                </div>

                {/* Sub-cards Grid */}
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  
                  {/* Capstone Project Progress Card */}
                  <div className="p-3.5 rounded-xl border border-[#E5EAF1] bg-[#F7F9FC]">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Project Milestone</span>
                      <span className="text-xs font-mono font-bold text-[#0B1E3D]">{currentPreview.projectProgress}%</span>
                    </div>
                    <p className="mt-1.5 text-xs font-semibold text-[#0B1E3D] line-clamp-1">
                      {currentPreview.projectTitle}
                    </p>
                    <div className="mt-2 w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                      <div
                        className="bg-[#0B1E3D] h-full rounded-full transition-all duration-500"
                        style={{ width: `${currentPreview.projectProgress}%` }}
                      />
                    </div>
                    <span className="mt-2 block text-[11px] text-slate-500 truncate">
                      Stack: {currentPreview.tag}
                    </span>
                  </div>

                  {/* Mentor Feedback Card */}
                  <div className="p-3.5 rounded-xl border border-[#E5EAF1] bg-white">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-[#0B1E3D]">
                      <MessageSquare className="w-3.5 h-3.5 text-[#FFB547]" />
                      <span>Mentor Feedback</span>
                    </div>
                    <p className="mt-1 text-[11px] text-slate-600 line-clamp-2 italic">
                      "{currentPreview.mentorFeedback}"
                    </p>
                    <div className="mt-2 flex items-center justify-between text-[11px]">
                      <span className="font-semibold text-[#0B1E3D]">{currentPreview.mentorName}</span>
                      <span className="text-slate-400">{currentPreview.mentorRole}</span>
                    </div>
                  </div>
                </div>

                {/* Next Milestone Box */}
                <div className="mt-4 p-3 rounded-xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-2.5">
                  <div className="p-1 rounded bg-[#FFB547] text-[#0B1E3D] mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex-1 text-xs">
                    <span className="font-semibold text-[#0B1E3D]">Upcoming Milestone</span>
                    <p className="text-slate-700 font-medium">{currentPreview.nextMilestone}</p>
                  </div>
                </div>

              </div>

              {/* Floating Layered Badge 1: Skills Mastered */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="hidden sm:flex absolute -left-6 -bottom-6 bg-white p-3 rounded-xl border border-[#E5EAF1] shadow-lg items-center gap-3 z-10"
              >
                <div className="w-10 h-10 rounded-lg bg-[#FFB547]/20 flex items-center justify-center text-[#0B1E3D]">
                  <Award className="w-5 h-5 text-[#0B1E3D]" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#0B1E3D]">+{currentPreview.skillsCount} Production Skills</div>
                  <div className="text-[11px] text-[#64748B]">Audited by senior mentors</div>
                </div>
              </motion.div>

              {/* Floating Layered Badge 2: Live Code Evaluation */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: -10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="hidden sm:flex absolute -right-6 -top-6 bg-white p-3 rounded-xl border border-[#E5EAF1] shadow-lg items-center gap-3 z-10"
              >
                <div className="w-9 h-9 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#0B1E3D]">98% Test Coverage</div>
                  <div className="text-[11px] text-emerald-600 font-medium">All CI tests passed</div>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

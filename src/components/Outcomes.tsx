import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Users, CheckCircle, Star, ExternalLink, Github, ShieldCheck, Terminal, Award } from 'lucide-react';

interface MetricCounterProps {
  endValue: number;
  suffix?: string;
  prefix?: string;
  label: string;
  sublabel: string;
  decimals?: number;
}

const MetricCounter: React.FC<MetricCounterProps> = ({
  endValue,
  suffix = '',
  prefix = '',
  label,
  sublabel,
  decimals = 0,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1800; // ms
    const stepTime = 25;
    const steps = duration / stepTime;
    const increment = endValue / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        setCount(endValue);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, endValue]);

  return (
    <div ref={ref} className="p-6 rounded-2xl bg-[#142B52]/40 border border-[#E5EAF1]/10 backdrop-blur-xs">
      <div className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight tabular-nums">
        <span>{prefix}</span>
        <span>{count.toFixed(decimals)}</span>
        <span className="text-[#FFB547]">{suffix}</span>
      </div>
      <div className="mt-2 font-bold text-base text-white">{label}</div>
      <div className="text-xs text-slate-400 mt-1">{sublabel}</div>
    </div>
  );
};

interface StudentProject {
  id: string;
  title: string;
  author: string;
  authorRole: string;
  track: string;
  description: string;
  highlights: string[];
  techStack: string[];
  mentorReviewer: string;
  mentorQuote: string;
}

const FEATURED_PROJECTS: StudentProject[] = [
  {
    id: 'ledger',
    title: 'Distributed ACID Financial Ledger Engine',
    author: 'David Vance',
    authorRole: 'Now Jr Systems Eng @ Scaleup',
    track: 'Full-Stack Systems',
    description: 'Double-entry accounting microservice capable of 12,000 writes/second with strict serialization, idempotent webhooks, and real-time Kafka event streaming.',
    highlights: [
      'Zero balance drift across 1M synthetic concurrent transactions',
      'Automated chaos testing pipeline with network partition simulations',
      'Full TypeScript domain types shared with client dashboard'
    ],
    techStack: ['TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Kafka', 'Docker'],
    mentorReviewer: 'Aarav Mehta (Staff Eng)',
    mentorQuote: 'David’s isolation handling was cleaner than code I have seen from many mid-level engineers in production.'
  },
  {
    id: 'clinical-design',
    title: 'Enterprise Clinical Care Coordination Design System',
    author: 'Sophia Lindqvist',
    authorRole: 'Now Product Designer @ SaaS Studio',
    track: 'Digital Product Design',
    description: 'Comprehensive tablet and desktop UI system for ICU nurses and physicians with multi-tier WCAG AAA tokens, dark room low-glare modes, and zero-latency triage workflows.',
    highlights: [
      'Full tokenized design system in Figma with 140+ documented components',
      'Tested with 12 healthcare professionals in unmoderated usability protocols',
      'Reduced medication administration confirmation time by 34%'
    ],
    techStack: ['Figma', 'Tokens Studio', 'Usability Testing', 'WCAG AAA'],
    mentorReviewer: 'Elena Rostova (Lead Designer)',
    mentorQuote: 'Sophia’s attention to clinical accessibility and edge-case error states made this work immediately stand out.'
  },
  {
    id: 'ai-agent',
    title: 'Autonomous Research Synthesis & Verification Engine',
    author: 'Karan Patel',
    authorRole: 'Now AI Eng @ Enterprise Intelligence',
    track: 'Applied AI & LLMs',
    description: 'Multi-agent system that parses scientific literature, constructs claim verification graphs with vector semantic search, and benchmarks hallucination rates with automated evaluators.',
    highlights: [
      'Sub-250ms vector query latency with Qdrant hybrid sparse-dense indexing',
      'Custom LLM-as-judge benchmark scored 94.2% factual consistency',
      'Streaming token response with live citation links to source PDFs'
    ],
    techStack: ['Python', 'FastAPI', 'Qdrant', 'PyTorch', 'LangGraph'],
    mentorReviewer: 'Marcus Chen (Principal ML Architect)',
    mentorQuote: 'Karan did not just build a simple prompt wrapper; he engineered genuine evaluation benchmarks and latency controls.'
  }
];

export const Outcomes: React.FC = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string>('ledger');
  const activeProject = FEATURED_PROJECTS.find((p) => p.id === selectedProjectId) || FEATURED_PROJECTS[0];

  return (
    <section id="outcomes" className="py-24 md:py-32 bg-[#0B1E3D] text-white relative overflow-hidden scroll-mt-20">
      
      {/* Ambient background lighting */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 right-0 w-[600px] h-[600px] bg-[#142B52] blur-3xl opacity-50 -z-0" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FFB547]/5 blur-3xl -z-0" 
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#FFB547]">
            Measurable Impact
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-white leading-tight text-balance">
            Learning should lead somewhere.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            The ultimate benchmark of an education platform isn’t hours of video watched—it’s what you are capable of shipping independently.
          </p>
        </div>

        {/* Animated Metrics Counter Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCounter
            endValue={50}
            suffix="K+"
            label="Learners Enrolled"
            sublabel="Across 40+ countries and disciplines"
          />
          <MetricCounter
            endValue={92}
            suffix="%"
            label="Course Completion"
            sublabel="vs. 12% industry standard MOOC rate"
          />
          <MetricCounter
            endValue={4.9}
            suffix="/5"
            decimals={1}
            label="Average Learner Rating"
            sublabel="Based on verified mentor cohort reviews"
          />
          <MetricCounter
            endValue={78}
            suffix="%"
            label="Career Advancement"
            sublabel="Secured promotion, job offer, or internship within 6mo"
          />
        </div>

        {/* Important Transparency Footnote per Prompt Instructions */}
        <p className="mt-4 text-xs text-slate-400 font-mono text-center sm:text-left">
          * Representative sample metrics compiled from voluntary learner exit surveys and platform milestone completion records. Individual career outcomes depend on prior experience, effort, and interview execution.
        </p>

        {/* Real Student Proof Portfolio Showcase */}
        <div className="mt-16 pt-12 border-t border-slate-700/60">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#FFB547]">
                Proof Over Promises
              </span>
              <h3 className="mt-1 text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
                Inspect Real Student Capstone Work
              </h3>
              <p className="mt-1 text-sm text-slate-300">
                Explore real projects built and defended by Skillnest learners.
              </p>
            </div>

            {/* Project Selectors */}
            <div className="flex flex-wrap gap-2">
              {FEATURED_PROJECTS.map((proj) => (
                <button
                  key={proj.id}
                  type="button"
                  onClick={() => setSelectedProjectId(proj.id)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                    selectedProjectId === proj.id
                      ? 'bg-[#FFB547] text-[#0B1E3D] font-bold shadow-xs'
                      : 'bg-white/10 text-slate-300 hover:bg-white/20'
                  }`}
                >
                  {proj.track}
                </button>
              ))}
            </div>
          </div>

          {/* Active Project Dossier */}
          <div className="rounded-2xl bg-[#142B52]/60 border border-slate-700 p-6 sm:p-8 backdrop-blur-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Project Details */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-[#FFB547] bg-[#FFB547]/10 px-2.5 py-1 rounded border border-[#FFB547]/20">
                    {activeProject.track}
                  </span>
                  <span className="text-xs text-slate-400">By {activeProject.author} · {activeProject.authorRole}</span>
                </div>

                <h4 className="text-xl sm:text-2xl font-bold text-white font-display">
                  {activeProject.title}
                </h4>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {activeProject.description}
                </p>

                {/* Key Technical Highlights */}
                <div className="space-y-2 pt-2">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Production Invariants Defended:
                  </div>
                  {activeProject.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Tags */}
                <div className="pt-3 flex flex-wrap gap-1.5">
                  {activeProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-[#0B1E3D] border border-slate-700 text-slate-300 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Mentor Audit Sign-Off Box */}
              <div className="lg:col-span-5 p-6 rounded-xl bg-[#0B1E3D] border border-slate-700 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#FFB547]">
                    <Award className="w-4 h-4" />
                    <span>Verified Mentor Sign-Off</span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                    "{activeProject.mentorQuote}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-semibold text-white">{activeProject.mentorReviewer}</span>
                  <span className="font-mono text-emerald-400">Approved for Production</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  RotateCcw, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Terminal, 
  Code2, 
  MessageSquare,
  ShieldCheck,
  ChevronRight,
  Activity,
  Cpu,
  Monitor,
  Eye,
  Sliders
} from 'lucide-react';

interface VideoChapter {
  id: string;
  number: string;
  title: string;
  role: string;
  speaker: string;
  speakerInitials: string;
  speakerBg: string;
  durationSeconds: number;
  durationLabel: string;
  summary: string;
  codeSnippet: string[];
  subtitles: { time: number; text: string }[];
  diagramNodes: { from: string; to: string; label: string }[];
  terminalLog: string[];
}

const VIDEO_CHAPTERS: VideoChapter[] = [
  {
    id: 'pr-review',
    number: '01',
    title: 'Live 1-on-1 Code Review: Distributed Redis Locks & Postgres Isolation',
    speaker: 'Aarav Mehta',
    speakerInitials: 'AM',
    speakerBg: 'bg-emerald-950 border-emerald-500/40 text-emerald-300',
    role: 'Staff Systems Engineer @ Ex-Stripe',
    durationSeconds: 165,
    durationLabel: '02:45',
    summary: 'Aarav conducts an in-depth pull request review on a student’s double-entry ledger engine, inspecting Redis lock timeouts, race condition prevention, and ACID database guarantees.',
    codeSnippet: [
      '// Line 41: Acquire distributed lock with exponential jitter',
      'const lockKey = `lock:ledger:${tx.accountId}`;',
      'const lockAcquired = await redis.set(lockKey, tx.id, "NX", "EX", 5);',
      'if (!lockAcquired) {',
      '  metrics.increment("lock_contention");',
      '  throw new ConcurrencyError("Lock busy. Retrying with jitter...");',
      '}',
      'return await db.transaction(async (trx) => {',
      '  // Serializable isolation prevents balance drift under high concurrency',
      '  await trx.query("SELECT * FROM accounts WHERE id = $1 FOR UPDATE", [tx.accountId]);',
      '  await trx.query("INSERT INTO ledger_entries VALUES ($1, $2, $3)", [tx.id, tx.amount, "POSTED"]);',
      '});'
    ],
    subtitles: [
      { time: 0, text: 'Mentor Aarav: "Let’s look at your transaction boundary in PR #42."' },
      { time: 15, text: 'Mentor Aarav: "Notice line 43: using Redis NX with a 5-second TTL prevents deadlocks."' },
      { time: 40, text: 'Student David: "Should we add random jitter to the retry backoff?"' },
      { time: 65, text: 'Mentor Aarav: "Exactly. Without jitter, thundering herd spikes can overload PostgreSQL."' },
      { time: 95, text: 'Mentor Aarav: "Now check line 49: `SELECT FOR UPDATE` ensures serialized ledger consistency."' },
      { time: 130, text: 'Mentor Aarav: "Chaos test ran 1M concurrent operations with zero balance drift. Approved! ✓"' }
    ],
    diagramNodes: [
      { from: 'API Gateway', to: 'Redis Cluster', label: 'Lock Acquire (NX)' },
      { from: 'Redis Cluster', to: 'Ledger Engine', label: 'Lock Granted' },
      { from: 'Ledger Engine', to: 'PostgreSQL Primary', label: 'SELECT FOR UPDATE' },
      { from: 'PostgreSQL Primary', to: 'Kafka Event Bus', label: 'Transaction Emitted' }
    ],
    terminalLog: [
      '[10:14:02] Connected to Skillnest Live Architecture Room #829',
      '[10:14:05] Pull Request #42: Distributed Ledger Pipeline',
      '[10:14:18] Mentor Aarav: "Check line 47 — what happens on network partition?"',
      '[10:14:32] Student David: "Added Redis NX expiration with jitter retry"',
      '[10:14:50] Automated Chaos Suite: 0 race conditions detected ✓',
      '[10:15:12] Ledger verified for 12,000 ops/sec production traffic ✓'
    ],
  },
  {
    id: 'ai-evals',
    number: '02',
    title: 'Defending RAG Latency & LLM Evaluation Benchmarks',
    speaker: 'Marcus Chen',
    speakerInitials: 'MC',
    speakerBg: 'bg-sky-950 border-sky-500/40 text-sky-300',
    role: 'Principal ML Architect @ Ex-Databricks',
    durationSeconds: 192,
    durationLabel: '03:12',
    summary: 'Marcus challenges a learner on retrieval latency tradeoffs between dense vector search and sparse BM25 reranking across a 10,000 document research corpus.',
    codeSnippet: [
      '// Line 12: Hybrid Sparse-Dense Search Pipeline with Latency Budget',
      'export async function hybridRetrieval(query: string, topK = 10) {',
      '  const [denseVector, sparseTokens] = await Promise.all([',
      '    embedQueryWithCache(query), // Cache hit: <12ms',
      '    tokenizeBM25(query)',
      '  ]);',
      '  const [denseHits, sparseHits] = await Promise.all([',
      '    qdrant.search({ vector: denseVector, limit: 30 }),',
      '    bm25Index.search(sparseTokens, { limit: 30 })',
      '  ]);',
      '  // Reciprocal Rank Fusion + Cross-Encoder Rerank under <120ms P99',
      '  return reciprocalRankFusion(denseHits, sparseHits).slice(0, topK);',
      '}'
    ],
    subtitles: [
      { time: 0, text: 'Marcus: "Walk me through your retrieval latency SLA for this medical search agent."' },
      { time: 20, text: 'Marcus: "Why combine BM25 sparse tokens with dense embeddings?"' },
      { time: 48, text: 'Student Karan: "Dense search missed clinical abbreviations like COPD, while BM25 caught them."' },
      { time: 80, text: 'Marcus: "Good observation. What is your P99 latency on the cross-encoder rerank step?"' },
      { time: 110, text: 'Student Karan: "118ms P99 with KV cache optimization, comfortably under our 250ms budget."' },
      { time: 145, text: 'Marcus: "Automated LLM-as-judge scored 98.4% factual consistency. Architecture approved! ✓"' }
    ],
    diagramNodes: [
      { from: 'User Query', to: 'Embedding Cache', label: 'Semantic Tokenizer' },
      { from: 'Embedding Cache', to: 'Qdrant Vector DB', label: 'Dense Index (Cosine)' },
      { from: 'User Query', to: 'BM25 Lexical Index', label: 'Sparse Keyword' },
      { from: 'BM25 + Qdrant', to: 'Cross-Encoder', label: 'RRF Reranking' }
    ],
    terminalLog: [
      '[14:20:11] Evaluating Vector Qdrant Cluster latency metrics',
      '[14:20:16] P50 Latency: 42ms | P99 Latency: 118ms',
      '[14:20:25] Marcus: "Cross-encoder overhead is acceptable. Run eval harness."',
      '[14:20:39] LLM-as-Judge factual hallucination rate: 1.2% (Pass threshold < 3%)',
      '[14:20:55] Architecture verified for production deployment ✓'
    ],
  },
  {
    id: 'design-tokens',
    number: '03',
    title: 'Figma Design Tokens to Production CSS Synchronization',
    speaker: 'Elena Rostova',
    speakerInitials: 'ER',
    speakerBg: 'bg-indigo-950 border-indigo-500/40 text-indigo-300',
    role: 'Lead Product Designer @ Ex-Linear',
    durationSeconds: 150,
    durationLabel: '02:30',
    summary: 'Elena audits an enterprise clinical triage interface for WCAG AAA contrast compliance and demonstrates automated token syncing from Figma to Tailwind CSS variables.',
    codeSnippet: [
      ':root {',
      '  /* Primary Spatial Scale Tokens (8pt Grid) */',
      '  --spacing-xxs: 4px;',
      '  --spacing-md: 16px;',
      '  --spacing-xl: 32px;',
      '  /* High-Contrast Clinical Color Palette */',
      '  --color-clinical-vital: #0284C7; /* 7.2:1 WCAG AAA Contrast */',
      '  --color-clinical-warning: #D97706;',
      '  --surface-elevated: rgba(255, 255, 255, 0.96);',
      '}',
      '/* Automated sync from Figma Tokens Studio via GitHub Action */'
    ],
    subtitles: [
      { time: 0, text: 'Elena: "Let’s review the design token export for the tablet clinical ICU interface."' },
      { time: 22, text: 'Elena: "Notice the alert color token: 7.2:1 contrast ratio complies with WCAG AAA."' },
      { time: 50, text: 'Student Sophia: "We mapped the 8pt spatial grid directly to Tailwind spacing variables."' },
      { time: 78, text: 'Elena: "Excellent. Let’s run the GitHub Action to verify zero visual regressions."' },
      { time: 105, text: 'Elena: "142 component tokens synced cleanly into production CSS. Handoff is complete! ✓"' }
    ],
    diagramNodes: [
      { from: 'Figma Canvas', to: 'Tokens Studio', label: 'Design System Master' },
      { from: 'Tokens Studio', to: 'GitHub Action', label: 'JSON Webhook Sync' },
      { from: 'GitHub Action', to: 'Tailwind CSS', label: 'CSS Custom Props' },
      { from: 'Tailwind CSS', to: 'React App', label: 'WCAG AAA Verified' }
    ],
    terminalLog: [
      '[16:05:01] Figma Token Webhook received from design file',
      '[16:05:04] Validating 142 component states across desktop and tablet',
      '[16:05:12] Elena: "Check the ICU dark mode telemetry contrast"',
      '[16:05:22] Automated contrast check: 7.2:1 (Exceeds WCAG AAA)',
      '[16:05:40] Design tokens auto-generated in src/tokens.css ✓'
    ],
  },
];

export const VideoShowcase: React.FC = () => {
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(18); // seconds
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [viewMode, setViewMode] = useState<'code' | 'architecture' | 'terminal'>('code');

  const cardRef = useRef<HTMLDivElement>(null);
  const activeChapter = VIDEO_CHAPTERS[activeChapterIndex];

  // Cursor-responsive 3D tilt coordinates
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-7, 7]);

  // Handle Mock Video Playback Loop
  useEffect(() => {
    let interval: any = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= activeChapter.durationSeconds) {
            return 0; // loop
          }
          return prev + 1;
        });
      }, 1000 / playbackSpeed);
    }
    return () => clearInterval(interval);
  }, [isPlaying, activeChapter.durationSeconds, playbackSpeed]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const pct = Math.max(0, Math.min(1, clickX / rect.width));
    setCurrentTime(Math.floor(pct * activeChapter.durationSeconds));
  };

  const progressPercent = (currentTime / activeChapter.durationSeconds) * 100;

  // Find active subtitle
  const currentSubtitle = [...activeChapter.subtitles]
    .reverse()
    .find((s) => currentTime >= s.time)?.text || activeChapter.subtitles[0].text;

  // Format seconds to mm:ss
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <section id="studio" className="relative py-28 md:py-36 bg-[#F7F9FC] border-b border-[#E5EAF1] overflow-hidden scroll-mt-20">
      
      {/* Editorial Decorative Wave Banner - Directly inspired by Bobolobo POC reference */}
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute -top-8 left-0 right-0 h-16 bg-[#FFB547]/10 -rotate-1 scale-105 blur-xs"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Inspired by "See what everyday joy looks like" editorial structure) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          <div className="lg:col-span-8 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0B1E3D]/5 border border-[#0B1E3D]/10">
              <span className="w-2 h-2 rounded-full bg-[#FFB547] animate-pulse" />
              <span className="text-xs font-semibold tracking-wider uppercase text-[#0B1E3D]">
                Inside The Studio
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-display text-[#0B1E3D] tracking-tight leading-[1.05] text-balance">
              See what real skill building looks like.
            </h2>
          </div>

          <div className="lg:col-span-4">
            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
              Step inside a live Skillnest session — where code reviews are rigorous, architecture decisions are defended, and learners build systems that survive real-world traffic.
            </p>
          </div>
        </div>

        {/* Chapter Selection Pills */}
        <div className="flex flex-wrap items-center gap-2.5 mb-8">
          {VIDEO_CHAPTERS.map((chapter, idx) => (
            <button
              key={chapter.id}
              type="button"
              onClick={() => {
                setActiveChapterIndex(idx);
                setCurrentTime(0);
                setIsPlaying(true);
              }}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2.5 ${
                activeChapterIndex === idx
                  ? 'bg-[#0B1E3D] text-white shadow-md'
                  : 'bg-white text-slate-700 border border-[#E5EAF1] hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <span className={`font-mono text-xs ${
                activeChapterIndex === idx ? 'text-[#FFB547]' : 'text-slate-400'
              }`}>
                {chapter.number}
              </span>
              <span>{chapter.title.split(':')[0]}</span>
            </button>
          ))}
        </div>

        {/* 3D Cursor-Responsive Simulated Video Screen Frame */}
        <div style={{ perspective: 1200 }} className="relative">
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
            }}
            className="relative rounded-3xl bg-[#0B1E3D] border-2 border-[#E5EAF1] shadow-2xl overflow-hidden transition-shadow duration-300 hover:shadow-[0_30px_70px_rgba(11,30,61,0.25)] group"
          >
            {/* Dynamic Cursor Spotlight sheen overlay inside video card */}
            <motion.div
              style={{
                background: `radial-gradient(circle at 50% 50%, rgba(255,181,71,0.12), transparent 70%)`,
              }}
              className="pointer-events-none absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />

            {/* Video Main Stage Viewport */}
            <div 
              data-cursor="video"
              data-cursor-text={isPlaying ? '⏸ PAUSE' : '▶ PLAY REEL'}
              onClick={togglePlay}
              className="relative aspect-video w-full cursor-pointer select-none overflow-hidden bg-[#071326] flex flex-col justify-between"
            >
              {/* Animated Background Subtle Grid Matrix */}
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#FFB547_1px,transparent_1px)] [background-size:20px_20px]" />

              {/* TOP HUD: Stream Status & View Mode Tabs */}
              <div className="relative z-20 p-5 flex items-center justify-between pointer-events-none">
                <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 text-white text-xs">
                  <div className={`w-2.5 h-2.5 rounded-full ${isPlaying ? 'bg-rose-500 animate-pulse' : 'bg-amber-400'}`} />
                  <span className="font-mono font-medium">
                    {isPlaying ? 'LIVE STREAMING' : 'PAUSED'}
                  </span>
                  <span className="text-slate-400">|</span>
                  <span className="text-[#FFB547] font-semibold">{activeChapter.speaker}</span>
                </div>

                {/* View Mode Switcher Inside Video */}
                <div className="pointer-events-auto flex items-center gap-1.5 p-1 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-xs">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setViewMode('code');
                    }}
                    className={`px-3 py-1 rounded-lg font-medium transition-all ${
                      viewMode === 'code' ? 'bg-[#FFB547] text-[#0B1E3D] font-bold' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    Code Editor
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setViewMode('architecture');
                    }}
                    className={`px-3 py-1 rounded-lg font-medium transition-all ${
                      viewMode === 'architecture' ? 'bg-[#FFB547] text-[#0B1E3D] font-bold' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    System Topology
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setViewMode('terminal');
                    }}
                    className={`px-3 py-1 rounded-lg font-medium transition-all ${
                      viewMode === 'terminal' ? 'bg-[#FFB547] text-[#0B1E3D] font-bold' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    Terminal Logs
                  </button>
                </div>
              </div>

              {/* CENTER DISPLAY: Dynamic Animated Video Feed */}
              <div className="relative z-10 px-6 sm:px-12 flex-1 flex items-center justify-center">
                
                {/* Mode 1: Synchronized Code IDE with Active Typing Simulation */}
                {viewMode === 'code' && (
                  <div className="w-full max-w-3xl rounded-2xl bg-[#0B1E3D]/95 border border-slate-700/80 p-5 shadow-2xl backdrop-blur-md">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs text-slate-400">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                        <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                        <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                        <span className="ml-2 font-mono text-slate-300">src/services/ledger-engine.ts</span>
                      </div>
                      <span className="font-mono text-[#FFB547] text-[11px]">
                        Reviewer: {activeChapter.speaker}
                      </span>
                    </div>

                    <div className="mt-3 space-y-1 font-mono text-xs sm:text-sm overflow-x-auto text-slate-300">
                      {activeChapter.codeSnippet.map((line, idx) => {
                        const isCurrentActiveLine = Math.floor((currentTime / 15) % activeChapter.codeSnippet.length) === idx;
                        return (
                          <div 
                            key={idx}
                            className={`flex items-start gap-4 px-2 py-0.5 rounded transition-colors ${
                              isCurrentActiveLine && isPlaying
                                ? 'bg-[#FFB547]/20 border-l-2 border-[#FFB547] text-white font-medium'
                                : ''
                            }`}
                          >
                            <span className="text-slate-600 select-none w-6 text-right text-xs">
                              {idx + 40}
                            </span>
                            <span className="font-mono">{line}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Mode 2: Real-time System Topology Diagram */}
                {viewMode === 'architecture' && (
                  <div className="w-full max-w-3xl rounded-2xl bg-[#0B1E3D]/95 border border-slate-700 p-6 shadow-2xl backdrop-blur-md">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs text-[#FFB547] font-mono">
                      <span>VERIFIED SYSTEM TOPOLOGY</span>
                      <span className="text-emerald-400 font-bold">✓ 0 DEADLOCKS DETECTED</span>
                    </div>

                    <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {activeChapter.diagramNodes.map((node, i) => (
                        <div key={i} className="p-4 rounded-xl bg-slate-900/80 border border-slate-700/80 text-center relative group">
                          <div className="text-[11px] text-[#FFB547] font-mono font-bold uppercase">{node.from}</div>
                          <div className="my-2 h-0.5 w-full bg-slate-700 relative overflow-hidden">
                            {isPlaying && (
                              <motion.div 
                                animate={{ x: ['-100%', '100%'] }}
                                transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
                                className="h-full w-1/3 bg-[#FFB547]"
                              />
                            )}
                          </div>
                          <div className="text-xs font-semibold text-white">{node.to}</div>
                          <div className="mt-1 text-[10px] text-slate-400 font-mono truncate">{node.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Mode 3: Real-time Live Terminal Output */}
                {viewMode === 'terminal' && (
                  <div className="w-full max-w-3xl rounded-2xl bg-black/90 border border-slate-800 p-5 font-mono text-xs shadow-2xl backdrop-blur-md">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-slate-400">
                      <span className="text-emerald-400 font-bold">● bash: live-evaluation-harness</span>
                      <span>12,400 events/sec</span>
                    </div>
                    <div className="mt-3 space-y-1.5 text-slate-300">
                      {activeChapter.terminalLog.map((log, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <span className="text-[#FFB547]">&gt;</span>
                          <span>{log}</span>
                        </div>
                      ))}
                      {isPlaying && (
                        <div className="text-emerald-400 animate-pulse flex items-center gap-2">
                          <span>&gt;</span>
                          <span>[Streaming live production benchmarks...]</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Large Center Play Pulse Overlay (When Paused) */}
                {!isPlaying && (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    className="absolute z-30 w-20 h-20 rounded-full bg-[#FFB547] text-[#0B1E3D] flex items-center justify-center shadow-2xl transition-transform hover:scale-110 cursor-pointer"
                  >
                    <Play className="w-8 h-8 fill-current ml-1" />
                  </motion.div>
                )}

                {/* Picture-in-Picture Live Mentor Feed (Bottom Right of Video) */}
                <div 
                  onClick={(e) => e.stopPropagation()}
                  className="absolute bottom-20 right-6 w-36 sm:w-44 rounded-2xl bg-black/80 border border-slate-700/80 p-3 shadow-2xl backdrop-blur-md pointer-events-auto"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs border ${activeChapter.speakerBg}`}>
                      {activeChapter.speakerInitials}
                    </div>
                    <div className="truncate">
                      <div className="text-xs font-bold text-white truncate">{activeChapter.speaker}</div>
                      <div className="text-[10px] text-slate-400 truncate">{activeChapter.role.split('@')[0]}</div>
                    </div>
                  </div>

                  {/* Audio Equalizer Bars (Live Visualizer) */}
                  <div className="flex items-center justify-center gap-1 h-4 pt-1 border-t border-slate-800">
                    {[1, 2, 3, 4, 5, 6, 7].map((bar) => (
                      <motion.div
                        key={bar}
                        animate={
                          isPlaying
                            ? {
                                height: [4, 14, 6, 16, 4][bar % 5],
                              }
                            : { height: 3 }
                        }
                        transition={{
                          repeat: Infinity,
                          duration: 0.5 + bar * 0.1,
                          ease: 'easeInOut',
                        }}
                        className="w-1 bg-[#FFB547] rounded-full"
                      />
                    ))}
                  </div>
                </div>

              </div>

              {/* SUBTITLES CAPTIONS TICKER ON VIDEO */}
              <div className="relative z-20 px-6 py-2 text-center pointer-events-none">
                <span className="inline-block px-4 py-1.5 rounded-full bg-black/85 backdrop-blur-md text-white text-xs sm:text-sm font-medium border border-white/10 shadow-lg">
                  {currentSubtitle}
                </span>
              </div>

              {/* BOTTOM HUD: Scrubber Timeline & Player Controls */}
              <div 
                onClick={(e) => e.stopPropagation()}
                className="relative z-20 p-6 bg-gradient-to-t from-[#0B1E3D] via-[#0B1E3D]/95 to-transparent space-y-3"
              >
                {/* Timeline Scrubber Bar */}
                <div 
                  onClick={handleSeek}
                  className="relative w-full h-2.5 bg-white/20 hover:h-3.5 rounded-full cursor-pointer transition-all duration-150 overflow-hidden"
                >
                  <div
                    className="h-full rounded-full bg-[#FFB547] relative transition-all duration-100"
                    style={{ width: `${progressPercent}%` }}
                  >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white rounded-full shadow-md" />
                  </div>
                </div>

                {/* Bottom Control Bar */}
                <div className="flex items-center justify-between text-xs text-white">
                  <div className="flex items-center gap-4">
                    <button
                      type="button"
                      onClick={togglePlay}
                      className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
                    >
                      {isPlaying ? <Pause className="w-4 h-4 fill-current text-[#FFB547]" /> : <Play className="w-4 h-4 fill-current text-white" />}
                    </button>

                    <div className="font-mono text-slate-300">
                      <span>{formatTime(currentTime)}</span>
                      <span className="text-slate-500"> / </span>
                      <span>{activeChapter.durationLabel}</span>
                    </div>

                    <span className="hidden sm:inline font-semibold text-white">
                      {activeChapter.title}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={toggleMute}
                      className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
                    >
                      {isMuted ? <VolumeX className="w-4 h-4 text-slate-300" /> : <Volume2 className="w-4 h-4 text-[#FFB547]" />}
                    </button>

                    <button
                      type="button"
                      onClick={() => setPlaybackSpeed((s) => (s === 1 ? 1.25 : s === 1.25 ? 1.5 : 1))}
                      className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 font-mono text-[11px] text-[#FFB547] transition-colors"
                    >
                      {playbackSpeed}x
                    </button>

                    <span className="text-slate-400 font-mono text-[11px]">1080p 60fps</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sub-panel: Live Session Transcript & Mentor Insights */}
            <div className="p-6 sm:p-8 bg-[#0B1E3D] text-white border-t border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              
              <div className="lg:col-span-7 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-[#FFB547]">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Session Synopsis</span>
                </div>
                <h4 className="text-lg font-bold font-display text-white">
                  {activeChapter.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {activeChapter.summary}
                </p>
              </div>

              {/* Real-time Terminal Log Ticker */}
              <div className="lg:col-span-5 p-4 rounded-xl bg-black/40 border border-slate-800 font-mono text-[11px] text-slate-400 space-y-1">
                <div className="text-slate-500 text-[10px] pb-1 border-b border-slate-800 flex items-center justify-between">
                  <span>LIVE REVIEW EVENT STREAM</span>
                  <span className="text-emerald-400 font-bold">● CONNECTED</span>
                </div>
                {activeChapter.terminalLog.slice(-3).map((log, i) => (
                  <div key={i} className="truncate text-slate-300">
                    {log}
                  </div>
                ))}
              </div>

            </div>
          </motion.div>
        </div>

        {/* Reassurance Guarantee Footer with Curved Wave Motif */}
        <div className="mt-12 text-center text-xs text-[#64748B] flex flex-wrap items-center justify-center gap-6">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span className="font-semibold text-[#0B1E3D]">100% Unrehearsed code reviews</span>
          </div>
          <span aria-hidden="true">·</span>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span className="font-semibold text-[#0B1E3D]">Direct GitHub pull request feedback</span>
          </div>
          <span aria-hidden="true">·</span>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span className="font-semibold text-[#0B1E3D]">Verified cryptographic credentials</span>
          </div>
        </div>

      </div>
    </section>
  );
};

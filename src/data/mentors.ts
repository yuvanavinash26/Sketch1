import { Mentor } from '../types';

export const MENTORS: Mentor[] = [
  {
    id: 'aarav-mehta',
    name: 'Aarav Mehta',
    role: 'Staff Software Engineer',
    companyPast: 'Previously Stripe & Coinbase',
    expertise: ['Distributed Systems', 'TypeScript & Go', 'System Design'],
    bio: 'Architected high-throughput payment processing systems handling millions of concurrent requests. Mentors engineers breaking into high-scale infrastructure.',
    quote: 'Tutorials teach you how to write code. Mentorship teaches you how to write code that survives real-world traffic.',
    sessionsHeld: 340,
    rating: 4.98,
    avatarBg: 'bg-emerald-950/60 border-emerald-500/30 text-emerald-400',
    initials: 'AM',
    linkedInUrl: 'https://linkedin.com'
  },
  {
    id: 'elena-rostova',
    name: 'Elena Rostova',
    role: 'Lead Product Designer',
    companyPast: 'Previously Linear & Figma community',
    expertise: ['Design Systems', 'Micro-Interactions', 'Product Strategy'],
    bio: 'Specializes in craft-led enterprise software, tokenized design systems, and bridging design-engineering communication for fast-growing startups.',
    quote: 'Great product design is not about decoration. It is the clarity of mental models and frictionless problem solving.',
    sessionsHeld: 285,
    rating: 4.95,
    avatarBg: 'bg-indigo-950/60 border-indigo-500/30 text-indigo-300',
    initials: 'ER',
    linkedInUrl: 'https://linkedin.com'
  },
  {
    id: 'marcus-chen',
    name: 'Marcus Chen',
    role: 'Principal Machine Learning Architect',
    companyPast: 'Previously Databricks & Meta AI',
    expertise: ['LLM Orchestration', 'RAG Systems', 'Evaluation Harnesses'],
    bio: 'Leads generative AI research and enterprise model deployment. Helps developers bridge the gap between academic papers and production latency budgets.',
    quote: 'Building with AI in 2026 requires rigorous empirical evaluation, not just pasting prompt templates.',
    sessionsHeld: 210,
    rating: 4.97,
    avatarBg: 'bg-sky-950/60 border-sky-500/30 text-sky-400',
    initials: 'MC',
    linkedInUrl: 'https://linkedin.com'
  },
  {
    id: 'priya-sharma',
    name: 'Priya Sharma',
    role: 'Senior Reliability & Cloud Engineer',
    companyPast: 'Previously AWS & Datadog',
    expertise: ['Kubernetes', 'Multi-Cloud SRE', 'Chaos Engineering'],
    bio: 'Passionate about infrastructure resilience and developer experience. Guides students through real incident simulations and production post-mortems.',
    quote: 'Confidence comes from testing failure scenarios in staging before they can ever happen in customer-facing production.',
    sessionsHeld: 195,
    rating: 4.92,
    avatarBg: 'bg-amber-950/60 border-amber-500/30 text-amber-300',
    initials: 'PS',
    linkedInUrl: 'https://linkedin.com'
  }
];

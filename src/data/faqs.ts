import { FAQItem } from '../types';

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What is Skillnest and how is it different from traditional bootcamps?',
    answer: 'Traditional bootcamps charge $15,000–$25,000 for outdated slides and lecture recordings. Skillnest is built on modern industry practice: structured, modular tracks, hands-on production deliverables, and direct feedback from active senior engineers and designers at scaleups—at a fraction of the cost, without predatory income share agreements (ISAs).',
    category: 'General'
  },
  {
    id: 'faq-2',
    question: 'Are the programs beginner friendly if I have no coding or design background?',
    answer: 'Yes! Tracks like "Digital Product Design & Systems" and "Modern Data Analytics & Modeling" start with foundational mental models before accelerating. For engineering tracks like "Full-Stack Systems" and "Applied AI", we recommend basic syntax comfort (variables, loops, Git), but our curated prep modules get you up to speed in week 1.',
    category: 'Curriculum'
  },
  {
    id: 'faq-3',
    question: 'How does mentor feedback work in practice?',
    answer: 'When you submit a milestone or pull request on GitHub, your mentor conducts an in-depth line-by-line code or design critique within 48 hours. They highlight edge cases, system trade-offs, security vulnerabilities, and code smell, exactly as a staff engineer would in a modern tech workplace.',
    category: 'Mentorship'
  },
  {
    id: 'faq-4',
    question: 'Are Skillnest certificates officially verifiable by employers?',
    answer: 'Yes. Every graduating student receives a cryptographically verifiable Skillnest Credential URL containing their completed capstone repository link, live deployment demo, mentor sign-off note, and competencies mastered. Employers can independently verify what you built and the quality standards applied.',
    category: 'Certificates'
  },
  {
    id: 'faq-5',
    question: 'Can I learn at my own pace if I work full-time?',
    answer: 'Absolutely. All curriculum and exercises are self-scheduled. Most working professionals spend 8–12 hours per week. If work demands spike, you can pause or extend your cohort review milestones anytime without financial penalty.',
    category: 'General'
  },
  {
    id: 'faq-6',
    question: 'Can I switch between programs or upgrade my plan later?',
    answer: 'Yes. You can switch tracks or upgrade from Starter to Guided/Pro at any time. Any unused portion of your subscription is automatically prorated toward your new plan.',
    category: 'General'
  }
];

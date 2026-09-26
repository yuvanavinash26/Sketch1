import { PricingPlan } from '../types';

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'Self-directed access for disciplined independent learners.',
    monthlyPrice: 29,
    annualPrice: 24,
    suitableFor: 'College students and self-learners needing structured curriculum',
    features: [
      'Full access to all course tracks & modules',
      'Production project specifications & starter repos',
      'Automated code evaluation test suites',
      'Skillnest community discord & study rooms',
      'Verifiable digital completion certificate',
      'Self-paced learning schedule'
    ],
    ctaLabel: 'Start with Starter',
    ctaAction: 'starter'
  },
  {
    id: 'guided',
    name: 'Guided',
    tagline: 'Structured curriculum paired with weekly expert code reviews.',
    monthlyPrice: 79,
    annualPrice: 64,
    isPopular: true,
    suitableFor: 'Active career builders seeking direct feedback and accountability',
    features: [
      'Everything included in Starter',
      'Weekly 1-on-1 asynchronous code & design reviews',
      'Live bi-weekly mentor AMA & architecture sessions',
      'Peer group cohort with guided milestone deadlines',
      'Capstone defense & portfolio critique session',
      'Priority mentor office hours booking',
      'Official verified Skillnest Credential & digital badge'
    ],
    ctaLabel: 'Enroll in Guided',
    ctaAction: 'guided'
  },
  {
    id: 'pro',
    name: 'Pro Accelerator',
    tagline: 'High-intensity career transition with dedicated industry mentorship.',
    monthlyPrice: 189,
    annualPrice: 149,
    suitableFor: 'Career switchers targeting job-ready engineering & design roles',
    features: [
      'Everything included in Guided',
      'Dedicated primary staff-level mentor matching',
      'Bi-weekly 45-minute live 1-on-1 video mentorship',
      '3 realistic mock technical & system design interviews',
      'Resume, GitHub, and portfolio narrative reconstruction',
      'Direct introductions to hiring partner talent network',
      'Lifetime alumni access to updated curriculum'
    ],
    ctaLabel: 'Apply for Pro Accelerator',
    ctaAction: 'pro'
  }
];

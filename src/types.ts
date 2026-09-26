export type CourseCategory = 
  | 'All' 
  | 'Development' 
  | 'AI & Machine Learning' 
  | 'Data Analytics' 
  | 'Design' 
  | 'Cloud & DevOps';

export interface Course {
  id: string;
  category: CourseCategory;
  title: string;
  shortDescription: string;
  fullDescription: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  rating: number;
  reviewCount: number;
  studentCount: string;
  featured?: boolean;
  accentColor: string;
  iconName: string;
  prerequisites: string[];
  capstoneProject: {
    title: string;
    description: string;
    techStack: string[];
  };
  syllabusWeeks: {
    week: string;
    title: string;
    topics: string[];
  }[];
}

export interface Mentor {
  id: string;
  name: string;
  role: string;
  companyPast: string;
  expertise: string[];
  bio: string;
  quote: string;
  sessionsHeld: number;
  rating: number;
  avatarBg: string;
  initials: string;
  linkedInUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  course: string;
  category: 'Career Switcher' | 'College Student' | 'Early Career';
  quote: string;
  outcome: string;
  salaryMetric?: string;
  initials: string;
  avatarColor: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: number;
  annualPrice: number;
  isPopular?: boolean;
  features: string[];
  ctaLabel: string;
  ctaAction: string;
  suitableFor: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Curriculum' | 'Mentorship' | 'Certificates';
}

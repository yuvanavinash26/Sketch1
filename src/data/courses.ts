import { Course } from '../types';

export const COURSES: Course[] = [
  {
    id: 'fullstack-systems',
    category: 'Development',
    title: 'Full-Stack Systems Engineering',
    shortDescription: 'Build resilient, production-scale web applications with modern TypeScript, Next.js, distributed databases, and event streams.',
    fullDescription: 'Transition from basic tutorials to professional engineering. Learn how top tech teams architect fault-tolerant distributed backends, implement type-safe APIs, manage state at scale, and ship verified production deployments with automated CI/CD pipelines.',
    duration: '12 weeks',
    level: 'Intermediate',
    rating: 4.9,
    reviewCount: 482,
    studentCount: '3.4k',
    featured: true,
    accentColor: '#FFB547',
    iconName: 'Code',
    prerequisites: ['Basic JavaScript or TypeScript', 'HTML/CSS fundamentals', 'Git CLI basics'],
    capstoneProject: {
      title: 'Distributed Real-Time Financial Ledger',
      description: 'Design and deploy a double-entry ledger engine with ACID guarantees, idempotent webhook processing, and an interactive audit dashboard.',
      techStack: ['TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'Next.js']
    },
    syllabusWeeks: [
      {
        week: 'Weeks 1–3',
        title: 'Core Architecture & Type Safety',
        topics: ['Advanced TypeScript Patterns', 'Domain-Driven API Design', 'Database Modeling & Migrations', 'High-throughput Query Optimization']
      },
      {
        week: 'Weeks 4–6',
        title: 'Microservices & Asynchronous Messaging',
        topics: ['Event-Driven Architecture', 'Kafka & Redis Streams', 'Background Workers & Job Queues', 'Caching & Invalidation Strategies']
      },
      {
        week: 'Weeks 7–9',
        title: 'Security, Auth & Resiliency',
        topics: ['OAuth 2.0 & Session Topologies', 'Rate Limiting & DDoS Mitigation', 'Circuit Breakers & Retries', 'End-to-End Tracing (OpenTelemetry)']
      },
      {
        week: 'Weeks 10–12',
        title: 'Capstone Production Deployment',
        topics: ['Infrastructure as Code (Terraform)', 'Container Orchestration & CI/CD', 'Zero-Downtime Blue/Green Deployments', 'Live Architecture Defense with Mentors']
      }
    ]
  },
  {
    id: 'ai-ml-engineering',
    category: 'AI & Machine Learning',
    title: 'Applied AI & LLM Systems Engineering',
    shortDescription: 'Move beyond API wrappers. Build production RAG pipelines, fine-tuned domain models, and low-latency evaluation harnesses.',
    fullDescription: 'Learn how modern AI teams operationalize frontier models into reliable enterprise software. From vector database indexing and semantic reranking to model fine-tuning and safety guardrails.',
    duration: '10 weeks',
    level: 'Intermediate',
    rating: 4.9,
    reviewCount: 318,
    studentCount: '2.8k',
    featured: true,
    accentColor: '#38BDF8',
    iconName: 'Brain',
    prerequisites: ['Python intermediate', 'Linear algebra basics', 'REST API consumption'],
    capstoneProject: {
      title: 'Autonomous Research & Synthesis Agent',
      description: 'Deploy a multi-agent pipeline that retrieves, ground-checks, and synthesizes 10,000+ scientific papers with measurable hallucination benchmarks.',
      techStack: ['Python', 'PyTorch', 'FastAPI', 'Qdrant', 'LangGraph', 'EvalHarness']
    },
    syllabusWeeks: [
      {
        week: 'Weeks 1–2',
        title: 'Foundations of Modern AI Systems',
        topics: ['Transformer Architecture Deep Dive', 'Tokenization & Context Window Mechanics', 'Prompt Engineering vs Systematic Grounding']
      },
      {
        week: 'Weeks 3–5',
        title: 'Advanced Retrieval-Augmented Generation',
        topics: ['Hybrid Search (Dense + Sparse)', 'Chunking & Hierarchical Indexing', 'Cross-Encoder Re-ranking', 'Contextual Compression']
      },
      {
        week: 'Weeks 6–8',
        title: 'Fine-Tuning & Multi-Agent Orchestration',
        topics: ['LoRA & PEFT Quantization', 'Synthetic Dataset Generation', 'State Machine Multi-Agent Frameworks', 'Tool Use & Function Calling']
      },
      {
        week: 'Weeks 9–10',
        title: 'Evals, Safety & Production Latency',
        topics: ['Automated LLM-as-Judge Evals', 'Latency Optimization & KV-Cache Management', 'Streaming Protocols', 'Live Capstone Review']
      }
    ]
  },
  {
    id: 'ui-ux-design-systems',
    category: 'Design',
    title: 'Digital Product Design & Systems',
    shortDescription: 'Master design tokens, accessibility standards, user research synthesis, and high-fidelity prototypes in Figma.',
    fullDescription: 'Learn how elite product designers craft unified, accessible software experiences. Build scalable multi-brand design systems, run rigorous usability testing, and collaborate effectively with frontend engineers.',
    duration: '8 weeks',
    level: 'Beginner',
    rating: 4.9,
    reviewCount: 264,
    studentCount: '2.1k',
    featured: false,
    accentColor: '#F472B6',
    iconName: 'Layout',
    prerequisites: ['No prior design experience required', 'Curiosity for visual hierarchy & user empathy'],
    capstoneProject: {
      title: 'Enterprise Clinical Care Management Suite',
      description: 'End-to-end design of a desktop and tablet clinical coordination tool, complete with WCAG AAA token systems and interactive prototypes.',
      techStack: ['Figma', 'Tokens Studio', 'UsabilityHub', 'FigJam', 'Principle']
    },
    syllabusWeeks: [
      {
        week: 'Weeks 1–2',
        title: 'Design Foundations & Typographic Scale',
        topics: ['Visual Hierarchy & 8pt Spatial Grid', 'Typography Pairing & Scale Ratios', 'Color Science & Accessible Contrast']
      },
      {
        week: 'Weeks 3–4',
        title: 'User Research & Information Architecture',
        topics: ['Qualitative User Interviews', 'Journey Mapping & Service Blueprints', 'Low-Fidelity Wireframing & Card Sorting']
      },
      {
        week: 'Weeks 5–6',
        title: 'Component Architecture & Design Tokens',
        topics: ['Auto-Layout Mastery & Variants', 'Multi-Brand Token Architecture', 'Documentation & Developer Handoff Specs']
      },
      {
        week: 'Weeks 7–8',
        title: 'Prototyping, Usability Testing & Polish',
        topics: ['Micro-Interactions & Motion Choreography', 'Unmoderated Usability Testing', 'Design System Governance & Review']
      }
    ]
  },
  {
    id: 'data-analytics-engineering',
    category: 'Data Analytics',
    title: 'Modern Data Analytics & Modeling',
    shortDescription: 'Turn raw telemetry into decisive business intelligence. Master SQL window functions, dbt transformations, and data contracts.',
    fullDescription: 'Stop relying on shallow spreadsheets. Learn the modern data stack: build dimensional models, orchestrate data pipelines, validate data freshness with automated tests, and craft executive dashboards that drive company decisions.',
    duration: '10 weeks',
    level: 'Beginner',
    rating: 4.8,
    reviewCount: 195,
    studentCount: '1.9k',
    featured: false,
    accentColor: '#34D399',
    iconName: 'BarChart3',
    prerequisites: ['Basic math comfort', 'Curiosity about business metrics & cohorts'],
    capstoneProject: {
      title: 'SaaS Unit Economics & Cohort Analytics Warehouse',
      description: 'Build a production dbt pipeline over 5M+ row event data models computing net revenue retention, CAC payback, and churn prediction.',
      techStack: ['SQL', 'Snowflake / BigQuery', 'dbt Core', 'Metabase', 'Python']
    },
    syllabusWeeks: [
      {
        week: 'Weeks 1–3',
        title: 'Advanced Analytical SQL',
        topics: ['Window Functions & CTEs', 'Cohort & Retention Modeling', 'Funnel Optimization & Sessionization']
      },
      {
        week: 'Weeks 4–6',
        title: 'Data Warehousing & Dimensional Modeling',
        topics: ['Star vs Snowflake Schemas', 'Kimball Methodology', 'Slowly Changing Dimensions (SCD Type 2)']
      },
      {
        week: 'Weeks 7–8',
        title: 'Modern Analytics Engineering with dbt',
        topics: ['dbt Models, Tests & Documentation', 'Semantic Layer & Metrics Definitions', 'CI/CD for Analytics Repositories']
      },
      {
        week: 'Weeks 9–10',
        title: 'Executive Storytelling & BI Dashboards',
        topics: ['Information Density & Dashboard UX', 'Stakeholder Communication', 'Final Portfolio Presentation']
      }
    ]
  },
  {
    id: 'cloud-infrastructure-devops',
    category: 'Cloud & DevOps',
    title: 'Cloud Infrastructure & SRE',
    shortDescription: 'Master Kubernetes, Terraform, GitOps pipelines, and observability to run mission-critical cloud infrastructure.',
    fullDescription: 'Learn how high-performing teams maintain 99.99% uptime. Provision cloud infrastructure declaratively, configure Kubernetes clusters, set up Prometheus monitoring, and master incident incident triage.',
    duration: '12 weeks',
    level: 'Intermediate',
    rating: 4.9,
    reviewCount: 240,
    studentCount: '2.2k',
    featured: false,
    accentColor: '#A78BFA',
    iconName: 'Server',
    prerequisites: ['Linux command line comfort', 'Basic networking (IP, DNS, HTTP/TLS)'],
    capstoneProject: {
      title: 'Multi-Region High Availability Cluster',
      description: 'Provision a zero-downtime multi-region Kubernetes cluster with automated failover, canary deployments, and centralized Grafana telemetry.',
      techStack: ['Terraform', 'Kubernetes (k8s)', 'Argocd', 'Prometheus', 'Grafana', 'AWS/GCP']
    },
    syllabusWeeks: [
      {
        week: 'Weeks 1–3',
        title: 'Linux Systems & Container Runtimes',
        topics: ['Linux Internals & Namespaces', 'Multi-Stage Docker Optimizations', 'Container Security & Vulnerability Scanning']
      },
      {
        week: 'Weeks 4–6',
        title: 'Kubernetes Architecture in Practice',
        topics: ['Pods, Deployments & StatefulSets', 'Ingress Controllers & Service Mesh', 'ConfigMaps, Secrets & RBAC']
      },
      {
        week: 'Weeks 7–9',
        title: 'Infrastructure as Code & GitOps',
        topics: ['Terraform Modular Design', 'ArgoCD Automated Continuous Delivery', 'Secret Management (HashiCorp Vault)']
      },
      {
        week: 'Weeks 10–12',
        title: 'Observability & Incident Management',
        topics: ['SLIs, SLOs & Error Budgets', 'Prometheus Alerting Rules', 'Chaos Engineering & Game Days', 'Capstone Defense']
      }
    ]
  },
  {
    id: 'product-management-accelerator',
    category: 'Development',
    title: 'Technical Product Management',
    shortDescription: 'Bridge engineering constraints and business growth. Learn PRD drafting, technical discovery, and metric-backed roadmaps.',
    fullDescription: 'Designed for aspiring and early PMs who want to earn the respect of engineering teams. Learn how to write crisp specifications, evaluate technical trade-offs, run customer discovery, and measure feature adoption.',
    duration: '8 weeks',
    level: 'Beginner',
    rating: 4.8,
    reviewCount: 167,
    studentCount: '1.7k',
    featured: false,
    accentColor: '#F59E0B',
    iconName: 'Compass',
    prerequisites: ['Basic familiarity with web products', 'Passion for solving user problems'],
    capstoneProject: {
      title: 'Zero-to-One Product Launch Package',
      description: 'Comprehensive product dossier including market sizing, customer discovery interview transcripts, prioritized PRD, and sprint launch plan.',
      techStack: ['Notion', 'Mixpanel', 'Jira', 'Figma', 'Miro']
    },
    syllabusWeeks: [
      {
        week: 'Weeks 1–2',
        title: 'Problem Validation & Customer Discovery',
        topics: ['Continuous Discovery Habits', 'Hypothesis-Driven Experimentation', 'Market Sizing & Competitive Teardowns']
      },
      {
        week: 'Weeks 3–4',
        title: 'Technical Fluency for Product Managers',
        topics: ['APIs, Databases & Latency Constraints', 'Technical Debt vs Feature Velocity', 'Working with Staff Engineers']
      },
      {
        week: 'Weeks 5–6',
        title: 'PRDs, User Stories & Roadmapping',
        topics: ['Writing Actionable Product Specs', 'RICE Prioritization Framework', 'Release Scoping & MVPs']
      },
      {
        week: 'Weeks 7–8',
        title: 'Go-to-Market, Metrics & Post-Launch',
        topics: ['North Star Metrics & Instrumentation', 'A/B Testing Best Practices', 'Executive Stakeholder Alignment']
      }
    ]
  }
];

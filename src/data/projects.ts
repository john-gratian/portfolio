export interface Project {
  slug: string;
  title: string;
  category: "Website" | "Mobile App" | "Desktop App" | "Web App";
  industry: string;
  shortDescription: string;
  outcome: string;
  thumbnail: string;
  heroImage: string;
  year: string;
  duration: string;
  role: string;
  team: string;
  tools: string[];
  featured: boolean;
  color: string; // accent color for the project

  // Case study sections
  overview: string;
  problem: string;
  research: {
    methods: string[];
    description: string;
    insights: Insight[];
  };
  designStrategy: string;
  wireframeImages: string[];
  prototypeImages: string[];
  finalUIImages: string[];
  impact: Metric[];
  keyLearnings: string[];
  beforeAfter?: {
    before: string;
    after: string;
    description: string;
  }[];
  designDecisions?: DesignDecision[];
  userJourney?: JourneyStep[];
}

export interface Insight {
  title: string;
  description: string;
  icon: string;
}

export interface Metric {
  label: string;
  value: string;
  description: string;
}

export interface DesignDecision {
  title: string;
  rationale: string;
  outcome: string;
}

export interface JourneyStep {
  step: string;
  action: string;
  emotion: "positive" | "neutral" | "negative";
  opportunity: string;
}

// ============================================================
// SAMPLE PROJECTS — Replace with your real projects
// ============================================================

export const projects: Project[] = [
  {
    slug: "finflow-banking-app",
    title: "FinFlow Banking App",
    category: "Mobile App",
    industry: "Fintech",
    shortDescription: "Reimagining personal banking for the next generation of mobile-first users.",
    outcome: "43% increase in daily active users within 3 months of launch",
    thumbnail: "/images/projects/finflow-thumb.jpg",
    heroImage: "/images/projects/finflow-hero.jpg",
    year: "2024",
    duration: "4 months",
    role: "Lead UX Designer & Researcher",
    team: "2 designers, 4 engineers, 1 PM",
    tools: ["Figma", "Maze", "Miro", "Principle"],
    featured: true,
    color: "#F97316",
    overview:
      "FinFlow is a mobile banking application designed for Gen Z and millennial users who demand seamless, transparent, and intuitive financial management. The project involved a complete redesign of the existing app experience, from onboarding to daily transaction management.",
    problem:
      "The existing banking app had a 68% drop-off rate during onboarding and users reported feeling overwhelmed by the complexity of basic features. Customer satisfaction scores were declining, and the app was losing market share to newer fintech competitors.",
    research: {
      methods: ["User interviews", "Competitive analysis", "Usability testing", "Survey (n=500)"],
      description:
        "We conducted 24 in-depth user interviews, analyzed 8 competing products, and ran a survey of 500 existing users to understand pain points and opportunities.",
      insights: [
        {
          title: "Simplicity Over Features",
          description:
            "78% of users said they only use 3-4 features regularly but feel overwhelmed by the 20+ features presented.",
          icon: "simplicity",
        },
        {
          title: "Trust Through Transparency",
          description:
            "Users wanted to see exactly where their money goes with clear, visual breakdowns — not spreadsheet-like tables.",
          icon: "trust",
        },
        {
          title: "Guided Onboarding",
          description:
            "New users needed progressive disclosure — show basic features first, then gradually introduce advanced ones.",
          icon: "guide",
        },
      ],
    },
    designStrategy:
      "We adopted a progressive disclosure approach: surface the most-used features prominently while keeping advanced tools one tap away. The visual language shifted to warm, approachable gradients and large typography to reduce cognitive load and build trust.",
    wireframeImages: ["/images/projects/finflow-wireframe-1.jpg", "/images/projects/finflow-wireframe-2.jpg"],
    prototypeImages: ["/images/projects/finflow-proto-1.jpg"],
    finalUIImages: [
      "/images/projects/finflow-final-1.jpg",
      "/images/projects/finflow-final-2.jpg",
      "/images/projects/finflow-final-3.jpg",
    ],
    impact: [
      { label: "Onboarding Completion", value: "+52%", description: "From 32% to 84% completion rate" },
      { label: "Daily Active Users", value: "+43%", description: "Within the first 3 months" },
      { label: "Customer Satisfaction", value: "4.7/5", description: "Up from 3.2/5 rating" },
      { label: "Support Tickets", value: "-61%", description: "Fewer confusion-related tickets" },
    ],
    keyLearnings: [
      "Progressive disclosure dramatically reduces cognitive load for complex financial products.",
      "Visual spending breakdowns create more trust than numerical tables alone.",
      "Micro-animations during loading states significantly reduce perceived wait time.",
      "User testing with real financial data reveals pain points that synthetic data misses.",
    ],
    beforeAfter: [
      {
        before: "/images/projects/finflow-before-1.jpg",
        after: "/images/projects/finflow-after-1.jpg",
        description: "Dashboard: From cluttered data dump to focused, visual summary",
      },
    ],
    designDecisions: [
      {
        title: "Card-based transaction view",
        rationale: "Users scan transactions vertically — cards with merchant logos increase scanability by 3x vs. text lists.",
        outcome: "Transaction lookup time reduced by 40%.",
      },
      {
        title: "Bottom-nav with smart defaults",
        rationale: "Thumb-zone analysis showed 89% of taps happen in the bottom 40% of the screen.",
        outcome: "Navigation satisfaction improved from 2.8 to 4.5 out of 5.",
      },
    ],
    userJourney: [
      { step: "Download", action: "User finds app in store", emotion: "neutral", opportunity: "Strong store listing" },
      { step: "Onboard", action: "Creates account in 3 steps", emotion: "positive", opportunity: "Reduce friction" },
      { step: "First Transfer", action: "Sends money to a friend", emotion: "positive", opportunity: "Celebrate success" },
      { step: "Check Balance", action: "Views spending overview", emotion: "positive", opportunity: "Visual insights" },
    ],
  },
  {
    slug: "healthwise-platform",
    title: "HealthWise Platform",
    category: "Web App",
    industry: "Healthcare",
    shortDescription: "A patient-centered telehealth platform connecting patients with providers seamlessly.",
    outcome: "Reduced average appointment booking time from 8 minutes to 45 seconds",
    thumbnail: "/images/projects/healthwise-thumb.jpg",
    heroImage: "/images/projects/healthwise-hero.jpg",
    year: "2024",
    duration: "6 months",
    role: "UX Designer & Researcher",
    team: "3 designers, 6 engineers, 2 PMs",
    tools: ["Figma", "UserTesting", "Hotjar", "Miro"],
    featured: true,
    color: "#10B981",
    overview:
      "HealthWise is a comprehensive telehealth platform designed to simplify the healthcare experience for both patients and providers. The project focused on reducing friction in appointment scheduling, improving the virtual consultation experience, and creating accessible health record management.",
    problem:
      "Patients found the existing booking system confusing — 45% abandoned the process before completing an appointment. Providers spent an average of 12 minutes per patient on administrative tasks that could be automated.",
    research: {
      methods: ["Contextual inquiry", "Card sorting", "A/B testing", "Analytics review"],
      description:
        "We observed 18 patients navigating the booking flow in-person, conducted card sorting with 30 participants to restructure information architecture, and analyzed 6 months of behavioral data.",
      insights: [
        {
          title: "Calendar Anxiety",
          description: "Patients felt anxious choosing times — they wanted the system to suggest optimal slots based on their preferences.",
          icon: "calendar",
        },
        {
          title: "Medical Jargon Barrier",
          description: "67% of users couldn't understand specialty names, leading to booking the wrong type of appointment.",
          icon: "language",
        },
        {
          title: "Trust in Virtual Care",
          description: "First-time telehealth users needed reassurance that virtual visits were as effective as in-person ones.",
          icon: "trust",
        },
      ],
    },
    designStrategy:
      "We designed a symptom-first booking flow: instead of choosing a specialty, patients describe their concern in plain language, and the system matches them with the right provider. Smart scheduling suggests the 3 best available slots based on patient history and preferences.",
    wireframeImages: ["/images/projects/healthwise-wireframe-1.jpg"],
    prototypeImages: ["/images/projects/healthwise-proto-1.jpg"],
    finalUIImages: [
      "/images/projects/healthwise-final-1.jpg",
      "/images/projects/healthwise-final-2.jpg",
    ],
    impact: [
      { label: "Booking Time", value: "45s", description: "Down from 8 minutes average" },
      { label: "Booking Completion", value: "94%", description: "Up from 55% completion rate" },
      { label: "Provider Efficiency", value: "+35%", description: "More patients seen per day" },
      { label: "Patient NPS", value: "72", description: "Up from 31 NPS score" },
    ],
    keyLearnings: [
      "Symptom-based navigation removes the burden of medical knowledge from patients.",
      "Smart scheduling that considers patient context dramatically reduces decision fatigue.",
      "Progressive trust-building elements are essential for telehealth adoption.",
    ],
  },
  {
    slug: "nova-design-system",
    title: "Nova Design System",
    category: "Web App",
    industry: "SaaS / Enterprise",
    shortDescription: "A comprehensive design system unifying product experience across 12 enterprise applications.",
    outcome: "Reduced design-to-development handoff time by 60%",
    thumbnail: "/images/projects/nova-thumb.jpg",
    heroImage: "/images/projects/nova-hero.jpg",
    year: "2023",
    duration: "8 months",
    role: "Design System Lead",
    team: "4 designers, 8 engineers",
    tools: ["Figma", "Storybook", "Tokens Studio", "Chromatic"],
    featured: true,
    color: "#8B5CF6",
    overview:
      "Nova is an enterprise-grade design system built to unify the user experience across 12 different products within a large SaaS organization. The system includes a token-based architecture, 80+ components, comprehensive documentation, and governance processes.",
    problem:
      "Each product team was designing independently, resulting in wildly inconsistent experiences. Users who used multiple products had to relearn interfaces. The lack of shared components meant teams were duplicating effort and introducing accessibility issues.",
    research: {
      methods: ["Stakeholder interviews", "Component audit", "Developer surveys", "Heuristic evaluation"],
      description:
        "We audited all 12 products, cataloging 340+ unique components (many duplicates). We interviewed 25 designers and 30 developers to understand pain points in their workflows.",
      insights: [
        {
          title: "Naming Chaos",
          description: "The same component had 8 different names across teams. Without shared language, collaboration was nearly impossible.",
          icon: "naming",
        },
        {
          title: "Token Resistance",
          description: "Developers wanted design tokens but designers were unfamiliar with the concept — education was key to adoption.",
          icon: "education",
        },
        {
          title: "Documentation Gap",
          description: "Existing component libraries had zero usage guidelines. Teams built components correctly but used them in wrong contexts.",
          icon: "docs",
        },
      ],
    },
    designStrategy:
      "We built a token-first foundation: every visual decision (color, spacing, typography, elevation) is a token. Components consume tokens, not raw values. This enables theming, dark mode, and brand customization. We paired every component with rich documentation including do/don't examples, accessibility notes, and code snippets.",
    wireframeImages: ["/images/projects/nova-wireframe-1.jpg"],
    prototypeImages: [],
    finalUIImages: [
      "/images/projects/nova-final-1.jpg",
      "/images/projects/nova-final-2.jpg",
    ],
    impact: [
      { label: "Handoff Time", value: "-60%", description: "Design to development handoff" },
      { label: "Component Reuse", value: "87%", description: "Of UI built from shared components" },
      { label: "Accessibility Score", value: "AA+", description: "WCAG compliance across all products" },
      { label: "Design Consistency", value: "94%", description: "Cross-product visual consistency score" },
    ],
    keyLearnings: [
      "Adoption is the hardest part of a design system — invest equally in evangelism and building.",
      "Token-based architecture makes the system infinitely more flexible than hardcoded values.",
      "Pairing each component with a 'when to use' and 'when not to use' guide prevents misuse.",
      "Regular office hours and design critiques build community around the system.",
    ],
  },
  {
    slug: "atlas-travel-app",
    title: "Atlas Travel Companion",
    category: "Mobile App",
    industry: "Travel & Hospitality",
    shortDescription: "An intelligent travel companion that adapts to your journey in real-time.",
    outcome: "4.8-star rating with 200K+ downloads in first quarter",
    thumbnail: "/images/projects/atlas-thumb.jpg",
    heroImage: "/images/projects/atlas-hero.jpg",
    year: "2023",
    duration: "5 months",
    role: "Lead Product Designer",
    team: "2 designers, 5 engineers, 1 PM",
    tools: ["Figma", "ProtoPie", "Dovetail", "Lottie"],
    featured: true,
    color: "#0EA5E9",
    overview:
      "Atlas is a mobile travel companion app that learns from user preferences and contextually adapts its recommendations based on location, time, weather, and travel style. The app focuses on authentic local experiences rather than tourist traps.",
    problem:
      "Travelers were overwhelmed by generic recommendation apps that don't understand personal preferences. Existing travel apps felt transactional rather than inspiring, and none adapted recommendations based on real-time context like weather or time of day.",
    research: {
      methods: ["Diary studies", "User interviews", "Prototype testing", "Competitive analysis"],
      description:
        "We conducted 2-week diary studies with 15 frequent travelers, interviewing them daily about their trip planning and on-the-ground decisions.",
      insights: [
        {
          title: "Decision Fatigue",
          description: "Travelers make 50+ micro-decisions daily. By day 3 of a trip, most default to 'whatever is nearby.'",
          icon: "decision",
        },
        {
          title: "Local Authenticity",
          description: "87% of users preferred 'hidden gem' recommendations over popular tourist spots.",
          icon: "authentic",
        },
        {
          title: "Spontaneity vs. Planning",
          description: "Users want a loose plan but crave spontaneous discoveries — the best travel moments are unplanned.",
          icon: "spontaneous",
        },
      ],
    },
    designStrategy:
      "We designed a 'smart serendipity' engine: the app builds a flexible daily canvas based on preferences, then surfaces unexpected discoveries at the right moment. The UI shifts from planning mode to exploration mode based on context.",
    wireframeImages: ["/images/projects/atlas-wireframe-1.jpg"],
    prototypeImages: ["/images/projects/atlas-proto-1.jpg"],
    finalUIImages: [
      "/images/projects/atlas-final-1.jpg",
      "/images/projects/atlas-final-2.jpg",
    ],
    impact: [
      { label: "App Rating", value: "4.8★", description: "Average across App Store and Google Play" },
      { label: "Downloads", value: "200K+", description: "In the first quarter after launch" },
      { label: "Daily Engagement", value: "23 min", description: "Average daily session duration" },
      { label: "Recommendation Accuracy", value: "91%", description: "Users found suggestions relevant" },
    ],
    keyLearnings: [
      "Context-aware UI that shifts based on user state creates a more natural experience.",
      "Reducing choices at the right moment is more valuable than providing more options.",
      "Lottie animations for weather and time transitions make the app feel alive without being heavy.",
    ],
  },
  {
    slug: "meridian-dashboard",
    title: "Meridian Analytics Dashboard",
    category: "Desktop App",
    industry: "Business Intelligence",
    shortDescription: "A data visualization platform that makes complex analytics intuitive for non-technical users.",
    outcome: "Reduced time-to-insight from 30 minutes to under 5 minutes",
    thumbnail: "/images/projects/meridian-thumb.jpg",
    heroImage: "/images/projects/meridian-hero.jpg",
    year: "2023",
    duration: "7 months",
    role: "Senior UX Designer",
    team: "3 designers, 7 engineers, 2 data scientists",
    tools: ["Figma", "D3.js concepts", "UserTesting", "FullStory"],
    featured: false,
    color: "#6366F1",
    overview:
      "Meridian is a desktop analytics platform designed to democratize data insights for business users who lack technical expertise. The project transformed a developer-focused tool into an intuitive, visual-first experience.",
    problem:
      "The existing dashboard required SQL knowledge to create custom reports. 80% of business users depended on the data team for basic insights, creating a bottleneck that delayed decision-making by an average of 3 days.",
    research: {
      methods: ["Task analysis", "Think-aloud testing", "Stakeholder mapping", "Usage analytics"],
      description:
        "We shadowed 12 business analysts for a full work week, documenting every interaction with data tools and identifying where they got stuck or needed help.",
      insights: [
        {
          title: "Question-First Thinking",
          description: "Business users think in questions ('Why did revenue drop?'), not in data structures or queries.",
          icon: "question",
        },
        {
          title: "Visual Pattern Recognition",
          description: "Users spotted trends 5x faster in charts than in tables, but existing tools defaulted to tabular views.",
          icon: "visual",
        },
        {
          title: "Collaboration Gap",
          description: "Insights died in individual screens — there was no way to share a specific view or annotation with colleagues.",
          icon: "collaborate",
        },
      ],
    },
    designStrategy:
      "We introduced a natural-language query bar: users type questions in plain English, and the system generates the appropriate visualization. A 'story mode' lets users annotate and share insight narratives with their team.",
    wireframeImages: ["/images/projects/meridian-wireframe-1.jpg"],
    prototypeImages: [],
    finalUIImages: ["/images/projects/meridian-final-1.jpg", "/images/projects/meridian-final-2.jpg"],
    impact: [
      { label: "Time to Insight", value: "<5 min", description: "Down from 30+ minutes" },
      { label: "Self-Service Rate", value: "78%", description: "Users creating own reports (was 20%)" },
      { label: "Data Team Requests", value: "-65%", description: "Fewer ad-hoc report requests" },
      { label: "Decision Speed", value: "3x", description: "Faster business decisions" },
    ],
    keyLearnings: [
      "Natural language interfaces lower the barrier to data exploration dramatically.",
      "Default visualizations should match the question type — bar charts for comparisons, lines for trends.",
      "Shareable insight stories transform analytics from a solo activity to a collaborative one.",
    ],
  },
  {
    slug: "bloom-ecommerce",
    title: "Bloom E-Commerce Redesign",
    category: "Website",
    industry: "Retail / E-Commerce",
    shortDescription: "A complete redesign of a sustainable fashion brand's online shopping experience.",
    outcome: "32% increase in conversion rate and 28% increase in average order value",
    thumbnail: "/images/projects/bloom-thumb.jpg",
    heroImage: "/images/projects/bloom-hero.jpg",
    year: "2024",
    duration: "3 months",
    role: "UX/UI Designer",
    team: "2 designers, 3 engineers",
    tools: ["Figma", "Hotjar", "Google Analytics", "Optimizely"],
    featured: false,
    color: "#059669",
    overview:
      "Bloom is a sustainable fashion brand that needed a complete e-commerce redesign to better communicate their brand values while improving the shopping experience and conversion funnel.",
    problem:
      "The existing site had a high bounce rate (72%) and cart abandonment rate (85%). Users reported that the site didn't feel premium enough for the price point, and the sustainability story was buried in a footer link.",
    research: {
      methods: ["Heatmap analysis", "Exit surveys", "User testing", "Competitor benchmarking"],
      description:
        "We analyzed 3 months of heatmap and session recording data, conducted exit surveys with 200+ bounced users, and tested the existing checkout flow with 10 target customers.",
      insights: [
        {
          title: "Story-Driven Shopping",
          description: "Users who read the sustainability story were 3x more likely to purchase — but only 8% ever found it.",
          icon: "story",
        },
        {
          title: "Size Confidence",
          description: "68% of cart abandonment was due to size uncertainty. Users wanted to see the clothes on similar body types.",
          icon: "size",
        },
        {
          title: "Premium Perception",
          description: "The visual design needed to match the premium price point — large imagery, generous whitespace, editorial layout.",
          icon: "premium",
        },
      ],
    },
    designStrategy:
      "We wove the sustainability narrative throughout the shopping experience — every product page tells the story of its materials and makers. An AI-powered fit recommendation system reduced size anxiety. The visual redesign used editorial-style layouts with cinematic product photography.",
    wireframeImages: ["/images/projects/bloom-wireframe-1.jpg"],
    prototypeImages: [],
    finalUIImages: ["/images/projects/bloom-final-1.jpg", "/images/projects/bloom-final-2.jpg"],
    impact: [
      { label: "Conversion Rate", value: "+32%", description: "From product view to purchase" },
      { label: "Avg Order Value", value: "+28%", description: "Users buying more per session" },
      { label: "Bounce Rate", value: "-41%", description: "More users staying on site" },
      { label: "Return Rate", value: "-55%", description: "Fewer sizing-related returns" },
    ],
    keyLearnings: [
      "Sustainability storytelling integrated into the shopping flow drives conversion, not just awareness.",
      "Fit recommendation tools directly impact bottom line by reducing returns and increasing purchase confidence.",
      "Editorial-style product layouts justify premium pricing better than grid-only approaches.",
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

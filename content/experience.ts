import type { ExperienceItem } from "@/types/experience"

export const experiences: ExperienceItem[] = [
  {
    id: "independent-software-engineer",
    role: "Independent Software Engineer",
    company: "Self-Employed",
    period: "May 2025 - Present",
    location: "Dhaka, Bangladesh (Remote)",
    current: true,
    impact: [
      "Built and maintain backendctl, an open-source backend project starter.",
      "Building a full-stack personal finance app (FastAPI, PostgreSQL, React).",
      "Following a structured AI-engineering roadmap — LLMs, agentic systems, applied tooling.",
      "Deepening backend architecture, authentication, and API design.",
    ],
    technologies: ["FastAPI", "Python", "PostgreSQL", "Next.js", "React"],
  },
  {
    id: "myze-senior-frontend-engineer",
    role: "Senior Frontend Engineer",
    company: "Myze",
    period: "Mar 2025 - Apr 2025",
    location: "Emmerich, Germany (Remote)",
    impact: [
      "Led a real-time tablet checkout interface in React and TypeScript with SumUp payments.",
      "Engineered WebSocket device pairing and live payment tracking, reducing wait times.",
      "Built reusable UI components and GraphQL-powered data tables.",
    ],
    technologies: ["React", "TypeScript", "GraphQL", "WebSockets"],
  },
  {
    id: "proptechcore-senior-frontend-engineer",
    role: "Senior Frontend Engineer",
    company: "ProptechCore",
    period: "Oct 2022 - Feb 2025",
    location: "Stockholm, Sweden (Remote)",
    impact: [
      "Transformed Figma design systems into production-grade React component libraries.",
      "Owned end-to-end onboarding and invitation flows across complex B2B SaaS UIs.",
      "Built real-time office energy dashboards on WebSocket data pipelines.",
    ],
    technologies: ["React", "TypeScript", "Next.js", "Design Systems"],
  },
  {
    id: "kiwibot-senior-frontend-engineer",
    role: "Senior Frontend Engineer",
    company: "Kiwibot",
    period: "Aug 2021 - May 2022",
    location: "Medellín, Colombia (Remote)",
    impact: [
      "Led refactor of a legacy console into a scalable Nx micro-frontend architecture.",
      "Implemented a real-time WebSocket task-notification system for supervisors.",
      "Applied a full brand and UI theme without dedicated design support.",
    ],
    technologies: ["React", "Nx", "Micro-frontends", "WebSockets"],
  },
  {
    id: "microverse-technical-support-engineer",
    role: "Technical Support Engineer",
    company: "Microverse",
    period: "Jun 2019 - Aug 2019",
    location: "San Francisco Bay Area, USA (Remote)",
    impact: [
      "Led 400+ code reviews in Ruby, Rails, JavaScript, and React for 50+ students.",
      "Mentored 20+ students to graduation and managed 10+ part-time reviewers.",
    ],
    technologies: ["Ruby", "Rails", "React", "JavaScript"],
  },
]

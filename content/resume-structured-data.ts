export const basicProfile = {
  name: "Dipto Karmakar",
  title: "Senior Software Engineer",
  tagline:
    "Building scalable React, TypeScript, and real-time web applications.",
  summary:
    "Senior Frontend Engineer with 10+ years of experience building scalable, high-performance React and TypeScript applications for B2B SaaS platforms. Experienced in translating complex product requirements and Figma design systems into reusable frontend architectures that improve developer productivity and user experience.",
  location: "Dhaka, Bangladesh (Remote)",
  email: "diptokmk47@gmail.com",
  phone: "+8801732646382",
  github: "https://github.com/dipto0321",
  linkedin: "https://www.linkedin.com/in/dipto-karmakar/",
} as const

export const engineeringImpact = [
  {
    title: "Real-Time Payment Checkout System",
    problem:
      "Tablet checkout experience lacked transparency and was slow for customers.",
    solution:
      "Implemented WebSocket device pairing and real-time payment tracking using React and TypeScript.",
    impact: "Reduced checkout waiting time by approximately 40%.",
    technologies: ["React", "TypeScript", "WebSockets", "GraphQL"],
  },
  {
    title: "Design System Architecture",
    problem: "UI development was inconsistent and slow across teams.",
    solution:
      "Converted Figma design system into reusable React component libraries.",
    impact: "Reduced UI development time by around 30%.",
    technologies: ["React", "TypeScript", "Design Systems"],
  },
  {
    title: "User Onboarding Optimization",
    problem: "Low product activation in SaaS platform.",
    solution: "Built optimized onboarding and invitation flow.",
    impact: "Improved activation rate by around 20%.",
    technologies: ["React", "TypeScript", "Next.js"],
  },
] as const

export const languageProficiency = [
  {
    language: "English",
    level: "C1 Advanced",
  },
  {
    language: "German",
    level: "Beginner (A1)",
  },
] as const

export const interests = [
  "System Design & Architecture",
  "Cloud Computing",
  "DevOps",
  "Data Science",
  "Machine Learning",
] as const

export const education = {
  institution: "United International University",
  program: "BSc Computer Science (Partial Coursework)",
  location: "Dhaka, Bangladesh",
  creditsCompleted: 33,
  years: "2013 - 2014",
} as const

export const certificates = [
  "Remote Full Stack Web Development Certificate",
  "Relational Database Design",
  "Tech on the Go: From Software Developer to Architect",
  "EF SET English Certificate (C1)",
] as const

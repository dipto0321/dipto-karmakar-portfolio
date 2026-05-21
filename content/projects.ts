import type { Project } from "@/types/project"

export const projects: Project[] = [
  {
    id: "personal-finance-tracker",
    title: "Personal Finance Tracker",
    description:
      "A privacy-first personal finance web app for expense tracking, budgeting, and long-term forecasting with clear visualizations and rules-based automation.",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Supabase",
      "Chart.js",
    ],
    architectureHighlights: [
      "Event-sourced transaction model for accurate audit and reconciliation",
      "Background jobs for statement import and category inference",
      "Client-side optimistic UI with server-side validation and conflict resolution",
    ],
    links: [
      { label: "Live (demo)", url: "#" },
      { label: "Source", url: "#" },
    ],
    featured: true,
    aiAssisted: true,
  },

  {
    id: "team-diary",
    title: "Team Diary — Personal Note-Taking",
    description:
      "A lightweight, collaborative note-taking app focused on team retrospectives, async decisions, and searchable personal knowledge — designed to reduce meeting noise and capture institutional memory.",
    techStack: ["SvelteKit", "TypeScript", "SQLite", "Vercel", "Algolia"],
    architectureHighlights: [
      "Delta-based CRDTs for offline-first collaborative editing",
      "Structured tagging and timeline views for team retrospectives",
      "Fine-grained access controls with team-level namespaces",
    ],
    links: [
      { label: "Prototype", url: "#" },
      { label: "Design notes", url: "#" },
    ],
    featured: false,
    aiAssisted: false,
  },

  {
    id: "fastapi-auth-scaffold",
    title: "FastAPI Auth Scaffolder",
    description:
      "A CLI generator that scaffolds production-ready FastAPI authentication stacks (JWT, OAuth2, RBAC) with tests and CI templates to accelerate backend onboarding.",
    techStack: ["Python", "FastAPI", "SQLModel", "Poetry", "GitHub Actions"],
    architectureHighlights: [
      "Pluggable strategies for JWT or OAuth providers",
      "Pre-wired role-based access control and permission decorators",
      "Test harness and example endpoints to speed developer ramp-up",
    ],
    links: [
      { label: "Repository", url: "#" },
      { label: "CLI docs", url: "#" },
    ],
    featured: false,
    aiAssisted: true,
  },
]

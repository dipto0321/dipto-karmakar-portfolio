import type { SkillGroup } from "@/types/skill"

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    skills: [
      "React",
      "TypeScript",
      "Next.js",
      "TailwindCSS",
      "Framer Motion",
      "Zustand",
      "React Query",
      "Radix UI",
      "Storybook",
    ],
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "Python",
      "FastAPI",
      "tRPC",
      "GraphQL",
      "REST",
      "PostgreSQL",
      "Redis",
      "Prisma",
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      "AWS",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "Vercel",
      "Supabase",
      "Nx",
      "Terraform",
    ],
  },
  {
    category: "Testing & Quality",
    skills: [
      "Vitest",
      "Jest",
      "Playwright",
      "Cypress",
      "Testing Library",
      "Chromatic",
    ],
  },
  {
    category: "Architecture & Practices",
    skills: [
      "Micro-frontends",
      "Monorepos",
      "Design systems",
      "Domain-driven design",
      "CQRS",
      "Event-driven systems",
      "CRDTs",
    ],
  },
]

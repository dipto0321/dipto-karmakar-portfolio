import type { Project } from "@/types/project"

export const projects: Project[] = [
  {
    id: "realtime-collab-platform",
    title: "Real-time Collaboration Platform",
    description:
      "A Google Docs-style co-editing platform with presence indicators, conflict-free replicated data types (CRDTs), and sub-50 ms sync latency for teams of up to 500 concurrent users.",
    techStack: [
      "React",
      "TypeScript",
      "Next.js",
      "Yjs",
      "WebSockets",
      "PostgreSQL",
      "Redis",
      "Node.js",
    ],
    architectureHighlights: [
      "CRDT-based operational transforms for conflict-free edits without locking",
      "Redis Pub/Sub fan-out to horizontal WebSocket nodes behind a load balancer",
      "Optimistic UI updates with server reconciliation in under 50 ms",
      "Incremental snapshot & restore strategy reducing storage costs by 60 %",
    ],
    links: [{ label: "Case study →", url: "#" }],
    featured: true,
  },
  {
    id: "b2b-saas-analytics",
    title: "B2B SaaS Analytics Dashboard",
    description:
      "High-throughput analytics dashboard processing 2 M+ events per day with drill-down filtering, cohort analysis, and white-label theming for enterprise customers.",
    techStack: [
      "React",
      "TypeScript",
      "Recharts",
      "TailwindCSS",
      "tRPC",
      "Prisma",
      "PostgreSQL",
      "AWS",
    ],
    architectureHighlights: [
      "Virtualised table + chart rendering keeping FPS above 60 on 100 k-row datasets",
      "Type-safe end-to-end API layer with tRPC; zero-cost runtime serialisation",
      "Per-tenant row-level security via PostgreSQL RLS policies",
      "Feature-flag-driven rollouts with Statsig, enabling A/B testing for power users",
    ],
    links: [{ label: "Case study →", url: "#" }],
    featured: true,
  },
  {
    id: "design-system",
    title: "Component Design System",
    description:
      "An accessible, themeable React component library shipped as an npm package — adopted across three product squads, reducing per-team UI work by an estimated 40 %.",
    techStack: [
      "React",
      "TypeScript",
      "Radix UI",
      "TailwindCSS",
      "Storybook",
      "Vitest",
      "Changesets",
    ],
    architectureHighlights: [
      "Headless primitives from Radix UI with opinionated styling layered on top",
      "Polymorphic `as` prop pattern for flexible element composition",
      "Automated visual regression snapshots via Chromatic on every PR",
      "Semantic versioning & changelog automation with Changesets",
    ],
    links: [{ label: "Case study →", url: "#" }],
    featured: true,
  },
  {
    id: "ci-platform-migration",
    title: "CI/CD Pipeline Modernisation",
    description:
      "Migrated a legacy Jenkins monolith to GitHub Actions with incremental builds, remote caching, and parallelised test sharding — cutting median CI time from 22 min to 4 min.",
    techStack: [
      "GitHub Actions",
      "Nx",
      "Docker",
      "AWS ECR",
      "Turborepo",
      "Playwright",
      "Jest",
    ],
    architectureHighlights: [
      "Nx affected-project detection limiting test/build scope to changed packages",
      "Remote Nx Cloud caching shared across all developer machines and CI runners",
      "Matrix strategy parallelising Playwright test shards across 8 workers",
      "Zero-downtime blue-green deployments using AWS ALB weighted routing",
    ],
    links: [{ label: "Case study →", url: "#" }],
    featured: false,
  },
]

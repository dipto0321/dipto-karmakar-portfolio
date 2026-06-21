import type { About } from "@/types/about"

export const about: About = {
  heading: "A systems thinker who likes to ship real things.",
  body: "Ten-plus years building interfaces for products people use every day — real-time checkout flows, B2B dashboards, and design systems adopted across teams. I care about the parts that are easy to ignore: latency, accessibility, type safety, and the developer experience that keeps a team fast. Lately I'm pushing deeper into full-stack and AI engineering, treating models as one more system to design around.",
  capabilities: [
    {
      label: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind"],
    },
    {
      label: "Full-stack",
      items: ["Node.js", "FastAPI", "Django", "PostgreSQL"],
    },
    {
      label: "Real-time & AI",
      items: ["WebSockets", "GraphQL", "LLMs", "Agentic systems"],
    },
    {
      label: "Craft",
      items: ["Design systems", "Performance", "Accessibility", "Testing"],
    },
  ],
}

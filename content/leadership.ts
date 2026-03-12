import type { LeadershipHighlight, LeadershipStat } from "@/types/leadership"

export const leadershipStats: LeadershipStat[] = [
  {
    value: "50+",
    label: "Engineers mentored",
    context: "Across multiple distributed teams",
  },
  {
    value: "3",
    label: "Team leads grown",
    context: "From IC to leadership roles",
  },
  {
    value: "8",
    label: "Cross-functional squads",
    context: "Led architecture decisions as tech lead",
  },
  {
    value: "2×",
    label: "Team velocity uplift",
    context: "After introducing structured code-review practices",
  },
]

export const leadershipHighlights: LeadershipHighlight[] = [
  {
    title: "Engineering culture",
    description:
      "Built async-first documentation habits (ADRs, runbooks, post-mortems) that cut production incident recovery time by 35 % across two teams.",
  },
  {
    title: "Technical hiring",
    description:
      "Designed and ran take-home challenge pipelines, standardised interview rubrics, and screened 100+ candidates for senior frontend roles.",
  },
  {
    title: "Knowledge sharing",
    description:
      "Ran bi-weekly internal tech talks and pair-programming sessions, creating a team library of documented patterns still in active use.",
  },
  {
    title: "Roadmap influence",
    description:
      "Collaborated with PMs and design to shape quarterly roadmaps, advocating for technical debt allocation and platform investment priorities.",
  },
]

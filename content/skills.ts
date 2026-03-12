import type { SkillGroup } from "@/types/skill"

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "TailwindCSS",
      "Material UI",
      "Redux",
      "Recoil",
      "Styled Components",
      "HTML5",
      "CSS3",
    ],
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "FastAPI",
      "Python",
      "Express.js",
      "Django",
      "Django REST Framework",
    ],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MongoDB"],
  },
  {
    category: "Testing & Quality",
    skills: ["Jest", "Vitest", "Pytest"],
  },
  {
    category: "DevOps",
    skills: ["Docker", "GitHub Actions", "Azure DevOps", "CI/CD", "GCP"],
  },
  {
    category: "Practices",
    skills: [
      "Agile",
      "Git",
      "Test Driven Development",
      "GitHub Flow",
      "System Design",
    ],
  },
]

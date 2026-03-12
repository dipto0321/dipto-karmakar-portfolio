import Link from "next/link"

import { SkillBadge } from "@/components/shared/skill-badge"
import { Card, CardContent } from "@/components/ui/card"
import type { Project } from "@/types/project"

interface ProjectCardProps {
  readonly project: Project
}

export function ProjectCard({ project }: Readonly<ProjectCardProps>) {
  return (
    <Card className="h-full transition-transform duration-300 hover:-translate-y-1">
      <CardContent className="flex h-full flex-col gap-6">
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-xl font-semibold text-foreground">
              {project.title}
            </h3>
            {project.featured ? (
              <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                Featured
              </span>
            ) : null}
          </div>
          <p className="leading-7 text-muted-foreground">
            {project.description}
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-medium text-foreground">Tech stack</p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((item) => (
              <SkillBadge key={item} label={item} />
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-medium text-foreground">
            Architecture highlights
          </p>
          <ul className="space-y-2 text-sm leading-6 text-muted-foreground">
            {project.architectureHighlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>

        <div className="mt-auto flex flex-wrap gap-4 pt-2">
          {project.links.map((link) => (
            <Link
              key={`${project.id}-${link.label}`}
              href={link.url}
              className="text-sm font-medium text-primary transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

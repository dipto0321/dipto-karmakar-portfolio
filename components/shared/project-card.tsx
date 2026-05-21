import Link from "next/link"

import { MotionCard } from "@/components/motion/motion-card"
import { SkillBadge } from "@/components/shared/skill-badge"
import { Card, CardContent } from "@/components/ui/card"
import type { Project } from "@/types/project"

interface ProjectCardProps {
  readonly project: Project
  readonly className?: string
}

export function ProjectCard({
  project,
  className,
}: Readonly<ProjectCardProps>) {
  return (
    <MotionCard className={`h-full w-full ${className ?? ""}`}>
      <Card className="glass-card card-hover h-full w-full overflow-hidden">
        <CardContent
          className={`flex h-full w-full flex-col gap-6 ${project.featured ? "p-6 sm:p-8" : "p-6"}`}
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-4">
              <h3
                className={`font-semibold text-foreground ${project.featured ? "text-lg" : "text-xl"}`}
              >
                {project.title}
              </h3>
              <div className="flex items-center gap-2">
                {project.featured ? (
                  <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    Featured
                  </span>
                ) : null}

                {project.aiAssisted ? (
                  <span className="rounded-full border border-accent/30 bg-accent/8 px-2 py-1 text-[11px] font-medium text-accent-foreground">
                    AI-Assisted
                  </span>
                ) : null}
              </div>
            </div>
            <p
              className={`${project.featured ? "text-sm leading-7 text-muted-foreground" : "leading-7 text-muted-foreground"}`}
            >
              {project.description}
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-medium text-foreground">Tech stack</p>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((item) => (
                <SkillBadge
                  key={item}
                  label={item}
                  className={
                    project.featured
                      ? "px-3 py-1.5 text-sm"
                      : "px-2 py-1 text-xs"
                  }
                />
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
    </MotionCard>
  )
}

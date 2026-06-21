import { ArrowUpRight } from "lucide-react"

import { Reveal } from "@/components/shared/reveal"
import { getProjects } from "@/lib/supabase/queries/projects"
import type { Project } from "@/types/project"

function ProjectRow({ project, index }: { project: Project; index: string }) {
  const href = project.links[0]?.url
  const isLink = Boolean(href && href !== "#")
  const metric = project.architectureHighlights[0]

  const inner = (
    <div className="grid gap-5 px-2 md:grid-cols-12 md:gap-8 md:px-4">
      <div className="flex items-start gap-4 md:col-span-5">
        <span className="font-mono text-xs text-muted-foreground/70 tabular-nums">
          {index}
        </span>
        <div>
          <h3 className="flex items-center gap-2 font-heading text-xl font-semibold tracking-tight text-foreground md:text-2xl">
            {project.title}
            {isLink && (
              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-cyan" />
            )}
          </h3>
          {metric && (
            <p className="mt-1 font-mono text-xs text-accent-cyan">{metric}</p>
          )}
        </div>
      </div>

      <div className="md:col-span-5">
        <p className="max-w-md text-sm leading-relaxed text-pretty text-muted-foreground">
          {project.description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <li
              key={tech}
              className="rounded border border-border bg-secondary/60 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <div className="md:col-span-2" />
    </div>
  )

  if (isLink) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="group relative block border-t border-border py-8 transition-colors hover:bg-card/40 md:py-10"
      >
        {inner}
      </a>
    )
  }

  return (
    <div className="group relative block border-t border-border py-8 md:py-10">
      {inner}
    </div>
  )
}

export async function ProjectsSection() {
  const projects = await getProjects()
  const hasProjects = projects.length > 0

  return (
    <section
      id="work"
      className="relative mx-auto max-w-6xl scroll-mt-20 px-6 py-20 md:py-28 lg:px-8"
    >
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="font-mono text-xs tracking-widest text-muted-foreground">
            {"// selected work"}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-balance text-foreground md:text-4xl">
            Systems I&apos;ve shipped
          </h2>
        </div>
        <p className="hidden max-w-xs text-right text-sm leading-relaxed text-muted-foreground sm:block">
          A few representative builds. Real traffic, real constraints, measured
          outcomes.
        </p>
      </div>

      {hasProjects ? (
        <div className="mt-12 border-b border-border">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 90}>
              <ProjectRow
                project={project}
                index={String(i + 1).padStart(2, "0")}
              />
            </Reveal>
          ))}
        </div>
      ) : (
        <p className="mt-12 border-t border-border pt-8 text-sm leading-relaxed text-muted-foreground">
          Detailed case studies are being written and published in public. In
          the meantime, the experience below covers real-world impact across a
          decade of work.
        </p>
      )}
    </section>
  )
}

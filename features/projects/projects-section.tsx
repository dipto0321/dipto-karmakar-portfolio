import { Section } from "@/components/layout/section"
import { AnimatedWrapper } from "@/components/shared/animated-wrapper"
import { Heading } from "@/components/shared/heading"
import { ProjectCard } from "@/components/shared/project-card"
import { projects } from "@/content/projects"

export function ProjectsSection() {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <Section id="projects" className="border-t border-border/40">
      <AnimatedWrapper>
        <Heading
          eyebrow="Selected work"
          title="Projects built for scale"
          description="A curated selection of systems I have designed, built, and shipped — each solving a real engineering problem at production scale."
        />
      </AnimatedWrapper>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((project, i) => (
          <AnimatedWrapper
            key={project.id}
            transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.08 }}
          >
            <ProjectCard project={project} />
          </AnimatedWrapper>
        ))}
      </div>

      {rest.length > 0 ? (
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {rest.map((project, i) => (
            <AnimatedWrapper
              key={project.id}
              transition={{
                duration: 0.45,
                ease: "easeOut",
                delay: featured.length * 0.08 + i * 0.08,
              }}
            >
              <ProjectCard project={project} />
            </AnimatedWrapper>
          ))}
        </div>
      ) : null}
    </Section>
  )
}

import { Section } from "@/components/layout/section"
import { MotionReveal } from "@/components/motion/motion-reveal"
import { MotionSection } from "@/components/motion/motion-section"
import { Heading } from "@/components/shared/heading"
import { ProjectCard } from "@/components/shared/project-card"
import { getProjects } from "@/lib/supabase/queries/projects"

export async function ProjectsSection() {
  const projects = await getProjects()
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)
  const hasProjects = featured.length > 0 || rest.length > 0

  return (
    <Section id="projects" className="border-t border-border/40">
      <MotionSection>
        <MotionReveal stagger>
          <MotionReveal>
            <Heading
              eyebrow="Selected work"
              title={
                hasProjects
                  ? "Projects built for scale"
                  : "Projects Coming Soon"
              }
              description={
                hasProjects
                  ? "A curated selection of systems I have designed, built, and shipped — each solving a real engineering problem at production scale."
                  : "I'm currently building in public and will share detailed case studies as projects mature. Explore my experience section for real-world impact metrics from my decade of work."
              }
            />
          </MotionReveal>

          {hasProjects && (
            <>
              <div className="mt-14 flex flex-col gap-6">
                {featured.length > 0 && (
                  <MotionReveal key={featured[0].id}>
                    <ProjectCard
                      project={featured[0]}
                      className="featured md:col-span-5"
                    />
                  </MotionReveal>
                )}

                <div className="grid grid-cols-1 gap-6 md:col-span-7 md:grid-cols-2">
                  {rest.map((project) => (
                    <MotionReveal key={project.id}>
                      <ProjectCard project={project} />
                    </MotionReveal>
                  ))}
                </div>
              </div>
            </>
          )}
        </MotionReveal>
      </MotionSection>
    </Section>
  )
}

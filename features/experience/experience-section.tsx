import { Section } from "@/components/layout/section"
import { MotionReveal } from "@/components/motion/motion-reveal"
import { MotionSection } from "@/components/motion/motion-section"
import { Heading } from "@/components/shared/heading"
import { TimelineItem } from "@/components/shared/timeline-item"
import { experiences } from "@/content/experience"

export function ExperienceSection() {
  return (
    <Section id="experience" className="border-t border-border/40">
      <MotionSection>
        <MotionReveal stagger>
          <MotionReveal>
            <Heading
              eyebrow="Career timeline"
              title="Where I have built and grown"
              description="10+ years of progressive engineering responsibility — from shipping features to leading architecture decisions and growing teams."
            />
          </MotionReveal>

          <div className="relative mt-14">
            {/* Vertical line */}
            <div className="absolute top-2 bottom-2 left-[0.34rem] hidden w-px bg-border/60 md:left-56 md:block" />

            <div className="space-y-10">
              {experiences.map((exp) => (
                <MotionReveal key={exp.id}>
                  <TimelineItem
                    period={exp.period}
                    role={exp.role}
                    company={exp.company}
                    impact={exp.impact}
                    technologies={exp.technologies}
                  />
                </MotionReveal>
              ))}
            </div>
          </div>
        </MotionReveal>
      </MotionSection>
    </Section>
  )
}

import { Section } from "@/components/layout/section"
import { AnimatedWrapper } from "@/components/shared/animated-wrapper"
import { Heading } from "@/components/shared/heading"
import { TimelineItem } from "@/components/shared/timeline-item"
import { experiences } from "@/content/experience"

export function ExperienceSection() {
  return (
    <Section id="experience" className="border-t border-border/40">
      <AnimatedWrapper>
        <Heading
          eyebrow="Career timeline"
          title="Where I have built and grown"
          description="10+ years of progressive engineering responsibility — from shipping features to leading architecture decisions and growing teams."
        />
      </AnimatedWrapper>

      <div className="relative mt-14">
        {/* Vertical line */}
        <div className="absolute top-2 bottom-2 left-[0.34rem] hidden w-px bg-border/60 md:left-44.5 md:block" />

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <AnimatedWrapper
              key={exp.id}
              transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.1 }}
            >
              <TimelineItem
                period={exp.period}
                role={exp.role}
                company={exp.company}
                impact={exp.impact}
                technologies={exp.technologies}
              />
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </Section>
  )
}

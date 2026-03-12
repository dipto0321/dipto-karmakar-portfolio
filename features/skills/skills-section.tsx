import { Section } from "@/components/layout/section"
import { MotionReveal } from "@/components/motion/motion-reveal"
import { MotionSection } from "@/components/motion/motion-section"
import { Heading } from "@/components/shared/heading"
import { SkillBadge } from "@/components/shared/skill-badge"
import { skillGroups } from "@/content/skills"

export function SkillsSection() {
  return (
    <Section id="skills" className="border-t border-border/40">
      <MotionSection>
        <MotionReveal stagger>
          <MotionReveal>
            <Heading
              eyebrow="Technical skills"
              title="Full-stack depth, not just breadth"
              description="Seven years of production React experience, paired with strong backend and infrastructure knowledge — I ship features end to end."
            />
          </MotionReveal>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <MotionReveal key={group.category}>
                <div className="space-y-5">
                  <h3 className="font-mono text-xs tracking-[0.25em] text-primary uppercase">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <SkillBadge key={skill} label={skill} />
                    ))}
                  </div>
                </div>
              </MotionReveal>
            ))}
          </div>
        </MotionReveal>
      </MotionSection>
    </Section>
  )
}

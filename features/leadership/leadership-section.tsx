import { Section } from "@/components/layout/section"
import { MotionCard } from "@/components/motion/motion-card"
import { MotionReveal } from "@/components/motion/motion-reveal"
import { MotionSection } from "@/components/motion/motion-section"
import { Heading } from "@/components/shared/heading"
import { Card, CardContent } from "@/components/ui/card"
import { leadershipHighlights, leadershipStats } from "@/content/leadership"

export function LeadershipSection() {
  return (
    <Section id="leadership" className="border-t border-border/40">
      <MotionSection>
        <MotionReveal stagger>
          <MotionReveal>
            <Heading
              eyebrow="Beyond the code"
              title="Leadership & team growth"
              description="Engineering excellence is a team sport. I invest as much energy in growing the people around me as in the systems we build together."
            />
          </MotionReveal>

          {/* Stats row */}
          <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {leadershipStats.map((stat) => (
              <MotionReveal key={stat.label}>
                <MotionCard>
                  <div className="flex flex-col gap-1.5 rounded-3xl border border-border/60 bg-card/60 p-6 transition-colors duration-300 hover:border-primary/40">
                    <span className="text-4xl font-bold tracking-tight text-primary">
                      {stat.value}
                    </span>
                    <span className="text-sm font-semibold text-foreground">
                      {stat.label}
                    </span>
                    <span className="text-xs leading-5 text-muted-foreground">
                      {stat.context}
                    </span>
                  </div>
                </MotionCard>
              </MotionReveal>
            ))}
          </div>

          {/* Highlights grid */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {leadershipHighlights.map((highlight) => (
              <MotionReveal key={highlight.title}>
                <MotionCard>
                  <Card className="h-full">
                    <CardContent className="space-y-3">
                      <h3 className="font-semibold text-foreground">
                        {highlight.title}
                      </h3>
                      <p className="text-sm leading-7 text-muted-foreground">
                        {highlight.description}
                      </p>
                    </CardContent>
                  </Card>
                </MotionCard>
              </MotionReveal>
            ))}
          </div>
        </MotionReveal>
      </MotionSection>
    </Section>
  )
}

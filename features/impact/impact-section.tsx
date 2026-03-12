import { impactStats } from "@/content/impact"
import { AnimatedWrapper } from "@/components/shared/animated-wrapper"
import { Heading } from "@/components/shared/heading"
import { Section } from "@/components/layout/section"
import { cn } from "@/lib/utils"

export function ImpactSection() {
  return (
    <Section id="impact" className="border-t border-border/40">
      <AnimatedWrapper>
        <Heading
          eyebrow="By the numbers"
          title="Engineering impact that ships"
          description="Metrics from a decade of building — measured by what actually matters: scale, reliability, and the people I help grow."
          align="center"
        />
      </AnimatedWrapper>

      <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
        {impactStats.map((stat, i) => (
          <AnimatedWrapper
            key={stat.label}
            transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.07 }}
          >
            <div
              className={cn(
                "group relative flex flex-col gap-2 rounded-3xl border border-border/60 bg-card/60 p-6 sm:p-8",
                "hover:border-primary/40 hover:bg-card/80 transition-colors duration-300"
              )}
            >
              <span className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
                {stat.value}
              </span>
              <span className="text-sm font-semibold text-foreground">
                {stat.label}
              </span>
              <span className="text-sm leading-6 text-muted-foreground">
                {stat.description}
              </span>
            </div>
          </AnimatedWrapper>
        ))}
      </div>
    </Section>
  )
}

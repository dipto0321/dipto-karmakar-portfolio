import { Reveal } from "@/components/shared/reveal"
import { impactStats } from "@/content/impact"

export function ImpactSection() {
  return (
    <section className="relative border-y border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-2 divide-x divide-y divide-border md:grid-cols-4 md:divide-y-0">
          {impactStats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 80}
              className="px-5 py-8 md:px-7"
            >
              <p className="font-heading text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1.5 text-sm text-foreground/80">{stat.label}</p>
              <p className="mt-3 font-mono text-[11px] tracking-wide text-muted-foreground">
                {stat.detail}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

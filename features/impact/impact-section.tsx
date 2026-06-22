import { SectionError } from "@/components/shared/section-error"
import { Reveal } from "@/components/shared/reveal"
import { getImpactStats } from "@/lib/supabase/queries/impact-stats"

export async function ImpactSection() {
  const { data: stats, error } = await getImpactStats()

  return (
    <section
      aria-label="Impact statistics"
      className="relative border-y border-border bg-card/30"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {error || !stats ? (
          <div className="py-8">
            <SectionError message="Impact stats could not be loaded from the CMS." />
          </div>
        ) : (
          <div className="grid grid-cols-2 divide-x divide-y divide-border md:grid-cols-4 md:divide-y-0">
            {stats.map((stat, i) => (
              <Reveal
                key={stat.label}
                delay={i * 80}
                className="px-5 py-8 md:px-7"
              >
                <p className="font-heading text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1.5 text-sm text-foreground/80">
                  {stat.label}
                </p>
                <p className="mt-3 font-mono text-[11px] tracking-wide text-muted-foreground">
                  {stat.detail}
                </p>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

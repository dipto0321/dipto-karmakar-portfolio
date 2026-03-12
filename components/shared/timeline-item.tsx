import { Card, CardContent } from "@/components/ui/card"

interface TimelineItemProps {
  readonly period: string
  readonly role: string
  readonly company: string
  readonly impact: string
  readonly technologies: string[]
}

export function TimelineItem({
  period,
  role,
  company,
  impact,
  technologies,
}: Readonly<TimelineItemProps>) {
  return (
    <div className="grid gap-4 md:grid-cols-[180px_1fr] md:gap-8">
      <div className="relative pl-6 text-sm text-muted-foreground md:pl-0">
        <span className="absolute top-2 left-0 size-3 rounded-full border border-primary/50 bg-primary/80 md:right-[-1.65rem] md:left-auto" />
        {period}
      </div>
      <Card>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <p className="text-sm text-primary">{company}</p>
            <h3 className="text-xl font-semibold text-foreground">{role}</h3>
            <p className="leading-7 text-muted-foreground">{impact}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-border/70 bg-background/60 px-3 py-1 text-xs text-muted-foreground"
              >
                {technology}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

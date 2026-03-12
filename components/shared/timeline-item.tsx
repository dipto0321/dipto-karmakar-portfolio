import { Card, CardContent } from "@/components/ui/card"

interface TimelineItemProps {
  readonly period: string
  readonly role: string
  readonly company: string
  readonly impact: string | readonly string[]
  readonly technologies: string[]
}

export function TimelineItem({
  period,
  role,
  company,
  impact,
  technologies,
}: Readonly<TimelineItemProps>) {
  const bullets = Array.isArray(impact) ? impact : [impact]

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
            <ul className="list-none space-y-1.5 leading-7 text-muted-foreground">
              {bullets.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary/60" />
                  {point}
                </li>
              ))}
            </ul>
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

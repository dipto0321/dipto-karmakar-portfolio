export function ImpactSkeleton() {
  return (
    <section className="relative border-y border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-2 divide-x divide-y divide-border md:grid-cols-4 md:divide-y-0">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="space-y-3 px-5 py-8 md:px-7">
              <div className="h-8 w-20 rounded bg-secondary/60 motion-safe:animate-pulse md:h-9" />
              <div className="h-3.5 w-28 rounded bg-secondary/60 motion-safe:animate-pulse" />
              <div className="h-3 w-36 rounded bg-secondary/60 motion-safe:animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

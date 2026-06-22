export function ProjectsSkeleton() {
  return (
    <section className="relative mx-auto max-w-6xl scroll-mt-20 px-6 py-20 md:py-28 lg:px-8">
      {/* header */}
      <div className="flex items-end justify-between gap-4">
        <div className="space-y-3">
          <div className="h-3 w-28 rounded bg-secondary/60 motion-safe:animate-pulse" />
          <div className="h-8 w-64 rounded bg-secondary/60 motion-safe:animate-pulse md:h-10" />
        </div>
        <div className="hidden h-10 w-56 rounded bg-secondary/60 motion-safe:animate-pulse sm:block" />
      </div>

      {/* project rows */}
      <div className="mt-12 space-y-0 border-b border-border">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="grid gap-5 border-t border-border px-2 py-8 md:grid-cols-12 md:gap-8 md:px-4 md:py-10"
          >
            <div className="flex items-start gap-4 md:col-span-5">
              <div className="mt-1 h-3 w-5 shrink-0 rounded bg-secondary/60 motion-safe:animate-pulse" />
              <div className="w-full space-y-2">
                <div className="h-6 w-3/4 rounded bg-secondary/60 motion-safe:animate-pulse md:h-7" />
                <div className="h-3 w-40 rounded bg-secondary/60 motion-safe:animate-pulse" />
              </div>
            </div>
            <div className="space-y-3 md:col-span-5">
              <div className="h-3.5 w-full rounded bg-secondary/60 motion-safe:animate-pulse" />
              <div className="h-3.5 w-5/6 rounded bg-secondary/60 motion-safe:animate-pulse" />
              <div className="flex flex-wrap gap-1.5 pt-1">
                {Array.from({ length: 4 }).map((_, j) => (
                  <div
                    key={j}
                    className="h-5 w-14 rounded bg-secondary/60 motion-safe:animate-pulse"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

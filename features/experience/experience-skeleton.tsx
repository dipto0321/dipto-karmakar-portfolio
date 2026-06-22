export function ExperienceSkeleton() {
  return (
    <section className="relative scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 lg:px-8">
        <div className="h-3 w-16 rounded bg-secondary/60 motion-safe:animate-pulse" />

        <div className="mt-6 grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* left — about */}
          <div className="space-y-6 lg:col-span-5">
            {/* avatar + name block */}
            <div className="flex items-center gap-4">
              <div className="h-20 w-20 shrink-0 rounded-lg bg-secondary/60 motion-safe:animate-pulse" />
              <div className="space-y-2">
                <div className="h-3 w-28 rounded bg-secondary/60 motion-safe:animate-pulse" />
                <div className="h-3 w-36 rounded bg-secondary/60 motion-safe:animate-pulse" />
                <div className="h-3 w-24 rounded bg-secondary/60 motion-safe:animate-pulse" />
              </div>
            </div>
            {/* heading */}
            <div className="space-y-2">
              <div className="h-8 w-3/4 rounded bg-secondary/60 motion-safe:animate-pulse md:h-10" />
              <div className="h-8 w-1/2 rounded bg-secondary/60 motion-safe:animate-pulse md:h-10" />
            </div>
            {/* body */}
            <div className="space-y-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="h-3.5 rounded bg-secondary/60 motion-safe:animate-pulse"
                  style={{ width: i === 3 ? "60%" : "100%" }}
                />
              ))}
            </div>
            {/* capabilities grid */}
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="space-y-2 bg-card p-4">
                  <div className="h-3 w-20 rounded bg-secondary/60 motion-safe:animate-pulse" />
                  {Array.from({ length: 3 }).map((_, j) => (
                    <div
                      key={j}
                      className="h-3 w-16 rounded bg-secondary/60 motion-safe:animate-pulse"
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* right — experience timeline */}
          <div className="lg:col-span-7">
            <div className="mb-8 h-3 w-20 rounded bg-secondary/60 motion-safe:animate-pulse" />
            <ol className="relative border-l border-border pl-0 space-y-0">
              {Array.from({ length: 4 }).map((_, i) => (
                <li key={i} className="relative pb-10 pl-8 last:pb-0">
                  <span className="absolute top-1.5 left-0 h-2.5 w-2.5 rounded-full border border-border bg-secondary/60" />
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <div className="h-5 w-56 rounded bg-secondary/60 motion-safe:animate-pulse" />
                    <div className="h-3 w-24 rounded bg-secondary/60 motion-safe:animate-pulse" />
                  </div>
                  <div className="mt-2 space-y-1.5">
                    {Array.from({ length: 2 }).map((_, j) => (
                      <div
                        key={j}
                        className="h-3.5 rounded bg-secondary/60 motion-safe:animate-pulse"
                        style={{ width: j === 1 ? "75%" : "100%" }}
                      />
                    ))}
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {Array.from({ length: 4 }).map((_, j) => (
                      <div
                        key={j}
                        className="h-5 w-14 rounded bg-secondary/60 motion-safe:animate-pulse"
                      />
                    ))}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}

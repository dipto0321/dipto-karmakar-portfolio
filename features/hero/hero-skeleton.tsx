export function HeroSkeleton() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto max-w-6xl px-6 pt-28 pb-20 md:pt-36 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="space-y-6 lg:col-span-8">
            {/* mono label */}
            <div className="h-3 w-32 rounded bg-secondary/60 motion-safe:animate-pulse" />
            {/* status chip */}
            <div className="h-7 w-40 rounded-full bg-secondary/60 motion-safe:animate-pulse" />
            {/* h1 */}
            <div className="space-y-3 pt-2">
              <div className="h-12 w-3/4 rounded bg-secondary/60 motion-safe:animate-pulse md:h-16" />
              <div className="h-12 w-1/2 rounded bg-secondary/60 motion-safe:animate-pulse md:h-16" />
            </div>
            {/* subtitle */}
            <div className="h-3 w-48 rounded bg-secondary/60 motion-safe:animate-pulse" />
            {/* headline */}
            <div className="space-y-2">
              <div className="h-4 w-full max-w-xl rounded bg-secondary/60 motion-safe:animate-pulse" />
              <div className="h-4 w-5/6 max-w-xl rounded bg-secondary/60 motion-safe:animate-pulse" />
              <div className="h-4 w-2/3 max-w-xl rounded bg-secondary/60 motion-safe:animate-pulse" />
            </div>
            {/* buttons */}
            <div className="flex flex-wrap gap-3 pt-1">
              <div className="h-9 w-28 rounded-md bg-secondary/60 motion-safe:animate-pulse" />
              <div className="h-9 w-24 rounded-md bg-secondary/60 motion-safe:animate-pulse" />
              <div className="h-9 w-28 rounded-md bg-secondary/60 motion-safe:animate-pulse" />
            </div>
          </div>

          <div className="lg:col-span-4 lg:justify-end">
            <div className="h-52 w-full rounded-lg border border-border bg-secondary/40 motion-safe:animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}

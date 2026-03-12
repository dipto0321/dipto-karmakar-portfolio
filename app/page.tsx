import Link from "next/link"

import { siteConfig } from "@/content/site"

export default function Page() {
  return (
    <main className="min-h-svh">
      <section className="mx-auto flex min-h-svh w-full max-w-5xl flex-col justify-center gap-10 px-6 py-24 sm:px-10">
        <div className="space-y-6">
          <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
            Portfolio Foundation
          </p>
          <div className="space-y-4">
            <h1 className="max-w-4xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              {siteConfig.name}
            </h1>
            <p className="text-xl text-muted-foreground sm:text-2xl">{siteConfig.title}</p>
            <p className="max-w-3xl text-balance text-base leading-8 text-muted-foreground sm:text-lg">
              {siteConfig.description}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href={siteConfig.contact.linkedin}
            className="rounded-full border border-border bg-card px-5 py-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            LinkedIn
          </Link>
          <Link
            href={siteConfig.contact.github}
            className="rounded-full border border-border bg-card px-5 py-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            GitHub
          </Link>
          <Link
            href={siteConfig.contact.email}
            className="rounded-full border border-border bg-card px-5 py-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Email
          </Link>
        </div>
      </section>
    </main>
  )
}

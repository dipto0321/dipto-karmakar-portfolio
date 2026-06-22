import { ArrowUpRight, FileText, Mail } from "lucide-react"

import { InteractiveGrid } from "@/components/shared/interactive-grid"
import { SectionError } from "@/components/shared/section-error"
import { GithubIcon } from "@/components/shared/social-icons"
import { TerminalStatus } from "@/components/shared/terminal-status"
import { siteConfig } from "@/content/site"
import { getHeroContent } from "@/lib/supabase/queries/hero-content"

function StatusChip({ availability }: Readonly<{ availability: string }>) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 font-mono text-xs text-muted-foreground backdrop-blur">
      <span className="relative flex h-2 w-2">
        <span className="animate-pulse-soft absolute inline-flex h-full w-full rounded-full bg-accent-cyan" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-cyan" />
      </span>
      <span className="text-foreground/80">{availability}</span>
    </div>
  )
}

export async function HeroSection() {
  const { data: hero, error } = await getHeroContent()

  return (
    <section className="relative overflow-hidden">
      <div className="bg-dot-grid pointer-events-none absolute inset-0 opacity-60" />
      <InteractiveGrid />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-120 w-205 -translate-x-1/2 rounded-full bg-accent-cyan/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 pt-28 pb-20 md:pt-36 lg:px-8">
        {error || !hero ? (
          <SectionError message="Hero content could not be loaded from the CMS." />
        ) : (
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-8">
              <div className="animate-rise-in">
                <p className="font-mono text-xs tracking-widest text-muted-foreground">
                  {"// dipto karmakar"}
                </p>
                <div className="mt-6">
                  <StatusChip availability={hero.availability} />
                </div>
              </div>

              <h1
                className="animate-rise-in mt-8 font-heading text-5xl font-semibold tracking-tight text-balance text-foreground sm:text-6xl md:text-7xl"
                style={{ animationDelay: "80ms" }}
              >
                {siteConfig.name}
              </h1>

              <p
                className="animate-rise-in mt-4 font-mono text-sm tracking-wide text-accent-cyan"
                style={{ animationDelay: "140ms" }}
              >
                {hero.title}
              </p>

              <p
                className="animate-rise-in mt-6 max-w-xl text-lg leading-relaxed text-pretty text-muted-foreground"
                style={{ animationDelay: "200ms" }}
              >
                {hero.headline}
              </p>

              <div
                className="animate-rise-in mt-9 flex flex-wrap items-center gap-3"
                style={{ animationDelay: "260ms" }}
              >
                <a
                  href={siteConfig.resumePath}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-md bg-accent-cyan px-4 py-2.5 text-sm font-medium text-accent-cyan-foreground transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <FileText className="h-4 w-4" />
                  Resume
                </a>
                <a
                  href={siteConfig.contact.email}
                  className="group inline-flex items-center gap-2 rounded-md border border-border bg-card/40 px-4 py-2.5 text-sm font-medium text-foreground/90 transition-colors duration-200 hover:border-accent-cyan/40 hover:text-foreground"
                >
                  <Mail className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-accent-cyan" />
                  Email
                </a>
                <a
                  href={siteConfig.contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-md border border-border bg-card/40 px-4 py-2.5 text-sm font-medium text-foreground/90 transition-colors duration-200 hover:border-accent-cyan/40 hover:text-foreground"
                >
                  <GithubIcon className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-accent-cyan" />
                  GitHub
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
                </a>
              </div>
            </div>

            <div
              className="animate-rise-in flex items-start lg:col-span-4 lg:justify-end"
              style={{ animationDelay: "320ms" }}
            >
              <TerminalStatus />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

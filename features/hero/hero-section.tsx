import Link from "next/link"

import { Section } from "@/components/layout/section"
import { ThemeToggle } from "@/components/layout/theme-toggle"
import { AnimatedWrapper } from "@/components/shared/animated-wrapper"
import { GradientBorder } from "@/components/shared/gradient-border"
import { SkillBadge } from "@/components/shared/skill-badge"
import { Card, CardContent } from "@/components/ui/card"
import { siteConfig } from "@/content/site"
import { HeroActions } from "@/features/hero/hero-actions"

export function HeroSection() {
  return (
    <Section
      className="relative overflow-hidden pt-6 sm:pt-8 lg:pt-10"
      containerClassName="space-y-12"
    >
      <div className="flex justify-end">
        <ThemeToggle />
      </div>

      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:gap-12">
        <AnimatedWrapper className="space-y-8">
          <div className="space-y-6">
            <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
              Senior Software Engineer
            </p>
            <div className="space-y-4">
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-7xl">
                {siteConfig.name}
              </h1>
              <p className="text-xl text-muted-foreground sm:text-2xl lg:text-3xl">
                {siteConfig.title}
              </p>
            </div>
            <div className="space-y-4">
              {siteConfig.overview.map((paragraph) => (
                <p
                  key={paragraph}
                  className="max-w-3xl text-base leading-8 text-balance text-muted-foreground sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <HeroActions />

          <div className="flex flex-wrap gap-3">
            <Link
              href={siteConfig.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border/80 bg-card/70 px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              LinkedIn
            </Link>
            <Link
              href={siteConfig.contact.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border/80 bg-card/70 px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              GitHub
            </Link>
            <Link
              href={siteConfig.contact.email}
              className="rounded-full border border-border/80 bg-card/70 px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Email
            </Link>
          </div>
        </AnimatedWrapper>

        <AnimatedWrapper
          transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
        >
          <GradientBorder>
            <Card className="rounded-[calc(var(--radius-3xl)-1px)] border-0 bg-card/90">
              <CardContent className="space-y-8">
                <div className="space-y-3">
                  <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
                    Focus Areas
                  </p>
                  <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                    Systems thinking for product teams shipping at scale.
                  </h2>
                  <p className="leading-7 text-muted-foreground">
                    Strong frontend architecture, fast execution, and pragmatic
                    collaboration across design, product, and engineering.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {siteConfig.specializations.map((specialization) => (
                    <SkillBadge
                      key={specialization}
                      label={specialization}
                      className="bg-background/70 text-foreground"
                    />
                  ))}
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-border/70 bg-background/60 p-5">
                    <p className="text-sm text-muted-foreground">Core stack</p>
                    <p className="mt-2 text-lg font-medium text-foreground">
                      React, Next.js, TypeScript, Node.js
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border/70 bg-background/60 p-5">
                    <p className="text-sm text-muted-foreground">
                      Delivery style
                    </p>
                    <p className="mt-2 text-lg font-medium text-foreground">
                      Clean systems, measurable impact, low-noise execution
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </GradientBorder>
        </AnimatedWrapper>
      </div>
    </Section>
  )
}

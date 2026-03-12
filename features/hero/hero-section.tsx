import Image from "next/image"

import { Section } from "@/components/layout/section"
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
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:gap-12">
        <AnimatedWrapper className="space-y-10">
          <div className="space-y-7">
            {/* Eyebrow */}
            <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
              Senior Software Engineer
            </p>

            {/* Avatar + name/title */}
            <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-end sm:gap-6">
              <div className="gradient-border-animated gradient-border-no-glow w-fit shrink-0 rounded-[20px] p-px">
                <div className="relative h-44 w-36 overflow-hidden rounded-[19px] sm:h-52 sm:w-44">
                  <Image
                    src={siteConfig.avatarPath}
                    alt={siteConfig.name}
                    fill
                    sizes="(min-width: 640px) 176px, 144px"
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>
              <div className="sm:pb-2">
                <h1 className="text-4xl leading-tight font-semibold tracking-tight sm:text-4xl lg:text-6xl">
                  {siteConfig.name}
                </h1>
                <p className="mt-2 text-lg text-muted-foreground sm:text-xl lg:text-2xl">
                  {siteConfig.title}
                </p>
              </div>
            </div>

            {/* Overview */}
            <div className="space-y-4">
              {siteConfig.overview.map((paragraph) => (
                <p
                  key={paragraph}
                  className="max-w-xl text-base leading-8 text-balance text-muted-foreground sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* CTA + social icons */}
          <HeroActions />

          {/* Scroll indicator */}
          <div className="flex items-center gap-3 pt-2">
            <div className="flex h-9 w-5 items-start justify-center rounded-full border-2 border-border/60 p-1">
              <div className="h-1.5 w-1 animate-bounce rounded-full bg-primary/70" />
            </div>
            <span className="font-mono text-xs tracking-widest text-muted-foreground/60 uppercase">
              Scroll to explore
            </span>
          </div>
        </AnimatedWrapper>

        <AnimatedWrapper
          transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
        >
          <GradientBorder>
            <Card className="rounded-[calc(var(--radius-3xl)-1px)] border-0 bg-card">
              <CardContent className="space-y-8">
                {/* Focus areas */}
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

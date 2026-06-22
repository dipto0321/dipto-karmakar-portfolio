import { Briefcase } from "lucide-react"
import Image from "next/image"

import { SectionError } from "@/components/shared/section-error"
import { Reveal } from "@/components/shared/reveal"
import { siteConfig } from "@/content/site"
import { getAboutContent } from "@/lib/supabase/queries/about-content"
import { getExperiences } from "@/lib/supabase/queries/experiences"
import type { ExperienceItem } from "@/types/experience"

function RoleRow({
  role,
  delay,
}: Readonly<{ role: ExperienceItem; delay: number }>) {
  return (
    <Reveal as="li" delay={delay} className="relative pb-10 pl-8 last:pb-0">
      <span className="absolute top-1.5 left-0 h-2.5 w-2.5 rounded-full border border-accent-cyan bg-background ring-4 ring-background" />
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="font-heading text-lg font-semibold tracking-tight text-foreground">
          {role.role}
          <span className="text-muted-foreground"> · {role.company}</span>
        </h3>
        <span className="font-mono text-xs text-muted-foreground tabular-nums">
          {role.period}
        </span>
      </div>
      {(role.contractType ?? role.workMode ?? role.location) && (
        <p className="mt-0.5 font-mono text-[11px] text-muted-foreground/70">
          {[role.contractType, role.workMode, role.location]
            .filter(Boolean)
            .join(" · ")}
        </p>
      )}
      <ul className="mt-2 max-w-xl space-y-1.5">
        {role.impact.map((point) => (
          <li
            key={point}
            className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
          >
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-cyan/60" />
            {point}
          </li>
        ))}
      </ul>
      <ul className="mt-3 flex flex-wrap gap-1.5">
        {role.technologies.map((tag) => (
          <li
            key={tag}
            className="rounded border border-border bg-secondary/60 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
          >
            {tag}
          </li>
        ))}
      </ul>
    </Reveal>
  )
}

export async function ExperienceSection() {
  const [{ data: experiences }, { data: about }] = await Promise.all([
    getExperiences(),
    getAboutContent(),
  ])

  return (
    <section
      id="about"
      aria-label="About and experience"
      className="relative scroll-mt-20 border-t border-border"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 lg:px-8">
        <p className="font-mono text-xs tracking-widest text-muted-foreground">
          {"// about"}
        </p>

        {!experiences || !about ? (
          <div className="mt-6">
            <SectionError message="About and experience content could not be loaded from the CMS." />
          </div>
        ) : (
          <div className="mt-6 grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Narrative + capabilities */}
            <div className="lg:col-span-5">
              <Reveal delay={0}>
                <div className="group mb-8 flex items-center gap-4">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-border ring-1 ring-accent-cyan/20">
                    <Image
                      src={siteConfig.avatarPath}
                      alt={`Portrait of ${siteConfig.name}`}
                      fill
                      sizes="80px"
                      className="object-cover object-top grayscale transition-all duration-500 group-hover:grayscale-0"
                    />
                    <span className="pointer-events-none absolute inset-0 bg-accent-cyan/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                  <div className="font-mono text-xs leading-relaxed text-muted-foreground">
                    <p className="text-foreground/90">{siteConfig.name}</p>
                    <p>
                      {siteConfig.locationShort} · {siteConfig.timezone}
                    </p>
                    <p className="text-accent-cyan">10+ yrs shipping</p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="font-heading text-3xl leading-tight font-semibold tracking-tight text-balance text-foreground md:text-4xl">
                  {about.heading}
                </h2>
                <p className="mt-5 text-sm leading-relaxed text-pretty text-muted-foreground md:text-base">
                  {about.body}
                </p>
              </Reveal>

              <Reveal delay={200}>
                <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border">
                  {about.capabilities.map((cap) => (
                    <div key={cap.label} className="bg-card p-4">
                      <p className="font-mono text-[11px] tracking-widest text-accent-cyan uppercase">
                        {cap.label}
                      </p>
                      <ul className="mt-2 space-y-1">
                        {cap.items.map((item) => (
                          <li
                            key={item}
                            className="text-sm text-muted-foreground"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Experience timeline */}
            <div className="lg:col-span-7">
              <h3
                id="experience-heading"
                className="mb-8 flex items-center gap-2 font-mono text-xs tracking-widest text-muted-foreground"
              >
                <Briefcase
                  className="h-3.5 w-3.5 text-accent-cyan"
                  aria-hidden="true"
                />
                experience
              </h3>
              <ol
                aria-labelledby="experience-heading"
                className="relative border-l border-border pl-0"
              >
                {experiences.map((role, i) => (
                  <RoleRow key={role.id} role={role} delay={i * 80} />
                ))}
              </ol>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

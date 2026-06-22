import { ArrowUpRight, Mail, MapPin } from "lucide-react"

import { Reveal } from "@/components/shared/reveal"
import { GithubIcon, LinkedinIcon } from "@/components/shared/social-icons"
import { siteConfig } from "@/content/site"

const email = siteConfig.contact.email.replace("mailto:", "")

const channels = [
  {
    label: "Email",
    value: email,
    href: siteConfig.contact.email,
    icon: Mail,
  },
  {
    label: "GitHub",
    value: siteConfig.contact.github.replace("https://", ""),
    href: siteConfig.contact.github,
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    value: siteConfig.contact.linkedin
      .replace("https://www.", "")
      .replace(/\/$/, ""),
    href: siteConfig.contact.linkedin,
    icon: LinkedinIcon,
  },
]

export function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-dot-grid relative border-t border-border"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-32 lg:px-8">
        <p className="font-mono text-xs tracking-widest text-muted-foreground">
          {"// contact"}
        </p>

        <div className="mt-6 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 font-mono text-xs text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="animate-pulse-soft absolute inline-flex h-full w-full rounded-full bg-accent-cyan" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-cyan" />
              </span>
              {siteConfig.availability}
            </div>

            <h2 className="mt-6 font-heading text-4xl leading-[1.05] font-semibold tracking-tight text-balance text-foreground md:text-6xl">
              Let&apos;s build something
              <br />
              <span className="text-accent-cyan">worth shipping.</span>
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-relaxed text-pretty text-muted-foreground md:text-base">
              Open to senior and lead engineering roles, and to interesting
              full-stack or AI problems. Currently remote; open to relocation
              for the right opportunity. The fastest way to reach me is email —
              I read everything.
            </p>

            <a
              href={siteConfig.contact.email}
              className="group mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Mail className="h-4 w-4" />
              {email}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-5">
            <ul className="overflow-hidden rounded-lg border border-border">
              {channels.map((c) => (
                <li
                  key={c.label}
                  className="border-b border-border last:border-b-0"
                >
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                    className="group flex items-center gap-4 bg-card px-5 py-4 transition-colors hover:bg-secondary/60"
                  >
                    <c.icon className="h-4 w-4 text-accent-cyan" />
                    <div className="min-w-0 flex-1">
                      <p className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
                        {c.label}
                      </p>
                      <p className="truncate text-sm text-foreground">
                        {c.value}
                      </p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex items-center gap-2 px-1 font-mono text-xs text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 text-accent-cyan" />
              {siteConfig.locationShort} · {siteConfig.timezone} · remote · open
              to relocation
            </div>
          </Reveal>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 sm:flex-row lg:px-8">
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            Next.js + TypeScript · Supabase · Designed with v0 · Pair-programmed
            with Claude
          </p>
        </div>
      </div>
    </section>
  )
}

"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

import { Container } from "@/components/layout/container"
import { ThemeToggle } from "@/components/layout/theme-toggle"
import { siteConfig } from "@/content/site"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#leadership", label: "Leadership" },
] as const

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-3"
            aria-label="Home"
          >
            <span className="flex size-8 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary ring-1 ring-primary/30 transition-colors group-hover:bg-primary/25">
              DK
            </span>
            <span className="hidden font-semibold text-foreground sm:inline-block">
              {siteConfig.name}
            </span>
          </Link>

          {/* Nav */}
          <nav
            className="hidden items-center gap-1 md:flex"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Link
              href={siteConfig.contact.email}
              className="hidden rounded-full border border-border/80 bg-card/70 px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
            >
              Hire me
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </Container>
    </header>
  )
}

"use client"

import { ArrowUpRight, Menu, X } from "lucide-react"
import { useEffect, useState } from "react"

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2 font-mono text-sm font-medium tracking-tight text-foreground"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-pulse-soft absolute inline-flex h-full w-full rounded-full bg-accent-cyan" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-cyan" />
          </span>
          <span className="text-accent-cyan">~/</span>Dipto
        </a>

        <div className="hidden items-center gap-1 sm:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="group hidden items-center gap-1.5 rounded-md border border-border bg-secondary/60 px-3 py-1.5 font-mono text-xs text-foreground transition-colors hover:border-accent-cyan/50 hover:bg-secondary sm:inline-flex"
          >
            Get in touch
            <ArrowUpRight className="h-3.5 w-3.5 text-accent-cyan transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-secondary/60 text-foreground transition-colors hover:bg-secondary sm:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-border bg-background/95 backdrop-blur-md transition-[max-height] duration-300 ease-out sm:hidden ${
          open ? "max-h-80" : "max-h-0 border-t-transparent"
        }`}
      >
        <div className="flex flex-col px-6 py-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-border py-3 font-mono text-sm text-muted-foreground transition-colors last:border-b-0 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="group mt-4 inline-flex items-center justify-center gap-1.5 rounded-md bg-accent-cyan px-4 py-2.5 font-mono text-sm font-medium text-accent-cyan-foreground"
          >
            Get in touch
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </header>
  )
}

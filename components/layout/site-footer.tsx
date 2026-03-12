import Link from "next/link"

import { Container } from "@/components/layout/container"
import { siteConfig } from "@/content/site"

const year = new Date().getFullYear()

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 py-12">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Brand */}
          <div className="space-y-1 text-center sm:text-left">
            <p className="font-semibold text-foreground">{siteConfig.name}</p>
            <p className="text-sm text-muted-foreground">{siteConfig.title}</p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <Link
              href={siteConfig.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              LinkedIn
            </Link>
            <Link
              href={siteConfig.contact.github}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              GitHub
            </Link>
            <Link
              href={siteConfig.contact.email}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Email
            </Link>
          </div>

          {/* Legal */}
          <p className="text-xs text-muted-foreground">
            © {year} {siteConfig.name}
          </p>
        </div>
      </Container>
    </footer>
  )
}

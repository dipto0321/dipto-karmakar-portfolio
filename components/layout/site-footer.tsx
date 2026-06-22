import { siteConfig } from "@/content/site"

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 sm:flex-row lg:px-8">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
        <p className="font-mono text-xs text-muted-foreground">
          Next.js + TypeScript · Supabase · Designed with v0 · Pair-programmed
          with Claude
        </p>
      </div>
    </footer>
  )
}

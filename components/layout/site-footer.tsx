import { Container } from "@/components/layout/container"

const year = new Date().getFullYear()

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 bg-linear-to-b from-transparent to-card/30 py-10">
      <Container>
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="font-mono text-[11px] tracking-[0.28em] text-muted-foreground/70 uppercase">
            Let’s build something meaningful together.
          </p>
          <div className="h-px w-24 bg-linear-to-r from-transparent via-primary/45 to-transparent" />
          <p className="text-xs text-muted-foreground">
            © {year} Built with ❤️ by Dipto Karmakar. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}

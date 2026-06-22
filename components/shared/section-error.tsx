import { WifiOff } from "lucide-react"

interface SectionErrorProps {
  message?: string
}

export function SectionError({
  message = "Content temporarily unavailable. Please check back shortly.",
}: SectionErrorProps) {
  return (
    <div className="flex items-start gap-3 rounded-lg border border-border bg-card/30 px-4 py-4">
      <WifiOff className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
      <div>
        <p className="font-mono text-xs font-medium text-foreground/70">
          Unable to load content
        </p>
        <p className="mt-1 font-mono text-[11px] text-muted-foreground">
          {message}
        </p>
      </div>
    </div>
  )
}

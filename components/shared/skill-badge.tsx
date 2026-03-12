import { cn } from "@/lib/utils"

interface SkillBadgeProps {
  readonly label: string
  readonly className?: string
}

export function SkillBadge({ label, className }: Readonly<SkillBadgeProps>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border/80 bg-muted/50 px-3 py-1.5 text-sm text-muted-foreground",
        className
      )}
    >
      {label}
    </span>
  )
}

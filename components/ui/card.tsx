import type { ComponentPropsWithoutRef } from "react"

import { cn } from "@/lib/utils"

export function Card({
  className,
  ...props
}: Readonly<ComponentPropsWithoutRef<"div">>) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-border/80 bg-card/80 text-card-foreground shadow-[0_20px_80px_-40px_rgba(15,23,42,0.65)] backdrop-blur-sm",
        className
      )}
      {...props}
    />
  )
}

export function CardContent({
  className,
  ...props
}: Readonly<ComponentPropsWithoutRef<"div">>) {
  return <div className={cn("p-6 sm:p-8", className)} {...props} />
}

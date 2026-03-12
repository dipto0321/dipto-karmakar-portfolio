import type { ComponentPropsWithoutRef } from "react"

import { cn } from "@/lib/utils"

export function GradientBorder({
  className,
  ...props
}: Readonly<ComponentPropsWithoutRef<"div">>) {
  return (
    <div
      className={cn(
        "rounded-[inherit] bg-[linear-gradient(135deg,rgba(96,165,250,0.38),rgba(16,185,129,0.18),rgba(255,255,255,0.04))] p-px",
        className
      )}
      {...props}
    />
  )
}

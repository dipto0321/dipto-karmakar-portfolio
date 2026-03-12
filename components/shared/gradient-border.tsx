import type { ComponentPropsWithoutRef } from "react"

import { cn } from "@/lib/utils"

export function GradientBorder({
  className,
  ...props
}: Readonly<ComponentPropsWithoutRef<"div">>) {
  return (
    <div
      className={cn("gradient-border-animated rounded-[28px] p-px", className)}
      {...props}
    />
  )
}

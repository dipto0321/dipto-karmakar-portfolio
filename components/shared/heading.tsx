import type { ReactNode } from "react"

import { MotionHeading } from "@/components/motion/motion-heading"
import { cn } from "@/lib/utils"

interface HeadingProps {
  readonly eyebrow?: string
  readonly title: string
  readonly description?: string
  readonly align?: "left" | "center"
  readonly action?: ReactNode
}

export function Heading({
  eyebrow,
  title,
  description,
  align = "left",
  action,
}: Readonly<HeadingProps>) {
  return (
    <div className={cn("space-y-4", align === "center" && "text-center")}>
      {eyebrow ? (
        <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
          {eyebrow}
        </p>
      ) : null}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div
          className={cn("space-y-4", align === "center" && "mx-auto max-w-3xl")}
        >
          <h2 className="text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl lg:text-5xl">
            <MotionHeading text={title} />
          </h2>
          {description ? (
            <p className="max-w-3xl text-base leading-8 text-balance text-muted-foreground sm:text-lg">
              {description}
            </p>
          ) : null}
        </div>
        {action}
      </div>
    </div>
  )
}

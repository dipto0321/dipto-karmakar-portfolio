import type { ComponentPropsWithoutRef } from "react"

import { Container } from "@/components/layout/container"
import { cn } from "@/lib/utils"

interface SectionProps extends ComponentPropsWithoutRef<"section"> {
  readonly containerClassName?: string
}

export function Section({
  className,
  containerClassName,
  children,
  ...props
}: Readonly<SectionProps>) {
  return (
    <section className={cn("py-16 sm:py-20 lg:py-24", className)} {...props}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  )
}

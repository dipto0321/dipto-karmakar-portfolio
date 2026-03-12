"use client"

import type { ComponentPropsWithoutRef, ReactNode } from "react"

import { motion, useReducedMotion } from "framer-motion"

import { cardHover, cardHoverTransition } from "@/lib/animations/hover"
import { cn } from "@/lib/utils"

interface MotionCardProps extends ComponentPropsWithoutRef<typeof motion.div> {
  readonly children: ReactNode
}

export function MotionCard({
  children,
  className,
  ...props
}: Readonly<MotionCardProps>) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      whileHover={shouldReduceMotion ? undefined : cardHover}
      transition={cardHoverTransition}
      className={cn(
        "transition-shadow duration-300 hover:shadow-[0_24px_60px_-38px_rgba(59,130,246,0.45)]",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  )
}

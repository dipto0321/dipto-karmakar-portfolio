"use client"

import type { ComponentPropsWithoutRef, ReactNode } from "react"
import { useRef } from "react"

import { motion, useInView, useReducedMotion } from "framer-motion"

import { cn } from "@/lib/utils"

interface AnimatedWrapperProps extends ComponentPropsWithoutRef<
  typeof motion.div
> {
  readonly children: ReactNode
}

export function AnimatedWrapper({
  className,
  children,
  transition,
  ...props
}: Readonly<AnimatedWrapperProps>) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, {
    amount: 0.22,
    margin: "-8% 0px -8% 0px",
  })
  const shouldReduceMotion = useReducedMotion()

  const hiddenState = shouldReduceMotion
    ? { opacity: 0 }
    : {
        opacity: 0,
        y: 56,
        rotateX: 12,
        rotateY: -6,
        scale: 0.97,
      }

  const visibleState = {
    opacity: 1,
    y: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
  }

  return (
    <motion.div
      ref={ref}
      initial={hiddenState}
      animate={isInView ? visibleState : hiddenState}
      transition={transition ?? { duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={
        shouldReduceMotion
          ? undefined
          : {
              transformPerspective: 1200,
              transformStyle: "preserve-3d",
              willChange: "transform, opacity",
            }
      }
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}

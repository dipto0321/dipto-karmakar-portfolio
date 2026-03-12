"use client"

import type { ComponentPropsWithoutRef, ReactNode } from "react"

import { motion, useReducedMotion } from "framer-motion"

import {
  reducedRevealItemVariants,
  revealContainerVariants,
  revealItemTransition,
  revealItemVariants,
} from "@/lib/animations/reveal"
import { cn } from "@/lib/utils"

interface MotionRevealProps extends ComponentPropsWithoutRef<
  typeof motion.div
> {
  readonly children: ReactNode
  readonly stagger?: boolean
}

export function MotionReveal({
  children,
  className,
  transition,
  stagger = false,
  ...props
}: Readonly<MotionRevealProps>) {
  const shouldReduceMotion = useReducedMotion()

  let itemVariants = revealItemVariants
  if (shouldReduceMotion) itemVariants = reducedRevealItemVariants
  const variants = stagger ? revealContainerVariants : itemVariants

  return (
    <motion.div
      variants={variants}
      transition={stagger ? undefined : (transition ?? revealItemTransition)}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}

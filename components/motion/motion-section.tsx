"use client"

import type { ComponentPropsWithoutRef, ReactNode } from "react"
import { useRef } from "react"

import { motion, useInView, useReducedMotion } from "framer-motion"

import {
  reducedSectionVariants,
  sectionTransition,
  sectionVariants,
  sectionViewport,
} from "@/lib/animations/section"
import { cn } from "@/lib/utils"

interface MotionSectionProps extends ComponentPropsWithoutRef<
  typeof motion.div
> {
  readonly children: ReactNode
}

export function MotionSection({
  children,
  className,
  transition,
  ...props
}: Readonly<MotionSectionProps>) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, sectionViewport)
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={shouldReduceMotion ? reducedSectionVariants : sectionVariants}
      transition={transition ?? sectionTransition}
      style={{ willChange: "transform, opacity, filter" }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}

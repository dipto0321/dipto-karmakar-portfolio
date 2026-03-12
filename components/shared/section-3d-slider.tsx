"use client"

import type { ReactNode } from "react"
import { useRef } from "react"

import { motion, useInView, useReducedMotion } from "framer-motion"

import { cn } from "@/lib/utils"

interface Section3DSliderProps {
  readonly children: ReactNode
  readonly className?: string
  readonly tilt?: "left" | "right"
  readonly delay?: number
  readonly initialVisible?: boolean
}

export function Section3DSlider({
  children,
  className,
  tilt = "left",
  delay = 0,
  initialVisible = false,
}: Readonly<Section3DSliderProps>) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, {
    amount: 0.28,
    margin: "-10% 0px -10% 0px",
  })
  const shouldReduceMotion = useReducedMotion()

  const rotateY = tilt === "left" ? -8 : 8

  const hiddenState = shouldReduceMotion
    ? { opacity: 0 }
    : {
        opacity: 0,
        y: 88,
        scale: 0.965,
        rotateX: 14,
        rotateY,
      }

  const visibleState = {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
  }

  return (
    <div className="w-full overflow-x-clip">
      <motion.div
        ref={ref}
        initial={initialVisible ? visibleState : hiddenState}
        animate={isInView ? visibleState : hiddenState}
        transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
        style={
          shouldReduceMotion
            ? undefined
            : {
                perspective: "1500px",
                willChange: "transform, opacity",
              }
        }
        className={cn(className)}
      >
        {children}
      </motion.div>
    </div>
  )
}

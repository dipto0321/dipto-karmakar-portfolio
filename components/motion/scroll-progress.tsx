"use client"

import { motion, useReducedMotion, useScroll } from "framer-motion"

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return null
  }

  return (
    <motion.div
      className="pointer-events-none fixed top-0 right-0 left-0 z-[60] h-0.5 origin-left bg-linear-to-r from-sky-400/80 via-indigo-400/80 to-cyan-300/80"
      style={{ scaleX: scrollYProgress }}
    />
  )
}

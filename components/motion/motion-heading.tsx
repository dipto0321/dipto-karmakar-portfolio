"use client"

import { motion, useReducedMotion } from "framer-motion"

import {
  splitHeadingWords,
  wordDelayStep,
  wordTransition,
  wordVariants,
} from "@/lib/animations/text"
import { cn } from "@/lib/utils"

interface MotionHeadingProps {
  readonly text: string
  readonly className?: string
}

export function MotionHeading({
  text,
  className,
}: Readonly<MotionHeadingProps>) {
  const shouldReduceMotion = useReducedMotion()
  const words = splitHeadingWords(text)

  if (shouldReduceMotion) {
    return <span className={cn(className)}>{text}</span>
  }

  return (
    <span className={cn(className)}>
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className="inline-block"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          variants={wordVariants}
          transition={{ ...wordTransition, delay: index * wordDelayStep }}
        >
          {word}
          {index < words.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </span>
  )
}

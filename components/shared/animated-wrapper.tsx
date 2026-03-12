"use client"

import type { ComponentPropsWithoutRef, ReactNode } from "react"

import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

interface AnimatedWrapperProps extends ComponentPropsWithoutRef<
  typeof motion.div
> {
  readonly children: ReactNode
}

export function AnimatedWrapper({
  className,
  children,
  ...props
}: Readonly<AnimatedWrapperProps>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}

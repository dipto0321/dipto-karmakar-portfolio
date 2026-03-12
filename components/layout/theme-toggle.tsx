"use client"

import { MoonStar, SunMedium } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { useMounted } from "@/hooks/use-mounted"

export function ThemeToggle() {
  const mounted = useMounted()
  const { resolvedTheme, setTheme } = useTheme()

  const isDark = !mounted || resolvedTheme === "dark"

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="rounded-full border-border/80 bg-card/80 shadow-sm backdrop-blur hover:bg-accent"
    >
      {isDark ? <SunMedium className="size-4" /> : <MoonStar className="size-4" />}
    </Button>
  )
}
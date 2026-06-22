import { siteConfig } from "@/content/site"
import { supabase } from "@/lib/supabase/client"
import type { DbHeroContent } from "@/lib/supabase/types"

export interface HeroContent {
  title: string
  headline: string
  tagline: string
  availability: string
}

function fallback(): HeroContent {
  return {
    title: siteConfig.title,
    headline: siteConfig.headline,
    tagline: siteConfig.tagline,
    availability: siteConfig.availability,
  }
}

/**
 * Fetch hero content (single row, id = 1).
 * Falls back to static siteConfig fields when Supabase is not configured or returns an error.
 */
export async function getHeroContent(): Promise<HeroContent> {
  if (!supabase) return fallback()

  const { data, error } = await supabase
    .from("hero_content")
    .select("*")
    .eq("id", 1)
    .single()

  if (error || !data) {
    if (error) console.error("[supabase/hero-content] fetch failed:", error)
    return fallback()
  }

  const row = data as DbHeroContent
  return {
    title: row.title,
    headline: row.headline,
    tagline: row.tagline,
    availability: row.availability,
  }
}

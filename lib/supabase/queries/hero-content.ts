import { supabase } from "@/lib/supabase/client"
import type { DbHeroContent, QueryResult } from "@/lib/supabase/types"

export interface HeroContent {
  title: string
  headline: string
  tagline: string
  availability: string
}

export async function getHeroContent(): Promise<QueryResult<HeroContent>> {
  if (!supabase) {
    return { data: null, error: "Supabase is not configured." }
  }

  const { data, error } = await supabase
    .from("hero_content")
    .select("*")
    .eq("id", 1)
    .single()

  if (error || !data) {
    console.error("[supabase/hero-content] fetch failed:", error)
    return { data: null, error: "Failed to load hero content." }
  }

  const row = data as DbHeroContent
  return {
    data: {
      title: row.title,
      headline: row.headline,
      tagline: row.tagline,
      availability: row.availability,
    },
    error: null,
  }
}


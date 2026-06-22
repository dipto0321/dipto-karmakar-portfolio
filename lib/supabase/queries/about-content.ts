import { about } from "@/content/about"
import { supabase } from "@/lib/supabase/client"
import type { DbAboutContent } from "@/lib/supabase/types"
import type { About } from "@/types/about"

function toAbout(row: DbAboutContent): About {
  return {
    heading: row.heading,
    body: row.body,
    capabilities: row.capabilities,
  }
}

/**
 * Fetch about content (single row, id = 1).
 * Falls back to static content when Supabase is not configured or returns an error.
 */
export async function getAboutContent(): Promise<About> {
  if (!supabase) return about

  const { data, error } = await supabase
    .from("about_content")
    .select("*")
    .eq("id", 1)
    .single()

  if (error || !data) {
    if (error) console.error("[supabase/about-content] fetch failed:", error)
    return about
  }

  return toAbout(data as DbAboutContent)
}

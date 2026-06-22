import { supabase } from "@/lib/supabase/client"
import type { DbAboutContent, QueryResult } from "@/lib/supabase/types"
import type { About } from "@/types/about"

function toAbout(row: DbAboutContent): About {
  return {
    heading: row.heading,
    body: row.body,
    capabilities: row.capabilities,
  }
}

export async function getAboutContent(): Promise<QueryResult<About>> {
  if (!supabase) {
    return { data: null, error: "Supabase is not configured." }
  }

  const { data, error } = await supabase
    .from("about_content")
    .select("heading, body, capabilities")
    .eq("id", 1)
    .single()

  if (error || !data) {
    console.error("[supabase/about-content] fetch failed:", error)
    return { data: null, error: "Failed to load about content." }
  }

  return { data: toAbout(data as DbAboutContent), error: null }
}

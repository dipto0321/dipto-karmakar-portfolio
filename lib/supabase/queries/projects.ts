import { supabase } from "@/lib/supabase/client"
import type { DbProject } from "@/lib/supabase/types"
import type { Project } from "@/types/project"

function toProject(row: DbProject): Project {
  return {
    id: row.id,
    title: row.title,
    description: row.description,
    techStack: row.tech_stack,
    architectureHighlights: row.architecture_highlights,
    links: row.links,
    featured: row.featured,
  }
}

/**
 * Fetch all projects ordered by sort_order.
 * Returns an empty array when Supabase is not configured or returns an error.
 */
export async function getProjects(): Promise<Project[]> {
  if (!supabase) return []

  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("sort_order", { ascending: true })

  if (error || !data) {
    console.error("[supabase/projects] fetch failed:", error)
    return []
  }

  return (data as DbProject[]).map(toProject)
}

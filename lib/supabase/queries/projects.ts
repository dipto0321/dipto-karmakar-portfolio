import { supabase } from "@/lib/supabase/client"
import type { DbProject, QueryResult } from "@/lib/supabase/types"
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

export async function getProjects(): Promise<QueryResult<Project[]>> {
  if (!supabase) {
    return { data: null, error: "Supabase is not configured." }
  }

  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("sort_order", { ascending: true })

  if (error || !data) {
    console.error("[supabase/projects] fetch failed:", error)
    return { data: null, error: "Failed to load projects." }
  }

  return { data: (data as DbProject[]).map(toProject), error: null }
}

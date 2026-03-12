import { projects as staticProjects } from "@/content/projects"
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
 * Falls back to static content when Supabase is not configured or returns an error.
 */
export async function getProjects(): Promise<Project[]> {
  if (!supabase) return staticProjects

  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("sort_order", { ascending: true })

  if (error || !data) {
    console.error(
      "[supabase/projects] fetch failed, using static fallback:",
      error?.message
    )
    return staticProjects
  }

  return data.map(toProject)
}

/**
 * Fetch only featured projects.
 * Falls back to static content filtered by featured === true.
 */
export async function getFeaturedProjects(): Promise<Project[]> {
  if (!supabase) return staticProjects.filter((p) => p.featured)

  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("featured", true)
    .order("sort_order", { ascending: true })

  if (error || !data) {
    console.error(
      "[supabase/projects] featured fetch failed, using static fallback:",
      error?.message
    )
    return staticProjects.filter((p) => p.featured)
  }

  return data.map(toProject)
}

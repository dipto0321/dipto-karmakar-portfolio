import { createClient } from "@/lib/supabase/server"
import type { DbProject } from "@/lib/supabase/types"
import type { Project } from "@/types/project"
import { cookies } from "next/headers"

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
  try {
    const cookieStore = await cookies()
    const supabase = createClient(cookieStore)
    
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("sort_order", { ascending: true })

    if (error || !data) {
      console.error("[supabase/projects] fetch failed:", error)
      return []
    }

    console.log(`[supabase/projects] fetched ${data.length} rows`)

    return (data as DbProject[]).map(toProject)
  } catch (err) {
    console.error("[supabase/projects] unexpected error:", err)
    return []
  }
}

/**
 * Fetch only featured projects.
 * Returns an empty array when Supabase is not configured or returns an error.
 */
export async function getFeaturedProjects(): Promise<Project[]> {
  try {
    const cookieStore = await cookies()
    const supabase = createClient(cookieStore)
    try {
      const cookieCount = cookieStore.getAll().length
      console.log(`[supabase/projects] (featured) cookie count: ${cookieCount}`)
    } catch (e) {
      console.log("[supabase/projects] (featured) cookie debug failed")
    }

    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .eq("featured", true)
      .order("sort_order", { ascending: true })

    if (error || !data) {
      console.error("[supabase/projects] featured fetch failed:", error)
      return []
    }

    console.log(`[supabase/projects] (featured) fetched ${data.length} rows`)

    return (data as DbProject[]).map(toProject)
  } catch (err) {
    console.error("[supabase/projects] unexpected error:", err)
    return []
  }
}

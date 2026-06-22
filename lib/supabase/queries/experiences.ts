import { experiences } from "@/content/experience"
import { supabase } from "@/lib/supabase/client"
import type { DbExperience } from "@/lib/supabase/types"
import type { ExperienceItem } from "@/types/experience"

function toExperienceItem(row: DbExperience): ExperienceItem {
  return {
    id: row.id,
    role: row.role,
    company: row.company,
    period: row.period,
    location: row.location ?? "",
    current: row.is_current,
    contractType: row.contract_type ?? undefined,
    workMode: row.work_mode ?? undefined,
    impact: row.impact,
    technologies: row.technologies,
  }
}

/**
 * Fetch all experiences ordered by sort_order.
 * Falls back to static content when Supabase is not configured or returns an error.
 */
export async function getExperiences(): Promise<ExperienceItem[]> {
  if (!supabase) return experiences

  const { data, error } = await supabase
    .from("experiences")
    .select("*")
    .order("sort_order", { ascending: true })

  if (error || !data || data.length === 0) {
    if (error) console.error("[supabase/experiences] fetch failed:", error)
    return experiences
  }

  return (data as DbExperience[]).map(toExperienceItem)
}

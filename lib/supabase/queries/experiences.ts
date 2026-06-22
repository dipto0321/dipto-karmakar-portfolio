import { supabase } from "@/lib/supabase/client"
import type { DbExperience, QueryResult } from "@/lib/supabase/types"
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

export async function getExperiences(): Promise<QueryResult<ExperienceItem[]>> {
  if (!supabase) {
    return { data: null, error: "Supabase is not configured." }
  }

  const { data, error } = await supabase
    .from("experiences")
    .select(
      "id, role, company, period, location, is_current, contract_type, work_mode, impact, technologies, sort_order"
    )
    .order("sort_order", { ascending: true })

  if (error || !data || data.length === 0) {
    console.error("[supabase/experiences] fetch failed:", error)
    return { data: null, error: "Failed to load experiences." }
  }

  return { data: (data as DbExperience[]).map(toExperienceItem), error: null }
}

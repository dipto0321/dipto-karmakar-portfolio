import { supabase } from "@/lib/supabase/client"
import type { DbImpactStat, QueryResult } from "@/lib/supabase/types"
import type { ImpactStat } from "@/types/impact"

function toImpactStat(row: DbImpactStat): ImpactStat {
  return {
    value: row.value,
    label: row.label,
    detail: row.detail ?? "",
  }
}

export async function getImpactStats(): Promise<QueryResult<ImpactStat[]>> {
  if (!supabase) {
    return { data: null, error: "Supabase is not configured." }
  }

  const { data, error } = await supabase
    .from("impact_stats")
    .select("*")
    .order("sort_order", { ascending: true })

  if (error || !data || data.length === 0) {
    console.error("[supabase/impact-stats] fetch failed:", error)
    return { data: null, error: "Failed to load impact stats." }
  }

  return { data: (data as DbImpactStat[]).map(toImpactStat), error: null }
}

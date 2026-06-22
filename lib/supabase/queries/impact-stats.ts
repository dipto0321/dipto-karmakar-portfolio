import { impactStats } from "@/content/impact"
import { supabase } from "@/lib/supabase/client"
import type { DbImpactStat } from "@/lib/supabase/types"
import type { ImpactStat } from "@/types/impact"

function toImpactStat(row: DbImpactStat): ImpactStat {
  return {
    value: row.value,
    label: row.label,
    detail: row.detail ?? "",
  }
}

/**
 * Fetch impact stats ordered by sort_order.
 * Falls back to static content when Supabase is not configured or returns an error.
 */
export async function getImpactStats(): Promise<ImpactStat[]> {
  if (!supabase) return impactStats

  const { data, error } = await supabase
    .from("impact_stats")
    .select("*")
    .order("sort_order", { ascending: true })

  if (error || !data || data.length === 0) {
    if (error) console.error("[supabase/impact-stats] fetch failed:", error)
    return impactStats
  }

  return (data as DbImpactStat[]).map(toImpactStat)
}

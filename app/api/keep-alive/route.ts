import { NextResponse } from "next/server"
import { getHeroContent } from "@/lib/supabase/queries/hero-content"

/**
 * Keep-alive endpoint that pings the Supabase database to prevent the
 * free-tier instance from auto-pausing after 7 days of inactivity.
 *
 * This endpoint is ONLY invoked by the scheduled ping (see
 * .github/workflows/supabase-keep-alive.yml) — it is never hit by site
 * visitors, so its no-store cache settings do not affect page caching.
 *   https://diptokarmakar.me/api/keep-alive
 */

// Force dynamic rendering — the keep-alive must always hit the DB on the
// cron ping rather than serving a cached response (a cached response would
// mean no database activity, defeating the purpose).
export const dynamic = "force-dynamic"
export const revalidate = 0

const noStoreHeaders = {
  "Cache-Control": "no-store, max-age=0",
  Pragma: "no-cache",
}

export async function GET() {
  try {
    // Minimal single-row read that triggers a live database hit.
    const { data, error } = await getHeroContent()

    if (error || !data) {
      return NextResponse.json(
        { success: false, message: error ?? "No data returned from database." },
        {
          status: 500,
          headers: noStoreHeaders,
        }
      )
    }

    return NextResponse.json(
      { success: true, message: "Database pinged successfully" },
      {
        status: 200,
        headers: noStoreHeaders,
      }
    )
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        message:
          err instanceof Error ? err.message : "An unexpected error occurred.",
      },
      {
        status: 500,
        headers: noStoreHeaders,
      }
    )
  }
}

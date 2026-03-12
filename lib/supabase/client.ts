import { createClient } from "@supabase/supabase-js"

const url = process.env.NEXT_PUBLIC_SUPABASE_URL
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!url || !key) {
  // Warn at module load time so misconfiguration is visible in logs.
  // The app still works with static fallbacks when Supabase is unconfigured.
  if (process.env.NODE_ENV === "production") {
    console.warn(
      "[supabase] NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY is not set. Falling back to static content."
    )
  }
}

/**
 * Singleton Supabase client for public, read-only portfolio data.
 * Returns null when environment variables are not configured.
 */
export const supabase =
  url && key
    ? createClient(url, key, {
        auth: { persistSession: false },
      })
    : null

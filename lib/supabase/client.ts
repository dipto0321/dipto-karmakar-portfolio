import { createClient } from "@supabase/supabase-js"

/**
 * Stateless, anon, read-only Supabase client.
 *
 * Content is managed directly in the Supabase dashboard — the site never writes,
 * so there is no auth, session, or cookie handling. Tables are protected by RLS
 * public-select policies. Exposed via the public (publishable/anon) key.
 *
 * `null` when env is not configured, so callers can degrade gracefully.
 */
const url = process.env.NEXT_PUBLIC_SUPABASE_URL
const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY

export const supabase =
  url && key
    ? createClient(url, key, {
        auth: { persistSession: false, autoRefreshToken: false },
      })
    : null

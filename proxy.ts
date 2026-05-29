import { createServerClient } from "@supabase/ssr"
import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!

export const proxy = async (request: NextRequest) => {
  const response = NextResponse.next()

  const supabase = createServerClient(
    supabaseUrl,
    supabaseKey,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          // Mirror cookies onto the outgoing response so client receives updates
          cookiesToSet.forEach(({ name, value, options }) => {
            response.cookies.set(name, value, options)
          })
        },
      },
    }
  )

  // Ensure session is loaded and refreshes are applied
  try {
    await supabase.auth.getSession()
  } catch (err) {
    // Non-fatal: log and continue
    console.error("[proxy] supabase auth.getSession error:", err)
  }

  return response
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}

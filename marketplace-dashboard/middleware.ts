import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { createClient } from "@supabase/supabase-js"

export async function middleware(request: NextRequest) {
  // Create a Supabase client configured to use cookies
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      get(name: string) {
        return request.cookies.get(name)?.value
      },
    },
  })

  // Refresh session if expired
  const {
    data: { session },
  } = await supabase.auth.getSession()

  // If no session and trying to access protected routes, redirect to login
  if (!session && !request.nextUrl.pathname.startsWith("/auth")) {
    const redirectUrl = request.nextUrl.clone()
    redirectUrl.pathname = "/auth/login"
    redirectUrl.searchParams.set("redirect", request.nextUrl.pathname)
    return NextResponse.redirect(redirectUrl)
  }

  // If session exists and trying to access auth routes, redirect to dashboard
  if (session && request.nextUrl.pathname.startsWith("/auth")) {
    const redirectUrl = request.nextUrl.clone()
    redirectUrl.pathname = "/"
    return NextResponse.redirect(redirectUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|auth).*)"],
}

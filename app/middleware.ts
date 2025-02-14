// app/middleware.ts
/**
 * Authentication and Route Protection Middleware
 * 
 * This middleware handles:
 * - Checking user authentication status
 * - Protecting private routes
 * - Redirecting unauthenticated users
 * - Managing session state
 * 
 * Key Features:
 * - Uses Supabase for authentication
 * - Handles public vs private routes
 * - Preserves redirect URLs
 */

// Import necessary dependencies
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * Public routes that don't require authentication
 * Add more routes here if needed
 */
const PUBLIC_ROUTES = ['/auth/login', '/auth/register']

export async function middleware(request: NextRequest) {
  // Create response object to modify headers and handle redirects
  const response = NextResponse.next()
  
  /**
   * Initialize Supabase client for authentication
   * This uses the middleware client specifically designed for Next.js
   */
  const supabase = createMiddlewareClient({ req: request, res: response })

  /**
   * Get current session to check if user is authenticated
   * This checks the user's auth state from cookies
   */
  const { data: { session } } = await supabase.auth.getSession()

  // Get the current path to determine if it's protected
  const path = request.nextUrl.pathname

  /**
   * If user is not authenticated and trying to access protected route
   * Redirect to login page while preserving the original destination
   */
  if (!session && !PUBLIC_ROUTES.includes(path)) {
    const redirectUrl = new URL('/auth/login', request.url)
    redirectUrl.searchParams.set('redirectedFrom', path)
    return NextResponse.redirect(redirectUrl)
  }

  /**
   * If user is authenticated but trying to access auth pages
   * Redirect to dashboard instead to prevent redundant logins
   */
  if (session && PUBLIC_ROUTES.includes(path)) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  // Return the response for all other cases
  return response
}

/**
 * Define which routes should be processed by this middleware
 * This configuration matches all paths except:
 * - API routes
 * - Static files
 * - Next.js internal paths
 */
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
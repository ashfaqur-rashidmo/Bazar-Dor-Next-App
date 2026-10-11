import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { auth } from './lib/auth'
 
// This function can be marked `async` if using `await` inside
export async function proxy(request: NextRequest) {
  const session = await auth.api.getSession({
    headers: request.headers,
  })

  const user = session?.user

  if (!user) {
    return NextResponse.redirect(new URL('/sign-in', request.url))
  }

  console.log("Session in proxy:", user)


}
 
// Alternatively, you can use a default export:
// export default function proxy(request: NextRequest) { ... }
 
export const config = {
  matcher: ["/profile","/product/:path"]
}
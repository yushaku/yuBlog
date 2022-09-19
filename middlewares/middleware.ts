import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

// This function can be marked `async` if using `await` inside
export const middleware = async (request: NextRequest) => {
  console.log('go to middleware')

  const token = await getToken({
    req: request,
    secret: process.env.JWT_SECRET,
  })

  const { pathname } = request.nextUrl

  //allow req if token existed
  if (token || pathname.includes('./api/auth') || pathname.includes('/_next')) {
    if (pathname === '/login') {
      return NextResponse.redirect(new URL('/', request.url))
    }
    return NextResponse.next()
  }

  //Redirect to login
  if (!token || pathname !== '/login') {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

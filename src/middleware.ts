import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwtDecode from 'jwt-decode';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const token = request.cookies.get('token');
  let whitelist = ['/login', '/register', '/api/login', '/api/register', '/redirect'];

  if (whitelist.includes(request.nextUrl.pathname) && !token) return NextResponse.next();

  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  } else if (token) {
    const decoded: any = jwtDecode(token.value);
    const isExpired = decoded.exp * 1000 < Date.now();
    if (isExpired && !whitelist.includes(request.nextUrl.pathname)) {
      console.log("The request has a 'token' cookie? ", request.cookies.has('token'));
      request.cookies.delete('token');
      console.log("The request has a 'token' cookie? ", request.cookies.has('token'));

      return NextResponse.redirect(new URL('/login', request.url));
    }

    if (whitelist.includes(request.nextUrl.pathname)) {
      return NextResponse.redirect(new URL('/', request.url));
    }
    if (request.nextUrl.pathname === '/') {
      const nextUrl = '/staff';
      return NextResponse.redirect(new URL(nextUrl, request.url));
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    // '/((?!api|_next/static|_next/image|favicon.ico|logo.svg|logo.png|favicon.svg).*)',
  ],
};

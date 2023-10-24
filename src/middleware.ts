import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwtDecode from 'jwt-decode';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const token = request.cookies.get('token');
  const whitelist = ['/login', '/register', '/api/login', '/api/register', '/redirect'];

  // ignore the whitelist if the request is for the portal
  const isPortalUrl = request.nextUrl.pathname.startsWith('/portal');
  if ((whitelist.includes(request.nextUrl.pathname) && !token) || !isPortalUrl)
    return NextResponse.next();

  // if the request is for the portal and there is no token, redirect to login
  if (!token && isPortalUrl) {
    return NextResponse.redirect(new URL('/login', request.url));
  } else if (token) {
    const decoded: any = jwtDecode(token.value);
    console.log('decoded: ', decoded);
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
    const role = decoded.role ?? request.cookies.get('role')?.value;
    const isArtist = role === 'ARTIST';
    console.log(isArtist, decoded);
    if (request.nextUrl.pathname.startsWith('/portal') && !isArtist) {
      return NextResponse.redirect(new URL('/notice', request.url));
    }
    // if (request.nextUrl.pathname === '/') {
    //   console.log('redirecting to portal');
    //   return NextResponse.redirect(new URL('/portal', request.url));
    // }
    // const isAdmin = decoded.role === 'admin';
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
    '/((?!api|_next/static|_next/image|favicon.ico|logo.svg|logo.png|banner.png|favicon.svg).*)',
  ],
};

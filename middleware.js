import { NextResponse } from 'next/server';

export function middleware(request) {
  const response = NextResponse.next();

  // Detect environment
  const env = process.env.NEXT_PUBLIC_ENV || 'dev';
  const isDev = env !== 'prod';

  // Generate nonce for CSP
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');

  /**
   * Example: Optional auth token handling (clean version)
   * You can remove this if not needed
   */
//   const cookieName = env === 'prod' || env === 'local' ? 'at' : 'dev-at';
//   const token = request.cookies.get(cookieName)?.value;

  // OPTIONAL: protect routes (uncomment if needed)
  /*
  if (!token && request.nextUrl.pathname !== '/') {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  */

  /**
   * Content Security Policy
   */
  const scriptSrcExtra = isDev ? "'unsafe-eval'" : '';

  const csp = isDev
    ? ''
    : `
      default-src 'self';
      script-src 'self' 'nonce-${nonce}' ${scriptSrcExtra};
      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
      font-src 'self' data: https://fonts.gstatic.com;
      connect-src 'self';
      img-src 'self' blob: data:;
      media-src 'self';
      frame-src 'self';
      object-src 'none';
      base-uri 'self';
      form-action 'self';
      frame-ancestors 'none';
      upgrade-insecure-requests;
    `.replace(/\s{2,}/g, ' ').trim();

  if (csp) {
    response.headers.set('Content-Security-Policy', csp);
  }

  response.headers.set('x-nonce', nonce);

  return response;
}

export const config = {
  matcher: ['/', '/((?!_next|favicon.ico|api).*)'],
};
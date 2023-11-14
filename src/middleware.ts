import acceptLanguage from 'accept-language';
import { NextResponse } from 'next/server';

import { fallbackLng, languages } from './app/i18n/settings';

acceptLanguage.languages(languages);

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|assets|img|fonts|favicon.ico|favicon-32x32.png|favicon-16x16.png|apple-touch-icon.png|sw.js).*)',
  ],
};

const cookieName = 'i18next';

interface IRequest {
  cookies: {
    has(name: string): boolean;
    get(name: string): { value: string };
  };
  headers: {
    get(name: string): string | null;
    has(name: string): boolean;
  };
  nextUrl: {
    pathname: string;
  };
  url: string;
}

export function middleware(req: IRequest) {
  let lng;
  if (req.cookies.has(cookieName))
    lng = acceptLanguage.get(req.cookies.get(cookieName).value);
  // if (!lng) lng = acceptLanguage.get(req.headers.get('Accept-Language') || '');
  if (!lng) lng = fallbackLng;

  // Redirect if lng in path is not supported
  if (
    !languages.some((loc) => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !req.nextUrl.pathname.startsWith('/_next')
  ) {
    return NextResponse.redirect(
      new URL(`/${lng}${req.nextUrl.pathname}`, req.url),
    );
  }

  if (req.headers.has('referer')) {
    const refererUrl = new URL(req.headers.get('referer') || '');
    const lngInReferer = languages.find((l) =>
      refererUrl.pathname.startsWith(`/${l}`),
    );
    const response = NextResponse.next();
    if (lngInReferer) response.cookies.set(cookieName, lngInReferer);
    return response;
  }

  return NextResponse.next();
}

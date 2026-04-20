import { NextRequest, NextResponse } from 'next/server'

const LOCALES = ['en', 'es'] as const
const DEFAULT_LOCALE = 'en'

type Locale = (typeof LOCALES)[number]

function detectLocaleFromAcceptLanguage(header: string | null): Locale {
  if (!header) return DEFAULT_LOCALE
  // Very small parser: pick first language tag that starts with "es" or "en"
  const parts = header
    .split(',')
    .map((p) => p.trim().split(';')[0].toLowerCase())
  for (const tag of parts) {
    if (tag.startsWith('es')) return 'es'
    if (tag.startsWith('en')) return 'en'
  }
  return DEFAULT_LOCALE
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip static assets / special paths
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/images') ||
    pathname.startsWith('/fonts') ||
    pathname === '/favicon.ico' ||
    pathname === '/logo.png' ||
    pathname === '/sitemap.xml' ||
    pathname === '/robots.txt' ||
    pathname === '/manifest.json' ||
    /\.[a-zA-Z0-9]+$/.test(pathname) // any file with an extension
  ) {
    return NextResponse.next()
  }

  // If pathname already begins with a supported locale, continue.
  const hasLocale = LOCALES.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  )
  if (hasLocale) return NextResponse.next()

  // Otherwise redirect to /<detected>/<original-path>
  const detected = detectLocaleFromAcceptLanguage(
    request.headers.get('accept-language')
  )
  const url = request.nextUrl.clone()
  url.pathname = `/${detected}${pathname === '/' ? '' : pathname}`
  return NextResponse.redirect(url)
}

export const config = {
  matcher: [
    // Run on everything except static asset paths & Next internals
    '/((?!_next|api|images|fonts|favicon.ico|logo.png|sitemap.xml|robots.txt|manifest.json).*)',
  ],
}

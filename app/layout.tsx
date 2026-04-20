import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

// Base metadata that applies to every locale.
// Per-locale metadata (including hreflang alternates and <html lang>)
// is set in app/[locale]/layout.tsx.
export const metadata: Metadata = {
  title: {
    default: 'Costa Rican Doing — Adventure Tours in Costa Rica',
    template: '%s | Costa Rican Doing',
  },
  description:
    'Book the best adventure tours in Costa Rica. ATV, zipline, white water rafting, waterfall hikes and combo packages in La Fortuna and Arenal.',
  keywords: [
    'Costa Rica tours',
    'ATV La Fortuna',
    'zipline Costa Rica',
    'rafting Costa Rica',
    'adventure tourism Costa Rica',
    'Arenal tours',
  ],
  authors: [{ name: 'Costa Rican Doing' }],
  creator: 'Costa Rican Doing',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  metadataBase: new URL('https://costaricandoing.com'),
}

/**
 * Next.js App Router requires <html> and <body> to live in the root layout.
 * The `lang` attribute cannot be dynamic from a nested layout, so we render
 * <html> here without a lang and let middleware + the [locale] layout
 * ensure a locale is always present. A script-free alternative would be a
 * per-request `lang` rewrite, but since every page is served from
 * /en/* or /es/*, search engines get the correct signal via the
 * `alternates.languages` metadata set in app/[locale]/layout.tsx and the
 * hreflang entries in the sitemap.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  )
}

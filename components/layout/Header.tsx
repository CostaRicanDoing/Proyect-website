'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Globe } from 'lucide-react'
import { cn } from '@/lib/utils'
import { getTranslations } from '@/lib/translations'
import type { Locale } from '@/types'

const navLinks = [
  { href: '/tours', key: 'tours' as const },
  { href: '/blog', key: 'blog' as const },
  { href: '/about', key: 'about' as const },
  { href: '/contact', key: 'contact' as const },
]

interface HeaderProps {
  locale?: Locale
}

export default function Header({ locale = 'en' }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname() || `/${locale}`
  const t = getTranslations(locale)

  // Shrink on scroll (Sky Adventures style)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Build the "other locale" URL by swapping the /en or /es segment
  const otherLocale: Locale = locale === 'en' ? 'es' : 'en'
  const switchHref = (() => {
    const segments = pathname.split('/')
    if (segments[1] === 'en' || segments[1] === 'es') {
      segments[1] = otherLocale
      return segments.join('/') || `/${otherLocale}`
    }
    return `/${otherLocale}${pathname === '/' ? '' : pathname}`
  })()

  const withLocale = (href: string) => `/${locale}${href}`

  return (
    <header
      className={cn(
        'sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b transition-all duration-300',
        scrolled ? 'border-white/10 shadow-lg' : 'border-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            'flex items-center justify-between transition-all duration-300',
            scrolled ? 'h-14' : 'h-20'
          )}
        >
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center">
            <Image
              src="/logo.png"
              alt="Costa Rican Doing"
              width={180}
              height={80}
              className={cn(
                'w-auto object-contain transition-all duration-300',
                // Mobile: contenido (no se desborda). Desktop: más grande, sobresale sutil.
                scrolled
                  ? 'h-10 md:h-12'
                  : 'h-12 md:h-[72px]'
              )}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={withLocale(link.href)}
                className="text-gray-200 hover:text-lime-500 font-medium transition-colors"
              >
                {t.nav[link.key]}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Language toggle — navigates to the same page in the other locale */}
            <Link
              href={switchHref}
              className="flex items-center gap-1 text-sm text-gray-300 hover:text-lime-500 transition-colors"
              aria-label={t.nav.toggleLanguage}
            >
              <Globe size={16} />
              <span className="font-medium">{locale === 'en' ? 'ES' : 'EN'}</span>
            </Link>

            {/* CTA */}
            <Link
              href={withLocale('/tours')}
              className="hidden md:inline-flex items-center px-4 py-2 bg-lime-500 hover:bg-lime-600 text-white font-semibold rounded-lg transition-colors text-sm"
            >
              {t.common.bookNow}
            </Link>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden p-2 text-gray-200"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={t.nav.toggleMenu}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'md:hidden border-t border-white/10 bg-black overflow-hidden transition-all duration-300',
          mobileOpen ? 'max-h-64' : 'max-h-0'
        )}
      >
        <nav className="flex flex-col px-4 py-3 gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={withLocale(link.href)}
              className="py-2 px-3 text-gray-200 hover:text-lime-500 hover:bg-white/5 rounded-md font-medium transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {t.nav[link.key]}
            </Link>
          ))}
          <Link
            href={withLocale('/tours')}
            className="mt-2 py-2 px-3 bg-lime-500 text-white text-center font-semibold rounded-lg"
            onClick={() => setMobileOpen(false)}
          >
            {t.common.bookNow}
          </Link>
        </nav>
      </div>
    </header>
  )
}

'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Globe } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/tours', label: 'Tours', labelEs: 'Tours' },
  { href: '/blog', label: 'Blog', labelEs: 'Blog' },
  { href: '/about', label: 'About', labelEs: 'Nosotros' },
  { href: '/contact', label: 'Contact', labelEs: 'Contacto' },
]

interface HeaderProps {
  locale?: 'en' | 'es'
  onLocaleChange?: (locale: 'en' | 'es') => void
}

export default function Header({ locale = 'en', onLocaleChange }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-green-700">
              Costa Rican
              <span className="text-orange-500"> Doing</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-green-700 font-medium transition-colors"
              >
                {locale === 'es' ? link.labelEs : link.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Language toggle */}
            <button
              onClick={() => onLocaleChange?.(locale === 'en' ? 'es' : 'en')}
              className="flex items-center gap-1 text-sm text-gray-600 hover:text-green-700 transition-colors"
              aria-label="Toggle language"
            >
              <Globe size={16} />
              <span className="font-medium">{locale === 'en' ? 'ES' : 'EN'}</span>
            </button>

            {/* CTA */}
            <Link
              href="/tours"
              className="hidden md:inline-flex items-center px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors text-sm"
            >
              {locale === 'es' ? 'Ver Tours' : 'Book Now'}
            </Link>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden p-2 text-gray-700"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'md:hidden border-t border-gray-100 bg-white overflow-hidden transition-all duration-300',
          mobileOpen ? 'max-h-64' : 'max-h-0'
        )}
      >
        <nav className="flex flex-col px-4 py-3 gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-2 px-3 text-gray-700 hover:text-green-700 hover:bg-green-50 rounded-md font-medium transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {locale === 'es' ? link.labelEs : link.label}
            </Link>
          ))}
          <Link
            href="/tours"
            className="mt-2 py-2 px-3 bg-orange-500 text-white text-center font-semibold rounded-lg"
            onClick={() => setMobileOpen(false)}
          >
            {locale === 'es' ? 'Ver Tours' : 'Book Now'}
          </Link>
        </nav>
      </div>
    </header>
  )
}

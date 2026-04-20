import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail } from 'lucide-react'
import { getTranslations } from '@/lib/translations'
import type { Locale } from '@/types'

interface FooterProps {
  locale?: Locale
}

export default function Footer({ locale = 'en' }: FooterProps) {
  const t = getTranslations(locale)
  const lp = (href: string) => `/${locale}${href}`

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href={`/${locale}`} className="inline-block mb-4">
              <Image
                src="/logo.png"
                alt="Costa Rican Doing"
                width={140}
                height={60}
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">{t.footer.tagline}</p>
            <div className="flex gap-3">
              <a href="https://instagram.com/costaricandoing" aria-label="Instagram" className="text-gray-400 hover:text-orange-500 transition-colors text-sm font-medium">
                IG
              </a>
              <a href="https://facebook.com/costaricandoing" aria-label="Facebook" className="text-gray-400 hover:text-orange-500 transition-colors text-sm font-medium">
                FB
              </a>
              <a href="https://youtube.com/@costaricandoing" aria-label="YouTube" className="text-gray-400 hover:text-orange-500 transition-colors text-sm font-medium">
                YT
              </a>
            </div>
          </div>

          {/* Tours */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t.footer.ourTours}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href={lp('/tours/atv-la-fortuna')} className="hover:text-orange-500 transition-colors">{t.footer.tourLinks.atv}</Link></li>
              <li><Link href={lp('/tours/zipline-la-fortuna')} className="hover:text-orange-500 transition-colors">{t.footer.tourLinks.zipline}</Link></li>
              <li><Link href={lp('/tours/white-water-rafting')} className="hover:text-orange-500 transition-colors">{t.footer.tourLinks.rafting}</Link></li>
              <li><Link href={lp('/tours/la-fortuna-waterfall')} className="hover:text-orange-500 transition-colors">{t.footer.tourLinks.waterfall}</Link></li>
              <li><Link href={lp('/tours/atv-zipline-combo')} className="hover:text-orange-500 transition-colors">{t.footer.tourLinks.combo}</Link></li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href={lp('/about')} className="hover:text-orange-500 transition-colors">{t.footer.aboutUs}</Link></li>
              <li><Link href={lp('/blog')} className="hover:text-orange-500 transition-colors">{t.footer.blog}</Link></li>
              <li><Link href={lp('/contact')} className="hover:text-orange-500 transition-colors">{t.footer.contactLink}</Link></li>
              <li><Link href={lp('/terms')} className="hover:text-orange-500 transition-colors">{t.footer.terms}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t.footer.contact}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-orange-500 mt-0.5 shrink-0" />
                <span>La Fortuna, Alajuela, Costa Rica</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-orange-500 shrink-0" />
                <a href="tel:+50688888888" className="hover:text-orange-500 transition-colors">+506 8888-8888</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-orange-500 shrink-0" />
                <a href="mailto:info@costaricandoing.com" className="hover:text-orange-500 transition-colors">info@costaricandoing.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Costa Rican Doing. {t.footer.copyright}</p>
          <p>
            <Link href={lp('/terms')} className="hover:text-orange-500 transition-colors">{t.footer.terms}</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

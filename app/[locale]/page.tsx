import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ChevronRight, Shield, Clock, Star, Users } from 'lucide-react'
import TourCard from '@/components/tours/TourCard'
import { getFeaturedTours } from '@/data/tours'
import { getTranslations, isValidLocale } from '@/lib/translations'
import type { Locale } from '@/types'

export default function HomePage({ params }: { params: { locale: string } }) {
  if (!isValidLocale(params.locale)) notFound()
  const locale = params.locale as Locale
  const t = getTranslations(locale)
  const featuredTours = getFeaturedTours()

  const trust = [
    { icon: <Shield size={22} className="text-green-600" />, label: t.home.trust.safety, sub: t.home.trust.safetySub },
    { icon: <Star size={22} className="text-orange-500" />, label: t.home.trust.rated, sub: t.home.trust.ratedSub },
    { icon: <Clock size={22} className="text-green-600" />, label: t.home.trust.flexible, sub: t.home.trust.flexibleSub },
    { icon: <Users size={22} className="text-orange-500" />, label: t.home.trust.local, sub: t.home.trust.localSub },
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-green-900 via-green-800 to-green-700 overflow-hidden">
        <Image
          src="/images/hero.webp"
          alt="Costa Rica adventure tours"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 max-w-4xl mx-auto px-4 text-center text-white">
          <span className="inline-block bg-orange-500 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            {t.home.badge}
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
            {t.home.heroTitle1} <span className="text-orange-400">{t.home.heroTitle2}</span>
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            {t.home.heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${locale}/tours`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl text-lg transition-colors shadow-lg"
            >
              {t.common.exploreAllTours}
              <ChevronRight size={20} />
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center px-8 py-4 bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white font-bold rounded-xl text-lg border border-white/30 transition-colors"
            >
              {t.common.contactUs}
            </Link>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="bg-white border-b border-gray-100 py-6">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {trust.map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              {item.icon}
              <span className="font-semibold text-gray-900 text-sm">{item.label}</span>
              <span className="text-gray-500 text-xs">{item.sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.home.featuredTitle}</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">{t.home.featuredSubtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} locale={locale} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href={`/${locale}/tours`}
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white font-semibold rounded-lg transition-colors"
            >
              {t.common.viewAllTours}
              <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* About / Why us */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">{t.home.whyUs}</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-6">
              {t.home.whyTitle1} <br />{t.home.whyTitle2}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">{t.home.whyBody}</p>
            <ul className="space-y-3 text-gray-700">
              {t.home.whyList.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href={`/${locale}/about`}
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-green-700 hover:bg-green-800 text-white font-semibold rounded-lg transition-colors"
            >
              {t.common.learnAboutUs}
              <ChevronRight size={18} />
            </Link>
          </div>
          <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden">
            <Image
              src="/images/horse-back-riding-waterfall-nueva.webp"
              alt="Local Costa Rica adventure guide"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-green-700 to-green-800 py-14 px-4 text-white text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.home.ctaTitle}</h2>
        <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">{t.home.ctaSubtitle}</p>
        <Link
          href={`/${locale}/tours`}
          className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl text-lg transition-colors"
        >
          {t.common.seeAllTours}
          <ChevronRight size={20} />
        </Link>
      </section>
    </>
  )
}

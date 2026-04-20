import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronRight, Heart, Shield, Globe, Users } from 'lucide-react'
import { getTranslations, isValidLocale } from '@/lib/translations'
import type { Locale } from '@/types'

export async function generateMetadata({
  params,
}: {
  params: { locale: string }
}): Promise<Metadata> {
  if (!isValidLocale(params.locale)) return {}
  const t = getTranslations(params.locale as Locale)
  return {
    title: t.about.metaTitle,
    description: t.about.metaDescription,
    alternates: {
      canonical: `/${params.locale}/about`,
      languages: { en: '/en/about', es: '/es/about', 'x-default': '/en/about' },
    },
  }
}

const icons = [
  <Shield key="s" size={28} className="text-green-600" />,
  <Heart key="h" size={28} className="text-orange-500" />,
  <Globe key="g" size={28} className="text-green-600" />,
  <Users key="u" size={28} className="text-orange-500" />,
]

export default function AboutPage({ params }: { params: { locale: string } }) {
  if (!isValidLocale(params.locale)) notFound()
  const locale = params.locale as Locale
  const t = getTranslations(locale)

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-green-800 text-white py-16 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">{t.about.title}</h1>
        <p className="text-white/80 text-lg max-w-xl mx-auto">{t.about.subtitle}</p>
      </div>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">{t.about.storyTag}</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">{t.about.storyTitle}</h2>
            <p className="text-gray-600 leading-relaxed mb-4">{t.about.storyP1}</p>
            <p className="text-gray-600 leading-relaxed mb-4">{t.about.storyP2}</p>
            <p className="text-gray-600 leading-relaxed">{t.about.storyP3}</p>
          </div>
          <div className="h-72 bg-green-100 rounded-2xl flex items-center justify-center">
            <p className="text-green-600 text-sm">{t.about.teamPhotoPlaceholder}</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">{t.about.valuesTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.about.values.map((val, i) => (
              <div key={val.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center">
                <div className="flex justify-center mb-3">{icons[i]}</div>
                <h3 className="font-bold text-gray-900 mb-2">{val.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.about.ctaTitle}</h2>
        <p className="text-gray-500 text-lg mb-8 max-w-lg mx-auto">{t.about.ctaSubtitle}</p>
        <Link
          href={`/${locale}/tours`}
          className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl text-lg transition-colors"
        >
          {t.common.seeAllTours}
          <ChevronRight size={20} />
        </Link>
      </section>
    </div>
  )
}

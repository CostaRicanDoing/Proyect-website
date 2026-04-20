import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import TourCard from '@/components/tours/TourCard'
import { tours } from '@/data/tours'
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
    title: t.tours.metaTitle,
    description: t.tours.metaDescription,
    alternates: {
      canonical: `/${params.locale}/tours`,
      languages: {
        en: '/en/tours',
        es: '/es/tours',
        'x-default': '/en/tours',
      },
    },
  }
}

export default function ToursPage({ params }: { params: { locale: string } }) {
  if (!isValidLocale(params.locale)) notFound()
  const locale = params.locale as Locale
  const t = getTranslations(locale)

  const categories = [
    { value: 'all', label: t.tours.categories.all },
    { value: 'atv', label: t.tours.categories.atv },
    { value: 'zipline', label: t.tours.categories.zipline },
    { value: 'rafting', label: t.tours.categories.rafting },
    { value: 'waterfall', label: t.tours.categories.waterfall },
    { value: 'combo', label: t.tours.categories.combo },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-green-800 text-white py-14 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">{t.tours.title}</h1>
        <p className="text-white/80 text-lg max-w-xl mx-auto">{t.tours.subtitle}</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {categories.map((cat) => (
            <span
              key={cat.value}
              className="px-4 py-2 rounded-full border border-green-700 text-green-700 text-sm font-medium cursor-pointer hover:bg-green-700 hover:text-white transition-colors"
            >
              {cat.label}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} locale={locale} />
          ))}
        </div>
      </div>
    </div>
  )
}

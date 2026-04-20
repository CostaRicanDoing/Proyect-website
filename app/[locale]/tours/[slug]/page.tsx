import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Clock, Users, MapPin, CheckCircle2, XCircle, ChevronLeft } from 'lucide-react'
import { getTourBySlug, tours } from '@/data/tours'
import { formatPrice } from '@/lib/utils'
import BookingForm from '@/components/forms/BookingForm'
import { Separator } from '@/components/ui/separator'
import { getTranslations, isValidLocale, locales } from '@/lib/translations'
import type { Locale } from '@/types'

interface PageProps {
  params: { slug: string; locale: string }
}

export async function generateStaticParams() {
  const combos: Array<{ locale: string; slug: string }> = []
  for (const locale of locales) {
    for (const tour of tours) combos.push({ locale, slug: tour.slug })
  }
  return combos
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  if (!isValidLocale(params.locale)) return {}
  const tour = getTourBySlug(params.slug)
  if (!tour) return {}
  const locale = params.locale as Locale
  const title = locale === 'es' ? tour.titleEs : tour.title
  const description = locale === 'es' ? tour.descriptionEs : tour.description
  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/tours/${tour.slug}`,
      languages: {
        en: `/en/tours/${tour.slug}`,
        es: `/es/tours/${tour.slug}`,
        'x-default': `/en/tours/${tour.slug}`,
      },
    },
    openGraph: {
      title,
      description,
      images: [{ url: tour.image }],
    },
  }
}

export default function TourDetailPage({ params }: PageProps) {
  if (!isValidLocale(params.locale)) notFound()
  const tour = getTourBySlug(params.slug)
  if (!tour) notFound()
  const locale = params.locale as Locale
  const t = getTranslations(locale)

  const title = locale === 'es' ? tour.titleEs : tour.title
  const description = locale === 'es' ? tour.descriptionEs : tour.description
  const duration = locale === 'es' ? tour.durationEs : tour.duration
  const highlights = locale === 'es' ? tour.highlightsEs : tour.highlights
  const includes = locale === 'es' ? tour.includesEs : tour.includes
  const excludes = locale === 'es' ? tour.excludesEs : tour.excludes
  const difficultyLabel = t.tour.difficulty[tour.difficulty]

  const difficultyColor = {
    Easy: 'bg-green-100 text-green-700',
    Moderate: 'bg-yellow-100 text-yellow-700',
    Challenging: 'bg-red-100 text-red-700',
  }[tour.difficulty]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-64 sm:h-80 lg:h-96 bg-green-900">
        <Image
          src={tour.image}
          alt={title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <Link
            href={`/${locale}/tours`}
            className="inline-flex items-center gap-1 text-white/80 hover:text-white text-sm mb-2 transition-colors"
          >
            <ChevronLeft size={16} />
            {t.tour.allTours}
          </Link>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">{title}</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-2">
                <Clock size={16} className="text-green-600" />
                {duration}
              </span>
              <span className="flex items-center gap-2">
                <Users size={16} className="text-green-600" />
                {t.tour.maxPeople(tour.maxGroupSize)}
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={16} className="text-green-600" />
                {tour.location}
              </span>
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${difficultyColor}`}>
                {difficultyLabel}
              </span>
            </div>
          </div>

          {tour.gallery.length > 1 && (
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
              <div className="grid grid-cols-3 gap-2">
                {tour.gallery.slice(0, 6).map((img, i) => (
                  <div key={i} className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
                    <Image
                      src={img}
                      alt={`${title} photo ${i + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 33vw, 200px"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-3">{t.tour.about}</h2>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-4">{t.tour.highlights}</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-gray-700 text-sm">
                  <span className="text-orange-500 font-bold mt-0.5">★</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <CheckCircle2 size={18} className="text-green-600" />
                {t.tour.included}
              </h3>
              <ul className="space-y-1.5">
                {includes.map((item) => (
                  <li key={item} className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <XCircle size={18} className="text-red-400" />
                {t.tour.notIncluded}
              </h3>
              <ul className="space-y-1.5">
                {excludes.map((item) => (
                  <li key={item} className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-2">{t.tour.meetingPoint}</h2>
            <p className="text-gray-600 flex items-center gap-2">
              <MapPin size={16} className="text-orange-500 shrink-0" />
              {tour.meetingPoint}
            </p>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-20 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-baseline justify-between mb-6">
              <div>
                <span className="text-3xl font-extrabold text-green-700">{formatPrice(tour.price)}</span>
                <span className="text-gray-400 text-sm ml-1">{t.common.perPerson}</span>
              </div>
              <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${difficultyColor}`}>
                {difficultyLabel}
              </span>
            </div>
            <Separator className="mb-6" />
            <BookingForm tourId={tour.id} tourName={title} price={tour.price} locale={locale} />
          </div>
        </div>
      </div>
    </div>
  )
}

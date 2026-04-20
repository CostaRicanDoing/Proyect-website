import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CheckCircle2, ChevronRight } from 'lucide-react'
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
    title: t.bookingConfirmation.metaTitle,
    description: t.bookingConfirmation.metaDescription,
    robots: { index: false, follow: false },
  }
}

export default function BookingConfirmationPage({
  params,
}: {
  params: { locale: string }
}) {
  if (!isValidLocale(params.locale)) notFound()
  const locale = params.locale as Locale
  const t = getTranslations(locale)

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-16">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-10 text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle2 size={64} className="text-green-500" />
        </div>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-3">{t.bookingConfirmation.title}</h1>
        <p className="text-gray-600 text-lg mb-2">{t.bookingConfirmation.subtitle}</p>
        <p className="text-gray-500 mb-8 leading-relaxed">
          {t.bookingConfirmation.body1} <strong>{t.bookingConfirmation.body24h}</strong> {t.bookingConfirmation.body2}
        </p>

        <div className="bg-green-50 border border-green-200 rounded-xl p-5 text-left mb-8">
          <h2 className="font-bold text-gray-900 mb-3">{t.bookingConfirmation.nextTitle}</h2>
          <ol className="space-y-2 text-sm text-gray-600">
            {t.bookingConfirmation.steps.map((step, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="font-bold text-green-600 shrink-0">{i + 1}.</span>
                {step}
              </li>
            ))}
          </ol>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href={`/${locale}/tours`}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-colors"
          >
            {t.common.browseMoreTours}
            <ChevronRight size={18} />
          </Link>
          <Link
            href={`/${locale}`}
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium rounded-lg transition-colors"
          >
            {t.common.backToHome}
          </Link>
        </div>
      </div>
    </div>
  )
}

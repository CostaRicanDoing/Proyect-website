import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
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
    title: t.terms.metaTitle,
    description: t.terms.metaDescription,
    alternates: {
      canonical: `/${params.locale}/terms`,
      languages: { en: '/en/terms', es: '/es/terms', 'x-default': '/en/terms' },
    },
  }
}

export default function TermsPage({ params }: { params: { locale: string } }) {
  if (!isValidLocale(params.locale)) notFound()
  const locale = params.locale as Locale
  const t = getTranslations(locale)

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gray-900 text-white py-14 px-4 text-center">
        <h1 className="text-4xl font-extrabold mb-2">{t.terms.title}</h1>
        <p className="text-white/70 text-sm">{t.terms.lastUpdated}</p>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12 prose prose-gray prose-headings:text-gray-900 prose-p:text-gray-600 prose-li:text-gray-600">
        {t.terms.sections.map((s) => (
          <section key={s.heading} className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">{s.heading}</h2>
            <p className="text-gray-600 leading-relaxed mb-3">{s.body}</p>
          </section>
        ))}

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">{t.terms.cancellationHeading}</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            {t.terms.cancellationItems.map((it) => (
              <li key={it.bold}><strong>{it.bold}</strong> {it.rest}</li>
            ))}
          </ul>
          <p className="text-gray-600 mt-3">{t.terms.cancellationFooter}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">{t.terms.healthHeading}</h2>
          <p className="text-gray-600 leading-relaxed mb-3">{t.terms.healthBody}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">{t.terms.liabilityHeading}</h2>
          <p className="text-gray-600 leading-relaxed">{t.terms.liabilityBody}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">{t.terms.photoHeading}</h2>
          <p className="text-gray-600 leading-relaxed">{t.terms.photoBody}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">{t.terms.contactHeading}</h2>
          <p className="text-gray-600">
            {t.terms.contactPrefix}{' '}
            <a href="mailto:reservations@costaricandoing.com" className="text-lime-700 hover:underline">
              reservations@costaricandoing.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  )
}

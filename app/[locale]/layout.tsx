import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SplashScreen from '@/components/layout/SplashScreen'
import { isValidLocale, locales } from '@/lib/translations'
import type { Locale } from '@/types'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const locale = params.locale
  if (!isValidLocale(locale)) return {}

  const baseTitle =
    locale === 'es'
      ? 'Costa Rican Doing — Tours de Aventura en Costa Rica'
      : 'Costa Rican Doing — Adventure Tours in Costa Rica'
  const baseDescription =
    locale === 'es'
      ? 'Reserva los mejores tours de aventura en Costa Rica. ATV, tirolesa, rafting, cataratas y paquetes combo en La Fortuna y Arenal.'
      : 'Book the best adventure tours in Costa Rica. ATV, zipline, white water rafting, waterfall hikes and combo packages in La Fortuna and Arenal.'

  return {
    title: { default: baseTitle, template: '%s | Costa Rican Doing' },
    description: baseDescription,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: '/en',
        es: '/es',
        'x-default': '/en',
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'es' ? 'es_CR' : 'en_US',
      url: `https://costaricandoing.com/${locale}`,
      siteName: 'Costa Rican Doing',
      title: baseTitle,
      description: baseDescription,
      images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: baseTitle,
      description: baseDescription,
    },
  }
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  if (!isValidLocale(params.locale)) notFound()
  const locale = params.locale as Locale

  return (
    <>
      <SplashScreen />
      <Header locale={locale} />
      <main className="flex-1">{children}</main>
      <Footer locale={locale} />
    </>
  )
}

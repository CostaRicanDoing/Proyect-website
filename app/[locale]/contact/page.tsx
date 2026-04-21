import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import ContactForm from '@/components/forms/ContactForm'
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
    title: t.contact.metaTitle,
    description: t.contact.metaDescription,
    alternates: {
      canonical: `/${params.locale}/contact`,
      languages: { en: '/en/contact', es: '/es/contact', 'x-default': '/en/contact' },
    },
  }
}

export default function ContactPage({ params }: { params: { locale: string } }) {
  if (!isValidLocale(params.locale)) notFound()
  const locale = params.locale as Locale
  const t = getTranslations(locale)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gray-900 text-white py-14 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">{t.contact.title}</h1>
        <p className="text-white/80 text-lg max-w-xl mx-auto">{t.contact.subtitle}</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.contact.getInTouch}</h2>
          <div className="space-y-5 mb-8">
            <div className="flex items-start gap-4">
              <div className="p-2.5 bg-lime-100 rounded-lg shrink-0">
                <MapPin size={20} className="text-lime-700" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">{t.contact.location}</p>
                <p className="text-gray-500 text-sm">{t.contact.locationValue}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-2.5 bg-lime-100 rounded-lg shrink-0">
                <Phone size={20} className="text-lime-700" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">{t.contact.phone}</p>
                <a href="https://wa.me/50688952387" target="_blank" rel="noopener noreferrer" className="text-lime-700 hover:text-lime-600 text-sm transition-colors">
                  +506 8895-2387 (WhatsApp)
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-2.5 bg-lime-100 rounded-lg shrink-0">
                <Mail size={20} className="text-lime-700" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">{t.contact.email}</p>
                <a href="mailto:reservations@costaricandoing.com" className="text-lime-700 hover:text-lime-700 text-sm transition-colors">
                  reservations@costaricandoing.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-2.5 bg-lime-100 rounded-lg shrink-0">
                <Clock size={20} className="text-lime-700" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">{t.contact.hours}</p>
                <p className="text-gray-500 text-sm">{t.contact.hoursValue}</p>
              </div>
            </div>
          </div>

          <div className="h-56 bg-lime-100 rounded-2xl flex items-center justify-center border border-lime-200">
            <p className="text-lime-600 text-sm">{t.contact.mapPlaceholder}</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.contact.sendMessage}</h2>
          <ContactForm locale={locale} />
        </div>
      </div>
    </div>
  )
}

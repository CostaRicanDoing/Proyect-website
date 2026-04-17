import type { Metadata } from 'next'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import ContactForm from '@/components/forms/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us — Costa Rican Doing',
  description:
    'Get in touch with Costa Rican Doing. We are based in La Fortuna, Costa Rica and ready to help you plan your adventure.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-green-800 text-white py-14 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Contact Us</h1>
        <p className="text-white/80 text-lg max-w-xl mx-auto">
          Have questions? We&apos;re happy to help you plan the perfect Costa Rica adventure.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Info */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
          <div className="space-y-5 mb-8">
            <div className="flex items-start gap-4">
              <div className="p-2.5 bg-green-100 rounded-lg shrink-0">
                <MapPin size={20} className="text-green-700" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Location</p>
                <p className="text-gray-500 text-sm">La Fortuna, Alajuela, Costa Rica</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-2.5 bg-green-100 rounded-lg shrink-0">
                <Phone size={20} className="text-green-700" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Phone / WhatsApp</p>
                <a href="tel:+50688888888" className="text-green-700 hover:text-green-800 text-sm transition-colors">
                  +506 8888-8888
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-2.5 bg-green-100 rounded-lg shrink-0">
                <Mail size={20} className="text-green-700" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Email</p>
                <a href="mailto:info@costaricandoing.com" className="text-green-700 hover:text-green-800 text-sm transition-colors">
                  info@costaricandoing.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-2.5 bg-green-100 rounded-lg shrink-0">
                <Clock size={20} className="text-green-700" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Office Hours</p>
                <p className="text-gray-500 text-sm">Mon – Sun: 7:00 AM – 6:00 PM (CST)</p>
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="h-56 bg-green-100 rounded-2xl flex items-center justify-center border border-green-200">
            <p className="text-green-600 text-sm">[ Google Maps embed — La Fortuna, Costa Rica ]</p>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Booking Confirmation — Costa Rican Doing',
  description: 'Your booking request has been received. We will confirm within 24 hours.',
}

export default function BookingConfirmationPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-16">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-10 text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle2 size={64} className="text-green-500" />
        </div>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-3">Booking Received!</h1>
        <p className="text-gray-600 text-lg mb-2">
          Thank you for choosing Costa Rican Doing.
        </p>
        <p className="text-gray-500 mb-8 leading-relaxed">
          We&apos;ve received your booking request and will contact you within <strong>24 hours</strong> via email
          or WhatsApp to confirm the details and arrange payment.
        </p>

        <div className="bg-green-50 border border-green-200 rounded-xl p-5 text-left mb-8">
          <h2 className="font-bold text-gray-900 mb-3">What happens next?</h2>
          <ol className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start gap-2">
              <span className="font-bold text-green-600 shrink-0">1.</span>
              Our team reviews your booking request
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-green-600 shrink-0">2.</span>
              We contact you via WhatsApp or email to confirm availability
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-green-600 shrink-0">3.</span>
              You receive a confirmation with meeting point details
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-green-600 shrink-0">4.</span>
              Adventure time! 🌿
            </li>
          </ol>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/tours"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-colors"
          >
            Browse More Tours
            <ChevronRight size={18} />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium rounded-lg transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

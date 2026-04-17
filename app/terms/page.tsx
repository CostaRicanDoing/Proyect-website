import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions — Costa Rican Doing',
  description: 'Terms and conditions for booking adventure tours with Costa Rican Doing.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-green-800 text-white py-14 px-4 text-center">
        <h1 className="text-4xl font-extrabold mb-2">Terms & Conditions</h1>
        <p className="text-white/70 text-sm">Last updated: January 2025</p>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12 prose prose-gray prose-headings:text-gray-900 prose-p:text-gray-600 prose-li:text-gray-600">
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">1. Booking & Reservations</h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            All bookings are subject to availability and are confirmed only upon receipt of a confirmation email or
            WhatsApp message from Costa Rican Doing. Booking requests submitted through our website do not constitute
            a confirmed reservation.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">2. Payments</h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            Payment details will be provided upon confirmation. We accept cash (USD or CRC), credit cards, and bank
            transfers. Full payment or a deposit may be required at time of confirmation depending on the tour.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">3. Cancellation Policy</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li><strong>72+ hours before tour:</strong> Full refund</li>
            <li><strong>24–72 hours before tour:</strong> 50% refund</li>
            <li><strong>Less than 24 hours:</strong> No refund</li>
            <li><strong>No-show:</strong> No refund</li>
          </ul>
          <p className="text-gray-600 mt-3">
            Costa Rican Doing reserves the right to cancel tours due to unsafe weather or road conditions.
            In such cases, a full refund or rescheduling option will be offered.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">4. Health & Safety Requirements</h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            Participants must be in adequate physical condition for their chosen activity. Minimum age requirements
            apply per tour. Participants with medical conditions should consult their doctor before booking.
            Costa Rican Doing reserves the right to refuse participation if safety is at risk.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">5. Liability Waiver</h2>
          <p className="text-gray-600 leading-relaxed">
            Adventure activities carry inherent risks. By participating, guests acknowledge these risks and agree
            that Costa Rican Doing shall not be liable for injuries, accidents, or losses arising from participation
            in our tours, except in cases of gross negligence.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">6. Photography & Media</h2>
          <p className="text-gray-600 leading-relaxed">
            Costa Rican Doing may take photos or videos during tours for marketing purposes. By participating,
            guests grant permission for use of such media unless they explicitly opt out in writing before the tour.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">7. Contact</h2>
          <p className="text-gray-600">
            For questions about these terms, contact us at{' '}
            <a href="mailto:info@costaricandoing.com" className="text-green-700 hover:underline">
              info@costaricandoing.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  )
}

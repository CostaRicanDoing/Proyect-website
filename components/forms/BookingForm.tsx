'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { BookingFormData } from '@/types'

interface BookingFormProps {
  tourId: string
  tourName: string
  price: number
  locale?: 'en' | 'es'
}

export default function BookingForm({ tourId, tourName, price, locale = 'en' }: BookingFormProps) {
  const [form, setForm] = useState<Partial<BookingFormData>>({
    tourId,
    tourName,
    adults: 2,
    children: 0,
    name: '',
    email: '',
    phone: '',
    hotel: '',
    specialRequests: '',
  })
  const [selectedDate, setSelectedDate] = useState<string>('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const adults = form.adults ?? 2
  const children = form.children ?? 0
  const total = (adults + children) * price

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    // TODO: connect to Supabase booking table
    await new Promise((r) => setTimeout(r, 1200))
    setStatus('success')
  }

  if (status === 'success') {
    return (
      <div className="bg-lime-50 border border-lime-200 rounded-xl p-6 text-center">
        <div className="text-4xl mb-3">🎉</div>
        <h3 className="text-lime-700 font-bold text-lg mb-1">
          {locale === 'es' ? '¡Reserva enviada!' : 'Booking Request Sent!'}
        </h3>
        <p className="text-lime-700 text-sm">
          {locale === 'es'
            ? 'Te contactaremos en menos de 24 horas para confirmar.'
            : "We'll contact you within 24 hours to confirm your booking."}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Date */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {locale === 'es' ? 'Fecha del tour' : 'Tour Date'}
        </label>
        <Input
          required
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          min={new Date(Date.now() + 48 * 60 * 60 * 1000).toISOString().split('T')[0]}
        />
        <p className="text-xs text-gray-400 mt-1">
          {locale === 'es'
            ? 'Las reservas requieren al menos 48 horas de anticipación.'
            : 'Bookings require at least 48 hours advance notice.'}
        </p>
      </div>

      {/* Guests */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {locale === 'es' ? 'Adultos' : 'Adults'}
          </label>
          <Input
            type="number"
            min="1"
            max="20"
            value={adults}
            onChange={(e) => setForm({ ...form, adults: parseInt(e.target.value) })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {locale === 'es' ? 'Niños' : 'Children'}
          </label>
          <Input
            type="number"
            min="0"
            max="20"
            value={children}
            onChange={(e) => setForm({ ...form, children: parseInt(e.target.value) })}
          />
        </div>
      </div>

      {/* Contact */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {locale === 'es' ? 'Nombre completo' : 'Full Name'}
        </label>
        <Input
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {locale === 'es' ? 'Correo electrónico' : 'Email'}
        </label>
        <Input
          required
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {locale === 'es' ? 'Teléfono / WhatsApp' : 'Phone / WhatsApp'}
        </label>
        <Input
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          placeholder="+506..."
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {locale === 'es' ? 'Hotel o alojamiento' : 'Hotel / Accommodation'}
        </label>
        <Input
          value={form.hotel}
          onChange={(e) => setForm({ ...form, hotel: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {locale === 'es' ? 'Solicitudes especiales' : 'Special Requests'}
        </label>
        <Textarea
          rows={3}
          value={form.specialRequests}
          onChange={(e) => setForm({ ...form, specialRequests: e.target.value })}
        />
      </div>

      {/* Price summary */}
      <div className="bg-lime-50 rounded-lg p-4 border border-lime-100">
        <div className="flex justify-between text-sm text-gray-600 mb-1">
          <span>{adults} adult{adults !== 1 ? 's' : ''} × ${price}</span>
          <span>${adults * price}</span>
        </div>
        {children > 0 && (
          <div className="flex justify-between text-sm text-gray-600 mb-1">
            <span>{children} child{children !== 1 ? 'ren' : ''} × ${price}</span>
            <span>${children * price}</span>
          </div>
        )}
        <div className="flex justify-between font-bold text-gray-900 border-t border-lime-200 pt-2 mt-2">
          <span>{locale === 'es' ? 'Total estimado' : 'Estimated Total'}</span>
          <span className="text-lime-700">${total} USD</span>
        </div>
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full py-3 bg-lime-500 hover:bg-lime-600 disabled:opacity-60 text-white font-bold rounded-lg transition-colors text-lg"
      >
        {status === 'sending'
          ? (locale === 'es' ? 'Enviando...' : 'Sending...')
          : (locale === 'es' ? 'Solicitar Reserva' : 'Request Booking')}
      </button>

      <p className="text-xs text-gray-400 text-center">
        {locale === 'es'
          ? 'Sin pago por adelantado — te confirmaremos por WhatsApp o email.'
          : 'No payment required yet — we will confirm via WhatsApp or email.'}
      </p>
    </form>
  )
}

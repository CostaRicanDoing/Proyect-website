'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ContactFormData } from '@/types'

interface ContactFormProps {
  locale?: 'en' | 'es'
  tourName?: string
  className?: string
}

const t = {
  en: {
    name: 'Full Name',
    email: 'Email Address',
    phone: 'Phone Number',
    subject: 'Subject',
    message: 'Message',
    submit: 'Send Message',
    sending: 'Sending...',
    success: "Thank you! We'll get back to you within 24 hours.",
    error: 'Something went wrong. Please try again.',
  },
  es: {
    name: 'Nombre completo',
    email: 'Correo electrónico',
    phone: 'Número de teléfono',
    subject: 'Asunto',
    message: 'Mensaje',
    submit: 'Enviar mensaje',
    sending: 'Enviando...',
    success: '¡Gracias! Te responderemos en menos de 24 horas.',
    error: 'Algo salió mal. Por favor intenta de nuevo.',
  },
}

export default function ContactForm({ locale = 'en', tourName, className }: ContactFormProps) {
  const [form, setForm] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: tourName ? `Inquiry about ${tourName}` : '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const tx = t[locale]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    // TODO: connect to Supabase or email service
    await new Promise((r) => setTimeout(r, 1000))
    setStatus('success')
  }

  if (status === 'success') {
    return (
      <div className="bg-lime-50 border border-lime-200 rounded-xl p-6 text-center">
        <p className="text-lime-700 font-medium">{tx.success}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{tx.name}</label>
          <Input
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder={tx.name}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{tx.email}</label>
          <Input
            required
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder={tx.email}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{tx.phone}</label>
          <Input
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="+506 0000-0000"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{tx.subject}</label>
          <Input
            required
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
            placeholder={tx.subject}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">{tx.message}</label>
        <Textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder={tx.message}
        />
      </div>

      {status === 'error' && (
        <p className="text-red-600 text-sm">{tx.error}</p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full py-3 bg-lime-600 hover:bg-gray-900 disabled:opacity-60 text-white font-semibold rounded-lg transition-colors"
      >
        {status === 'sending' ? tx.sending : tx.submit}
      </button>
    </form>
  )
}

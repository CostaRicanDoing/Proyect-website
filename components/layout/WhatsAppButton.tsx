'use client'

import type { Locale } from '@/types'

interface WhatsAppButtonProps {
  locale?: Locale
}

export default function WhatsAppButton({ locale = 'en' }: WhatsAppButtonProps) {
  const message =
    locale === 'es'
      ? 'Hola, me interesa reservar un tour en Costa Rican Doing'
      : "Hi, I'm interested in booking a tour with Costa Rican Doing"

  const href = `https://wa.me/50688952387?text=${encodeURIComponent(message)}`
  const label = locale === 'es' ? 'Chatear por WhatsApp' : 'Chat on WhatsApp'

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="fixed bottom-6 right-6 z-40 group"
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping" aria-hidden="true" />
      {/* Button */}
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-lg shadow-black/30 transition-colors">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-7 h-7 fill-white"
          aria-hidden="true"
        >
          <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.158-.73.158-1.09 0-.33-1.617-.99-1.933-1.103zm-2.78 7.44c-4.6 0-8.34-3.74-8.34-8.34 0-4.602 3.74-8.34 8.34-8.34 4.603 0 8.34 3.738 8.34 8.34 0 4.6-3.737 8.34-8.34 8.34zm0-18.87c-5.82 0-10.53 4.71-10.53 10.53 0 2.07.61 4.07 1.72 5.79L5 27l3.4-1.104a10.53 10.53 0 0 0 5.93 1.79c5.82 0 10.53-4.71 10.53-10.53S22.15 5.775 16.33 5.775z" />
        </svg>
      </span>
    </a>
  )
}

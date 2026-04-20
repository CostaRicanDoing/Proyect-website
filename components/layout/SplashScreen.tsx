'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

export default function SplashScreen() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Already seen this session — hide immediately
    if (sessionStorage.getItem('crd_splash')) {
      el.style.display = 'none'
      return
    }

    sessionStorage.setItem('crd_splash', '1')

    const fadeTimer = setTimeout(() => {
      el.style.opacity = '0'
    }, 2400)

    const hideTimer = setTimeout(() => {
      el.style.display = 'none'
    }, 3100)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(hideTimer)
    }
  }, [])

  return (
    <div
      ref={ref}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
      style={{ transition: 'opacity 0.7s ease-out' }}
    >
      <div style={{ animation: 'crd-pulse 2s ease-in-out infinite' }}>
        <Image
          src="/logo.png"
          alt="Costa Rican Doing"
          width={300}
          height={150}
          priority
          style={{ filter: 'drop-shadow(0 0 20px rgba(101,200,0,0.55))' }}
        />
      </div>
    </div>
  )
}

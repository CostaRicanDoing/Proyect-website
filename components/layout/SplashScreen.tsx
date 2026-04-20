'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const SPLASH_KEY = 'crd_splash_seen'

export default function SplashScreen() {
  const [visible, setVisible] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // Only show once per browser session
    const seen = sessionStorage.getItem(SPLASH_KEY)
    if (seen) return

    setVisible(true)
    sessionStorage.setItem(SPLASH_KEY, '1')

    // Start fade-out after 2 seconds
    const fadeTimer = setTimeout(() => setFadeOut(true), 2000)
    // Fully remove from DOM after fade completes
    const hideTimer = setTimeout(() => setVisible(false), 2600)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(hideTimer)
    }
  }, [])

  if (!visible) return null

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
      style={{
        opacity: fadeOut ? 0 : 1,
        transition: 'opacity 0.6s ease-out',
        pointerEvents: fadeOut ? 'none' : 'all',
      }}
    >
      <div className="animate-heartbeat">
        <Image
          src="/logo.png"
          alt="Costa Rican Doing"
          width={320}
          height={160}
          priority
          style={{
            filter: 'drop-shadow(0 0 24px rgba(101, 200, 0, 0.6))',
          }}
        />
      </div>
    </div>
  )
}

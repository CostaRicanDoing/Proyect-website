import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SplashScreen from '@/components/layout/SplashScreen'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Costa Rican Doing — Adventure Tours in Costa Rica',
    template: '%s | Costa Rican Doing',
  },
  description:
    'Book the best adventure tours in Costa Rica. ATV, zipline, white water rafting, waterfall hikes and combo packages in La Fortuna and Arenal.',
  keywords: [
    'Costa Rica tours',
    'ATV La Fortuna',
    'zipline Costa Rica',
    'rafting Costa Rica',
    'adventure tourism Costa Rica',
    'Arenal tours',
  ],
  authors: [{ name: 'Costa Rican Doing' }],
  creator: 'Costa Rican Doing',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://costaricandoing.com',
    siteName: 'Costa Rican Doing',
    title: 'Costa Rican Doing — Adventure Tours in Costa Rica',
    description:
      'Book the best adventure tours in Costa Rica. ATV, zipline, white water rafting, waterfall hikes and combo packages.',
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Costa Rican Doing — Adventure Tours in Costa Rica',
    description: 'Book the best adventure tours in Costa Rica.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  metadataBase: new URL('https://costaricandoing.com'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        <SplashScreen />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

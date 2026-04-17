import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, Heart, Shield, Globe, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us — Costa Rican Doing',
  description:
    'Meet the team behind Costa Rican Doing. We are local adventure experts based in La Fortuna, Costa Rica, dedicated to delivering unforgettable tours.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-green-800 text-white py-16 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">About Us</h1>
        <p className="text-white/80 text-lg max-w-xl mx-auto">
          We are local adventurers, guides, and nature lovers — and we want to share Costa Rica&apos;s magic with you.
        </p>
      </div>

      {/* Story */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Our Story</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">Born in La Fortuna</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Costa Rican Doing was founded by a family of adventure enthusiasts who grew up in the shadow of Arenal Volcano.
              We know every trail, waterfall, and river crossing in the region — because we&apos;ve explored them all ourselves.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our mission is simple: give every visitor the authentic, thrilling, and safe adventure experience that Costa Rica is famous for.
              We operate small groups, use professional equipment, and our bilingual guides are trained to make every moment special.
            </p>
            <p className="text-gray-600 leading-relaxed">
              When you book with us, you&apos;re booking with people who truly love what they do — and love showing visitors the real Costa Rica.
            </p>
          </div>
          <div className="h-72 bg-green-100 rounded-2xl flex items-center justify-center">
            <p className="text-green-600 text-sm">[ Team Photo ]</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Shield size={28} className="text-green-600" />,
                title: 'Safety',
                desc: 'Your safety is non-negotiable. All equipment is inspected daily and our guides are certified.',
              },
              {
                icon: <Heart size={28} className="text-orange-500" />,
                title: 'Passion',
                desc: 'We love adventure and it shows. We put our heart into every tour we run.',
              },
              {
                icon: <Globe size={28} className="text-green-600" />,
                title: 'Sustainability',
                desc: 'We respect and protect the nature that makes Costa Rica so special.',
              },
              {
                icon: <Users size={28} className="text-orange-500" />,
                title: 'Community',
                desc: 'We hire and support local guides, drivers, and businesses.',
              },
            ].map((val) => (
              <div key={val.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center">
                <div className="flex justify-center mb-3">{val.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{val.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Come adventure with us</h2>
        <p className="text-gray-500 text-lg mb-8 max-w-lg mx-auto">
          Browse our tours and find your perfect Costa Rica adventure.
        </p>
        <Link
          href="/tours"
          className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl text-lg transition-colors"
        >
          See All Tours
          <ChevronRight size={20} />
        </Link>
      </section>
    </div>
  )
}

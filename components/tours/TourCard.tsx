import Link from 'next/link'
import Image from 'next/image'
import { Clock, Users, MapPin, Star } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Tour } from '@/types'
import { formatPrice, cn } from '@/lib/utils'

interface TourCardProps {
  tour: Tour
  locale?: 'en' | 'es'
  className?: string
}

const categoryColors: Record<string, string> = {
  atv: 'bg-orange-100 text-orange-700',
  zipline: 'bg-green-100 text-green-700',
  rafting: 'bg-blue-100 text-blue-700',
  waterfall: 'bg-cyan-100 text-cyan-700',
  combo: 'bg-purple-100 text-purple-700',
  hiking: 'bg-lime-100 text-lime-700',
}

const categoryLabels: Record<string, { en: string; es: string }> = {
  atv: { en: 'ATV', es: 'ATV' },
  zipline: { en: 'Zipline', es: 'Tirolesa' },
  rafting: { en: 'Rafting', es: 'Rafting' },
  waterfall: { en: 'Waterfall', es: 'Catarata' },
  combo: { en: 'Combo', es: 'Combo' },
  hiking: { en: 'Hiking', es: 'Senderismo' },
}

export default function TourCard({ tour, locale = 'en', className }: TourCardProps) {
  const title = locale === 'es' ? tour.titleEs : tour.title
  const description = locale === 'es' ? tour.descriptionEs : tour.description
  const duration = locale === 'es' ? tour.durationEs : tour.duration
  const catLabel = categoryLabels[tour.category]?.[locale] ?? tour.category

  return (
    <Link href={`/tours/${tour.slug}`} className={cn('group block', className)}>
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100">
        {/* Image */}
        <div className="relative h-52 overflow-hidden bg-gray-200">
          <Image
            src={tour.image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute top-3 left-3">
            <span className={cn('px-2.5 py-1 rounded-full text-xs font-semibold', categoryColors[tour.category])}>
              {catLabel}
            </span>
          </div>
          {tour.featured && (
            <div className="absolute top-3 right-3">
              <span className="flex items-center gap-1 bg-orange-500 text-white px-2.5 py-1 rounded-full text-xs font-semibold">
                <Star size={10} fill="white" />
                {locale === 'es' ? 'Destacado' : 'Featured'}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="font-bold text-gray-900 text-lg leading-tight mb-2 group-hover:text-green-700 transition-colors">
            {title}
          </h3>
          <p className="text-gray-500 text-sm line-clamp-2 mb-4">{description}</p>

          <div className="flex flex-wrap gap-3 text-xs text-gray-500 mb-4">
            <span className="flex items-center gap-1">
              <Clock size={13} className="text-green-600" />
              {duration}
            </span>
            <span className="flex items-center gap-1">
              <Users size={13} className="text-green-600" />
              {locale === 'es' ? `Máx ${tour.maxGroupSize}` : `Max ${tour.maxGroupSize}`}
            </span>
            <span className="flex items-center gap-1">
              <MapPin size={13} className="text-green-600" />
              {tour.location}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold text-green-700">{formatPrice(tour.price)}</span>
              <span className="text-gray-400 text-xs ml-1">/ {locale === 'es' ? 'persona' : 'person'}</span>
            </div>
            <span className="inline-flex items-center px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-lg transition-colors">
              {locale === 'es' ? 'Reservar' : 'Book Now'}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

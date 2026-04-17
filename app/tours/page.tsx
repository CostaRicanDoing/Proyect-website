import type { Metadata } from 'next'
import TourCard from '@/components/tours/TourCard'
import { tours } from '@/data/tours'

export const metadata: Metadata = {
  title: 'Adventure Tours in Costa Rica',
  description:
    'Browse all our Costa Rica adventure tours: ATV, zipline, rafting, waterfall hikes and combo packages. Book direct with local experts in La Fortuna.',
}

const categories = [
  { value: 'all', label: 'All Tours' },
  { value: 'atv', label: 'ATV' },
  { value: 'zipline', label: 'Zipline' },
  { value: 'rafting', label: 'Rafting' },
  { value: 'waterfall', label: 'Waterfall' },
  { value: 'combo', label: 'Combos' },
]

export default function ToursPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page header */}
      <div className="bg-green-800 text-white py-14 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Our Adventures</h1>
        <p className="text-white/80 text-lg max-w-xl mx-auto">
          Choose from ATV, zipline, rafting, waterfall hikes and more — all with certified local guides.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Category filter — static for now, JS filter can be added later */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {categories.map((cat) => (
            <span
              key={cat.value}
              className="px-4 py-2 rounded-full border border-green-700 text-green-700 text-sm font-medium cursor-pointer hover:bg-green-700 hover:text-white transition-colors"
            >
              {cat.label}
            </span>
          ))}
        </div>

        {/* Tours grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </div>
    </div>
  )
}

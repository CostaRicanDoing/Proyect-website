export interface Tour {
  id: string
  slug: string
  title: string
  titleEs: string
  description: string
  descriptionEs: string
  location: string
  duration: string
  durationEs: string
  price: number
  priceLabel: string
  category: TourCategory
  difficulty: 'Easy' | 'Moderate' | 'Challenging'
  difficultyEs: 'Fácil' | 'Moderado' | 'Desafiante'
  image: string
  gallery: string[]
  includes: string[]
  includesEs: string[]
  excludes: string[]
  excludesEs: string[]
  maxGroupSize: number
  minAge: number
  featured: boolean
  highlights: string[]
  highlightsEs: string[]
  meetingPoint: string
  availableDays: string[]
  startTimes: string[]
}

export type TourCategory =
  | 'atv'
  | 'zipline'
  | 'rafting'
  | 'waterfall'
  | 'combo'
  | 'hiking'

export interface BlogPost {
  id: string
  slug: string
  title: string
  titleEs: string
  excerpt: string
  excerptEs: string
  content: string
  contentEs: string
  author: string
  publishedAt: string
  image: string
  tags: string[]
  category: string
}

export interface BookingFormData {
  tourId: string
  tourName: string
  date: Date
  adults: number
  children: number
  name: string
  email: string
  phone: string
  hotel: string
  specialRequests: string
}

export interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export type Locale = 'en' | 'es'

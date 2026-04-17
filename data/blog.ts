import { BlogPost } from '@/types'

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'best-time-to-visit-costa-rica',
    title: 'Best Time to Visit Costa Rica for Adventure Tourism',
    titleEs: 'Mejor época para visitar Costa Rica para el turismo de aventura',
    excerpt:
      'Planning your Costa Rica adventure? Discover the best seasons, weather patterns, and tips for timing your trip perfectly.',
    excerptEs:
      '¿Planificando tu aventura en Costa Rica? Descubre las mejores temporadas, patrones climáticos y consejos para programar tu viaje perfectamente.',
    content: `Costa Rica is a year-round destination, but timing your visit can make a big difference in your experience...`,
    contentEs: `Costa Rica es un destino durante todo el año, pero el momento de tu visita puede hacer una gran diferencia en tu experiencia...`,
    author: 'Costa Rican Doing Team',
    publishedAt: '2024-01-15',
    image: '/images/blog/best-time-costa-rica.jpg',
    tags: ['travel tips', 'planning', 'weather', 'seasons'],
    category: 'Travel Tips',
  },
  {
    id: '2',
    slug: 'arenal-volcano-guide',
    title: 'Complete Guide to Arenal Volcano: Activities & Tips',
    titleEs: 'Guía completa del Volcán Arenal: Actividades y consejos',
    excerpt:
      'Everything you need to know about visiting Arenal Volcano — from the best viewpoints to must-do adventure activities.',
    excerptEs:
      'Todo lo que necesitas saber sobre visitar el Volcán Arenal: desde los mejores miradores hasta las actividades de aventura imperdibles.',
    content: `Arenal Volcano is one of Costa Rica's most iconic landmarks and a hub for adventure tourism...`,
    contentEs: `El Volcán Arenal es uno de los hitos más icónicos de Costa Rica y un centro de turismo de aventura...`,
    author: 'Costa Rican Doing Team',
    publishedAt: '2024-02-10',
    image: '/images/blog/arenal-volcano-guide.jpg',
    tags: ['arenal', 'volcano', 'la fortuna', 'adventure'],
    category: 'Destinations',
  },
  {
    id: '3',
    slug: 'atv-safety-tips-costa-rica',
    title: 'ATV Safety Tips for Your Costa Rica Adventure',
    titleEs: 'Consejos de seguridad en ATV para tu aventura en Costa Rica',
    excerpt:
      'Stay safe and have fun on your ATV tour with these essential safety tips and what to expect on the trails.',
    excerptEs:
      'Mantente seguro y diviértete en tu tour de ATV con estos consejos de seguridad esenciales y lo que debes esperar en los senderos.',
    content: `ATV tours are one of the most thrilling ways to explore Costa Rica's diverse landscapes...`,
    contentEs: `Los tours en ATV son una de las formas más emocionantes de explorar los diversos paisajes de Costa Rica...`,
    author: 'Costa Rican Doing Team',
    publishedAt: '2024-03-05',
    image: '/images/blog/atv-safety-tips.jpg',
    tags: ['atv', 'safety', 'adventure', 'tips'],
    category: 'Adventure Tips',
  },
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

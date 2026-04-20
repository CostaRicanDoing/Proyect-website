import { MetadataRoute } from 'next'
import { tours } from '@/data/tours'
import { blogPosts } from '@/data/blog'

const BASE_URL = 'https://costaricandoing.com'
const LOCALES = ['en', 'es'] as const

type Entry = MetadataRoute.Sitemap[number]

function entry(path: string, priority: number, changeFrequency: Entry['changeFrequency'], lastModified: Date = new Date()): Entry[] {
  return LOCALES.map((locale) => ({
    url: `${BASE_URL}/${locale}${path}`,
    lastModified,
    changeFrequency,
    priority,
    alternates: {
      languages: {
        en: `${BASE_URL}/en${path}`,
        es: `${BASE_URL}/es${path}`,
        'x-default': `${BASE_URL}/en${path}`,
      },
    },
  }))
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths: Array<[string, number, Entry['changeFrequency']]> = [
    ['', 1.0, 'weekly'],
    ['/tours', 0.9, 'weekly'],
    ['/blog', 0.7, 'weekly'],
    ['/about', 0.6, 'monthly'],
    ['/contact', 0.6, 'monthly'],
    ['/terms', 0.3, 'yearly'],
  ]

  const staticEntries = staticPaths.flatMap(([p, pr, cf]) => entry(p, pr, cf))
  const tourEntries = tours.flatMap((t) => entry(`/tours/${t.slug}`, 0.8, 'monthly'))
  const blogEntries = blogPosts.flatMap((p) =>
    entry(`/blog/${p.slug}`, 0.6, 'monthly', new Date(p.publishedAt))
  )

  return [...staticEntries, ...tourEntries, ...blogEntries]
}

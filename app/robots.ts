import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/booking/confirmation', '/api/'],
    },
    sitemap: 'https://costaricandoing.com/sitemap.xml',
  }
}

import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { blogPosts } from '@/data/blog'
import { formatDate } from '@/lib/utils'
import { getTranslations, isValidLocale } from '@/lib/translations'
import type { Locale } from '@/types'

export async function generateMetadata({
  params,
}: {
  params: { locale: string }
}): Promise<Metadata> {
  if (!isValidLocale(params.locale)) return {}
  const t = getTranslations(params.locale as Locale)
  return {
    title: t.blog.metaTitle,
    description: t.blog.metaDescription,
    alternates: {
      canonical: `/${params.locale}/blog`,
      languages: { en: '/en/blog', es: '/es/blog', 'x-default': '/en/blog' },
    },
  }
}

export default function BlogPage({ params }: { params: { locale: string } }) {
  if (!isValidLocale(params.locale)) notFound()
  const locale = params.locale as Locale
  const t = getTranslations(locale)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-green-800 text-white py-14 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">{t.blog.title}</h1>
        <p className="text-white/80 text-lg max-w-xl mx-auto">{t.blog.subtitle}</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => {
          const title = locale === 'es' ? post.titleEs : post.title
          const excerpt = locale === 'es' ? post.excerptEs : post.excerpt
          return (
            <Link key={post.id} href={`/${locale}/blog/${post.slug}`} className="group block">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                <div className="relative h-48 bg-green-100 flex items-center justify-center">
                  <p className="text-green-600 text-xs">{t.blog.blogImagePlaceholder}</p>
                </div>
                <div className="p-5">
                  <span className="text-xs text-orange-500 font-semibold uppercase tracking-wider">
                    {post.category}
                  </span>
                  <h2 className="font-bold text-gray-900 text-lg mt-1 mb-2 group-hover:text-green-700 transition-colors line-clamp-2">
                    {title}
                  </h2>
                  <p className="text-gray-500 text-sm line-clamp-2 mb-3">{excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>{post.author}</span>
                    <span>{formatDate(post.publishedAt)}</span>
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { getBlogPostBySlug, blogPosts } from '@/data/blog'
import { formatDate } from '@/lib/utils'
import { getTranslations, isValidLocale, locales } from '@/lib/translations'
import type { Locale } from '@/types'

interface PageProps {
  params: { locale: string; slug: string }
}

export async function generateStaticParams() {
  return locales.flatMap((locale) =>
    blogPosts.map((post) => ({ locale, slug: post.slug }))
  )
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  if (!isValidLocale(params.locale)) return {}
  const post = getBlogPostBySlug(params.slug)
  if (!post) return {}
  const locale = params.locale as Locale
  const title = locale === 'es' ? post.titleEs : post.title
  const excerpt = locale === 'es' ? post.excerptEs : post.excerpt
  return {
    title,
    description: excerpt,
    alternates: {
      canonical: `/${locale}/blog/${post.slug}`,
      languages: {
        en: `/en/blog/${post.slug}`,
        es: `/es/blog/${post.slug}`,
        'x-default': `/en/blog/${post.slug}`,
      },
    },
    openGraph: {
      title,
      description: excerpt,
      images: [{ url: post.image }],
    },
  }
}

export default function BlogPostPage({ params }: PageProps) {
  if (!isValidLocale(params.locale)) notFound()
  const post = getBlogPostBySlug(params.slug)
  if (!post) notFound()
  const locale = params.locale as Locale
  const t = getTranslations(locale)
  const title = locale === 'es' ? post.titleEs : post.title
  const excerpt = locale === 'es' ? post.excerptEs : post.excerpt
  const content = locale === 'es' ? post.contentEs : post.content

  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-64 sm:h-80 bg-lime-100 flex items-center justify-center">
        <p className="text-lime-600 text-sm">{t.blog.blogPostImagePlaceholder}</p>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <Link href={`/${locale}/blog`} className="flex items-center gap-1 text-white/80 hover:text-white text-sm transition-colors">
            <ChevronLeft size={16} />
            {t.blog.backToBlog}
          </Link>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <span className="text-xs text-lime-500 font-semibold uppercase tracking-wider">
          {post.category}
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 mb-4">{title}</h1>
        <div className="flex items-center gap-3 text-sm text-gray-400 mb-8">
          <span>{post.author}</span>
          <span>·</span>
          <span>{formatDate(post.publishedAt)}</span>
        </div>

        <div className="prose prose-lg prose-lime max-w-none text-gray-700">
          <p className="text-xl text-gray-600 leading-relaxed mb-6">{excerpt}</p>
          <p className="leading-relaxed">{content}</p>
          <p className="leading-relaxed mt-4">{t.blog.extraParagraph}</p>
        </div>

        <div className="flex flex-wrap gap-2 mt-10 pt-6 border-t border-gray-100">
          {post.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
              #{tag}
            </span>
          ))}
        </div>

        <div className="mt-12 bg-lime-50 border border-lime-200 rounded-2xl p-6 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{t.blog.ctaTitle}</h3>
          <p className="text-gray-600 mb-4">{t.blog.ctaSubtitle}</p>
          <Link
            href={`/${locale}/tours`}
            className="inline-flex items-center px-6 py-3 bg-lime-500 hover:bg-lime-600 text-white font-bold rounded-lg transition-colors"
          >
            {t.common.viewOurTours}
          </Link>
        </div>
      </div>
    </div>
  )
}

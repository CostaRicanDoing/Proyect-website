import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { getBlogPostBySlug, blogPosts } from '@/data/blog'
import { formatDate } from '@/lib/utils'

interface PageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }],
    },
  }
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getBlogPostBySlug(params.slug)
  if (!post) notFound()

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative h-64 sm:h-80 bg-green-100 flex items-center justify-center">
        <p className="text-green-600 text-sm">[Blog post image]</p>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <Link href="/blog" className="flex items-center gap-1 text-white/80 hover:text-white text-sm transition-colors">
            <ChevronLeft size={16} />
            Blog
          </Link>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <span className="text-xs text-orange-500 font-semibold uppercase tracking-wider">
          {post.category}
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 mb-4">
          {post.title}
        </h1>
        <div className="flex items-center gap-3 text-sm text-gray-400 mb-8">
          <span>{post.author}</span>
          <span>·</span>
          <span>{formatDate(post.publishedAt)}</span>
        </div>

        <div className="prose prose-lg prose-green max-w-none text-gray-700">
          <p className="text-xl text-gray-600 leading-relaxed mb-6">{post.excerpt}</p>
          <p className="leading-relaxed">{post.content}</p>
          <p className="leading-relaxed mt-4">
            Costa Rica offers incredible biodiversity, stunning natural landscapes, and world-class adventure activities.
            Whether you&apos;re a first-time visitor or a repeat traveler, there&apos;s always something new to discover in this
            beautiful country.
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-10 pt-6 border-t border-gray-100">
          {post.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
              #{tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to experience Costa Rica?</h3>
          <p className="text-gray-600 mb-4">Book one of our adventure tours and create your own story.</p>
          <Link
            href="/tours"
            className="inline-flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-colors"
          >
            View Our Tours
          </Link>
        </div>
      </div>
    </div>
  )
}

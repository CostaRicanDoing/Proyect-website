import type { Metadata } from 'next'
import Link from 'next/link'
import { blogPosts } from '@/data/blog'
import { formatDate } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Blog — Costa Rica Adventure Travel Tips',
  description:
    'Travel tips, destination guides, and adventure insights for visiting Costa Rica. La Fortuna, Arenal, ATV, zipline, and more.',
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-green-800 text-white py-14 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Travel Blog</h1>
        <p className="text-white/80 text-lg max-w-xl mx-auto">
          Tips, guides, and stories from the jungles of Costa Rica.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Link key={post.id} href={`/blog/${post.slug}`} className="group block">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
              <div className="relative h-48 bg-green-100 flex items-center justify-center">
                <p className="text-green-600 text-xs">[ Blog Image ]</p>
              </div>
              <div className="p-5">
                <span className="text-xs text-orange-500 font-semibold uppercase tracking-wider">
                  {post.category}
                </span>
                <h2 className="font-bold text-gray-900 text-lg mt-1 mb-2 group-hover:text-green-700 transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-gray-500 text-sm line-clamp-2 mb-3">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>{post.author}</span>
                  <span>{formatDate(post.publishedAt)}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

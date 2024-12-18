'use client'

import Image from "next/image"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export default function BlogSectionClient({ blogs, meta }) {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">News</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={post.image || "/placeholder.svg?height=400&width=600"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 transition-all duration-300 group-hover:translate-y-[-8px]">
                  <div className="flex items-center gap-2 mb-2">
                    {post.author && (
                      <>
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={post.author.avatar} alt={post.author.name} />
                          <AvatarFallback>
                            {post.author.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-sm text-gray-300">{post.author.name}</span>
                        <span className="text-gray-300">·</span>
                      </>
                    )}
                    <time className="text-sm text-gray-300">{new Date(post.date).toLocaleDateString()}</time>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{post.title}</h3>
                  <p className="text-sm text-gray-300 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {post.description.length > 150 ? `${post.description.slice(0, 150)}...` : post.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {meta.totalPages > 1 && (
          <div className="mt-8 flex justify-center">
            <nav className="inline-flex" aria-label="Pagination">
              {Array.from({ length: meta.totalPages }, (_, i) => i + 1).map((page) => (
                <Link
                  key={page}
                  href={`/blog?page=${page}`}
                  className={`px-4 py-2 border ${
                    meta.currentPage === page
                      ? 'bg-blue-500 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {page}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </section>
  )
}


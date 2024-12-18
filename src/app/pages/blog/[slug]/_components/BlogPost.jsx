'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Calendar } from 'lucide-react'
import { format } from 'date-fns'
import { Button } from '@/components/ui/button'



export default function BlogPost({ post }) {
  return (
    <article className="max-w-4xl mx-auto px-4 mb-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold my-5">{post.title}</h1>
        <div className="space-y-4 mb-8">
          <div className="flex items-center justify-between">
            <Link href="/blog">
              <Button variant="ghost" className="group">
                <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                Back to Blog
              </Button>
            </Link>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {format(new Date(post.date), 'MMMM dd, yyyy')}
              </span>
            </div>
          </div>
        </div>

        <div className=" relative aspect-[16/9] mb-8 rounded-xl overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Blog Content */}
        <div
          className="prose dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.description}}
        />
      </motion.div>
    </article>
  )
}


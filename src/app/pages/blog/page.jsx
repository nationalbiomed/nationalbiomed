import Image from "next/image"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const blogPosts = [
  {
    title: "Boost your conversion rate",
    date: "Mar 16, 2020",
    author: {
      name: "Michael Foster",
      avatar: "/placeholder.svg",
    },
    image: "/placeholder.svg?height=400&width=600",
    slug: "boost-conversion-rate",
    description: "Learn effective strategies to increase your website's conversion rate and drive more sales.",
  },
  {
    title: "How to use search engine optimization to drive sales",
    date: "Mar 10, 2020",
    author: {
      name: "Lindsay Walton",
      avatar: "/placeholder.svg",
    },
    image: "/placeholder.svg?height=400&width=600",
    slug: "seo-sales-optimization",
    description: "Discover powerful SEO techniques that can help boost your online visibility and increase sales.",
  },
  {
    title: "Improve your customer experience",
    date: "Feb 12, 2020",
    author: {
      name: "Tom Cook",
      avatar: "/placeholder.svg",
    },
    image: "/placeholder.svg?height=400&width=600",
    slug: "customer-experience",
    description: "Explore ways to enhance your customer experience and build lasting relationships with your audience.",
  },
  {
    title: "Improve your customer experience",
    date: "Feb 12, 2020",
    author: {
      name: "Tom Cook",
      avatar: "/placeholder.svg",
    },
    image: "/placeholder.svg?height=400&width=600",
    slug: "customer-experience2",
    description: "Explore ways to enhance your customer experience and build lasting relationships with your audience.",
  },
]

export default function BlogSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">News</h2>
          {/* <p className="text-xl text-muted-foreground">
            Learn how to grow your business with our expert advice.
          </p> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 transition-all duration-300 group-hover:translate-y-[-8px]">
                  <div className="flex items-center gap-2 mb-2">
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
                    <time className="text-sm text-gray-300">{post.date}</time>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{post.title}</h3>
                  <p className="text-sm text-gray-300 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {post.description}
                  </p>
                  <span className="inline-block px-3 py-1 bg-white/20 text-white text-sm rounded-full">
                    {post.slug}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}


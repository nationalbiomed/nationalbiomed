import BlogSectionClient from './_components/Blog'

async function getBlogPosts() {
  const res = await fetch('http://localhost:3000/api/blog')
  if (!res.ok) {
    throw new Error('Failed to fetch blog posts')
  }
  return res.json()
}

export default async function BlogSection() {
  const { blogs, meta } = await getBlogPosts()
  return <BlogSectionClient blogs={blogs} meta={meta} />
}


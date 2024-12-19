import BlogSectionClient from './_components/Blog'

async function getBlogPosts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/blog`);
  if (!res.ok) {
    throw new Error('Failed to fetch blog posts');
  }
  return res.json();
}


export default async function BlogSection() {
  const { blogs, meta } = await getBlogPosts()
  return <BlogSectionClient blogs={blogs} meta={meta} />
}

export const dynamic = 'force-dynamic';
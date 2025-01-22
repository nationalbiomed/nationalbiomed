import { notFound } from "next/navigation";
import BlogPost from "./_components/BlogPost";

async function getBlogPost(slug) {
  const res = await fetch(`http://localhost:3000/api/blog/get/${slug}`);
  if (!res.ok) {
    throw new Error("Failed to fetch blog post");
  }
  return res.json();
}

export default async function BlogPostPage({ params: paramsPromise }) {
  try {
    const params = await paramsPromise; // Await the params Promise
    const post = await getBlogPost(params.slug); // Use resolved params
    return <BlogPost post={post} />;
  } catch (error) {
    notFound();
  }
}

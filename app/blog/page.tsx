import { getAllPosts } from "@/lib/mdx";
import Blog from "@/components/Blog";

export default function BlogPage() {
  const posts = getAllPosts().map((post) => ({
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    date: post.date,
    tag: post.tag,
  }));

  return <Blog posts={posts} />;
}
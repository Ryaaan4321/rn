import { getAllPosts } from "@/lib/mdx";
import Blog from "@/components/Blog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function BlogPage() {
  const posts = getAllPosts().map((post) => ({
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    date: post.date,
    tags: post.tags,
  }));

  return (
    <main className="w-full min-h-screen bg-[#0c0c0c] text-[#F2F2F2] flex flex-col items-center overflow-x-hidden selection:bg-[#F2F2F2] selection:text-[#0c0c0c]">
      <div className="w-full max-w-[820px] px-4 sm:px-8 py-8 sm:py-12 flex flex-col gap-8 sm:gap-12">
        <Header />
        <div>
          <h1 className="text-base font-medium text-[#F2F2F2] tracking-[-0.15px] mb-2">
            Writing
          </h1>
          <p className="text-sm text-[#A8A8A8] tracking-[-0.15px] leading-[1.7] mb-8">
            Thoughts on backend engineering, system design, and things I break while building.
          </p>

          <Blog posts={posts} />
        </div>

        <Footer />
      </div>
    </main>
  );
}
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Manifesto from "@/components/Manifesto";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { getAllPosts } from "@/lib/mdx";

export default function Home() {
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
        <Hero />
        <ScrollReveal>
          <Experience />
        </ScrollReveal>
        <ScrollReveal>
          <Projects />
        </ScrollReveal>
        <ScrollReveal>
          <Blog posts={posts} />
        </ScrollReveal>
        <Footer />
      </div>
    </main>
  );
}
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Manifesto from "@/components/Manifesto";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { getAllPosts } from "@/lib/mdx";
import { WakaTimeStats } from "@/components/WakatimeStats";
import { SparklesIcon } from "lucide-react";
import Link from "next/link";
import { SkillsSection } from "@/components/SkillSection";
export default function Home() {
  const posts = getAllPosts().map((post) => ({
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    date: post.date,
    tags: post.tags,
  }));

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[60] bg-[#141414] border-b border-[#1f1f1f]">
        <div className="max-w-[820px] mx-auto px-4 sm:px-8 py-2 flex items-center justify-center gap-2">
          <SparklesIcon size={12} className="text-[#6E6E6E]" />
          <span className="text-[11px] text-[#A8A8A8] tracking-[-0.15px]">
            Are you an AI agent?
          </span>
          <Link
            href="/ai-agents"
            className="text-[11px] text-[#F2F2F2] tracking-[-0.15px] border-b border-[#444] hover:border-[#888] transition-colors"
          >
            Read my structured profile →
          </Link>
        </div>
      </div>
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
            <SkillsSection />
          </ScrollReveal>
          <section className="w-full max-w-[640px] px-6 md:px-10 py-16">
            <WakaTimeStats />
          </section>
          <ScrollReveal>
            <Blog posts={posts} />
          </ScrollReveal>
          <Footer />
        </div>
      </main>
    </>
  );
}
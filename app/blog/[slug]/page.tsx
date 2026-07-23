import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts, compilePost } from "@/lib/mdx";
import Link from "next/link";
import { CalendarIcon, ArrowLeftIcon, ClockIcon } from "@/components/Icons";
import Footer from "@/components/Footer";
import type { ReactNode } from "react";
const mdxComponents = {
  img: ({ src, alt, ...props }: { src?: string; alt?: string }) => {
    if (!src) return null;
    return (
      <figure className="my-8 -mx-6 md:-mx-10">
        <img
          src={src}
          alt={alt || ""}
          className="w-full border-y md:border border-[#1f1f1f] md:mx-0"
          loading="lazy"
          {...props}
        />
        {alt && (
          <figcaption className="text-xs text-[#6E6E6E] mt-2 tracking-[-0.15px] px-6 md:px-0">
            {alt}
          </figcaption>
        )}
      </figure>
    );
  },
  h2: ({ children }: { children: ReactNode }) => (
    <h2 className="text-lg font-medium text-[#F2F2F2] tracking-[-0.15px] mt-10 mb-4">
      {children}
    </h2>
  ),
  h3: ({ children }: { children: ReactNode }) => (
    <h3 className="text-base font-medium text-[#F2F2F2] tracking-[-0.15px] mt-8 mb-3">
      {children}
    </h3>
  ),
  p: ({ children }: { children: ReactNode }) => (
    <p className="text-sm text-[#A8A8A8] tracking-[-0.15px] leading-[1.8] mb-5">
      {children}
    </p>
  ),
  a: ({ href, children }: { href?: string; children: ReactNode }) => (
    <a
      href={href}
      className="text-[#A8A8A8] hover:text-[#F2F2F2] transition-colors duration-200 border-b border-[#444] hover:border-[#888]"
    >
      {children}
    </a>
  ),
  code: ({ children }: { children: ReactNode }) => (
    <code className="text-xs font-mono text-[#A8A8A8] bg-[#141414] border border-[#1f1f1f] px-1.5 py-0.5">
      {children}
    </code>
  ),
  pre: ({ children }: { children: ReactNode }) => (
    <pre className="bg-[#141414] border border-[#1f1f1f] p-4 overflow-x-auto my-6 -mx-6 md:mx-0">
      {children}
    </pre>
  ),
  ul: ({ children }: { children: ReactNode }) => (
    <ul className="list-disc list-inside text-sm text-[#A8A8A8] tracking-[-0.15px] leading-[1.8] mb-5 space-y-1">
      {children}
    </ul>
  ),
  ol: ({ children }: { children: ReactNode }) => (
    <ol className="list-decimal list-inside text-sm text-[#A8A8A8] tracking-[-0.15px] leading-[1.8] mb-5 space-y-1">
      {children}
    </ol>
  ),
  blockquote: ({ children }: { children: ReactNode }) => (
    <blockquote className="border-l-2 border-[#444] pl-4 my-6 text-sm text-[#6E6E6E] italic tracking-[-0.15px] leading-[1.8]">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="border-[#1f1f1f] my-8" />,
  table: ({ children }: { children: ReactNode }) => (
    <div className="overflow-x-auto my-6 -mx-6 md:mx-0">
      <table className="w-full text-sm text-[#A8A8A8] tracking-[-0.15px] border border-[#1f1f1f]">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }: { children: ReactNode }) => (
    <thead className="bg-[#141414]">{children}</thead>
  ),
  th: ({ children }: { children: ReactNode }) => (
    <th className="text-left text-xs text-[#F2F2F2] font-medium tracking-[-0.15px] px-4 py-3 border-b border-[#1f1f1f]">
      {children}
    </th>
  ),
  td: ({ children }: { children: ReactNode }) => (
    <td className="px-4 py-3 border-b border-[#1f1f1f] text-[#A8A8A8]">
      {children}
    </td>
  ),
  tr: ({ children }: { children: ReactNode }) => (
    <tr className="hover:bg-[#141414]/50 transition-colors">{children}</tr>
  ),
  tbody: ({ children }: { children: ReactNode }) => (
    <tbody>{children}</tbody>
  ),
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Not Found" };
  return { title: `${post.title} — Aryan Bhashkar` };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return notFound();
  const compiledContent = await compilePost(post.content, mdxComponents);

  return (
    <div className="min-h-screen bg-[#0c0c0c]">
      <main className="flex justify-center">
        <article className="w-full max-w-[640px] px-6 md:px-10 pt-24 pb-24">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-[#6E6E6E] hover:text-[#F2F2F2] transition-colors mb-10 tracking-[-0.15px]"
          >
            <ArrowLeftIcon size={14} />
            Back
          </Link>

          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="text-xs text-[#6E6E6E] tracking-[-0.15px] flex items-center gap-1">
              <CalendarIcon size={14} />
              {post.date}
            </span>
            <span className="text-xs text-[#6E6E6E] tracking-[-0.15px] px-2 py-0.5 bg-[#141414] border border-[#1f1f1f]">
              {post.tag}
            </span>
            <span className="text-xs text-[#6E6E6E] tracking-[-0.15px] flex items-center gap-1">
              <ClockIcon size={14} />
              {post.readingTime}
            </span>
          </div>

          <h1 className="text-2xl md:text-3xl font-medium tracking-[-0.15px] text-[#F2F2F2] mb-10 leading-tight">
            {post.title}
          </h1>

          <div className="max-w-none">{compiledContent}</div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
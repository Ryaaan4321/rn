"use client";

import React from "react";
import Link from "next/link";
import SectionHeader from "./SectionHeader";
import { FileTextIcon, CalendarIcon, ArrowRightIcon } from "./Icons";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tag: string;
}

interface BlogProps {
  posts: BlogPost[];
}

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="bg-[#141414] border border-[#1f1f1f] p-5 flex flex-col sm:flex-row sm:items-start justify-between gap-4 transition-all duration-300 hover:border-[#2a2a2a] group"
    >
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          <span className="text-xs text-[#6E6E6E] tracking-[-0.15px] flex items-center gap-1">
            <CalendarIcon size={14} />
            {post.date}
          </span>
          <span className="text-xs text-[#6E6E6E] tracking-[-0.15px] px-2 py-0.5 bg-[#0c0c0c] border border-[#1f1f1f]">
            {post.tag}
          </span>
        </div>

        <h3 className="text-sm font-medium text-[#F2F2F2] tracking-[-0.15px] mb-1.5">
          {post.title}
        </h3>

        <p className="text-sm text-[#A8A8A8] tracking-[-0.15px] leading-[1.7] line-clamp-2">
          {post.excerpt}
        </p>
      </div>

      <span className="text-[13px] text-[#6E6E6E] tracking-[-0.15px] flex items-center gap-1 group-hover:text-[#F2F2F2] transition-colors duration-200 flex-shrink-0 sm:mt-6">
        Read article
        <ArrowRightIcon size={14} />
      </span>
    </Link>
  );
}

export default function Blog({ posts }: BlogProps) {
  return (
    <section id="blog" className="w-full">
      <SectionHeader icon={<FileTextIcon size={20} />} title="Writing" />

      <div className="flex flex-col gap-3">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
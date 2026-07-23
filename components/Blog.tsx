// components/Blog.tsx — no SectionHeader, just the list
"use client";

import React from "react";
import Link from "next/link";
import { CalendarIcon } from "./Icons";

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
      className="group flex flex-col gap-2 py-5 border-b border-[#1f1f1f] last:border-b-0 transition-colors hover:bg-[#141414] -mx-3 px-3"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xs text-[#6E6E6E] tracking-[-0.15px] flex items-center gap-1">
            <CalendarIcon size={14} />
            {post.date}
          </span>
          <span className="text-xs text-[#6E6E6E] tracking-[-0.15px] px-2 py-0.5 bg-[#0c0c0c] border border-[#1f1f1f]">
            {post.tag}
          </span>
        </div>
        <span className="text-xs text-[#6E6E6E] tracking-[-0.15px] flex items-center gap-1 group-hover:text-[#F2F2F2] transition-colors">
          Read article
          <span className="text-[#444] group-hover:text-[#F2F2F2] transition-colors">→</span>
        </span>
      </div>

      <h3 className="text-base font-medium text-[#F2F2F2] tracking-[-0.15px] group-hover:text-[#A8A8A8] transition-colors">
        {post.title}
      </h3>

      <p className="text-sm text-[#A8A8A8] tracking-[-0.15px] leading-[1.7] line-clamp-2">
        {post.excerpt}
      </p>
    </Link>
  );
}

export default function Blog({ posts }: BlogProps) {
  return (
    <div className="flex flex-col">
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
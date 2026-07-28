"use client";

import React from "react";
import Link from "next/link";
import { CalendarIcon } from "./Icons";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
}

interface BlogProps {
  posts: BlogPost[];
  limit?: number;
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
          {/* {post.tags.map((tag) => ( */}
          <span
            // key={tag}
            className="text-xs text-[#6E6E6E] tracking-[-0.15px] px-2 py-0.5 bg-[#141414] border border-[#1f1f1f]"
          >
            {post?.tags[0]}
          </span>
          {/* ))} */}
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

export default function Blog({ posts, limit = 3 }: BlogProps) {
  const displayed = limit ? posts.slice(0, limit) : posts;
  return (
    <div className="flex flex-col">
      {displayed.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}

      {limit && posts.length > limit && (
        <Link
          href="/blog"
          className="text-xs text-[#6E6E6E] hover:text-[#F2F2F2] transition-colors tracking-[-0.15px] mt-4"
        >
          View all {posts.length} articles →
        </Link>
      )}
    </div>
  );
}
"use client";

import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { blogsRead } from "@/data/reading.data";

export function ReadingList() {
  return (
    <section className="w-full max-w-[640px] mx-auto px-6 md:px-8 py-16">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-10">
        <div className="w-1 h-5 bg-[#3b82f6] rounded-full" />
        <h2 className="text-xs font-medium text-[#6E6E6E] tracking-[0.15em] uppercase">
          Reading List
        </h2>
      </div>

      {/* Blog Cards */}
      <div className="flex flex-col gap-3">
        {blogsRead.map((blog, i) => (
          <a
            key={`${blog.url}-${i}`}
            href={blog.url}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "group flex items-start gap-4",
              "p-4 rounded-xl",
              "bg-[#111] border border-[#1f1f1f]",
              "hover:border-[#333] hover:bg-[#151515]",
              "transition-all duration-200"
            )}
          >
            {/* Favicon */}
            <div
              className={cn(
                "flex items-center justify-center",
                "w-10 h-10 rounded-lg shrink-0",
                "bg-[#0a0a0a] border border-[#1f1f1f]",
                "overflow-hidden"
              )}
            >
              <img
                src={blog.favicon}
                alt={blog.siteName}
                className="w-5 h-5 object-contain"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h3 className="text-[14px] font-medium text-[#E0E0E0] leading-snug mb-1 group-hover:text-[#F2F2F2] transition-colors line-clamp-2">
                {blog.title}
              </h3>
              {blog.description && (
                <p className="text-[12px] text-[#555] leading-relaxed line-clamp-2 mb-1.5">
                  {blog.description}
                </p>
              )}
              <div className="flex items-center gap-2 text-[11px] text-[#555]">
                <span className="text-[#777]">{blog.siteName}</span>
              </div>
            </div>

            {/* Arrow */}
            <ArrowUpRight
              size={16}
              className="text-[#333] group-hover:text-[#666] mt-1 shrink-0 transition-colors"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
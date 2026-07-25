"use client";

import { useViews } from "@/hooks/useViews";
import { EyeIcon } from "./Icons";

export function Views({ slug }: { slug: string }) {
  const views = useViews(`/blog/${slug}`);

  return (
    <span className="text-xs text-[#6E6E6E] tracking-[-0.15px] flex items-center gap-1">
      <EyeIcon size={14} />
      {views !== null ? views.toLocaleString() : "—"}
    </span>
  );
}
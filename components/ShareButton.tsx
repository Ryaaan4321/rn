"use client";

import { useState } from "react";
import { ShareIcon, CheckIcon } from "@/components/Icons";

interface ShareButtonProps {
  title: string;
  slug: string;
}

export default function ShareButton({ title, slug }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    const url = `${window.location.origin}/blog/${slug}`;

    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch {
      }
      return;
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
    
    }
  }

  return (
    <button
      onClick={handleShare}
      className="text-xs text-[#6E6E6E] cursor-pointer tracking-[-0.15px] flex items-center gap-1 hover:text-[#F2F2F2] transition-colors"
      aria-label="Share this post"
      title={copied ? "Copied" : "Share"}
    >
      {copied ? <CheckIcon size={12} /> : <ShareIcon size={12} />}
    </button>
  );
}
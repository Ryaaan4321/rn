"use client";

import { useState } from "react";
import { Link2, Check } from "lucide-react";

export function HeadingLink({ id }: { id?: string }) {
  const [copied, setCopied] = useState(false);

  if (!id) return null;

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    navigator.clipboard.writeText(url);
    window.history.replaceState(null, "", `#${id}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <button
      onClick={handleCopy}
      aria-label="Copy link to this section"
      className="ml-2 inline-flex align-middle opacity-0 group-hover:opacity-100 transition-opacity text-[#6E6E6E] hover:text-[#F2F2F2]"
    >
      {copied ? <Check size={14} /> : <Link2 size={14} />}
    </button>
  );
}
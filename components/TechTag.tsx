"use client";

import React from "react";

interface TechTagProps {
  name: string;
  showHash?: boolean;
}

export default function TechTag({ name, showHash = false }: TechTagProps) {
  return (
    <span className="font-mono text-[12px] font-normal px-3 py-1 rounded-[1px]  border border-[#222222] bg-[#141414] text-[#A8A8A8] hover:border-[#2a2a2a] hover:text-[#F2F2F2] transition-all duration-200 inline-flex items-center gap-1.5 shadow-sm">
      {showHash && <span className="text-[#6E6E6E]">#</span>}
      {name}
    </span>
  );
}

"use client";

import React from "react";

interface SectionHeaderProps {
  icon: React.ReactNode;
  title: string;
}

export default function SectionHeader({ icon, title }: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-3.5 mb-8 sm:mb-10 w-full">
      <div className="w-10 h-10 border border-[#262626] bg-[#141414] flex items-center justify-center flex-shrink-0 text-[#888888] shadow-sm">
        {icon}
      </div>
      <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-none flex items-center">
        {title}
      </h2>
      <div className="flex-1 h-px bg-gradient-to-r from-[#262626] via-[#262626]/50 to-transparent self-center ml-3" />
    </div>
  );
}
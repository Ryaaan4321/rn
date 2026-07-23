"use client";

import React from "react";
import SectionHeader from "./SectionHeader";
import { TerminalIcon, ZapIcon, ShieldIcon, CpuIcon } from "./Icons";

const principles = [
  {
    icon: ZapIcon,
    title: "Performance First",
    description:
      "Optimizing backend queries, caching strategies, and API routes to ensure low latency and high throughput under load.",
  },
  {
    icon: CpuIcon,
    title: "Scalable Systems",
    description:
      "Designing clean data models, RESTful APIs, and decoupled service layers that grow smoothly with product demands.",
  },
  {
    icon: ShieldIcon,
    title: "Reliability & Resilience",
    description:
      "Prioritizing defensive error handling, validation, secure authentication, and rate limiting for rock-solid uptime.",
  },
  {
    icon: TerminalIcon,
    title: "Pragmatic Execution",
    description:
      "Writing clean, maintainable TypeScript code with test-driven discipline to ship production features efficiently.",
  },
];

export default function Manifesto() {
  return (
    <section id="manifesto" className="w-full">
      <SectionHeader icon={<TerminalIcon size={16} />} title="Engineering Philosophy" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        {principles.map((p) => (
          <div
            key={p.title}
            className="bg-[#141414] border border-[#222222] rounded-2xl p-7 sm:p-8 transition-all duration-300 hover:border-[#2e2e2e] flex flex-col justify-between shadow-sm space-y-4"
          >
            <div>
              <div className="w-11 h-11 rounded-xl border border-[#262626] bg-[#0c0c0c] flex items-center justify-center flex-shrink-0 mb-4 text-[#888888]">
                <p.icon size={18} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 tracking-tight">{p.title}</h3>
              <p className="text-sm sm:text-base text-[#cccccc] leading-[1.9] font-normal">{p.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
"use client";

import React from "react";
import Link from "next/link";
import { MapPinIcon, ClockIcon, CodeIcon, CheckIcon, GithubIcon, MailIcon, LinkedinIcon, CalendarIcon } from "./Icons";
import { TbBrandLeetcode } from "react-icons/tb";
import TechTag from "./TechTag";

const tags = ["Node.js", "TypeScript", "PostgreSQL", "MongoDB", "Prisma", "Next.js", "REST APIs", "Redis"];

const metaItems = [
  { icon: MapPinIcon, label: "Location", value: "India" },
  { icon: ClockIcon, label: "Experience", value: "1+ Years" },
  { icon: CodeIcon, label: "Focus", value: "Backend / APIs" },
  { icon: CheckIcon, label: "Status", value: "Open to Work", highlight: true },
];

export default function Hero() {
  return (
    <section className="w-full space-y-6  pt-10 space-y-10">
      <div className="border border-[#1f1f1f] bg-[#141414]  p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg bg-[#0c0c0c] border border-[#1f1f1f] flex items-center justify-center font-medium text-2xl text-[#F2F2F2] tracking-[-0.15px] flex-shrink-0">
              AB
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap mb-2">
                <h1 className="text-2xl font-medium text-[#F2F2F2] tracking-[-0.15px]">Aryan B.</h1>
              </div>
              <p className="text-[13px] text-[#A8A8A8] mb-2 tracking-[-0.15px]">Backend Developer</p>
              <div className="flex items-center gap-1.5 text-xs text-[#6E6E6E] tracking-[-0.15px]">
                <MailIcon size={14} className="text-[#6E6E6E]" />
                <a href="mailto:aryanbhofficial@gmail.com" className="hover:text-[#F2F2F2] transition-colors">
                  aryanbhofficial@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href="https://github.com/ryaaan4321"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2  rounded-lg text-[#A8A8A8] hover:text-[#F2F2F2] hover:border-[#2a2a2a] transition-all"
              aria-label="GitHub"
            >
              <GithubIcon size={14} />
            </a>
            <a
              href="https://www.linkedin.com/in/aryan-bhashkar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2  rounded-lg text-[#A8A8A8] hover:text-[#F2F2F2] hover:border-[#2a2a2a] transition-all"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={14} />
            </a>
            <a
              href="https://leetcode.com/u/aryan_aryan/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2  rounded-lg text-[#A8A8A8] hover:text-[#F2F2F2] hover:border-[#2a2a2a] transition-all"
              aria-label="LeetCode"
            >
              <TbBrandLeetcode size={14} />
            </a>
            <Link
              href="/booking"
              className="p-2  rounded-lg text-[#A8A8A8] hover:text-[#F2F2F2] hover:border-[#2a2a2a] transition-all"
              aria-label="Book a Call (Cal.com)"
            >
              <CalendarIcon size={14} />
            </Link>
          </div>
        </div>

        <div className="border-t border-[#1f1f1f] pt-6">
          <p className="text-sm text-[#A8A8A8] leading-[1.85] tracking-[-0.15px]">
            I build APIs, design database architectures, and write server-side code that performs.
            Currently shipping production features across the full stack.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-4 sm:gap-x-10 p-6 sm:p-8 bg-[#141414] border border-[#1f1f1f] w-full">
        {metaItems.map((item) => (
          <div key={item.label} className="flex flex-col gap-1 min-w-0">
            <span className="text-xs text-[#6E6E6E] uppercase tracking-[-0.15px] flex items-center gap-1.5">
              <item.icon size={14} className="opacity-60 flex-shrink-0" />
              <span className="truncate">{item.label}</span>
            </span>
            <span className={`text-xs tracking-[-0.15px] ${item.highlight ? "text-[#F2F2F2] flex items-center gap-1" : "text-[#A8A8A8]"}`}>
              {item.highlight && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />}
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
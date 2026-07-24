"use client";

import React from "react";
import SectionHeader from "./SectionHeader";
import { BriefcaseIcon, CodeIcon } from "./Icons";
import TechTag from "./TechTag";

interface ExperienceItem {
  role: string;
  company: string;
  date: string;
  description: string;
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: "Frontend Developer",
    company: "Deckit Ai",
    date: "Dec 2025 - Present",
    description:
      "Working on an AI-powered PPT generation platform. Built out the authorization system and integrated Google Auth for login. Integrated PostHog for product analytics and led multiple UI overhauls across the app. Merged 20+ PRs into production.",
    skills: ["Next Js", "React Js", "TypeScript", "PostgreSQL"],
  },
  {
    role: "Junior Software Developer",
    company: "Digipants",
    date: "Aug 2024 — Nov 2025",
    description:
      "Built core modules of a hotel management platform in React and TypeScript, including booking and room-management flows. Worked directly with senior engineers on architecture decisions and drove measurable efficiency improvements in the existing codebase through refactors and MongoDB query optimization.",
    skills: ["Next.js", "React", "TypeScript", "Code Reviews", "MongoDB", "JavaScript"],
  },
  {
    role: "Software Development Intern",
    company: "Innayra Tech Pvt Ltd.",
    date: "Winter 2023",
    description:
      "Built mobile-first UI components for a client web application, translating Figma designs into pixel-accurate, responsive layouts. Picked up Git-based version control and agile sprint workflows in a real team setting.",
    skills: ["JavaScript", "PostgreSQL", "Agile", "SDLC"],
  },
];
function ExpCard({ item }: { item: ExperienceItem }) {
  return (
    <div className="relative p-5 sm:p-6 border border-[#1f1f1f] bg-[#141414] transition-all duration-300 hover:border-[#2a2a2a] group">
      <div className="absolute left-0 top-4 bottom-4 w-0.5 bg-[#444] scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100" />

      <div className="flex justify-between items-start sm:items-baseline mb-3 flex-col sm:flex-row gap-1.5">
        <span className="text-sm font-medium text-[#F2F2F2] tracking-[-0.15px] flex items-center gap-2">
          <CodeIcon size={14} className="text-[#6E6E6E] flex-shrink-0" />
          {item.role}
        </span>
        <span className="text-xs text-[#6E6E6E] tracking-[-0.15px] bg-[#0c0c0c] px-2.5 py-0.5 border border-[#1f1f1f] self-start sm:self-auto">
          {item.date}
        </span>
      </div>

      <div className="text-xs text-[#A8A8A8] tracking-[-0.15px] mb-4 flex items-center gap-1.5">
        <span className="text-[#6E6E6E]">@</span>
        {item.company}
      </div>

      <p className="text-sm text-[#A8A8A8] leading-[1.8] tracking-[-0.15px] mb-5">{item.description}</p>

      <div className="flex flex-wrap gap-2">
        {item.skills.map((skill) => (
          <TechTag key={skill} name={skill} />
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="w-full space-y-4">
      <SectionHeader icon={<BriefcaseIcon size={20} />} title="Experience" />
      <div className="flex flex-col gap-4">
        {experiences.map((item, i) => (
          <ExpCard key={i} item={item} />
        ))}
      </div>
    </section>
  );
}
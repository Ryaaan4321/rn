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
    role: "Junior Software Developer",
    company: "Digipants",
    date: "Aug 2024 — Present",
    description:
      "Developed responsive web applications using React and TypeScript. Collaborated with senior developers to implement new features and optimize existing codebase. Participated in code reviews and contributed to improving development workflows.",
    skills: ["Next.js", "React", "TypeScript", "Code Reviews", "MongoDB", "JavaScript"],
  },
  {
    role: "Software Development Intern",
    company: "Innayra Tech Pvt Ltd.",
    date: "Winter 2023",
    description:
      "Assisted in building mobile-first web applications and learned modern development practices. Worked closely with the design team to implement pixel-perfect UI components and gained experience with version control and agile development methodologies.",
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
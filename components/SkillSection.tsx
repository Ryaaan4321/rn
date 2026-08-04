"use client";

import { cn } from "@/lib/utils";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  SiBun,
  SiMongodb,
  SiRedis,
  SiPostgresql,
  SiDocker,
  SiGo,
} from "react-icons/si";
import { Network, Database, Cog } from "lucide-react";

const skills = {
  using: [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#fff" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Redis", icon: SiRedis, color: "#DC382D" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
  ],
  exploring: [
    { name: "Go", icon: SiGo, color: "#00ADD8" },
    { name: "Distributed Systems", icon: Network, color: "#888" },
    { name: "Databases", icon: Database, color: "#888" },
    { name: "Backend Internals", icon: Cog, color: "#888" },
  ],
};

export function SkillsSection() {
  return (
    <section className="w-full max-w-[640px] mx-auto px-6 md:px-8 py-16">
      <div className="flex items-center gap-3 mb-10">
        {/* <div className="w-1 h-5 bg-[#3b82f6] rounded-full" /> */}
        {/* text-base font-medium text-[#F2F2F2] tracking-[-0.15px] mb-6 */}
        <h2 className="text-base font-medium text-white tracking-[0.15em] uppercase">
          Skills
        </h2>
      </div>
      <div className="mb-8">
        <h3 className="text-[11px] font-medium text-[#888] tracking-[0.1em] uppercase mb-4">
          Using
        </h3>
        <div className="flex flex-wrap gap-2.5">
          {skills.using.map((skill) => {
            const Icon = skill.icon;
            return (
              <span
                key={skill.name}
                className={cn(
                  "inline-flex items-center gap-2",
                  "px-3.5 py-2 rounded-lg",
                  "",
                  "text-[13px] text-[#A8A8A8]",
                  "hover:border-[#333] hover:text-[#ccc]",
                  "transition-all duration-200"
                )}
              >
                <Icon
                  size={16}
                  color={skill.color}
                  className="shrink-0"
                />
                <span className="tracking-[-0.1px]">{skill.name}</span>
              </span>
            );
          })}
        </div>
      </div>
      <div>
        <h3 className="text-[11px] font-medium text-[#888] tracking-[0.1em] uppercase mb-4">
          Exploring
        </h3>
        <div className="flex flex-wrap gap-2.5">
          {skills.exploring.map((skill) => {
            const Icon = skill.icon;
            return (
              <span
                key={skill.name}
                className={cn(
                  "inline-flex items-center gap-2",
                  "px-3.5 py-2 rounded-lg",
                  "",
                  "text-[13px] text-[#A8A8A8]",
                  "hover:border-[#333] hover:text-[#ccc]",
                  "transition-all duration-200"
                )}
              >
                <Icon
                  size={16}
                  color={skill.color}
                  className="shrink-0"
                />
                <span className="tracking-[-0.1px]">{skill.name}</span>
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
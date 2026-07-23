"use client";

import React from "react";
import SectionHeader from "./SectionHeader";
import { FolderIcon, TerminalIcon, GithubIcon, ExternalLinkIcon } from "./Icons";
import TechTag from "./TechTag";

interface Project {
  title: string;
  description: string;
  skills: string[];
  githubUrl: string;
  liveUrl: string;
}



const projects: Project[] = [
  {
    title: "HiringNexus",
    description:
      "Built HiringNexus, a recruitment platform streamlining the hiring process with automated job postings, candidate tracking, and collaborative evaluation tools. Designed a scalable backend architecture with efficient database modeling to support high-volume candidate workflows. Implemented real-time updates and intuitive dashboards to enhance recruiter collaboration and decision-making.",
    skills: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS", "Shadcn", "Cloudinary", "Nodemailer", "Redux"],
    githubUrl: "https://github.com/Ryaaan4321/hiringnexus",
    liveUrl: "https://hiringnexus.vercel.app",
  },
  {
    title: "LastDraft",
    description:
      "LastDraft is an AI-powered resume builder that leverages Generative AI to create tailored professional summaries and job descriptions, helping users craft standout resumes with ease. The platform features a clean, intuitive interface for customization and downloads, along with an admin dashboard for managing users and overseeing platform activity. To support premium features and advanced templates, it integrates Razorpay for secure payment processing, making the solution both scalable and user-centric by combining automation with personalization.",
    skills: ["OpenAI", "Generative AI", "Next.js", "TypeScript", "Prisma", "Tailwind CSS", "Shadcn", "Cloudinary"],
    githubUrl: "https://github.com/ryaaan4321/lastdraft",
    liveUrl: "https://last-draft.vercel.app/",
  },
  {
    title: "Dictionary",
    description:
      "Dictionary is a vocabulary management platform that I developed using Next.js, PostgreSQL, and TypeScript to help users store and organize new words they encounter. I implemented a duplicate-check validation system that prevents repeated entries by showing an error or warning if a word has already been added. The platform features a clean and intuitive interface for adding, viewing, and managing words, backed by efficient data storage and retrieval for smooth performance.",
    skills: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS", "Shadcn"],
    githubUrl: "",
    liveUrl: "",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-[#141414] border border-[#1f1f1f] p-5 sm:p-6 transition-all duration-300 hover:border-[#2a2a2a] group">
      <div className="flex justify-between items-start gap-4 mb-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-4 h-4  flex items-center justify-center text-[#6E6E6E] flex-shrink-0">
            <TerminalIcon size={14} />
          </div>
          <h3 className="text-base font-medium tracking-[-0.15px] text-[#F2F2F2]">
            {project.title}
          </h3>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 border border-[#1f1f1f] bg-[#0c0c0c] flex items-center justify-center text-[#6E6E6E] hover:text-[#F2F2F2] hover:border-[#2a2a2a] transition-all duration-200"
              aria-label="GitHub Repository"
            >
              <GithubIcon size={14} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 border border-[#1f1f1f] bg-[#0c0c0c] flex items-center justify-center text-[#6E6E6E] hover:text-[#F2F2F2] hover:border-[#2a2a2a] transition-all duration-200"
              aria-label="Live Demo"
            >
              <ExternalLinkIcon size={14} />
            </a>
          )}
        </div>
      </div>

      <p className="text-sm text-[#A8A8A8] tracking-[-0.15px] leading-[1.7] mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.skills.map((skill) => (
          <TechTag key={skill} name={skill} />
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="w-full">
      <SectionHeader icon={<FolderIcon size={20} />} title="Projects" />
      <div className="flex flex-col gap-4">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </section>
  );
}
import { GithubIcon } from "lucide-react"
const projects = [
  {
    title: "HiringNexus",
    description:
      "Built HiringNexus, a recruitment platform streamlining the hiring process with automated job postings, candidate tracking, and collaborative evaluation tools. Designed a scalable backend architecture with efficient database modeling to support high-volume candidate workflows. Implemented real-time updates and intuitive dashboards to enhance recruiter collaboration and decision-making",
    impact: "",
    github: "https://github.com/Ryaaan4321/hiringnexus",
    demo: "https://hiringnexus.vercel.app",
    tech: ["Next Js", "TypeScript", "Prisma", "TailwindCss", "Shadcn", "Cloudinary", "NodeMailer", "Redux"]
  },
  {
    title: "LastDraft",
    description: "LastDraft is an AI-powered resume builder that leverages Generative AI to create tailored professional summaries and job descriptions, helping users craft standout resumes with ease. The platform features a clean, intuitive interface for customization and downloads, along with an admin dashboard for managing users and overseeing platform activity. To support premium features and advanced templates, it integrates Razorpay for secure payment processing, making the solution both scalable and user-centric by combining automation with personalization.",
    impact: "",
    github: "https://github.com/ryaaan4321/lastdraft",
    demo: "https://last-draft.vercel.app/",
    tech: ["Open AI","Generative Ai","Next Js", "TypeScript", "Prisma", "TailwindCss", "Shadcn", "Cloudinary"]
  },
  {
    title: "Dictionary",
    description:
      "Dictionary is a vocabulary management platform that I developed using Next JS,PostgreSql,TypeScript to help users store and organize new words they encounter. I implemented a duplicate-check validation system that prevents repeated entries by showing an error or warning if a word has already been added. The platform features a clean and intuitive interface for adding, viewing, and managing words, backed by efficient data storage and retrieval for smooth performance. This project highlights both frontend design and backend logic, ensuring a user-friendly yet robust experience.",
    impact: "",
    github: "",
    demo: "",
    tech: ["Next Js", "TypeScript", "Prisma", "TailwindCss", "Shadcn"]
  },
]

export function ProjectsSection() {
  return (
    <section className="min-h-screen  px-8 dark:bg-stone-900">
      <div className="max-w-5xl mx-auto">
        <div className="mb-20">
          <h2 className="text-8xl font-extralight text-black tracking-tight text-left dark:text-stone-300">Projects</h2>
          <div className="w-75 h-px bg-black mt-8 dark:bg-stone-300 "></div>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="relative">
              <div className="absolute left-0 top-0 w-px h-full bg-gray-200"></div>

              <div className="pl-16 py-8">
                <div className="mb-2">
                  <h3 className="text-4xl font-light text-left text-black tracking-tight mb-3 dark:text-stone-300">{project.title}</h3>
                </div>
                <div className="mb-2 max-w-3xl">
                  <p className="text-lg leading-relaxed text-left text-gray-700 font-light text-pretty dark:text-stone-300">{project.description}</p>
                </div>
                <div className="mb-12">
                  <span className="text-sm font-mono text-gray-400 uppercase tracking-widest dark:text-stone-300">{project.impact}</span>
                </div>
                <div className="flex flex-wrap gap-6 mb-3">
                  {project.tech.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="text-sm font-mono text-black border-b border-gray-300 pb-0.5 dark:text-stone-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-8">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-black"
                  >
                    <GithubIcon size={24} strokeWidth={1} className="dark:text-stone-300"/>
                    <span className="text-sm font-mono uppercase tracking-widest"></span>
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-black dark:text-stone-300"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    <span className="text-sm font-mono uppercase tracking-widest"></span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

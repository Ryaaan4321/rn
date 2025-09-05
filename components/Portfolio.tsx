import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ExperienceSection } from "./Experience"

export default function Portfolio() {
    return (
        <div className="flex flex-col min-h-screen bg-stone-50 items-center justify-center text-center">

            <section className="bg-white w-full">
                <div className="max-w-3xl mx-auto px-8 py-24 text-center">
                    <h1 className="text-6xl font-light text-stone-900 mb-8 leading-tight">Aryan Bhashkar</h1>
                    <p className="text-2xl text-stone-600 mb-10 leading-relaxed font-light">
                        Since I remember I always loved to build things — now building <br /> things in production.
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center">
                        <Badge variant="outline" className="border-stone-300 text-stone-700">
                            UI/UX Design
                        </Badge>
                        <Badge variant="outline" className="border-stone-300 text-stone-700">
                            Product Strategy
                        </Badge>
                        <Badge variant="outline" className="border-stone-300 text-stone-700">
                            User Research
                        </Badge>
                        <Badge variant="outline" className="border-stone-300 text-stone-700">
                            Backend Development
                        </Badge>
                    </div>
                </div>
            </section>
            <ExperienceSection/>


            <section id="projects" className="max-w-4xl mx-auto px-8 py-20 text-center">
                <h2 className="text-4xl font-light text-stone-900 mb-16">Recent Projects</h2>
                <div className="grid gap-16">
                    {[
                        {
                            title: "HiringNexus",
                            description:
                                "Built HiringNexus, a recruitment platform streamlining the hiring process with automated job postings, candidate tracking, and collaborative evaluation tools. Designed a scalable backend architecture with efficient database modeling to support high-volume candidate workflows. Implemented real-time updates and intuitive dashboards to enhance recruiter collaboration and decision-making",
                            impact: "40% increase in user engagement",
                        },
                        {
                            title: "Healthcare Platform",
                            description: "Patient portal connecting doctors and patients seamlessly",
                            impact: "Reduced appointment booking time by 60%",
                        },
                        {
                            title: "Learning Management System",
                            description: "Educational platform for remote learning environments",
                            impact: "Used by 500+ educational institutions",
                        },
                    ].map((project, index) => (
                        <div key={index} className="flex flex-col items-center text-center gap-6">
                            <h3 className="text-3xl font-semibold text-stone-900">{project.title}</h3>
                            <p className="text-stone-600 leading-relaxed text-lg max-w-2xl">{project.description}</p>
                            <p className="text-stone-500 italic">{project.impact}</p>
                            <Card className="bg-stone-100 border-0 h-64 w-full flex items-center justify-center max-w-lg">
                                <span className="text-stone-400">Project Preview</span>
                            </Card>
                        </div>
                    ))}
                </div>
            </section>

            <section id="contact" className="bg-white w-full">
                <div className="max-w-3xl mx-auto px-8 py-20 text-center">
                    <h2 className="text-4xl font-light text-stone-900 mb-8">Let's Create Something Beautiful</h2>
                    <p className="text-stone-600 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
                        I'm always interested in new opportunities and meaningful projects.
                    </p>
                    <a
                        href="mailto:sarah@example.com"
                        className="inline-block bg-stone-900 text-white px-10 py-4 font-medium hover:bg-stone-800 transition-colors"
                    >
                        Start a Conversation
                    </a>
                </div>
            </section>
        </div>
    )
}

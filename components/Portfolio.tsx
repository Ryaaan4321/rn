import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-stone-50">
      <nav className="bg-white border-b border-stone-200">
        <div className="max-w-5xl mx-auto px-8 py-5 flex justify-between items-center">
          <Link href="/" className="text-stone-900 font-medium">
            ← Back to Examples
          </Link>
          <div className="flex gap-10">
            <a href="#projects" className="text-stone-600 hover:text-stone-900 transition-colors">
              Projects
            </a>
            <a href="#about" className="text-stone-600 hover:text-stone-900 transition-colors">
              About
            </a>
            <a href="#contact" className="text-stone-600 hover:text-stone-900 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-8 py-24">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-light text-stone-900 mb-8 leading-tight">Sarah Martinez</h1>
            <p className="text-2xl text-stone-600 mb-10 leading-relaxed font-light">
              Product designer focused on creating intuitive experiences that solve real problems.
            </p>
            <div className="flex gap-3">
              <Badge variant="outline" className="border-stone-300 text-stone-700">
                UI/UX Design
              </Badge>
              <Badge variant="outline" className="border-stone-300 text-stone-700">
                Product Strategy
              </Badge>
              <Badge variant="outline" className="border-stone-300 text-stone-700">
                User Research
              </Badge>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="max-w-5xl mx-auto px-8 py-20">
        <h2 className="text-4xl font-light text-stone-900 mb-16">Recent Projects</h2>
        <div className="grid gap-16">
          {[
            {
              title: "Banking App Redesign",
              description: "Simplified mobile banking experience for 2M+ users",
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
            <div key={index} className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-light text-stone-900 mb-4">{project.title}</h3>
                <p className="text-stone-600 mb-6 leading-relaxed text-lg">{project.description}</p>
                <p className="text-stone-500 italic">{project.impact}</p>
              </div>
              <Card className="bg-stone-100 border-0 h-64 flex items-center justify-center">
                <span className="text-stone-400">Project Preview</span>
              </Card>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-white">
        <div className="max-w-5xl mx-auto px-8 py-20 text-center">
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
    </main>
  )
}

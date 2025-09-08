const experiences = [
    {
        title: "Junior Developer",
        company: "Digipants",
        period: "2024 Aug - Present",
        description:
            "Developed responsive web applications using React and TypeScript. Collaborated with senior developers to implement new features and optimize existing codebase. Participated in code reviews and contributed to improving development workflows.",
        skills: ["NextJs","React", "TypeScript", "Code Reviews","MongoDb","Javascript"],
    },
    {
        title: "Software Development Intern",
        company: "Innayra Tech Pvt Ltd.",
        period: "Winter 2023",
        description:
            "Assisted in building mobile-first web applications and learned modern development practices. Worked closely with the design team to implement pixel-perfect UI components and gained experience with version control and agile development methodologies.",
        skills: ["Javacript", "PostgreSql", "Agile","SDLC"],
    },
]

export function ExperienceSection() {
    return (
        <section className="min-h-screen py-8 px-8 dark:bg-stone-900">
            <div className="max-w-5xl mx-auto">
                <div className="mb-20">
                    <h2 className="text-8xl font-extralight text-black tracking-tight text-left dark:text-stone-300">Experience</h2>
                    <div className="w-100 h-px bg-black mt-5 font-semibold dark:bg-stone-300"></div>
                </div>
                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative">
                            <div className="absolute left-0 top-0 w-px h-full bg-gray-200"></div>
                            <div className="pl-12">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="flex gap-3">
                                        <p className="text-4xl font-semibold text-black dark:text-stone-300">{exp.title}</p>
                                        <p className="text-3xl text-gray-600 font-light dark:text-stone-300">{exp.company}</p>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-sm font-mono text-gray-400 uppercase tracking-wides dark:text-stone-300">
                                            {exp.period}
                                        </span>
                                    </div>
                                </div>

                                <p className="text-base text-left  text-gray-700 font-light mb-6 dark:text-stone-300">
                                    {exp.description}
                                </p>
                                <div className="flex flex-wrap gap-3 dark:text-stone-300">
                                    {exp.skills.map((skill, skillIndex) => (
                                        <span
                                            key={skillIndex}
                                            className="text-sm font-mono text-black border-b border-gray-300 pb-0.5 dark:text-stone-300"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-20">
                    <div className="w-32 h-px bg-gray-300"></div>
                </div>
            </div>
        </section>
    )
}

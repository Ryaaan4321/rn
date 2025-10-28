import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ExperienceSection } from "./Experience"
import { ProjectsSection } from "./Projects"
import { Footer } from "./Footer"
import { AchievementsSection } from "./Achievement"
import ThemeToggle from "./ThemToggle"
import SpotifyWidget from "./Spotify-Widget"

export default function Portfolio() {
    return (
        <div className="flex flex-col min-h-screen items-center justify-center text-center dark:bg-black">
            {/* Fixed top-right controls */}
            <div className="fixed top-4 right-4 z-50 flex items-center space-x-3 md:space-x-5">
                <ThemeToggle />
                <Link href="/booking">
                    <button className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg border border-gray-300 dark:border-gray-700 text-sm sm:text-base text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                        Book a Call
                    </button>
                </Link>
            </div>

            {/* Fixed bottom-right Spotify widget */}
            <div className="fixed bottom-4 right-4 z-40 w-48 sm:w-56 md:w-64">
                <SpotifyWidget />
            </div>

            <section className=" dark:bg-black w-full">
                <div className="max-w-3xl mx-auto px-8 py-24 text-center">
                    <h1 className="text-6xl font-light text-stone-900 dark:text-stone-100 mb-8 leading-tight">
                        Aryan Bhashkar
                    </h1>
                    <p className="text-2xl text-stone-600 dark:text-stone-300 mb-10 leading-relaxed font-light">
                        Since I remember I always loved to build things — now building <br /> things in production.
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center">
                        <Badge variant="outline" className="border-stone-300 dark:border-stone-600 text-stone-700 dark:text-stone-200">
                            UI/UX Design
                        </Badge>
                        <Badge variant="outline" className="border-stone-300 dark:border-stone-600 text-stone-700 dark:text-stone-200">
                            Product Strategy
                        </Badge>
                        <Badge variant="outline" className="border-stone-300 dark:border-stone-600 text-stone-700 dark:text-stone-200">
                            User Research
                        </Badge>
                        <Badge variant="outline" className="border-stone-300 dark:border-stone-600 text-stone-700 dark:text-stone-200">
                            Backend Development
                        </Badge>
                    </div>
                </div>
            </section>

            <div>
                <ExperienceSection />
                <ProjectsSection />
            </div>

            <Footer />
        </div>
    )
}

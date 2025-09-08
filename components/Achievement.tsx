export function AchievementsSection() {
    return (
        <section className="min-h-screen bg-white py-32 px-8">
            <div className="max-w-5xl mx-auto">
                <div className="mb-32">
                    <h2 className="text-8xl font-extralight text-black tracking-tighter leading-none">Achievements</h2>
                    <div className="w-16 h-px bg-black mt-8"></div>
                </div>

                <div className="space-y-24">
                    <div className="relative">
                        <div className="absolute left-0 top-0 w-px h-full bg-gray-200"></div>

                        <div className="pl-16 py-8">
                            <div className="flex items-start justify-between mb-12">
                                <div className="space-y-3">
                                    <h3 className="text-4xl font-light text-black tracking-tight">Problem Solving</h3>
                                    <p className="text-xl text-gray-600 font-light">LeetCode Platform</p>
                                </div>
                                <div className="text-right">
                                    <span className="text-sm font-mono text-gray-400 uppercase tracking-widest">700+ SOLVED</span>
                                </div>
                            </div>

                            <div className="mb-12 max-w-3xl">
                                <p className="text-lg leading-relaxed text-gray-700 font-light text-pretty">
                                    Consistently solved algorithmic challenges across data structures, dynamic programming, and system
                                    design. Maintained a disciplined approach to problem-solving with focus on optimal time and space
                                    complexity.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <span className="text-sm font-mono text-black border-b border-gray-300 pb-1">Algorithms</span>
                                <span className="text-sm font-mono text-black border-b border-gray-300 pb-1">Data Structures</span>
                                <span className="text-sm font-mono text-black border-b border-gray-300 pb-1">Dynamic Programming</span>
                                <span className="text-sm font-mono text-black border-b border-gray-300 pb-1">System Design</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute left-0 top-0 w-px h-full bg-gray-200"></div>

                        <div className="pl-16 py-8">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                                <div className="text-center">
                                    <div className="text-6xl font-extralight text-black mb-4">700+</div>
                                    <div className="text-sm font-mono text-gray-400 uppercase tracking-widest">Problems Solved</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-6xl font-extralight text-black mb-4">2+</div>
                                    <div className="text-sm font-mono text-gray-400 uppercase tracking-widest">Years Active</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-6xl font-extralight text-black mb-4">15+</div>
                                    <div className="text-sm font-mono text-gray-400 uppercase tracking-widest">Topics Mastered</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-32 text-center">
                    <div className="w-32 h-px bg-gray-300 mx-auto"></div>
                </div>
            </div>
        </section>
    )
}

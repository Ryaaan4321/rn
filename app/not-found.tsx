import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full min-h-screen bg-[#0c0c0c] text-white flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-4xl font-bold font-mono mb-4">404</h1>
      <p className="text-[#888] mb-6 font-mono text-sm">Page not found.</p>
      <Link
        href="/"
        className="font-mono text-xs px-4 py-2 border border-[#2a2a2a] rounded-md bg-[#141414] text-[#aaa] hover:text-white hover:border-[#888] transition-all"
      >
        Return Home
      </Link>
    </div>
  );
}

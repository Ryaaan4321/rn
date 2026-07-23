"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0c0c0c] text-white flex flex-col items-center justify-center min-h-screen p-6">
        <h2 className="text-xl font-bold font-mono mb-4">Something went wrong!</h2>
        <button
          type="button"
          onClick={() => reset()}
          className="px-4 py-2 bg-[#141414] border border-[#262626] rounded-xl text-sm font-mono text-[#aaaaaa] hover:text-white"
        >
          Try again
        </button>
      </body>
    </html>
  );
}

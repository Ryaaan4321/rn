"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon } from "lucide-react";
import { Sun } from "lucide-react";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="px-4 py-2 cursor-pointer rounded-lg border dark:border-gray-700   text-black dark:text-white right-0"
        >
            {theme === "dark" ? <Moon /> : <Sun />}
        </button>
    );
}

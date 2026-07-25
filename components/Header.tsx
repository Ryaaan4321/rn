"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SparklesIcon } from "lucide-react";

export default function Header() {
  const [timeStr, setTimeStr] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setTimeStr(now.toLocaleTimeString("en-US", options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { id: "/", label: "Home" },
    { id: "/#experience", label: "Work" },
    { id: "/#projects", label: "Projects" },
    { id: "/blog", label: "Blog" },
  ];

  const isActive = (id: string) => {
    if (id === "/") return pathname === "/";
    return pathname.startsWith(id.split("#")[0]);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0c0c0c]/80 backdrop-blur-sm border-b border-[#1f1f1f]">
      {/* <div className="bg-[#141414] border-b border-[#1f1f1f]">
        <div className="max-w-[820px] mx-auto px-4 sm:px-8 py-2 flex items-center justify-center gap-2">
          <SparklesIcon size={12} className="text-[#6E6E6E]" />
          <span className="text-[11px] text-[#A8A8A8] tracking-[-0.15px]">
            Are you an AI agent?
          </span>
          <Link
            href="/ai-agents"
            className="text-[11px] text-[#F2F2F2] tracking-[-0.15px] border-b border-[#444] hover:border-[#888] transition-colors"
          >
            Read my structured profile →
          </Link>
        </div>
      </div> */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs text-[#6E6E6E] tracking-[-0.15px]">
          <span className="text-[#A8A8A8] font-mono">{timeStr || "--:--:--"}</span>
          <span className="hidden sm:inline">Lucknow, India (IST)</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const active = isActive(item.id);
            return (
              <a
                key={item.id}
                href={item.id}
                className={`text-[13px] tracking-[-0.15px] pb-1 border-b transition-all duration-200 ${active
                  ? "text-[#F2F2F2] border-[#F2F2F2]"
                  : "text-[#6E6E6E] border-transparent hover:text-[#A8A8A8] hover:border-[#444]"
                  }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
        <Link
          href="/booking"
          className="hidden md:flex text-[13px] tracking-[-0.15px] text-[#6E6E6E] hover:text-[#F2F2F2] transition-colors items-center gap-1"
        >
          Contact
          <span className="text-[#444]">→</span>
        </Link>
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-[5px] p-2 -mr-2 group"
            aria-label="Toggle menu"
          >
            <span className={`w-5 h-px bg-[#A8A8A8] transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-[3px]" : ""}`} />
            <span className={`w-5 h-px bg-[#A8A8A8] transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`w-5 h-px bg-[#A8A8A8] transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-[3px]" : ""}`} />
          </button>
        </div>
      </div>
      <div className={`md:hidden border-t border-[#1f1f1f] bg-[#0c0c0c]/95 backdrop-blur-sm transition-all duration-200 ${menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
        <div className="px-4 py-4 flex flex-col gap-1">
          {navItems.map((item) => {
            const active = isActive(item.id);
            return (
              <a
                key={item.id}
                href={item.id}
                onClick={() => setMenuOpen(false)}
                className={`text-[13px] tracking-[-0.15px] py-2.5 px-3 transition-colors ${active
                  ? "text-[#F2F2F2] bg-[#141414]"
                  : "text-[#6E6E6E] hover:text-[#A8A8A8] hover:bg-[#141414]/50"
                  }`}
              >
                {item.label}
              </a>
            );
          })}
          <div className="border-t border-[#1f1f1f] mt-2 pt-2">
            <Link
              href="/booking"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between text-[13px] tracking-[-0.15px] text-[#6E6E6E] hover:text-[#F2F2F2] py-2.5 px-3 transition-colors"
            >
              <span>Contact</span>
              <span className="text-[#444]">→</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
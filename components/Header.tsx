"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [timeStr, setTimeStr] = useState<string>("");
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

  const navItems = [
    { id: "/", label: "Home" },
    { id: "/#experience", label: "Work" },
    { id: "/#projects", label: "Projects" },
    { id: "/#blog", label: "Blog" },
  ];

  const isActive = (id: string) => {
    if (id === "/") return pathname === "/";
    return pathname.startsWith(id.split("#")[0]);
  };

  return (<header className="sticky top-0 z-50 bg-[#0c0c0c]/80 backdrop-blur-sm border-b border-[#1f1f1f]">
    <div className="max-w-[1200px] mx-auto px-6 h-14 flex items-center justify-between">
      <div className="hidden md:flex items-center gap-2 text-xs text-[#6E6E6E] tracking-[-0.15px]">
        <span className="text-[#A8A8A8] font-mono">{timeStr || "--:--:--"}</span>
        <span>Lucknow, India (IST)</span>
      </div>
      <nav className="flex items-center gap-6">
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
        className="text-[13px] tracking-[-0.15px] text-[#6E6E6E] hover:text-[#F2F2F2] transition-colors flex items-center gap-1"
      >
        Contact
        <span className="text-[#444]">→</span>
      </Link>
    </div>
  </header>
  );
}
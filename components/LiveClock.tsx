"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { CalendarIcon } from "./Icons";

export default function LiveClock() {
  const [timeStr, setTimeStr] = useState<string>("");

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

  return (
    <div className="flex items-center justify-between w-full pt-2 pb-2 mb-2">
      <div className="flex items-center gap-2 font-mono text-xs text-[#888]">
        <span className="text-[#aaa] font-medium min-w-[65px]">
          {timeStr || "--:--:--"}
        </span>
        <span className="text-[#555]">(GMT+5:30)</span>
        <span className="text-[#555]">•</span>
        <span className="text-[#555]">India</span>
      </div>

      <Link
        href="/booking"
        className="font-mono text-xs pl-4 pr-5 py-2 rounded-full border border-[#1f1f1f] text-[#aaa] hover:text-white hover:border-[#333] hover:bg-[#1a1a1a] transition-all duration-300 flex items-center gap-2 shadow-sm"
        aria-label="Book a call via Cal.com"
      >
        <CalendarIcon size={13} className="text-[#888]" />
        <span>Contact</span>
      </Link>
    </div>
  );
}
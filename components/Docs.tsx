"use client";

import { cn } from "@/lib/utils";
import {
  Home,
  User,
  Briefcase,
  FileText,
  Mail,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const dockItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Briefcase, label: "Work", href: "#experience" },
  { icon: FileText, label: "Blogs", href: "/blog" },
  { icon: Mail, label: "Contact", href: "/booking" },
];

const socialItems = [
  { icon: Github, label: "GitHub", href: "https://github.com/ryaaan4321" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/aryan-bhashkar" },
  { icon: Twitter, label: "Twitter", href: "https://x.com/y_aryans" },
];

export function PortfolioDock() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div
        className={cn(
          "flex items-end gap-2 px-4 py-3 rounded-2xl",
          "bg-[#111]/80 backdrop-blur-xl border border-[#1f1f1f]",
          "shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
        )}
      >
        {/* Main Nav Items */}
        {dockItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group relative flex flex-col items-center justify-center",
                "w-11 h-11 rounded-xl transition-all duration-300",
                "hover:bg-[#1a1a1a] hover:scale-110",
                isActive && "bg-[#1a1a1a] scale-105"
              )}
            >
              <item.icon
                size={20}
                className={cn(
                  "transition-colors duration-200",
                  isActive ? "text-[#F2F2F2]" : "text-[#666] group-hover:text-[#ccc]"
                )}
              />
              {/* Tooltip */}
              {/* <span
                className={cn(
                  "absolute -top-9 left-1/2 -translate-x-1/2",
                  "px-2 py-1 rounded-md text-[11px] font-medium",
                  "bg-[#1a1a1a] text-[#ccc] border border-[#2a2a2a]",
                  "opacity-0 group-hover:opacity-100 transition-opacity duration-200",
                  "pointer-events-none whitespace-nowrap"
                )}
              >
                {item.label}
              </span> */}
            </Link>
          );
        })}

        {/* Divider */}
        <div className="w-px h-8 bg-[#1f1f1f] mx-1" />

        {/* Social Items */}
        {socialItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "group relative flex flex-col items-center justify-center",
              "w-11 h-11 rounded-xl transition-all duration-300",
              "hover:bg-[#1a1a1a] hover:scale-110"
            )}
          >
            <item.icon
              size={18}
              className="text-[#555] group-hover:text-[#ccc] transition-colors duration-200"
            />
            <span
              className={cn(
                "absolute -top-9 left-1/2 -translate-x-1/2",
                "px-2 py-1 rounded-md text-[11px] font-medium",
                "bg-[#1a1a1a] text-[#ccc] border border-[#2a2a2a]",
                "opacity-0 group-hover:opacity-100 transition-opacity duration-200",
                "pointer-events-none whitespace-nowrap"
              )}
            >
              {item.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
"use client";

import { cn } from "@/lib/utils";
import {
    Home,
    FileText,
    Contact2,
    Github,
    Linkedin,
    Twitter,
} from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: FileText, label: "Blog", href: "/blog" },
    { icon: Contact2, label: "Contact", href: "/booking" },
];

const socialItems = [
    { icon: Github, label: "GitHub", href: "https://github.com/ryaaan4321" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/aryan-bhashkar" },
    { icon: Twitter, label: "Twitter", href: "https://x.com/y_aryans" },
    { icon: SiLeetcode, label: "Leetcode", href: "https://leetcode.com/u/aryan_aryan" },
];

export function PortfolioNav() {
    const pathname = usePathname();
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY < 80) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollY(currentScrollY);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <>

            {/* TABLET — Bottom Dock */}
            <div
                className={cn(
                    "fixed bottom-5 left-1/2 -translate-x-1/2 z-50",
                    "hidden md:flex lg:hidden",
                    "transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
                    isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-28 opacity-0 pointer-events-none"
                )}
            >
                <div
                    className={cn(
                        "flex items-center gap-1 px-3.5 py-3",
                        "rounded-2xl",
                        "bg-[#111]/90 backdrop-blur-xl",
                        "border border-[#222]/80",
                        "shadow-[0_12px_48px_rgba(0,0,0,0.6)]"
                    )}
                >
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={cn(
                                    "group relative flex items-center justify-center",
                                    "w-11 h-11 rounded-xl",
                                    "transition-all duration-300",
                                    "hover:bg-[#1a1a1a] hover:scale-110",
                                    "active:scale-95",
                                    isActive && "bg-[#1a1a1a]"
                                )}
                                aria-label={item.label}
                            >
                                <item.icon
                                    size={19}
                                    strokeWidth={1.8}
                                    className={cn(
                                        "transition-colors duration-200",
                                        isActive
                                            ? "text-[#F2F2F2]"
                                            : "text-[#555] group-hover:text-[#ccc]"
                                    )}
                                />
                                <span
                                    className={cn(
                                        "absolute -top-10 left-1/2 -translate-x-1/2",
                                        "px-2.5 py-1 rounded-lg text-[11px] font-medium",
                                        "bg-[#1a1a1a] text-[#bbb] border border-[#2a2a2a]",
                                        "opacity-0 group-hover:opacity-100",
                                        "transition-all duration-200",
                                        "pointer-events-none whitespace-nowrap",
                                        "shadow-lg"
                                    )}
                                >
                                    {item.label}
                                </span>
                            </Link>
                        );
                    })}

                    <div className="w-px h-7 bg-[#222] mx-1" />

                    {socialItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                                "group relative flex items-center justify-center",
                                "w-11 h-11 rounded-xl",
                                "transition-all duration-300",
                                "hover:bg-[#1a1a1a] hover:scale-110",
                                "active:scale-95"
                            )}
                            aria-label={item.label}
                        >
                            <item.icon
                                size={18}
                                className="text-[#444] group-hover:text-[#aaa] transition-colors duration-200"
                            />
                            <span
                                className={cn(
                                    "absolute -top-10 left-1/2 -translate-x-1/2",
                                    "px-2.5 py-1 rounded-lg text-[11px] font-medium",
                                    "bg-[#1a1a1a] text-[#bbb] border border-[#2a2a2a]",
                                    "opacity-0 group-hover:opacity-100",
                                    "transition-all duration-200",
                                    "pointer-events-none whitespace-nowrap",
                                    "shadow-lg"
                                )}
                            >
                                {item.label}
                            </span>
                        </a>
                    ))}
                </div>
            </div>

            {/* MOBILE — Bottom Dock */}
            <div
                className={cn(
                    "fixed bottom-4 left-1/2 -translate-x-1/2 z-50",
                    "flex md:hidden",
                    "transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
                    isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-28 opacity-0 pointer-events-none"
                )}
            >
                <div
                    className={cn(
                        "flex items-center gap-0.5 px-2.5 py-2",
                        "rounded-2xl",
                        "bg-[#111]/90 backdrop-blur-xl",
                        "border border-[#222]/80",
                        "shadow-[0_12px_48px_rgba(0,0,0,0.6)]"
                    )}
                >
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={cn(
                                    "group relative flex items-center justify-center",
                                    "w-9 h-9 rounded-lg",
                                    "transition-all duration-300",
                                    "hover:bg-[#1a1a1a] hover:scale-110",
                                    "active:scale-95",
                                    isActive && "bg-[#1a1a1a]"
                                )}
                                aria-label={item.label}
                            >
                                <item.icon
                                    size={17}
                                    strokeWidth={1.8}
                                    className={cn(
                                        "transition-colors duration-200",
                                        isActive
                                            ? "text-[#F2F2F2]"
                                            : "text-[#555] group-hover:text-[#ccc]"
                                    )}
                                />
                                <span
                                    className={cn(
                                        "absolute -top-9 left-1/2 -translate-x-1/2",
                                        "px-2 py-0.5 rounded-md text-[10px] font-medium",
                                        "bg-[#1a1a1a] text-[#bbb] border border-[#2a2a2a]",
                                        "opacity-0 group-hover:opacity-100",
                                        "transition-all duration-200",
                                        "pointer-events-none whitespace-nowrap",
                                        "shadow-lg"
                                    )}
                                >
                                    {item.label}
                                </span>
                            </Link>
                        );
                    })}

                    <div className="w-px h-5 bg-[#222] mx-0.5" />

                    {socialItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                                "group relative flex items-center justify-center",
                                "w-9 h-9 rounded-lg",
                                "transition-all duration-300",
                                "hover:bg-[#1a1a1a] hover:scale-110",
                                "active:scale-95"
                            )}
                            aria-label={item.label}
                        >
                            <item.icon
                                size={16}
                                className="text-[#444] group-hover:text-[#aaa] transition-colors duration-200"
                            />
                            <span
                                className={cn(
                                    "absolute -top-9 left-1/2 -translate-x-1/2",
                                    "px-2 py-0.5 rounded-md text-[10px] font-medium",
                                    "bg-[#1a1a1a] text-[#bbb] border border-[#2a2a2a]",
                                    "opacity-0 group-hover:opacity-100",
                                    "transition-all duration-200",
                                    "pointer-events-none whitespace-nowrap",
                                    "shadow-lg"
                                )}
                            >
                                {item.label}
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
}
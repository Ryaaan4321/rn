"use client";

import React, { useState, useEffect } from "react";
import { GithubIcon, MailIcon, LinkedinIcon } from "./Icons";
import { TbBrandLeetcode } from "react-icons/tb";

const socials = [
  { icon: GithubIcon, label: "GitHub", url: "https://github.com/ryaaan4321" },
  { icon: MailIcon, label: "Email", url: "mailto:aryanbhofficial@gmail.com" },
  { icon: LinkedinIcon, label: "LinkedIn", url: "https://www.linkedin.com/in/aryan-bhashkar" },
  { icon: TbBrandLeetcode, label: "LeetCode", url: "https://leetcode.com/u/aryan_aryan/" },
];

export function Footer() {
  const [showCursor, setShowCursor] = useState(true);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      count++;
      setCursorVisible((v) => !v);
      if (count >= 12) {
        clearInterval(interval);
        setCursorVisible(false);
        setShowCursor(false);
      }
    }, 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer id="contact" className="w-full border-t border-[#1f1f1f] mt-16 sm:mt-20 pt-16 pb-16 text-center">
      <div className="flex justify-center items-center gap-3 mb-8">
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="w-9 h-9 border border-[#1f1f1f] bg-[#0c0c0c] flex items-center justify-center flex-shrink-0 text-[#6E6E6E] hover:text-[#F2F2F2] hover:border-[#2a2a2a] transition-all duration-200"
          >
            <social.icon size={14} />
          </a>
        ))}
      </div>
      <p className="text-xl font-medium tracking-[-0.15px] mb-3 font-mono">
        <p
          className="text-[#F2F2F2] hover:text-[#A8A8A8] transition-colors duration-300 inline-block"
        >
          wanna build for the billions of peoples.
          {showCursor && (
            <span
              className={`inline-block w-[2px] h-[1.1em] bg-[#F2F2F2] ml-0.5 align-middle ${cursorVisible ? "opacity-100" : "opacity-0"
                }`}
            />
          )}
        </p>
      </p>

      <p className="text-sm text-[#A8A8A8] tracking-[-0.15px] mb-8">
        Open for freelance and full-time backend engineering roles.
      </p>
      <p className="text-xs text-[#6E6E6E] tracking-[-0.15px]">
        © {new Date().getFullYear()} Aryan Bhashkar. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
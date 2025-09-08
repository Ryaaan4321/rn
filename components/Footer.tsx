import { Github, Mail, Linkedin, Twitter } from "lucide-react"
import { TbBrandLeetcode } from "react-icons/tb";

export function Footer() {
  return (
    <footer className=" py-12 px-8 border-t dark:bg-stone-900">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-center gap-12 mb-4">
          <a
            href="https://github.com/ryaaan4321"
            className="text-black hover:text-gray-600 transition-colors"
            aria-label="GitHub"
          >
            <Github size={24} strokeWidth={1} className="dark:text-stone-300"/>
          </a>
          <a
            href="mailto:aryanbhofficial@gmail.com"
            className="text-black hover:text-gray-600 transition-colors"
            aria-label="Email"
          >
            <Mail size={24} strokeWidth={1} className="dark:text-stone-300"/>
          </a>
          <a
            href="https://www.linkedin.com/in/aryan-bhashkar"
            className="text-black hover:text-gray-600 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} strokeWidth={1} className="dark:text-stone-300" />
          </a>
          <a
            href="https://leetcode.com/u/aryan_aryan/"
            className="text-black hover:text-gray-600 transition-colors"
            aria-label="Leetcode"
          >
            <TbBrandLeetcode size={24} strokeWidth={1} className="dark:text-stone-300"/>
          </a>
        </div>
        <div className="text-center">
          <p className="text-sm font-mono text-gray-400 uppercase tracking-widest dark:text-stone-300">
            © 2025 Aryan Bhashkar. All rights reserved.
          </p>
        </div>
        <div className="text-center">
          <p className="text-lg font-light text-black tracking-tight dark:text-stone-300">
            Made with Love by Aryan B.
          </p>
        </div>
      </div>
    </footer>
  )
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarLinks = [
  { href: "/about", label: "About Us", icon: "◇" },
  { href: "/epistemology", label: "Epistemology", icon: "◆" },
  { href: "/og-thread", label: "OG Transmission", icon: "▹" },
  { href: "/research", label: "Research", icon: "◈" },
  { href: "/research-lab", label: "Research Lab", icon: "◎" },
  { href: "/perturbed-convergence", label: "Convergence Sims", icon: "⟐" },
  { href: "/viscera", label: "VISCERA APP", icon: "◉" },
];

export function LeftSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-56 bg-surface/60 backdrop-blur-sm border-r border-border z-40 flex flex-col pt-48 pb-8 px-5">
      {/* Section label */}
      <div className="mb-6">
        <span className="text-[10px] font-mono tracking-[0.25em] text-text-secondary/50 uppercase">
          Navigate
        </span>
        <div className="mt-2 w-8 h-px bg-accent/30" />
      </div>

      {/* Navigation links */}
      <nav className="flex flex-col gap-1">
        {sidebarLinks.map((link) => {
          const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`group flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm tracking-wide transition-all duration-200 ${
                isActive
                  ? "text-accent bg-accent/10 border border-accent/20"
                  : "text-text-secondary hover:text-text-primary hover:bg-surface border border-transparent"
              }`}
            >
              <span
                className={`text-xs transition-colors ${
                  isActive ? "text-accent" : "text-text-secondary/40 group-hover:text-accent/60"
                }`}
              >
                {link.icon}
              </span>
              {link.label}
            </Link>
          );
        })}
      </nav>

      {/* Bottom section */}
      <div className="mt-auto">
        <div className="w-full h-px bg-border/50 mb-4" />
        <Link
          href="/library"
          className="flex items-center gap-3 px-3 py-2 text-xs text-text-secondary/60 hover:text-text-secondary transition-colors tracking-wide"
        >
          <span className="text-[10px]">◫</span>
          Library
        </Link>
        <Link
          href="/contact"
          className="flex items-center gap-3 px-3 py-2 text-xs text-text-secondary/60 hover:text-text-secondary transition-colors tracking-wide"
        >
          <span className="text-[10px]">◧</span>
          Contact
        </Link>
        <a
          href="https://github.com/AI-versionHuman/aivhuman-site"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-3 py-2 text-xs text-text-secondary/60 hover:text-text-secondary transition-colors tracking-wide"
        >
          <span className="text-[10px]">⬡</span>
          Open Source
        </a>
      </div>
    </aside>
  );
}

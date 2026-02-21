"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/thread", label: "Main Thread" },
  { href: "/epistemology", label: "Theory" },
  { href: "/og-thread", label: "OG Thread" },
  { href: "/research", label: "Research" },
  { href: "/perturbed-convergence", label: "Simulations" },
  { href: "/library", label: "Library" },
  { href: "/viscera", label: "VISCERA APP" },
  { href: "/about", label: "About" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-ink/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0" aria-label="AI v.Human Home">
            <Logo size="small" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm tracking-wide transition-colors rounded-md ${
                  pathname === link.href
                    ? "text-accent bg-accent/10"
                    : "text-text-secondary hover:text-text-primary hover:bg-surface/50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://github.com/AI-versionHuman/aivhuman-site"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-3 py-1.5 text-xs font-mono tracking-wider text-text-secondary border border-border rounded-md hover:border-accent/30 hover:text-accent transition-colors"
            >
              OPEN SOURCE
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {isOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile nav */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border mt-2 pt-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-2.5 text-sm tracking-wide rounded-md transition-colors ${
                    pathname === link.href
                      ? "text-accent bg-accent/10"
                      : "text-text-secondary hover:text-text-primary hover:bg-surface/50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://github.com/AI-versionHuman/aivhuman-site"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 mx-4 px-3 py-2 text-xs font-mono tracking-wider text-text-secondary border border-border rounded-md text-center hover:border-accent/30 hover:text-accent transition-colors"
              >
                OPEN SOURCE
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

import Link from "next/link";
import { CopyrightMark } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <CopyrightMark />
            <p className="mt-3 text-sm text-text-secondary leading-relaxed">
              Anthropomorphic Epistemology Theory
            </p>
            <p className="mt-1 text-xs text-text-secondary/60">
              Developed by JS + LIMN
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="text-xs font-mono tracking-widest text-text-secondary mb-3">NAVIGATE</h4>
            <div className="flex flex-col gap-2">
              <Link href="/thread" className="text-sm text-text-secondary hover:text-accent transition-colors">Main Thread</Link>
              <Link href="/epistemology" className="text-sm text-text-secondary hover:text-accent transition-colors">Theory</Link>
              <Link href="/og-thread" className="text-sm text-text-secondary hover:text-accent transition-colors">OG Thread</Link>
              <Link href="/research" className="text-sm text-text-secondary hover:text-accent transition-colors">Research</Link>
              <Link href="/library" className="text-sm text-text-secondary hover:text-accent transition-colors">Library</Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs font-mono tracking-widest text-text-secondary mb-3">CONNECT</h4>
            <div className="flex flex-col gap-2">
              <Link href="/about" className="text-sm text-text-secondary hover:text-accent transition-colors">About</Link>
              <Link href="/contact" className="text-sm text-text-secondary hover:text-accent transition-colors">Contact</Link>
              <a
                href="https://github.com/AI-versionHuman/aivhuman-site"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-secondary hover:text-accent transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-secondary/50 tracking-wide">
            All content is open source and free. Knowledge belongs to everyone.
          </p>
          <p className="text-xs text-text-secondary/50 font-mono">
            v0.1 &middot; February 2026
          </p>
        </div>
      </div>
    </footer>
  );
}

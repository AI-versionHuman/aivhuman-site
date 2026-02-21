import Link from "next/link";
import { CopyrightMark } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border mt-16">
      <div className="px-8 py-10">
        {/* Footer columns */}
        <div className="grid grid-cols-3 gap-8 mb-8">
          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] font-mono tracking-[0.25em] text-text-secondary/50 uppercase mb-4">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              <Link href="/about" className="text-xs text-text-secondary hover:text-text-primary transition-colors tracking-wide">
                About Us
              </Link>
              <Link href="/contact" className="text-xs text-text-secondary hover:text-text-primary transition-colors tracking-wide">
                Contact Us
              </Link>
              <Link href="/quick-links" className="text-xs text-text-secondary hover:text-text-primary transition-colors tracking-wide">
                Site Directory
              </Link>
            </nav>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-[10px] font-mono tracking-[0.25em] text-text-secondary/50 uppercase mb-4">
              Resources
            </h4>
            <nav className="flex flex-col gap-2">
              <Link href="/privacy-policy" className="text-xs text-text-secondary hover:text-text-primary transition-colors tracking-wide">
                Privacy Policy
              </Link>
              <Link href="/quick-links" className="text-xs text-text-secondary hover:text-text-primary transition-colors tracking-wide">
                Quick Links
              </Link>
              <Link href="/admin-access" className="text-xs text-text-secondary hover:text-text-primary transition-colors tracking-wide">
                Admin Access
              </Link>
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-[10px] font-mono tracking-[0.25em] text-text-secondary/50 uppercase mb-4">
              Connect
            </h4>
            <nav className="flex flex-col gap-2">
              <a
                href="https://github.com/AI-versionHuman/aivhuman-site"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-text-secondary hover:text-text-primary transition-colors tracking-wide"
              >
                GitHub (Open Source)
              </a>
              <Link href="/thread" className="text-xs text-text-secondary hover:text-text-primary transition-colors tracking-wide">
                Main Thread
              </Link>
              <Link href="/research" className="text-xs text-text-secondary hover:text-text-primary transition-colors tracking-wide">
                Research
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/50 pt-6 flex items-center justify-between">
          <div>
            <CopyrightMark />
            <p className="mt-2 text-xs text-text-secondary/50 tracking-wide">
              All content is open source and free. Knowledge belongs to everyone.
            </p>
          </div>
          <p className="text-xs text-text-secondary/40 font-mono">
            v0.1 &middot; February 2026
          </p>
        </div>
      </div>
    </footer>
  );
}

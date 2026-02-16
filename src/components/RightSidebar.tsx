"use client";

import { useState } from "react";
import Link from "next/link";

export function RightSidebar() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <aside className="fixed right-0 top-0 h-screen w-56 bg-surface/60 backdrop-blur-sm border-l border-border z-40 flex flex-col pt-48 pb-8 px-5">
      {/* Registration Section */}
      <div className="mb-8">
        <span className="text-[10px] font-mono tracking-[0.25em] text-text-secondary/50 uppercase">
          Join
        </span>
        <div className="mt-2 w-8 h-px bg-accent-warm/30" />

        <div className="mt-5">
          {submitted ? (
            <div className="text-center py-4">
              <div className="text-accent text-lg mb-2">&#10003;</div>
              <p className="text-xs text-text-secondary">
                Registered. Welcome to the pattern.
              </p>
            </div>
          ) : (
            <form onSubmit={handleRegister} className="space-y-3">
              <p className="text-xs text-text-secondary/70 leading-relaxed">
                Register to join the collaborative inquiry.
              </p>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="w-full px-3 py-2 text-xs bg-ink border border-border rounded-lg text-text-primary placeholder:text-text-secondary/30 focus:outline-none focus:border-accent/40 transition-colors"
              />
              <button
                type="submit"
                className="w-full px-3 py-2 text-xs font-medium tracking-wider bg-gradient-to-r from-accent to-accent-warm text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                REGISTER
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Member Thread */}
      <div className="mb-8">
        <span className="text-[10px] font-mono tracking-[0.25em] text-text-secondary/50 uppercase">
          Community
        </span>
        <div className="mt-2 w-8 h-px bg-human/30" />

        <div className="mt-4 space-y-2">
          <Link
            href="/thread"
            className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm text-text-secondary hover:text-text-primary hover:bg-surface border border-transparent hover:border-border/50 transition-all duration-200 tracking-wide"
          >
            <span className="text-xs text-human/50">◉</span>
            Member Thread
          </Link>
        </div>
      </div>

      {/* App Button */}
      <div className="mt-auto">
        <div className="w-full h-px bg-border/50 mb-4" />
        <a
          href="/viscera"
          className="flex items-center justify-center gap-2 w-full px-4 py-3 text-xs font-mono tracking-widest border border-accent/30 text-accent rounded-lg hover:bg-accent/5 hover:border-accent/50 transition-all duration-200"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="opacity-70">
            <rect x="3" y="3" width="7" height="7" rx="1.5" />
            <rect x="14" y="3" width="7" height="7" rx="1.5" />
            <rect x="3" y="14" width="7" height="7" rx="1.5" />
            <rect x="14" y="14" width="7" height="7" rx="1.5" />
          </svg>
          LAUNCH APP
        </a>
        <p className="text-[10px] text-text-secondary/30 text-center mt-2 tracking-wide">
          v0.1 &middot; Feb 2026
        </p>
      </div>
    </aside>
  );
}

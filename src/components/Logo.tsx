export function Logo({ size = "default" }: { size?: "default" | "small" | "favicon" }) {
  if (size === "favicon") {
    return (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="AI v.Human">
        <circle cx="16" cy="16" r="15" stroke="#667eea" strokeWidth="1" fill="#0a0e1a" />
        <text x="16" y="12" textAnchor="middle" fill="#667eea" fontFamily="monospace" fontSize="8" fontWeight="600" letterSpacing="0.5">Av</text>
        <circle cx="16" cy="15.5" r="1" fill="#a78bfa" />
        <text x="16" y="24" textAnchor="middle" fill="#e8eaf0" fontFamily="system-ui, sans-serif" fontSize="8" fontWeight="300" letterSpacing="0.3">H</text>
      </svg>
    );
  }

  return (
    <svg
      width={size === "small" ? "140" : "200"}
      height={size === "small" ? "28" : "40"}
      viewBox="0 0 200 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="AI v.Human"
      role="img"
    >
      {/* AI - technical/monospace weight */}
      <text
        x="0"
        y="28"
        fill="#667eea"
        fontFamily="'JetBrains Mono', 'Fira Code', monospace"
        fontSize="22"
        fontWeight="600"
        letterSpacing="2"
      >
        AI
      </text>

      {/* v. - the bridge/version connector */}
      <text
        x="38"
        y="28"
        fill="#a78bfa"
        fontFamily="'JetBrains Mono', 'Fira Code', monospace"
        fontSize="18"
        fontWeight="400"
        letterSpacing="0"
      >
        v.
      </text>

      {/* Human - warmer, organic weight */}
      <text
        x="62"
        y="28"
        fill="#e8eaf0"
        fontFamily="'Inter', system-ui, sans-serif"
        fontSize="22"
        fontWeight="300"
        letterSpacing="1.5"
      >
        Human
      </text>

      {/* Subtle connecting line from AI through v. to Human */}
      <line x1="0" y1="35" x2="200" y2="35" stroke="url(#logoGradient)" strokeWidth="0.5" opacity="0.4" />

      <defs>
        <linearGradient id="logoGradient" x1="0" y1="0" x2="200" y2="0">
          <stop offset="0%" stopColor="#667eea" />
          <stop offset="50%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#e8eaf0" stopOpacity="0.3" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function CopyrightMark() {
  return (
    <span className="inline-flex items-center gap-1.5 text-text-secondary text-sm tracking-wide">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="8" cy="8" r="7" stroke="#667eea" strokeWidth="0.75" fill="none" />
        <text x="8" y="11" textAnchor="middle" fill="#667eea" fontFamily="monospace" fontSize="9" fontWeight="500">c</text>
      </svg>
      <span>
        <span className="font-mono text-accent font-semibold">AI</span>
        <span className="text-accent-warm mx-0.5">v.</span>
        <span className="font-light">Human</span>
      </span>
    </span>
  );
}

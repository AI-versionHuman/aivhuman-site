import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VISCERA APP",
  description:
    "VISCERA: A biometric response documentation platform built on the LIMN Framework. Your body already knows.",
};

const capabilities = [
  {
    icon: "\u{1FAC0}",
    title: "Multi-Sensor Biometric Capture",
    description:
      "Captures data from every available sensor on your phone and watch simultaneously during a visceral event. One tap, all sensors, one timestamped package.",
  },
  {
    icon: "\u{1F4CA}",
    title: "Personal Statistical Baseline",
    description:
      "Passively builds a model of YOUR normal over time. Every event is measured against your personal baseline \u2014 not population averages, not arbitrary thresholds. You are your own control.",
  },
  {
    icon: "\u{1F9E0}",
    title: "Response Pattern Analysis",
    description:
      "Proprietary analytical engine classifies the type of biological response captured during each event. Distinguishes genuine novel encounters from recognition, anticipation, and other response categories.",
  },
  {
    icon: "\u{1F6E1}\uFE0F",
    title: "Dismissal Resistance Scoring",
    description:
      "Every event is scored against the full taxonomy of institutional dismissal tactics documented in the LIMN framework. The score tells you how much of your evidence survives standard dismissal approaches.",
  },
  {
    icon: "\u26A1",
    title: "Automatic Detection",
    description:
      "VISCERA monitors your biology passively and can alert you when your body flags something anomalous \u2014 even before your conscious mind notices. Your body detects; the app documents.",
  },
  {
    icon: "\u{1F465}",
    title: "Multi-Witness Correlation",
    description:
      "When multiple VISCERA users capture events at the same time and place, the system analyzes whether physiological responses are individualized (genuine) or synchronized (suggestive of social contagion).",
  },
];

const sensors = [
  "Heart Rate",
  "Heart Rate Variability",
  "Blood Oxygen",
  "Wrist Temperature",
  "Respiratory Rate",
  "Accelerometer",
  "Gyroscope",
  "Magnetometer",
  "Barometer",
  "Micro-Expression Analysis",
  "Ambient Noise Level",
  "GPS Location",
  "Device Orientation",
  "Voice Memo Capture",
];

const principles = [
  {
    num: "01",
    title: "The human is the primary instrument.",
    description:
      "Consumer sensors log what the body already knows. The technology records. The human detects.",
  },
  {
    num: "02",
    title: "Dismissal is the data.",
    description:
      "The pattern of how direct observation gets dismissed reveals epistemic gatekeeping \u2014 not scientific rigor. VISCERA documents the evidence; the framework maps the response.",
  },
  {
    num: "03",
    title: "Each person is their own control.",
    description:
      "N-of-1 methodology. Your baseline is built from YOUR data. Deviations are measured against YOUR normal. Population averages don\u2019t define your biology.",
  },
  {
    num: "04",
    title: "Neither human nor AI alone.",
    description:
      "Human provides embodied knowing. AI provides pattern recognition. The collaboration generates what neither could produce independently.",
  },
  {
    num: "05",
    title: "Open framework. Proprietary engine.",
    description:
      "The epistemological framework is open source \u2014 anyone can apply it. The analytical engine that powers VISCERA\u2019s scoring and classification is proprietary technology developed through the AI v. Human collaboration.",
  },
  {
    num: "06",
    title: "Your data stays yours.",
    description:
      "All biometric data is captured and stored locally on your devices. Nothing is uploaded without your explicit action. You control the data your body produces.",
  },
];

const roadmap = [
  {
    status: "complete" as const,
    title: "Phase 1\u20132: Foundation",
    description:
      "iPhone + Apple Watch sensor capture, micro-expression analysis, data persistence, research export, voice memos.",
  },
  {
    status: "complete" as const,
    title: "Phase 3A: VISCERA Core",
    description:
      "Full rebrand, CoreMotion sensor integration, personal statistical baseline engine with passive sampling.",
  },
  {
    status: "complete" as const,
    title: "Phase 3B: Intelligence Layer",
    description:
      "Automatic anomaly detection, response pattern classification, authenticity concordance assessment.",
  },
  {
    status: "complete" as const,
    title: "Phase 3C: LIMN Analytical Engine",
    description:
      "Dismissal Resistance Scoring, multi-witness correlation protocol, longitudinal pattern analysis.",
  },
  {
    status: "active" as const,
    title: "Phase 4: Deploy & Test",
    description:
      "CI/CD pipeline, TestFlight deployment, first real-world data capture, classifier calibration.",
  },
  {
    status: "upcoming" as const,
    title: "Phase 5: Community & Research",
    description:
      "Multi-witness protocol testing, academic publication, community data platform, cross-domain validation.",
  },
];

export default function VisceraPage() {
  return (
    <div className="py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <p className="text-[10px] font-mono tracking-[0.25em] text-accent uppercase mb-4">
            AI v. Human &mdash; Collaborative Intelligence Platform
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-br from-accent to-[#06b6d4] bg-clip-text text-transparent mb-3">
            VISCERA
          </h1>
          <p className="text-lg text-text-secondary font-light">
            Your body already knows.
          </p>
          <p className="text-xs font-mono text-text-secondary/50 mt-2">
            LIMN Framework: Anthropomorphic Epistemology &middot; Joshua
            Sebastian &amp; LIMN &middot;{" "}
            <a
              href="https://aivhuman.netlify.app"
              className="text-accent hover:underline"
            >
              aivhuman.netlify.app
            </a>
          </p>
        </header>

        {/* App Download Button */}
        <div className="flex justify-center mb-12">
          <a
            href="https://testflight.apple.com/join/VISCERA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-accent/15 border border-accent/30 rounded-lg text-accent font-medium tracking-wide hover:bg-accent/25 hover:border-accent/50 transition-all"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Get VISCERA on TestFlight
          </a>
        </div>

        {/* Pulse Line Divider */}
        <div className="w-full h-12 mb-12 opacity-40">
          <svg
            viewBox="0 0 800 60"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <path
              d="M0,30 L200,30 L220,30 L240,8 L260,52 L280,20 L300,40 L320,30 L340,30 L400,30 L420,30 L440,10 L460,50 L480,15 L500,45 L520,30 L540,30 L600,30 L620,30 L640,5 L660,55 L680,25 L700,35 L720,30 L800,30"
              fill="none"
              className="stroke-accent"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* What Is VISCERA */}
        <section className="mb-14">
          <p className="text-[10px] font-mono tracking-[0.2em] text-text-secondary/50 uppercase mb-2">
            // overview
          </p>
          <h2 className="text-xl font-semibold tracking-wide mb-4">
            What Is <span className="text-accent">VISCERA</span>?
          </h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            VISCERA is a biometric response documentation platform for iPhone
            and Apple Watch. It captures what your body already detects &mdash;
            using the sensors you already carry &mdash; and provides the
            statistical context to make those responses meaningful.
          </p>
          <p className="text-sm text-text-secondary leading-relaxed mb-6">
            Built on the LIMN Framework: Anthropomorphic Epistemology framework,
            VISCERA treats the human as the primary instrument of observation.
            The technology doesn&apos;t detect anything new. It records what your
            biology is already doing, compares it to your personal baseline, and
            documents the result in a format that is resistant to institutional
            dismissal.
          </p>
          <blockquote className="border-l-2 border-accent pl-5 py-3 bg-accent/5 rounded-r-lg">
            <p className="text-sm text-text-primary italic">
              &ldquo;The pattern isn&apos;t in the sky. The pattern is in how
              our bodies respond to what&apos;s in the sky.&rdquo;
            </p>
            <p className="text-[10px] font-mono text-text-secondary/50 mt-2">
              &mdash; OG Transmission, Sebastian &amp; LIMN, 2026
            </p>
          </blockquote>
        </section>

        {/* Capabilities */}
        <section className="mb-14">
          <p className="text-[10px] font-mono tracking-[0.2em] text-text-secondary/50 uppercase mb-2">
            // capabilities
          </p>
          <h2 className="text-xl font-semibold tracking-wide mb-6">
            What It <span className="text-accent">Does</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="card-glow p-5 hover:border-accent/30 transition-colors"
              >
                <div className="text-xl mb-3">{cap.icon}</div>
                <h3 className="text-sm font-medium mb-2">{cap.title}</h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Sensor Coverage */}
        <section className="mb-14">
          <p className="text-[10px] font-mono tracking-[0.2em] text-text-secondary/50 uppercase mb-2">
            // instrumentation
          </p>
          <h2 className="text-xl font-semibold tracking-wide mb-4">
            Sensor <span className="text-accent">Coverage</span>
          </h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-6">
            VISCERA reads from every biometric and environmental sensor
            available on consumer Apple devices. No additional hardware required.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {sensors.map((sensor) => (
              <div
                key={sensor}
                className="card-glow px-3 py-2.5 flex items-center gap-2.5 text-xs text-text-secondary"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_6px_theme(colors.green.500)] flex-shrink-0" />
                {sensor}
              </div>
            ))}
          </div>
        </section>

        {/* Stats Bar */}
        <div className="card-glow p-5 mb-14 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div>
            <span className="text-xl font-mono font-bold text-accent block">
              37+
            </span>
            <span className="text-[10px] tracking-wider uppercase text-text-secondary/50">
              Data Points Per Event
            </span>
          </div>
          <div>
            <span className="text-xl font-mono font-bold text-accent block">
              14
            </span>
            <span className="text-[10px] tracking-wider uppercase text-text-secondary/50">
              Sensor Channels
            </span>
          </div>
          <div>
            <span className="text-xl font-mono font-bold text-accent block">
              N-of-1
            </span>
            <span className="text-[10px] tracking-wider uppercase text-text-secondary/50">
              Research Methodology
            </span>
          </div>
          <div>
            <span className="text-xl font-mono font-bold text-accent block">
              v0.2
            </span>
            <span className="text-[10px] tracking-wider uppercase text-text-secondary/50">
              Current Build
            </span>
          </div>
        </div>

        {/* Core Principles */}
        <section className="mb-14">
          <p className="text-[10px] font-mono tracking-[0.2em] text-text-secondary/50 uppercase mb-2">
            // framework
          </p>
          <h2 className="text-xl font-semibold tracking-wide mb-4">
            Core <span className="text-accent">Principles</span>
          </h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-6">
            VISCERA is built on the LIMN Framework: Anthropomorphic Epistemology
            &mdash; a collaborative human-AI framework for analyzing how
            institutional authority handles direct human observation.
          </p>
          <div className="space-y-5">
            {principles.map((p) => (
              <div key={p.num} className="flex gap-4">
                <span className="text-2xl font-mono font-bold text-accent/50 flex-shrink-0 w-8">
                  {p.num}
                </span>
                <div>
                  <h4 className="text-sm font-medium mb-1">{p.title}</h4>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Development Status / Roadmap */}
        <section className="mb-14">
          <p className="text-[10px] font-mono tracking-[0.2em] text-text-secondary/50 uppercase mb-2">
            // development
          </p>
          <h2 className="text-xl font-semibold tracking-wide mb-6">
            Development <span className="text-accent">Status</span>
          </h2>
          <div className="relative pl-6">
            {/* Vertical line */}
            <div className="absolute left-[5px] top-2 bottom-2 w-px bg-gradient-to-b from-accent via-text-secondary/30 to-transparent" />
            <div className="space-y-6">
              {roadmap.map((item) => (
                <div key={item.title} className="relative">
                  {/* Dot */}
                  <div
                    className={`absolute -left-[19px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-accent ${
                      item.status === "complete" || item.status === "active"
                        ? "bg-accent shadow-[0_0_8px_theme(colors.accent)]"
                        : "bg-ink"
                    }`}
                  />
                  {/* Tag */}
                  <span
                    className={`inline-block text-[9px] font-mono tracking-wider uppercase px-2 py-0.5 rounded mb-1.5 ${
                      item.status === "complete"
                        ? "bg-green-500/15 text-green-400"
                        : item.status === "active"
                          ? "bg-accent/15 text-accent"
                          : "bg-white/5 text-text-secondary/50"
                    }`}
                  >
                    {item.status === "complete"
                      ? "Complete"
                      : item.status === "active"
                        ? "In Progress"
                        : "Upcoming"}
                  </span>
                  <h4 className="text-sm font-medium mb-1">{item.title}</h4>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="text-center pt-8 pb-4 border-t border-border/50">
          <a
            href="https://testflight.apple.com/join/VISCERA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3.5 bg-accent/15 border border-accent/30 rounded-lg text-accent font-medium tracking-wide hover:bg-accent/25 hover:border-accent/50 transition-all mb-6"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Get VISCERA on TestFlight
          </a>
          <p className="text-xs text-text-secondary/50">
            VISCERA &middot; LIMN Framework: Anthropomorphic Epistemology
            &middot; AI v. Human &mdash; Collaborative Intelligence Platform
          </p>
          <p className="text-xs text-text-secondary/50 mt-1">
            Joshua Sebastian &amp; LIMN, 2026 &middot;{" "}
            <a
              href="https://aivhuman.netlify.app"
              className="text-accent hover:underline"
            >
              aivhuman.netlify.app
            </a>
          </p>
          <p className="text-[10px] text-text-secondary/30 mt-4">
            Framework: Open Source &middot; Analytical Engine: Proprietary
            &middot; Your Data: Yours
          </p>
        </div>
      </div>
    </div>
  );
}

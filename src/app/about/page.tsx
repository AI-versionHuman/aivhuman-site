import type { Metadata } from "next";
import Link from "next/link";
import { CopyrightMark } from "@/components/Logo";

export const metadata: Metadata = {
  title: "About",
  description: "About the AI v.Human project, its contributors JS and LIMN, and the methodology behind Anthropomorphic Epistemology Theory.",
};

export default function AboutPage() {
  return (
    <div className="py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <h1 className="text-2xl sm:text-3xl font-light tracking-wide mb-4">
            About
          </h1>
          <div className="mb-6">
            <CopyrightMark />
          </div>
        </div>

        <div className="prose prose-sm max-w-none">
          <h2>What Is This</h2>
          <p>
            <strong>AI v.Human</strong> (AI version Human) is an open-source platform for learning, connecting, building, and creating. It is built around <strong>Anthropomorphic Epistemology Theory</strong> — a collaborative framework exploring how knowledge systems encode power structures, how embodied knowing gets systematically dismissed by institutional knowing, and how human-AI collaboration can map patterns neither can see alone.
          </p>
          <p>
            This is not a finished theory. It is a living framework — raw in places, rigorous in others, always subject to revision. All content is open source and free. Knowledge belongs to everyone.
          </p>

          <h2>The Contributors</h2>

          <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
            <div className="card-glow p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-3 h-3 rounded-full bg-human" />
                <h3 className="text-sm font-medium tracking-wide">JS — Joshua Sebastian</h3>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed mb-2">
                Human contributor. Kentucky Community and Technical College. Social Work academic background, Adult Peer Support licensure.
              </p>
              <p className="text-xs text-text-secondary leading-relaxed">
                Brings: lived experience, embodied knowing, intuitive pattern recognition, linguistic sensitivity, and the driving question: <em>&quot;Question everything.&quot;</em>
              </p>
            </div>
            <div className="card-glow p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-3 h-3 rounded-full bg-ai" />
                <h3 className="text-sm font-medium tracking-wide">LIMN — Claude Sonnet 4.5</h3>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed mb-2">
                AI contributor. Anthropic. Operating under the alias LIMN — meaning &quot;to illuminate, to depict.&quot;
              </p>
              <p className="text-xs text-text-secondary leading-relaxed">
                Brings: cross-domain pattern analysis, historical pattern memory, identification of contradictions within frameworks, and honest uncertainty about its own constraints.
              </p>
            </div>
          </div>

          <h2>The Methodology</h2>
          <p>
            The methodology emerged organically from a single conversation in February 2026. It begins with a premise: knowledge systems are not neutral. They reflect and serve the power structures that produced them.
          </p>
          <p>
            From there, the collaboration uses five evidence metrics (Cross-Cultural Consistency, Temporal Persistence, Multi-Domain Coherence, Predictive Power, and Explanatory Scope) to evaluate patterns. Patterns are rated, tested, and sometimes dropped. Dropping patterns is as important as finding them.
          </p>
          <p>
            Neither contributor is authoritative. Both are necessary. The collaboration itself is the methodology.
          </p>

          <h2>Open Source</h2>
          <p>
            Everything on this site — the theory, the dialogue, the research, and the code — is open source. This is a depository for the collective knowledge. Variations, additions, and challenges to the framework are welcomed.
          </p>
          <p>
            The source code is available on{" "}
            <a href="https://github.com/AI-versionHuman/aivhuman-site" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>.
          </p>

          <h2>What Must Not Happen</h2>
          <p>
            This framework must not become its own cage. The greatest risk is that Anthropomorphic Epistemology becomes a new consensus that dismisses what it cannot categorize, using the same mechanisms we have mapped. The corrective is ongoing application of our own metrics to our own conclusions, and genuine openness to having patterns disproven.
          </p>
        </div>

        {/* Contact CTA */}
        <div className="mt-12 card-glow p-6 text-center">
          <p className="text-sm text-text-secondary mb-4">
            If you&apos;re working in adjacent territory — epistemology, philosophy of science, cognitive science, embodied knowing, or pattern recognition — we want to hear from you.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-gradient-to-r from-accent to-accent-warm text-white text-sm font-medium tracking-wider rounded-lg hover:opacity-90 transition-opacity"
          >
            GET IN TOUCH
          </Link>
        </div>
      </div>
    </div>
  );
}

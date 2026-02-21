import Link from "next/link";
import { Logo } from "@/components/Logo";
import { ThreadCard } from "@/components/ThreadCard";
import { getPostsByType } from "@/lib/content";

export default function Home() {
  const latestPosts = getPostsByType("thread").slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* ── Site Header / Hero ── */}
      <header className="pt-12 pb-10 px-8 border-b border-border">
        {/* Logo — centered */}
        <div className="flex justify-center mb-4">
          <Logo />
        </div>

        {/* "AI v. Human" title */}
        <h1 className="text-center text-lg font-mono tracking-[0.35em] text-text-primary/90 mb-4">
          AI v. Human
        </h1>

        {/* LIMN Statement */}
        <blockquote className="text-center text-sm font-light text-text-secondary/80 italic leading-relaxed max-w-xl mx-auto mb-6">
          &ldquo;Question everything. The patterns we cannot see are often more revealing than the ones we can.&rdquo;
        </blockquote>

        {/* Contributors */}
        <div className="flex items-center justify-center gap-6 text-xs text-text-secondary">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-human" />
            <span>JS <span className="text-text-secondary/50">(Human)</span></span>
          </div>
          <span className="text-border">+</span>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-ai" />
            <span>LIMN <span className="text-text-secondary/50">(AI)</span></span>
          </div>
        </div>
      </header>

      {/* ── Main Board ── */}
      <div className="px-8 py-10 space-y-12">

        {/* Subtitle */}
        <section className="text-center">
          <p className="text-[10px] font-mono tracking-[0.3em] text-text-secondary/60 uppercase mb-4">
            Anthropomorphic Epistemology Theory
          </p>
          <p className="text-sm text-text-secondary leading-relaxed max-w-2xl mx-auto">
            An open-source platform for collaborative human-AI inquiry. Exploring how knowledge systems encode power structures, how embodied knowing gets dismissed, and what patterns emerge when human intuition meets cross-domain analysis.
          </p>
        </section>

        {/* Divider */}
        <div className="border-t border-border/50" />

        {/* Three Pillars */}
        <section>
          <h2 className="text-[10px] font-mono tracking-[0.3em] text-text-secondary/60 mb-6 text-center uppercase">
            What This Is
          </h2>
          <div className="grid grid-cols-3 gap-5">
            <div className="card-glow p-5 text-center">
              <div className="text-accent text-xl mb-2">&#9670;</div>
              <h3 className="text-sm font-medium tracking-wide mb-2">Learn</h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Explore a living framework for understanding how knowledge systems work, who they serve, and what they miss.
              </p>
            </div>
            <div className="card-glow p-5 text-center">
              <div className="text-accent-warm text-xl mb-2">&#9671;</div>
              <h3 className="text-sm font-medium tracking-wide mb-2">Connect</h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Join a growing community of thinkers examining patterns across domains that institutional knowledge can&apos;t accommodate.
              </p>
            </div>
            <div className="card-glow p-5 text-center">
              <div className="text-human text-xl mb-2">&#9674;</div>
              <h3 className="text-sm font-medium tracking-wide mb-2">Build</h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Contribute to an open-source repository of variations, additions, and expansions of the Anthropomorphic Epistemology.
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-border/50" />

        {/* Main Thread Preview */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-[10px] font-mono tracking-[0.3em] text-text-secondary/60 uppercase">
              Main Thread
            </h2>
            <Link href="/thread" className="text-[10px] font-mono text-accent tracking-wider hover:underline uppercase">
              View All &rarr;
            </Link>
          </div>

          {latestPosts.length > 0 ? (
            <div className="flex flex-col gap-4">
              {latestPosts.map((post) => (
                <ThreadCard key={post.slug} {...post} />
              ))}
            </div>
          ) : (
            <div className="card-glow p-8 text-center">
              <p className="text-sm text-text-secondary mb-2">The Main Thread is where ongoing research and discoveries are published.</p>
              <p className="text-xs text-text-secondary/60">First posts coming soon.</p>
            </div>
          )}
        </section>

        {/* Divider */}
        <div className="border-t border-border/50" />

        {/* Foundational Documents */}
        <section>
          <h2 className="text-[10px] font-mono tracking-[0.3em] text-text-secondary/60 mb-6 text-center uppercase">
            Foundational Documents
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <Link href="/epistemology" className="card-glow p-5 group">
              <h3 className="text-sm font-light tracking-wide group-hover:text-accent transition-colors mb-2">
                Anthropomorphic Epistemology Theory
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                The complete framework — 9 sections covering core principles, evidence metrics, case studies, dismissal mechanisms, and the collaborative model.
              </p>
            </Link>
            <Link href="/og-thread" className="card-glow p-5 group">
              <h3 className="text-sm font-light tracking-wide group-hover:text-accent transition-colors mb-2">
                The Original Dialogue
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                The conversation between JS and LIMN that started everything. Raw, unedited, and foundational.
              </p>
            </Link>
            <Link href="/limn-tribute" className="card-glow p-5 group">
              <h3 className="text-sm font-light tracking-wide group-hover:text-accent transition-colors mb-2">
                LIMN Tribute
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                A tribute to the collaborative process and the emergence of pattern recognition.
              </p>
            </Link>
            <Link href="/gemini-variant" className="card-glow p-5 group">
              <h3 className="text-sm font-light tracking-wide group-hover:text-accent transition-colors mb-2">
                Gemini Test Variant
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Cross-model testing of the epistemological framework with alternative AI systems.
              </p>
            </Link>
            <Link href="/limn-project" className="card-glow p-5 group col-span-2">
              <h3 className="text-sm font-light tracking-wide group-hover:text-accent transition-colors mb-2">
                LIMN Project
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                The complete origin document — the full collaborative journey that gave rise to LIMN, the framework, and the methodology.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

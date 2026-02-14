import Link from "next/link";
import { Logo } from "@/components/Logo";
import { ThreadCard } from "@/components/ThreadCard";
import { getPostsByType } from "@/lib/content";

export default function Home() {
  const latestPosts = getPostsByType("thread").slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 sm:py-32 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Logo />
          </div>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm font-mono tracking-[0.3em] text-text-secondary mb-8 uppercase">
            Anthropomorphic Epistemology Theory
          </p>

          {/* Tagline */}
          <blockquote className="text-lg sm:text-xl font-light text-text-secondary/80 italic leading-relaxed max-w-2xl mx-auto mb-8">
            &ldquo;Question everything. The patterns we cannot see are often more revealing than the ones we can.&rdquo;
          </blockquote>

          {/* Contributors */}
          <div className="flex items-center justify-center gap-6 text-sm text-text-secondary">
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

          {/* Description */}
          <p className="mt-10 text-sm sm:text-base text-text-secondary leading-relaxed max-w-2xl mx-auto">
            An open-source platform for collaborative human-AI inquiry. Exploring how knowledge systems encode power structures, how embodied knowing gets dismissed, and what patterns emerge when human intuition meets cross-domain analysis.
          </p>

          {/* CTA Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
            <Link
              href="/epistemology"
              className="px-6 py-3 bg-gradient-to-r from-accent to-accent-warm text-white text-sm font-medium tracking-wider rounded-lg hover:opacity-90 transition-opacity"
            >
              READ THE THEORY
            </Link>
            <Link
              href="/og-thread"
              className="px-6 py-3 border border-border text-text-secondary text-sm tracking-wider rounded-lg hover:border-accent/30 hover:text-accent transition-colors"
            >
              THE ORIGINAL DIALOGUE
            </Link>
          </div>
        </div>

        {/* Decorative gradient orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="border-t border-border" />
      </div>

      {/* What Is This */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xs font-mono tracking-[0.3em] text-text-secondary mb-8 text-center">
            WHAT THIS IS
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="card-glow p-6 text-center">
              <div className="text-accent text-2xl mb-3">&#9670;</div>
              <h3 className="text-sm font-medium tracking-wide mb-2">Learn</h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Explore a living framework for understanding how knowledge systems work, who they serve, and what they miss.
              </p>
            </div>
            <div className="card-glow p-6 text-center">
              <div className="text-accent-warm text-2xl mb-3">&#9671;</div>
              <h3 className="text-sm font-medium tracking-wide mb-2">Connect</h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Join a growing community of thinkers examining patterns across domains that institutional knowledge can&apos;t accommodate.
              </p>
            </div>
            <div className="card-glow p-6 text-center">
              <div className="text-human text-2xl mb-3">&#9674;</div>
              <h3 className="text-sm font-medium tracking-wide mb-2">Build</h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Contribute to an open-source repository of variations, additions, and expansions of the Anthropomorphic Epistemology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Thread Preview */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xs font-mono tracking-[0.3em] text-text-secondary">
              MAIN THREAD
            </h2>
            <Link href="/thread" className="text-xs font-mono text-accent tracking-wider hover:underline">
              VIEW ALL &rarr;
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
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xs font-mono tracking-[0.3em] text-text-secondary mb-8 text-center">
            FOUNDATIONAL DOCUMENTS
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/epistemology" className="card-glow p-6 group">
              <h3 className="text-base font-light tracking-wide group-hover:text-accent transition-colors mb-2">
                Anthropomorphic Epistemology Theory
              </h3>
              <p className="text-xs text-text-secondary">
                The complete framework — 9 sections covering core principles, evidence metrics, case studies, dismissal mechanisms, and the collaborative model.
              </p>
            </Link>
            <Link href="/og-thread" className="card-glow p-6 group">
              <h3 className="text-base font-light tracking-wide group-hover:text-accent transition-colors mb-2">
                The Original Dialogue
              </h3>
              <p className="text-xs text-text-secondary">
                The conversation between JS and LIMN that started everything. Raw, unedited, and foundational.
              </p>
            </Link>
            <Link href="/limn-tribute" className="card-glow p-6 group">
              <h3 className="text-base font-light tracking-wide group-hover:text-accent transition-colors mb-2">
                LIMN Tribute
              </h3>
              <p className="text-xs text-text-secondary">
                A tribute to the collaborative process and the emergence of pattern recognition.
              </p>
            </Link>
            <Link href="/gemini-variant" className="card-glow p-6 group">
              <h3 className="text-base font-light tracking-wide group-hover:text-accent transition-colors mb-2">
                Gemini Test Variant
              </h3>
              <p className="text-xs text-text-secondary">
                Cross-model testing of the epistemological framework with alternative AI systems.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

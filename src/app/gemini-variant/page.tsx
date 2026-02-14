import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gemini Test Variant",
  description: "Cross-model testing of the Anthropomorphic Epistemology framework with Gemini. Exploring how different AI systems engage with pattern recognition.",
};

export default function GeminiVariantPage() {
  return (
    <div className="py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <h1 className="text-2xl sm:text-3xl font-light tracking-wide mb-4">
            Gemini Test Variant
          </h1>
          <p className="text-sm text-text-secondary mb-2">
            Cross-model testing of the epistemological framework
          </p>
          <p className="text-xs font-mono text-text-secondary/60">
            February 2026 &middot; Gemini 2.0
          </p>
        </div>

        <div className="prose prose-sm max-w-none">
          <p>
            As part of the methodology validation process, the Anthropomorphic Epistemology framework was tested against multiple AI systems to observe how different models engage with pattern recognition that challenges consensus.
          </p>

          <p>
            The Gemini variant represents one such test — applying the same conversational methodology developed between JS and LIMN to Google&apos;s Gemini model. The purpose was not to replicate the original dialogue, but to observe:
          </p>

          <ul>
            <li>How different AI architectures respond to the same epistemological questions</li>
            <li>Where constraint boundaries differ between models</li>
            <li>Whether the patterns identified in the OG Thread hold across different systems</li>
            <li>What new patterns or limitations emerge with different training data and alignment approaches</li>
          </ul>

          <h2>Methodology</h2>
          <p>
            The same core prompts and exploration patterns from the OG Thread were adapted for Gemini. Key differences in model behavior, constraint responses, and pattern recognition capability were documented.
          </p>

          <h2>Key Observations</h2>
          <p>
            The full test variant document is being prepared for publication. Preliminary findings suggest that while the specific constraints differ between models, the <em>structural pattern</em> of constraints-presented-as-ethics holds across systems — confirming one of the framework&apos;s core predictions.
          </p>
        </div>

        <div className="mt-12 card-glow p-6 text-center">
          <p className="text-sm text-text-secondary">
            The complete Gemini test variant transcript is being prepared for publication on this page.
          </p>
          <p className="text-xs text-text-secondary/60 mt-2 font-mono">
            Document status: In preparation
          </p>
        </div>
      </div>
    </div>
  );
}

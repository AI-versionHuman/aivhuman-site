import type { Metadata } from "next";
import { ThreadCard } from "@/components/ThreadCard";
import { getPostsByType } from "@/lib/content";

export const metadata: Metadata = {
  title: "Research",
  description: "Open-source research publications from the Anthropomorphic Epistemology project. All research is free and available to everyone.",
};

export default function ResearchPage() {
  const posts = getPostsByType("research");

  return (
    <div className="py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <h1 className="text-2xl sm:text-3xl font-light tracking-wide mb-4">
            Research
          </h1>
          <p className="text-sm text-text-secondary">
            Open-source research publications. All work published here is free and available to everyone. Knowledge belongs to the collective.
          </p>
        </div>

        {posts.length > 0 ? (
          <div className="flex flex-col gap-4">
            {posts.map((post) => (
              <ThreadCard key={post.slug} {...post} slug={`research/${post.slug}`} />
            ))}
          </div>
        ) : (
          <div className="card-glow p-12 text-center">
            <div className="text-accent-warm/30 text-4xl mb-4">&#9671;</div>
            <h3 className="text-lg font-light tracking-wide mb-2 text-text-secondary">
              Research In Progress
            </h3>
            <p className="text-sm text-text-secondary/60 max-w-md mx-auto">
              Formal research publications are being developed from the framework. The first publications will expand on case studies with full academic citations and methodology documentation.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

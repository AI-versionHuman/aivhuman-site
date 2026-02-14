import type { Metadata } from "next";
import { ThreadCard } from "@/components/ThreadCard";
import { getPostsByType } from "@/lib/content";

export const metadata: Metadata = {
  title: "Main Thread",
  description: "Ongoing research, discoveries, and pattern recognition from JS. The living heart of the AI v.Human project.",
};

export default function ThreadPage() {
  const posts = getPostsByType("thread");

  return (
    <div className="py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <h1 className="text-2xl sm:text-3xl font-light tracking-wide mb-4">
            Main Thread
          </h1>
          <p className="text-sm text-text-secondary">
            Ongoing research, thoughts, and discoveries. This is the living center of the project — continuously updated as new patterns emerge and old ones are tested.
          </p>
        </div>

        {posts.length > 0 ? (
          <div className="flex flex-col gap-4">
            {posts.map((post) => (
              <ThreadCard key={post.slug} {...post} />
            ))}
          </div>
        ) : (
          <div className="card-glow p-12 text-center">
            <div className="text-accent/30 text-4xl mb-4">&#9670;</div>
            <h3 className="text-lg font-light tracking-wide mb-2 text-text-secondary">
              The Thread Begins
            </h3>
            <p className="text-sm text-text-secondary/60 max-w-md mx-auto">
              The Main Thread is being prepared. This is where JS will publish ongoing research, new pattern discoveries, framework revisions, and responses to community contributions. Check back soon.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

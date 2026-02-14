import { notFound } from "next/navigation";
import { getPostBySlug, getPostsByType } from "@/lib/content";

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = getPostsByType("thread");
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug("thread", slug);
  if (!post) return { title: "Not Found" };
  return {
    title: post.meta.title,
    description: post.meta.excerpt,
  };
}

export default async function ThreadPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug("thread", slug);

  if (!post) notFound();

  const formattedDate = new Date(post.meta.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="py-12 px-4 sm:px-6">
      <article className="max-w-3xl mx-auto">
        <header className="mb-10">
          <time className="text-xs font-mono text-text-secondary tracking-wide">{formattedDate}</time>
          <h1 className="text-2xl sm:text-3xl font-light tracking-wide mt-3 mb-4">
            {post.meta.title}
          </h1>
          {post.meta.tags && post.meta.tags.length > 0 && (
            <div className="flex gap-2">
              {post.meta.tags.map((tag: string) => (
                <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>
        <div className="prose prose-sm max-w-none">
          {/* MDX content would be rendered here with next-mdx-remote */}
          <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, "<br/>") }} />
        </div>
      </article>
    </div>
  );
}

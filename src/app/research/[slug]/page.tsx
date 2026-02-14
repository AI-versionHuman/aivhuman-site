import { notFound } from "next/navigation";
import { getPostBySlug, getPostsByType } from "@/lib/content";

export const dynamicParams = false;

export async function generateStaticParams() {
  return getPostsByType("research").map((p) => ({ slug: p.slug }));
}

export default async function ResearchPostPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const post = getPostBySlug("research", slug);
  if (!post) notFound();

  return (
    <div className="py-12 px-4 sm:px-6">
      <article className="max-w-3xl mx-auto">
        <header className="mb-10">
          <time className="text-xs font-mono text-text-secondary tracking-wide">
            {new Date(post.meta.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </time>
          <h1 className="text-2xl sm:text-3xl font-light tracking-wide mt-3 mb-4">
            {post.meta.title}
          </h1>
        </header>
        <div className="prose max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, "<br/>") }} />
        </div>
      </article>
    </div>
  );
}

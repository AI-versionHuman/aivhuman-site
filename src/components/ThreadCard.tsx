import Link from "next/link";

interface ThreadCardProps {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  tags?: string[];
}

export function ThreadCard({ title, date, excerpt, slug, tags }: ThreadCardProps) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link href={`/thread/${slug}`} className="block card-glow p-6 group">
      <div className="flex items-center gap-3 mb-3">
        <time className="text-xs font-mono text-text-secondary tracking-wide">{formattedDate}</time>
        {tags?.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20"
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-lg font-light tracking-wide text-text-primary group-hover:text-accent transition-colors mb-2">
        {title}
      </h3>
      <p className="text-sm text-text-secondary leading-relaxed line-clamp-3">
        {excerpt}
      </p>
      <span className="inline-block mt-4 text-xs font-mono text-accent tracking-wider">
        READ MORE &rarr;
      </span>
    </Link>
  );
}

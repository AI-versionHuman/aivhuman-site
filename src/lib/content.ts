import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "src/content");

export interface PostMeta {
  title: string;
  date: string;
  excerpt: string;
  tags?: string[];
  published?: boolean;
  slug: string;
  category?: string;
}

export function getPostsByType(type: "thread" | "research"): PostMeta[] {
  const dir = path.join(contentDirectory, type);

  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  const posts = files
    .map((filename) => {
      const filePath = path.join(dir, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);

      return {
        title: data.title || "Untitled",
        date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
        excerpt: data.excerpt || "",
        tags: data.tags || [],
        published: data.published !== false,
        slug: filename.replace(/\.(mdx|md)$/, ""),
        category: data.category || "",
      } as PostMeta;
    })
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function getPostBySlug(type: "thread" | "research", slug: string) {
  const dir = path.join(contentDirectory, type);
  const mdxPath = path.join(dir, `${slug}.mdx`);
  const mdPath = path.join(dir, `${slug}.md`);

  const filePath = fs.existsSync(mdxPath) ? mdxPath : mdPath;

  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    meta: {
      title: data.title || "Untitled",
      date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
      excerpt: data.excerpt || "",
      tags: data.tags || [],
      published: data.published !== false,
      slug,
      category: data.category || "",
    } as PostMeta,
    content,
  };
}

export function getPageContent(pageName: string) {
  const dir = path.join(contentDirectory, "pages");
  const filePath = path.join(dir, `${pageName}.mdx`);

  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return { data, content };
}

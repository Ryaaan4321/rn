import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

const postsDirectory = path.join(process.cwd(), "content/posts");

export interface Post {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  content: string;
  readingTime: string;
}
function normalizeTags(data: Record<string, unknown>): string[] {
  if (Array.isArray(data.tags) && data.tags.length > 0) return data.tags;
  if (typeof data.tag === "string") return [data.tag];
  return ["general"];
}
function calculateReadingTime(content: string): string {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  return `${minutes} min read`;
}

export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);
      return {
        slug,
        title: data.title || "Untitled",
        date: data.date || "",
        tags: normalizeTags(data),
        excerpt: data.excerpt || content.slice(0, 120) + "...",
        content,
        readingTime: calculateReadingTime(content),
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return posts;
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    return {
      slug,
      title: data.title || "Untitled",
      date: data.date || "",
      tags: normalizeTags(data),
      excerpt: data.excerpt || content.slice(0, 120) + "...",
      content,
      readingTime: calculateReadingTime(content),
    };
  } catch {
    return null;
  }
}

export async function compilePost(
  content: string,
  components: Record<string, React.ComponentType<any>>
) {
  const { content: compiledContent } = await compileMDX({
    source: content,
    components,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
  });
  return compiledContent;
}
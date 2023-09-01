// app/utils.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface IArticle {
  slug: string;
  title: string;
  excerpt: string;
  filename: string;
  content: string;
}

// Where are all posts located.
const BLOG_DIR = path.join(process.cwd(), "./app/posts");

function filenameToSlug(filename: string) {
  // We assume that each post files has '.mdx' extension with 4 characters.
  return filename.slice(0, filename.length - 4);
}

export function getPosts(): IArticle[] {
  const files = fs.readdirSync(BLOG_DIR);
  return files.map((filename) => {
    const slug = filenameToSlug(filename);
    return getPost(slug);
  });
}

export function getPost(slug: string): IArticle {
  const filename = `${slug}.mdx`;
  const fileContent = fs.readFileSync(path.join(BLOG_DIR, filename), "utf-8");

  const parsedArticle = matter(fileContent);
  const frontMatter = parsedArticle.data;
  const content = parsedArticle.content;

  return {
    slug,
    title: frontMatter.title,
    excerpt: frontMatter.excerpt,
    filename: filename,
    content: content,
  };
}

// app/utils.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface IPost {
  slug: string;
  title: string;
  author: string;
  publishedAt: string;
  image: string;
  imageAlt: string;
  tags: string[];
  excerpt: string;
  filename: string;
  featured?: string;
  content: string;
}

// Where are all posts located.
const BLOG_DIR = path.join(process.cwd(), "./app/posts");

function filenameToSlug(filename: string) {
  // We assume that each post files has '.mdx' extension with 4 characters.
  return filename.slice(0, filename.length - 4);
}



export function getPosts(): IPost[] {
  const files = fs.readdirSync(BLOG_DIR);
  return files.map((filename) => {
    const slug = filenameToSlug(filename);
    return getPost(slug);
  });
}

export function getPost(slug: string): IPost {
  const filename = `${slug}.mdx`;
  const fileContent = fs.readFileSync(path.join(BLOG_DIR, filename), "utf-8");

  const parsedArticle = matter(fileContent);
  const frontMatter = parsedArticle.data;
  const content = parsedArticle.content;
  const tags = frontMatter.tags ? frontMatter.tags.split(',') : []
  return {
    slug,
    ...frontMatter as any,
    tags,
    filename: filename,
    content: content,
  };
}

export function estimateReadTimeMinutes(content: string) {
    const ADULT_READ_TIME_WPM = 255
    return Math.ceil(content.trim().split(/\s+/).length / ADULT_READ_TIME_WPM)
}
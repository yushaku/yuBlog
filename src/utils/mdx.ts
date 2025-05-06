import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src/contents/posts');

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  description: string;
  thumbnail: string;
  tags: string[];
  category: string;
  content: string;
};

export function getAllPosts(): BlogPost[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPosts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      content,
      title: data.title,
      date: data.date,
      description: data.description,
      thumbnail: data.thumbnail,
      tags: data.tags || [],
      category: data.category,
    };
  });

  return allPosts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      content,
      title: data.title,
      date: data.date,
      description: data.description,
      thumbnail: data.thumbnail,
      tags: data.tags || [],
      category: data.category,
    };
  } catch (error) {
    return null;
  }
}
// src/content-api/loadPosts.js
import matter from "gray-matter";

// Load all /content/posts/**/index.md as raw strings (Vite)
const files = import.meta.glob("/content/posts/**/index.md", {
  as: "raw",
  eager: true,
});

// Optional: load assets to make Vite aware of them if you need URLs later
import.meta.glob("/content/posts/**", { eager: true });

export function getAllPosts() {
  const list = Object.entries(files).map(([path, raw]) => {
    const { data, content } = matter(raw);
    const slug = data.slug || path.split("/").slice(-2, -1)[0];
    return {
      ...data,
      slug,
      body: content,
    };
  });

  return list
    .filter((p) => !p.draft)
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

export function getPostBySlug(slug) {
  return getAllPosts().find((p) => p.slug === slug) || null;
}
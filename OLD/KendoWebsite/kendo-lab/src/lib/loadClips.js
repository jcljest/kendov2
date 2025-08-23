// src/lib/loadClips.js
import matter from "gray-matter";

/** basic slugify: folder name or title → slug */
function slugify(s) {
  return String(s)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export async function loadAllClips() {
  // Vite will find all index.md files under src/clips
  const modules = import.meta.glob("/src/clips/**/index.md", { as: "raw" });

  const entries = await Promise.all(
    Object.entries(modules).map(async ([path, loader]) => {
      const raw = await loader();
      const { data, content } = matter(raw);

      // slug from folder name, fallback to title
      // path looks like: /src/clips/<folder>/index.md
      const parts = path.split("/");
      const folder = parts[parts.length - 2];
      const slug = slugify(folder || data.title || path);

      return {
        slug,
        title: data.title || folder || "Untitled Clip",
        videoId: data.videoId || null,
        start: data.start ?? 0,
        // keep content if you’ll render markdown body later
        content,
      };
    })
  );

  // sort newest first if your folder names are date-prefixed, else A→Z by title
  return entries.sort((a, b) => a.title.localeCompare(b.title));
}

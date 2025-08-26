// src/pages/BlogIndex.jsx
import Card from "../components/Card";
import { getAllPosts } from "../content-api/loadPosts";
//import SEO from "../components/SEO";
import { Link } from "react-router-dom";

export default function BlogIndex() {
  const posts = getAllPosts();
  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      {/* <SEO title="Blog" description="Latest posts" /> */}
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Blog</h1>
        <nav className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/blog" className="hover:underline">Blog</Link>
        </nav>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (

          <Link to={`/blog/${p.slug}`} key={p.slug} className="block">
            <Card className="hover:shadow-md">
              {p.cover && <img src={p.cover} alt={p.title} />}
              <div className="p-4">
                <h3>{p.title}</h3>
                <time>{p.date}</time>
                <p>{p.excerpt}</p>
              </div>
            </Card>
          </Link>

        ))}
      </div>
    </main>
  );
}

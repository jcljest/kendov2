// src/pages/Home.jsx
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <SEO title="Home" description="Welcome" />
      <header className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">YourSite</h1>
        <nav className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/blog" className="hover:underline">Blog</Link>
        </nav>
      </header>
      <section className="prose dark:prose-invert">
        <p>Landing content or CTA here.</p>
      </section>
    </main>
  );
}

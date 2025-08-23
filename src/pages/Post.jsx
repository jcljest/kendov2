// src/pages/Post.jsx
import { useParams, Link } from "react-router-dom";
import { getPostBySlug } from "../content-api/loadPosts";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import SEO from "../components/SEO";

export default function Post() {
  const { slug = "" } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <main className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-xl font-semibold">Post not found</h1>
        <Link to="/blog" className="text-blue-600 underline">
          Back to Blog
        </Link>
      </main>
    );
  }

  return (
    <main className="prose dark:prose-invert max-w-3xl mx-auto px-4 py-8">
      <SEO title={post.title} description={post.excerpt} />
      <header className="mb-4">
        <nav className="text-sm mb-2">
          <Link to="/blog" className="text-blue-600 underline">
            ← Back to Blog
          </Link>
        </nav>
        <h1>{post.title}</h1>
        <p className="text-sm text-gray-500">
          {new Date(post.date).toLocaleDateString()}
        </p>
        {post.cover && <img src={post.cover} alt="" />}
      </header>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {post.body}
      </ReactMarkdown>
    </main>
  );
}

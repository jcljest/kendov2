// src/pages/BlogPost.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { postsIndex } from '../content/posts';

export default function BlogPost() {
  const { slug } = useParams();
  const entry = postsIndex.find(p => p.slug === slug);

  if (!entry) {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-2">Post not found</h1>
        <p className="mb-4">We couldn’t find “{slug}”.</p>
        <Link to="/" className="text-blue-600 underline">← Back to studies</Link>
      </div>
    );
  }

  const Post = React.lazy(() => import(`../content/posts/${entry.slug}.mdx`));

  return (
    <article className="prose lg:prose-lg max-w-none">
      <BackLink />
      <TitleSetter title={`${entry.title} | Kendo Studies`} />
      <React.Suspense fallback={<p>Loading post…</p>}>
        <Post />
      </React.Suspense>
    </article>
  );
}

function BackLink() {
  return (
    <p className="mb-4">
      <Link to="/" className="text-blue-600 underline">← Back to studies</Link>
    </p>
  );
}

function TitleSetter({ title }) {
  React.useEffect(() => {
    const prev = document.title;
    document.title = title;
    return () => { document.title = prev; };
  }, [title]);
  return null;
}

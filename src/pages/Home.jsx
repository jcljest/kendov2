// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import { postsIndex } from '../content/posts';
import BlogIndex from './BlogIndex';
import Card from '../components/Card.jsx';
import { useState, useEffect } from "react";

export default function Home() {
 

  const [darkMode, setDarkMode] = useState(() => {
    try {
      const saved = localStorage.getItem('theme');           // 'dark' | 'light' | null
      if (saved === 'dark') return true;
      if (saved === 'light') return false;
    } catch {}
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

// 2) Persist on change
  useEffect(() => {
    try {
      localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    } catch {}
  }, [darkMode]);

    // (Optional) Keep multiple tabs/windows in sync
  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === 'theme') setDarkMode(e.newValue === 'dark');
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);




 return (

  <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="text-xl font-bold text-gray-900 dark:text-white">
                Your Brand
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setDarkMode((v) => !v)}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {darkMode ? '☀️' : '🌙'}
                </button>
              </div>
            </div>
          </div>
        </header>

    <section>
      <h1 className="text-2xl font-bold mb-6">Kendo Studies</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">




        
{postsIndex.map((p) => (
  <article key={p.slug} className="rounded-lg p-4">
    <Card
      href={`/blog/${p.slug}`}
      aria-label={p.title}
      className="border hover:shadow"
      variant="elevated"
    >
     {p.thumb && (
        <div className="mb-3 overflow-hidden rounded-lg aspect-[16/9]">
          <img
            src={p.thumb}
            alt={`${p.title} thumbnail`}
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      )}

      <h3 className="t-heading font-semibold text-gray-900 dark:text-white mb-3">
        {p.title}
      </h3>

      <p className="t-body text-gray-600 dark:text-gray-400 mb-4">
        {p.excerpt}
      </p>


    </Card>
  </article>
))}
        <BlogIndex />
      </div>
    </section>

 </div>
    </div>

  );
}

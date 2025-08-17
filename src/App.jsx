
import { useMemo, useState, useEffect } from "react";
import './index.css'
import NavBar from './components/NavBar.jsx';
import Hero from './components/Hero.jsx';
import PostCard from './components/PostCard.jsx';
import Button from './components/ui/Button.jsx'
import { POSTS, CATEGORIES } from './data/Posts.js';

function App() {

  return (

     <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <NavBar
        links={[
          { href: "#blog", label: "Posts" },
          { href: "#about", label: "About" },
          { href: "#subscribe", label: "Subscribe" },
        ]}
      />

      <Hero />


    <section className="mx-auto max-w-6xl px-4 pb-14">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-8 sm:grid-cols-2 lg:grid-cols-3">
        {POSTS.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Button
          type="button"
          className="rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-800 shadow-sm transition hover:border-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
        >
          Load more
        </Button>
      </div>
    </section>
  </main>
  )
}

export default App

// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import { postsIndex } from '../content/posts';
import BlogIndex from './BlogIndex';
import Card from '../components/Card.jsx';
import { useState, useEffect } from "react";
import withRoute from '../routing/withRoute.jsx';



const RoutableCard = withRoute(Card);

export default function Home() {

  return (

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <section>
          <h1 className="text-2xl font-bold mb-6">Home Page</h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {postsIndex.map((p) => (
                <article key={p.slug} className="rounded-lg p-4">
                  <RoutableCard
                    to={`/blog/${p.slug}`}
                    aria-label={p.title}
                    className="border hover:shadow"
                    variant="default"
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


                  </RoutableCard>
                </article>
              ))}
          </div>
        </section>
      </div>

  );
}

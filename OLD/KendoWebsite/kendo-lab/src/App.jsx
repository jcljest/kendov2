import Playground from "./Playground";
import ListGroup from "./ListGroup";
import './Playground.css';

export default function App() {
  return (
    <div className="min-h-screen flex items-end justify-center">
      <div className="grid grid-cols-2 gap-16">
          <div><ListGroup /></div>
          <div><ListGroup /></div>
      </div>
    </div>
  );
}





{/* import { useMemo } from "react";
import matter from "gray-matter";
import { marked } from "marked";
import DOMPurify from "dompurify";
import YouTubeSegment from "./components/YouTubeSegment";
import { useEffect, useState } from "react";
import { loadAllClips } from "./lib/loadClips";
import NavBar from "./components/NavBar";



export default function App() {



  const [clips, setClips] = useState([]);

  useEffect(() => {
    loadAllClips().then(setClips).catch((e) => {
      console.error("Failed to load clips", e);
      setClips([]);
    });
  }, []);



  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <NavBar clips={clips} />

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-10">
        {clips.map((clip) => {
          const html = DOMPurify.sanitize(marked.parse(clip.content || ""));
          const tags = clip.tags ?? []; // if you add tags to front-matter later

          return (
            <section id={clip.slug} key={clip.slug} className="space-y-3">
              <h2 className="text-2xl font-bold text-yellow-400">{clip.title}</h2>

              {clip.videoId ? (
                <YouTubeSegment id={clip.videoId} start={clip.start} />
              ) : (
                <p className="text-sm text-gray-400">(No video ID provided for this clip.)</p>
              )}

  
              {tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {tags.map((t) => (
                    <span key={t} className="px-3 py-1 text-xs font-medium bg-gray-200 text-gray-900 rounded-full shadow-xs">
                      {t}
                    </span>
                  ))}
                </div>
              )}

  
              {html && (
                <article className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: html }} />
              )}


              {clip.image && (
                <img src={clip.image} alt="Drill example" className="rounded shadow-md" />
              )}
            </section>
          );
        })}

        {clips.length === 0 && (
          <p className="text-sm text-gray-400">
            No clips found. Add <code>src/clips/&lt;your-folder&gt;/index.md</code>.
          </p>
        )}
      </main>
    </div>
  );
}

*/}

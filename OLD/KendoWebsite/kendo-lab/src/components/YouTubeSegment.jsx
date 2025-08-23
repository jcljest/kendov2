// src/components/YouTubeSegment.jsx
import { useMemo, useState } from "react";

export default function YouTubeSegment({ id, start = 0 }) {
  const [ver, setVer] = useState(0); // bump to remount iframe (reloads to start)
  const src = useMemo(() => {
    const s = Number(start) || 0;
    return `https://www.youtube-nocookie.com/embed/${id}?start=${s}&rel=0&modestbranding=1&playsinline=1`;
  }, [id, start, ver]);

  if (!id) return null;

  return (
    <div className="space-y-2">
      <div className="overflow-hidden rounded-sm shadow-xs border border-gray-700">
        {/* key={ver} forces iframe to remount when ver changes */}
        <iframe
          key={ver}
          className="w-full aspect-video"
          src={src}
          title="YouTube segment"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => setVer((n) => n + 1)}
          className="px-3 py-1.5 text-xs font-medium rounded-sm bg-gray-200 text-gray-900 hover:bg-gray-300 transition"
          title="Jump back to the clip start time"
        >
          Replay from {Math.max(0, Number(start) || 0)}s
        </button>

        {/* Optional hint so users know this is a ~15s clip */}
        <span className="text-[11px] text-gray-400">
          Watch ~15s, then hit “Replay” to drill the moment.
        </span>
      </div>
    </div>
  );
}

import { useEffect, useRef, useState } from "react";

// load the YT iframe API once
let ytApiPromise;
function loadYouTubeAPI() {
  if (window.YT?.Player) return Promise.resolve(window.YT);
  if (!ytApiPromise) {
    ytApiPromise = new Promise((resolve) => {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.head.appendChild(tag);
      window.onYouTubeIframeAPIReady = () => resolve(window.YT);
    });
  }
  return ytApiPromise;
}

export default function YouTubeClip({ id, start = 0, end = null }) {
  const containerRef = useRef(null);
  const playerRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!id) return;

    let timeGuard = null;
    let stoppedAtEnd = false;

    loadYouTubeAPI().then((YT) => {
      // destroy previous instance (hot reloads, prop changes)
      if (playerRef.current?.destroy) {
        playerRef.current.destroy();
        playerRef.current = null;
      }

      playerRef.current = new YT.Player(containerRef.current, {
        videoId: id,
        host: "https://www.youtube-nocookie.com", // privacy-enhanced
        playerVars: {
          start: Number(start) || 0,
          ...(end != null ? { end: Number(end) } : {}),
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
          // autoplay: 1, // avoid by default (browser blocks without user interaction)
        },
        events: {
          onReady: (e) => {
            setReady(true);
            // Ensure it cues to start without auto-playing
            e.target.seekTo(Number(start) || 0, true);
          },
          onStateChange: (e) => {
            // Extra guard: some regions/browsers ignore `end`.
            // We poll current time and pause when passing `end`.
            if (end == null) return;

            if (e.data === YT.PlayerState.PLAYING && !timeGuard) {
              timeGuard = setInterval(() => {
                const t = e.target.getCurrentTime?.() ?? 0;
                if (!stoppedAtEnd && t >= Number(end)) {
                  stoppedAtEnd = true;
                  e.target.pauseVideo();
                }
              }, 200);
            }

            if (e.data === YT.PlayerState.PAUSED || e.data === YT.PlayerState.ENDED) {
              if (timeGuard) {
                clearInterval(timeGuard);
                timeGuard = null;
              }
            }
          },
        },
      });
    });

    // cleanup
    return () => {
      if (playerRef.current?.destroy) playerRef.current.destroy();
    };
  }, [id, start, end]);

  if (!id) return null;

  return (
    <div className="video-wrapper">
      {/* the API will replace this div with an <iframe> */}
      <div ref={containerRef} />
      {!ready && (
        <div className="p-2 text-xs text-gray-400">Loading player…</div>
      )}
    </div>
  );
}

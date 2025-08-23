// src/components/YouTubeEmbed.jsx





export default function YouTubeEmbed({ id, start = 0 }) {
  if (!id) return null; // Don't render if no videoId is provided

  return (
    <div className="video-container">
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${id}?start=${start}&rel=0`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

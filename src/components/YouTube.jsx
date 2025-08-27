// src/components/YouTube.jsx
export default function YouTube({ id, title, start = 0 }) {
  return (
    <div className="aspect-video rounded-xl overflow-hidden shadow">
      <iframe
        src={`https://www.youtube.com/embed/${id}?start=${start}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  );
}

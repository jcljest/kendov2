// src/components/Figure.jsx
export default function Figure({ src, alt, children }) {
  return (
    <figure className="my-6">
      <img src={src} alt={alt} className="rounded-lg shadow max-w-full h-auto" loading="lazy" />
      {children && <figcaption className="mt-2 text-sm text-gray-500">{children}</figcaption>}
    </figure>
  );
}

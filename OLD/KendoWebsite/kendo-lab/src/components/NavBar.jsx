// src/components/NavBar.jsx
export default function NavBar({ clips = [] }) {
  if (!clips.length) return null;

  return (
    <nav className="fixed left-0 top-0 h-screen w-48 bg-gray-900 text-gray-100 border-r border-gray-700">
      <div className="max-w-5xl mx-auto px-4 py-3">
        <ul className="flex flex-col gap-4 text-sm">
          {clips.map((c) => (
            <li key={c.slug}>
              <a
                href={`#${c.slug}`}
                className="hover:text-yellow-400 transition block"
              >
                {c.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

// src/layouts/RootLayout.jsx
import { Link, NavLink, Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <div className="min-h-dvh flex flex-col">
      {/* Top Nav */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
        <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Left: Brand → always returns Home */}
          <Link to="/" className="font-semibold tracking-wide">
            Kendo Studies
          </Link>

          {/* Right: simple nav (add more later) */}
          <div className="flex items-center gap-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:underline ${isActive ? 'text-blue-600' : 'text-gray-700'}`
              }
              end
            >
              Home
            </NavLink>
            {/* Add tabs later, e.g. <NavLink to="/about">About</NavLink> */}
          </div>
        </nav>
      </header>

      {/* Page content */}
      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <Outlet />
        </div>
      </main>

      {/* Footer (optional) */}
      <footer className="border-t border-gray-200 text-sm text-gray-500">
        <div className="max-w-6xl mx-auto px-4 py-6">
          © {new Date().getFullYear()} Kendo Studies
        </div>
      </footer>
    </div>
  )
}

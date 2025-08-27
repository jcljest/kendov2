// src/layouts/RootLayout.jsx
import { Link, NavLink, Outlet } from 'react-router-dom'
import { useState, useEffect } from "react";

export default function RootLayout() {

  const [darkMode, setDarkMode] = useState(() => {
    try {
      const saved = localStorage.getItem('theme');           // 'dark' | 'light' | null
      if (saved === 'dark') return true;
      if (saved === 'light') return false;
    } catch {}
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

// 2) Persist on change
  useEffect(() => {
    try {
      localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    } catch {}
  }, [darkMode]);

    // (Optional) Keep multiple tabs/windows in sync
  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === 'theme') setDarkMode(e.newValue === 'dark');
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);


  return (
<div className={darkMode ? 'dark' : ''}>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
    <div className="min-h-dvh flex flex-col">
      {/* Top Nav */}              {/* Header */}
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="text-xl font-bold text-gray-900 dark:text-white">
                NavBar
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setDarkMode((v) => !v)}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {darkMode ? '☀️' : '🌙'}
                </button>
              </div>
            </div>
          </div>
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
    </div>
    </div>  
  )
}

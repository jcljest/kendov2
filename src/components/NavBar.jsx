import { useState, useEffect } from "react";
import Button from "./ui/Button.jsx";

export default function NavBar({ links = [] }) {
  const [open, setOpen] = useState(false);

  // Close on escape + when resizing up to desktop
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/70 backdrop-blur dark:border-slate-800 dark:bg-slate-900/60">
      <div className="mx-auto max-w-6xl px-[clamp(1rem,4vw,2rem)]">
        <div className="flex h-14 items-center justify-between">
          {/* Brand */}
          <a href="#home" className="text-sm font-semibold tracking-tight text-slate-900 dark:text-slate-100">
            YourBlog
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex md:items-center md:gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <Button variant="solid" size="sm">Subscribe</Button>
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-lg p-2.5 md:hidden hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            {/* Hamburger / Close */}
            <svg className={`size-5 ${open ? "hidden" : "block"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeWidth="2" strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
            <svg className={`size-5 ${open ? "block" : "hidden"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeWidth="2" strokeLinecap="round" d="M6 6l12 12M18 6l-12 12" />
            </svg>
          </button>
        </div>

        {/* Mobile drawer */}
        <div className={`md:hidden ${open ? "block" : "hidden"}`}>
          <nav className="pb-4">
            <ul className="space-y-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm text-slate-800 hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-800"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="px-3 pt-1">
                <Button variant="solid" size="sm" onClick={() => setOpen(false)}>Subscribe</Button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

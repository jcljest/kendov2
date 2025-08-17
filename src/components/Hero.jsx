import Button from "./ui/Button.jsx";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-[clamp(1rem,4vw,2rem)] py-14 sm:py-18 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Blog
          </p>
          <h1 className="mt-2 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            Clear, practical ideas to level up your learning
          </h1>
          <p className="mt-3 text-pretty text-slate-600 dark:text-slate-300">
            Short reads on practice, recovery, and mindset. Built with React + Tailwind.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#blog">
              <Button variant="solid" size="lg">Explore posts</Button>
            </a>
            <a href="#subscribe">
              <Button variant="outline" size="lg">Get updates</Button>
            </a>
          </div>
        </div>
      </div>

      {/* soft background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-10 -right-20 h-72 w-72 rounded-full bg-gradient-to-br from-sky-300/30 to-indigo-300/30 blur-3xl dark:from-sky-500/10 dark:to-indigo-500/10"
      />
    </section>
  );
}

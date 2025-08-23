// Playground.jsx
export default function Playground() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-8 space-y-6">
      <h1 className="text-2xl font-bold">SVG Playground</h1>


     <div className="inline-block relative group w-12 h-12">
      <div className="
          absolute inset-0 
          rounded-full 
          blur-lg 
          opacity-0 
          scale-75
          group-hover:opacity-70 
          group-hover:scale-110
          transition-all duration-500 ease-out
          bg-yellow-400 group-hover:animate-pulse pointer-events-none z-10"
        />

      {/* Direct image usage */}
      <img
        src="/men-icon.svg"
        alt="Men icon"
        className="w-12 h-12 hover:scale-110 transition-transform"
      />
    </div>


      {/* Masked background for color control */}
      <div
        className="w-12 h-12 bg-yellow-400 hover:bg-cyan-400 transition-colors"
        style={{
          WebkitMask: "url(/men-icon.svg) no-repeat center / contain",
          mask: "url(/men-icon.svg) no-repeat center / contain",
        }}
        aria-hidden="true"
      />
    </main>
  );
}

// src/components/IconButton.jsx
export default function IconButton({
  Icon,
  label = "Action",
  iconClass = "w-8 h-8",
  className = "",
}) {
  return (
    <button
      type="button"
      className={[
        // layout
        "group inline-flex items-center gap-2 px-3 py-2 rounded-sm",
        // colors (override per-use)
        "bg-slate-800 text-slate-100",
        // borders & elevation
        "border border-slate-700 shadow-xs",
        // animation/interaction
        "transition-all duration-150",
        "hover:scale-[1.03] active:scale-[0.97]",
        "hover:-translate-y-[1px]",
        "focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-yellow-400/70",
        className,
      ].join(" ")}
      aria-label={label}
    >
      {/* Icon inherits text color via currentColor */}
      <Icon className={iconClass + " transition-transform group-hover:rotate-6"} />
      <span className="text-xs font-medium">{label}</span>
    </button>
  );
}

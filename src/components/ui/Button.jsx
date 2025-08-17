import React from "react";

/**
 * Tailwind Button
 * - Variants: solid | outline | ghost | link
 * - Sizes: sm | md | lg
 * - Loading support (spinner + disabled)
 * - Optional leftIcon / rightIcon
 * - Polymorphic: use `as="a"` to render <a>, etc.
 */
export default function Button({
  as: Comp = "button",
  variant = "outline",
  size = "md",
  isLoading = false,
  leftIcon = null,
  rightIcon = null,
  className = "",
  children,
  ...rest
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/50 " +
    "disabled:opacity-50 disabled:pointer-events-none select-none";

  const sizes = {
    sm: "text-sm px-3 py-1.5",
    md: "text-sm px-4 py-2.5",
    lg: "text-base px-5 py-3",
  };

  const variants = {
    solid:
      "bg-slate-900 text-white hover:opacity-90 active:opacity-100 " +
      "dark:bg-slate-100 dark:text-slate-900",
    outline:
      "border border-slate-300 bg-white text-slate-800 hover:border-slate-500 " +
      "dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100",
    ghost:
      "bg-transparent text-slate-800 hover:bg-slate-100 " +
      "dark:text-slate-100 dark:hover:bg-slate-800",
    link: "text-slate-900 underline underline-offset-4 hover:opacity-90 dark:text-slate-100",
  };

  const classes = [base, sizes[size], variants[variant], className]
    .filter(Boolean)
    .join(" ");

  const isButton = Comp === "button";
  const type = isButton ? rest.type || "button" : undefined;

  return (
    <Comp
      type={type}
      className={classes}
      aria-busy={isLoading || undefined}
      data-variant={variant}
      data-size={size}
      disabled={rest.disabled || isLoading}
      {...rest}
    >
      {/* left slot (spinner or icon) */}
      <span className="inline-flex items-center">
        {isLoading ? (
          <span
            className="size-4 animate-spin rounded-full border-2 border-slate-300 border-t-transparent dark:border-slate-600"
            aria-hidden
          />
        ) : (
          leftIcon
        )}
      </span>
      <span className="whitespace-nowrap">{children}</span>
      {/* right slot */}
      <span className="inline-flex items-center">{rightIcon}</span>
    </Comp>
  );
}

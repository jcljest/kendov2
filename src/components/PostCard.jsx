import { formatDate } from "../utils/dates";


export default function PostCard({ post }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img
          src={post.image}
          alt=""
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
            {post.category}
          </span>
          <span aria-hidden>•</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden>•</span>
          <span>{post.readMins} min</span>
        </div>
        <h3 className="text-balance text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-100">
          <a href={`#/blog/${post.id}`} className="focus:outline-none">
            <span className="absolute inset-0" aria-hidden />
            {post.title}
          </a>
        </h3>
        <p className="text-pretty text-sm leading-6 text-slate-600 dark:text-slate-300">
          {post.excerpt}
        </p>
        <div className="mt-auto flex items-center gap-3 pt-2">
          <div className="size-8 shrink-0 overflow-hidden rounded-full bg-slate-200">
            <img
              src={`/avatars/${post.author.toLowerCase().split(" ").join("-")}.jpg`}
              alt=""
              className="h-full w-full object-cover"
              loading="lazy"
              onError={(e) => {
                // fallback color block
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
          <div className="text-sm text-slate-700 dark:text-slate-200">{post.author}</div>
        </div>
      </div>
    </article>
  );
}
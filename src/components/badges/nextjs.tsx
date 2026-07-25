export default function NextJSBadge({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border bg-zinc-50 border-zinc-200 text-zinc-800 dark:bg-zinc-900/30 dark:border-zinc-800 dark:text-zinc-200 ${className}`}>
      <span className="w-2 h-2 rounded-full bg-zinc-800 dark:bg-zinc-200" />
      Next.js
    </span>
  );
}

export default function JavaScriptBadge({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border bg-yellow-50/55 border-yellow-200/60 text-yellow-700 dark:bg-yellow-950/20 dark:border-yellow-800/40 dark:text-yellow-400 ${className}`}>
      <span className="w-2 h-2 rounded-full bg-yellow-600 dark:bg-yellow-400" />
      JavaScript
    </span>
  );
}

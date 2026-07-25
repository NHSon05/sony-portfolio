export default function GitBadge({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border bg-red-50/50 border-red-200/60 text-red-600 dark:bg-red-950/20 dark:border-red-800/40 dark:text-red-400 ${className}`}>
      <span className="w-2 h-2 rounded-full bg-red-600 dark:bg-red-400" />
      Git
    </span>
  );
}

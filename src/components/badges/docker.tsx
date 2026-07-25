export default function DockerBadge({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border bg-sky-50/50 border-sky-200/60 text-sky-600 dark:bg-sky-950/20 dark:border-sky-800/40 dark:text-sky-400 ${className}`}>
      <span className="w-2 h-2 rounded-full bg-sky-600 dark:bg-sky-400" />
      Docker
    </span>
  );
}

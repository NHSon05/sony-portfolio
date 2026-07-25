export default function PostgreSQLBadge({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border bg-blue-50/50 border-blue-200/60 text-blue-600 dark:bg-blue-950/20 dark:border-blue-800/40 dark:text-blue-400 ${className}`}>
      <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" />
      PostgreSQL
    </span>
  );
}

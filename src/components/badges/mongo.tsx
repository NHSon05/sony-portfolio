export default function MongoBadge({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border bg-emerald-50/50 border-emerald-200/60 text-emerald-600 dark:bg-emerald-950/20 dark:border-emerald-800/40 dark:text-emerald-400 ${className}`}>
      <span className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400" />
      MongoDB
    </span>
  );
}

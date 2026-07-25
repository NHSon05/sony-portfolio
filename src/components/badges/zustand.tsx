export default function ZustandBadge({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border bg-amber-50/50 border-amber-200/60 text-amber-700 dark:bg-amber-950/20 dark:border-amber-800/40 dark:text-amber-400 ${className}`}>
      <span className="w-2 h-2 rounded-full bg-amber-600 dark:bg-amber-400" />
      Zustand
    </span>
  );
}

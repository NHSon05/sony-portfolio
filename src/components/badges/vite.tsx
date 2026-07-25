export default function ViteBadge({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border bg-violet-50/50 border-violet-200/60 text-violet-600 dark:bg-violet-950/20 dark:border-violet-800/40 dark:text-violet-400 ${className}`}>
      <span className="w-2 h-2 rounded-full bg-violet-600 dark:bg-violet-400" />
      Vite
    </span>
  );
}

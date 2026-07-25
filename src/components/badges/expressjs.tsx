export default function ExpressjsBadge({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border bg-slate-50 border-slate-200/60 text-slate-700 dark:bg-slate-900/30 dark:border-slate-800/50 dark:text-slate-300 ${className}`}>
      <span className="w-2 h-2 rounded-full bg-slate-500 dark:bg-slate-400" />
      Express.js
    </span>
  );
}

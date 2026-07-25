export default function NestJSBadge({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border bg-rose-50/50 border-rose-200/60 text-rose-600 dark:bg-rose-950/20 dark:border-rose-800/40 dark:text-rose-400 ${className}`}>
      <span className="w-2 h-2 rounded-full bg-rose-600 dark:bg-rose-400" />
      NestJS
    </span>
  );
}

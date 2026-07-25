export default function NodeJSBadge({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border bg-green-50/50 border-green-200/60 text-green-600 dark:bg-green-950/20 dark:border-green-800/40 dark:text-green-400 ${className}`}>
      <span className="w-2 h-2 rounded-full bg-green-600 dark:bg-green-400" />
      Node.js
    </span>
  );
}

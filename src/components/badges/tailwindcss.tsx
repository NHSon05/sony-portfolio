export default function TailwindCSSBadge({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border bg-cyan-50/50 border-cyan-200/60 text-cyan-600 dark:bg-cyan-950/20 dark:border-cyan-800/40 dark:text-cyan-400 ${className}`}>
      <span className="w-2 h-2 rounded-full bg-cyan-600 dark:bg-cyan-400" />
      Tailwind CSS
    </span>
  );
}

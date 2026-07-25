export default function FigmaBadge({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border bg-purple-50/50 border-purple-200/60 text-purple-600 dark:bg-purple-950/20 dark:border-purple-800/40 dark:text-purple-400 ${className}`}>
      <span className="w-2 h-2 rounded-full bg-purple-600 dark:bg-purple-400" />
      Figma
    </span>
  );
}

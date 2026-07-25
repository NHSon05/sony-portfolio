export default function PrismaBadge({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border bg-teal-50/50 border-teal-200/60 text-teal-700 dark:bg-teal-950/20 dark:border-teal-800/40 dark:text-teal-400 ${className}`}>
      <span className="w-2 h-2 rounded-full bg-teal-600 dark:bg-teal-400" />
      Prisma
    </span>
  );
}

export default function PostmanBadge({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border bg-orange-50/50 border-orange-200/60 text-orange-600 dark:bg-orange-950/20 dark:border-orange-800/40 dark:text-orange-400 ${className}`}>
      <span className="w-2 h-2 rounded-full bg-orange-600 dark:bg-orange-400" />
      Postman
    </span>
  );
}

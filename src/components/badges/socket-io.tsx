export default function SocketIOBadge({
  className = "",
}: {
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border bg-zinc-50/50 border-zinc-200/60 text-zinc-600 dark:bg-zinc-950/20 dark:border-zinc-800/40 dark:text-zinc-400 ${className}`}
    >
      <span className="w-2 h-2 rounded-full bg-zinc-600 dark:bg-zinc-400" />
      Socket.IO
    </span>
  );
}

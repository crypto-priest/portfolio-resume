export default function TerminalHeader() {
  return (
    <div className="border border-[var(--terminal-border)] border-b-0 rounded-t-lg bg-[var(--terminal-bg-secondary)] px-4 py-3 flex items-center gap-2">
      {/* Window controls */}
      <div className="flex gap-2">
        <div className="w-3 h-3 rounded-full bg-[var(--terminal-red)]"></div>
        <div className="w-3 h-3 rounded-full bg-[var(--terminal-yellow)]"></div>
        <div className="w-3 h-3 rounded-full bg-[var(--terminal-green)]"></div>
      </div>

      {/* Terminal title */}
      <div className="flex-1 text-center">
        <span className="text-sm text-[var(--terminal-text-dim)] mono">
          ~/portfolio
        </span>
      </div>

      {/* Placeholder for symmetry */}
      <div className="w-[60px]"></div>
    </div>
  );
}

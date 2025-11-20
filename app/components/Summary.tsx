import { resumeData } from "../data/resume-data";

export default function Summary() {
  return (
    <div style={{
      fontFamily: 'Courier New, Consolas, Monaco, monospace',
      fontSize: '15px',
      lineHeight: '1.5'
    }}>
      <div className="text-3xl font-bold mb-3">
        <span className="text-[var(--accent)]">fn</span> <span className="text-[var(--text)]">about</span><span className="text-[var(--text-muted)]">()</span> <span className="text-[var(--accent)]">-&gt;</span> <span className="text-[var(--text-muted)]">String</span> <span className="text-[var(--text-muted)]">{"{"}</span>
      </div>
      <div className="mb-3">
        <p className="text-[var(--text)] text-base max-w-4xl" style={{ paddingLeft: '2rem', lineHeight: '1.5' }}>
          <span className="text-[var(--accent)]">return</span> <span className="text-[var(--success)]">&quot;{resumeData.summary}&quot;</span><span className="text-[var(--text-muted)]">;</span>
        </p>
      </div>
      <div className="text-3xl font-bold text-[var(--text-muted)]">{"}"}</div>
    </div>
  );
}

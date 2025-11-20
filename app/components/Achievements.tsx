import { resumeData } from "../data/resume-data";

export default function Achievements() {
  return (
    <div className="font-mono">
      <div className="text-3xl font-bold mb-4">
        <span className="text-[var(--accent)]">const</span> <span className="text-[var(--text)]">ACHIEVEMENTS</span><span className="text-[var(--text-muted)]">:</span> <span className="text-[var(--text-muted)]">[&str;</span> <span className="text-[var(--accent)]">{resumeData.achievements.length}</span><span className="text-[var(--text-muted)]">]</span> <span className="text-[var(--text-muted)]">= [</span>
      </div>

      <div className="space-y-3 mb-4" style={{ paddingLeft: '2rem' }}>
        {resumeData.achievements.map((achievement, idx) => (
          <div key={idx} className="leading-relaxed text-[var(--text)] text-base hover:scale-[1.01] transition-transform">
            <span className="text-[var(--success)]">&quot;{achievement}&quot;</span><span className="text-[var(--text-muted)]">,</span>
          </div>
        ))}
      </div>

      <div className="text-3xl font-bold text-[var(--text-muted)]">];</div>
    </div>
  );
}

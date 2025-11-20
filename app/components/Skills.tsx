import { resumeData } from "../data/resume-data";

interface Skill {
  name: string;
  level: number;
}

export default function Skills() {
  return (
    <div className="font-mono">
      <div className="text-3xl font-bold mb-4">
        <span className="text-[var(--accent)]">trait</span> <span className="text-[var(--text)]">Skills</span> <span className="text-[var(--text-muted)]">{"{"}</span>
      </div>

      <div className="space-y-8">
        {Object.entries(resumeData.skills).map(([category, skills]) => (
          <div key={category}>
            <div className="text-lg mb-3" style={{ paddingLeft: '2rem' }}>
              <span className="text-[var(--accent)]">fn</span> <span className="text-[var(--text)]">{category.toLowerCase().replace(/\s+/g, '_')}</span><span className="text-[var(--text-muted)]">()</span> <span className="text-[var(--accent)]">-&gt;</span> <span className="text-[var(--text-muted)]">Vec&lt;String&gt;</span> <span className="text-[var(--text-muted)]">{"{"}</span>
            </div>
            <div className="flex flex-wrap gap-3 mb-2" style={{ paddingLeft: '4rem' }}>
              {(skills as Skill[]).map((skill, idx) => (
                <span key={idx} className="px-4 py-2.5 text-base bg-[var(--bg-card)] border border-[var(--border)] rounded text-[var(--text-muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:scale-105 transition-all cursor-default">
                  {skill.name}
                </span>
              ))}
            </div>
            <div className="text-base text-[var(--text-muted)]" style={{ paddingLeft: '2rem' }}>{"}"}</div>
          </div>
        ))}
      </div>

      <div className="text-3xl font-bold text-[var(--text-muted)] mt-6">{"}"}</div>
    </div>
  );
}

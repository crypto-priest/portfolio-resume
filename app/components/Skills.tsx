import { resumeData } from "../data/resume-data";

interface Skill {
  name: string;
  level: number;
}

export default function Skills() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-10 section-header">
        <span className="text-[var(--accent)]">trait</span> Skills
      </h2>

      <div className="space-y-6">
        {Object.entries(resumeData.skills).map(([category, skills]) => (
          <div key={category}>
            <div className="text-base text-[var(--accent)] mb-3 uppercase tracking-wider font-semibold">{category}</div>
            <div className="flex flex-wrap gap-2">
              {(skills as Skill[]).map((skill, idx) => (
                <span key={idx} className="px-3 py-2 text-base bg-[var(--bg-card)] border border-[var(--border)] rounded text-[var(--text-muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:scale-105 transition-all cursor-default">
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import { resumeData } from "../data/resume-data";

export default function Education() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-10 section-header">
        <span className="text-[var(--accent)]">struct</span> Education
      </h2>

      <div className="space-y-8">
        {resumeData.education.map((edu) => (
          <div key={edu.id} className="hover:scale-[1.01] transition-transform">
            <div className="mb-2 font-mono text-base">
              <span className="text-[var(--accent)]">let</span>{" "}
              <span className="text-[var(--text)] font-bold">{edu.degree.toLowerCase().replace(/\s+/g, '_')}</span>
              <span className="text-[var(--text-muted)]"> = </span>
              <span className="text-[var(--text)]">&quot;{edu.school}&quot;</span>
              <span className="text-[var(--text-muted)]">;</span>
            </div>
            {(edu as any).branch && (
              <div className="text-[var(--text-muted)] mb-2 ml-4 text-base">
                <span className="text-[var(--accent)]">//</span> {(edu as any).branch}
              </div>
            )}
            {(edu as any).description && (
              <div className="text-[var(--text-muted)] mb-3 ml-4 text-base">
                <span className="text-[var(--accent)]">//</span> {(edu as any).description}
              </div>
            )}
            <div className="flex flex-wrap gap-3 ml-4 text-base">
              <span className="text-[var(--accent)] font-mono">{edu.period}</span>
              <span className="text-[var(--text-muted)]">@</span>
              <span className="text-[var(--text-muted)]">{edu.location}</span>
              {(edu as any).gpa && (
                <>
                  <span className="text-[var(--text-muted)]">·</span>
                  <span className="text-[var(--accent)] font-mono">{(edu as any).gpa}</span>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

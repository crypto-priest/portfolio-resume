import { resumeData } from "../data/resume-data";

export default function Education() {
  return (
    <div className="font-mono">
      <div className="text-3xl font-bold mb-4">
        <span className="text-[var(--accent)]">struct</span> <span className="text-[var(--text)]">Education</span> <span className="text-[var(--text-muted)]">{"{"}</span>
      </div>

      <div className="space-y-8">
        {resumeData.education.map((edu) => (
          <div key={edu.id} className="hover:scale-[1.01] transition-transform">
            <div className="mb-2 text-lg" style={{ paddingLeft: '2rem' }}>
              <span className="text-[var(--accent)]">let</span>{" "}
              <span className="text-[var(--text)] font-bold">{edu.degree.toLowerCase().replace(/\s+/g, '_')}</span>
              <span className="text-[var(--text-muted)]">: </span>
              <span className="text-[var(--text-muted)]">Degree</span>
              <span className="text-[var(--text-muted)]"> = </span>
              <span className="text-[var(--success)]">&quot;{edu.school}&quot;</span>
              <span className="text-[var(--text-muted)]">;</span>
            </div>
            <div className="space-y-2 mb-2" style={{ paddingLeft: '2rem' }}>
              {(edu as any).branch && (
                <div className="text-[var(--text-muted)] text-base leading-relaxed">
                  <span className="text-[var(--accent)]">//</span> {(edu as any).branch}
                </div>
              )}
              {(edu as any).description && (
                <div className="text-[var(--text-muted)] text-base leading-relaxed">
                  <span className="text-[var(--accent)]">//</span> {(edu as any).description}
                </div>
              )}
              <div className="flex flex-wrap gap-3 text-base">
                <span className="text-[var(--accent)]">{edu.period}</span>
                <span className="text-[var(--text-muted)]">@</span>
                <span className="text-[var(--text-muted)]">{edu.location}</span>
                {(edu as any).gpa && (
                  <>
                    <span className="text-[var(--text-muted)]">·</span>
                    <span className="text-[var(--accent)]">{(edu as any).gpa}</span>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-3xl font-bold text-[var(--text-muted)] mt-6">{"}"}</div>
    </div>
  );
}

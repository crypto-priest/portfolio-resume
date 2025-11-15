import { resumeData } from "../data/resume-data";

export default function Education() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-10 section-header">
        <span className="text-[var(--accent)]">struct</span> Education
      </h2>

      <div className="space-y-6">
        {resumeData.education.map((edu) => (
          <div key={edu.id}>
            <div className="font-bold text-[var(--text)]">{edu.degree}</div>
            <div className="text-[var(--text-muted)] text-sm mt-1">
              {edu.school}
            </div>
            {(edu as any).branch && (
              <div className="text-[var(--text-muted)] text-sm">
                Branch: {(edu as any).branch}
              </div>
            )}
            {(edu as any).description && (
              <div className="text-[var(--text)] text-sm mt-2">
                {(edu as any).description}
              </div>
            )}
            <div className="text-[var(--accent)] text-xs mt-1">
              {edu.period} · {edu.location}
              {(edu as any).gpa && ` · ${(edu as any).gpa}`}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

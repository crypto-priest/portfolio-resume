import { resumeData } from "../data/resume-data";

export default function Experience() {
  return (
    <div className="font-mono">
      <div className="text-3xl font-bold mb-4">
        <span className="text-[var(--accent)]">impl</span> <span className="text-[var(--text)]">Experience</span> <span className="text-[var(--text-muted)]">{"{"}</span>
      </div>

      <div className="space-y-10">
        {resumeData.experience.map((job) => (
          <div key={job.id} className="hover:scale-[1.01] transition-transform">
            <div className="text-lg mb-2" style={{ paddingLeft: '2rem' }}>
              <span className="text-[var(--accent)]">fn</span> <span className="text-[var(--text)] font-bold">{job.title.toLowerCase().replace(/\s+/g, '_')}</span><span className="text-[var(--text-muted)]">()</span> <span className="text-[var(--accent)]">-&gt;</span> <span className="text-[var(--text-muted)]">Role</span> <span className="text-[var(--text-muted)]">{"{"}</span>
            </div>
            <div className="space-y-2 mb-2" style={{ paddingLeft: '4rem' }}>
              <div className="text-[var(--text-muted)] text-base">
                <span className="text-[var(--accent)]">//</span> {job.company} · {job.location}
              </div>
              <div className="text-[var(--accent)] text-base">{job.period}</div>
              <div className="space-y-2 text-[var(--text)] pt-2">
                {job.description.map((item, idx) => (
                  <div key={idx} className="leading-relaxed text-base">
                    <span className="text-[var(--accent)]">//</span> {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="text-base text-[var(--text-muted)]" style={{ paddingLeft: '2rem' }}>{"}"}</div>
          </div>
        ))}
      </div>

      <div className="text-3xl font-bold text-[var(--text-muted)] mt-6">{"}"}</div>
    </div>
  );
}

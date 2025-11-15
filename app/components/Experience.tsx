import { resumeData } from "../data/resume-data";

export default function Experience() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-10 section-header">
        <span className="text-[var(--accent)]">impl</span> Experience
      </h2>

      <div className="space-y-8">
        {resumeData.experience.map((job) => (
          <div key={job.id} className="hover:scale-[1.01] transition-transform">
            <div className="mb-3">
              <div className="font-bold text-[var(--text)] text-lg">{job.title}</div>
              <div className="text-[var(--text-muted)]">
                {job.company} · {job.location}
              </div>
              <div className="text-[var(--accent)] text-sm mt-1">{job.period}</div>
            </div>

            <ul className="space-y-2 text-[var(--text)]">
              {job.description.map((item, idx) => (
                <li key={idx} className="leading-relaxed text-base">
                  • {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

import { resumeData } from '../data/resume-data';

export const metadata = {
  title: 'Experience | Mahavir Dash',
  description: 'Professional experience of Mahavir Dash - Backend Engineer',
};

export default function ExperiencePage() {
  const { experience } = resumeData;

  return (
    <div className="container section">
      <h1 className="page-title">Experience</h1>
      <p className="page-subtitle">
        My professional journey building scalable backend systems
      </p>

      <div className="max-w-3xl mx-auto">
        {experience.map((exp, index) => (
          <div key={exp.id} className="relative pl-8 pb-12 last:pb-0">
            {/* Timeline line */}
            {index !== experience.length - 1 && (
              <div className="absolute left-[11px] top-6 bottom-0 w-[2px] bg-[var(--border)]" />
            )}

            {/* Timeline dot */}
            <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-[var(--accent)] flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white" />
            </div>

            {/* Content */}
            <div className="card">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                    {exp.title}
                  </h3>
                  <p className="text-[var(--accent)]">{exp.company}</p>
                </div>
                <div className="text-sm text-[var(--text-muted)]">
                  <p>{exp.period}</p>
                  <p>{exp.location}</p>
                </div>
              </div>

              <ul className="space-y-2">
                {exp.description.map((desc, i) => (
                  <li key={i} className="flex gap-3 text-[var(--text-secondary)]">
                    <span className="text-[var(--accent)] mt-1.5 flex-shrink-0">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

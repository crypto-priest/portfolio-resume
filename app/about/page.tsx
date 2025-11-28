import { resumeData } from '../data/resume-data';

export const metadata = {
  title: 'About | Mahavir Dash',
  description: 'Learn more about Mahavir Dash - Backend Engineer specializing in Rust and Distributed Systems',
};

export default function AboutPage() {
  const { summary, achievements, education } = resumeData;

  return (
    <div className="container section">
      <h1 className="page-title">About Me</h1>
      <p className="page-subtitle">
        Backend Engineer with a passion for building scalable systems
      </p>

      {/* Summary */}
      <div className="card mb-8">
        <p className="text-[var(--text-secondary)] leading-relaxed">
          {summary}
        </p>
      </div>

      {/* Achievements */}
      <div className="mb-12">
        <h2 className="section-title">Key Achievements</h2>
        <h3 className="text-2xl font-semibold text-center mb-8">
          What I&apos;ve Accomplished
        </h3>
        <div className="space-y-4">
          {achievements.map((achievement, index) => (
            <div key={index} className="card flex gap-4">
              <div className="w-8 h-8 rounded-full bg-[var(--accent)]/10 flex items-center justify-center flex-shrink-0">
                <span className="text-[var(--accent)] text-sm font-semibold">{index + 1}</span>
              </div>
              <p className="text-[var(--text-secondary)]">{achievement}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div>
        <h2 className="section-title">Education</h2>
        <h3 className="text-2xl font-semibold text-center mb-8">
          Academic Background
        </h3>
        <div className="grid-2">
          {education.map((edu) => (
            <div key={edu.id} className="card">
              <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                {edu.degree}
              </h4>
              <p className="text-[var(--accent)] mb-2">{edu.school}</p>
              <p className="text-sm text-[var(--text-muted)] mb-2">{edu.location}</p>
              <p className="text-sm text-[var(--text-muted)]">{edu.period}</p>
              {edu.description && (
                <p className="text-sm text-[var(--text-secondary)] mt-3">{edu.description}</p>
              )}
              {'branch' in edu && edu.branch && (
                <p className="text-sm text-[var(--text-secondary)] mt-2">{edu.branch}</p>
              )}
              {'gpa' in edu && edu.gpa && (
                <p className="text-sm text-[var(--accent)] mt-1">{edu.gpa}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { resumeData } from '../data/resume-data';

export const metadata = {
  title: 'Skills | Mahavir Dash',
  description: 'Technical skills of Mahavir Dash - Backend Engineer',
};

export default function SkillsPage() {
  const { skills } = resumeData;

  return (
    <div className="container section">
      <h1 className="page-title">Skills</h1>
      <p className="page-subtitle">
        Technologies and tools I work with
      </p>

      <div className="space-y-12">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category}>
            <h3 className="text-lg font-semibold text-[var(--accent)] mb-6 text-center">
              {category}
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skillList.map((skill) => (
                <span
                  key={skill.name}
                  className="px-4 py-2 text-sm bg-[var(--bg-card)] border border-[var(--border)] rounded-full text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors cursor-default"
                >
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

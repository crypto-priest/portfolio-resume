import { resumeData } from '../data/resume-data';

export const metadata = {
  title: 'Skills | Mahavir Dash',
  description: 'Technical skills of Mahavir Dash - Backend Engineer',
};

const categoryIcons: Record<string, string> = {
  "System Design & Architecture": "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
  "Backend Development": "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  "API Design & Protocols": "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  "Database Management": "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
  "Blockchain": "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
  "Frontend Integration": "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  "Tools & Frameworks": "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
};

export default function SkillsPage() {
  const { skills } = resumeData;

  return (
    <div className="container section">
      <h1 className="page-title">Skills</h1>
      <p className="page-subtitle">
        Technologies and tools I work with
      </p>

      <div className="space-y-10 max-w-4xl mx-auto">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-[var(--accent)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d={categoryIcons[category] || categoryIcons["Tools & Frameworks"]} />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-[var(--text-primary)]">
                {category}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2 pl-13">
              {skillList.map((skill) => (
                <span
                  key={skill.name}
                  className="inline-flex items-center gap-2 px-3 py-1.5 text-sm bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"></span>
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

import { resumeData } from '../data/resume-data';

export const metadata = {
  title: 'About | Mahavir Dash',
  description: 'Learn more about Mahavir Dash - Backend Engineer specializing in Rust and Distributed Systems',
};

export default function AboutPage() {
  const { summary, achievements, education } = resumeData;

  return (
    <div className="container section">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto mb-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
            Available for opportunities
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mb-6">
            About Me
          </h1>
        </div>

        {/* Bio Card */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent)] via-teal-500 to-[var(--accent)] rounded-2xl blur-lg opacity-20" />
          <div className="relative card bg-[var(--bg-card)] p-8 md:p-10">
            <p className="text-xl md:text-2xl text-[var(--text-secondary)] leading-relaxed font-light">
              {summary}
            </p>
          </div>
        </div>
      </div>

      {/* What I Do Section */}
      <div className="mb-20">
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />
          <h2 className="text-sm font-semibold tracking-widest text-[var(--accent)] uppercase">What I Bring</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="card h-full hover:border-[var(--accent)] transition-all duration-300 relative overflow-hidden">
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative flex gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--accent)]/20 to-[var(--accent)]/5 flex items-center justify-center group-hover:from-[var(--accent)] group-hover:to-emerald-600 transition-all duration-300">
                    <svg className="w-6 h-6 text-[var(--accent)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>

                  {/* Content */}
                  <p className="text-[var(--text-secondary)] text-lg leading-relaxed pt-2">
                    {achievement}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div>
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />
          <h2 className="text-sm font-semibold tracking-widest text-[var(--accent)] uppercase">Education</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={edu.id} className="group">
              <div className="card hover:border-[var(--accent)] transition-all duration-300 relative overflow-hidden">
                {/* Decorative gradient */}
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[var(--accent)] to-emerald-600 rounded-full" />

                <div className="pl-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-[var(--text-primary)] mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-[var(--accent)] text-lg font-medium">{edu.school}</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="px-4 py-2 rounded-full bg-[var(--bg-secondary)] text-[var(--text-muted)] text-sm font-medium border border-[var(--border)]">
                        {edu.period}
                      </span>
                      <span className="px-4 py-2 rounded-full bg-[var(--bg-secondary)] text-[var(--text-muted)] text-sm font-medium border border-[var(--border)]">
                        {edu.location}
                      </span>
                    </div>
                  </div>

                  {edu.description && (
                    <p className="text-[var(--text-secondary)] mb-3">{edu.description}</p>
                  )}

                  {'branch' in edu && edu.branch && (
                    <p className="text-[var(--text-muted)]">{edu.branch}</p>
                  )}

                  {'gpa' in edu && edu.gpa && (
                    <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] font-semibold">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                      {edu.gpa}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

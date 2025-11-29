import { resumeData } from '../data/resume-data';

export const metadata = {
  title: 'Projects | Mahavir Dash',
  description: 'Projects by Mahavir Dash - Backend Engineer',
};

export default function ProjectsPage() {
  const { projects, publications } = resumeData;

  // Icons for different tech stacks
  const getProjectIcon = (technologies: string[]) => {
    if (technologies.some(t => t.toLowerCase().includes('rust'))) {
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.687 11.709l-.995-.616a13.559 13.559 0 00-.028-.29l.855-.797a.344.344 0 00-.114-.571l-1.093-.409a8.392 8.392 0 00-.086-.282l.682-.947a.344.344 0 00-.205-.54l-1.152-.201a9.368 9.368 0 00-.14-.261l.483-1.063a.344.344 0 00-.29-.487l-1.167.014a6.812 6.812 0 00-.187-.229l.262-1.14a.344.344 0 00-.368-.413l-1.14.223a7.927 7.927 0 00-.226-.187l.029-1.168a.344.344 0 00-.435-.327l-1.073.427a7.948 7.948 0 00-.26-.14l-.2-1.153a.344.344 0 00-.49-.253l-.97.618a8.06 8.06 0 00-.283-.086l-.41-1.093a.344.344 0 00-.532-.173l-.833.788a9.232 9.232 0 00-.29-.028l-.616-.995a.344.344 0 00-.583 0l-.616.995a9.556 9.556 0 00-.29.028l-.832-.788a.344.344 0 00-.533.173l-.409 1.093c-.095.027-.19.055-.283.086l-.97-.618a.344.344 0 00-.49.253l-.2 1.153c-.088.045-.175.092-.26.14l-1.073-.427a.344.344 0 00-.435.327l.03 1.168a7.95 7.95 0 00-.227.187l-1.14-.223a.344.344 0 00-.368.413l.262 1.14c-.063.075-.126.151-.187.229l-1.167-.014a.344.344 0 00-.29.487l.484 1.063c-.048.086-.095.173-.14.261l-1.153.201a.344.344 0 00-.205.54l.682.947a8.422 8.422 0 00-.086.282l-1.093.409a.344.344 0 00-.114.571l.855.797a9.586 9.586 0 00-.028.29l-.995.616a.344.344 0 000 .583l.995.616c.008.097.017.194.028.29l-.855.798a.344.344 0 00.114.571l1.093.409c.027.095.055.19.086.282l-.682.947a.344.344 0 00.205.54l1.153.2c.045.089.092.176.14.262l-.484 1.063a.344.344 0 00.29.487l1.167-.014c.061.078.124.154.187.229l-.262 1.14a.344.344 0 00.368.413l1.14-.223c.074.064.15.127.226.187l-.029 1.168a.344.344 0 00.435.327l1.073-.427c.085.049.172.095.26.14l.2 1.153a.344.344 0 00.49.253l.97-.617c.093.032.188.06.283.086l.409 1.093a.344.344 0 00.533.173l.832-.788c.096.012.194.021.29.028l.616.995a.344.344 0 00.583 0l.616-.995c.097-.007.194-.016.29-.028l.833.788a.344.344 0 00.532-.173l.41-1.093c.095-.027.189-.054.283-.086l.97.617a.344.344 0 00.49-.253l.2-1.153c.088-.045.175-.091.26-.14l1.073.427a.344.344 0 00.435-.327l-.03-1.168c.077-.06.153-.123.227-.187l1.14.223a.344.344 0 00.368-.413l-.262-1.14c.063-.075.126-.151.187-.229l1.167.014a.344.344 0 00.29-.487l-.483-1.063c.047-.086.094-.173.14-.262l1.152-.2a.344.344 0 00.205-.54l-.682-.947c.031-.093.06-.187.086-.282l1.093-.409a.344.344 0 00.114-.571l-.855-.798c.011-.096.02-.193.028-.29l.995-.616a.344.344 0 000-.583zM12 18.336a6.336 6.336 0 110-12.672 6.336 6.336 0 010 12.672z"/>
        </svg>
      );
    }
    if (technologies.some(t => t.toLowerCase().includes('blockchain') || t.toLowerCase().includes('substrate'))) {
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
        </svg>
      );
    }
    return (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
      </svg>
    );
  };

  return (
    <div className="container section">
      <h1 className="page-title">Projects</h1>
      <p className="page-subtitle text-lg">
        Building robust systems that scale
      </p>

      {/* Featured Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`group relative ${index === 0 ? 'lg:col-span-2' : ''}`}
          >
            {/* Card */}
            <div className="card h-full relative overflow-hidden hover:border-[var(--accent)] transition-all duration-300">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Decorative corner */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-[var(--accent)]/10 rounded-full blur-2xl group-hover:bg-[var(--accent)]/20 transition-colors duration-500" />

              <div className="relative">
                {/* Header */}
                <div className="flex items-start gap-5 mb-6">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--accent)] to-emerald-600 flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-emerald-500/20">
                    {getProjectIcon(project.technologies)}
                  </div>

                  {/* Title and Link */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-xl lg:text-2xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                        {project.name}
                      </h3>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-shrink-0 w-10 h-10 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--accent)]/10 transition-all"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className={`text-[var(--text-secondary)] leading-relaxed mb-6 ${index === 0 ? 'text-lg' : ''}`}>
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--bg-secondary)] text-[var(--text-muted)] text-sm font-medium border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Open Source Section */}
      <div className="relative">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[var(--accent)]/10 mb-6">
            <svg className="w-8 h-8 text-[var(--accent)]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-3">Open Source</h2>
          <p className="text-[var(--text-muted)] text-lg">Published packages and contributions</p>
        </div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {publications.map((pub) => (
            <a
              key={pub.id}
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="card h-full flex flex-col hover:border-[var(--accent)] transition-all duration-300 relative overflow-hidden">
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative flex-1 flex flex-col">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] flex items-center justify-center group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)]/10 transition-all">
                      <svg className="w-6 h-6 text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                    </div>
                    <svg className="w-5 h-5 text-[var(--text-subtle)] group-hover:text-[var(--accent)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10"/>
                    </svg>
                  </div>

                  {/* Content */}
                  <h4 className="text-xl font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors mb-3">
                    {pub.name}
                  </h4>
                  <p className="text-[var(--text-muted)] flex-1 mb-4">
                    {pub.description}
                  </p>

                  {/* Platform Badge */}
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-sm font-semibold">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
                      </svg>
                      {pub.platform}
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

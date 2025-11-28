import { resumeData } from '../data/resume-data';

export const metadata = {
  title: 'Projects | Mahavir Dash',
  description: 'Projects by Mahavir Dash - Backend Engineer',
};

export default function ProjectsPage() {
  const { projects, publications } = resumeData;

  return (
    <div className="container section">
      <h1 className="page-title">Projects</h1>
      <p className="page-subtitle">
        A collection of my work in backend development and distributed systems
      </p>

      {/* Projects */}
      <div className="grid-2 mb-16">
        {projects.map((project) => (
          <div key={project.id} className="card group">
            <div className="flex items-start justify-between gap-4 mb-4">
              <h3 className="text-xl font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                {project.name}
              </h3>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors flex-shrink-0"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </a>
              )}
            </div>
            <p className="text-[var(--text-muted)] mb-4 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Publications */}
      <div>
        <h2 className="section-title">Open Source</h2>
        <h3 className="text-2xl font-semibold text-center mb-8">
          Published Packages
        </h3>
        <div className="grid-2">
          {publications.map((pub) => (
            <a
              key={pub.id}
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card group block"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <h4 className="text-lg font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                  {pub.name}
                </h4>
                <svg className="w-5 h-5 text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </div>
              <p className="text-[var(--text-muted)] text-sm mb-3">
                {pub.description}
              </p>
              <span className="tag text-xs">
                {pub.platform}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

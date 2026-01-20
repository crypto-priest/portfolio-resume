import { resumeData } from '../data/resume-data';
import Link from 'next/link';

export const metadata = {
  title: 'Projects | Mahavir Dash',
  description: 'Projects by Mahavir Dash - Backend Engineer',
};

// Language colors for tech tags
const techColors: Record<string, string> = {
  'Rust': '#dea584',
  'Python': '#3572A5',
  'TypeScript': '#3178c6',
  'JavaScript': '#f1e05a',
  'Solana': '#9945FF',
  'Substrate': '#24CC85',
  'PostgreSQL': '#336791',
  'GraphQL': '#e535ab',
  'Node.js': '#339933',
};

export default function ProjectsPage() {
  const { projects, publications } = resumeData;

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Projects</h1>
        <p className="page-subtitle">
          Building robust systems that scale. Each project represents a solution to real-world engineering challenges.
        </p>
      </div>

      {/* Featured Projects */}
      <section className="content-section">
        <h2 className="section-title">
          <svg viewBox="0 0 16 16" fill="currentColor" width="16" height="16">
            <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 0 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25v3.25a.25.25 0 0 0 .4.2l1.45-1.087a.25.25 0 0 1 .3 0L8.6 15.7a.25.25 0 0 0 .4-.2v-3.25a.25.25 0 0 0-.25-.25h-3.5a.25.25 0 0 0-.25.25Z"/>
          </svg>
          Featured Projects
        </h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-card-header">
                <svg viewBox="0 0 16 16" fill="currentColor" className="project-icon">
                  <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 0 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25v3.25a.25.25 0 0 0 .4.2l1.45-1.087a.25.25 0 0 1 .3 0L8.6 15.7a.25.25 0 0 0 .4-.2v-3.25a.25.25 0 0 0-.25-.25h-3.5a.25.25 0 0 0-.25.25Z"/>
                </svg>
                <h3 className="project-name">{project.name}</h3>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-footer">
                <div className="project-tech">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="tech-tag">
                      <span
                        className="tech-dot"
                        style={{ backgroundColor: techColors[tech] || '#8b949e' }}
                      />
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <svg viewBox="0 0 16 16" fill="currentColor" width="16" height="16">
                      <path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z"/>
                    </svg>
                    View
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Published Packages */}
      <section className="content-section">
        <h2 className="section-title">
          <svg viewBox="0 0 16 16" fill="currentColor" width="16" height="16">
            <path fillRule="evenodd" d="M8.878.392a1.75 1.75 0 0 0-1.756 0l-5.25 3.045A1.75 1.75 0 0 0 1 4.951v6.098c0 .624.332 1.2.872 1.514l5.25 3.045a1.75 1.75 0 0 0 1.756 0l5.25-3.045c.54-.313.872-.89.872-1.514V4.951c0-.624-.332-1.2-.872-1.514L8.878.392ZM7.875 1.69a.25.25 0 0 1 .25 0l4.63 2.685L8 7.133 3.245 4.375l4.63-2.685ZM2.5 5.677v5.372c0 .09.047.171.125.216l4.625 2.683V8.432L2.5 5.677Zm6.25 8.271 4.625-2.683a.25.25 0 0 0 .125-.216V5.677L8.75 8.432v5.516Z"/>
          </svg>
          Published Packages
        </h2>
        <p className="section-description">Open source contributions available on crates.io and GitHub.</p>
        <div className="packages-grid">
          {publications.map((pub) => (
            <a
              key={pub.id}
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className="package-card"
            >
              <div className="package-header">
                <svg viewBox="0 0 16 16" fill="currentColor" className="package-icon">
                  <path fillRule="evenodd" d="M8.878.392a1.75 1.75 0 0 0-1.756 0l-5.25 3.045A1.75 1.75 0 0 0 1 4.951v6.098c0 .624.332 1.2.872 1.514l5.25 3.045a1.75 1.75 0 0 0 1.756 0l5.25-3.045c.54-.313.872-.89.872-1.514V4.951c0-.624-.332-1.2-.872-1.514L8.878.392ZM7.875 1.69a.25.25 0 0 1 .25 0l4.63 2.685L8 7.133 3.245 4.375l4.63-2.685ZM2.5 5.677v5.372c0 .09.047.171.125.216l4.625 2.683V8.432L2.5 5.677Zm6.25 8.271 4.625-2.683a.25.25 0 0 0 .125-.216V5.677L8.75 8.432v5.516Z"/>
                </svg>
                <span className="package-name">{pub.name}</span>
                <span className="package-platform">{pub.platform}</span>
              </div>
              <p className="package-description">{pub.description}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="content-section">
        <h2 className="section-title">
          <svg viewBox="0 0 16 16" fill="currentColor" width="16" height="16">
            <path d="M11.28 3.22a.75.75 0 0 1 0 1.06L6.56 9l4.72 4.72a.75.75 0 1 1-1.06 1.06l-5.25-5.25a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z"/>
            <path d="m4.72 3.22 5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 0 1-1.06-1.06L8.44 9 3.66 4.28a.75.75 0 0 1 1.06-1.06Z"/>
          </svg>
          Technologies Used
        </h2>
        <div className="tech-stack">
          {['Rust', 'Python', 'TypeScript', 'Substrate', 'Solana', 'PostgreSQL', 'DynamoDB', 'GraphQL', 'REST', 'WebSocket'].map((tech) => (
            <span key={tech} className="tech-badge">
              <span
                className="tech-dot"
                style={{ backgroundColor: techColors[tech] || '#8b949e' }}
              />
              {tech}
            </span>
          ))}
        </div>
      </section>

      <div className="page-nav">
        <a
          href="https://github.com/crypto-priest"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-default"
        >
          <svg viewBox="0 0 16 16" fill="currentColor" width="16" height="16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8Z"/>
          </svg>
          View GitHub Profile
        </a>
        <Link href="/skills" className="btn btn-primary">
          View Skills
          <svg viewBox="0 0 16 16" fill="currentColor" width="16" height="16">
            <path d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l2.97-2.97H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.03a.75.75 0 0 1 0-1.06Z"/>
          </svg>
        </Link>
      </div>
    </div>
  );
}

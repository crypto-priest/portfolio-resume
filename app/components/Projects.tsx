import { resumeData } from "../data/resume-data";

export default function Projects() {
  return (
    <div className="font-mono">
      <div className="text-3xl font-bold mb-4">
        <span className="text-[var(--accent)]">mod</span> <span className="text-[var(--text)]">projects</span> <span className="text-[var(--text-muted)]">{"{"}</span>
      </div>

      <div className="space-y-8">
        {resumeData.projects.map((project) => (
          <div key={project.id} className="hover:scale-[1.02] transition-transform">
            <div className="mb-2 text-lg" style={{ paddingLeft: '2rem' }}>
              <span className="text-[var(--accent)]">pub fn</span>{" "}
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text)] hover:text-[var(--accent)] font-semibold transition-colors"
                >
                  {project.name.toLowerCase().replace(/\s+/g, '_').replace(/-/g, '_').replace(/\(/g, '').replace(/\)/g, '')}
                </a>
              ) : (
                <span className="text-[var(--text)] font-semibold">
                  {project.name.toLowerCase().replace(/\s+/g, '_').replace(/-/g, '_').replace(/\(/g, '').replace(/\)/g, '')}
                </span>
              )}
              <span className="text-[var(--text-muted)]">()</span> <span className="text-[var(--accent)]">-&gt;</span> <span className="text-[var(--text-muted)]">Project</span> <span className="text-[var(--text-muted)]">{"{"}</span>
            </div>
            <div className="space-y-2 mb-2" style={{ paddingLeft: '4rem' }}>
              <p className="text-[var(--text)] leading-relaxed text-base">
                <span className="text-[var(--accent)]">//</span> {project.description}
              </p>
              <div className="text-[var(--text-muted)] text-base">
                <span className="text-[var(--accent)]">//</span> <span className="text-[var(--text-muted)]">Tech:</span> {project.technologies.join(", ")}
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

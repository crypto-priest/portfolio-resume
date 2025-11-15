import { resumeData } from "../data/resume-data";

export default function Projects() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-10 section-header">
        <span className="text-[var(--accent)]">mod</span> projects
      </h2>

      <div className="space-y-6">
        {resumeData.projects.map((project) => (
          <div key={project.id} className="hover:scale-[1.02] transition-transform">
            <div className="mb-2 font-mono text-base">
              <span className="text-[var(--accent)]">pub fn</span>{" "}
              {project.link !== "https://github.com/mahavirdash" ? (
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
              <span className="text-[var(--text-muted)]">()</span>
            </div>
            <p className="text-[var(--text)] mb-2 leading-relaxed ml-4 text-base">{project.description}</p>
            <div className="text-[var(--text-muted)] ml-4">
              <span className="text-[var(--accent)]">//</span> {project.technologies.join(", ")}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

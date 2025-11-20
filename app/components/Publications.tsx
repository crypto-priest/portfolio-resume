import { resumeData } from "../data/resume-data";

export default function Publications() {
  return (
    <div className="font-mono">
      <div className="text-3xl font-bold mb-4">
        <span className="text-[var(--accent)]">pub mod</span> <span className="text-[var(--text)]">crates</span> <span className="text-[var(--text-muted)]">{"{"}</span>
      </div>

      <div className="space-y-6">
        {resumeData.publications.map((pub) => (
          <div key={pub.id} className="hover:scale-[1.01] transition-transform">
            <div className="mb-2 text-lg" style={{ paddingLeft: '2rem' }}>
              <span className="text-[var(--accent)]">use</span>{" "}
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text)] hover:text-[var(--accent)] font-semibold transition-colors"
              >
                {pub.name}
              </a>
              <span className="text-[var(--text-muted)]">;</span>
              <span className="text-base text-[var(--text-muted)] ml-3">
                <span className="text-[var(--accent)]">//</span> {pub.platform}
              </span>
            </div>
            <div className="text-[var(--text)] leading-relaxed text-base" style={{ paddingLeft: '2rem' }}>
              <span className="text-[var(--accent)]">//</span> {pub.description}
            </div>
          </div>
        ))}
      </div>

      <div className="text-3xl font-bold text-[var(--text-muted)] mt-6">{"}"}</div>
    </div>
  );
}

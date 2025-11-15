import { resumeData } from "../data/resume-data";

export default function Publications() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-10 section-header">
        <span className="text-[var(--accent)]">pub mod</span> crates
      </h2>

      <div className="space-y-5">
        {resumeData.publications.map((pub) => (
          <div key={pub.id} className="hover:scale-[1.01] transition-transform">
            <div className="mb-2 font-mono text-base">
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
              <span className="text-sm text-[var(--text-muted)] ml-3">{pub.platform}</span>
            </div>
            <p className="text-[var(--text)] leading-relaxed ml-4 text-base">
              <span className="text-[var(--accent)]">//</span> {pub.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

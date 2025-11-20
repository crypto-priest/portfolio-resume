import { resumeData } from "../data/resume-data";

export default function Header() {
  const { personal } = resumeData;

  return (
    <header className="font-mono">
      <div className="mb-8">
        <div className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          <span className="text-[var(--accent)]">fn</span> <span className="text-[var(--text)]">main</span><span className="text-[var(--text-muted)]">()</span> <span className="text-[var(--text-muted)]">{"{"}</span>
        </div>
        <div className="mb-4" style={{ paddingLeft: '2rem' }}>
          <p className="text-xl md:text-2xl text-[var(--text)] leading-relaxed max-w-3xl font-bold mb-3">
            <span className="text-[var(--accent)]">println!</span><span className="text-[var(--text-muted)]">(</span><span className="text-[var(--success)]">&quot;{personal.title}&quot;</span><span className="text-[var(--text-muted)]">);</span>
          </p>
          <p className="text-lg md:text-xl text-[var(--text-muted)] leading-relaxed max-w-3xl">
            <span className="text-[var(--accent)]">//</span> Based in {personal.location}. Building scalable distributed systems and exploring cutting-edge backend technologies.
          </p>
        </div>
      </div>

      <div className="mb-6" style={{ paddingLeft: '2rem' }}>
        <div className="text-lg text-[var(--text-muted)] mb-3">
          <span className="text-[var(--accent)]">//</span> Connect with me:
        </div>
        <div className="flex gap-3 flex-wrap" id="contact">
          <a
            href={`mailto:${personal.email}`}
            className="px-4 py-2.5 bg-[var(--code-bg)] border border-[var(--border)] rounded text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all font-mono text-base hover:scale-105"
          >
            📧 email
          </a>
          <a
            href={`https://${personal.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 bg-[var(--code-bg)] border border-[var(--border)] rounded text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all font-mono text-base hover:scale-105"
          >
            💻 github
          </a>
          <a
            href={`https://${personal.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 bg-[var(--code-bg)] border border-[var(--border)] rounded text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all font-mono text-base hover:scale-105"
          >
            💼 linkedin
          </a>
          <a
            href={`https://${personal.twitter}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 bg-[var(--code-bg)] border border-[var(--border)] rounded text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all font-mono text-base hover:scale-105"
          >
            🐦 twitter
          </a>
        </div>
      </div>

      <div className="text-3xl font-bold text-[var(--text-muted)] font-mono">{"}"}</div>
    </header>
  );
}

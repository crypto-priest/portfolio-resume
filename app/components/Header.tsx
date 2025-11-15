import { resumeData } from "../data/resume-data";

export default function Header() {
  const { personal } = resumeData;

  return (
    <header>
      <p className="text-[var(--text-muted)] mb-8">
        I'm a {personal.title.toLowerCase()} based in {personal.location}. Currently working on building scalable web applications and exploring new technologies.
      </p>
      <div className="flex gap-3 flex-wrap" id="contact">
        <a
          href={`mailto:${personal.email}`}
          className="px-3 py-2 bg-[var(--code-bg)] border border-[var(--border)] rounded text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all font-mono text-sm hover:scale-105"
        >
          📧 email
        </a>
        <a
          href={`https://${personal.github}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-2 bg-[var(--code-bg)] border border-[var(--border)] rounded text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all font-mono text-sm hover:scale-105"
        >
          💻 github
        </a>
        <a
          href={`https://${personal.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-2 bg-[var(--code-bg)] border border-[var(--border)] rounded text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all font-mono text-sm hover:scale-105"
        >
          💼 linkedin
        </a>
        <a
          href={`https://${personal.twitter}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-2 bg-[var(--code-bg)] border border-[var(--border)] rounded text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all font-mono text-sm hover:scale-105"
        >
          🐦 twitter
        </a>
      </div>
    </header>
  );
}

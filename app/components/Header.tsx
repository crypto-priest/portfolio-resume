import { resumeData } from "../data/resume-data";

export default function Header() {
  const { personal } = resumeData;

  return (
    <header>
      <div className="mb-10">
        <p className="text-2xl md:text-3xl text-[var(--accent)] font-bold mb-6 leading-tight">
          {personal.title}
        </p>
        <p className="text-lg md:text-xl text-[var(--text-muted)] leading-relaxed max-w-3xl">
          Based in {personal.location}. Building scalable distributed systems and exploring cutting-edge backend technologies.
        </p>
      </div>
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

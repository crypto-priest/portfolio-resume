import Link from 'next/link';
import { resumeData } from './data/resume-data';

export default function Home() {
  const { personal } = resumeData;

  return (
    <div className="min-h-[80vh] flex items-center justify-center relative">
      {/* Grid Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Line Grid */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        {/* Corner glow effects */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[rgba(16,185,129,0.15)] rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[rgba(16,185,129,0.1)] rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3" />
      </div>

      <div className="container text-center relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-[var(--text-primary)] leading-snug">
          I&apos;m a <span className="font-bold">backend engineer</span><br />
          specializing in <span className="text-[var(--accent)]">Rust</span> and<br />
          <span className="font-bold">Distributed Systems</span>
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <Link href="/hire" className="btn btn-primary min-w-[180px]">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            Hire Me
          </Link>
          <Link href="/projects" className="btn btn-outline min-w-[180px]">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
            </svg>
            View Projects
          </Link>
        </div>

        </div>

      {/* Social icons fixed at bottom */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-5 z-10">
        <a
          href={`https://${personal.github}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full border-2 border-[var(--border)] flex items-center justify-center text-[var(--text-primary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
        </a>
        <a
          href={`https://${personal.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full border-2 border-[var(--border)] flex items-center justify-center text-[var(--text-primary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        <a
          href={`https://${personal.twitter}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full border-2 border-[var(--border)] flex items-center justify-center text-[var(--text-primary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>
      </div>
    </div>
  );
}

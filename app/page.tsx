import Header from "./components/Header";
import Summary from "./components/Summary";
import Achievements from "./components/Achievements";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Publications from "./components/Publications";
import ThemeToggle from "./components/ThemeToggle";
import { resumeData } from "./data/resume-data";

export default function Home() {
  const { personal } = resumeData;

  return (
    <div className="w-full min-h-screen">
      {/* Navigation */}
      <nav className="w-full backdrop-blur-sm bg-[var(--bg)]/80 sticky top-0 z-50 border-b border-[var(--border)]">
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '16px 32px' }}>
          <div className="flex justify-between items-center gap-4 flex-wrap">
            <h1 className="text-xl font-bold">
              <a href="/" className="text-[var(--accent)] hover:text-[var(--accent-hover)]">
                <span className="text-[var(--text-muted)] mr-2">$</span>mahavirdash
              </a>
            </h1>

            <div className="flex gap-4 items-center flex-wrap">
              <a href="#about" className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors text-sm">./about</a>
              <a href="#projects" className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors text-sm">./projects</a>
              <a href="#experience" className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors text-sm">./experience</a>

              <div className="flex gap-3 items-center ml-2">
                <a href={`https://${personal.github}`} target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors" aria-label="GitHub">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>
                <a href={`https://${personal.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors" aria-label="LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href={`mailto:${personal.email}`} className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors" aria-label="Email">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </a>

                <span className="text-[var(--border)]">|</span>

                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '80px 48px' }}>
        <div className="space-y-24">

          <Header />

          <section id="about">
            <Summary />
          </section>

          <section id="achievements">
            <Achievements />
          </section>

          <section id="projects">
            <Projects />
          </section>

          <section id="experience">
            <Experience />
          </section>

          <section id="skills">
            <Skills />
          </section>

          <section id="education">
            <Education />
          </section>

          <section id="publications">
            <Publications />
          </section>

        </div>
      </main>
    </div>
  );
}

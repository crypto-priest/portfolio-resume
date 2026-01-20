import { resumeData } from '../data/resume-data';
import Link from 'next/link';

export const metadata = {
  title: 'About | Mahavir Dash',
  description: 'Learn more about Mahavir Dash - Backend Engineer specializing in Rust and Distributed Systems',
};

export default function AboutPage() {
  const { summary, achievements, education } = resumeData;

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>About Me</h1>
        <p className="page-subtitle">Backend Engineer with 3+ years of experience</p>
      </div>

      <section className="content-section">
        <h2 className="section-title">
          <svg viewBox="0 0 16 16" fill="currentColor" width="16" height="16">
            <path d="M10.561 8.073a6.005 6.005 0 0 1 3.432 5.142.75.75 0 1 1-1.498.07 4.5 4.5 0 0 0-8.99 0 .75.75 0 0 1-1.498-.07 6.004 6.004 0 0 1 3.431-5.142 3.999 3.999 0 1 1 5.123 0ZM10.5 5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"/>
          </svg>
          Summary
        </h2>
        <p className="summary-text">{summary}</p>
      </section>

      <section className="content-section">
        <h2 className="section-title">
          <svg viewBox="0 0 16 16" fill="currentColor" width="16" height="16">
            <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"/>
          </svg>
          Key Achievements
        </h2>
        <div className="achievements-grid">
          <div className="achievement-card">
            <div className="achievement-icon">
              <svg viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"/>
              </svg>
            </div>
            <h3>Web3 Foundation Grant</h3>
            <p>Received a grant for developing a self-sovereign identity-based blockchain-powered gamers' community.</p>
          </div>
          <div className="achievement-card">
            <div className="achievement-icon">
              <svg viewBox="0 0 16 16" fill="currentColor">
                <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 0 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25v3.25a.25.25 0 0 0 .4.2l1.45-1.087a.25.25 0 0 1 .3 0L8.6 15.7a.25.25 0 0 0 .4-.2v-3.25a.25.25 0 0 0-.25-.25h-3.5a.25.25 0 0 0-.25.25Z"/>
              </svg>
            </div>
            <h3>Government Partnership</h3>
            <p>Partnered with STPI (Software Technology Park of India) to conduct technical workshops on Rust and blockchain.</p>
          </div>
          <div className="achievement-card">
            <div className="achievement-icon">
              <svg viewBox="0 0 16 16" fill="currentColor">
                <path d="M1 2.5A2.5 2.5 0 0 1 3.5 0h8.75a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0V1.5h-8a1 1 0 0 0-1 1v6.708A2.493 2.493 0 0 1 3.5 9h3.25a.75.75 0 0 1 0 1.5H3.5a1 1 0 1 0 0 2h5.75a.75.75 0 0 1 0 1.5H3.5A2.5 2.5 0 0 1 1 11.5Zm13.23 2.338a.75.75 0 0 0-1.06 0l-2.72 2.72a.75.75 0 0 0 0 1.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L12.462 8.5H15.5a.75.75 0 0 0 0-1.5h-3.038l1.768-1.768a.75.75 0 0 0 0-.894Z"/>
              </svg>
            </div>
            <h3>Technical Instructor</h3>
            <p>Designed and taught a 110-hour Rust engineering course for Silicon University, integrated into the academic curriculum.</p>
          </div>
          <div className="achievement-card">
            <div className="achievement-icon">
              <svg viewBox="0 0 16 16" fill="currentColor">
                <path d="M11.93 8.5a4.002 4.002 0 0 1-7.86 0H.75a.75.75 0 0 1 0-1.5h3.32a4.002 4.002 0 0 1 7.86 0h3.32a.75.75 0 0 1 0 1.5Zm-1.43-.75a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"/>
              </svg>
            </div>
            <h3>System Architecture</h3>
            <p>Designed distributed rate limiting system protecting 10,000+ users with 99.9% uptime against DDoS attacks.</p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-title">
          <svg viewBox="0 0 16 16" fill="currentColor" width="16" height="16">
            <path d="M7.775 3.275a.75.75 0 0 0 1.06 1.06l1.25-1.25a2 2 0 1 1 2.83 2.83l-2.5 2.5a2 2 0 0 1-2.83 0 .75.75 0 0 0-1.06 1.06 3.5 3.5 0 0 0 4.95 0l2.5-2.5a3.5 3.5 0 0 0-4.95-4.95l-1.25 1.25Zm-.025 5.45a.75.75 0 0 0-1.06-1.06l-1.25 1.25a2 2 0 0 1-2.83-2.83l2.5-2.5a2 2 0 0 1 2.83 0 .75.75 0 0 0 1.06-1.06 3.5 3.5 0 0 0-4.95 0l-2.5 2.5a3.5 3.5 0 0 0 4.95 4.95l1.25-1.25Z"/>
          </svg>
          Education
        </h2>
        <div className="education-list">
          {education.map((edu) => (
            <div key={edu.id} className="education-card">
              <div className="education-header">
                <h3>{edu.degree}</h3>
                <span className="education-period">{edu.period}</span>
              </div>
              <p className="education-school">{edu.school}</p>
              {edu.description && <p className="education-desc">{edu.description}</p>}
              {'branch' in edu && edu.branch && (
                <p className="education-branch">{edu.branch}</p>
              )}
              {'gpa' in edu && edu.gpa && (
                <span className="education-gpa">{edu.gpa}</span>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-title">
          <svg viewBox="0 0 16 16" fill="currentColor" width="16" height="16">
            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/>
            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"/>
          </svg>
          What I'm Looking For
        </h2>
        <div className="interests-grid">
          <div className="interest-item">
            <strong>Backend Engineering</strong>
            <p>Building scalable APIs and distributed systems</p>
          </div>
          <div className="interest-item">
            <strong>Rust Development</strong>
            <p>High-performance systems programming</p>
          </div>
          <div className="interest-item">
            <strong>Blockchain / Web3</strong>
            <p>Protocol development and smart contracts</p>
          </div>
          <div className="interest-item">
            <strong>Technical Leadership</strong>
            <p>Mentoring teams and driving architecture decisions</p>
          </div>
        </div>
      </section>

      <div className="page-nav">
        <Link href="/experience" className="btn btn-primary">
          View Experience
          <svg viewBox="0 0 16 16" fill="currentColor" width="16" height="16">
            <path d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l2.97-2.97H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.03a.75.75 0 0 1 0-1.06Z"/>
          </svg>
        </Link>
      </div>
    </div>
  );
}

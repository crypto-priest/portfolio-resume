import { resumeData } from '../data/resume-data';
import Link from 'next/link';

export const metadata = {
  title: 'Experience | Mahavir Dash',
  description: 'Professional experience of Mahavir Dash - Backend Engineer',
};

export default function ExperiencePage() {
  const { experience } = resumeData;

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Experience</h1>
        <p className="page-subtitle">My professional journey building scalable backend systems</p>
      </div>

      {/* Stats */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-value">3+</div>
          <div className="stat-label">Years Experience</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">10K+</div>
          <div className="stat-label">Users Served</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">99.9%</div>
          <div className="stat-label">Uptime</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">110+</div>
          <div className="stat-label">Hours Taught</div>
        </div>
      </div>

      {/* Timeline */}
      <section className="content-section">
        <h2 className="section-title">
          <svg viewBox="0 0 16 16" fill="currentColor" width="16" height="16">
            <path d="M1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0ZM8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0Zm.5 4.75a.75.75 0 0 0-1.5 0v3.5a.75.75 0 0 0 .471.696l2.5 1a.75.75 0 0 0 .557-1.392L8.5 7.742V4.75Z"/>
          </svg>
          Work History
        </h2>
        <div className="timeline">
          {experience.map((exp, index) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-marker">
                {index === 0 && <span className="current-badge">Current</span>}
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-title">{exp.title}</h3>
                    <p className="timeline-company">{exp.company}</p>
                  </div>
                  <div className="timeline-meta">
                    <span className="timeline-period">{exp.period}</span>
                    <span className="timeline-location">{exp.location}</span>
                  </div>
                </div>
                <ul className="timeline-list">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="page-nav">
        <Link href="/projects" className="btn btn-primary">
          View Projects
          <svg viewBox="0 0 16 16" fill="currentColor" width="16" height="16">
            <path d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l2.97-2.97H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.03a.75.75 0 0 1 0-1.06Z"/>
          </svg>
        </Link>
      </div>
    </div>
  );
}

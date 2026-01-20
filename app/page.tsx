import { resumeData } from './data/resume-data';
import ProfileSidebar from './components/ProfileSidebar';
import Link from 'next/link';

export default function Home() {
  const { projects, experience } = resumeData;

  return (
    <div className="github-profile-layout">
      <ProfileSidebar />

      <div className="profile-content">
        <div className="hire-cta-card">
          <div className="hire-cta-content">
            <div className="hire-cta-badge">
              <span className="status-dot"></span>
              Available for hire
            </div>
            <h2 className="hire-cta-title">Let's Build Something Great Together</h2>
            <p className="hire-cta-description">
              Backend Engineer specializing in Rust, distributed systems, and blockchain.
              Web3 Foundation grant recipient with 3+ years of experience building scalable solutions.
            </p>
            <div className="hire-cta-actions">
              <Link href="/hire" className="btn btn-primary btn-lg">
                <svg viewBox="0 0 16 16" fill="currentColor" width="16" height="16">
                  <path d="M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.784.784 2 1.75 2ZM1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V5.809L8.38 9.397a.75.75 0 0 1-.76 0L1.5 5.809v6.442Zm13-8.181v-.32a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25v.32L8 7.88l6.5-3.81Z"/>
                </svg>
                Get in Touch
              </Link>
              <a href="/resume.pdf" download className="btn btn-default btn-lg">
                <svg viewBox="0 0 16 16" fill="currentColor" width="16" height="16">
                  <path d="M2.75 14A1.75 1.75 0 0 1 1 12.25v-2.5a.75.75 0 0 1 1.5 0v2.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25v-2.5a.75.75 0 0 1 1.5 0v2.5A1.75 1.75 0 0 1 13.25 14Z"/>
                  <path d="M7.25 7.689V2a.75.75 0 0 1 1.5 0v5.689l1.97-1.969a.749.749 0 1 1 1.06 1.06l-3.25 3.25a.749.749 0 0 1-1.06 0L4.22 6.78a.749.749 0 1 1 1.06-1.06l1.97 1.969Z"/>
                </svg>
                Download Resume
              </a>
            </div>
          </div>
          <div className="hire-cta-visual">
            <div className="code-snippet">
              <div className="code-header">
                <span className="code-dot"></span>
                <span className="code-dot"></span>
                <span className="code-dot"></span>
                <span className="code-filename">hire_me.rs</span>
              </div>
              <pre className="code-content"><code><span className="code-keyword">impl</span> <span className="code-type">Engineer</span> <span className="code-keyword">for</span> <span className="code-type">Mahavir</span> {'{'}{'\n'}    <span className="code-keyword">fn</span> <span className="code-function">skills</span>() -&gt; <span className="code-type">Vec</span>&lt;&amp;<span className="code-type">str</span>&gt; {'{'}{'\n'}        <span className="code-keyword">vec!</span>[<span className="code-string">"Rust"</span>, <span className="code-string">"Systems"</span>, <span className="code-string">"Web3"</span>]{'\n'}    {'}'}{'\n'}{'}'}</code></pre>
            </div>
          </div>
        </div>

        <div className="section-title" style={{ marginTop: 24 }}>
          <svg viewBox="0 0 16 16" fill="currentColor" width="16" height="16">
            <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 0 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Z"/>
          </svg>
          Featured Projects
        </div>

        <div className="pinned-repos">
          {projects.slice(0, 4).map((project) => (
            <div key={project.id} className="repo-card">
              <div className="repo-card-header">
                <svg className="repo-card-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"/>
                </svg>
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="repo-card-name">
                    {project.name}
                  </a>
                ) : (
                  <span className="repo-card-name">{project.name}</span>
                )}
                <span className="repo-card-visibility">Public</span>
              </div>
              <p className="repo-card-description">{project.description}</p>
              <div className="repo-card-footer">
                <span className="repo-card-lang">
                  <span className="repo-card-lang-color" style={{ backgroundColor: '#dea584' }} />
                  {project.technologies[0]}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="section-title" style={{ marginTop: 24 }}>
          <svg viewBox="0 0 16 16" fill="currentColor" width="16" height="16">
            <path d="M1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0ZM8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0Zm.5 4.75a.75.75 0 0 0-1.5 0v3.5a.75.75 0 0 0 .471.696l2.5 1a.75.75 0 0 0 .557-1.392L8.5 7.742V4.75Z"/>
          </svg>
          Work Experience
        </div>

        <div className="activity-feed">
          {experience.slice(0, 3).map((exp) => (
            <div key={exp.id} className="activity-item">
              <div className="activity-icon">
                <svg viewBox="0 0 16 16" fill="currentColor">
                  <path d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.5 4.75a.75.75 0 00-1.5 0v3.5a.75.75 0 00.471.696l2.5 1a.75.75 0 00.557-1.392L8.5 7.742V4.75z"/>
                </svg>
              </div>
              <div className="activity-content">
                <div className="activity-title">
                  <strong>{exp.title}</strong> at {exp.company}
                </div>
                <div className="activity-description">
                  {exp.description[0]}
                </div>
                <div className="activity-time">{exp.period}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

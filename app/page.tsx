import { resumeData } from './data/resume-data';
import ProfileSidebar from './components/ProfileSidebar';
import MobileProfile from './components/MobileProfile';
import Link from 'next/link';

export default function Home() {
  const { experience } = resumeData;

  return (
    <div className="github-profile-layout">
      <ProfileSidebar />

      <div className="profile-content">
        <MobileProfile />
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
            <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"/>
          </svg>
          Achievements
        </div>

        <div className="pinned-repos">
          <div className="repo-card">
            <div className="repo-card-header">
              <svg className="repo-card-icon" viewBox="0 0 16 16" fill="currentColor" style={{ color: 'var(--color-success-fg)' }}>
                <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"/>
              </svg>
              <span className="repo-card-name">Web3 Foundation Grant</span>
            </div>
            <p className="repo-card-description">Received a grant for developing a self-sovereign identity-based blockchain-powered gaming community, recognizing innovation in decentralized identity.</p>
          </div>

          <div className="repo-card">
            <div className="repo-card-header">
              <svg className="repo-card-icon" viewBox="0 0 16 16" fill="currentColor" style={{ color: 'var(--color-accent-fg)' }}>
                <path d="M1.5 14.25c0 .138.112.25.25.25H4v-1.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v1.25h2.25a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25ZM1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 0 0 .25-.25V8.285a.25.25 0 0 0-.111-.208l-1.055-.703a.749.749 0 1 1 .832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0 1 14.25 16h-3.5a.766.766 0 0 1-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 0 1-.75-.75V14h-1v1.25a.75.75 0 0 1-.75.75h-3A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0ZM3.5 4h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1 0-1.5ZM3.5 7h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1 0-1.5ZM3.5 10h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1 0-1.5Z"/>
              </svg>
              <span className="repo-card-name">STPI Partnership</span>
            </div>
            <p className="repo-card-description">Partnered with Software Technology Park of India, a central government entity, to conduct technical workshops on Rust, blockchain, and backend development.</p>
          </div>

          <div className="repo-card">
            <div className="repo-card-header">
              <svg className="repo-card-icon" viewBox="0 0 16 16" fill="currentColor" style={{ color: 'var(--color-done-fg)' }}>
                <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 0 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25v3.25a.25.25 0 0 0 .4.2l1.45-1.087a.25.25 0 0 1 .3 0L8.6 15.7a.25.25 0 0 0 .4-.2v-3.25a.25.25 0 0 0-.25-.25h-3.5a.25.25 0 0 0-.25.25Z"/>
              </svg>
              <span className="repo-card-name">Rust Course at Silicon University</span>
            </div>
            <p className="repo-card-description">Designed and taught a month-long Rust engineering course (110 hours) covering backend development and blockchain fundamentals, integrated into academic curriculum.</p>
          </div>

          <div className="repo-card">
            <div className="repo-card-header">
              <svg className="repo-card-icon" viewBox="0 0 16 16" fill="currentColor" style={{ color: 'var(--color-attention-fg)' }}>
                <path d="m8.878.392 5.25 3.045c.54.314.872.89.872 1.514v6.098a1.75 1.75 0 0 1-.872 1.514l-5.25 3.045a1.75 1.75 0 0 1-1.756 0l-5.25-3.045A1.75 1.75 0 0 1 1 11.049V4.951c0-.624.332-1.201.872-1.514L7.122.392a1.75 1.75 0 0 1 1.756 0ZM7.875 1.69l-4.63 2.685L8 7.133l4.755-2.758-4.63-2.685a.248.248 0 0 0-.25 0ZM2.5 5.677v5.372c0 .09.047.171.125.216l4.625 2.683V8.432Zm6.25 8.271 4.625-2.683a.25.25 0 0 0 .125-.216V5.677L8.75 8.432Z"/>
              </svg>
              <span className="repo-card-name">Custom Consensus Mechanism</span>
            </div>
            <p className="repo-card-description">Designed a custom consensus mechanism for private blockchain, optimizing storage efficiency through elimination of empty blocks, reducing infrastructure costs.</p>
          </div>
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

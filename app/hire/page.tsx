'use client';

import { useState } from 'react';
import { resumeData } from '../data/resume-data';

export default function HirePage() {
  const { personal } = resumeData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    type: 'full-time',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `[${formData.type}] Opportunity from ${formData.name}${formData.company ? ` at ${formData.company}` : ''}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || 'N/A'}\nType: ${formData.type}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Contact Me</h1>
        <p className="page-subtitle">
          Interested in working together? I'm currently available for new opportunities.
        </p>
      </div>

      {/* Quick Actions */}
      <div className="contact-cards">
        <a
          href="/resume.pdf"
          download="Mahavir_Dash_Resume.pdf"
          className="contact-card"
        >
          <div className="contact-card-icon">
            <svg viewBox="0 0 16 16" fill="currentColor" width="24" height="24">
              <path d="M3.5 1.75v11.5c0 .09.04.17.1.23l.06.06H14a.75.75 0 0 1 0 1.5H3.5a1.75 1.75 0 0 1-1.75-1.75V1.75a.75.75 0 0 1 1.5 0Zm5.75 5v4.25a.75.75 0 0 1-1.5 0V6.75a.75.75 0 0 1 1.5 0Zm3 1.5v2.75a.75.75 0 0 1-1.5 0V8.25a.75.75 0 0 1 1.5 0Zm-6 2v.75a.75.75 0 0 1-1.5 0v-.75a.75.75 0 0 1 1.5 0Z"/>
            </svg>
          </div>
          <div className="contact-card-content">
            <h3>Download Resume</h3>
            <p>Get my full resume in PDF format</p>
          </div>
          <svg viewBox="0 0 16 16" fill="currentColor" width="16" height="16" className="contact-card-arrow">
            <path d="M7.47 10.78a.75.75 0 0 0 1.06 0l3.75-3.75a.75.75 0 0 0-1.06-1.06L8.75 8.44V1.75a.75.75 0 0 0-1.5 0v6.69L4.78 5.97a.75.75 0 0 0-1.06 1.06l3.75 3.75ZM3.75 13a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z"/>
          </svg>
        </a>

        <a
          href={`mailto:${personal.email}`}
          className="contact-card"
        >
          <div className="contact-card-icon">
            <svg viewBox="0 0 16 16" fill="currentColor" width="24" height="24">
              <path d="M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.784.784 2 1.75 2ZM1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V5.809L8.38 9.397a.75.75 0 0 1-.76 0L1.5 5.809v6.442Zm13-8.181v-.32a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25v.32L8 7.88l6.5-3.81Z"/>
            </svg>
          </div>
          <div className="contact-card-content">
            <h3>Email Directly</h3>
            <p>{personal.email}</p>
          </div>
          <svg viewBox="0 0 16 16" fill="currentColor" width="16" height="16" className="contact-card-arrow">
            <path d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l2.97-2.97H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.03a.75.75 0 0 1 0-1.06Z"/>
          </svg>
        </a>
      </div>

      {/* Contact Form */}
      <section className="content-section">
        <h2 className="section-title">
          <svg viewBox="0 0 16 16" fill="currentColor" width="16" height="16">
            <path d="M1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0 1 13.25 12H9.06l-2.573 2.573A1.458 1.458 0 0 1 4 13.543V12H2.75A1.75 1.75 0 0 1 1 10.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h4.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"/>
          </svg>
          Send a Message
        </h2>

        {submitted ? (
          <div className="success-message">
            <div className="success-icon">
              <svg viewBox="0 0 16 16" fill="currentColor" width="24" height="24">
                <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"/>
              </svg>
            </div>
            <h3>Email client opened!</h3>
            <p>Complete sending the email in your mail application.</p>
            <button
              onClick={() => setSubmitted(false)}
              className="btn btn-default"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="company" className="form-label">
                  Company <span className="optional">(optional)</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Your company"
                />
              </div>

              <div className="form-group">
                <label htmlFor="type" className="form-label">
                  Opportunity Type
                </label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="form-input"
                >
                  <option value="full-time">Full-time Position</option>
                  <option value="contract">Contract Work</option>
                  <option value="consulting">Consulting</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message <span className="required">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
                placeholder="Tell me about the opportunity..."
              />
            </div>

            <button type="submit" className="btn btn-primary">
              <svg viewBox="0 0 16 16" fill="currentColor" width="16" height="16">
                <path d="M.989 8 .064 2.68a1.342 1.342 0 0 1 1.85-1.462l13.402 5.744a1.13 1.13 0 0 1 0 2.076L1.913 14.782a1.343 1.343 0 0 1-1.85-1.463L.99 8Zm.603-5.288L2.38 7.25h4.87a.75.75 0 0 1 0 1.5H2.38l-.788 4.538L13.929 8Z"/>
              </svg>
              Send Message
            </button>
          </form>
        )}
      </section>

      {/* Other Ways to Connect */}
      <section className="content-section">
        <h2 className="section-title">
          <svg viewBox="0 0 16 16" fill="currentColor" width="16" height="16">
            <path d="M7.775 3.275a.75.75 0 0 0 1.06 1.06l1.25-1.25a2 2 0 1 1 2.83 2.83l-2.5 2.5a2 2 0 0 1-2.83 0 .75.75 0 0 0-1.06 1.06 3.5 3.5 0 0 0 4.95 0l2.5-2.5a3.5 3.5 0 0 0-4.95-4.95l-1.25 1.25Zm-.025 5.45a.75.75 0 0 0-1.06-1.06l-1.25 1.25a2 2 0 0 1-2.83-2.83l2.5-2.5a2 2 0 0 1 2.83 0 .75.75 0 0 0 1.06-1.06 3.5 3.5 0 0 0-4.95 0l-2.5 2.5a3.5 3.5 0 0 0 4.95 4.95l1.25-1.25Z"/>
          </svg>
          Connect With Me
        </h2>
        <div className="social-links-grid">
          <a
            href={`https://${personal.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link-card"
          >
            <svg viewBox="0 0 16 16" fill="currentColor" width="20" height="20">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8Z"/>
            </svg>
            <span>GitHub</span>
          </a>
          <a
            href={`https://${personal.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link-card"
          >
            <svg viewBox="0 0 16 16" fill="currentColor" width="20" height="20">
              <path d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 0 1-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 0 0 2 2.866v10.268a.88.88 0 0 0 .885.866h10.226a.882.882 0 0 0 .889-.866V2.865a.88.88 0 0 0-.889-.864z"/>
            </svg>
            <span>LinkedIn</span>
          </a>
          <a
            href={`https://${personal.twitter}`}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link-card"
          >
            <svg viewBox="0 0 16 16" fill="currentColor" width="20" height="20">
              <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
            </svg>
            <span>Twitter / X</span>
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="social-link-card"
          >
            <svg viewBox="0 0 16 16" fill="currentColor" width="20" height="20">
              <path d="M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.784.784 2 1.75 2ZM1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V5.809L8.38 9.397a.75.75 0 0 1-.76 0L1.5 5.809v6.442Zm13-8.181v-.32a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25v.32L8 7.88l6.5-3.81Z"/>
            </svg>
            <span>Email</span>
          </a>
        </div>
      </section>

      {/* Response Time */}
      <div className="response-time">
        <svg viewBox="0 0 16 16" fill="currentColor" width="16" height="16">
          <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm7-3.25v2.992l2.028.812a.75.75 0 0 1-.557 1.392l-2.5-1A.751.751 0 0 1 7 8.25v-3.5a.75.75 0 0 1 1.5 0Z"/>
        </svg>
        <span>I typically respond within <strong>24-48 hours</strong></span>
      </div>
    </div>
  );
}

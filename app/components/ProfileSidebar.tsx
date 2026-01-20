import { resumeData } from '../data/resume-data';
import Link from 'next/link';
import Image from 'next/image';

export default function ProfileSidebar() {
  const { personal } = resumeData;

  return (
    <aside className="profile-sidebar">
      <div className="profile-avatar">
        <Image
          src="/profile.jpg"
          alt="Mahavir Dash"
          width={296}
          height={296}
          className="profile-avatar-img"
          priority
        />
      </div>

      <div className="profile-name">
        <h1>Mahavir Dash</h1>
        <span className="username">crypto-priest</span>
      </div>

      <p className="profile-bio">
        Backend Engineer specializing in Rust, distributed systems, and blockchain development.
      </p>

      <Link href="/hire" className="btn btn-default" style={{ width: '100%', marginTop: 16 }}>
        <svg viewBox="0 0 16 16" fill="currentColor" width="16" height="16">
          <path d="M8 0a8 8 0 110 16A8 8 0 018 0zM5.78 8.75a9.64 9.64 0 001.363 4.177c.255.426.542.832.857 1.215.245-.296.551-.705.857-1.215A9.64 9.64 0 0010.22 8.75H5.78zm4.44-1.5a9.64 9.64 0 00-1.363-4.177c-.307-.51-.612-.919-.857-1.215a9.927 9.927 0 00-.857 1.215A9.64 9.64 0 005.78 7.25h4.44zm-5.944 1.5H1.543a6.507 6.507 0 004.666 5.5c-.123-.181-.24-.365-.352-.552-.715-1.192-1.437-2.874-1.581-4.948zm-2.733-1.5h2.733c.144-2.074.866-3.756 1.58-4.948.12-.197.237-.381.353-.552a6.507 6.507 0 00-4.666 5.5zm10.181 1.5c-.144 2.074-.866 3.756-1.581 4.948-.111.187-.229.371-.352.552a6.507 6.507 0 004.666-5.5h-2.733zm2.733-1.5a6.507 6.507 0 00-4.666-5.5c.123.181.24.365.352.552.715 1.192 1.437 2.874 1.581 4.948h2.733z"/>
        </svg>
        Contact Me
      </Link>

      <div className="profile-meta">
        <div className="profile-meta-item">
          <svg viewBox="0 0 16 16">
            <path d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM6.379 5.227A.25.25 0 006 5.442v5.117a.25.25 0 00.379.214l4.264-2.559a.25.25 0 000-.428L6.379 5.227z"/>
          </svg>
          Available for hire
        </div>
        <div className="profile-meta-item">
          <svg viewBox="0 0 16 16">
            <path d="M2 5.5a3.5 3.5 0 115.898 2.549 5.508 5.508 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.493 3.493 0 012 5.5zM11 4a3.001 3.001 0 012.22 5.018 5.01 5.01 0 012.56 3.012.749.749 0 01-.885.954.752.752 0 01-.549-.514 3.507 3.507 0 00-2.522-2.372.75.75 0 01-.574-.73v-.352a.75.75 0 01.416-.672A1.5 1.5 0 0011 5.5.75.75 0 0111 4zm-5.5-.5a2 2 0 100 4 2 2 0 000-4z"/>
          </svg>
          3+ years experience
        </div>
        <div className="profile-meta-item">
          <svg viewBox="0 0 16 16">
            <path d="M12.75 2.75a.75.75 0 00-1.5 0V4.5H9.276a1.75 1.75 0 00-.985.303L6.596 5.957A.25.25 0 016.455 6H2.353a.75.75 0 100 1.5h3.194l.625-.417a.25.25 0 01.14-.043h.198l-2.7 3.6a.75.75 0 00.6 1.2h3.34l1.25-1.667a.25.25 0 01.4 0l1.25 1.667h3.34a.75.75 0 00.6-1.2l-2.7-3.6h.198a.25.25 0 01.14.043l.625.417h3.194a.75.75 0 000-1.5h-4.102a.25.25 0 01-.14-.043l-1.695-1.13A.25.25 0 019.276 6H11.25V4.5h2a.75.75 0 000-1.5h-2V2.75z"/>
          </svg>
          India (UTC +5:30)
        </div>
        <div className="profile-meta-item">
          <svg viewBox="0 0 16 16">
            <path d="M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0114.25 14H1.75A1.75 1.75 0 010 12.25v-8.5C0 2.784.784 2 1.75 2zM1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V5.809L8.38 9.397a.75.75 0 01-.76 0L1.5 5.809v6.442zm13-8.181v-.32a.25.25 0 00-.25-.25H1.75a.25.25 0 00-.25.25v.32L8 7.88l6.5-3.81z"/>
          </svg>
          <a href={`mailto:${personal.email}`}>{personal.email}</a>
        </div>
      </div>

      <div className="profile-achievements">
        <span className="achievement-badge">
          <svg viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"/>
          </svg>
          Web3 Foundation Grantee
        </span>
        <span className="achievement-badge">
          <svg viewBox="0 0 16 16" fill="currentColor">
            <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9z"/>
          </svg>
          PBA Graduate
        </span>
      </div>

      <div className="profile-social">
        <a
          href={`https://${personal.github}`}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          aria-label="GitHub"
        >
          <svg viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
          </svg>
        </a>
        <a
          href={`https://${personal.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          aria-label="LinkedIn"
        >
          <svg viewBox="0 0 16 16" fill="currentColor">
            <path d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"/>
          </svg>
        </a>
        <a
          href={`https://${personal.twitter}`}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          aria-label="Twitter"
        >
          <svg viewBox="0 0 16 16" fill="currentColor">
            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633z"/>
          </svg>
        </a>
      </div>
    </aside>
  );
}

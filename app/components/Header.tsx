'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { path: '/', label: 'Overview' },
  { path: '/experience', label: 'Experience' },
  { path: '/projects', label: 'Projects' },
  { path: '/about', label: 'About' },
  { path: '/skills', label: 'Skills' },
  { path: '/hire', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  if (!mounted) return null;

  return (
    <>
      <header className="github-header desktop-only">
        <div className="github-header-inner">
          <Link href="/" className="profile-link">
            <span className="profile-link-name">Mahavir Dash</span>
          </Link>
          <nav className="github-header-nav">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={pathname === item.path ? 'active' : ''}
              >
                {item.label}
              </Link>
            ))}
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <div className="mobile-header">
        <Link href="/" className="profile-link">
          <span className="profile-link-name">MD</span>
        </Link>
        <div className="mobile-header-actions">
          <ThemeToggle />
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <nav className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={pathname === item.path ? 'active' : ''}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </>
  );
}

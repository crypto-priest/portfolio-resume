import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-syne",
});

export const metadata: Metadata = {
  title: "Mahavir Dash | Backend Engineer",
  description: "Backend Engineer specializing in Rust, distributed systems, and blockchain development. 3+ years experience building scalable systems.",
  keywords: ["Rust", "Backend Engineer", "Distributed Systems", "Blockchain", "Substrate", "System Design"],
  authors: [{ name: "Mahavir Ganapati Dash" }],
  icons: {
    icon: '/icon',
  },
  openGraph: {
    title: "Mahavir Dash | Backend Engineer",
    description: "Backend Engineer specializing in Rust, distributed systems, and blockchain development",
    type: "website",
  },
};

import Navbar from "./components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={syne.variable}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') || 'dark';
                document.documentElement.setAttribute('data-theme', theme);
              })();
            `,
          }}
        />
      </head>
      <body className={syne.className}>
        <div className="page-wrapper">
          <Navbar />
          <main className="main-content">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

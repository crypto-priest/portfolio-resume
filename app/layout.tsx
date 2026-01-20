import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
      <body>
        <div className="github-app">
          <Header />
          <main className="github-main">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

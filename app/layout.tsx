import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mahavir Dash | Backend Engineer",
  description: "Backend Engineer specializing in Rust, distributed systems, and blockchain development. 3+ years experience building scalable systems.",
  keywords: ["Rust", "Backend Engineer", "Distributed Systems", "Blockchain", "Substrate", "System Design"],
  authors: [{ name: "Mahavir Ganapati Dash" }],
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
    ],
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

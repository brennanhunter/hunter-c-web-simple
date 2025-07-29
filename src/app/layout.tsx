import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/sections/Header";
import Footer from "./components/sections/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hunter Coleman - Full-Stack Developer",
  description: "Full-stack developer building businesses and the code that runs them. From PC repair shops to web applications, I create solutions that actually work for real people.",
  keywords: ["full-stack developer", "web developer", "React", "Next.js", "DeLand FL", "Hunter Coleman"],
  authors: [{ name: "Hunter Coleman" }],
  creator: "Hunter Coleman",
  openGraph: {
    title: "Hunter Coleman - Full-Stack Developer",
    description: "Full-stack developer building businesses and the code that runs them.",
    url: "https://huntercgaming.com", // Update with your actual domain
    siteName: "Hunter Coleman Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hunter Coleman - Full-Stack Developer",
    description: "Full-stack developer building businesses and the code that runs them.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#111827] text-white`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
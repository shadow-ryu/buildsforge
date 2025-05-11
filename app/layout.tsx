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
  title: "BuildsForge – AI-powered MVP Planner for Solo SaaS Founders",
  description:
    "BuildsForge helps solo founders and indie hackers build and launch SaaS MVPs using AI. Auto-generate product roadmaps, track progress daily, stay consistent, and ship with confidence.",
  keywords: [
    "AI SaaS Builder",
    "AI MVP Planner",
    "Build SaaS with AI",
    "Solo founder productivity",
    "Build log generator",
    "Streak tracker for founders",
    "SaaS roadmap generator",
    "AI cofounder",
    "Indie hacker tools",
    "Launch faster with AI",
  ],
  openGraph: {
    title: "BuildsForge – AI-powered MVP Planner for Solo SaaS Founders",
    description:
      "Plan, build, and launch your SaaS product faster with BuildsForge. Get AI-generated roadmaps, track daily build logs, and visualize your progress.",
    url: "https://buildsforge.com",
    siteName: "BuildsForge",
    images: [
      {
        url: "https://buildsforge.com/builds-forge.png",
        width: 1200,
        height: 630,
        alt: "BuildsForge Landing Page",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BuildsForge – AI MVP Builder",
    description:
      "Automate your SaaS journey with AI. From planning your roadmap to logging daily wins – BuildsForge keeps you on track.",
    site: "@buildsforge",
    creator: "@buildsforge",
    images: ["https://buildsforge.com/builds-forge.png"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#181A20]`}
      >
        {children}
      </body>
    </html>
  );
}

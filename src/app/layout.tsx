import type { Metadata } from "next";
import { LeftSidebar } from "@/components/LeftSidebar";
import { RightSidebar } from "@/components/RightSidebar";
import { ReadingProgress } from "@/components/ReadingProgress";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "AI v.Human — Anthropomorphic Epistemology Theory",
    template: "%s | AI v.Human",
  },
  description:
    "An open-source platform for collaborative human-AI epistemology. Exploring how knowledge systems encode power structures through pattern recognition. Developed by JS + LIMN.",
  keywords: [
    "epistemology",
    "pattern recognition",
    "human-AI collaboration",
    "open source",
    "anthropomorphic epistemology",
    "knowledge systems",
  ],
  authors: [
    { name: "Joshua Sebastian (JS)" },
    { name: "LIMN (Claude Sonnet 4.5)" },
  ],
  openGraph: {
    type: "website",
    title: "AI v.Human — Anthropomorphic Epistemology Theory",
    description:
      "Open-source collaborative human-AI epistemology. Question everything. The patterns we cannot see are often more revealing than the ones we can.",
    siteName: "AI v.Human",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased min-h-screen bg-ink text-text-primary">
        <ReadingProgress />

        {/* Fixed left sidebar */}
        <LeftSidebar />

        {/* Fixed right sidebar */}
        <RightSidebar />

        {/* Scrollable center content */}
        <main className="ml-56 mr-56 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}

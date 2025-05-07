import type { Metadata } from "next";
import { Inter, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VP of Engineering | Technology Leadership Portfolio",
  description: "VP of Engineering with 15+ years of leadership experience in Infrastructure as Code, 0-1 Product Development, Machine Learning, Kafka Streaming Event-Driven Architecture, and mentoring Product and Engineering Managers.",
  keywords: [
    "VP of Engineering",
    "Engineering Leadership",
    "Infrastructure as Code",
    "Machine Learning",
    "Kafka",
    "Event-Driven Architecture",
    "Mentoring"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${geistSans.variable} ${geistMono.variable}`}>
      <ClientBody>
        {children}
      </ClientBody>
    </html>
  );
}

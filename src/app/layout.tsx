import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { personalProfile } from "@/data/personal";
import { NavBar } from "@/components/NavBar";
import { DashboardBar } from "@/components/DashboardBar";
import { ContactFooter } from "@/components/ContactFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${personalProfile.name} | ${personalProfile.title}`,
  description: personalProfile.intro,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-slate-950 text-white antialiased`}
      >
        <div className="relative min-h-screen overflow-hidden">
          <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(45,212,191,0.15),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.18),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(236,72,153,0.12),transparent_35%)]" />
          <NavBar />
          <DashboardBar />
          <main className="relative mx-auto max-w-6xl px-6 py-10 lg:py-12">
            {children}
          </main>
          <ContactFooter />
        </div>
      </body>
    </html>
  );
}

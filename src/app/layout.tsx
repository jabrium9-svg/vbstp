import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "VibeSetup — Because you got a life.",
  description: "Describe what you want built. We'll build it. You watch. No live calls, no technical knowledge needed.",
  keywords: ["vibe coding", "ai development", "no-code", "custom software", "app development"],
  openGraph: {
    title: "VibeSetup — Because you got a life.",
    description: "Describe what you want built. We'll build it. You watch.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-cream-100`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SignalIQ — AI-Native GTM Intelligence for B2B Companies",
  description:
    "SignalIQ autonomously discovers growth opportunities for B2B companies. ML-powered ICP clustering, signal discovery, and macro intelligence — no data science team required.",
  openGraph: {
    title: "SignalIQ — AI-Native GTM Intelligence for B2B Companies",
    description:
      "Cluster your customers into ICPs, generate ranked signal hypotheses, and bridge macroeconomic trends to your pipeline. Start with a free ICP audit.",
    url: "https://signaliq.ai",
    siteName: "SignalIQ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}

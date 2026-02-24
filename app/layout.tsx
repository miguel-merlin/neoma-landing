import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Neoma — AI Sales Intelligence for Growing Teams",
  description:
    "Neoma automatically captures, enriches, and acts on your sales data. AI-powered CRM ingestion that drives 18% more revenue.",
  openGraph: {
    title: "Neoma — AI Sales Intelligence for Growing Teams",
    description:
      "Automate CRM enrichment, build ideal customer profiles, and surface upsell opportunities with Neoma.",
    url: "https://neoma.dev",
    siteName: "Neoma",
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

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MouseFollower from "@/components/MouseFollower";
import { Navbar } from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "michaelbayo.uk",
  description: "Personal website of Michael Bayouk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased max-w-4xl mx-4 mt-8 lg:mx-auto">
      <MouseFollower />
      <AnimatedGridPattern
        numSquares={90}
        maxOpacity={0.1}
        duration={2}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[115%] skew-y-12",
        )}
      />
      <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0 pt-20">
        <Navbar />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </main>
      </body>
    </html>
  );
}

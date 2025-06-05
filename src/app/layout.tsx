import type { Metadata } from "next";
import { Geist, Josefin_Sans,Geist_Mono } from "next/font/google";
import StarsCanvas from '@/app/components/main/StarBackground'
import "./global.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Taj | Full Stack Developer Portfolio – React, Next.js, TypeScript",
  description:
    "Explore Taj's developer portfolio featuring real-world full-stack projects built with React, Next.js, TypeScript, Tailwind CSS, MongoDB, and APIs. Clean UI/UX and system design focused.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${josefinSans.variable} ${geistMono.variable} antialiased`}
      >
        <StarsCanvas />
        {children}
      </body>
    </html>
  );
}

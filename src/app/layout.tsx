import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/config/site";
import { SiteHeader } from "@/components/marginals/site-header";
import { SiteFooter } from "@/components/marginals/site-footer";
import { ScrollArea } from "@/components/ui/scroll-area";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <ScrollArea className="h-screen w-screen">
          <SiteHeader />
          {children}
          <SiteFooter />
        </ScrollArea>
      </body>
    </html>
  );
}

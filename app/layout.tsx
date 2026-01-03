import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import { Navigation } from "@/components/navigation"
import { MusicPlayer } from "@/components/music-player"
import { BottomMarquee } from "@/components/bottom-marquee"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "US1BZA - Elite Cybersecurity Expert & Linux Developer",
    template: "%s | US1BZA",
  },
  description:
    "Professional cybersecurity expert with 13+ years of experience specializing in penetration testing, custom Linux distribution development, and secure infrastructure design. OSCP, CISSP, CEH certified.",
  keywords: [
    "cybersecurity",
    "penetration testing",
    "linux",
    "security expert",
    "ethical hacking",
    "OSCP",
    "CISSP",
    "red team",
    "blue team",
    "custom linux",
  ],
  authors: [{ name: "US1BZA" }],
  creator: "US1BZA",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://us1bza.com",
    title: "US1BZA - Elite Cybersecurity Expert & Linux Developer",
    description:
      "Professional cybersecurity expert specializing in penetration testing, custom Linux distributions, and secure application architecture with 13+ years of experience.",
    siteName: "US1BZA Portfolio",
    images: [
      {
        url: "/us1bza-avatar.png",
        width: 1200,
        height: 630,
        alt: "US1BZA Cybersecurity Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "US1BZA - Elite Cybersecurity Expert",
    description:
      "Professional cybersecurity expert with 13+ years of experience in penetration testing and secure infrastructure design.",
    images: ["/us1bza-avatar.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
    generator: 'v0.app'
}

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <LanguageProvider>
            <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
              <Navigation />
              <main className="pb-10">{children}</main>
              <BottomMarquee />
              <Footer />
              <MusicPlayer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

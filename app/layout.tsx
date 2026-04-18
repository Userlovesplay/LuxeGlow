import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LenisProvider } from "@/components/lenis-provider"
import { CustomCursor } from "@/components/custom-cursor"
import { LanguageProvider } from "@/components/language-context"
import { LanguageSwitcher } from "@/components/language-switcher"
import { Toaster } from "@/components/ui/sonner"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: "LuxeGlow | Your Skin, Perfectly Yours",
  description: "AI-powered skincare formulated exclusively for you. Discover personalized serums, creams, and masks crafted with clean ingredients and cutting-edge science.",
  keywords: ["skincare", "AI skincare", "personalized skincare", "luxury skincare", "serums", "anti-aging", "LuxeGlow"],
  authors: [{ name: "LuxeGlow" }],
  openGraph: {
    title: "LuxeGlow | Your Skin, Perfectly Yours",
    description: "AI-powered skincare formulated exclusively for you",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LuxeGlow",
    description: "Your Skin, Perfectly Yours",
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-dark-32x32.png', type: 'image/png', sizes: '32x32', media: '(prefers-color-scheme: dark)' },
      { url: '/icon-light-32x32.png', type: 'image/png', sizes: '32x32', media: '(prefers-color-scheme: light)' },
    ],
  },
}

export const viewport: Viewport = {
  themeColor: "#D4AF77",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} bg-background text-foreground antialiased scroll-smooth`}
        suppressHydrationWarning
      >
        <CustomCursor />
        <LanguageProvider>
          <LenisProvider>
            <div className="relative z-10">
              {children}
            </div>
          </LenisProvider>
          <LanguageSwitcher />
        </LanguageProvider>
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}

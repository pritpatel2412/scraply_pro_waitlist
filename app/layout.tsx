import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Scraply Pro – Join the Waitlist for Early Access",
  description: "Scraply is the blazing-fast open-source web scraping tool. Join the waitlist for Scraply Pro!",
  generator: 'v0.dev',
  icons: {
    icon: '/favicon.ico', // Make sure this file exists in your /public directory
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png', // Optional: for iOS
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

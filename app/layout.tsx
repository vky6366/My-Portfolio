import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vishwakalyan | AI & ML Engineer',
  description: 'Portfolio of Vishwakalyan, an AI & ML Engineer showcasing projects in cybersecurity, deepfake detection, and intelligent systems.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

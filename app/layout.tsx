import './globals.css'

import type { Metadata } from 'next'
import { IBM_Plex_Mono, Inter } from 'next/font/google'
const inter = IBM_Plex_Mono({ subsets: ['latin'], weight: ['500'] })

export const metadata: Metadata = {
  title: 'Project: Mech',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

import './globals.css'

import type { Metadata } from 'next'
import { IBM_Plex_Mono } from 'next/font/google'

import { cn } from '@/lib/utils'

const inter = IBM_Plex_Mono({ subsets: ['latin'], weight: ['500'], variable: '--font-inter' })

import localFont from 'next/font/local'

export const metadata: Metadata = {
  title: 'Project: Mech',
}

const heavy = localFont({ src: './fonts/Heavy.otf', variable: '--font-heavy' })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, heavy.variable)}>{children}</body>
    </html>
  )
}

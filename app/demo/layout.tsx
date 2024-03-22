import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Project: Mech | Demo',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}

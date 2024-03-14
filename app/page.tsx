'use client'

import { AnimatedText } from '@/components/animated-text'
import Cursor from '@/components/cursor'
import { NoiseBackground } from '@/components/noise-background'
import { useCursor } from '@/hooks/use-cursor'

export default function Home() {
  const { setHovered } = useCursor()

  return (
    <>
      <main className={'relative flex h-screen w-screen cursor-none items-center justify-center overflow-hidden'}>
        <AnimatedText
          text={'PROJECT: MECH'}
          triggerOnHover={true}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        />
        <NoiseBackground />

        <Cursor />
      </main>
    </>
  )
}

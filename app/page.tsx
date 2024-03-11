import { AnimatedText } from '@/components/animated-text'
import { NoiseBackground } from '@/components/noise-background'

export default function Home() {
  return (
    <main className={'h-screen w-screen'}>
      <AnimatedText text={'PROJECT: MECH'} triggerOnHover={true} />
      <NoiseBackground />
    </main>
  )
}

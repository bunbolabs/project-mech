'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useState } from 'react'

import { AnimatedText } from '@/components/animated-text'
import Cursor from '@/components/cursor'
import MusicVisualizer from '@/components/music-visualizer'
import MusicWave from '@/components/music-wave'
import { NoiseBackground } from '@/components/noise-background'
import { useCursor } from '@/hooks/use-cursor'

import DotIcon from '../public/assets/images/dot-icon.png'
import BackgroundImage from '../public/assets/images/home-background.png'
import MenuIcon from '../public/assets/images/menu-icon.png'
import RoboHead from '../public/assets/images/robo-head.png'
import Stripe from '../public/assets/images/stripe.png'
import Temp1 from '../public/assets/images/temp1.png'
import Temp2 from '../public/assets/images/temp2.png'

const DynamicMusicWave = dynamic(() => import('../components/music-wave'), {
  ssr: false,
})

export default function Home() {
  const { setHovered } = useCursor()
  const [menuOpen, setMenuOpen] = useState(false)
  const stripeHeight = '10vh'

  return (
    <main className={'relative flex h-screen w-screen cursor-none items-center justify-center overflow-hidden'}>
      <div
        className="content-rectangle"
        style={{
          border: '1px solid #E5E5E5',
          borderRadius: '16px',
          zIndex: 1,
          position: 'absolute',
          top: 20,
          left: 20,
          right: 20,
          bottom: 20,
        }}
      >
        <div className="top-container relative flex items-center justify-center">
          <div className="absolute left-7 top-7 z-10" onClick={() => setMenuOpen(!menuOpen)}>
            <Image alt="Menu" height={24} src={MenuIcon} width={24} />
            {/* <MusicVisualizer src="../public/assets/musics/troi-giau-mang-di.mp3" /> */}
          </div>
          <div className="relative mt-6 flex justify-center space-x-4">
            <div className="flex items-center">
              <Image alt="Dot" height={6} src={DotIcon} style={{ marginRight: '10px' }} width={6} />
              <AnimatedText
                text="PROJECTS"
                triggerOnHover={true}
                onClick={() => handleNavigation('/projects')}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              />
            </div>
            <AnimatedText
              text="MECHS"
              triggerOnHover={true}
              onClick={() => handleNavigation('/mechs')}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            />
            <AnimatedText
              text="STORY"
              triggerOnHover={true}
              onClick={() => handleNavigation('/story')}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            />
          </div>
        </div>
        <div
          className="horizontal-line"
          style={{ borderTop: '1px solid #E5E5E5', position: 'relative', marginTop: '15px' }}
        ></div>
        <div className="bottom-container" style={{ position: 'relative' }}>
          <div
            className="relative"
            style={{ fontSize: '11px', userSelect: 'none', marginTop: '10px', marginLeft: '25px' }}
          >
            Attention commanders! Our territory is under attack. Suit up and protect our loved ones!
          </div>
          <div className="absolute" style={{ right: '180px' }}>
            <div className="relative">
              <p style={{ fontSize: '80px', fontWeight: 'bold', userSelect: 'none' }}>PROJECT —</p>
            </div>
            <div className="absolute right-10">
              <p style={{ fontSize: '80px', fontWeight: 'bold', userSelect: 'none' }}>MECH</p>
            </div>
          </div>
          <Image
            alt="temp"
            height={300}
            src={Temp1}
            style={{ position: 'absolute', left: '7.5%', top: '1500%' }}
            width={450}
          />
          <Image
            alt="temp"
            height={200}
            src={Temp2}
            style={{ position: 'absolute', right: '8%', top: '750%' }}
            width={530}
          />
        </div>
        <div
          className="horizontal-line"
          style={{
            borderTop: '1px solid #E5E5E5',
            position: 'absolute',
            bottom: '9.5%',
            left: '0%',
            width: '46%',
            zIndex: 1,
          }}
        ></div>
        <div
          className="horizontal-line"
          style={{
            borderTop: '1px solid #E5E5E5',
            position: 'absolute',
            bottom: '9.5%',
            right: '0%',
            width: '46%',
            zIndex: 1,
          }}
        ></div>
        <div style={{ left: '50%', transform: 'translateX(-50%)', bottom: '-1%', position: 'absolute', zIndex: 2 }}>
          <Image alt="Robo Head" height={200} src={RoboHead} width={200} />
        </div>
        <Image alt="Stripe" className="absolute bottom-0 left-0" layout="fixed" src={Stripe} width={340} />
      </div>
      <NoiseBackground />
      <Image
        alt="Home background"
        className="z-0 h-full w-full bg-fixed object-fill"
        layout="fill"
        src={BackgroundImage}
      />
      <Cursor />
    </main>
  )
}

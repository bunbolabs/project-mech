'use client'

import { motion } from 'framer-motion'
import { useEffect } from 'react'

import { useCursor } from '@/hooks/use-cursor'

export default function Cursor() {
  const { hovered, position, setPosition } = useCursor()

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.pageX, y: e.pageY })
    }

    document.addEventListener('mousemove', onMouseMove)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <div className={'pointer-events-none fixed h-screen w-screen'}>
      <motion.svg
        animate={{
          x: position.x - 13,
          y: position.y - 13,
          transition: {
            duration: 0.05,
            ease: 'easeOut',
          },
        }}
        className={'absolute z-[9999] origin-center outline-none'}
        fill="none"
        height="26"
        viewBox="0 0 26 26"
        width="26"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M13 0V26" stroke="#E5E5E5" />
        <path d="M26 13L-2.38419e-07 13" stroke="#E5E5E5" />
        <circle cx="13" cy="13" r="4" stroke="#E5E5E5" />
      </motion.svg>

      <motion.div
        animate={{
          x: position.x - 36,
          y: position.y - 2,
          transition: {
            duration: 0.18,
            ease: 'easeOut',
          },
          scale: hovered ? 1.5 : 1,
        }}
        className={'absolute z-[9999] origin-center outline-none'}
      >
        <motion.svg
          animate={{
            rotate: -360,
            transition: {
              duration: 3,
              ease: 'linear',
              repeat: Infinity,
            },
          }}
          className={' outline-none'}
          fill="none"
          height="4"
          viewBox="0 0 72 4"
          width="72"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2.38419e-07 -1.74846e-07L4 2L6.3573e-08 4L2.38419e-07 -1.74846e-07Z" fill="#E5E5E5" />
          <path d="M72 4L68 2L72 4.76995e-08L72 4Z" fill="#E5E5E5" />
        </motion.svg>
      </motion.div>

      <motion.div
        animate={{
          x: position.x - 40,
          y: position.y - 40,
          transition: {
            duration: 0.15,
            ease: 'easeOut',
          },
          scale: hovered ? 1.5 : 1,
        }}
        className={'absolute z-[9999] origin-center outline-none'}
      >
        <motion.svg
          animate={{
            rotate: 360,
            transition: {
              ease: 'linear',
              duration: 3,
              repeat: Infinity,
            },
          }}
          className={'outline-none'}
          fill="none"
          height="78"
          id={'outer'}
          viewBox="0 0 80 78"
          width="80"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            d="M0 38.7398C0 20.1014 12.7477 4.44043 30 0V1.03373C13.306 5.44948 1 20.6575 1 38.7398C1 56.8221 13.306 72.0302 30 76.4459V77.4796C12.7477 73.0392 0 57.3782 0 38.7398ZM79 38.7398C79 56.8221 66.694 72.0302 50 76.4459V77.4796C67.2523 73.0392 80 57.3782 80 38.7398C80 20.1014 67.2523 4.44043 50 0V1.03373C66.694 5.44948 79 20.6575 79 38.7398ZM8 39L4 37V41L8 39ZM72 39L76 41V37L72 39Z"
            fill="#E5E5E5"
            fillRule="evenodd"
          />
        </motion.svg>
      </motion.div>
    </div>
  )
}

'use client'

import { ComponentPropsWithoutRef, useEffect, useRef } from 'react'

import { cn } from '@/lib/utils'

type AnimatedTextProps = {
  text?: string
  triggerOnHover?: boolean
} & ComponentPropsWithoutRef<'span'>

const letters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

export function AnimatedText({ text = 'default', triggerOnHover = false, className, ...props }: AnimatedTextProps) {
  const interval = useRef<NodeJS.Timeout>()
  const textRef = useRef<HTMLSpanElement>(null)

  const animate = () => {
    let iteration = 0

    clearInterval(interval.current)

    interval.current = setInterval(() => {
      if (!textRef.current) return

      textRef.current.innerText = textRef.current.innerText
        .split('')
        .map((letter, index) => {
          if (index < iteration) {
            return textRef.current!.dataset.value![index]
          }

          return letters[Math.floor(Math.random() * 26)]
        })
        .join('')

      if (iteration >= textRef.current!.dataset.value!.length) {
        clearInterval(interval.current)
      }

      iteration += 1 / 3
    }, 30)
  }

  useEffect(() => {
    animate()

    return () => {
      clearInterval(interval.current)
    }
  }, [])

  return (
    <span
      ref={textRef}
      className={cn('select-none', className)}
      data-value={text}
      onMouseOver={triggerOnHover ? () => animate() : () => {}}
      {...props}
    >
      {text}
    </span>
  )
}

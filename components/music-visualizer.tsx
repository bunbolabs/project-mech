// components/MusicVisualizer.tsx
import { Howl } from 'howler'
import React, { useEffect, useRef } from 'react'
import Analyser from 'web-audio-analyser'

interface MusicVisualizerProps {
  src: string
}

const MusicVisualizer: React.FC<MusicVisualizerProps> = ({ src }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const audioRef = useRef<Howl | null>(null)
  let ctx: CanvasRenderingContext2D | null

  useEffect(() => {
    const canvas = canvasRef.current!

    // eslint-disable-next-line react-hooks/exhaustive-deps
    ctx = canvas.getContext('2d')

    const audio = new Howl({
      src: [src],
      autoplay: true,
      loop: true,
      volume: 0.5,
    })

    audioRef.current = audio

    const analyser = new Analyser(audio._audioNode!)

    analyser.analyser.fftSize = 256

    const dataArray = new Uint8Array(analyser.analyser.frequencyBinCount)

    const draw = () => {
      requestAnimationFrame(draw)

      analyser.analyser.getByteFrequencyData(dataArray)

      ctx!.clearRect(0, 0, canvas.width, canvas.height)
      const barWidth = (canvas.width / dataArray.length) * 2.5
      let barHeight
      let x = 0

      dataArray.forEach((item) => {
        barHeight = item

        ctx!.fillStyle = `rgb(0, ${barHeight + 100}, 0)`
        ctx!.fillRect(x, canvas.height - barHeight / 2, barWidth, barHeight / 2)

        x += barWidth + 1
      })
    }

    draw()

    return () => {
      audio.stop()
    }
  }, [src])

  return <canvas ref={canvasRef} height={600} width={800} />
}

export default MusicVisualizer

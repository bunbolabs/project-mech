'use client'

import React, { useEffect, useState } from 'react'
import WaveSurfer from 'react-wavesurfer'
const MusicWave = () => {
  const [audioUrl, setAudioUrl] = useState('../public/musics/troi-gio-mang-di.mp3')

  return (
    <div className="music-wave-container">
      <WaveSurfer options={{ height: 100, waveColor: 'blue' }} url={audioUrl} />
    </div>
  )
}

export default MusicWave

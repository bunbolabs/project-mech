'use client'

import { Unity, useUnityContext } from 'react-unity-webgl'

import Preload from '@/components/preload'

export default function Page() {
  const { unityProvider, isLoaded } = useUnityContext({
    loaderUrl: 'Build/demo-01.loader.js',
    dataUrl: 'Build/demo-01.data',
    frameworkUrl: 'Build/demo-01.framework.js',
    codeUrl: 'Build/demo-01.wasm',
  })

  return (
    <main className="h-screen w-screen overflow-hidden">
      {!isLoaded && <Preload />}
      <Unity className="h-screen w-screen" unityProvider={unityProvider} />
    </main>
  )
}

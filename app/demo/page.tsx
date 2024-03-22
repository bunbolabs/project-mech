'use client'

import React from 'react'
import { Unity, useUnityContext } from 'react-unity-webgl'

export default function Page() {
  const { unityProvider } = useUnityContext({
    loaderUrl: 'Build/demo-01.loader.js',
    dataUrl: 'Build/demo-01.data',
    frameworkUrl: 'Build/demo-01.framework.js',
    codeUrl: 'Build/demo-01.wasm',
  })

  return <Unity className="h-screen w-screen" unityProvider={unityProvider} />
}

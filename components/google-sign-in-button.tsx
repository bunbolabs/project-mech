'use client'

import Image from 'next/image'
import { signIn } from 'next-auth/react'

import googleLogo from '@/public/assets/images/google.png'

export function GoogleSignInButton() {
  const handleClick = () => {
    signIn('google', { callbackUrl: 'http://localhost:3000/demo' })
  }

  return (
    <button
      className="focus:shadow-outline mt-4 flex h-14 w-full items-center justify-center rounded-lg border-2  border-black bg-white px-6 text-xl font-semibold text-black transition-colors duration-300 hover:bg-slate-200"
      onClick={handleClick}
    >
      <Image alt="Google Logo" height={20} src={googleLogo} width={20} />
      <span className="ml-4">Continue with Google</span>
    </button>
  )
}

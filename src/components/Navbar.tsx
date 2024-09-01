'use client'

import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import MobileMenu from './MobileMenu'
import { ClerkLoaded, ClerkLoading } from '@clerk/nextjs'
import { SignedIn, SignedOut, SignIn, UserButton } from '@clerk/clerk-react'

export default function Navbar() {
  return (
    <div className="h-24 flex items-center justify-between">
      {/* LEFT */}
      <div className="md:hidden lg:block w-[20%]">
        <Link href="/" className="font-bold text-xl text-blue-600">
          WINTERSOCIAL
        </Link>
      </div>
      {/* CENTER */}
      <div className="hidden md:flex gap-6 text-gray-600 w-[50%] text-md">
        <Link href="/" className="flex gap-2 items-center">
          <Image
            src="/home.png"
            alt="Home"
            width={16}
            height={16}
            className="w-4 h-4"
          />
          <span>HomePage</span>
        </Link>
        <Link href="/" className="flex gap-2 items-center">
          <Image
            src="/friends.png"
            alt="Friends"
            width={16}
            height={16}
            className="w-4 h-4"
          />
          <span>Friends</span>
        </Link>
        <Link href="/" className="flex gap-2 items-center">
          <Image
            src="/stories.png"
            alt="Stories"
            width={16}
            height={16}
            className="w-4 h-4"
          />
          <span>Stories</span>
        </Link>
      </div>
      {/* RIGHT */}
      <div className="w-[30%] flex items-center justify-end gap-4 lg:gap-8">
        <ClerkLoading>
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <button>
              <Image src="/people.png" alt="" width={20} height={20} />
            </button>
            <button>
              <Image src="/messages.png" alt="" width={20} height={20} />
            </button>
            <button>
              <Image src="/notifications.png" alt="" width={20} height={20} />
            </button>
            <UserButton/>
          </SignedIn>
          <SignedOut>
            <div className='flex items-center gap-2 text-md'>
              <Image src="/login.png" alt="" width={20} height={20} />
              <Link href="/sign-in">Login/Register</Link>
            </div>
          </SignedOut>
        </ClerkLoaded>
        <MobileMenu />
      </div>
    </div>
  )
}

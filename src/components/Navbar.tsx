import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import MobileMenu from './MobileMenu'

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
        <MobileMenu />
      </div>
    </div>
  )
}

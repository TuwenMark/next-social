'use client'

import Link from 'next/link'
import React from 'react'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <button className="flex flex-col gap-1" onClick={() => setIsOpen(!isOpen)}>
      <div
        className={`w-6 h-1 bg-blue-500 rounded-sm ${
          isOpen ? 'rotate-45' : ''
        } origin-left ease-in-out duration-500`}
      />
      <div
        className={`w-6 h-1 bg-blue-500 rounded-sm ${
          isOpen ? 'opacity-0' : ''
        } ease-in-out duration-500`}
      />
      <div
        className={`w-6 h-1 bg-blue-500 rounded-sm ${
          isOpen ? '-rotate-45' : ''
        } origin-left ease-in-out duration-500`}
      />
      {isOpen && (
        <div className="flex flex-col bg-white absolute w-full h-[calc(100vh-96px)] left-0 top-24 items-center justify-center gap-8 font-medium text-xl z-100">
          <Link href="/">Home</Link>
          <Link href="/">Friends</Link>
          <Link href="/">Groups</Link>
          <Link href="/">Stories</Link>
          <Link href="/">Profile</Link>
        </div>
      )}
    </button>
  )
}

import Link from 'next/link'
import React from 'react'
import MobileMenu from './MobileMenu'

export default function Navbar() {
  return (
    <div className="h-24 flex items-center justify-between">
      {/* LEFT */}
      <div className="font-bold text-xl text-blue-600">
        <Link href="/">WINTERSOCIAL</Link>
      </div>
      {/* CENTER */}
      <div className="block"></div>
      {/* RIGHT */}
      <div>
        <MobileMenu />
      </div>
    </div>
  )
}

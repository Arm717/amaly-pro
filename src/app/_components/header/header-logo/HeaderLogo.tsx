"use client"
import React from 'react'
import useScrollPosition from '../../_hooks/useScrollPosition';
import Link from 'next/link';
import Image from 'next/image';

function HeaderLogo() {
     const isScrolled = useScrollPosition(100);

  return (
    <div className="absolute top-[-20px] left-[0]">
          <Link href="/">
            <Image
              className={`transition-all duration-700 ${
                isScrolled ? "opacity-100 scale-100" : "opacity-0 scale-75"
              }`}
              src="/headerLogo.png"
              width={127}
              height={213}
              alt="logo"
            />
          </Link>
    </div>
  )
}

export default HeaderLogo
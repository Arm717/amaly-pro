'use client'
import Link from 'next/link';
import React, { useState } from 'react'

function HeaderNav() {
    const [menuOpen, setMenuOpen] = useState(true);
  return (
    <>
    {menuOpen && (
          <div className="absolute top-full right bg-white border-2 border-yellow-400 rounded mt-2 w-[260px] h-[288px] z-50">
            <ul className=" text-sm text-gray-800">
              {[
                "Супы",
                "Горячее",
                "Гарниры",
                "Салаты",
                "Закуски",
                "Выпечка и десерты",
                "Летнее меню",
                "Соусы",
                "Закуски и снэки",
                "Замороженные полуфабрикаты",
                "Ягоды шоковой заморозки",
              ].map((item) => (
                <li key={item}>
                  <Link href="/" className="block px-4  hover:bg-gray-100">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
    </>
    
  )
}

export default HeaderNav
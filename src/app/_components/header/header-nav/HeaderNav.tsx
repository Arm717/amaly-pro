"use client";
import Link from "next/link";
import React, { useState } from "react";

function HeaderNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
     <div className="flex relative items-center justify-center w-full  text-sm">
        <nav className="flex фонт-медиум gap-6 w-[225px]">
          <Link className="" href="/1">
            О нас
          </Link>
          <Link href="/2" onClick={()=> setMenuOpen((prev) => !prev)} >Меню</Link>
          <Link href="/3">Контакты</Link>
        </nav>
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
      </div>
  );
}

export default HeaderNav;

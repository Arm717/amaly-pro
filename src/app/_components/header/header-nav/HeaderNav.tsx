"use client";
import Link from "next/link";
import React, { useState } from "react";

import ButtonIcon from "../../button/buttonIcon/ButtonIcon";
import useScrollPosition from "@/app/_hooks/useScrollPosition";
import { useProductContext } from "@/app/context/useProductContext";

function HeaderNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const isScrolled = useScrollPosition(50);
  const { categorie } = useProductContext();
  
  return (
    <div className={`flex relative items-center justify-center transition-all duration-700 ease-in-out
    ${
            isScrolled
              ? "ml-0"
              : "xl:ml-[200px]"
     }
    max-lg:hidden`
    }>
      <nav className="flex font-firaGo font-medium gap-6">
        <Link href="/#aboutUs">О нас</Link>

        <ButtonIcon
          width={16}
          height={16}
          variant="headerNavBtn"
          icon={menuOpen ? "/chevron-up.png" : "/chevron-down.png"}
          title="Меню"
          onClick={() => setMenuOpen((prev) => !prev)}
          iconPosition="right"
        />

        <Link href="/contact">Контакты</Link>
        <Link href="/4">Условия доставки</Link>
      </nav>
      {menuOpen && categorie.length > 0 && (
        <div className="absolute top-[50px] left-[65px] py-[8px] px-[10px] bg-white border-2 border-yellow-400 rounded  w-[260px]  z-30">
          <ul className="font-firaGo  gap-6 text-[#A4A4A4]">
            {categorie.map((item) => (
              <li className="font-medium" key={item.id}>
                <Link onClick={()=> setMenuOpen((prev)=>!prev)} href={`/category/${item.id}`} className="block ">
                  {item.name}
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

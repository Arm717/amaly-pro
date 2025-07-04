"use client";
import Link from "next/link";
import React, { useState } from "react";

import ButtonIcon from "../../button/buttonIcon/ButtonIcon";
import { ICategorys } from "@/app/types";
import useScrollPosition from "@/app/_hooks/useScrollPosition";

function HeaderNav({ category }: ICategorys) {
  const [menuOpen, setMenuOpen] = useState(false);
  const isScrolled = useScrollPosition(50);

  return (
    <div className={`flex relative items-center justify-center transition-all duration-700 ease-in-out
    ${
            isScrolled
              ? "ml-0"
              : "xl:ml-[200px]"
     }
    max-md:hidden`
    }>
      <nav className="flex font-firaGo font-medium gap-6">
        <Link href="/1">О нас</Link>

        <ButtonIcon
          width={16}
          height={16}
          variant="headerNavBtn"
          icon={menuOpen ? "/chevron-up.png" : "/chevron-down.png"}
          title="Меню"
          onClick={() => setMenuOpen((prev) => !prev)}
          iconPosition="right"
        />

        <Link href="/3">Контакты</Link>
      </nav>
      {menuOpen && (
        <div className="absolute top-[50px] left-[65px] py-[8px] px-[10px] bg-white border-2 border-yellow-400 rounded  w-[260px]  z-30">
          <ul className="font-firaGo  gap-6 text-[#A4A4A4]">
            {category.map((item) => (
              <li className="font-medium" key={item.id}>
                <Link href="/" className="block ">
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

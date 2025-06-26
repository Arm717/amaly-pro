"use client";
import Link from "next/link";
import React, { useState } from "react";
import Button from "../../button/Button";
import { IAllCategory } from "./types";
import ButtonIcon from "../../button/buttonIcon/ButtonIcon";

interface ICategorys {
  category: IAllCategory;
}

function HeaderNav({ category }: ICategorys) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex relative items-center justify-center ">
      <nav className="flex font-firaGo font-medium gap-6 ">
        <Link className="" href="/1">
          О нас
        </Link>

        <ButtonIcon
          width={16}
          height={16}
          variant="headerNavBtn"
          icon="/chevron-up.png"
          title="Меню"
          onClick={() => setMenuOpen((prev) => !prev)}
        />

      

        <Link href="/3">Контакты</Link>
      </nav>
      {menuOpen && (
        <div className="absolute top-[50px] left-[65px] bg-white border-2 border-yellow-400 rounded  w-[260px]  z-50">
          <ul className="font-firaGo font-regular px-2 text-[#A4A4A4]">
            {category.map((item) => (
              <li className="" key={item.id}>
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

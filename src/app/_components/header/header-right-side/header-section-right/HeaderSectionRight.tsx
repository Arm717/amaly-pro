import ButtonIcon from "@/app/_components/button/buttonIcon/ButtonIcon";
import { ICategorys } from "@/app/types";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function HeaderSectionRight({ category }: ICategorys) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="flex absolute w-[210px] h-[100vh] top-0 right-[-20px] bg-yellow-400 z-50 shadow-xl">
      <div className="relative w-full">
        <div className="absolute right-[20px] top-[20px] ">
          <ButtonIcon
            icon="/x.png"
            variant="headerNavBtn"
            width={16}
            height={16}
          />
          {/* <Image src='/x.png' width={16} height={16} alt=''/> */}
        </div>

        <div className="flex flex-col w-[72px] h-[121px]  justify-between gap-col-[32px] mt-[71px] ml-[20px] font-firaGo font-medium">
          <Link href="/1">О нас</Link>

          <ButtonIcon
            width={16}
            height={16}
            variant="headerNavBtn"
            icon="/chevron-up.png"
            title="Меню"
            onClick={() => setMenuOpen((prev) => !prev)}
          />

          {menuOpen && (
            <div className="  w-[158px] ">
              <ul className="font-firaGo text-sm font-normal gap-8 text-[#594700]">
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

          <Link href="/3">Контакты</Link>
        </div>
      </div>
    </div>
  );
}

export default HeaderSectionRight;

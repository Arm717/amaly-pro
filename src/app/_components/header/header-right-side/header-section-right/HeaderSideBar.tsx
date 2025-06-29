import ButtonIcon from "@/app/_components/button/buttonIcon/ButtonIcon";
import Input from "@/app/_components/input/Input";
import { IAllCategory, ICategorys } from "@/app/types";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface IHeaderAside {
  category: IAllCategory;
  closeAside: () => void;
}

function HeaderSideBar({ category, closeAside }: IHeaderAside) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 right-0 w-[260px] h-screen bg-yellow-400 z-50 shadow-xl font-firaGo  flex flex-col justify-between">
      <div>
        <div className="flex justify-end mt-[20px] mr-[20px] mb-[19px]">
          <ButtonIcon
            onClick={closeAside}
            icon="/x.png"
            variant="headerNavBtn"
            width={20}
            height={20}
          />
        </div>

        <div className="flex mb-[32px] justify-center">
          <Input
            placeholder="Найти"
            variant="headerAside"
            leftIcon="/searchLogo.png"
            altLeftIcon="Поиск"
            altRightIcon="Очистка"
          />
        </div>

        <nav className="flex flex-col  font-medium text-black gap-[32px] ml-[20px]">
          <div>
            <Link href="/about">О нас</Link>
          </div>

          <div className="relative ">
            <ButtonIcon
              onClick={() => setMenuOpen((prev) => !prev)}
              icon={menuOpen ? "/chevron-up.png" : "/chevron-down.png"}
              title="Меню"
              width={12}
              height={12}
              variant="headerNavBtn"
              iconPosition="right"
            />

            {menuOpen && (
              <ul className="mt-[10px] ml-[12px] text-sm font-normal space-y-[8px] text-[#594700]">
                {category.map((item) => (
                  <li key={item.id}>
                    <Link href="/">{item.name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div>
            <Link href="/contacts">Контакты</Link>
          </div>
        </nav>
      </div>

      <div className="ml-[20px] ">
        <ButtonIcon
          width={22}
          height={24}
          iconPosition="left"
          icon="/logout.png"
          variant="headerNavBtn"
          title="Выйти"
        />
      </div>

      <div className="flex text-2xl mb-[20px] font-semibold text-white justify-center">
        8 992-225-55-12
      </div>
    </div>
  );
}

export default HeaderSideBar;

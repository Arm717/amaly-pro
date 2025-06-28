import ButtonIcon from "@/app/_components/button/buttonIcon/ButtonIcon";
import Input from "@/app/_components/input/Input";
import { IAllCategory, ICategorys } from "@/app/types";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface IHeaderAside {
  category: IAllCategory,
  closeAside: () => void
}

function HeaderSectionRight({ category, closeAside }: IHeaderAside) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 right-0 w-[260px] h-screen bg-yellow-400 z-50 shadow-xl px-4 py-6 flex flex-col justify-between">
   
      <div>
        <div className="flex justify-end mb-4">
          <ButtonIcon
          onClick={closeAside}
            icon="/x.png"
            variant="headerNavBtn"
            width={20}
            height={20}
          />
        </div>

      
        <div className="flex mb-6 justify-center">
          <Input
          placeholder="Найти"
          variant="headerAside"
          leftIcon="/searchLogo.png"
          altLeftIcon="Поиск"
          altRightIcon="Очистка"
        />
        </div>

    
        <nav className="flex flex-col font-firaGo font-medium text-black gap-[32px]">
          <div>
            <Link href="/about">О нас</Link>
          </div>
         

          
           <div className="relative ">
            <ButtonIcon onClick={() => setMenuOpen((prev) => !prev)} icon={menuOpen?'/chevron-up.png':'/chevron-down.png'} title="Меню" width={12} height={12} variant="headerNavBtn"  />
           

            {menuOpen && (
              <ul className="mt-2 ml-2 text-sm font-normal space-y-2 text-[#594700]">
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

      <div className="space-y-4">
        <button className="flex items-center gap-2">
          <Image src="/logout.png" width={18} height={18} alt="Выйти" />
          <span className="font-medium">Выйти</span>
        </button>

        <div className="flex text-2xl font-semibold text-white justify-center">
          8 992-225-55-12
        </div>
      </div>
    </div>
  );
}

export default HeaderSectionRight;

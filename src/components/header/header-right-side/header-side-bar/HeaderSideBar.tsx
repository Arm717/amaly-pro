"use client";
import { IAllCategory } from "@/types/types";
import Link from "next/link";
import React, { useState } from "react";
import useSearchHook from "../../../../hooks/useSearchHook";
import SearchBar from "../../header-search-bar/HeaderSearchBar";
import ButtonIcon from "@/components/button/buttonIcon/ButtonIcon";
import { useAuth } from "@/context/useAuthContext";
import { logoutAction } from "@/context/action/logoutAction";

interface IHeaderAside {
  closeAside: () => void;
  categorie: IAllCategory;
}

function HeaderSideBar({ categorie, closeAside }: IHeaderAside) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { setSearchValue, handleSearch } = useSearchHook();
  const { isAuthenticated, logout } = useAuth();

  return (
    <div className="fixed top-0 right-0 w-[260px] h-screen bg-yellow-400 z-50 shadow-xl font-firaGo  flex flex-col justify-between">
      <div>
        <div className="flex justify-end mt-[20px] mr-[20px] mb-[19px] ">
          <ButtonIcon
            onClick={closeAside}
            icon="/x.png"
            variant="headerNavBtn"
            width={20}
            height={20}
            alt="Закрыть"
          />
        </div>

        <div className="flex mb-[32px] justify-center">
          <SearchBar
            placeholder="Найти"
            variant="headerAside"
            leftButton
            altLeftIcon="Поиск"
            altRightIcon="Очистка"
            onChange={(e) => setSearchValue(e.target.value)}
            onLeftIconClick={() => {
              handleSearch();
              closeAside();
            }}
          />
        </div>

        <nav className="flex relative flex-col  font-medium text-black gap-[32px] ml-[20px]">
          <div>
            <Link onClick={() => closeAside()} href="/#about">
              О нас
            </Link>
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
              alt="Меню"
            />

            {menuOpen && (
              <ul className="mt-[10px] ml-[12px] max-h-[301px] overflow-y-auto text-sm font-normal space-y-[8px] text-[#594700]">
                {categorie.map((item) => (
                  <li key={item.id}>
                    <Link
                      onClick={() => closeAside()}
                      href={`/category/${item.id}`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div>
            <Link onClick={() => closeAside()} href="/contact">
              Контакты
            </Link>
          </div>
          <div>
            <Link onClick={() => closeAside()} href="/delivery-policy">
              Условия доставки
            </Link>
          </div>
        </nav>
      </div>

      {isAuthenticated && (
        <div className="ml-[20px] ">
          <ButtonIcon
            width={22}
            height={24}
            onClick={async () => {
              await logoutAction();
              logout();
              closeAside();
            }}
            iconPosition="left"
            icon="/logout.png"
            variant="headerNavBtn"
            title="Выйти"
            alt="Выйти"
          />
        </div>
      )}

      <div className="flex text-2xl mb-[20px] font-semibold text-white justify-center">
        8 992-225-55-12
      </div>
    </div>
  );
}

export default HeaderSideBar;

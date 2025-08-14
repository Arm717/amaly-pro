"use client";
import React, { useEffect, useState } from "react";
import Input from "../../input/Input";
import Text from "../../text/Text";
import ButtonIcon from "../../button/buttonIcon/ButtonIcon";
import HeaderSideBar from "./header-side-bar/HeaderSideBar";
import LinkImage from "../../link-image/LinkImage";
// import { useProductContext } from "@/app/context/useProductContext";
import { HeaderProps } from "../Header";
import useSearchHook from "./hooks/useSearchHook";
import SearchBar from "../header-search-bar/HeaderSearchBar";
import HeaderSearchBar from "../header-search-bar/HeaderSearchBar";

function HeaderRightSide({ categorie }: HeaderProps) {
  const {setSearchValue, handleSearch} = useSearchHook();
  const [openSearch, setOpenSearch] = useState(false);
  const [openBurger, setOpenBurger] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  // const { basketQuantity } = useProductContext();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1524px)");
    const handleResize = () => setIsMobile(mediaQuery.matches);

    handleResize();
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <div
      className="flex items-center gap-10 justify-end w-[690px]  max-2xl:w-[258px]  max-2xl:gap-5 max-lg:w-[100px] max-sm:gap-3
    "
    >
      {openSearch && !isMobile ? (
        <HeaderSearchBar
          placeholder="Найти"
          leftButton
          rightButton
          variant="headerInput"
          altLeftIcon="Поиск"
          altRightIcon="Очистка"
          onChange={(e) => setSearchValue(e.target.value)}
          onLeftIconClick={() => handleSearch()}
          onRightIconClick={() => setOpenSearch(false)}
        />
      ) : (
        <ButtonIcon
          width={24}
          height={24}
          variant="icon"
          icon="/searchLogo.png"
          onClick={() => (isMobile ? setOpenBurger(true) : setOpenSearch(true))}
          alt="Поиск"
        />
      )}

      <ButtonIcon width={24} height={24} variant="icon" icon="/userIcon.png " alt="userIcon" />

      <LinkImage
        width={24}
        height={24}
        url="/basket"
        variant="basket"
        title={`0`}
        icon="/basket.png"
        alt="basket"
      />

      <div className="lg:hidden max-sm:pr-2">
        <ButtonIcon
          onClick={() => setOpenBurger((prev) => !prev)}
          width={24}
          height={24}
          variant="icon"
          icon="/burger.png"
          alt="burger"
        />
      </div>

      {openBurger && (
        <HeaderSideBar
          categorie={categorie}
          closeAside={() => setOpenBurger((prev) => !prev)}
        />
      )}

      <a href="tel:+79856486681" className="max-lg:hidden">
        <Text
          className="text-white text-2xl font-firaGo font-semibold max-2xl:font-medium max-2xl:text-lg"
          as="span"
          fontSize="md"
          value="8 992-225-55-12"
        />
      </a>
    </div>
  );
}

export default HeaderRightSide;

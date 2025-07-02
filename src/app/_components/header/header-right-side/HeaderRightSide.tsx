"use client";
import React, { useEffect, useState } from "react";
import Input from "../../input/Input";
import Text from "../../text/Text";
import ButtonIcon from "../../button/buttonIcon/ButtonIcon";
import { ICategorys } from "@/app/types";
import HeaderSideBar from "./header-side-bar/HeaderSideBar";

function HeaderRightSide({ category }: ICategorys) {
  const [openSearch, setOpenSearch] = useState(false);
  const [openBurger, setOpenBurger] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");
    const handleResize = () => setIsMobile(mediaQuery.matches);

    handleResize();
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <div
      className="flex items-center gap-10 justify-end 
  w-[650px] 
  max-2xl:w-[550px] 
  max-lg:w-[300px] 
  max-sm:w-[250px] 
  max-2xl:gap-5 
  max-sm:gap-3
    "
    >
      {openSearch && !isMobile ? (
        <Input
          placeholder="Найти"
          variant="headerInput"
          leftIcon="/searchLogo.png"
          rightIcon="/x.png"
          altLeftIcon="Поиск"
          altRightIcon="Очистка"
          onRightIconClick={() => setOpenSearch(false)}
        />
      ) : (
        <ButtonIcon
          width={24}
          height={24}
          variant="icon"
          icon="/searchLogo.png"
          onClick={() => (isMobile ? setOpenBurger(true) : setOpenSearch(true))}
        />
      )}

      <ButtonIcon width={24} height={24} variant="icon" icon="/userIcon.png" />

      <div className="lg:hidden max-sm:pr-2">
        <ButtonIcon
          onClick={() => setOpenBurger((prev) => !prev)}
          width={24}
          height={24}
          variant="icon"
          icon="/burger.png"
        />
      </div>

      {openBurger && (
        <HeaderSideBar
          closeAside={() => setOpenBurger((prev) => !prev)}
          category={category}
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

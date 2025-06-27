"use client";
import React, { useState } from "react";
import Input from "../../input/Input";
import Text from "../../text/Text";
import ButtonIcon from "../../button/buttonIcon/ButtonIcon";
import HeaderSectionRight from "./header-section-right/HeaderSectionRight";
import { ICategorys } from "@/app/types";

function HeaderRightSide({ category }: ICategorys) {
  const [openSearch, setOpenSearch] = useState(false);
  const  [openBurger, setOpenBurger] = useState(false)
  return (
    <div className="flex re items-center gap-10 w-[650px] justify-end max-2xl:w-[250px] max-2xl:gap-5">
      {openSearch ? (
        <Input
          placeholder="Найти"
          variant="headerInput"
          leftIcon="/searchLogo.png"
          rightIcon="/x.png"
          altLeftIcon="Поиск"
          altRightIcon="Очистка"
          onRightIconClick={() => setOpenSearch((prev) => !prev)}
        />
      ) : (
        <ButtonIcon
          width={24}
          height={24}
          variant="icon"
          icon="/searchLogo.png"
          onClick={() => setOpenSearch((prev) => !prev)}
        />
      )}

      <ButtonIcon width={24} height={24} variant="icon" icon="/userIcon.png" />

      <div className="md:hidden">
        <ButtonIcon onClick={() => setOpenBurger((prev) => !prev)} width={24} height={24} variant="icon" icon="/burger.png" />
      </div>

     {openBurger && <HeaderSectionRight category={category} />} 

      <a href="tel:+79856486681" className="max-md:hidden">
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

"use client";
import React, { useState } from "react";
import Input from "../../input/Input";
import Text from "../../text/Text";
import ButtonIcon from "../../button/buttonIcon/ButtonIcon";

function HeaderRightSide() {
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <div className="flex items-center gap-10 w-[650px] justify-end">
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
  <a href="tel:+79856486681">
    <Text
      className="text-white text-2xl font-firaGo font-semibold"
      as="span"
      fontSize="md"
      value="8 992-225-55-12"
    />
  </a>
</div>

  );
}

export default HeaderRightSide;

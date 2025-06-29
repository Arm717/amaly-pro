import React from "react";

import HeaderNav from "./header-nav/HeaderNav";
import { allCategory } from "@/app/services/allCategory";
import HeaderRightSide from "./header-right-side/HeaderRightSide";
import HeaderLogo from "./header-logo/HeaderLogo";


async function Header() {
  const category = await allCategory();

  return (
    <header className="flex w-full fixed z-20 h-[71px] px-[64px]  justify-center bg-yellow-400 max-md:px-[20px] max-2xl:px-[20px]">
      <div className="relative flex h-full w-[1780px] justify-between">
        <HeaderLogo />

        <div className="flex w-[127px]"></div>

        <HeaderNav category={category} />

        <HeaderRightSide category={category} />
      </div>
    </header>
  );
}

export default Header;

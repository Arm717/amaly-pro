import React from "react";

import Image from "next/image";

import HeaderNav from "./header-nav/HeaderNav";
import { allCategory } from "@/app/services/allCategory";
import HeaderRightSide from "./header-right-side/HeaderRightSide";
import Link from "next/link";

async function Header() {
  const category = await allCategory();

  return (
    <header className="flex  h-[71px] px-[64px] justify-center bg-yellow-400 max-md:px-[20px] max-2xl:px-[20px]">
      <div className="relative flex h-full w-[1780px] justify-between">
        <div className="absolute top-[-20px] left-[0] max-md:top-[-5px]">
          <Link href="/">
            <Image className="max-md:w-[70px] h-[120px]" src="/headerLogo.png" width={127} height={213} alt="logo" />
          </Link>
        </div>

        <div className="flex w-[127px]"></div>

        <HeaderNav category={category} />

        <HeaderRightSide />
      </div>
    </header>
  );
}

export default Header;

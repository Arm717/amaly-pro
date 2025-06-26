import React from "react";

import Image from "next/image";

import HeaderNav from "./header-nav/HeaderNav";
import { allCategory } from "@/app/services/allCategory";
import HeaderRightSide from "./header-right-side/HeaderRightSide";
import Link from "next/link";

async function Header() {
  const category = await allCategory();

  return (
    <header className="  flex w-full h-[71px] justify-center bg-yellow-400">
      <div className="relative flex h-full w-[1780px] justify-between">
        <div className="absolute top-[-20px] left-[0]">
          <Link href='/'>
            <Image src="/headerLogo.png" width={127} height={213} alt="logo" />
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

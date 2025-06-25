import React from "react";

import Image from "next/image";
import Link from "next/link";

import Text from "../text/Text";
import HeaderNav from "./header-nav/HeaderNav";

function Header() {
  return (
    <header className="relative font-Fira GO flex w-full h-[71px] bg-yellow-400">
      <div className="absolute top-[-20px] left-[20px]">
        <Image src="/headerLogo.png" width={127} height={213} alt="logo" />
      </div>

      
        <HeaderNav />
      

      <div className="absolute flex top-[20px] right-[40px] gap-10">
        <Image src="/searchLogo.png" width={24} height={24} alt="serch" />
        <Text
          className="text-white text-xl font-bold"
          as="span"
          value="8 992-225-55-12"
        />
      </div>
    </header>
  );
}

export default Header;

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

      <div className="flex relative items-center justify-center w-full  text-sm">
        <nav className="flex фонт-медиум gap-6 w-[225px]">
          <Link className="" href="/1">
            О нас
          </Link>
          <Link href="/2">Меню</Link>
          <Link href="/3">Контакты</Link>
        </nav>
        <HeaderNav />
      </div>

      <div className="absolute flex top-[20px] right-[40px] gap-10">
        <Image src="/searchLogo.png" width={24} height={24} alt="serch" />
        <Text className="text-white text-xl font-bold" as="span" value="8 992-225-55-12" />
      </div>
    </header>
  );
}

export default Header;

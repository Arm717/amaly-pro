import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./header.css";

function Header() {
  return (
    <header className="relative flex w-full h-[71px] bg-yellow-400">
      <div className="absolute top-[-20px] left-0">
        <Image src="/headerLogo.png" width={127} height={213} alt="logo" />
      </div>

      <div className="flex items-center justify-center w-full  text-sm">
        
        <nav className="flex gap-6 w-[225px]" >
          <Link href="#">О нас</Link>
          <Link href="#">Меню</Link>
          <Link href="#">Контакты</Link>
        </nav>

        <div className="flex gap-10">
        <Image src="/searchLogo.png" width={24} height={24} alt="serch" />
        <span>8 992-225-55-12</span>
      </div>
      </div>

      

    </header>
  );
}

export default Header;

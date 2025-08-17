"use client";
import React from "react";

import HeaderNav from "./header-nav/HeaderNav";
import HeaderRightSide from "./header-right-side/HeaderRightSide";
import HeaderLogo from "./header-logo/HeaderLogo";
import { usePathname } from "next/navigation";
import { IAllCategory } from "@/types/types";
import HeroSection from "./header-section/HeaderSection";

export interface HeaderProps {
  categorie: IAllCategory;
}
function Header({ categorie }: HeaderProps) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <>
      <header className="sticky flex top-0 z-[999]">
        <div className="flex w-full h-[71px] px-[64px] justify-center bg-[var(--yellow)] max-2xl:px-[20px] max-md:px-[20px] ">
          <div className="relative flex h-full w-[2500px] justify-between">
            <HeaderLogo alwaysVisible />
            <div className="flex w-[127px] max-sm:w-[50px]"></div>
            <HeaderNav categorie={categorie} />
            <HeaderRightSide categorie={categorie} />
          </div>
        </div>
      </header>
      {isHomePage && <HeroSection />}
    </>
  );
}

export default Header;

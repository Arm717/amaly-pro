import React from "react";

import HeaderNav from "./header-nav/HeaderNav";
import { allCategory } from "@/app/services/allCategory";
import HeaderRightSide from "./header-right-side/HeaderRightSide";
import HeaderLogo from "./header-logo/HeaderLogo";
import HeaderSection from "./header-section/HeaderSection";

interface IHeader {
  sectionVisible?: boolean;
}

async function Header({ sectionVisible }: IHeader) {
  const category = await allCategory();
  
  
  return (
    <>
      <header className="sticky top-0 z-50">
        <div className="flex w-full h-[71px] px-[64px] justify-center bg-[var(--yellow)] max-2xl:px-[20px] max-md:px-[20px] ">
          <div className="relative flex h-full w-[2500px] justify-between">
            <HeaderLogo />
            <div className="flex w-[127px] max-sm:w-[50px]"></div>
            <HeaderNav category={category} />
            <HeaderRightSide category={category} />
          </div>
        </div>
      </header>
      {sectionVisible && <HeaderSection />}
    </>
  );
}

export default Header;

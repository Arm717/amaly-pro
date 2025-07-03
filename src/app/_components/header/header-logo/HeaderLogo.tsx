"use client";
import React from "react";
import useScrollPosition from "../../../_hooks/useScrollPosition";
import Link from "next/link";
import Image from "next/image";

interface IHeaderLogo {
  alwaysVisible?: boolean;
}

function HeaderLogo({ alwaysVisible = false }: IHeaderLogo) {
  const isScrolled = useScrollPosition(50);
  const visible = alwaysVisible || isScrolled;

  return (
    <div className="absolute z-30 top-[-15px] left-[0] h-[200px] max-xl:top-[-5px] max-sm:top-[-5px] max-sm:pl-[20px] max-lg: w-[110px] max-lg:h-[190px] max-lg:top-[-7px]">
      <Link className="w-[100%]" href="/">
        <Image
          className={`w-[127px] h-[213px] transition-all duration-700 ease-in-out origin-top-left ${
            visible
              ? "opacity-100 scale-100 bg-white translate-x-0 translate-y-0"
              : "2xl:opacity-100 2xl:scale-[2]  2xl:translate-x-[230px] 2xl:translate-y-[30px]  2xl:pointer-events-none max-2xl:bg-white"
          } max-xl:w-[100px] max-xl:h-[180px] max-sm:w-[56px] max-sm:h-[95px] max-sm:opacity-100 scale-100 translate-x-0 translate-y-0`}
          src="/logo.png"
          width={127}
          height={213}
          alt="logo"
        />
      </Link>
    </div>
  );
}

export default HeaderLogo;

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
    <div className="absolute z-30 top-[-17px] left-[0] max-sm:top-[-5px] max-sm:pl-[20px] max-lg: w-[110px] max-lg:h-[190px]">
      <Link href="/">
        <Image
          className={`transition-all duration-700 ease-in-out origin-top-left ${
            visible
              ? "opacity-100 scale-100 translate-x-0 translate-y-0"
              : "opacity-0 scale-[2]  translate-x-[230px] translate-y-[10px] pointer-events-none"
          } max-sm:w-[56px] max-sm:h-[95px] max-sm:opacity-100 scale-100 translate-x-0 translate-y-0`}
          src="/headerLogo.png"
          width={127}
          height={213}
          alt="logo"
        />
      </Link>
    </div>
  );
}

export default HeaderLogo;

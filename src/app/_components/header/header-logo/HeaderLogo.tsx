"use client";
import React from "react";
import useScrollPosition from "../../../_hooks/useScrollPosition";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface IHeaderLogo {
  alwaysVisible?: boolean;
}

function HeaderLogo({ alwaysVisible = false }: IHeaderLogo) {
  const isScrolled = useScrollPosition(50);
  const pathname = usePathname();

  const visible = pathname !== "/" || isScrolled;

  return (
    <Link
      className="absolute z-30 top-[-10px] left-0 max-xl:top-[-5px] max-sm:top-[-5px] max-sm:pl-[20px]"
      href="/"
    >
      <Image
        className={`
    transition-all duration-700 ease-in-out origin-top-left
    ${
      visible
        ? "w-[111px] h-[200px] opacity-100 translate-x-0 translate-y-0 bg-white xsm:w-[59px] xsm:h-[95px]  sm:w-[56px] sm:h-[95px] lg:w-[100px] lg:h-[180px] xl:w-[111px] xl:h-[200px] shadow-[0_2px_16px_0_hsla(0,0%,64%,0.3)]"
        : "2xl:w-[245px] 2xl:h-[500px] opacity-0 2xl:translate-x-[230px] 2xl:translate-y-[30px] "
    }
    xsm:w-[59px] xsm:h-[95px]
    sm:w-[56px] sm:h-[95px]
    lg:w-[100px] lg:h-[180px]
    xl:w-[111px] xl:h-[200px]
    max-2xl:bg-white
    opacity-100
  `}
        src="/logo.png"
        width={245}
        height={500}
        alt="logo"
      />
    </Link>
  );
}

export default HeaderLogo;

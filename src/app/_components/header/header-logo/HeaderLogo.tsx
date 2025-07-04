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
    <div className="absolute z-30 top-[-10px] left-0 max-xl:top-[-5px] max-sm:top-[-5px] max-sm:pl-[20px]">
      <Link href="/">
        <Image
          className={`
            transition-all duration-700 ease-in-out origin-top-left
            ${visible
              ? `
                w-[111px] h-[200px] translate-x-0 translate-y-0
                max-2xl:w-[111px] max-2xl:h-[200px] max-2xl:translate-x-0 max-2xl:translate-y-0  bg-white
              `
              : 
              `
                w-[245px] h-[500px] translate-x-[230px] translate-y-[30px]
                max-2xl:w-[111px] max-2xl:h-[200px] max-2xl:translate-x-0 max-2xl:translate-y-0
              `}
              max-2xl:bg-white
                max-xl:w-[100px] max-xl:h-[180px]
                max-sm:!w-[56px] max-sm:!h-[95px]
                opacity-100`
              }
          src="/logo.png"
          width={245}
          height={500}
          alt="logo"
        />
      </Link>
    </div>
  );
}

export default HeaderLogo;

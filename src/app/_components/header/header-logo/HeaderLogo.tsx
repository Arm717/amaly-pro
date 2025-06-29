"use client";
import React from "react";
import useScrollPosition from "../../_hooks/useScrollPosition";
import Link from "next/link";
import Image from "next/image";

interface IHeaderLogo {
  alwaysVisible?: boolean
}

function HeaderLogo({ alwaysVisible = false }: IHeaderLogo) {
  const isScrolled = useScrollPosition(100);
  const visible = alwaysVisible || isScrolled;

  return (
    <div className="absolute top-[-20px] left-[0]">
      <Link href="/">
        <Image
          className={`transition-all duration-700 ease-in-out origin-top-left ${
            visible
              ? "opacity-100 scale-100 translate-x-0 translate-y-0"
              : "opacity-0 scale-[2] translate-x-[80px] translate-y-[80px] pointer-events-none"
          }`}
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

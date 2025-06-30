"use client";
import React from "react";
import Image from "next/image";
import Title from "../../title/Title";
import useScrollPosition from "../../../_hooks/useScrollPosition";
import Link from "next/link";

function HeaderSection() {
  const isScrolled = useScrollPosition(50);

  return (
    <section className="relative flex w-full min-h-[731px] bg-[url(/headerBackgrownd.png)] bg-[length:100%_100%] bg-center bg-no-repeat ">
      {/* Левая маска */}
      <Image
        className="absolute left-0 top-[60px] max-3xl:w-[300px] max-3xl:h-[500px]"
        src="/leftMaskImage.png"
        width={389}
        height={634}
        alt=""
      />

      <div>
        {/* Логотип в центре */}
        <Link href="/">
          <Image
            src="/logo.png"
            width={244}
            height={438}
            className={`absolute left-[291px] z-30 origin-top-left transition-all duration-700 ease-in-out ${
              isScrolled
                ? "opacity-0 scale-[0.5] translate-x-[-220px] translate-y-[-20px] pointer-events-none"
                : "opacity-100 scale-100 translate-x-0 translate-y-0"
            }`}
            alt=""
          />

          <Image
            className={`absolute z-20 top-[51px] left-[270px] filter brightness-0 invert transition-all duration-700 ease-in-out ${
              isScrolled
                ? "opacity-0 -translate-x-[200px] -translate-y-[10px] pointer-events-none"
                : "opacity-100 translate-x-0 translate-y-0"
            }`}
            src="/maskGroup.png"
            width={350}
            height={137}
            alt=""
          />
        </Link>

        <Image
          className="absolute z-10 top-[159px] left-[490px] shake-horizontal"
          src="/maskSalad.png"
          width={512}
          height={526}
          alt=""
        />

        <div className="w-[556px] h-[270px] absolute top-[186px] right-[341px]">
          <Title
           
            className="text-[78px] font-normal  leading-[116%] max-3xl:text-sm"
            as="h2"
            value="Даже ангелы иногда совершают преступления ;)"
          />
        </div>
      </div>

      {/* Правая маска */}
      <Image
        className="absolute right-0 top-[64px]"
        src="/rightMaskImage.png"
        width={440}
        height={634}
        alt=""
      />
    </section>
  );
}

export default HeaderSection;

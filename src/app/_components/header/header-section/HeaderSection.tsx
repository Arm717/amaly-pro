"use client";
import React from "react";
import Image from "next/image";
import Title from "../../title/Title";
import useScrollPosition from "../../../_hooks/useScrollPosition";
import Link from "next/link";

function HeaderSection() {
  const isScrolled = useScrollPosition(50);

  return (
    <section className="relative flex w-full min-h-[731px] bg-[url(/headerBackgrownd.png)]  bg-[length:100%_100%] bg-center bg-no-repeat">
      {/* Левая маска */}
      <Image
        className="
          absolute left-0 top-[60px] w-[389px] h-[634px]
          max-xl:top-[40px] max-xl:w-[250px] max-xl:h-[450px]
          max-md:top-[20px] max-md:w-[180px] max-md:h-[300px]
          max-sm:top-[10px] max-sm:w-[100px] max-sm:h-[180px]
        "
        src="/leftMaskImage.png"
        width={389}
        height={634}
        alt=""
      />

      <div className="relative w-full">
        {/* Логотип */}
        <Link href="/">
         

          <Image
            className={`absolute top-[51px] left-[270px] w-[350px] z-10 filter brightness-0 invert transition-all duration-700 ease-in-out
              max-xl:left-[80px] max-xl:top-[70px] max-xl:w-[280px]
              max-md:left-[50px] max-md:top-[90px] max-md:w-[200px]
              max-sm:left-[20px] max-sm:top-[80px] max-sm:w-[130px]
              ${
                isScrolled
                  ? "opacity-0 -translate-x-[80px] -translate-y-[10px] pointer-events-none"
                  : "opacity-100 translate-x-0 translate-y-0"
              }`}
            src="/maskGroup.png"
            width={350}
            height={137}
            alt=""
          />
        </Link>

        {/* Салат */}
        <Image
          className="absolute left-[490px] top-[159px] w-[512px] z-10
            max-xl:left-[300px] max-xl:top-[250px] max-xl:w-[400px]
            max-md:left-[120px] max-md:top-[200px] max-md:w-[300px]
            max-sm:left-[30px] max-sm:top-[240px] max-sm:w-[160px]
            shake-horizontal
          "
          src="/maskSalad.png"
          width={512}
          height={526}
          alt=""
        />

        {/* Заголовок */}
        <div
          className="absolute right-[341px] top-[186px] w-[556px]
            max-xl:right-[80px] max-xl:top-[100px] max-xl:w-[400px]
            max-md:right-[40px] max-md:top-[80px] max-md:w-[300px]
            max-sm:right-[10px] max-sm:top-[30px] max-sm:w-[240px]
          "
        >
          <Title
            className="text-[78px] font-normal font-neucha leading-[116%]
              max-xl:text-5xl
              max-md:text-3xl
              max-sm:text-xl
            "
            as="h2"
            value="Даже ангелы иногда совершают преступления ;)"
          />
        </div>
      </div>

      {/* Правая маска */}
      <Image
        className="absolute right-0 top-[64px] w-[440px] h-[634px]
          max-xl:top-[50px] max-xl:w-[280px] max-xl:h-[500px]
          max-md:top-[30px] max-md:w-[180px] max-md:h-[300px]
          max-sm:top-[10px] max-sm:w-[100px] max-sm:h-[180px]
        "
        src="/rightMaskImage.png"
        width={440}
        height={634}
        alt=""
      />
    </section>
    
  );
}

export default HeaderSection;



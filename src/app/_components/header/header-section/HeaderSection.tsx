"use client";
import React from "react";
import Image from "next/image";
import Title from "../../title/Title";
import useScrollPosition from "../../../_hooks/useScrollPosition";
import Link from "next/link";

function HeaderSection() {
  const isScrolled = useScrollPosition(50);

  return (
    <section className="relative flex w-full min-h-[731px] bg-[url(/headerBackgrownd.png)] bg-cover bg-center bg-no-repeat">
      {/* Левая маска */}
      <Image
        className="
          absolute left-0 top-[30px] w-[160px] h-[300px]
          md:top-[40px] md:w-[250px] md:h-[450px]
          xl:top-[60px] xl:w-[389px] xl:h-[634px]
          3xl:top-[60px] 3xl:w-[420px] 3xl:h-[650px]
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
            src="/logo.png"
            width={244}
            height={438}
            className={`absolute left-[20px] top-[60px] w-[140px] z-30 origin-top-left transition-all duration-700 ease-in-out
              md:left-[100px] md:w-[180px]
              xl:left-[291px] xl:w-[244px]
              3xl:left-[400px] 3xl:w-[270px]
              ${
                isScrolled
                  ? "opacity-0 scale-[0.5] translate-x-[-220px] translate-y-[-20px] pointer-events-none"
                  : "opacity-100 scale-100 translate-x-0 translate-y-0"
              }`}
            alt=""
          />

          <Image
            className={`absolute top-[100px] left-[20px] w-[200px] z-20 filter brightness-0 invert transition-all duration-700 ease-in-out
              md:top-[70px] md:left-[80px] md:w-[280px]
              xl:top-[51px] xl:left-[270px] xl:w-[350px]
              3xl:left-[370px] 3xl:top-[50px] 3xl:w-[380px]
              ${
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

        {/* Салат */}
        <Image
          className="absolute left-[40px] top-[300px] w-[250px] z-10 shake-horizontal
            md:left-[300px] md:top-[250px] md:w-[400px]
            xl:left-[490px] xl:top-[159px] xl:w-[512px]
            3xl:left-[650px] 3xl:top-[159px] 3xl:w-[550px]"
          src="/maskSalad.png"
          width={512}
          height={526}
          alt=""
        />

        {/* Заголовок */}
        <div
          className="absolute right-[10px] top-[30px] w-[280px]
            md:right-[80px] md:top-[100px] md:w-[400px]
            xl:right-[341px] xl:top-[186px] xl:w-[556px]
            3xl:right-[400px] 3xl:top-[186px] 3xl:w-[600px]"
        >
          <Title
            className="text-3xl font-normal font-neucha leading-[116%]
              md:text-5xl
              xl:text-[78px]
              3xl:text-[84px]"
            as="h2"
            value="Даже ангелы иногда совершают преступления ;)"
          />
        </div>
      </div>

      {/* Правая маска */}
      <Image
        className="absolute right-0 top-[30px] w-[160px] h-[300px]
          md:top-[50px] md:w-[280px] md:h-[500px]
          xl:top-[64px] xl:w-[440px] xl:h-[634px]
          3xl:top-[64px] 3xl:w-[470px] 3xl:h-[670px]"
        src="/rightMaskImage.png"
        width={440}
        height={634}
        alt=""
      />
    </section>
  );
}

export default HeaderSection;

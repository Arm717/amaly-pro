"use client";
import React from "react";
import Image from "next/image";
import Title from "../../title/Title";
import useScrollPosition from "../../../_hooks/useScrollPosition";
import Link from "next/link";

function HeaderSection() {
  const isScrolled = useScrollPosition(50);

  return (
    <section className="flex relative justify-between  h-[731px] overflow-hidden bg-[url(/headerBackgrownd.png)]  bg-[length:100%_100%] bg-center bg-no-repeat">
      <div className="border border-black ">
        <Image
          className="
          w-[389px] h-[634px]
          max-2xl:w-[360px] max-xl:h-[500px]
          max-sm:w-[110px] max-sm:h-[232px]
        "
          src="/leftMaskImage.png"
          width={330}
          height={634}
          alt=""
        />
      </div>

      <div>
        <Image
            className={`absolute top-[51px] left-[270px] w-[350px] z-10 filter brightness-0 invert transition-all duration-700 ease-in-
              max-2xl:hidden
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
      </div>

      <div  className="flex border border-gray-700 max-w-[1200px] justify-center m-auto  max-2xxl:max-w-[760px] max-2xl:flex-col-reverse max-2xl:w-[345px] max-2xl:h-[500px] max-sm:w-[178px] max-sm:h-[100px]">
        <div className={`max-w-[500px] border border-white max-h-[500px] shake-horizontal`}>
          <Image
            className="w-[512px] 
            max-xl:w-[300px]
          "
            src="/maskSalad.png"
            width={512}
            height={526}
            alt=""
          />
        </div>

        <Title
          className="text-[78px] font-normal font-neucha leading-[116%] max-2xl:text-5xl
            
            "
          as="h2"
          value="Даже ангелы иногда совершают преступления ;)"
        />
      </div>

      <div className="">
        
        <Image
          className="w-[440px] h-[634px] border border-red max-2xl:w-[360px] max-xl:h-[500px] max-sm:w-[110px] max-sm:h-[232px]"
          src="/rightMaskImage.png"
          width={440}
          height={634}
          alt=""
        />
      </div>
    </section>
  );
}

export default HeaderSection;

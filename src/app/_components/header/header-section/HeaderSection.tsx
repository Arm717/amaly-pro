"use client";
import React from "react";
import Image from "next/image";
import Title from "../../title/Title";
import useScrollPosition from "../../../_hooks/useScrollPosition";

function HeaderSection() {
  const isScrolled = useScrollPosition(50);

  return (
    <section
      className="flex box-border relative  justify-between  h-[731px]  bg-[url(/headerBackgrownd.png)]  bg-[length:100%_100%] bg-center bg-no-repeat
    max-lg:h-[500px]
    max-sm:!h-[338px]
    "
    >
      <div className="">
        <Image
          className="
          border  border-black  
          w-[200px] h-[332px]
          sm:w-[300px] sm:h-[400px]
          lg:w-[430px] lg:h-[600px]
          2xl:w-[389px] 2xl:h-[634px]
        "
          src="/leftMaskImage.png"
          width={330}
          height={634}
          alt=""
        />
      </div>

      <div>
  <Image
    className={`
      absolute 
      top-[80px] left-[20px] w-[130px]                 // mobile (по умолчанию)
      sm:top-[90px] sm:left-[50px] sm:w-[200px]        // ≥ 640px
      md:top-[70px] md:left-[80px] md:w-[280px]        // ≥ 768px
      xl:top-[51px] xl:left-[270px] xl:w-[350px]       // ≥ 1280px
      2xl:block                                        // ≥ 1536px (показываем снова)
      hidden                                           // скрыт по умолчанию
      z-10 filter brightness-0 invert 
      transition-all duration-700 ease-in-out
      ${isScrolled 
        ? "opacity-0 -translate-x-[80px] -translate-y-[10px] pointer-events-none"
        : "opacity-100 translate-x-0 translate-y-0"
      }
    `}
    src="/maskGroup.png"
    width={350}
    height={137}
    alt=""
  />
</div>

      <div
        className="flex border border-gray-700 max-w-[1200px] justify-center m-auto  
                      max-2xxl:max-w-[760px]
                      max-2xl:flex-col-reverse 
                      max-2xl:w-[345px] 
                      max-2xl:h-[500px]  
                    "
      >
        <div
          className={`max-w-[500px] border border-white max-h-[500px] shake-horizontal`}
        >
          <Image
            className="
            
            w-[512px] 
            
            max-xl:w-[300px]
            max-lg:!w-[200px]
            max-lg:!h-[200px]
          "
            src="/maskSalad.png"
            width={512}
            height={526}
            alt=""
          />
        </div>

        <Title
          className="
            text-base     
            sm:text-xl     
            lg:text-4xl   
            2xl:text-[78px] 
            2xl:leading-[116%]           
            font-normal 
            font-neucha 
          "
          as="h2"
          value="Даже ангелы иногда совершают преступления ;)"
        />
      </div>

      <div className="">
        <Image
          className="
      w-[110px] h-[232px]
      sm:w-[300px] sm:h-[400px]
      lg:w-[400px] lg:h-[500px]
      xl:w-[400px] xl:h-[600px]   
      2xl:w-[440px] 2xl:h-[634px]
      border border-red
    "
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

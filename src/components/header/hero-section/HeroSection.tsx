"use client";
import React from "react";
import Image from "next/image";
import Title from "../../title/Title";
import useScrollPosition from "../hooks/useScrollPosition";

function HeroSection() {
  const isScrolled = useScrollPosition(50);

  return (
    <section
      className="flex box-border relative justify-between  h-[731px]  bg-[url(/headerBackgrownd.png)]  bg-[length:100%_100%] bg-center bg-no-repeat
                  max-lg:h-[500px]
                  max-sm:!h-[338px]
                 "
    >
      <div className="">
        <Image
          className="
                     w-[292px] h-[332px]
                     object-cover
                     xsm:w-[292px] xsm:h-[300px]
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
                top-[80px] left-[20px] w-[130px]
                sm:top-[90px] sm:left-[50px] sm:w-[200px]   
                md:top-[70px] md:left-[80px] md:w-[280px]    
                xl:top-[51px] xl:left-[270px] xl:w-[350px]   
                2xl:block    
                hidden     
                z-10 filter brightness-0 invert 
                transition-all duration-700 ease-in-out
      ${
        isScrolled
          ? "opacity-0 -translate-x-[80px] -translate-y-[10px] pointer-events-none"
          : "opacity-100 translate-x-0 translate-y-0"
      }
    `}
          src="/cloud.png"
          width={350}
          height={137}
          alt=""
        />
      </div>

      <div
        className="flex flex-col-reverse w-[178px] h-[500px] gap-[21px] justify-center m-auto 
                    xsm:w-[178px]
                    xsm:h-[300px]
                    2xl:flex-row
                    2xl:w-[1090px]
                    2xl:h-[600px]
                    2xl:max-w-[1090px]
                   "
      >
        <div className="self-end  shake-horizontal w-[200px] h-[200px] 
                          xsm:w-[150px]
                          xsm:h-[150px]
                          lg:w-[300px] 
                          lg:h-auto 
                          xl:w-[512px]
                          xl:h-[526px]
                        "
      >
          <Image
            className="w-full h-full object-contain"
            src="/maskSalad.png"
            width={512}
            height={526}
            alt=""
          />
        </div>

        <div className="w-full 2xl:max-w-[552px]">
          <Title
            className="
                        text-base 
                        sm:text-xl 
                        lg:text-4xl 
                        2xl:text-6xl 
                        2xl:mt-20 
                        2xl:leading-[116%] 
                        2xl:text-[78px] 
                        font-normal 
                        font-neucha
                      "
            as="h2"
            value="Даже ангелы иногда совершают преступления ;)"
          />
        </div>
      </div>

      <div className="">
        <Image
          className="
                      w-[250px] h-[232px]
                      object-cover
                      xsm:w-[250px] xsm:h-[300px]
                      sm:w-[300px] sm:h-[400px]
                      lg:w-[400px] lg:h-[500px]
                      xl:w-[400px] xl:h-[600px]   
                      2xl:w-[440px] 2xl:h-[634px]
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

export default HeroSection;
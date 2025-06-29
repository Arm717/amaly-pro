"use client";
import React from "react";
import Image from "next/image";
import Title from "../../title/Title";
import useScrollPosition from "../../_hooks/useScrollPosition";


function HeaderSection() {
  const isScrolled = useScrollPosition(100);

  return (
    <section className="relative flex w-full min-h-[731px] bg-[url(/headerBackgrownd.png)] bg-[length:100%_100%] bg-center bg-no-repeat">
      {/* Левая маска */}
      <Image
        className="absolute left-0 top-[60px]"
        src="/leftMaskImage.png"
        width={389}
        height={634}
        alt=""
      />

      <div>
        {/* Логотип в центре */}
        <Image
          src="/logo.png"
          width={244}
          height={438}
          className={`absolute left-[291px] z-20 transition-all duration-700 ${
            isScrolled ? "opacity-0 -translate-y-20" : "opacity-100 translate-y-0"
          }`}
          alt=""
        />

        <Image
        className={`absolute z-30 top-[51px] left-[270px] filter brightness-0 invert transition-all duration-700 ${
            isScrolled ? "opacity-0 -translate-y-20" : "opacity-100 translate-y-0"
          }`}
        src="/maskGroup.png"
        width={350}
        height={137}
        alt=""
      />

        
        <Image
        className="absolute z-10 top-[159px] left-[700px] shake-horizontal"
        src="/maskSalad.png"
        width={512}
        height={526}
        alt=""
      />

        <div className="w-[556px] h-[270px] absolute top-[186px] right-[341px]">
          <Title
            style={{ fontFamily: "Neucha" }}
            className="text-[78px] font-normal leading-[116%]"
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

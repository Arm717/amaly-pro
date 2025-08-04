"use client";
import Image from "next/image";
import React from "react";
import clsx from "clsx";
import Title from "../Title";

type ITitle = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface ITitleImageProps {
  as: ITitle;
  value: string;
  cloudVariant: cloudVariant;
}

type cloudVariant = "oneCloud" | "twoCloud" | "categoryCloud";

const cloudImageVariant = {
  oneCloud: {
    src: "/cloud.png",
    size: { width: 249, height: 97 },
    styles:
      "w-[167px] h-[64px] xsm:w-[167px] xsm:h-[64px]  lg:w-[249px] lg:h-[102px]",
    textSize: "z-50 text-xl md:text-2xl lg:text-3xl ",
    alt: "cloud image",
  },
  twoCloud: {
    src: "/twoCloud.png",
    size: { width: 395, height: 102 },
    styles:
      "w-[273px] h-[64px] xsm:w-[273px] xsm:h-[64px] lg:w-[395px] lg:h-[102px]",
    textSize: "text-lg md:text-xl lg:text-2xl",
    alt: "two cloud image",
  },
  categoryCloud: {
    src: "/categoryCloud.png",
    size: { width: 139, height: 55 },
    styles:
      "w-[90px] h-[60px] xsm:w-[90px] xsm:h-[60px] lg:w-[139px] lg:h-[55px]",
    textSize: "text-sm xsm:text-sm  lg:text-2xl",
    alt: "category cloud image",
  },
};

const TitleImage = ({ as, value, cloudVariant }: ITitleImageProps) => {
  return (
    <div
      className={clsx("relative flex items-center justify-center font-firaGo")}
    >
      <div
        className={clsx(
          "flex shrink-0 items-center",
          cloudImageVariant[cloudVariant].styles
        )}
      >
        <Image
          className={clsx(`filter grayscale object-contain `)}
          src={cloudImageVariant[cloudVariant].src}
          width={cloudImageVariant[cloudVariant].size.width}
          height={cloudImageVariant[cloudVariant].size.height}
          alt={cloudImageVariant[cloudVariant].alt}
        />
      </div>

      <div>
        <Title
          className={clsx(
            `absolute inset-0 flex justify-center items-center text-center`,
            cloudImageVariant[cloudVariant].textSize
          )}
          as={as}
          value={value}
        />
      </div>
    </div>
  );
};

export default TitleImage;

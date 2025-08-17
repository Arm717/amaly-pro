"use client";
import React from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import Text from "../Text";

type variant = "custom"

type TextSize = "sm" | "base" | "md" | "lg" | "xlg";

type Itext = "p" | "span";

const Text_Size = {
  sm: "text-sm",
  base: "text-base",
  md: "text-2xl",
  lg: "text-4xl",
  xlg: "text-7xl",
} as const;

const Text_Variant = {
  custom: "items-center gap-2"
};

interface TextImage {
  as: Itext;
  fontSize?: TextSize;
  icon: StaticImageData | string;
  title: string;
  width: number;
  height: number;
  variant: variant;
  alt:string;
}

function TextImage({
  as,
  icon,
  title,
  width,
  height,
  variant,
  fontSize="base",
  alt
}: TextImage) {
  return (
    <div  className={`flex relative w-max ${Text_Variant[variant]}`}>
      <Image
        src={icon}
        alt={alt}
        width={width}
        height={height}
        className={``}
        unoptimized={typeof icon === "string"}
      />
      
      {title && <Text as={as} value={title} className={`${Text_Size[fontSize]}`} />}
    </div>
  );
}

export default TextImage;

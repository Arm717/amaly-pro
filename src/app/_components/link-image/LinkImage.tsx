"use client";
import React from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";

import Link from "next/link";
import Text from "../text/Text";

type variant = "basket" | "img" | "withText"

const Link_Variant = {
  basket: "absolute top-1/2 left-1/2 -translate-x-1/3 -translate-y-1/2 text-white text-xs font-bold pointer-events-none",
  img: "",
  withText:"ml-2"
};

interface LinkImageProps {
  icon: StaticImageData | string;
  title?: string | number;
  width: number;
  height: number;
  imageRepeat?: boolean;
  variant: variant;
  url: string;
  className?: string
  alt: string;
}

function LinkImage({
  icon,
  title,
  width,
  height,
  url,
  variant,
  imageRepeat,
  className,
  alt
}: LinkImageProps) {
  return (
    <Link href={url} className={`flex relative w-max`}>
      <Image
        src={icon}
        alt={alt}
        width={width}
        height={height}
        className={`${className}`}
        unoptimized={typeof icon === "string"}
      />
      {imageRepeat && (
        <Image
          src={icon}
          alt=""
          width={width}
          height={height}
          unoptimized={typeof icon === "string"}
        />
      )}
      {title && <Text as="span" value={title} className={`${Link_Variant[variant]}`} />}
    </Link>
  );
}

export default LinkImage;

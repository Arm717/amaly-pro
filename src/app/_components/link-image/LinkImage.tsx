"use client";
import React from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";

import Link from "next/link";
import Text from "../text/Text";

type variant = "basket"

const Link_Variant = {
  basket: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-xs font-bold pointer-events-none" 
};

interface LinkImageProps {
  icon: StaticImageData | string;
  title?: string;
  width: number;
  height: number;
  imageRepeat?: boolean;
  variant: variant;
  url: string;
}

function LinkImage({
  icon,
  title,
  width,
  height,
  url,
  variant,
  imageRepeat,
}: LinkImageProps) {
  return (
    <Link href={url} className={`flex relative `}>
      <Image
        src={icon}
        alt=""
        width={width}
        height={height}
        className={``}
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

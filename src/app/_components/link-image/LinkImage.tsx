"use client";
import React from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";

import Link from "next/link";
import Text from "../text/Text";

const Link_Variant = {};

interface LinkImageProps {
  icon: StaticImageData | string;
  title?: string;
  width: number;
  height: number;
  imageRepeat?: boolean;
  url: string;
}

function LinkImage({
  icon,
  title,
  width,
  height,
  url,
  imageRepeat,
}: LinkImageProps) {
  return (
    <Link href={url} className={``}>
      <Image
        src={icon}
        alt=""
        width={width}
        height={height}
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
      {title && <Text as="span" value={title} />}
    </Link>
  );
}

export default LinkImage;

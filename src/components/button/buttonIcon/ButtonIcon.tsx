"use client";
import React from "react";
import Button, { IButton } from "../Button";
import { StaticImageData } from "next/image";
import Image from "next/image";
import Text from "../../text/Text";

type TextSize = "sm" | "base" | "md" | "lg" | "xlg";

interface ButtonIconProps extends IButton {
  icon: StaticImageData | string;
  title?: string;
  width: number;
  height: number;
  iconPosition?: "left" | "right";
  textSize?: TextSize;
  alt:string;
  type:'reset'| 'submit' | 'button';
}

function ButtonIcon({
  icon,
  title,
  width,
  height,
  iconPosition = "left",
  textSize,
  className,
  alt,
  type,
  onClick}: ButtonIconProps) {
  return (
    <Button
      type={type}
      onClick={onClick}
      variant="headerNavBtn"
      className={`flex items-center gap-2 ${
        iconPosition === "right" ? "" : "flex-row-reverse"
      } ${className}`}
    >
      {title && <Text as="span"  fontSize={textSize} value={title} />}
      <Image
        src={icon}
        alt={alt}
        width={width}
        height={height}
        unoptimized={typeof icon === "string"}
      />
    </Button>
  );
}

export default ButtonIcon;

"use client";

import type { StaticImageData } from "next/image";
import Input, { IInput } from "../../input/Input";
import ButtonIcon from "@/components/button/buttonIcon/ButtonIcon";

type Variant = "headerInput" | "headerAside";

interface ISearchBar extends IInput {
  variant?: Variant;
  leftButton: boolean;
  rightButton?: boolean;
  altLeftIcon?: string;
  altRightIcon?: string;
  onLeftIconClick?: () => void;
  onRightIconClick?: () => void;
  onSubmit?: () => void;
}

const searchBarVariants: Record<
  Variant,
  {
    styles: string;
    textSize: string;
    leftIconStyles: string;
    leftIconSrc:  StaticImageData | string;
    rightIconSrc?:  StaticImageData | string;
    rightIconStyles: string;
  }
> = {
  headerInput: {
    styles:"relative flex items-center w-[350px] h-[39px] border border-black rounded-lg bg-yellow-400",
    textSize: "text-sm text-black placeholder:text-black px-[40px]",
    leftIconSrc:"/searchLogo.png",
    rightIconSrc: "/x.png",
    leftIconStyles: "absolute inset-y-0 start-0 flex items-center ps-3",
    rightIconStyles: "absolute inset-y-0 end-0 flex items-center pe-3",
  },

  headerAside: {
    styles:"relative flex items-center w-[170px] h-[39px] border border-black rounded-[4px] bg-yellow-400",
    textSize: "text-sm text-black placeholder:text-black px-[32px]",
    leftIconSrc:"/searchLogo.png",
    leftIconStyles: "absolute inset-y-0 start-0 flex items-center ps-1",
    rightIconStyles: "absolute inset-y-0 end-0 flex items-center pe-3",
  },
};

export default function HeaderSearchBar({
  variant = "headerInput",
  leftButton,
  rightButton,
  altLeftIcon = "icon",
  altRightIcon = "icon",
  onLeftIconClick,
  onRightIconClick,
  onSubmit,
  className,
  ...rest
}: ISearchBar) {
  return (
    <div className={searchBarVariants[variant].styles}>
      {leftButton && (
        <div className={searchBarVariants[variant].leftIconStyles}>
          <ButtonIcon
            icon={searchBarVariants[variant].leftIconSrc}
            width={24}
            height={24}
            variant="headerNavBtn"
            onClick={onLeftIconClick}
            alt="search button"
          />
        </div>
      )}

      <Input  className={searchBarVariants[variant].textSize} {...rest} />

      {rightButton && (
        <div className={searchBarVariants[variant].rightIconStyles}>
          <ButtonIcon
            icon={searchBarVariants[variant].rightIconSrc || ""}
            width={20}
            height={20}
            variant="headerNavBtn"
            onClick={onRightIconClick}
            alt="clese button"
          />
        </div>
      )}
    </div>
  );
}

"use client";

import type { InputHTMLAttributes } from "react";
import ButtonIcon from "@/app/_components/button/buttonIcon/ButtonIcon";
import type { StaticImageData } from "next/image";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  variant?: Variant;
  leftIcon?: StaticImageData | string;
  rightIcon?: StaticImageData | string;
  altLeftIcon?: string;
  altRightIcon?: string;
  onLeftIconClick?: () => void;
  onRightIconClick?: () => void;
}

type Variant = "headerInput" | "section" | "headerAside";

const Input_Variant: Record<Variant, string> = {
  headerInput:
    "flex relative items-center w-[350px] h-[39px] border border-black-400 rounded-lg bg-yellow-400",
  headerAside:
    "flex relative items-center w-[170px] h-[39px] border border-black-400 rounded-[4px] bg-yellow-400",
  section: "w-full border border-gray-300 rounded-md px-3 py-2",
};

function Input({
  variant = "section",
  leftIcon,
  rightIcon,
  altLeftIcon = "icon",
  altRightIcon = "icon",
  onLeftIconClick,
  onRightIconClick,
  ...rest
}: IInput) {
  return (
    <div className={Input_Variant[variant]}>
      {/* Левая иконка */}
      {leftIcon && (
        <div className="absolute inset-y-0 start-0 flex items-center ps-3">
          <ButtonIcon
            icon={leftIcon}
            width={24}
            height={24}
            variant="headerNavBtn"
            onClick={onLeftIconClick}
          />
        </div>
      )}

      <input
  {...rest}
  className={`
    w-full text-sm text-black outline-none bg-transparent
    placeholder-black
    ${leftIcon ? "pl-10" : ""}
    ${rightIcon ? "pr-10" : ""}
  `}
/>

      {/* Правая иконка */}
      {rightIcon && (
        <div className="absolute inset-y-0 end-0 flex items-center pe-3">
          <ButtonIcon
            icon={rightIcon}
            width={20}
            height={20}
            variant="headerNavBtn"
            onClick={onRightIconClick}
          />
        </div>
      )}
    </div>
  );
}

export default Input;

"use client"
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

type Variant = "headerInput" | "section";

// const Input_Variant = {
//   headerInput:
//     "w-[350px] h-[39px] border border-gray-300 rounded-md pl-10 pr-10",
//   section: "w-full border border-gray-300 rounded-md px-3 py-2",
// };

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
    <div  className="flex relative justify-center w-[350px] h-[39px] border border-black-400 rounded-lg">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 ">
        <ButtonIcon
          icon={leftIcon || ""}
          width={24}
          height={24}
          variant="headerNavBtn"
          onClick={onLeftIconClick}
        />
      </div>
      <input
        type="text"
        className="bg-yellow-400 w-[250px] text-gray-900 text-md  p-2.5  "
        {...rest}
      />
      <div className="absolute inset-y-0 end-0 flex items-center pe-3.5 ">
        <ButtonIcon
          icon={rightIcon || ""}
          width={24}
          height={24}
          variant="headerNavBtn"
          onClick={onRightIconClick}
        />
      </div>
    </div>
  );
}

export default Input;

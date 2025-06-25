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

const Input_Variant = {
  headerInput:
    "w-[350px] h-[39px] border border-gray-300 rounded-md pl-10 pr-10",
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
    <div className="relative w-full">
      {/* Левая иконка */}
      {leftIcon && (
        <div className="absolute inset-y-0 left-0 flex items-center pl-2">
          <ButtonIcon
            width={24}
            height={24}
            variant="headerNavBtn"
            icon={leftIcon}
            onClick={onLeftIconClick}
            title={altLeftIcon}
          />
        </div>
      )}

      {/* Input */}
      <input
        {...rest}
        className={`${Input_Variant[variant]}`}
      />

      {/* Правая иконка */}
      {rightIcon && (
        <div className="absolute inset-y-0 right-0 flex items-center pr-2">
          <ButtonIcon
            width={24}
            height={24}
            variant="headerNavBtn"
            icon={rightIcon}
            onClick={onRightIconClick}
            title={altRightIcon}
          />
        </div>
      )}
    </div>
  );
}

export default Input;

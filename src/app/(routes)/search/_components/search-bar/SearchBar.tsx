"use client";

import ButtonVector from "@/components/button/button-vector/ButtonVector";
import ButtonIcon from "@/components/button/buttonIcon/ButtonIcon";
import Input, { IInput } from "@/components/input/Input";

interface ISearchInput extends IInput {
  onLeftIconClick?: () => void;
  onRightIconClick?: () => void;
  onSubmit?: () => void;
}

export default function SearchBar({
  onLeftIconClick,
  onRightIconClick,
  onSubmit,
  ...rest
}: ISearchInput) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.();
  };

  return (
    <form
      className="relative flex w-full h-[59px] items-center  border-2 border-[#fc0] focus-within:border-3 focus-within:border-black rounded-[10px] px-3 py-2"
      onSubmit={handleSubmit}
    >
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 ">
        <ButtonIcon
          icon="/searchLogo.png"
          width={24}
          height={24}
          variant="headerNavBtn"
          onClick={onLeftIconClick}
          alt="Поиск"
        />
      </div>

      <Input className="px-[32px] " {...rest} />

      <div className="hidden lg:absolute lg:inset-y-0 lg:end-0 lg:flex lg:items-center lg:pe-3 lg:my-0">
        <ButtonVector as="span" variant="mediumVector" text="Поиск" />
      </div>
    </form>
  );
}

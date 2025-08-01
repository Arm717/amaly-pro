import Image from "next/image";
import React from "react";
import clsx from "clsx";
import Title from "../Title";

type ITitle = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface ITitleImageProps {
  as: ITitle;
  value: string;
  src: string;
  width: number;
  height: number;
  imageWidth?: number;
  imageHeight?: number;
  alt: string;
  repeat?: boolean;
  reverse?: boolean;
  className?: string;
}

const TitleImage = ({
  as,
  value,
  src,
  width,
  height,
  imageWidth,
  imageHeight,
  alt,
  repeat = false,
  reverse = false,
  className = "",
}: ITitleImageProps) => {
  const imgW = imageWidth ?? width;
  const imgH = imageHeight ?? height;

  const imageSizeClass = clsx(
    "w-[130px] h-[64px]",
    "xsm:w-[130px] xsm:h-[60px]",
    "sm:w-[130px] ",
    "md:w-[200px] ",
    "lg:w-auto lg:h-[102px]",
    "max-w-[166px] lg:max-w-[200px]"
  );

  const reverseImageSizeClass = clsx(
    reverse && [
      "w-[50px]",
      "xsm:w-[50px]",
      "lg:w-[90px]",
      "xl:w-[110px]",
      "",
      reverse && repeat && "scale-90",
    ]
  );

  return (
    <div
      className={clsx(
        "relative flex items-center justify-center font-firaGo",
        "h-[100px] xsm:h-[120px] sm:h-[140px] md:h-[160px]",
        className
      )}
    >
      <div className={clsx("flex shrink-0", reverse && "")}>
        <Image
          className={clsx(
            `filter grayscale object-contain ${reverse && ""}`,
            imageSizeClass,
            reverseImageSizeClass
          )}
          src={src}
          width={imgW / (repeat ? 2 : 1)}
          height={imgH}
          alt={alt}
        />
        {repeat && (
          <Image
            className={clsx(
              "filter grayscale object-contain",
              imageSizeClass,
              reverseImageSizeClass,
              reverse && "scale-x-[-1] "
            )}
            src={src}
            width={imgW / 2}
            height={imgH}
            alt={alt}
          />
        )}
      </div>

      <div>
        <Title
          className={clsx(
            "absolute inset-0 flex justify-center items-center text-center",
            reverse
              ? "text-lg xsm:text-lg sm:text-xl md:text-xl lg:text-3xl"
              : repeat
              ? "text-lg md:text-xl lg:text-2xl"
              : "text-xl md:text-2xl lg:text-3xl"
          )}
          as={as}
          value={value}
        />
      </div>
    </div>
  );
};

export default TitleImage;

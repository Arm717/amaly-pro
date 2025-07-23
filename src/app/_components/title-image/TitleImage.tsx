import Image from "next/image";
import React from "react";
import Title from "../title/Title";
import clsx from "clsx";


type ITitle = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface ITitleImageProps {
  as: ITitle;
  value: string;
  src: string;
  width: number;
  height: number;
  imageWidth?: number;
  imageHeight?: number;
  alt?: string;
  repeat?: boolean;
  reverse?: boolean;
  className?: string;         // Контейнер (внешний <div>)
  imageClassName?: string;    // Каждое изображение
  titleClassName?: string;    // Текст (absolute центр)
}

const TitleImage = ({
  as,
  value,
  src,
  width,
  height,
  imageWidth,
  imageHeight,
  alt = "",
  repeat = false,
  reverse = false,
  className = "",
  imageClassName = "",
  titleClassName = "",
}: ITitleImageProps) => {
  const imgW = imageWidth ?? width;
  const imgH = imageHeight ?? height;

  return (
    <div
      className={clsx(
        "relative flex items-center justify-center font-firaGo",
        className
      )}
      
    >
      {/* Слой с картинками */}
      <div className={clsx("flex", repeat && "gap-2")}>
        <Image
          className={clsx("filter grayscale", imageClassName)}
          src={src}
          width={imgW / (repeat ? 2 : 1)}
          height={imgH}
          alt={alt}
        />
        {repeat && (
          <Image
            className={clsx(
              "filter grayscale",
              imageClassName,
              reverse && "scale-x-[-1]"
            )}
            src={src}
            width={imgW / 2}
            height={imgH}
            alt={alt}
          />
        )}
      </div>

      {/* Текст по центру */}
      <div
        className={clsx(
          "absolute inset-0 flex justify-center items-center text-center",
          titleClassName
        )}
      >
        <Title className={titleClassName} as={as} value={value} />
      </div>
    </div>
  );
};

export default TitleImage;

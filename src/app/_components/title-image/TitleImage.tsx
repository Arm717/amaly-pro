import Image from "next/image";
import React from "react";
import Title from "../title/Title";

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
}

function TitleImage({
  as,
  value,
  src,
  width,
  height,
  imageWidth,
  imageHeight,
  alt,
  repeat,
  reverse
}: ITitleImageProps) {
  const imgW = imageWidth ?? width;
  const imgH = imageHeight ?? height;

  return (
    <div
      className="relative flex items-center justify-center font-firaGo"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      {/* Слой с картинками */}
      <div className={`flex ${repeat ? "gap-2" : ""}`}>
        <Image
          className="filter grayscale"
          src={src}
          width={imgW / (repeat ? 2 : 1)}
          height={imgH}
          alt={alt || ""}
        />
        {repeat && (
          <Image
            className={`filter grayscale ${reverse? 'scale-x-[-1]':''}`}
            src={src}
            width={imgW / 2}
            height={imgH}
            alt={alt || ""}
          />
        )}
      </div>

      {/* Текст по центру */}
      <div className="absolute inset-0 flex justify-center items-center text-center ">
        <Title as={as} value={value} />
      </div>
    </div>
  );
}

export default TitleImage;

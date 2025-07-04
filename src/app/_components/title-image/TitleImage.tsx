import Image from 'next/image';
import React from 'react';
import Title from '../title/Title';

type ITitle = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface ITitleImageProps {
  as: ITitle;
  value: string;
  src: string;
  width: number;
  height: number;
  alt?: string;
  repeat?: boolean;
}

function TitleImage({ as, value, src, width, height, alt, repeat }: ITitleImageProps) {
  return (
    <div
      className="relative flex justify-center items-center font-firaGo"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      {/* Картинка по центру */}
      <Image
        className="absolute top-1/2 left-[55%] -translate-x-1/2 -translate-y-1/2 filter grayscale"
        src={src}
        width={width}
        height={height}
        alt={alt || ''}
      />

      {repeat && (
        <Image
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          src={src}
          width={width}
          height={height}
          alt={alt || ''}
        />
      )}

      {/* Текст точно по центру */}
      <div className="absolute inset-0 flex justify-center items-center text-center">
        <Title as={as} value={value} />
      </div>
    </div>
  );
}

export default TitleImage;

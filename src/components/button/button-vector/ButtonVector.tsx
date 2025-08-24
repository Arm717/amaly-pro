import Image from 'next/image';
import React, { ButtonHTMLAttributes } from 'react';
import Text from '../../text/Text';
import { useRouter } from 'next/navigation'; 

type Itext = 'p' | 'span';

type VectorType = 'smallVector' | 'mediumVector' | 'bigVector' | 'smallFormVector' | 'bigFormVector';

interface IButtonvector extends ButtonHTMLAttributes<HTMLButtonElement> {
  as: Itext;
  variant: VectorType;
  text: string;
  path?: string;
}

const buttonVectorVariant = {
  smallVector: {
    src: '/smallVector.png',
    size: { width: 22, height: 16 },
    styles: 'w-[22px] h-[16px]',
    textSize: 'text-sm',
    alt: 'small vector',
  },
  mediumVector:{
     src: '/mediumVevtor.png',
    size: { width: 89, height: 31 },
    styles: 'w-[89px] h-[31px]',
    textSize: 'text-sm',
    alt: 'medium vector',
  },
  bigVector: {
    src: '/bigVector.png',
    size: { width: 131, height: 32 },
    styles: 'w-[131px] h-[32px]',
    textSize: 'text-sm',
    alt: 'big vector',
  },
  smallFormVector: {
    src: '/bigVector.png',
    size: { width: 188, height: 32 },
    styles: 'w-[188px] h-[32px]',
    textSize: 'text-sm',
    alt: 'small form vector',
  },
  bigFormVector: {
    src: '/bigVector.png',
    size: { width: 194, height: 42 },
    styles: 'w-[194px] h-[42px]',
    textSize: 'text-base font-semibold',
    alt: 'big form vector',
  },

};

function ButtonVector({
  as,
  variant,
  text,
  path ,
  ...rest
}: IButtonvector) {
  const router = useRouter(); 

  const handleClick = () => {
    if (!path) return; 
    router.push(path); 
  };

  return (
    <button
      onClick={handleClick}
      {...rest}
      className={`flex relative w-max ${buttonVectorVariant[variant].styles}`}
    >
      <Image
        src={buttonVectorVariant[variant].src}
        width={buttonVectorVariant[variant].size.width}
        height={buttonVectorVariant[variant].size.height}
        alt={buttonVectorVariant[variant].alt}
      />

      {text && (
        <Text
          as={as}
          value={text}
          className={`absolute inset-0 flex  items-center justify-center ${buttonVectorVariant[variant].textSize}`}
        />
      )}
    </button>
  );
}

export default ButtonVector;
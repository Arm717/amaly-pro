import Image from 'next/image'
import React from 'react'
import Text from '../Text'
import Link from 'next/link';

type Itext = "p" | "span";

type VectorType = 'smallVector' | 'bigVector';

interface IVectorImage {
  as: Itext;
  variant: VectorType;
  text: string;
  href:string;
}

const vectorImageVariant = {
  smallVector: {
    src: "/smallVector.png",
    size: { width: 22, height: 16 },
    styles:
      "w-[22px] h-[16px] ",
    textSize: "text-sm",
    alt: "small vector",
  },
  bigVector: {
    src: "/bigVector.png",
    size: { width: 131, height: 32 },
    styles:
      "w-[131px] h-[32px]",
    textSize: "text-sm",
    alt: "big vector",
  }
}

function VectorImage({
    as,
    variant,
    text,
    href
} : IVectorImage) {
  return (
    <Link href={href} className={`flex relative w-max ${vectorImageVariant[variant].styles}`}>
      <Image
        src={vectorImageVariant[variant].src}
        width={vectorImageVariant[variant].size.width}
        height={vectorImageVariant[variant].size.height}
        alt={vectorImageVariant[variant].alt}
      />
      
      {text && <Text as={as} value={text} className={`absolute inset-0 flex items-center justify-center ${vectorImageVariant[variant].textSize}`} />}
    </Link>
  )
}

export default VectorImage
import React from 'react'
import Button, { IButton } from '../Button'
import { StaticImageData } from 'next/image';
import Image from 'next/image'
import Text from '../../text/Text';

interface ButtonIconProps extends IButton{
     icon:  StaticImageData | string;
     title?: string ;
     width: number;
     height: number;
}

function ButtonIcon({icon, title, width, height, onClick}:ButtonIconProps) {
  return (
        <Button onClick={onClick} variant='headerNavBtn' >
            {title && <Text as='span' value={title} />} 
            <Image  src={icon} alt="" width={width} height={height} unoptimized={typeof icon === "string"} />
        </Button>
    
  )
}

export default ButtonIcon
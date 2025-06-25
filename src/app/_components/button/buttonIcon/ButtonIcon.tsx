import React from 'react'
import Button, { IButton } from '../Button'
import { StaticImageData } from 'next/image';
import Image from 'next/image'
import styles from './buttonIcon.module.css'

interface ButtonIconProps extends IButton{
     icon:  StaticImageData | string;
}

function ButtonIcon({icon}:ButtonIconProps) {
  return (
        <Button variant='icon'>
            <Image className={styles.buttonIcon} src={icon} alt="" width={40} height={40} />
        </Button>
    
  )
}

export default ButtonIcon
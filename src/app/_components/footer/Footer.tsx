"use server";
import { allCategory } from '@/app/services/allCategory';
import Image from 'next/image'
import React from 'react'
import FooterContent from './footer-content/FooterContent';

async function Footer() {
  const category = await allCategory();
  
  return (
    <div className="flex items-end justify-center w-full  box-border  bg-[url(/footer.png)]  bg-[length:100%_100%] bg-center bg-no-repeat xsm:h-[658px] xl:h-[378px]">
      <div className="flex flex-col xl:flex-row items-center w-[1480px]  xsm:h-[600px] xl:h-[300px]">

        <Image className='lg:mr-[10px] 2xl:mr-[52px]' width={161} height={289} src="/logo.png" alt='footerLogo' />
        <FooterContent category={category} />
      </div>
    </div>
  )
}

export default Footer
import React from 'react';

import Image from 'next/image';

import Text from '../text/Text';
import HeaderNav from './header-nav/HeaderNav';
import { allCategory } from '@/app/services/allCategory';

async function Header() {
  const category = await allCategory();
  
  return (
    <header className='  flex w-full h-[71px] justify-center bg-yellow-400'>
      <div className='relative flex h-full w-[1780px] justify-between'>
        <div className='absolute top-[-20px] left-[0]'>
          <Image src='/headerLogo.png' width={127} height={213} alt='logo' />
        </div>

        <div className='flex w-[127px]'>.</div>

        <HeaderNav category={category} />

        <div className='flex items-center gap-10'>
          <Image src='/searchLogo.png' width={24} height={24} alt='serch' />
          <Text className='text-white text-xl font-bold' as='span' value='8 992-225-55-12' />
        </div>

      </div>
    </header>
  );
}

export default Header;

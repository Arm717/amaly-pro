'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import Button from '../../button/Button';
import { IAllCategory } from './types';

interface ICategorys {
  category: IAllCategory;
}

function HeaderNav({ category }: ICategorys) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='flex relative items-center justify-center '>
      <nav className='flex gap-6 w-[225px]'>
        <Link className='' href='/1'>
          О нас
        </Link>

        <Button variant='headerNavBtn' onClick={() => setMenuOpen((prev) => !prev)}>
          Меню
        </Button>

        <Link href='/3'>Контакты</Link>
      </nav>
      {menuOpen && (
        <div className='absolute top-[50px] left-[50px] bg-white border-2 border-yellow-400 rounded  w-[260px]  z-50'>
          <ul className=' text-sm text-[#A4A4A4]'>
            {category.map((item) => (
              <li className='px-4 py-1' key={item.id}>
                <Link href='/' className='block '>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default HeaderNav;

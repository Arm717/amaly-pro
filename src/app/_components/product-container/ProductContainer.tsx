import { useProductContext } from '@/app/context/useContext';
import React from 'react'

function ProductContainer() {
  const { categorie } = useProductContext();
  return (
    <div className='flex w-full h-[421px] items-center justify-between border border-black mb-[20px]'>
        <div className='w-[213px] h-[238px] border border-black'>

        </div>
        <div className='w-[1020px] h-[398px] border border-black'>

        </div>
    </div>
  )
}

export default ProductContainer
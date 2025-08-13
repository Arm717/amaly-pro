import Text from '@/app/_components/text/Text'
import Title from '@/app/_components/title/Title'
import { IProductsItem } from '@/app/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function SingleProductCard({product}: {product: IProductsItem }) {
  return (
    <Link href={`/product?id=${product.id}`}>
        <div className="rounded-[10px] border-2 border-[#fc0] w-full p-[6px] grid gap-[6px] [grid-template-columns:2fr_3fr]">
            <Image className='object-cover w-full h-full' src={`https://api.amalys.pro/storage/product/${product.image}`} width={142} height={97} alt='card' />
            <div>
                <Title as='h5' className='text-[14px] mb-[6px]' value={product.name} />
                <Text as='span' fontSize='sm' className='text-[12px] line-clamp-3' value={product.text} />
                <div className='flex justify-between'>
                    <Text as='span' className='text-[12px] text-[var(--grey)]' value={`${product.weight}г./${product.calories}ккал.`} />
                    <div className='flex items-center'>
                      <Text as='span' className='text-[var(--yellow)]' value={product.price} />
                      <Image
                        className="mt-[2px] yellow-filter"
                        width={12}
                        height={12}
                        src="/rub.svg"
                        alt="rub"
                      />

                    </div>
                    
                </div>
            </div>
        </div>  

    </Link>
  )
}

export default SingleProductCard
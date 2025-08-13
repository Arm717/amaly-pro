import Text from '@/app/_components/text/Text'
import Title from '@/app/_components/title/Title'
import { IProductsItem } from '@/app/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function SingleProductCard({ product }: { product: IProductsItem }) {
  return (
    <Link href={`/product?id=${product.id}`}>
      <div className="w-full lxl:w-[350px] min-h-[109px] font-firaGo rounded-[10px] border-2 border-[#fc0] p-[6px] grid gap-[6px] grid-cols-[auto_1fr]">
  
  {/* Картинка */}
  <Image
    className="object-cover w-[142px] h-[97px] flex-shrink-0"
    src={`https://api.amalys.pro/storage/product/${product.image}`}
    width={142}
    height={97}
    alt="card"
  />

  {/* Контент */}
  <div className="min-w-0 flex flex-col">
    <Title
      as="h5"
      className="text-[14px] mb-[6px] font-medium leading-[14px] line-clamp-2"
      value={product.name}
    />
    <Text
      as="span"
      fontSize="sm"
      className="!text-[12px] leading-[15px] line-clamp-3"
      value={product.text}
    />
    
    <div className="flex justify-between items-end mt-auto">
      <Text
        as="span"
        className="!text-[12px] text-[var(--grey)]"
        value={`${product.weight}г./${product.calories}ккал.`}
      />
      <div className="flex items-center">
        <Text
          as="span"
          className="text-[var(--yellow)] !text-[12px]"
          value={product.price}
        />
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

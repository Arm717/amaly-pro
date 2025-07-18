import LinkImage from '@/app/_components/link-image/LinkImage'
import TitleImage from '@/app/_components/title-image/TitleImage'
import { ICategory } from '@/app/types'
import React from 'react'

interface IProductCategory {
    productCategory:ICategory
}

function ProductCategory({productCategory}:IProductCategory) {
  return (
    <div className="flex flex-col items-center justify-center gap-[10px] w-[213px] h-[281px] border border-black">
    <LinkImage width={213} height={200} url="" variant='img' icon={`https://api.amalys.pro/storage/category/${productCategory.image}`} />
    <TitleImage width={213} height={39} imageWidth={200} imageHeight={100} as='h3' src='/clipGroup.png' value={productCategory.name} repeat reverse/>
  </div>
  )
}

export default ProductCategory
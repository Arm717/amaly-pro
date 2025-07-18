import { IProductsItem } from '@/app/types'
import React from 'react'

interface IProductCard {
  product: IProductsItem
}

function ProductCard({product}:IProductCard) {
  return (
    
        <div className='flex flex-col w-[330px] h-[421px] border-2 rounded-[20px] border-[var(--yellow)]'>
            
        </div>
    
  )
}

export default ProductCard
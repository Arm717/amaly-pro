
import { IProductsItem } from '@/types/types';
import React from 'react'
import SingleProductCard from './SingleProductCard';
import Title from '@/components/title/Title';

function SingleSectionRight({singleRelatedProducts}: {
  singleRelatedProducts: IProductsItem[]; }) {
  return (
    <div className='font-firaGo'>
        <Title as="h2" className='text-[var(--yellow)] text-[24px] lg:text-[32px]' value="Похожее:" />

        <div className='grid mt-6 gap-[24px]'>
            {singleRelatedProducts.map((product) => (
                <div key={product.id} >
                    <SingleProductCard product={product} />
                </div>
            ))}
        </div>
    </div>
  )
}

export default SingleSectionRight
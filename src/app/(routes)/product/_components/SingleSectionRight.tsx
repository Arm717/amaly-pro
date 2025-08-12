import Title from '@/app/_components/title/Title'
import { IProductsItem } from '@/app/types';
import React from 'react'
import SingleProductCard from './SingleProductCard';

function SingleSectionRight({singleRelatedProducts}: {
  singleRelatedProducts: IProductsItem[]; }) {
  return (
    <div>
        <Title as="h2" className='text-[var(--yellow)]' value="Похожее:" />

        <div className='grid mt-6 gap-[30px]'>
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
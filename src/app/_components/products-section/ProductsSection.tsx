import React from 'react'
import TitleImage from '../title-image/TitleImage'

function ProductsSection() {
  return (
    <>
    <div className='flex justify-center'>
        <TitleImage
          as="h2"
          src="/maskGroup.png"
          value="Рекомендуемые продукты"
          repeat
          width={249}
          height={97}
        />
    </div>
    </>
    
  )
}

export default ProductsSection
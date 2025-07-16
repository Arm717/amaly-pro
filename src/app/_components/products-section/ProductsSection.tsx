import React from "react";
import TitleImage from "../title-image/TitleImage";
import ProductContainer from "../product-container/ProductContainer";



function ProductsSection() {
  
  return (
    <>
      <div className="flex flex-col justify-center">
        <div className="flex justify-center mb-[40px]">
            <TitleImage
          as="h1"
          src="/maskGroup.png"
          value="Рекомендуемые продукты"
          repeat
          width={495}
          height={102}
          imageWidth={490}
          imageHeight={300}
        />
        </div>
        
        <ProductContainer  />
        
      </div>
    </>
  );
}

export default ProductsSection;

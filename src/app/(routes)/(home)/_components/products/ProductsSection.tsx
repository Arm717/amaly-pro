"use client"
import React from "react";
import ProductList from "./ProductList";

import { IHome } from "@/types/types";
import TitleImage from "@/components/title/title-image/TitleImage";
import ButtonVector from "@/components/button/button-vector/ButtonVector";

function ProductsSection({ homeData }:IHome) {
  
  return (
    <>
      <div className="flex flex-col justify-center bg-white">
        <div className="flex justify-center mb-[40px]">
          <TitleImage
            as="h1"
            cloudVariant="twoCloud"
            value="Рекомендуемые продукты"
          />
        </div>

        {homeData.category.map((item) => (
          <ProductList key={item.id} productData={item} />
        ))}
        
        <div className="flex justify-center">
          <ButtonVector as="span"  text="Смотреть все" variant="bigVector"  path="/category" />
        </div>
      </div>
    </>
  );
}

export default ProductsSection;



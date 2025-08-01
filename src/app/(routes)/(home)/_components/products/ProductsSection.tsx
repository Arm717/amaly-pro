"use client"
import React from "react";
import ProductList from "./ProductList";
import TitleImage from "@/app/_components/title/title-image/TitleImage";
import { useProductContext } from "@/app/context/useProductContext";

function ProductsSection() {

  const { homeData } = useProductContext();
  
  
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
      </div>
    </>
  );
}

export default ProductsSection;



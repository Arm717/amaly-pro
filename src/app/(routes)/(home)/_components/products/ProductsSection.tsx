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
            src="/maskGroup.png"
            value="Рекомендуемые продукты"
            repeat
            width={495}
            height={102}
            imageWidth={490}
            imageHeight={300}
            className="
            w-[273px]
            h-[64px]
            xsm:w-[273px]
            xsm:h-[64px]
            lg:w-[495px]
            lg:h-[102px]
            "
            titleClassName="xsm:text-lg lg:text-3xl"
            imageClassName="
            w-[150px]
            h-[64px]
            xsm:w-[150px]
            xsm:h-[64px]
            lg:w-[250px]
            lg:h-[100px]
            "
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

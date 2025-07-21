import React from "react";
import TitleImage from "../../../../_components/title-image/TitleImage";
import ProductList from "./ProductList";
import { ICategory } from "@/app/types";

interface IProductsSection {
  category: ICategory[];
}

function ProductsSection({ category }: IProductsSection) {
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
          />
        </div>

        {category.map((item) => (
          <ProductList key={item.id} productData={item} />
        ))}
      </div>
    </>
  );
}

export default ProductsSection;

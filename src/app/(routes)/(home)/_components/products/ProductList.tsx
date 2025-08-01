import { ICategory } from "@/app/types";
import React from "react";
import ProductCategory from "./ProductCategory";
import ProductCard from "./ProductCard";

interface IProductList {
  productData: ICategory;
}

function ProductList({ productData }: IProductList) {
  const filteredProducts = productData.products
    .filter((item) => item.category_id === productData.id)
    .slice(0, 3);

  return (
    <div className="grid grid-cols-4 items-center h-[421px] mb-5 bg-white xsm:h-[431px] xsm:mx-4 2xxl:mx-0 border border-black">
      {/* Левая колонка — занимает 1/3 на lg и выше */}
      <div className="bg-white col-span-1 mr-2 xsm:mr-2 lg:mr-[116px]">
        <ProductCategory productCategory={productData} />
      </div>

      {/* Правая часть — занимает 2/3 на lg и выше */}
      <div className="col-span-3 overflow-x-auto w-full lg:overflow-visible mr-2 grid grid-cols-3 xl:gap-6 gap-3 h-full">
        {filteredProducts.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 xsm:max-w-[249px] md:max-w-[300px] lg:max-w-full lg:w-full lg:min-w-0"
          >
            <ProductCard product={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;

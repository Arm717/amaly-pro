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
    <div className="flex h-[400px]  mb-5 bg-white   xsm:mx-4 2xxl:mx-0 border border-black md:h-[421px]">
      {/* Левый блок — не скроллится */}
      <div className=" flex items-center  bg-white shrink-0 mr-[30px] md:mr-[12px] lg:mr-[22px] sxl:mr-[117px]">
        <ProductCategory productCategory={productData} />
      </div>

      {/* Правый блок — скроллится по x при малых экранах */}
      <div className="overflow-x-auto w-full lg:overflow-visible mr-0 lg:mr-2 ">
        <div
          className="
                      flex gap-3 h-full 
                      lg:grid lg:grid-cols-3 xl:gap-6 
                    "
        >
          {filteredProducts.map((item) => (
            <div className="min-w-[200px] md:w-full" key={item.id}>
              <ProductCard product={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;

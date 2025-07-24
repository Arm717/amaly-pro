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
    <div className="flex h-[450px]  mb-5 bg-white justify-between  xsm:mx-4 2xxl:mx-0">
      {/* Левый блок — не скроллится */}
      <div className=" flex items-center  bg-white shrink-0">
        <ProductCategory productCategory={productData} />
      </div>

      {/* Правый блок — скроллится по x при малых экранах */}
      <div className="overflow-auto lg:overflow-hidden flex">
        <div
          className="
            flex  w-max  py-2 h-full items-center
              xsm:w-[221px] xsm:gap-[10px] md:w-[583px] lg:w-[810px]  xl:w-[1050px]  xl:gap-[20px] xl:px-4
          "
        >
          {filteredProducts.map((item) => (
            <div key={item.id}>
              <ProductCard product={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;

{
  /* <div className="flex h-[450px] border border-black mb-[20px] bg-white">
      
      <div className="w-[213px] shrink-0 flex items-center justify-center">
        <ProductCategory productCategory={productData} />
      </div>

     
      <div className="flex-1 h-full overflow-x-auto">
        <div className="flex gap-[20px] w-max h-full px-4 items-center">
          {productData.products.map((item, index) => {
            if (productData.id === item.category_id && index <= 2) {
              return <ProductCard key={item.id} product={item} />;
            }
            return null;
          })}
        </div>
      </div>
    </div> */
}
